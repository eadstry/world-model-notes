---
title: "DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving"
design: "DriveX"
arxiv: https://arxiv.org/abs/2505.19239
---

# DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving

::: info 论文信息
- **Design**: DriveX
- **论文全称**: DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2505.19239](https://arxiv.org/abs/2505.19239)
:::

## 学习笔记

### 核心思想

DriveX 是一个自监督世界模型，旨在从大规模驾驶视频中学习可泛化的场景动力学和全面表示（几何、语义、运动），解决任务专用模型在分布外场景中泛化性不足的问题。任务专用模型因优化目标狭窄和对昂贵标注数据的依赖，往往在未见过的场景中表现不佳。DriveX 引入 Omni Scene Modeling（OSM）模块，统一了多模态监督——3D 点云预测、2D 语义表示和图像生成——来捕获完整的场景演化。为简化复杂动态学习，DriveX 提出解耦的潜在世界建模策略：将世界表示学习与未来状态解码分离，并通过动态感知射线采样（Dynamic-Aware Ray Sampling）增强运动建模。在模型迁移方面，Future Spatial Attention（FSA）从 DriveX 的预测中动态聚合时空特征，为下游任务特定的推理提供增强。

### 技术架构

**Vision Encoding（视觉编码）**：DriveX 的 Omni Scene Modeling (OSM) 模块统一了三种互补的监督信号：(1) 3D 点云预测——用 LiDAR 点云的未来帧作为几何监督；(2) 2D 语义表示——用语义分割的未来帧作为语义监督；(3) 图像生成——用未来 RGB 帧作为视觉监督。这种多模态全景监督使世界表示同时捕获几何、语义和视觉三个维度的场景信息。

**Knowledge Learning（知识学习）**：DriveX 采用解耦的潜在世界建模策略：世界表示学习阶段在潜在空间中编码场景状态和演化；未来状态解码阶段从学到的世界表示中解码为具体的 3D 点云、语义图和 RGB 图像。解耦设计使世界表示学习专注于捕获高通量、抽象的场景动态，而不必担心具体模态的解码细节。动态感知射线采样针对运动区域（而非全场景均匀采样）增强射线采样密度，提升对运动物体的建模精度。

**Controllable Simulation（可控仿真）**：通过 Future Spatial Attention（FSA），DriveX 的预测能力可以被无缝集成到下游任务中。FSA 从 DriveX 对未来场景的预测中动态聚合时空特征，并注入到下游任务网络（如占用预测、流估计、端到端规划）的关键层中，提供"预测未来→辅助当前决策"的能力。

### 代码实现要点

- **OSM 模块**：三合一多模态监督——3D 点云预测 + 2D 语义 + RGB 图像重建
- **解耦世界建模**：编码器（世界表示）与解码器（模态输出）分离
- **动态感知射线采样**：基于运动估计掩码自适应采样运动区域
- **FSA 适配器**：即插即用的下游适配器，聚合 World Model 预测特征

### 关键创新点

- **全景场景建模 (OSM)**：统一几何、语义、视觉三维度监督
- **解耦的世界建模**：表示学习与模态解码分离，降低学习难度
- **动态感知采样**：聚焦运动区域的射线采样增强动态建模
- **FSA 下游适配**：即插即用的预测特征集成方案
- **多任务 SOTA**：占用预测、流估计、端到端驾驶等问题上达到最优
