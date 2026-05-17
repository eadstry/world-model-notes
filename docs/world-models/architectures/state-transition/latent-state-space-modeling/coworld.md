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

CoWorld 是清华大学提出的将离散RL 和在空RL 结合的世界模型框架。核心思想是：通过世界模型实现"离线到在于的平滑过渡。先在离线数据上预训练world model 和策略，然后利用 world model 产生额外的多样化模拟数据（augmented replay），使得策略在在线微调时获得更丰富的训练信号。
CoWorld 的关键创新是 Collaborative World Model——它在离线预训练阶段学习多个"协作"为world model ensemble，每个模型捕捉环境动态的不同方面。在线微调阶段，这些模型协同工作，产生既准确又多样化的想象数据。
## 技术架。
**Vision Encoding（视觉编码）**：标准的 CNN encoder-decoder 架构，将视觉观测映射到潜在状态。
**Knowledge Learning（知识学习）**：使用多数RSSM（DreamerV2 风格）的 ensemble 作为协作世界模型。离线阶段：所有RSSM 在离线数据集上训练。在线阶段：使用 uncertainty-based 采样策略——选择不确定度最大的 RSSM 进行探索，利用ensemble 用disagreement 驱动高效探索。
**Controllable Simulation（可控模拟）**：使用ensemble RSSM 进行想象 rollout，生成augmented replay data。策略在真实数据 + 想象数据的混合上训练。
## 代码实现要点

代码开源在 [qiwang067/CoWorld](https://github.com/qiwang067/CoWorld)。基基DreamerV2 准TensorFlow 代码。RSSM ensemble + offline-to-online fine-tuning。支持DMC 连续控制任务。
## 关键创新。
1. **离线到在线过的*：世界模型桥接离线预训练和在线微的2. **Collaborative ensemble**：多种RSSM 协作产生多样化想象数据3. **Uncertainty-based 探索**：利用ensemble disagreement 驱动探索
4. **Augmented replay**：想象数据增强真实replay

## 代表性结。
在DMC 连续控制任务上，CoWorld 仅需 10k 在线步即可从未处理的离线数据上策略提升到高性能水平。相比纯离线 RL 方法（如 CQL）和动online 方法（如 DreamerV2），CoWorld 在离线到在线过渡场景下表现最优。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
