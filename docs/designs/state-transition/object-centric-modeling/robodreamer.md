---
title: "RoboDreamer: Learning Compositional World Models for Robot Imagination"
design: "RoboDreamer"
arxiv: https://arxiv.org/abs/2404.12377
github: https://github.com/rainbow979/robodreamer
---

# RoboDreamer: Learning Compositional World Models for Robot Imagination

::: info 论文信息
- **Design**: RoboDreamer
- **论文全称**: RoboDreamer: Learning Compositional World Models for Robot Imagination
- **arXiv**: [https://arxiv.org/abs/2404.12377](https://arxiv.org/abs/2404.12377)
- **GitHub**: [https://github.com/rainbow979/robodreamer](https://github.com/rainbow979/robodreamer)
:::

## 核心思想

RoboDreamer 是提出了一个面向机器人操作的自然语言条件组合式世界模型。核心创新是将语言指令与 object-centric world model 结合——用户可以通过自然语言描述场景变化（如"将红色方块推到蓝色圆圈旁边"），RoboDreamer 在 object-centric latent space 中生成对应的视觉动力学，实现语言引导的机器人想象。

RoboDreamer 的关键贡献是组合泛化：通过对象中心的表示，语言指令中指代的物体（"红色方块"、"蓝色圆圈"）能自然地映射到对应的 object slots，实现零样本的语言-物体绑定。这使得模型能通过 novel 的语言指令组合完成未见过的任务。

## 技术架构

**Vision Encoding（视觉编码）**：Slot Attention 将场景分解为物体 slots，同时每个物体提取视觉特征（颜色、形状、位置）。

**Knowledge Learning（知识学习）**：语言指令通过 CLIP 文本编码器编码，通过 cross-attention 条件化到各个物体 slot 的动力学预测中。World model 学习在语言条件下的物体运动预测。关键：物体 slot 可以自动与文本中提到的物体对齐（通过视觉-语言对比学习）。

**Controllable Simulation（可控模拟）**：给定语言指令，在 object-centric latent space 中生成语言条件化的想象轨迹。Actor 在想象中学会如何通过操控特定物体来满足语言目标。

## 代码实现要点

代码开源在 [rainbow979/robodreamer](https://github.com/rainbow979/robodreamer)。基于 Slot Attention + CLIP text encoder + DreamerV3-style RSSM。在 Language Table 和 CALVIN 上评估。

## 关键创新点

1. **语言条件化的物体世界模型**：语言直接条件化物体级动力学
2. **零样本语言-物体绑定**：无需训练即可将文本指代映射到 object slots
3. **组合任务泛化**：novel 的物体组合和动词组合实现零样本执行
4. **自然语言想象**：通过语言描述"想象"未来场景

## 代表性结果

在 Language Table 的 8 种操控任务上，RoboDreamer 的语言指令执行成功率达 75%+。在 novel 语言组合（训练中未见过的"动词+物体"组合）中，零样本成功率达 50%，证明了组合泛化能力。
