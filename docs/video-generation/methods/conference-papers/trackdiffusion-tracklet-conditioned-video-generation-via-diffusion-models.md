---
title: "TrackDiffusion: Tracklet-Conditioned Video Generation via Diffusion Models"
arxiv: https://arxiv.org/abs/2312.00651
github: https://github.com/pixeli99/TrackDiffusion
venue: WACV
year: 2025
---

# TrackDiffusion: Tracklet-Conditioned Video Generation via Diffusion Models

::: info 论文信息
- **Venue**: WACV (2025)
- **arXiv**: [https://arxiv.org/abs/2312.00651](https://arxiv.org/abs/2312.00651)
- **GitHub**: [https://github.com/pixeli99/TrackDiffusion](https://github.com/pixeli99/TrackDiffusion)
:::

## 学习笔记

### 核心贡献
- TrackDiffusion 首次将 tracklet 条件引入视频扩散模型，实现对多物体精细轨迹运动控制
- 提出 instance enhancer 模块，显式保证多实例在跨帧生成中的外观一致性，填补了现有文献的空白
- 验证了生成视频序列可作为感知模型的训练数据，有效提升目标跟踪器的性能

### 方法细节
- 基于预训练视频扩散模型，以目标轨迹（tracklet）作为条件，精确操纵物体的运动轨迹和交互
- Instance enhancer 通过跨帧注意力机制保持同一实例在不同帧中的外观一致性，支持物体出现/消失和尺度剧烈变化
- 将 tracklet 条件以空间特征图形式注入 U-Net 的中间层，与文本/图像条件互补

### 关键发现
- Tracklet 条件相比文本或图像级条件在运动控制上具有更细粒度的表达能力
- 生成的动态场景能真实模拟现实世界的复杂性，适用于自动驾驶等需要高度仿真的场景
- 作为首个将 tracklet 条件与视频扩散结合的工作，证明了生成帧可用于改进感知模型的泛化能力

### 方法归类
- **范式**: Tracklet-Conditioned Video Diffusion
- **关键技术**: Denoising Diffusion Probabilistic Models, Instance Enhancer, Cross-Frame Attention
- **适用场景**: 多目标运动轨迹可控视频生成、自动驾驶场景仿真、感知模型训练数据增强
