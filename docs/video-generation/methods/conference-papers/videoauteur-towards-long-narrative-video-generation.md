---
title: "VideoAuteur: Towards Long Narrative Video Generation"
arxiv: https://arxiv.org/abs/2501.06173
github: https://github.com/lambert-x/VideoAuteur
website: https://videoauteur.github.io/
venue: ICCV
year: 2025
---

# VideoAuteur: Towards Long Narrative Video Generation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2501.06173](https://arxiv.org/abs/2501.06173)
- **GitHub**: [https://github.com/lambert-x/VideoAuteur](https://github.com/lambert-x/VideoAuteur)
- **Website**: [https://videoauteur.github.io/](https://videoauteur.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出面向长叙事视频生成的大规模烹饪视频数据集，并利用 SOTA VLM 和视频生成模型分别验证了视觉保真度和文本描述的准确性
- 引入 Long Narrative Video Director 机制，通过对齐视觉嵌入来增强生成视频的视觉与语义连贯性

### 方法细节
- 采用微调策略将文本与图像嵌入集成到视频生成流程中，提升关键帧的视觉细节和语义对齐质量
- 基于 Stable Diffusion 架构扩展，在时序模块中注入叙事级控制信号，以支持跨越较长时间的连贯故事生成

### 关键发现
- 现有模型生成的短视频片段在事件清晰度和信息传达上难以支撑连贯叙事，长视频生成需要在帧间维持一致的语义线索
- 视觉嵌入的对齐操作显著影响视频整体质量，是长叙事视频生成的关键环节

### 方法归类
- **范式**: Text-to-Video + Narrative Control
- **关键技术**: Long Narrative Video Director, 视觉嵌入对齐, VLM 辅助质量评估
- **适用场景**: 面向故事片、教学视频等需要连贯叙事的长视频生成任务
