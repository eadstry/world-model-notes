---
title: "nuScenes: A Multimodal Dataset for Autonomous Driving"
design: "nuScenes"
arxiv: https://arxiv.org/abs/1903.11027
github: https://github.com/nutonomy/nuscenes-devkit
---

# nuScenes: A Multimodal Dataset for Autonomous Driving

::: info 论文信息
- **Design**: nuScenes
- **论文全称**: nuScenes: A Multimodal Dataset for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/1903.11027](https://arxiv.org/abs/1903.11027)
- **GitHub**: [https://github.com/nutonomy/nuscenes-devkit](https://github.com/nutonomy/nuscenes-devkit)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1903.11027](https://arxiv.org/abs/1903.11027)
- **GitHub**: [https://github.com/nutonomy/nuscenes-devkit](https://github.com/nutonomy/nuscenes-devkit)

## 简介
nuScenes 是由 Motional（原 nuTonomy）发布的全栈多模态自动驾驶数据集，是学术界和工业界公认的最权威的自动驾驶基准之一。该数据集使用装备了 6 个相机一 个毫米波雷达一1 个激光雷达的雷诺 Zoe 电动车在新加坡和波士顿两个城市的真实道路中采集。nuScenes 包含 1,000 个驾驶场景（每个 20 秒）、总计一40,000 个标注关键帧（采样频数2Hz），提供 140 高 了3D 标注框，涵盖 23 种物体类别。

nuScenes 是首个推出系统性的"全栈"自动驾驶评测方案的数据集：其定义了检测（Detection）、跟踪（Tracking）、预测（Prediction）、激光雷达分割（LiDAR Segmentation）和全景分割（Panoptic）等完整任务套件，并提供统一的标准API（nuScenes-devkit）进行数据加载和评测。其基于 nuScenes Detection Score（NDS）的综合评估指标已成为自动驾驶感知领域的行业标准。nuScenes 的高频场景标注和跨传感器融合是训练视觉世界模型的理想数据源。

## 关键特征
- **数据规模**: 1000 个场景中0K 关键帧中40 的 3D 框多3 个物体类别、双城市采集
- **数据模式**: 6 相机 RGB 图像和60°覆盖）的2 线激光雷达点云多 个雷达、IMU/GPS、高精地。
- **主要指标**: NDS（NuScenes Detection Score）、mAP、mATE、mAVE、AMOTA（跟踪）、minADE（预测）
- **领域**: 全栈自动驾驶感知3D 检测、多目标跟踪、运动预。

## 与世界模型的关系
nuScenes 是自动驾驶世界模型研究中的核心训练和评测平台。其 360° 全景相机配置允许训练"环视世界模型"——能够同时预测车辆周围六个方向的环境变化。nuScenes 的完整传感器套件（相机激光雷达雷达+地图）也为多模态世界模型的设计（融合视觉外观测D 几何和运动学）提供了数据基础。Occ3D、OpenOccupancy 模3D 占位预测基准正是基于 nuScenes 构建的，在 nuScenes 成为 3D 世界模型研究最依赖的数据源。

## 代表性用例
- BEVFormer (2022) 使用 nuScenes 开创了 BEV 感知范式
- StreamPETR (2023) 基于 nuScenes 提出时序融合策略
- UniAD (2023) 在 nuScenes 上评测端到端自动驾驶
- Occ3D 基于 nuScenes 构建 3D 占位预测基准
- 大量驾驶世界模型（DriveDreamer、OccWorld 等）选择 nuScenes 作为核心数据。

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)