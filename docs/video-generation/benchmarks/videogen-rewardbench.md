---
title: "VideoGen-RewardBench"
year: 2025
---

# VideoGen-RewardBench

::: info 数据集信息
- **来源论文**: [Improving Video Generation with Human Feedback](../methods/conference-papers/improving-video-generation-with-human-feedback.md)
- **arXiv**: [https://arxiv.org/abs/2501.13918](https://arxiv.org/abs/2501.13918)
- **GitHub**: [https://github.com/KlingAIResearch/VideoAlign](https://github.com/KlingAIResearch/VideoAlign)
- **Website**: [https://gongyeliu.github.io/videoalign/](https://gongyeliu.github.io/videoalign/)
- **Dataset**: [https://huggingface.co/datasets/KwaiVGI/VideoGen-RewardBench](https://huggingface.co/datasets/KwaiVGI/VideoGen-RewardBench)
:::

## 定位

VideoGen-RewardBench 是面向现代文本生成视频模型的 reward model 评测基准。它不是生成模型 benchmark, 而是测试一个视频 reward model 能否在同一 prompt 下判断两个生成视频哪一个更符合人类偏好。

它解决的问题是: 早期 GenAI-Bench 等数据主要覆盖短时长、低分辨率、pre-Sora-era 视频模型, 难以区分现代 T2V 模型在细节、运动和复杂语义上的差异。VideoGen-RewardBench 基于第三方 VideoGen-Eval 扩展人类偏好标注, 更贴近现代商业/开源视频生成模型的输出分布。

## 数据规模

| 项目 | 数值 |
| --- | ---: |
| prompt 数 | 420 |
| prompt-video samples | 4,923 |
| pairwise annotations | 26,457 |
| T2V 模型 | 12 |
| 开源现代模型 | 3 |
| 闭源现代模型 | 9 |
| 视频时长 | 4s 到 6s |
| 分辨率范围 | 480x720 到 576x1024 |
| 标注维度 | VQ, MQ, TA, Overall |

## 标注维度

| 维度 | 含义 | 说明 |
| --- | --- | --- |
| VQ | Visual Quality | 静态画质、清晰度、合理性、细节、审美 |
| MQ | Motion Quality | 动态稳定性、自然性、平滑性、运动幅度 |
| TA | Text Alignment | 主体、动作、环境、风格、镜头是否符合 prompt |
| Overall | Overall Quality | 综合偏好, 可作为跨维度通用标签 |

每条 pair annotation 给出 A/B/tie 偏好。评测 reward model 时, 先分别给 A 和 B 打分, 再比较两个分数是否与人类偏好一致。

## 与 GenAI-Bench 的区别

| Benchmark | #Samples | #Prompts | 模型覆盖 | 视频时长 | 标注数 | 维度 |
| --- | ---: | ---: | --- | --- | ---: | --- |
| GenAI-Bench | 3,784 | 508 | 早期模型为主 | 2s 到 2.5s | 1,891 | 1 |
| VideoGen-RewardBench | 4,923 | 420 | 现代模型为主 | 4s 到 6s | 26,457 | 4 |

VideoGen-RewardBench 更难, 因为现代视频模型的基础画质更高, pair 之间的差异常常体现在细节、运动一致性和 prompt 细粒度满足程度上。

## 评测指标

论文报告两种 pairwise accuracy:

- **Accuracy w/o ties**: 只统计人类明确选择 A 或 B 的 pair, tie 样本不计入。
- **Accuracy w/ ties**: 把 tie 作为第三类, 通过阈值判断 reward difference 是否足够接近。

分数可以按 Overall 算, 也可以按 VQ/MQ/TA 分别算。多维 reward model 应该同时报告分维度结果, 否则容易掩盖某一维度的失败。

## 主要结果

| 方法 | Overall w/ ties | Overall w/o ties | VQ w/o ties | MQ w/o ties | TA w/o ties |
| --- | ---: | ---: | ---: | ---: | ---: |
| Random | 41.86 | 50.30 | 49.86 | 49.64 | 50.40 |
| VideoScore | 41.80 | 50.22 | 47.72 | 51.09 | 50.34 |
| LiFT | 39.08 | 57.26 | 55.97 | 54.91 | 55.43 |
| VisionReward | 56.77 | 67.59 | 59.03 | 60.98 | 61.15 |
| VideoReward | **61.26** | **73.59** | **75.66** | **74.70** | **72.20** |

结论:

- VideoScore 在现代视频上几乎不能有效区分 pair, 说明旧训练分布不足。
- LiFT 的离散评分方式容易 ties, pairwise discrimination 仍弱。
- VisionReward 有一定泛化, 但 VQ/MQ/TA 均低于 VideoReward。
- VideoReward 受益于现代模型数据、多维标注和 BTT loss。

## 代码使用方式

开源仓库中 `eval_videogen_rewardbench.py` 的流程:

1. 读取 `datasets/eval/videogen-rewardbench.csv`。
2. 把 pair annotation 拆成去重后的 single prompt-video item。
3. 调用 `VideoVLMRewardInference.reward()` 得到 VQ/MQ/TA/Overall。
4. 将 single reward 合回 A/B pair。
5. 调用 `calc_accuracy_with_ties` 和 `calc_accuracy_without_ties`。

这意味着任意 reward model 只要能输出每个 prompt-video item 的 VQ/MQ/TA 分数, 就可以接入同样的 pairwise 评测流程。

## 使用注意

- VideoGen-RewardBench 衡量的是 reward model 与人类偏好的相关性, 不直接评估生成模型本身。
- Overall 不能替代分维度分析, 因为 VQ/MQ/TA 经常存在 trade-off。
- tie 样本应保留, 不能简单丢弃, 否则会高估 reward model 的区分能力。
- 如果用该基准指导训练, 需要额外监控 reward hacking, 因为对 benchmark reward 过优化不等价于真实人类偏好提升。
