---
title: "RenderWorld: World Model with Self-Supervised 3D Label"
design: "RenderWorld"
arxiv: https://arxiv.org/abs/2409.11356
---

# RenderWorld: World Model with Self-Supervised 3D Label

::: info 论文信息
- **Design**: RenderWorld
- **论文全称**: RenderWorld: World Model with Self-Supervised 3D Label
- **arXiv**: [https://arxiv.org/abs/2409.11356](https://arxiv.org/abs/2409.11356)
:::

## 学习笔记

### 核心思想

RenderWorld 提出了一种基于 3D 高斯泼溅（3D Gaussian Splatting）的视觉世界模型，用于自动驾驶模拟。其核心思路是将未来场景的渲染与 3D 空间理解相结合：通过自监督的 Img2Occ 模块从 2D 图像生成 3D 占据标签，然后使用 AM-VAE（Air-Matter VAE）将"空域"与"物质域"分别编码为离散 Token。最后，自回归 Transformer 模型在 4D 空间（3D 空间 + 时间）中预测未来的 3D 占据状态并渲染为 2D 图像。

RenderWorld 的贡献在于首次将 3DGS 引入世界模型框架，利用其高效的渲染能力和精确的几何表示，克服了 NeRF 方法在速度和内存方面的限制。AM-VAE 的分离编码策略使模型能更准确地建模可通行空间与障碍物，在 4D 占据预测和运动规划任务上达到了 SOTA 性能。该工作发表于 ICRA 2025。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
