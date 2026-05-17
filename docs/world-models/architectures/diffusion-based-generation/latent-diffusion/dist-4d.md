---
title: "DiST-4D: Disentangled Spatiotemporal Diffusion with Metric Depth  for 4D Driving Scene Generation"
design: "DiST-4D"
arxiv: https://arxiv.org/abs/2503.15208
github: https://github.com/royalmelon0505/dist4d
---

# DiST-4D: Disentangled Spatiotemporal Diffusion with Metric Depth  for 4D Driving Scene Generation

::: info 论文信息
- **Design**: DiST-4D
- **论文全称**: DiST-4D: Disentangled Spatiotemporal Diffusion with Metric Depth  for 4D Driving Scene Generation
- **arXiv**: [https://arxiv.org/abs/2503.15208](https://arxiv.org/abs/2503.15208)
- **GitHub**: [https://github.com/royalmelon0505/dist4d](https://github.com/royalmelon0505/dist4d)
:::

## 学习笔记

## 核心思想

DiST-4D（ICCV 2025）提出了首个解耦时空扩散框架，用于前馈式（feed-forward）动作D驾驶场景生成——同时支持时序外推（temporal extrapolation）和空间新视角合成（novel view synthesis, NVS），无需逐场景优化。该工作的核心洞察是：度量深度（metric depth）是一种理想的几何表示，因为它提供了一种视角一致的几何表征，能够无缝连接时间预测和空间合成两个子任务。

DiST-4D将复杂问题解耦为两个扩散过程：DiST-T负责从历史多视角观察和车辆控制信号预测未来RGB-D序列（时序外推），DiST-S利用预测的RGB-D序列通过投影和条件扩散生成新视角观测（空间合成）。这种解耦设计使两个子网络可以独立优化和扩展。

DiST-S引入的循环一致性（Cycle Consistency）机制是该工作的关键创新——通过前向-后向渲染约束引入自监督信号，显著缩小了训练视角和未见视角之间的泛化差距。度量深度作为核心几何表示，既确保了时间预测的可靠性，也为空间新视角合成提供了准确的几何基础。

## 技术架。

**Vision Encoding（视觉编码）**：DiST-T基于MagicDriveDiT架构，使用CogVideoX VAE将多视角图像编码为潜在空间表示，同时使用T5文本编码器处理控制信号。深度信息通过DepthLab预处理流水线从LiDAR和多视角图像中提取度量深度。

**Knowledge Learning（世界知识学习）**：DiST-T采用扩散Transformer（DiT）在潜在空间中预测未来多帧的RGB-D序列。模型同时预测RGB图像和度量深度图，利用多视角一致性进行监督。DiST-S基于Stable Video Diffusion（SVD）架构，通过投影已有视角的RGB-D信息生成稀疏条件，再利用扩散过程补全为密集的RGB-D输出。

**Controllable Simulation（可控推演）**：整个框架以前序多视角图像和车辆控制信号（速度、转向角等）为输入条件。DiST-T生成未来4D场景表示（多视角RGB-D序列），这些序列可聚合为点云，支持子弹时间（bullet time）渲染效果。DiST-S允许在任意新视角间进行相机移动（+1m作2m作4m横向偏移），实现空间4D自由视角导航。

## 代码实现要点

- 两个独立的子模块：DiST_T（时序扩散）和DiST_S（空间扩散），分别使用不同的conda环境
- 基于nuScenes数据集，需要预处理度量深度和语义分割信。
- 深度预处理流程复杂：包含MVS（多视角立体匹配）、DepthLab深度精修和语义分割三个步。
- DiST-T基于MagicDriveDiT修改，支持多帧RGB-D联合生成
- DiST-S基于FreeVS修改，引入循环一致性训练（SCC）机。
- 提供Google Drive预训练模型链接，支持仅推理模。

## 关键创新。

- 首次实现前馈式D驾驶场景生成，无需逐场景优。
- 解耦时空扩散：独立优化时序预测和空间合成两个扩散过。
- 度量深度作为核心几何表示，统一时间预测和空间NVS
- 循环一致性（SCC）机制：前向-后向渲染约束缩小泛化差距
- 支持子弹时间渲染和任意新视角空间导航
- ICCV 2025收录

## 代表性结。

- 时序预测和NVS任务均达到SOTA性能
- 规划相关评估中展现竞争性表。
- 解耦设计允许各子模块独立扩展和优化
- 基于nuScenes的全方位验证实验

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
