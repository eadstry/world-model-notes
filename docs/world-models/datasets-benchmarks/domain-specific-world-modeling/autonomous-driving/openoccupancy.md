---
title: "OpenOccupancy: A Large Scale Benchmark for Surrounding Semantic Occupancy Perception"
design: "OpenOccupancy"
arxiv: https://arxiv.org/abs/2303.03991
github: https://github.com/JeffWang987/OpenOccupancy
---

# OpenOccupancy: A Large Scale Benchmark for Surrounding Semantic Occupancy Perception

::: info 论文信息
- **Design**: OpenOccupancy
- **论文全称**: OpenOccupancy: A Large Scale Benchmark for Surrounding Semantic Occupancy Perception
- **arXiv**: [https://arxiv.org/abs/2303.03991](https://arxiv.org/abs/2303.03991)
- **GitHub**: [https://github.com/JeffWang987/OpenOccupancy](https://github.com/JeffWang987/OpenOccupancy)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2303.03991](https://arxiv.org/abs/2303.03991)
- **GitHub**: [https://github.com/JeffWang987/OpenOccupancy](https://github.com/JeffWang987/OpenOccupancy)

## 简介
OpenOccupancy 是由浙江大学和华为诺亚方舟实验室联合提出的高精度 3D 占位预测基准，是对 Occ3D 的重要补充和提升。该基准基于 nuScenes 数据集构建，但其核心创新在于提供了比 Occ3D 更高精度的占位真值标注。OpenOccupancy 的标注分辨率更高，覆盖范围更广，且包含了对遮挡区域和稀疏激光雷达区域的特殊处理策略。

OpenOccupancy 的核心贡献之一是提出了"密集增强的占位标注"流程：通过结合相机图像中的语义分割、多帧激光雷达聚合和 BEV 特征渲染，生成比原始稀疏激光雷达更丰富和准确的 3D 占位真值。该基准覆盖了 nuScenes 的约 34,000 帧，提供 17 个语义类别的高质量占位标注。OpenOccupancy 还提供了无激光雷达条件下的"仅视觉"评测协议，这对于以纯视觉为核心的世界模型（如基于相机的端到端驾驶系统）特别重要。

## 关键特征
- **数据规模**: 34K 帧（nuScenes）、17 个语义类、高精度密集占位标注
- **数据模态**: 多相机 RGB 图像、增强激光雷达点云、3D 占位网格
- **主要指标**: mIoU（几何+语义）、Ray-based IoU、视觉占位预测准确率
- **领域**: 3D 占位预测、视觉中心的世界建模、密集场景补全

## 与世界模型的关系
OpenOccupancy 的"仅视觉"评测协议对 3D 视觉世界模型尤为重要。在现实世界中（特斯拉等纯视觉方案），激光雷达往往不可用，世界模型必须仅通过 2D 图像推理 3D 占位状态。OpenOccupancy 正是为这种"纯视觉 3D 世界模型"提供基准的。与 Occ3D 一起，OpenOccupancy 推动了 3D 世界模型从"激光雷达增强"到"纯视觉"的技术演进，为端到端视觉世界模型设定了关键的评测标准。

## 代表性用途
- OccNet 系列（TPVFormer、SurroundOcc）在 OpenOccupancy 上的标准评测
- 纯视觉自动驾驶世界模型的 3D 占位评测平台
- 与 Occ3D 形成互补的 3D 场景补全评测基准
- 被用于评测"无激光雷达条件下"的 3D 世界模型性能
