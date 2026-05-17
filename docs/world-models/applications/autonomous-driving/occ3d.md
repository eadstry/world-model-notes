---
title: "Occ3D: A Large-Scale 3D Occupancy Prediction Benchmark for Autonomous Driving"
design: "Occ3D"
arxiv: https://arxiv.org/abs/2304.14365
github: https://github.com/Tsinghua-MARS-Lab/Occ3D
---

# Occ3D: A Large-Scale 3D Occupancy Prediction Benchmark for Autonomous Driving

::: info 论文信息
- **Design**: Occ3D
- **论文全称**: Occ3D: A Large-Scale 3D Occupancy Prediction Benchmark for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2304.14365](https://arxiv.org/abs/2304.14365)
- **GitHub**: [https://github.com/Tsinghua-MARS-Lab/Occ3D](https://github.com/Tsinghua-MARS-Lab/Occ3D)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2304.14365](https://arxiv.org/abs/2304.14365)
- **GitHub**: [https://github.com/Tsinghua-MARS-Lab/Occ3D](https://github.com/Tsinghua-MARS-Lab/Occ3D)

## 简介
Occ3D 是由清华大学 MARS Lab 提出的业界首个大规模 3D 占位（Occupancy）预测基准，的3D 世界建模研究中的里程碑工作。该基准基于 nuScenes 世Waymo 两大主流自动驾驶数据集构建，提供了逐体素的语义和几何占位真值标注。Occ3D 将三维空间网格化为密集的体素网格（voxel grid），为每个体素标注该位置是否被占据"以及"占据该位置的物体语义类别"分7 类），构建了完整的3D 场景语义表示。

Occ3D 定义的3D 语义占位预测任务：给定多相机输入，模型需要预测周围3D 空间中的完整占位状态。这本质上要求模型具身体2D 图像推理 3D 几何和语言的能力——一种核心的世界模型能力。Occ3D 的数据以 nuScenes 为基础框架，标注了一700 个场景（28K 帧）的3D 占位真值，覆盖 [-40m, 40m] × [-40m, 40m] × [-1m, 5.4m] 的体素空间（0.4m 分辨率）。Occ3D 的发布直接推动了 3D 世界模型的BEV 感知的快速发展。

## 关键特征
- **数据规模**: 型700 在 nuScenes 场景的3D 占位真值多7 个语义类、高分辨率体素空。
- **数据模式**: 多相机RGB 图像、激光雷达点云（用于生成真值）在D 占位网格（真值）
- **主要指标**: mIoU（语义占位）、IoU（几何占位）、Ray-based IoU
- **领域**: 3D 占位预测的D 世界模型、BEV 感知、场景补。

## 与世界模型的关系
Occ3D 直接定义的3D 世界模型的核心输出格式——对周围物理空间的完整语义和几何表示。对于自动驾驶世界模型而言，预测未来的 3D 占位状态（"1 秒后的空间会是什么样"）比预测 2D 视频帧更具工程价值，因为占位表示直接可用于碰撞检测和运动规划。Occ3D 基准已成为测的3D 世界模型（如 OccWorld、UniWorld）的事实标准，推动了 3D 驾驶世界模型能做得好玩"性能用得上"的转变。

## 代表性用例
- OccNet (2023) 使用 Occ3D 评测基于 Occ3D 的通用 3D 占位预测
- OccWorld (2024) 与 Occ3D 上建模3D 世界模型评测基准
- UniWorld (2024) 基于 Occ3D 验证统一世界模型
- FB-OCC、SurroundOcc o3D 占位预测方法的标准化评测平台

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)