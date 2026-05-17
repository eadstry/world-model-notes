---
title: "评测基准"
---

# 视频生成评测基准

收录视频生成后训练与对齐研究中使用和提出的评测基准（共 58 个），覆盖文本-视频对齐、物理一致性、安全性、故事生成、视频编辑等多个评测维度。

## 按评测维度分类

### 通用 T2V 质量评测

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [VBench](./vbench.md) | 2024 | CVPR | 16 维度综合评测（质量、一致性、运动等） |
| [EvalCrafter](./evalcrafter.md) | 2024 | CVPR | 文本对齐 + 视觉质量 + 运动质量 + 时序一致性 |
| [FETV](./fetv.md) | 2023 | NeurIPS | 细粒度文本到视频评测 |
| [MJ-BENCH-VIDEO](./mj-bench-video.md) | 2025 | NeurIPS | 多模态评判视频评测 |
| [Video-Bench](./video-bench.md) | 2025 | CVPR | 综合视频评测 |
| [VideoVerse](./videoverse.md) | 2025 | arXiv | 视频理解与生成统一评测 |

### 物理一致性与世界模型

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [VideoPhy](./videophy.md) | 2025 | ICLR | 视频物理规律理解 |
| [PhyGenBench](./phygenbench.md) | 2025 | ICML | 物理感知生成评测 |
| [WorldModelBench](./worldmodelbench.md) | 2025 | NeurIPS | 世界模型多维评测 |
| [PhyWorldBench](./phyworldbench.md) | 2025 | arXiv | 物理世界评测扩展 |
| [ChronoMagic-Bench](./chronomagic-bench.md) | 2024 | NeurIPS | 长周期时序变化评测 |

### 时序叙事与长视频

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [StoryBench](./storybench.md) | 2023 | NeurIPS | 故事序列生成 |
| [StoryEval](./storyeval.md) | 2025 | CVPR | 故事生成评测扩展 |
| [SeqBench](./seqbench.md) | 2025 | arXiv | 时序叙事生成评测 |
| [MC-Bench](./mc-bench.md) | 2025 | CVPR | 运动控制评测 (MotionPro) |
| [VideoUFO](./videoufo.md) | 2025 | NeurIPS | 视频事件理解评测 |
| [DynamicEval](./dynamiceval.md) | 2025 | arXiv | 动态场景评测 |

### 视频编辑与可控生成

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [FiVE](./five.md) | 2025 | ICCV | 细粒度视频编辑评测 |
| [VEG-Bench](./veg-bench.md) | 2025 | ICCV | 指令式视频编辑评测 (VEGGIE) |
| [MTBench](./mtbench.md) | 2025 | ICCV | 运动迁移评测 (DeT) |
| [VIP-200K](./vip-200k.md) | 2025 | ACM MM | 身份保持视频生成挑战 |
| [RGCD](./rgcd.md) | 2025 | ACM MM | 生成内容质量评测 |
| [HVEval](./hveval.md) | 2025 | ACM MM | 人体视频评测 |
| [Doc2Present](./doc2present.md) | 2025 | EMNLP | 文档到演示视频生成评测 |

### 组合生成与多条件

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [T2V-CompBench](./t2v-compbench.md) | 2025 | CVPR | 组合文本到视频评测 |
| [VMBench](./vmbench.md) | 2025 | ICCV | 视频运动评测 |
| [OpenS2V-Eval](./opens2v-eval.md) | 2025 | NeurIPS | 街景到视频评测 |
| [MMMC](./mmmc.md) | 2025 | arXiv | 多模态编码到视频评测 |
| [Paper2Video](./paper2video.md) | 2025 | arXiv | 论文到视频生成评测 |
| [VIPER](./viper.md) | 2025 | arXiv | 视频感知推理评测 |

### 安全与 Robustness

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [T2VSafetyBench](./t2vsafetybench.md) | 2024 | NeurIPS | 文本到视频安全评测 |
| [SafeMVDrive](./safemvdrive.md) | 2025 | arXiv | 自动驾驶安全视频评测 |
| [V-ReasonBench](./v-reasonbench.md) | 2025 | arXiv | 视频推理评测 |

### 奖励建模与评估

| 基准 | 年份 | 会议 | 核心维度 |
|------|------|------|----------|
| [VideoGen-RewardBench](./videogen-rewardbench.md) | 2025 | NeurIPS | 视频生成奖励模型评测 |
| [AIGVE-60K](./aigve-60k.md) | 2025 | arXiv | AI 生成视频评估 6 万样本 |

### 专门领域

| 基准 | 年份 | 领域 | 核心维度 |
|------|------|------|----------|
| [AIGC-LipSync](./aigc-lipsync.md) | 2025 | 唇形同步 | AI 生成视频唇形同步评测 |
| [VidCapBench](./vidcapbench.md) | 2025 | 视频描述 | 视频字幕评测 |
| [RecipeGen](./recipegen.md) | 2025 | 烹饪 | 菜谱视频生成评测 |
| [VideoPhy](./videophy.md) | 2025 | 物理 | 物理理解评测 |
| [TiViBench](./tivibench.md) | 2025 | 推理 | Think-in-Video 推理评测 |

## 评测基准年代分布

| 年份 | 数量 | 代表性新增 |
|------|------|-----------|
| 2023 | 3 | FETV, StoryBench |
| 2024 | 5 | VBench, EvalCrafter, ChronoMagic-Bench, T2VSafetyBench |
| 2025 | ~50 | T2V-CompBench, VideoPhy, WorldModelBench, FiVE, VEG-Bench, VideoGen-RewardBench 等 |

## 外部资源

- [GitHub 仓库 Benchmarks Section](https://github.com/CyL97/Awesome-Video-Generation-Post-Training#benchmarks)
