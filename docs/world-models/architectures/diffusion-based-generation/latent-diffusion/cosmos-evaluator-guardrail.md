---
title: "Cosmos Evaluator / Guardrail: 质量评估、物理检查与安全过滤"
design: "Cosmos Evaluator / Guardrail"
website: https://nvidia-cosmos.github.io/cosmos-cookbook/core_concepts/evaluation/overview.html
---

# Cosmos Evaluator / Guardrail: 质量评估、物理检查与安全过滤

::: info 资料入口
- **Evaluation Overview**: [Cosmos Cookbook Evaluation](https://nvidia-cosmos.github.io/cosmos-cookbook/core_concepts/evaluation/overview.html)
- **Evaluate Predict**: [Predict Evaluation](https://nvidia-cosmos.github.io/cosmos-cookbook/core_concepts/evaluation/evaluation_predict.html)
- **Evaluate Transfer**: [Transfer Evaluation](https://nvidia-cosmos.github.io/cosmos-cookbook/core_concepts/evaluation/evaluation_transfer.html)
- **Guardrail**: [Cosmos Guardrail](https://docs.nvidia.com/cosmos/1.2.0/latest/guardrail.html)
:::

## 核心定位

Cosmos Evaluator / Guardrail 是 Cosmos 数据闭环中的质量控制层。Evaluator 关注生成结果是否“好、稳、可用”，Guardrail 关注输入输出是否安全合规。对世界模型来说，这一层非常关键：生成视频看起来真实，并不意味着物理正确、任务可用或安全可发布。

一句话：Evaluator / Guardrail 解决的是 **生成后的世界样本能不能进入训练集、评测集或产品链路**。

## 两类问题

| 模块 | 关注点 | 典型问题 |
|---|---|---|
| Evaluator | 质量、时序、几何、控制保真、物理合理性 | 画面是否真实？运动是否稳定？多视角是否一致？控制信号是否被遵守？ |
| Guardrail | 安全、合规、敏感内容过滤 | 提示词是否违规？生成帧是否不安全？是否需要人脸模糊？ |

二者不要混淆：Evaluator 不一定判断安全，Guardrail 也不一定判断下游任务收益。

## Evaluator 指标体系

### Predict 生成质量

| 指标 | 评估内容 | 越小/越大 |
|---|---|---|
| FID | 单帧图像真实感和分布相似度 | 越小越好 |
| FVD | 视频时空质量、外观和运动整体分布 | 越小越好 |
| TSE | 同一视角连续帧的几何一致性 | 越小越好 |
| CSE | 多摄像头同时帧的跨视角几何一致性 | 越小越好 |

FID/FVD 只解决视觉质量问题，自动驾驶多视角或机器人场景还需要 TSE/CSE 这类几何一致性指标。

### Transfer 控制保真

| 指标 | 评估内容 |
|---|---|
| Blur SSIM | 对模糊后的视频做结构相似度，衡量整体结构保持 |
| Canny-F1 | 生成结果与 edge 控制的边缘一致性 |
| Depth RMSE | 生成结果与 depth 控制的一致性 |
| Seg mIoU | 生成结果与 segmentation 控制的语义布局一致性 |
| DOVER | 视频技术质量，如清晰度、压缩伪影、运动平滑性 |

Transfer 的评估不能只看“像不像真实视频”，还要看它是否保留了输入世界的几何和语义约束。

### VLM/Reason 作为评审器

Cosmos Reason 可以作为质量 critic 或 reward model，用于判断：

- 物理可行性；
- 因果/时间关系是否合理；
- 任务目标是否达成；
- 是否存在明显异常或不符合常识的事件。

这类 VLM-based 评估适合补充传统指标，因为 FID/FVD 无法判断“机器人是否真的抓住物体”或“车辆是否违反交通逻辑”。

## 推荐评估流程

1. **先定义用途**：是用于展示、后训练、评测集扩增，还是策略训练。
2. **固定评测 split**：不要每次用不同数据抽样，否则结果不可比。
3. **统一预处理**：分辨率、帧率、裁剪、clip 长度必须与 GT 对齐。
4. **先跑核心质量指标**：Predict 用 FID/FVD；Transfer 加控制保真指标。
5. **再跑几何一致性**：多视角和长视频重点看 TSE/CSE。
6. **加入 VLM 审查**：检查物理、因果、任务达成和异常。
7. **抽样人工复核**：关键场景不能完全依赖自动指标。
8. **记录完整配置**：保存模型、seed、prompt、采样参数、metric 配置和失败样本。

## Predict 评估示例

FID/FVD 的典型输入是预测视频和真实视频：

```bash
python scripts/metrics/compute_fid_single_view.py \
  --pred_video_paths "./generated/*.mp4" \
  --gt_video_paths "./ground_truth/*.mp4" \
  --num_frames 57 \
  --output_file fid_results.json

python scripts/metrics/compute_fvd_single_view.py \
  --pred_video_paths "./generated/*.mp4" \
  --gt_video_paths "./ground_truth/*.mp4" \
  --num_frames 57 \
  --batch_size 8 \
  --target_size 224 224 \
  --output_file fvd_results.json
```

多视角几何一致性可用 Sampson Error：

```bash
python scripts/metrics/geometrical_consistency/sampson/run_cse_tse.py \
  --input ./generated_multi_view_videos \
  --pattern "*.mp4" \
  --output ./sampson_results \
  --verbose
```

## Guardrail 机制

官方 Guardrail 分为两阶段：

### Pre-Guard

Pre-Guard 作用在文本输入上，包括原始 prompt 和经过 upsampling 的 prompt。

- **Blocklist**：关键词列表检查，用于阻断明显有害词；
- **Aegis**：LLM-based 方案，用于判断更复杂的有害提示。

### Post-Guard

Post-Guard 作用在生成后的视频帧上。

- **Video Content Safety Filter**：判断帧是否安全；
- **Face Blur Filter**：检测并模糊人脸。

官方文档说明 Cosmos-1.0-Guardrail 已集成在 diffusion 和 autoregressive 世界生成管线中，并且不能关闭。即使研究环境中不直接使用官方管线，也应保留同类安全检查。

## 用于合成数据工厂的判定规则

生成样本进入训练集前，建议至少通过四级筛选：

1. **安全过滤**：prompt 和生成帧通过 Guardrail。
2. **视觉质量过滤**：清晰度、运动连续性、无明显伪影。
3. **结构一致性过滤**：多视角、深度、分割、边缘控制保持合理。
4. **任务可用性过滤**：动作/事件/标签与训练目标一致。

只有通过这些筛选的样本，才适合进入后训练或下游策略训练。

## 局限

- FID/FVD 不能证明物理正确，只能说明分布相似。
- VLM 评估会受 prompt 和模型偏差影响，不能作为唯一裁判。
- Guardrail 关注安全内容，不负责判断任务质量或物理规律。
- 自动指标可能与下游任务收益不一致，最终仍需 ablation 验证。
- 安全过滤可能误杀合法样本，也可能漏掉复杂风险，需要结合人工审查。

## 相关笔记

- [Cosmos 平台总览](cosmos)
- [Cosmos Curator](cosmos-curator)
- [Cosmos Dataset Search](cosmos-dataset-search)
- [Cosmos-Predict2.5](cosmos-predict2-5)
- [Cosmos-Transfer2.5](cosmos-transfer2-5)
