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

OccVLA 将 3D 占用表示融入多模态推理中以实现统一的视觉-语言-动作能力。MLLM 虽然展现了强大的视觉-语言-动作推理能力，但在精确自动驾驶任务中面临两个关键挑战：(1) 传统基于手工标注或预定义方法难以高效获取 3D 空间表示；(2) VLMs 通常缺乏显式的 3D 视觉-动作预训练，导致细粒度空间理解在端到端训练中丢失。OccVLA 的核心创新是引入隐式 3D 占用监督——将 3D 占用同时作为预测输出和辅助监督信号，使得模型直接从 2D 视觉输入中学习细粒度的 3D 空间结构。占用预测被设计为隐式推理过程，仅在训练时发挥作用，推理时可完全跳过而没有任何计算开销。这一设计使模型在保持推理效率的同时获得了 3D 空间感知能力。在 nuScenes 轨迹规划和 3D VQA 任务上均达到 SOTA。

### 方法架构

**视觉编码（Vision Encoding）**：OccVLA 以 2D 图像作为唯一视觉输入（不使用 LiDAR 等），通过视觉编码器（ViT）提取特征。关键设计是不需要显式的 3D 输入——模型通过隐式监督从 2D 图像中"推测"3D 结构。

**知识学习（Knowledge Learning）**：OccVLA 的训练分为两个阶段。第一阶段基于 MLLM 骨干进行标准的 VLA 训练，包括轨迹预测和 VQA。第二阶段引入 3D 占用预测分支——模型中间层的隐式表示被用于预测 3D 占用状态，占用标签作为辅助监督信号。占用监督使中间表示必须编码 3D 空间信息，从而强化主任务的特征质量。由于占用头仅在训练时使用，推理时可被完全移除，不引入任何延迟。

**可控仿真（Controllable Simulation）**：OccVLA 在 nuScenes 轨迹预测任务中展现出优异的自回归 rollout 能力，支持 3D VQA 如"前方是否有障碍物？障碍物的位置在哪里？"等自动驾驶关键 query，达到 SOTA。占用隐式监督的额外好处是全程可解释——虽然模型没有显式 3D 输入，但因为占用监督的"隐式压缩"，中间层已经学会了 3D 结构理解。

### 关键实现要点

- **隐式占用监督**：VLA 中间层添加辅助头预测 3D 占用，作为额外训练信号
- **推理时零开销**：占用预测头仅在训练中激活，推理时可完全移除
- **纯视觉 VLA**：仅依赖 2D 图像输入，不需要 LiDAR 等传感器
- **nuScenes 规划与 VQA**：轨迹预测和 3D VQA 双任务评估

### 关键创新点

- **隐式 3D 占用监督**：将占用作为"免费"监督信号注入 VLA 中间表示学习
- **推理零开销**：占用头训练时使用，推理时完全移除
- **2D 到 3D 空间桥梁**：从 2D 图像通过隐式监督强化 3D 空间感知
- **SOTA 轨迹规划 + VQA**：统一框架实现双任务评估

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
