---
title: "OccVLA: Vision-Language-Action Model with Implicit 3D Occupancy Supervision"
design: "OccVLA"
arxiv: https://arxiv.org/abs/2509.05578
---

# OccVLA: Vision-Language-Action Model with Implicit 3D Occupancy Supervision

::: info 论文信息
- **Design**: OccVLA
- **论文全称**: OccVLA: Vision-Language-Action Model with Implicit 3D Occupancy Supervision
- **arXiv**: [https://arxiv.org/abs/2509.05578](https://arxiv.org/abs/2509.05578)
:::

## 学习笔记

### 核心思想

OccVLA 提出将 3D 占用表示集成到统一多模态推理过程中的新框架。MLLM 已展示强视觉-语言推理能力，但仍缺乏对自动驾驶至关重要的鲁棒 3D 空间理解。这源于两大挑战：(1) 难以在不依赖昂贵人工标注的情况下构建可访问且有效的 3D 表示；(2) VLMs 中缺乏大规模 3D 视觉-语言预训练导致细粒度空间细节丢失。OccVLA 的核心创新是将稠密 3D 占用同时作为预测输出和监督信号——模型直接从 2D 视觉输入学习细粒度空间结构。占用预测被视为隐式推理过程，可在推理时跳过而不影响性能，因此不增加额外计算开销。在 nuScenes 轨迹规划和 3D VQA 任务上达到 SOTA。

### 技术架构

**Vision Encoding（视觉编码）**：OccVLA 以 2D 多视图图像作为唯一视觉输入（无 LiDAR、无深度），通过视觉编码器（如 ViT）提取特征。关键创新是不需要显式的 3D 输入——模型通过隐式推理从 2D 特征中"猜测"3D 结构。

**Knowledge Learning（知识学习）**：OccVLA 的训练包含两部分。主体 VLA 模型（基于 MLLM 骨干）进行轨迹规划和 VQA。同时，一个 3D 占用预测分支从 VLA 的中间表示中预测稠密 3D 占用状态，作为额外的监督信号。占用监督迫使中间表示隐含地编码 3D 空间信息（物体位置、形状、距离等），使 VLA 的推理具有空间感知性。推理时占用分支可以完全跳过，零额外计算。

**Controllable Simulation（可控仿真）**：OccVLA 在 nuScenes 轨迹规划（预测自车未来轨迹）和 3D VQA（如"前方是否有障碍物？障碍物距离多远？"）上达到 SOTA。占用作为隐式监督的好处是全可解释——模型虽然没有显式 3D 输入，但因为占用监督的"挤压"，中间特征空间已经学会了 3D 结构理解。

### 代码实现要点

- **隐式占用监督**：VLA 中间层接副输出头预测 3D 占用，作为辅助训练信号
- **推理时分支切除**：占用预测头仅用于训练，推理时丢弃，零额外开销
- **纯视觉 VLA**：仅依赖 2D 多视图输入，无需 LiDAR 或深度
- **nuScenes 评估**：轨迹规划和 3D VQA 双任务

### 关键创新点

- **隐式 3D 占用监督**：将占用作为"免费"监督信号注入 VLA 中间表示学习
- **推理零成本**：占用头仅训练时使用，推理时零额外开销
- **2D→3D 空间理解**：纯 2D 输入通过隐式监督获得强 3D 空间感知
- **SOTA 轨迹规划 + VQA**：单一架构双任务领先
