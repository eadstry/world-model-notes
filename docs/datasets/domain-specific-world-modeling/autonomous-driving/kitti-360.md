---
title: "KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D"
design: "KITTI-360"
arxiv: https://arxiv.org/abs/2109.13410
github: https://github.com/autonomousvision/kitti360Scripts
---

# KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D

::: info 论文信息
- **Design**: KITTI-360
- **论文全称**: KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D
- **arXiv**: [https://arxiv.org/abs/2109.13410](https://arxiv.org/abs/2109.13410)
- **GitHub**: [https://github.com/autonomousvision/kitti360Scripts](https://github.com/autonomousvision/kitti360Scripts)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2109.13410](https://arxiv.org/abs/2109.13410)
- **GitHub**: [https://github.com/autonomousvision/kitti360Scripts](https://github.com/autonomousvision/kitti360Scripts)

## 简介
KITTI-360 是 KITTI 数据集的大幅扩展版本，由 Autonomous Vision Group（University of Tübingen）与 MPI-IS 联合发布。与原始 KITTI 仅覆盖 39.2 公里的行驶距离不同，KITTI-360 记录了超过 320,000 张图像和点云，覆盖 73.7 公里的连续城郊驾驶场景（德国卡尔斯鲁厄），序列长度达到 11 个连贯驾驶序列。KITTI-360 将 KITTI 的覆盖范围从"孤立帧"扩展到"大型连贯城郊场景"。

KITTI-360 提供了远超前代的全景标注：包括 2D 全景分割（19 个语义类）、3D 点云语义分割、3D 边界框、以及每个像素的深度真值。KITTI-360 还引入了全新的"3D 场景合成"任务，要求模型从部分观测中重建完整的 3D 场景几何和外观。该数据集的长序列（每个序列平均约 7 分钟）和城郊混合场景为视觉世界模型的研究提供了珍贵的长时域城市场景标注数据。

## 关键特征
- **数据规模**: 320K+ 图像/点云、73.7 公里、11 个长序列、19 个语义类
- **数据模态**: 立体 RGB 图像、Velodyne 激光雷达点云、GPS/IMU、全景 2D/3D 标注
- **主要指标**: mIoU（语义分割）、PSNR/SSIM（场景合成）、3D 检测 mAP
- **领域**: 城郊场景理解、3D 语义分割、全景标注、长序列分析

## 与世界模型的关系
KITTI-360 的长序列特性使其成为验证世界模型在长时间跨度上预测一致性的珍贵数据源。对于视觉世界模型而言，KITTI-360 的 73.7 公里连续驾驶序列允许评估模型在数百帧时间跨度内的累计预测误差（compounding error），这对于评估自动驾驶安全关键应用中的世界模型质量至关重要。此外，KITTI-360 的城郊混合场景（建筑区→乡村道路→高速公路）也天然提供了域漂移（domain shift）测试条件。

## 代表性用途
- Panoptic NeRF 和 3D 场景重建方法的核心训练数据
- NeRF 系列（Instant-NGP, Mip-NeRF 360 等）在 KITTI-360 上评测大规模场景重建
- 长时域世界模型（Long-term World Models）的评估平台
- Gaussian Splatting 系列方法在自动驾驶场景中的评测基准
