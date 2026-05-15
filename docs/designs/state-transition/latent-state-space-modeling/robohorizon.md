---
title: "RoboHorizon: An LLM-Assisted Multi-View World Model for Long-Horizon Robotic Manipulation"
design: "RoboHorizon"
arxiv: https://arxiv.org/abs/2501.06605
---

# RoboHorizon: An LLM-Assisted Multi-View World Model for Long-Horizon Robotic Manipulation

::: info 论文信息
- **Design**: RoboHorizon
- **论文全称**: RoboHorizon: An LLM-Assisted Multi-View World Model for Long-Horizon Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2501.06605](https://arxiv.org/abs/2501.06605)
:::

## 核心思想

RoboHorizon 提出了一个 LLM 辅助的多视图世界模型用于长程机器人操控。核心挑战是：长程操控任务（如"整理书桌"包含拿起书、放到书架上、排列整齐等子任务）需要 agent 理解任务的高层结构和时间分解。RoboHorizon 利用 LLM 的语义理解能力将长程任务分解为多个子目标，然后让多视图世界模型在每个子目标范围内进行想象和规划。

RoboHorizon 的关键设计是 LLM + World Model 的协同：LLM 负责"what to do"（语义层面任务分解），World Model 负责"how to do"（物理层面动作规划）。这种分工使 agent 能处理"整理书桌"这类在纯 RL 中几乎不可能从零学习的长程任务。

## 技术架构

**Vision Encoding（视觉编码）**：多视图输入（手腕 + 俯视）通过独立 CNN encoder 处理，融合为统一的 latent state。

**Knowledge Learning（知识学习）**：多视图 RSSM（DreamerV3 风格）学习物理动力学。LLM（GPT 系列）作为任务规划器，接收任务描述和初始观测，输出子目标序列。子目标被转换为 latent space 中的 target states，指导世界模型的 imagination 方向。

**Controllable Simulation（可控模拟）**：LLM 产生子目标 → World Model 在每个子目标范围内使用 goal-conditioned imagination 学习如何到达子目标 → 低层策略执行。在模仿中对不可达状态进行检测和修正。

## 代码实现要点

暂无开源代码。基于 DreamerV3 JAX + LLM task planner + multi-view encoder。在 Robosuite 和 Franka Kitchen 上评估。

## 关键创新点

1. **LLM + World Model 协同**：语义规划（LLM）和物理规划（WM）分离又协作
2. **多视图目标条件**：目标图像作为 world model 的条件输入
3. **长程任务处理**：通过任务分解处理 10+ 步骤的长程操控
4. **语义-物理对齐**：LLM 的输出与 latent state 对齐

## 代表性结果

在 Franka Kitchen 的长程任务（4-6 子任务组合）中，RoboHorizon 的成功率比纯 DreamerV3 高 3 倍。LLM 的任务分解使 agent 在需要"理解整体任务"的场景中（如所有任务的正确顺序）表现显著提升。
