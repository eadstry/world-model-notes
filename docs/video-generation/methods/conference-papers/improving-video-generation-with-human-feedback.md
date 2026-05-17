---
title: "Improving Video Generation with Human Feedback"
arxiv: https://arxiv.org/abs/2501.13918
github: https://github.com/KlingAIResearch/VideoAlign
website: https://gongyeliu.github.io/videoalign/
venue: NeurIPS
year: 2025
---

# Improving Video Generation with Human Feedback

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2501.13918](https://arxiv.org/abs/2501.13918)
- **Project**: [https://gongyeliu.github.io/videoalign/](https://gongyeliu.github.io/videoalign/)
- **GitHub**: [https://github.com/KlingAIResearch/VideoAlign](https://github.com/KlingAIResearch/VideoAlign)
- **VideoReward**: [https://huggingface.co/KwaiVGI/VideoReward](https://huggingface.co/KwaiVGI/VideoReward)
- **VideoGen-RewardBench**: [https://huggingface.co/datasets/KwaiVGI/VideoGen-RewardBench](https://huggingface.co/datasets/KwaiVGI/VideoGen-RewardBench)
:::

## 一句话总结

VideoAlign 是一套面向现代文本生成视频模型的 RLHF 管线: 先用 12 个视频生成模型构造大规模多维人类偏好数据, 训练多维视频奖励模型 VideoReward, 再把奖励信号用于 flow-based 视频生成模型的训练期对齐和推理期引导。它的关键不只是提出一个 reward model, 而是系统回答了三个问题: 现代视频奖励数据应该怎么收集, 多维视频奖励模型应该怎么训练, 以及 DPO/RWR/Reward Guidance 如何适配 rectified flow 视频模型。

## 研究动机

当前视频生成模型已经明显受益于 rectified flow 和大规模训练, 但仍有三类稳定问题:

- **运动质量不足**: 人物、物体和镜头运动会出现不自然、跳变、局部崩坏、动态幅度不足。
- **文本对齐不足**: prompt 中的主体、动作、环境、风格和镜头运动经常只被部分满足。
- **人类偏好对齐不足**: 自动指标和老旧偏好数据不能充分刻画用户对现代高质量视频的偏好。

论文指出旧的视频偏好数据多来自 pre-Sora-era 模型, 这些模型常见低分辨率、短时长和明显伪影。用这些数据训练的 reward model 容易过度关注旧模型的低级瑕疵, 对现代模型中的细节质量、长程运动和复杂语义区分不够敏感。因此 VideoAlign 重新构造了面向现代 T2V 模型的数据、奖励模型和对齐算法。

## 整体框架

VideoAlign 分成三层:

1. **Human Preference Annotation**: 从多源 prompt 和 12 个 T2V 模型生成视频, 形成 prompt-video-video triplet, 对每个 pair 分别标注 VQ/MQ/TA 偏好。
2. **Reward Modeling**: 用 Qwen2-VL-2B 作为 backbone, 训练多维 VideoReward, 输出 Visual Quality、Motion Quality、Text Alignment 三个 reward。
3. **Video Alignment**: 在 KL 正则化的 reward maximization 视角下, 给 flow-based video diffusion model 设计 Flow-DPO、Flow-RWR 和 Flow-NRG。

论文的贡献可以概括为:

- 构建 **182k** 规模的多维人类偏好训练集, 覆盖 **16k prompts、108k videos、12 个现代/准现代 T2V 模型**。
- 提出并系统消融 **VideoReward**, 一个多维 VLM-based reward model。
- 构建 **VideoGen-RewardBench**, 用 **26.5k** pairwise annotations 评估现代视频奖励模型。
- 把 preference optimization 系统适配到 rectified flow 视频生成模型, 其中 **固定 KL 权重的 Flow-DPO** 是训练期最有效方案。

## 偏好数据构造

### Prompt 和视频来源

论文先从互联网收集多样 prompt, 按 8 个 meta categories 分类: animal、architecture、food、people、plants、scenes、vehicles、objects。随后用 GPT-4o 扩展, 去除重复、无关和不安全样本, 再用内部 prompt rewriter 精炼, 得到 **16,000** 个高质量 prompt。

视频由 12 个 T2V 模型生成, 包括 Gen2、SVD、Pika 1.0、Vega、PixVerse v1、HiDream、Dreamina、Luma、Gen3、Kling 1.0、PixVerse v2、Kling 1.5。最终得到 **108k videos** 和 **182k annotated triplets**。每个 triplet 是同一 prompt 下两个不同模型生成的视频。

### 标注维度

标注员对每个 pair 同时给出三类 pairwise preference:

| 维度 | 含义 | 典型关注点 |
| --- | --- | --- |
| VQ, Visual Quality | 静态视觉质量 | 清晰度、分辨率、光照、细节、审美、单帧合理性、安全性 |
| MQ, Motion Quality | 动态运动质量 | 时序稳定性、物理自然性、运动平滑度、动态幅度、主体和背景融合 |
| TA, Text Alignment | 文本视频对齐 | 主体、数量、动作、环境、风格、镜头运动是否符合 prompt |

每个维度的 label 是 `A wins / Tie / B wins`。同一批标注员还给单个视频打 1 到 5 的 Likert 分, 让论文可以直接比较 pointwise regression 和 pairwise preference learning。论文保留 **13k prompts-disjoint triplets** 作为验证集。

## VideoReward

### 为什么用 pairwise Bradley-Terry 而不是 score regression

VideoReward 的基础问题是: 给定同一个 prompt 下的视频 A/B, 模型是否能预测人类偏好。论文比较了两类训练范式:

- **Score regression**: 直接预测每个视频的绝对质量分, 用 MSE 拟合 Likert 分。
- **Bradley-Terry preference learning**: 预测两个视频 reward 的相对差异, 用 pairwise preference 训练。

实验发现数据规模增加时两者都会提升, 但 BT consistently stronger。原因是视频质量常常是相对判断: 两个视频可能绝对分相同, 但人仍能分辨细节、运动或语义上的微弱优劣。pairwise 标注比 pointwise 分数更适合捕捉这种细粒度偏好。

### 为什么 ties 很重要

普通 BT 只处理 chosen/rejected, 会把所有 pair 强行拉开。视频偏好里大量样本本来就是难分胜负, 如果忽略 tie, reward model 会学到过强的虚假差异, 下游 RL 更容易 reward hacking。

论文采用 **Bradley-Terry model with ties, BTT**:

- 对非 tie pair, 仍鼓励 preferred video reward 高于 rejected video。
- 对 tie pair, 不强行制造胜负, 而是鼓励两个 reward 接近。
- 代码中 `trainer.py` 的 `loss_type == "btt"` 使用 `k = 5.0`, 非 tie loss 是带 `log(k)` margin 的 BT loss, tie loss 同时约束两个方向, 让 reward difference 聚集到 0 附近。

### 多维 reward 输出

VideoReward 以 **Qwen2-VL-2B-Instruct** 为 backbone。模型结构在开源代码中通过 `Qwen2VLRewardModelBT` 实现:

- 继承 `Qwen2VLForConditionalGeneration`。
- 去掉文本生成目标, 在 hidden states 上接 `rm_head = Linear(hidden_size, output_dim)`。
- `output_dim` 通常对应 `VQ/MQ/TA` 三个维度。
- reward pooling 支持 `last`、`mean`、`special` 三种方式。
- special-token 模式会加入 `<|VQ_reward|>`、`<|MQ_reward|>`、`<|TA_reward|>`, 分别从三个位置读出对应维度 reward。

这解释了论文中 “token positioning” 消融的实际含义: reward 不是必须从最后一个 token 抽取, 可以用显式 reward token 把三个属性的监督位置解耦。

### Prompt template

开源 `prompt_template.py` 提供多种输入模板:

- `none`: 直接使用原始 prompt。
- `simple`: 简短说明当前维度和 prompt。
- `video_score`: 类似 VideoScore 的打分提示。
- `detailed`: 用完整 rubrics 描述 VQ/MQ/TA。
- `detailed_special`: 在 rubrics 中插入 `<|VQ_reward|>`、`<|MQ_reward|>`、`<|TA_reward|>` 三个特殊 token。

`detailed_special` 的 rubrics 与论文维度一致: VQ 看合理性、清晰度、细节、审美、安全; MQ 看稳定性、自然性、平滑性、融合、运动清晰度、幅度; TA 看主体、动作、环境、风格、镜头运动与 prompt 的对应关系。

## VideoGen-RewardBench

论文指出 GenAI-Bench 主要覆盖早期视频模型, 分辨率较低、时长较短, 不足以评估现代 reward model。因此作者基于第三方 **VideoGen-Eval** 构造了 VideoGen-RewardBench。

| Benchmark | #Samples | #Prompts | 模型覆盖 | 视频时长 | 标注数 | 维度 |
| --- | ---: | ---: | --- | --- | ---: | --- |
| GenAI-Bench | 3,784 | 508 | 7 个早期开源模型 + 3 个现代开源模型 | 2s 到 2.5s | 1,891 | 1 |
| VideoGen-RewardBench | 4,923 | 420 | 3 个开源现代模型 + 9 个闭源现代模型 | 4s 到 6s | 26,457 | 4 |

VideoGen-RewardBench 的四个标签是 VQ、MQ、TA 和 Overall。它更适合评估现代 T2V 输出, 因为视频分辨率更高, 质量更接近实际商业模型, pair 之间的差异也更细。

### Reward model 结果

论文同时报告 ties-included 和 ties-excluded accuracy。ties-included 用三分类方式考虑 tie threshold, ties-excluded 只在 A/B 明确胜负的样本上算准确率。

在 VideoGen-RewardBench 上, VideoReward 相比 VideoScore、LiFT、VisionReward 更强:

| 方法 | Overall w/ ties | Overall w/o ties | VQ w/o ties | MQ w/o ties | TA w/o ties |
| --- | ---: | ---: | ---: | ---: | ---: |
| Random | 41.86 | 50.30 | 49.86 | 49.64 | 50.40 |
| VideoScore | 41.80 | 50.22 | 47.72 | 51.09 | 50.34 |
| LiFT | 39.08 | 57.26 | 55.97 | 54.91 | 55.43 |
| VisionReward | 56.77 | 67.59 | 59.03 | 60.98 | 61.15 |
| VideoReward | **61.26** | **73.59** | **75.66** | **74.70** | **72.20** |

关键解读:

- VideoScore 在 GenAI-Bench 上不错, 但在 VideoGen-RewardBench 上退化明显, 说明旧数据对现代视频泛化不足。
- VisionReward 在旧模型和部分现代模型上有竞争力, 但对现代高保真视频的 VQ/MQ 区分不如 VideoReward。
- VideoReward 的优势来自数据分布更新、多维标注、BTT loss 和更适配视频评价的输入设计。

## Flow-based video alignment

### 统一目标

论文把视频对齐放在 KL-regularized reward maximization 框架下:

$$
\max_\pi \mathbb{E}_{x \sim \pi}[r(x)] - \beta D_{\mathrm{KL}}(\pi || \pi_{\mathrm{ref}})
$$

其中 `r(x)` 来自 VideoReward, `pi_ref` 是原始生成模型, `beta` 控制偏离原模型的程度。这个视角可以同时推出 DPO、RWR 和 reward guidance。

### Rectified flow 的适配难点

现代视频模型常用 rectified flow, 模型预测的是 velocity field, 而不是 DDPM 中的 noise 或 score。直接照搬 diffusion-DPO 会引入 timestep-dependent KL weight。论文发现这个权重在 rectified flow 中会导致模型过度关注高噪声阶段, 造成 reward hacking 和视觉伪影。

因此 VideoAlign 的核心修正是: 在 Flow-DPO 中使用 **constant beta** 替代 timestep-dependent beta。

### Flow-DPO

Flow-DPO 把 DPO preference objective 写到 rectified flow 的 velocity prediction 上。直观理解:

- 对 chosen video, 让当前模型预测的 velocity 更接近 chosen 的目标 velocity。
- 对 rejected video, 让当前模型相对远离 rejected 的目标 velocity。
- 约束强度由当前模型和 reference model 的误差差异决定。
- 固定 `beta` 控制模型不要过度偏离原始生成分布。

论文结论非常明确: **constant beta 的 Flow-DPO 是训练期最稳定、最有效的方法**。time-dependent beta 虽然可能让 VQ/MQ reward win rate 很高, 但会明显伤害 TA 并产生 reward hacking。

### Flow-RWR

Flow-RWR 是 reward-weighted regression 在 rectified flow 上的对应形式。它用 VideoReward 给样本加权, reward 更高的视频对 velocity regression 贡献更大。

相比 Flow-DPO:

- 优点: 形式简单, 更像加权 SFT。
- 缺点: 利用 preference 的相对信息不如 DPO 直接, 实验中整体弱于 Flow-DPO。

### Flow-NRG

Flow-NRG 是推理期 reward guidance, 不改生成模型参数。它把 KL 正则化 reward maximization 的闭式解解释为对采样分布的 reward reweighting, 再把这个 reweighting 转化为 noisy latent 上的 guidance。

核心设计:

- 用多维 reward 的线性加权和作为引导目标, 例如 `w_VQ r_VQ + w_MQ r_MQ + w_TA r_TA`。
- 在 denoising / flow sampling 过程中对 noisy video 或 latent 施加 reward gradient。
- 为避免每一步都反传 VAE decoder, 论文训练轻量的 time-dependent latent reward model, 直接在 noisy latent 上给 reward。

Flow-NRG 的价值是个性化: 用户可以在推理时调 VQ/MQ/TA 权重, 不必为不同偏好重新训练模型。例如论文中 TA 权重高时 TA 得分更高, VQ/MQ 权重高时视觉和运动更高, 但 TA 会下降。

## 对齐实验

### 训练设置

论文使用内部 research-purpose video generation model, Transformer 架构, rectified flow 训练。对齐阶段使用 LoRA 微调 Transformer。训练期方法包括:

- SFT: 只用 chosen data。
- Flow-RWR: 用 VideoReward 加权回归。
- Flow-DPO: 用 VideoReward relabel 的偏好数据训练。

为了公平, 作者用 VideoReward 作为 ground-truth reward model 对训练数据重新打标, 使得不同对齐方法都在同一个 reward signal 下比较。

### 多维对齐

当 VQ:MQ:TA = 1:1:1 时, constant beta 的 Flow-DPO 在 VideoGen-Eval 上取得 `VQ/MQ/TA = 90.95/81.01/68.26` 的 reward win rate, 在 TA-Hard 上取得 `77.46/71.43/73.24`。time-dependent beta 的 Flow-DPO 虽然 VQ/MQ 很高, 但 TA 明显崩掉, 例如 VideoGen-Eval TA 只有 `28.14`, 这是典型 reward hacking。

结论:

- Flow-DPO > Flow-RWR > SFT, 尤其在复杂 TA 上。
- 固定 beta 比 time-dependent beta 更稳。
- 多维 reward 需要显式权重和早停, 否则容易牺牲某些维度。

### 单维 TA 对齐

只优化 TA 时, constant beta 的 Flow-DPO 在 TA-Hard 上达到 `84.51` win rate, 明显高于 SFT 的 `64.79` 和 Flow-RWR 的 `66.20`。这说明 TA 不是简单靠更好画质自然提升, 需要专门的 preference optimization。

### 人类评估

论文除自动评估外还做人工评估。每个样本由两位标注员评审, 分歧由第三位标注员解决。人评结果与 VideoReward 趋势一致, 支持 Flow-DPO 对齐模型优于 pretrained model。

## 开源代码阅读

::: warning 开源边界
当前 GitHub 仓库主要开源 **VideoReward 训练、推理、VideoGen-RewardBench 评测**。论文中的完整内部视频生成模型、视频版 Flow-DPO/Flow-RWR/Flow-NRG 训练代码没有完整开源。README 提到 Flow-DPO 另有 text-to-image 任务实现, 不能把仓库代码误读为完整复现论文所有视频对齐实验。
:::

### 代码结构

| 文件 | 作用 |
| --- | --- |
| `README.md` | 环境、权重下载、单样本打分、RewardBench 评测、训练入口 |
| `train_reward.py` | 创建 Qwen2-VL reward model、LoRA 配置、数据加载、Trainer 启动 |
| `trainer.py` | `Qwen2VLRewardModelBT`、BTT/BT/regression loss、自定义保存和 metric |
| `data.py` | 读取 GSB CSV, 构造 A/B 视频输入, 处理 chosen/tie/invalid label, collator |
| `inference.py` | 加载 checkpoint, 对 prompt-video item 输出 VQ/MQ/TA/Overall reward |
| `eval_videogen_rewardbench.py` | 将 pair benchmark 拆成 single video 推理, 再合回 pair 算 accuracy |
| `prompt_template.py` | reward model 的简略/详细/special-token prompt template |
| `vision_process.py` | 视频读取、抽帧、resize、Qwen2-VL 视觉输入预处理 |

### 训练入口

`train_reward.py` 的流程:

1. 用 `HfArgumentParser` 解析 `DataConfig / TrainingConfig / ModelConfig / PEFTLoraConfig`。
2. `create_model_and_processor()` 加载 `AutoProcessor` 和 `Qwen2VLRewardModelBT`。
3. 如果启用 special tokens, 加入 `<|VQ_reward|>`、`<|MQ_reward|>`、`<|TA_reward|>` 并 resize token embeddings。
4. 如果启用 LoRA, 用 `find_target_linear_names()` 自动寻找 linear / embedding module, 可通过 `lora_namespan_exclude` 排除视觉塔。
5. 设置 LLM、vision tower、merger、reward head 的 `requires_grad`。
6. `create_dataset()` 从 CSV 读 pair data, 转成 reward training 格式。
7. `QWen2VLDataCollator` 对 A/B 两个视频分别调用 processor, padding 到相同长度。
8. `VideoVLMRewardTrainer` 根据 `loss_type` 计算 BT/BTT/regression loss。

### 数据格式

`data.py` 的 `convert_GSB_csv_to_reward_data()` 假定 CSV 至少包含:

- `path_A`, `path_B`: 两个视频路径。
- `prompt`: 生成视频的文本 prompt。
- `num_frames_A`, `num_frames_B`: 帧数, 用于固定帧数采样时截断。
- `VQ`, `MQ`, `TA`: 每个维度的 label, 取值 `A / B / same / invalid`。
- 可选 `MOS_A_{dim}`, `MOS_B_{dim}`: pointwise 分数, 用于 margin/regression loss。

label 被转成:

- `1`: A chosen。
- `-1`: B chosen。
- `0`: tie。
- `22`: invalid。

这和 `trainer.py` 中的 mask 逻辑对应: non-tie pair 用 BT 类 loss, tie pair 在 BTT 中使用 tie term, invalid label 用 valid mask 排除。

### 推理接口

`inference.py` 的 `VideoVLMRewardInference.reward()` 输入:

- `video_paths: List[str]`
- `prompts: List[str]`
- 可选 `fps`、`num_frames`、`max_pixels`
- `use_norm=True` 时用 checkpoint 中保存的 mean/std 归一化

输出是每个视频一个 dict:

```python
{
    "VQ": ...,
    "MQ": ...,
    "TA": ...,
    "Overall": VQ + MQ + TA,
}
```

代码中的 `Overall` 是三个归一化维度的直接求和, 不是单独训练的 overall head。因此使用时要注意: 若用户任务需要偏向 TA 或 MQ, 应该自己设置维度权重, 不要盲目用等权 Overall。

### RewardBench 评测代码

`eval_videogen_rewardbench.py` 的处理逻辑:

1. 读取 `datasets/eval/videogen-rewardbench.csv`。
2. `convert_pair_to_single()` 把 pair annotation 拆成去重后的 single prompt-video item, 避免同一个视频重复推理。
3. 批量调用 `VideoVLMRewardInference.reward()` 得到 VQ/MQ/TA/Overall。
4. `convert_single_to_pair()` 将 single reward 合回 A/B pair。
5. 调用 `calc_accuracy_with_ties` 和 `calc_accuracy_without_ties` 计算 overall 与分维度 accuracy。

这套评测实现与论文的 pairwise accuracy 口径一致: reward model 不生成自然语言解释, 只比较 A/B 分数。

## 与其他工作的关系

| 工作 | 主要对象 | 局限或差异 | VideoAlign 的区别 |
| --- | --- | --- | --- |
| VideoScore | 视频评分 | 训练数据偏早期模型, 现代模型泛化弱 | 重新采集现代模型偏好数据 |
| LiFT | VLM-as-a-judge | 离散 1-3 分容易产生大量 ties | VideoReward 用 pairwise+BTT 学连续 reward |
| VisionReward | 视频 checklist reward | 对现代高保真 VQ/MQ 区分不足 | 多维偏好数据和 reward token 设计更适配现代 T2V |
| Diffusion-DPO | diffusion image/video | 目标推导基于 diffusion/noise prediction | Flow-DPO 改写到 rectified flow velocity |
| VideoDPO 等并行工作 | diffusion-based VDM alignment | 多数依赖旧模型或 image-level reward | VideoAlign 关注 flow-based VDM 和现代视频 reward |

## 关键启发

1. **视频 RLHF 的瓶颈首先是 reward distribution mismatch**: 如果 reward model 的训练数据来自旧视频模型, 它很难评价现代视频模型之间更细的质量差异。
2. **视频 reward 必须多维拆开**: VQ、MQ、TA 之间存在冲突, 单一 overall score 容易掩盖具体失败模式。
3. **tie 不是噪声, 是监督信号**: 对难分胜负的 pair 强行排序会制造伪 margin, 下游优化会放大奖励模型的错误。
4. **flow model 不能机械套 diffusion alignment**: timestep-dependent KL 在 rectified flow 中会诱导高噪声阶段过拟合, 固定 beta 更稳。
5. **TA 需要专门优化**: 单纯提高画质和运动质量不会自动解决复杂 prompt 对齐, TA-Hard 的结果尤其说明这一点。
6. **推理期 reward guidance 适合个性化权衡**: Flow-NRG 可以不用重新训练就调 VQ/MQ/TA 权重, 但也会带来维度 trade-off。

## 局限与注意事项

- **完整视频对齐代码未开源**: 当前可复现重点是 VideoReward 和 VideoGen-RewardBench, 不是论文中内部视频模型的完整 RLHF 流程。
- **VideoReward 本身也可能被过优化**: 论文已经观察到过度 Flow-DPO 会降低视频质量, 即使某些 reward 维度继续上升。
- **reward model 不能替代人评**: 它适合作为训练和筛选信号, 但最终模型比较仍需要人工评估或多指标验证。
- **多维线性加权有局限**: VQ/MQ/TA 的 trade-off 未必线性, 对安全性、物理一致性、长视频叙事等更复杂偏好还不够。
- **数据来源含闭源商业模型**: 训练/评测分布强依赖当时的模型生态, 后续新一代模型可能再次造成分布漂移。

## 复现路径

如果只复现开源部分:

1. 克隆仓库并创建 `VideoReward` 环境。
2. 下载 HuggingFace 上的 `KwaiVGI/VideoReward` checkpoint 到 `./checkpoints/`。
3. 用 `python inference.py` 对单个 prompt-video item 打分。
4. 下载 `KwaiVGI/VideoGen-RewardBench` 到 `./datasets/eval/`。
5. 用 `python eval_videogen_rewardbench.py` 跑 benchmark。
6. 若要训练自己的 reward model, 准备 GSB CSV, 使用 `sh train.sh` 启动。

如果要复现论文完整对齐实验, 还需要:

- 一个 rectified-flow video diffusion model。
- 能生成 chosen/rejected pair 或能被 VideoReward relabel 的样本池。
- Flow-DPO/Flow-RWR 的 flow velocity training loop。
- Flow-NRG 所需的 latent reward model 和 sampling-time gradient guidance。
- 人评协议或至少与 VideoReward 独立的评估集, 用于排查 reward hacking。

## 方法归类

偏好优化, RLHF, video reward model, flow-based video alignment, DPO, RWR, reward guidance.
