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

3D-PEWM (3D Predictive Embodied World Model) 是将 3D 场景表示引入具身世界模型的框架。核心创新是使用 3D 点云或 3D 占用作为世界模型的中间表示——在 3D 空间中进行动力学预测，而非在 2D 像素空间中。这种 3D 优先的设计使世界模型的预测天然保持 3D 几何一致性。

3D-PEWM 的关键贡献是"3D 预测优先"的理念：先生成 3D 场景的预测（物体在 3D 空间中的位置和形状变化），然后从 3D 场景渲染 2D 视觉。这解决了 2D 扩散世界模型的根本问题——跨视角不一致。

## 技术架构

**Vision Encoding（视觉编码）**：多视角 RGB-D → 3D point cloud / occupancy encoder → 3D latent。通过 PointNet++ 或 3D CNN 编码。

**Knowledge Learning（知识学习）**：3D Diffusion Model 在 3D latent space 中学习动力学。模型以初始 3D latent 和 action 为条件，去噪生成未来的 3D latent。3D latent 可解码为点云或渲染为 2D 图像。

**Controllable Simulation（可控模拟）**：预测 3D latent → 从任意视角渲染。3D 表示确保多视角渲染时的一致性。

## 代码实现要点

暂无开源代码。基于 3D Point Cloud Diffusion。在 Robosuite 和 Franka Kitchen 上评估。

## 关键创新点

1. **3D 预测优先**：在 3D 空间中预测而非 2D 像素
2. **几何天然一致**：3D 表示无需额外保证多视图一致
3. **任意视角渲染**：从预测的 3D 场景渲染任意视角
4. **点云扩散**：在 3D 点云空间中的扩散生成

## 代表性结果

在 Robosuite 的 3D 场景预测中，3D-PEWM 点云预测的 Chamfer Distance 和 F-Score 表现优异。多视角渲染测试展示了完美的几何一致性（对极误差为 0），证实了 3D-first 方法的优势。
