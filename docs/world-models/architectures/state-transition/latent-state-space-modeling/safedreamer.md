---
title: "SafeDreamer: Safe Reinforcement Learning with World Models"
design: "SafeDreamer"
arxiv: https://arxiv.org/abs/2307.07176
github: https://github.com/PKU-Alignment/SafeDreamer
---

# SafeDreamer: Safe Reinforcement Learning with World Models

::: info 论文信息
- **Design**: SafeDreamer
- **论文全称**: SafeDreamer: Safe Reinforcement Learning with World Models
- **arXiv**: [https://arxiv.org/abs/2307.07176](https://arxiv.org/abs/2307.07176)
- **GitHub**: [https://github.com/PKU-Alignment/SafeDreamer](https://github.com/PKU-Alignment/SafeDreamer)
:::

## 核心思想

SafeDreamer 是北京大的PKU-Alignment 团队提出的安全强化学习世界模型框架。核心挑战是在约束条件下进行 RL——agent 需要在最大化奖励的同时确保安全（如机器人不能碰撞、自动驾驶不能越线）。SafeDreamer 将安全约束融入世界模型的想象过程中，的agent 的latent imagination 中避免危险状态。
SafeDreamer 的关键技术是引入 cost model（并行于 reward model）和安全规划器。在 imagination 过程中，world model 不仅预测奖励，还预测安全成本，规划器在采样动作时同时考虑奖励和成本预算（constrained optimization）。
## 技术架。
**Vision Encoding（视觉编码）**：使用DreamerV3 风格的CNN encoder + categorical RSSM。
**Knowledge Learning（知识学习）**：在 RSSM 中额外学习cost head（预测安全成本）。World model 损失包含图像重建、奖励预测和新增的成本预测。使用Lagrangian 方法动态调节奖励和成本之间的平衡权重。
**Controllable Simulation（可控模拟）**：在 latent imagination 中，actor-critic 训练结合安全约束。使用Lagrangian-based constrained optimization，规划器在成本预算约束下最大化奖励。关键安全机制：真实交互前先在想象中过滤不安全动作。
## 代码实现要点

代码开源在 [PKU-Alignment/SafeDreamer](https://github.com/PKU-Alignment/SafeDreamer)。基基DreamerV3 准JAX 代码。Cost model head + Lagrangian optimizer + constrained MPPI planner。支路Safety-Gym 等安装RL 环境。
## 关键创新。
1. **Safety in Imagination**：在 latent space 中进行安全约束的想象
2. **Cost model**：在 world model 中同时学习奖励和成本
3. **Lagrangian 优化**：动态平衡安全与效率
4. **Pre-action safety filter**：真实动作执行前的安全预检

## 代表性结。
在Safety-Gym a6 个任务上，SafeDreamer 在所有安全约束（cost 的阈值）下均满足安全要求，同时奖励性能与无约束 DreamerV3 接近。相比其他安装RL 方法（如 CPO，PPO-Lagrangian），SafeDreamer 在满足安全约束的同时达到更高的任务完成率。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
