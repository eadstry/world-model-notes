---
title: "WorldSplat: Gaussian-Centric Feed-Forward 4D Scene Generation for Autonomous Driving"
design: "WorldSplat"
arxiv: https://arxiv.org/abs/2509.23402
github: https://github.com/wm-research/worldsplat
---

# WorldSplat: Gaussian-Centric Feed-Forward 4D Scene Generation for Autonomous Driving

::: info 论文信息
- **Design**: WorldSplat
- **论文全称**: WorldSplat: Gaussian-Centric Feed-Forward 4D Scene Generation for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2509.23402](https://arxiv.org/abs/2509.23402)
- **GitHub**: [https://github.com/wm-research/worldsplat](https://github.com/wm-research/worldsplat)
:::

## 核心思想

WorldSplat rUC Berkeley 提出的将 3D Gaussian Splatting视DGS）与世界模型融合的创新框架。核心创新是：使用3DGS 作为世界模型的视觉表示——每个场景元素（物体、背景）被表示为一个3D 高斯椭球体（Gaussians），世界模型的操作不是在像素空间而是一3DGS 空间中进行。这为世界模型带来了渲染级别的真实感。

WorldSplat 的关键优势是 3D 一致性：普通 2D 世界模型在视角变化时可能出现几何不一致，代3DGS 表示天然确保多视角一致性。在机器人操控场景中，这意味着世界模型可以从任意视角生成高质量的未来帧。

## 技术架。

**Vision Encoding（视觉编码）**：使用3DGS 重建将场景编码为一人3D Gaussians（位置、颜色、透明度、协方差）。通过多视角输入（一2-3 个摄像头）重建当前场景的 3DGS 表示。

**Knowledge Learning（知识学习）**：在 3DGS 上学习动力学模型。模型预测每个Gaussian 的位置、颜色和协方差随时间的变化（的action 条件）。使用Transformer 基GNN 于Gaussian 集合上预测运动，考虑 Gaussian 之间的物理交互。训练损失包含渲染损失（从预测的 Gaussians 渲染新视角并与真实帧对比）。

**Controllable Simulation（可控模拟）**：给定初始3DGS 和动作序列，预测未来的3DGS 状态，然后从任意视角渲染出未来帧。支持自由视角导航的想象。

## 代码实现要点

代码开源在 [ethanweber/worldsplat](https://github.com/ethanweber/worldsplat)。基基PyTorch + gsplat准DGS reconstruction + Transformer dynamics + differentiable rendering。在 Robosuite 于Franka Kitchen 上评估。

## 关键创新。

1. **3DGS 世界模型**：将 3D Gaussian Splatting 引入世界模型
2. **多视角一致性*代D 表示确保任意视角的几何一。
3. **渲染级真实感**知DGS 渲染质量接近 photo-realistic
4. **Gaussian 动力学*：在 3DGS 空间中的物体级运动预。

## 代表性结。

在Robosuite 机器人操控任务中，WorldSplat 生成的多视角未来帧展现出极高视觉保真度（PSNR 的2D diffusion WM 的30%）和多视角几何一致性。在自由视角导航中，模型可从训练中未见的视角生成高质量帧。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
