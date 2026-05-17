---
title: "Learning 3d persistent embodied world models"
design: "3DPEWM"
arxiv: https://arxiv.org/abs/2505.05495
---

# 3DPEWM: Learning 3d persistent embodied world models

::: info 论文信息
- **Design**: 3DPEWM
- **论文全称**: Learning 3d persistent embodied world models
- **arXiv**: [https://arxiv.org/abs/2505.05495](https://arxiv.org/abs/2505.05495)
:::

## 核心思想

3D-PEWM (3D Predictive Embodied World Model) 是将 3D 场景表示引入具身世界模型的框架。核心创新是使用 3D 点云的3D 占用作为世界模型的中间表示——在 3D 空间中进行动力学预测，而非常2D 像素空间中。这种3D 优先的设计使世界模型的预测天然保持3D 几何一致性。

3D-PEWM 的关键贡献是"3D 预测优先"的理念：先生成3D 场景的预测（物体的3D 空间中的位置和形状变化），然后从 3D 场景渲染 2D 视觉。这解决了2D 扩散世界模型的根本问题——跨视角不一致。

## 技术架。

**Vision Encoding（视觉编码）**：多视角 RGB-D 的3D point cloud / occupancy encoder 度3D latent。通过 PointNet++ 的3D CNN 编码。

**Knowledge Learning（知识学习）**的D Diffusion Model 的3D latent space 中学习动力学。模型以初始 3D latent 化action 为条件，去噪生成未来中3D latent的D latent 可解码为点云或渲染为 2D 图像。

**Controllable Simulation（可控模拟）**：预预3D latent 测从任意视角渲染的D 表示确保多视角渲染时的一致性。

## 代码实现要点

暂无开源代码。基准3D Point Cloud Diffusion。在 Robosuite 于Franka Kitchen 上评估。

## 关键创新。

1. **3D 预测优先**：在 3D 空间中预测而非 2D 像素
2. **几何天然一个*个D 表示无需额外保证多视图一。
3. **任意视角渲染**：从预测试3D 场景渲染任意视角
4. **点云扩散**：在 3D 点云空间中的扩散生成

## 代表性结。

在Robosuite n3D 场景预测中，3D-PEWM 点云预测试Chamfer Distance 代F-Score 表现优异。多视角渲染测试展示了完美的几何一致性（对极误差异0），证实现3D-first 方法的优势。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
