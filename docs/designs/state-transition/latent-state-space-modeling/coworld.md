---
title: "Making Offline RL Online: Collaborative World Models for Offline Visual Reinforcement Learning"
design: "CoWorld"
arxiv: https://arxiv.org/abs/2305.15260
github: https://github.com/qiwang067/CoWorld
---

# CoWorld: Making Offline RL Online: Collaborative World Models for Offline Visual Reinforcement Learning

::: info 论文信息
- **Design**: CoWorld
- **论文全称**: Making Offline RL Online: Collaborative World Models for Offline Visual Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2305.15260](https://arxiv.org/abs/2305.15260)
- **GitHub**: [https://github.com/qiwang067/CoWorld](https://github.com/qiwang067/CoWorld)
:::

## 核心思想

CoWorld 是清华大学提出的将离线 RL 和在线 RL 结合的世界模型框架。核心思想是：通过世界模型实现"离线到在线"的平滑过渡。先在离线数据上预训练 world model 和策略，然后利用 world model 产生额外的多样化模拟数据（augmented replay），使得策略在在线微调时获得更丰富的训练信号。

CoWorld 的关键创新是 Collaborative World Model——它在离线预训练阶段学习多个"协作"的 world model ensemble，每个模型捕捉环境动态的不同方面。在线微调阶段，这些模型协同工作，产生既准确又多样化的想象数据。

## 技术架构

**Vision Encoding（视觉编码）**：标准的 CNN encoder-decoder 架构，将视觉观测映射到潜在状态。

**Knowledge Learning（知识学习）**：使用多个 RSSM（DreamerV2 风格）的 ensemble 作为协作世界模型。离线阶段：所有 RSSM 在离线数据集上训练。在线阶段：使用 uncertainty-based 采样策略——选择不确定度最大的 RSSM 进行探索，利用 ensemble 的 disagreement 驱动高效探索。

**Controllable Simulation（可控模拟）**：使用 ensemble RSSM 进行想象 rollout，生成 augmented replay data。策略在真实数据 + 想象数据的混合上训练。

## 代码实现要点

代码开源在 [qiwang067/CoWorld](https://github.com/qiwang067/CoWorld)。基于 DreamerV2 的 TensorFlow 代码。RSSM ensemble + offline-to-online fine-tuning。支持 DMC 连续控制任务。

## 关键创新点

1. **离线到在线过渡**：世界模型桥接离线预训练和在线微调
2. **Collaborative ensemble**：多个 RSSM 协作产生多样化想象数据
3. **Uncertainty-based 探索**：利用 ensemble disagreement 驱动探索
4. **Augmented replay**：想象数据增强真实 replay

## 代表性结果

在 DMC 连续控制任务上，CoWorld 仅需 10k 在线步即可从未处理的离线数据上策略提升到高性能水平。相比纯离线 RL 方法（如 CQL）和纯 online 方法（如 DreamerV2），CoWorld 在离线到在线过渡场景下表现最优。
