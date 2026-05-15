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

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2304.14365](https://arxiv.org/abs/2304.14365)
- **GitHub**: [https://github.com/Tsinghua-MARS-Lab/Occ3D](https://github.com/Tsinghua-MARS-Lab/Occ3D)

## 简介
Occ3D 是由清华大学 MARS Lab 提出的业界首个大规模 3D 占位（Occupancy）预测基准，是 3D 世界建模研究中的里程碑工作。该基准基于 nuScenes 和 Waymo 两大主流自动驾驶数据集构建，提供了逐体素的语义和几何占位真值标注。Occ3D 将三维空间网格化为密集的体素网格（voxel grid），为每个体素标注"该位置是否被占据"以及"占据该位置的物体语义类别"（17 类），构建了完整的 3D 场景语义表示。

Occ3D 定义了 3D 语义占位预测任务：给定多相机输入，模型需要预测周围 3D 空间中的完整占位状态。这本质上要求模型具备"从 2D 图像推理 3D 几何和语义"的能力——一种核心的世界模型能力。Occ3D 的数据以 nuScenes 为基础框架，标注了约 700 个场景（28K 帧）的 3D 占位真值，覆盖 [-40m, 40m] × [-40m, 40m] × [-1m, 5.4m] 的体素空间（0.4m 分辨率）。Occ3D 的发布直接推动了 3D 世界模型和 BEV 感知的快速发展。

## 关键特征
- **数据规模**: 约 700 个 nuScenes 场景的 3D 占位真值、17 个语义类、高分辨率体素空间
- **数据模态**: 多相机 RGB 图像、激光雷达点云（用于生成真值）、3D 占位网格（真值）
- **主要指标**: mIoU（语义占位）、IoU（几何占位）、Ray-based IoU
- **领域**: 3D 占位预测、3D 世界模型、BEV 感知、场景补全

## 与世界模型的关系
Occ3D 直接定义了 3D 世界模型的核心输出格式——对周围物理空间的完整语义和几何表示。对于自动驾驶世界模型而言，预测未来的 3D 占位状态（"1 秒后的空间会是什么样"）比预测 2D 视频帧更具工程价值，因为占位表示直接可用于碰撞检测和运动规划。Occ3D 基准已成为测评 3D 世界模型（如 OccWorld、UniWorld）的事实标准，推动了 3D 驾驶世界模型从"做得好玩"到"能用得上"的转变。

## 代表性用途
- OccNet (2023) 使用 Occ3D 评测基于 Occ3D 的通用 3D 占位预测
- OccWorld (2024) 在 Occ3D 上建立 3D 世界模型评测基准
- UniWorld (2024) 基于 Occ3D 验证统一世界模型
- FB-OCC、SurroundOcc 等 3D 占位预测方法的标准化评测平台
