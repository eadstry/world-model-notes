---
title: "SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences"
design: "SemanticKITTI"
arxiv: https://arxiv.org/abs/1904.01416
github: https://github.com/PRBonn/semantic-kitti-api
---

# SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences

::: info 论文信息
- **Design**: SemanticKITTI
- **论文全称**: SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences
- **arXiv**: [https://arxiv.org/abs/1904.01416](https://arxiv.org/abs/1904.01416)
- **GitHub**: [https://github.com/PRBonn/semantic-kitti-api](https://github.com/PRBonn/semantic-kitti-api)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1904.01416](https://arxiv.org/abs/1904.01416)
- **GitHub**: [https://github.com/PRBonn/semantic-kitti-api](https://github.com/PRBonn/semantic-kitti-api)

## 简介
SemanticKITTI 是由 University of Bonn 提出的基于 KITTI 原始激光雷达序列的大规模点云语义分割基准。该数据集对 KITTI 的 22 个原始激光雷达序列（共 43,552 帧点云）进行了逐点语义标注，覆盖 28 个语义类别（包括汽车、行人、路面、建筑、植被等）。SemanticKITTI 的标注方式是将 3D 激光雷达点的标注投影到 2D 图像上，由人类标注员在图像空间标注后再反投影回 3D，这保证了标注的精确性。

SemanticKITTI 定义了多个关键任务：单帧点云语义分割、4D 全景分割（结合时间维度）和基于序列的语义场景补全（Semantic Scene Completion）。其中 4D 全景分割任务要求对同一个物理物体在跨时间步中保持一致的 ID 和语义标签，这对模型的时序理解能力提出了很高要求。SemanticKITTI 的序列式设计（非随机采样帧）也为时序感知模型提供了宝贵的连续帧评测数据。

## 关键特征
- **数据规模**: 43,552 帧点云、22 个数据序列、28 个语义类、逐点标注
- **数据模态**: 激光雷达点云（逐点语义标注）、RGB 图像（辅助标注）
- **主要指标**: mIoU（点云分割）、PQ（全景分割）、IoU（场景补全）
- **领域**: 激光雷达语义分割、4D 全景理解、场景补全

## 与世界模型的关系
SemanticKITTI 是训练 3D 驾驶世界模型的重要语义标注数据源。对于基于激光雷达（LiDAR-based）的世界模型，SemanticKITTI 提供了密集的逐点真值，允许模型学习"3D 几何→语义标签"的精确映射。其 4D 全景分割任务直接关联世界模型的时序一致性需求——一个好的世界模型预测必须保持物体身份的时序连续性。SemanticKITTI 也是激光雷达世界模型（如 OccWorld 的 LiDAR 分支）的常用评测基准。

## 代表性用途
- Cylinder3D、MinkowskiNet 等稀疏卷积点云分割模型的核心基准
- 4D-PLS 和 4D-StOP 等全景分割方法的标准评测平台
- OccWorld (2024) 的 LiDAR 世界模型分支的验证数据集
- LM-Nav 和自动驾驶 BEV 感知的辅助训练数据来源
