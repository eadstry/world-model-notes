---
title: "FlipSketch: Flipping Static Drawings to Text-Guided Sketch Animations"
arxiv: https://arxiv.org/abs/2411.10818
github: https://github.com/hmrishavbandy/FlipSketch
venue: CVPR
year: 2025
---

# FlipSketch: Flipping Static Drawings to Text-Guided Sketch Animations

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2411.10818](https://arxiv.org/abs/2411.10818)
- **GitHub**: [https://github.com/hmrishavbandy/FlipSketch](https://github.com/hmrishavbandy/FlipSketch)
:::

## 学习笔记

### 核心贡献
- 提出 FlipSketch 系统，实现"画一幅草图 + 输入运动描述"即可生成手绘风格动画，无需指定精确运动路径或关键帧。
- 将文本到视频（T2V）扩散模型的运动先验迁移至草图动画生成，通过三个关键技术创新适配该任务：草图风格帧生成微调、参考帧噪声精炼机制、双注意力合成。
- 采用光栅帧（raster frames）而非受限的矢量动画，支持动态草图变形，保留了手绘动画的表达自由度。

### 方法细节
- 对预训练 T2V 扩散模型进行微调，使其生成单色线条风格的草图帧，而非真实感视频帧。
- 引入参考帧机制：在去噪过程中，将输入静态草图作为参考帧注入噪声精炼步骤，约束生成帧与原始草图的视觉一致性，避免风格偏移与内容丢失。
- 设计双注意力合成模块（dual-attention composition）：同时关注文本运动描述（保证动作流畅）与参考帧特征（保证外观一致），在运动控制与视觉保真度之间取得平衡。
- 输入方式极简：用户仅需提供一张手绘草图（光栅图像）和一句自然语言运动描述（如"小鸟从左向右飞"），系统自动生成完整动画序列。

### 关键发现
- 参考帧噪声精炼机制对于保持输入草图的视觉完整性至关重要，简单的条件注入难以在大幅度运动中维持草图风格与内容稳定。
- 双注意力合成有效解耦了"运动生成"与"外观保持"两个子问题，使其能在单一扩散模型中协同工作。
- 光栅帧方案相比矢量动画方案，能够自然表达笔触变形、线条抖动等手绘感细节，更贴合传统翻页动画的艺术特质。

### 方法归类
- **范式**: [T2V 扩散模型迁移 / 文本驱动的草图动画生成]
- **关键技术**: [扩散模型微调 → 参考帧噪声精炼 → 双注意力运动-外观解耦]
- **适用场景**: [手绘风格动画创作，快速原型故事板，教育与演示动画，艺术表达工具]
