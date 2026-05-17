---
title: "OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction"
design: "OccTENS"
arxiv: https://arxiv.org/abs/2509.03887
---

# OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction

::: info 论文信息
- **Design**: OccTENS
- **论文全称**: OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction
- **arXiv**: [https://arxiv.org/abs/2509.03887](https://arxiv.org/abs/2509.03887)
:::

## 学习笔记

### 核心思想

OccTENS 是一种基于 3D 占据格（Occupancy Grid）的 4D 占据预测世界模型，专为自动驾驶场景设计。其核心技术是张量分解，用于高效表征和预测未来的 3D 占据状态。模型从当前驾驶场景的观测出发，通过时间维度的自回归预测与空间维度的多尺度递进策略，逐步生成未来帧的高分辨率 3D 占据表示。

OccTENS 的主要贡献在于将张量分解引入世界模型，在保持高效计算的同时实现了对未来 3D 占据状态的高精度预测。这种紧凑的表示方式为自动驾驶世界模型提供了一种实用且可扩展的解决方案，能够在 nuScenes 等标准数据集上取得优异的占据预测精度。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
