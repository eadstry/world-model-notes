---
title: "Whole-Body Conditioned Egocentric Video Prediction"
design: "PEVA"
arxiv: https://arxiv.org/abs/2506.21552
website: https://dannytran123.github.io/PEVA/
---

# PEVA: Whole-Body Conditioned Egocentric Video Prediction

::: info 论文信息
- **Design**: PEVA
- **论文全称**: Whole-Body Conditioned Egocentric Video Prediction
- **arXiv**: [https://arxiv.org/abs/2506.21552](https://arxiv.org/abs/2506.21552)
- **Website**: [https://dannytran123.github.io/PEVA/](https://dannytran123.github.io/PEVA/)
:::

## 学习笔记

## 核心思想

PEVA（Predict Ego-centric Video from human Actions）是 Meta FAIR 与 UC Berkeley（Malik/LeCun/Darrell 团队）推出的以**人类全身动作**为条件的第一人称视频预测模型。核心设想是：给定过去的自我中心视频和表示为**相对 3D 身体姿态**的动作信号，模型学习从第一人称视角模拟物理人体动作如何塑造环境。

PEVA 以**运动学姿态轨迹**为条件——利用人体关节层级结构来表达身体运动，使模型能够理解不同关节运动对视觉场景的影响。模型在 Nymeria（大规模真实世界自我中心视频和身体姿态捕捉数据集）上训练自回归条件扩散 Transformer。

工作设计了**层级评估协议**，包含难度递增的任务，全面分析模型的具身预测和控制能力。PEVA 代表了从人类视角出发，用视频预测来建模复杂真实世界环境和具身智能体行为的**初步尝试**，为具身世界模型开辟了新方向。

## 技术架构

**Vision Encoding（视觉编码）**：自回归条件扩散 Transformer 处理过去帧 + 相对 3D 身体姿态作为输入。人体关节层级结构为姿态表示提供了先验结构——关节之间的运动学约束使动作表示更有物理意义。

**Knowledge Learning（世界知识学习）**：在 Nymeria 数据集上训练——该数据集提供真实世界的自我中心视频与精确的身体姿态捕捉配对数据。模型学习身体动作如何影响第一人称视角下的环境变化（如手部操控物体、行走带来的场景移动等）。

**Controllable Simulation（可控推演）**：3D 身体姿态作为控制信号驱动自我中心视频的生成。层级评估协议从简单到复杂逐步测试模型能力：从短时单动作预测到长时动作序列规划的视觉结果预测。

## 代码实现要点

- 自回归条件扩散 Transformer：以过去帧 + 3D 姿态为条件
- Nymeria 数据集：真实世界自我中心视频 + 身体姿态捕获
- 人体关节层级结构：为姿态表示提供运动学先验
- 层级评估协议：难度递增的具身预测能力测试
- Meta FAIR + UC Berkeley (Malik/LeCun/Darrell)

## 关键创新点

- 首次以全身 3D 骨骼姿态为条件的自我中心视频预测
- 人体关节层级结构作为动作表示的运动学先验
- Nymeria 大规模真实世界自我中心视频数据集驱动
- 层级评估协议系统分析具身预测和控制能力
- 为具身世界模型开辟人类视角的新范式

## 代表性结果

- 从人类第一人称视角预测动作对环境的影响
- 层级评估协议全面分析能力梯度
- 复杂真实世界环境和具身行为的建模初探
