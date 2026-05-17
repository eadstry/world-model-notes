---
title: "OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving"
design: "OccWorld"
arxiv: https://arxiv.org/abs/2311.16038
github: https://github.com/wzzheng/OccWorld
---

# OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving

::: info 论文信息
- **Design**: OccWorld
- **论文全称**: OccWorld: Learning a 3D Occupancy World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2311.16038](https://arxiv.org/abs/2311.16038)
- **GitHub**: [https://github.com/wzzheng/OccWorld](https://github.com/wzzheng/OccWorld)
:::

## 学习笔记

### 核心思想

OccWorld 是首个将 3D 占据（3D Occupancy）作为世界模型核心表示的开创性工作。其核心思路是：不再依赖粗糙的 3D 边界框（bbox），而是使用细粒度的 3D 占据网格来描述自动驾驶场景的空间结构。模型通过 Scene Tokenizer 将 3D 占据量化为离散 Token，再利用 GPT 风格的自回归 Transformer 同时预测未来的 3D 占据状态和自车运动轨迹。

作为 3D 占据世界建模的先驱工作，OccWorld 证明了 3D 占据作为一种统一表示，能够同时支撑视觉和 LiDAR 两种传感器模态，且比基于 bbox 的方法更能捕捉细粒度的场景几何信息。该工作在 nuScenes 数据集上展示了有效的驾驶场景演化预测能力，为后续的 3D 占据世界模型研究奠定了基础。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
