---
title: "数据集"
---

# 视频生成后训练数据集

收录视频生成后训练与对齐研究中使用的数据集（共 21 个），覆盖物理仿真、安全对齐、人机交互、自动驾驶、第一人称视角等场景。

## 按领域分类

### 物理与运动规律

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [PhyWorld](./phyworld.md) | 2025 | ICML | 物理规律评测与训练，覆盖多种物理现象 |
| [ChronoMagic-Pro](./chronomagic-pro.md) | 2024 | NeurIPS | 时序变化理解（time-lapse），长周期物理变化 |
| [WISA-80K](./wisa-80k.md) | 2025 | NeurIPS | 物理感知 T2V 生成训练，世界模拟器辅助 |

### 安全与对齐

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [SafeSora](./safesora.md) | 2024 | NeurIPS | 文本到视频安全对齐，有害内容过滤 |
| [CI-VID](./ci-vid.md) | 2025 | arXiv | 组合图像到视频生成评测 |

### 人与交互

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [HOIGen-1M](./hoigen-1m.md) | 2025 | CVPR | 手-物交互视频生成，百万级 |
| [OpenHumanVid](./openhumanvid.md) | 2025 | CVPR | 开放人像视频数据集，主体驱动生成 |
| [CookGen](./cookgen.md) | 2025 | CVPR | 烹饪视频指令生成，YouCook2 扩展 |
| [TalkCuts](./talkcuts.md) | 2025 | NeurIPS | 对话视频剪辑生成 |

### 自动驾驶

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [OpenS2V-5M](./opens2v-5m.md) | 2025 | NeurIPS | 街景到视频生成，500 万样本 |
| [EgoVid-5M](./egovid-5m.md) | 2025 | NeurIPS | 第一人称驾驶/街景视频 |

### 多视角与 3D

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [TIP-I2V](./tip-i2v.md) | 2025 | ICCV | 文本 + 图像到视频，多视角 |
| [SynFMC](./synfmc.md) | 2025 | ICCV | 自由形式运动控制合成 |
| [GB3DV-25k](./gb3dv-25k.md) | 2026 | arXiv | 几何 3D 视频数据集 (VIGOR) |

### 音视频与多媒体

| 数据集 | 年份 | 会议 | 用途 |
|--------|------|------|------|
| [MMVideo](./mmvideo.md) | 2025 | arXiv | 多模态可控视频生成（CtrlVDiff） |
| [PairFS-4K](./pairfs-4k.md) | 2025 | arXiv | 舞蹈配对不同帧合成 (DanceTog) |
| [GRADEO-Instruct](./gradeo-instruct.md) | 2025 | PMLR | 视频质量指令微调 |
| [DAVID-X](./david-x.md) | 2025 | arXiv | AI 生成视频检测与解释 |
| [PNData](./pndata.md) | 2025 | arXiv | 预训练 & 微调数据 |
| [Dprim](./dprim.md) | 2025 | arXiv | 原始具身世界模型学习 |
| [VideoUFO](./videoufo.md) | 2025 | NeurIPS | BenchUFO 视频事件理解 |

## 数据集规模概览

| 规模 | 数据集 |
|------|--------|
| 百万级 (1M+) | HOIGen-1M, OpenS2V-5M, EgoVid-5M |
| 万级 (10K–100K) | WISA-80K, SafeSora, OpenHumanVid, GB3DV-25k, CookGen, PhyWorld |
| 千级 (4K–10K) | PairFS-4K, TIP-I2V, SynFMC, ChronoMagic-Pro |
| 指令/文本级 | GRADEO-Instruct, TalkCuts, MMVideo, CI-VID |

## 外部资源

- [HuggingFace Awesome-Video-Generation-Post-Training](https://huggingface.co/collections) — 相关数据集 HF 集合
- [GitHub 仓库 Data Section](https://github.com/CyL97/Awesome-Video-Generation-Post-Training#datasets)
