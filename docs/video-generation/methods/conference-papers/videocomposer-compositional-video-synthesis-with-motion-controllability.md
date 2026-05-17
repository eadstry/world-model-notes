---
title: "VideoComposer: Compositional Video Synthesis with Motion Controllability"
arxiv: https://arxiv.org/abs/2306.02018
github: https://github.com/ali-vilab/videocomposer
website: https://videocomposer.github.io/
venue: NeurIPS
year: 2023
---

# VideoComposer: Compositional Video Synthesis with Motion Controllability

::: info 论文信息
- **Venue**: NeurIPS (2023)
- **arXiv**: [https://arxiv.org/abs/2306.02018](https://arxiv.org/abs/2306.02018)
- **GitHub**: [https://github.com/ali-vilab/videocomposer](https://github.com/ali-vilab/videocomposer)
- **Website**: [https://videocomposer.github.io/](https://videocomposer.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Compositional Video Synthesis 范式，允许用户通过文本条件、空间条件和时序条件灵活组合并控制视频生成
- 首次引入压缩视频中的运动矢量作为显式时序控制信号，实现精细的运动可控性

### 方法细节
- 设计 Spatio-Temporal Condition encoder (STC-encoder)，作为统一接口有效融合序列输入的时空关系，提高时间条件利用率与帧间一致性
- 支持多种控制输入形式：文本描述、草图序列、参考视频乃至手工设计的运动模式

### 关键发现
- 运动矢量作为压缩域中的隐式先验，能够提供丰富的时序动态引导，且无需额外的光流计算
- 统一的时空条件编码架构比分别处理空间和时间条件能获得更好的帧间一致性和生成质量

### 方法归类
- **范式**: Compositional Video Generation + Motion Control
- **关键技术**: STC-encoder, 运动矢量控制, 多模态条件融合
- **适用场景**: 需要同时控制内容与运动模式的视频合成，如基于草图的动画生成、参考视频驱动等
