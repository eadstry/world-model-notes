---
title: "Are we ready for autonomous driving? The KITTI vision benchmark suite"
design: "KITTI"
website: https://ieeexplore.ieee.org/document/6248074
---

# KITTI: Are we ready for autonomous driving? The KITTI vision benchmark suite

::: info 论文信息
- **Design**: KITTI
- **论文全称**: Are we ready for autonomous driving? The KITTI vision benchmark suite
- **Website**: [https://ieeexplore.ieee.org/document/6248074](https://ieeexplore.ieee.org/document/6248074)
:::

## 学习笔记

## 数据集/基准信息
- **Website**: [https://ieeexplore.ieee.org/document/6248074](https://ieeexplore.ieee.org/document/6248074)

## 简介
KITTI（Karlsruhe Institute of Technology and Toyota Technological Institute）数据集是自动驾驶研究中历史最悠久、影响力最大的基准之一，由 Karlsruhe Institute of Technology 和 Toyota Technological Institute 于 2012 年联合发布。该数据集使用一辆改装的大众帕萨特旅行车在德国卡尔斯鲁厄的城市道路、乡村道路和高速公路上采集数据，成为自动驾驶视觉算法的事实标准评测平台。

KITTI 提供了丰富的传感器数据，包括彩色/灰度立体相机、Velodyne HDL-64E 激光雷达和 GPS/IMU 惯性导航系统。数据集包含用于立体匹配、光流估计、视觉里程计、3D 目标检测和 3D 跟踪的标准任务基准。KITTI 的 3D 目标检测任务包含约 7,500 张训练图像和 7,500 张测试图像，标注了汽车、行人和骑行者三类物体的 3D 边界框。尽管规模相比现代数据集较小，KITTI 以其严格的标准和卓越的学术传统成为该领域的基石基准。

## 关键特征
- **数据规模**: 15,000+ 标注帧、3 种物体类别（3D 检测）、39.2 公里立体/光流数据
- **数据模态**: 立体 RGB 图像、64 线激光雷达点云、GPS/IMU 数据
- **主要指标**: AP_3D（中等难度）、IoU（立体/光流）、平移/旋转误差（里程计）
- **领域**: 自动驾驶感知、3D 目标检测、立体视觉、视觉里程计

## 与世界模型的关系
KITTI 在自动驾驶世界模型研究中主要作为历史锚点基准，用于验证模型的基础感知和预测能力。其真实的城市驾驶数据和标准化的评估协议使 KITTI 成为快速测试世界模型 3D 感知质量的理想平台。研究者常使用 KITTI 的连续视频序列评估世界模型对未来帧的预测精度，尤其在包含动态行人和车辆的复杂城市场景中。KITTI 也是 KITTI-360 和 SemanticKITTI 等扩展数据集的基础。

## 代表性用途
- PointPillars、VoxelNet 等经典 3D 检测模型的核心基准
- ORB-SLAM、DROID-SLAM 等 SLAM 系统的评测平台
- Monodepth2、ManyDepth 等单目深度估计的验证数据集
- Pseudo-LiDAR 系列方法的原始训练/测试数据
