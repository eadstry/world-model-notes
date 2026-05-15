---
title: "DriveWorld: 4D Pre-Trained Scene Understanding via World Models for Autonomous Driving"
design: "DriveWorld"
arxiv: https://arxiv.org/abs/2405.04390
---

# DriveWorld: 4D Pre-Trained Scene Understanding via World Models for Autonomous Driving

::: info 论文信息
- **Design**: DriveWorld
- **论文全称**: DriveWorld: 4D Pre-Trained Scene Understanding via World Models for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2405.04390](https://arxiv.org/abs/2405.04390)
:::

## 核心思想

DriveWorld 是中科院和华为提出的基于世界模型的 4D 自动驾驶场景理解框架。核心创新是将世界模型预训练引入自动驾驶场景理解——通过预测未来帧的 latent state 变化来学习时空表示，然后将学到的表示用于下游感知任务（如语义分割、3D 检测和运动预测）。

DriveWorld 的核心理念是：好的场景理解需要理解动态（时间维度），而不仅仅是静态（空间维度）。世界模型预训练迫使 encoder 学习时序变化的本质特征，这些特征对下游感知任务更有效。

## 技术架构

**Vision Encoding（视觉编码）**：使用 Memory-efficient 时空编码器处理多帧多视图输入。融合空间（BEV）和时间（帧间）信息为 4D 表示。

**Knowledge Learning（知识学习）**：World model 预训练：encoder 输出 4D latent state，通过 latent dynamics model（Transformer-based）预测未来帧的 latent state。使用自监督 latent prediction loss 预训练 encoder。预训练后，encoder 被用于下游感知任务（fine-tuning）。

**Controllable Simulation（可控模拟）**：World model 主要用于特征预训练而非在线规划。预训练后的 encoder 在下游感知任务上展现显著性能提升。

## 代码实现要点

基于 PyTorch 实现。时空 Transformer encoder + latent dynamics predictor。在 nuScenes 和 Waymo 数据集上预训练和评估。

## 关键创新点

1. **World Model 预训练用于感知**：将世界模型用于特征表征学习而非规划
2. **4D 表示学习**：同时学习空间（3D BEV）和时间（帧间）特征
3. **Memory-efficient 设计**：高效处理多帧多视图输入
4. **下游任务增强**：预训练显著提升多项感知任务

## 代表性结果

在 nuScenes 上，DriveWorld 预训练的 encoder 相比 ImageNet 预训练，在 3D 检测和运动预测任务上提升 3-5%。在 nuScenes 3D detection 任务上达到 SOTA（NDS 74.1%），在运动预测上 minADE 降低 10%。世界模型预训练带来的时序理解能力是最关键的贡献。
