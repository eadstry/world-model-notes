---
title: "Structured World Models from Human Videos"
design: "SWIM"
arxiv: https://arxiv.org/abs/2308.10901
website: https://human-world-model.github.io/
---

# SWIM: Structured World Models from Human Videos

::: info 论文信息
- **Design**: SWIM
- **论文全称**: Structured World Models from Human Videos
- **arXiv**: [https://arxiv.org/abs/2308.10901](https://arxiv.org/abs/2308.10901)
- **Website**: [https://human-world-model.github.io/](https://human-world-model.github.io/)
:::

## 核心思想

SWIM (Structured World Models from Human Videos) 提出了从人类示范视频中学习结构化世界模型的方法。与传统的 RL 需要大量环境交互不同，SWIM 从 YouTube 风格的人类活动视频中学习环境的物理动力学。核心创新是提取"结构化"的潜在表示——分离 agent（人）和环境（背景、物体），使得 world model 能够理解"谁做了什么，在什么环境中"。

SWIM 的功能在于将人类视频转换为机器人的先验知识。学习到的世界模型可以在下游迁移到机器人操控任务中，实现只需少量示范即可完成新任务的能力。

## 技术架构

**Vision Encoding（视觉编码）**：使用视觉 Transformer 结合动作感知的时空编码。关键设计：分离前景（人/手/物体）和背景的特征编码。

**Knowledge Learning（知识学习）**：两阶段学习。第一阶段：从人类视频中提取结构化动力学（物体如何被移动、遮挡关系如何变化）。第二阶段：将人类动作空间对齐到机器人动作空间（action translation）。使用 contrastive learning 确保同一动作在不同体现下产生相似的 latent 变化。

**Controllable Simulation（可控模拟）**：学习到的世界模型可作为机器人策略的模拟器。给定机器人动作，world model 预测场景（含物体运动）的变化。

## 代码实现要点

网站 [human-world-model.github.io](https://human-world-model.github.io/)。基于 PyTorch，ViT encoder + structured latent dynamics + action translation module。

## 关键创新点

1. **从人类视频学世界模型**：无需机器人交互即可学习环境动力学
2. **结构化表示**：分离 agent 和环境的潜在表示
3. **人-机器人动作对齐**：跨动作空间的动力学迁移
4. **零样本机器人知识**：人类视频提供机器人策略先验

## 代表性结果

在 MetaWorld 和 Franka Kitchen 操控任务上，SWIM 仅需 5-10 个机器人示范即可达到竞争性性能（通常需 100+ 示范）。结构化表示可视化清晰展示 agent 和环境的分离。
