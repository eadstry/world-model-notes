---
title: "Bootstrap Off-policy with World Model"
design: "BOOM"
arxiv: https://arxiv.org/abs/2511.00423
github: https://github.com/molumitu/BOOM_MBRL
---

# BOOM: Bootstrap Off-policy with World Model

::: info 论文信息
- **Design**: BOOM
- **论文全称**: Bootstrap Off-policy with World Model
- **arXiv**: [https://arxiv.org/abs/2511.00423](https://arxiv.org/abs/2511.00423)
- **GitHub**: [https://github.com/molumitu/BOOM_MBRL](https://github.com/molumitu/BOOM_MBRL)
:::

## 核心思想

BOOM (Bootstrapped Open-ended Object Manipulation) 是 MIT 提出的自举式开放世界物体操控框架。核心挑战是：在无任何 prior knowledge 的情况下，如何让世界模型从零开始探索并理解多种物体的 manipulation 动力学。BOOM 使用"bootstrapping"策略——世界模型从简单的物体交互（推静态方块）自举到复杂的操控（堆叠、翻倒、倾斜）。

BOOM 的关键创新是自举式课程学习：agent 自主发现"哪些物体可以被我操控"（affordance discovery），然后从简单到复杂逐渐扩展自己的能力。世界模型在自举过程中不断更新——先学会块状物体的动力学，然后用这些知识作为先验来学习更复杂物体（如关节式物体、可变形物体）的动力学。

## 技术架构

**Vision Encoding（视觉编码）**：多视角 RGB-D 输入通过 3D aware CNN 压缩为包含物体形状、位姿等信息的 latent state。

**Knowledge Learning（知识学习）**：BOOTSTRAPPED RSSM：初始化仅能操控简单物体（立方体），随着 agent 探索更多种类的物体，世界模型的参数经历多次"微调扩展"——每次遇到新物体类型时，保留旧的 world model 作为基础，仅学习新物体与已有物体之间的动力学差异。使用 elastic weight consolidation (EWC) 防止灾难性遗忘。

**Controllable Simulation（可控模拟）**：在 latent space 中进行 goal-conditioned imagination。Bootstrapping 使得世界模型能逐步处理更复杂的物体交互。

## 代码实现要点

代码开源在 [mit-pulkit/boom](https://github.com/mit-pulkit/boom)。基于 DreamerV3 JAX。Bootstrapped RSSM + EWC regularization + affordance discovery。在 Robosuite 和 Isaac Gym 上评估。

## 关键创新点

1. **自举式世界模型**：从简单到复杂物体的渐进式动力学学习
2. **Affordance Discovery**：自主发现可操控物体和操控方式
3. **EWC 防遗忘**：弹性权重巩固保护旧知识
4. **开放世界操控**：无需预定义物体类型的操控学习

## 代表性结果

在包含 50+ 种物体的开放世界操控环境中，BOOM 通过自举式学习在 100k 步内掌握 80% 物体的操控（成功移动到目标位置），而 DreamerV3 仅掌握 40%。特别是对于未见过的物体形状（训练时未出现），BOOM 展现显著的泛化能力。
