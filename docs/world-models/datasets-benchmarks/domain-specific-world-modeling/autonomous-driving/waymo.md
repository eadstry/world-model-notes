---
title: "Scalability in Perception for Autonomous Driving: Waymo Open Dataset"
design: "Waymo"
arxiv: https://arxiv.org/abs/1912.04838
github: https://github.com/waymo-research/waymo-open-dataset
---

# Waymo: Scalability in Perception for Autonomous Driving: Waymo Open Dataset

::: info 论文信息
- **Design**: Waymo
- **论文全称**: Scalability in Perception for Autonomous Driving: Waymo Open Dataset
- **arXiv**: [https://arxiv.org/abs/1912.04838](https://arxiv.org/abs/1912.04838)
- **GitHub**: [https://github.com/waymo-research/waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1912.04838](https://arxiv.org/abs/1912.04838)
- **GitHub**: [https://github.com/waymo-research/waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset)

## 简介
Waymo Open Dataset (WOD) 是由 Waymo（原 Google 自动驾驶项目）发布的业界最大规模、最高质量的自动驾驶数据集之一。该数据集由 Waymo 全自动驾驶车队在真实城市道路环境中采集，包含 1150 个驾驶场景（每个 20 秒），总计约 1,950 个片段。数据采集使用了 Waymo 自主开发的传感器套件，包括 5 个高分辨率激光雷达（顶部+四个侧面）和 5 个高动态范围相机，提供 360° 全方位感知覆盖。

WOD 的突出优势在于其数据质量和标注精度。与许多其他数据集使用后装设备不同，Waymo 使用的是专为自动驾驶设计的顶级传感器套件，数据密度极高。每个场景包含激光雷达点云、高分辨率图像、3D 标注框（1200 万个 3D 框和 120 万个 2D 框）、以及高精度地图信息。WOD 还提供对物体运动状态、速度、加速度的精确标注，使其在运动预测任务中尤为重要。2020 年后，Waymo 还陆续发布了对数据集的多轮扩展（包括 v1.2、v1.3 和 Motion Dataset）。

## 关键特征
- **数据规模**: 1150 个场景片段，1150 万+ 激光雷达框，1200 万+ 3D 标注框，多城市采集
- **数据模态**: 激光雷达点云（5 个）、高分辨率 RGB 图像（5 个）、IMU/GPS、高精地图、物体轨迹
- **主要指标**: 3D 检测 mAP/mAPH、跟踪 MOTA、运动预测 minADE/minFDE
- **领域**: 自动驾驶感知、3D 目标检测、多目标跟踪、运动预测

## 与世界模型的关系
Waymo Open Dataset 是训练自动驾驶世界模型的顶级数据源。其超高质量的激光雷达+相机融合数据使世界模型能够学习精确的 3D 几何和运动动力学，而不仅仅是 2D 视觉模式。Waymo 的高质量地图数据还使世界模型可以理解道路拓扑和交通规则，这对生成物理上可行的未来驾驶场景至关重要。近年来，基于 Waymo 数据集训练的生成式驾驶世界模型（如 GAIA-1、DriveDreamer 等）已能生成高保真的未来驾驶场景视频。

## 代表性用途
- Wayformer (2022) 使用 WOD 训练自动驾驶 Transformer 感知模型
- Motion Transformer (MTR/MTR++) 在 WOD 上取得运动预测 SOTA
- GAIA-1 (2023) 使用 WOD 训练驾驶世界生成模型
- UniAD (2023) 在 WOD 上评测端到端自动驾驶规划
- DriveDreamer (2024) 基于 WOD 构建驾驶世界模型
