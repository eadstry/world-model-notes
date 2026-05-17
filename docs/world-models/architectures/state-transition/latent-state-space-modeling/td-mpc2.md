---
title: "TD-MPC2: Scalable, Robust World Models for Continuous Control"
design: "TD-MPC2"
arxiv: https://arxiv.org/abs/2310.16828
github: https://github.com/nicklashansen/tdmpc2
---

# TD-MPC2: Scalable, Robust World Models for Continuous Control

::: info 论文信息
- **Design**: TD-MPC2
- **论文全称**: TD-MPC2: Scalable, Robust World Models for Continuous Control
- **arXiv**: [https://arxiv.org/abs/2310.16828](https://arxiv.org/abs/2310.16828)
- **GitHub**: [https://github.com/nicklashansen/tdmpc2](https://github.com/nicklashansen/tdmpc2)
:::

## 核心思想

TD-MPC2 由 Nicklas Hansen 等人提出的可扩展世界模型连续控制框架。核心创新在于统一架构——单个算法同时实实Model-Based RL 现Model-Free RL 的优点：在latent space 中使用TD-learning 学习价值函数（model-free 风格），同时学习一个世界模型用于规划和模拟。TD-MPC2 的关键是一种称学TD-MPC 的架构，其中 latent state 通过 Task-Oriented Latent Dynamics (TOLD) 进行演化，直接优化任务目标而非像素重建。
TD-MPC2 进一步扩展了原始 TD-MPC：引入更大的模型规模型17M 参数）、Demonstration-augmented 训练、多任务预训练。其设计理念是：world model 不需要重建像素（浪费容量），应该直接学习任务相关的潜在表示。
## 技术架。
**Vision Encoding（视觉编码）**：使用可选的视觉编码器（非必需），TD-MPC2 可直接从状态空间操作。当输入为图像时，使用CNN encoder 映射到latent state。但核心设计理state-space 优先，视觉编码仅作为可选模块。
**Knowledge Learning（知识学习）**：核心是 TOLD（Task-Oriented Latent Dynamics），使用 MLP + 自监督latent 一致性损失学习潜在动力学。价值函数和策略在latent space 中通过 TD-learning 的SAC 风格优化。关键创新：不使用图像重建损失，仅使用任务相关的 latent prediction 多value prediction 损失。
**Controllable Simulation（可控模拟）**：使用MPPI (Model Predictive Path Integral) 例latent space 中进行规划，结合 TD-learned value 作为终端代价。MPPI 在latent space 中采样轨迹，使用学习到的 latent dynamics 展开。
## 代码实现要点

代码开源在 [nicklashansen/tdmpc2](https://github.com/nicklashansen/tdmpc2)。基于PyTorch。核心架构：encoder（可以CNN控 TOLD latent dynamics + MPPI planner。支持104 个连续控制任务的多任务预训练。
## 关键创新。
1. **统一 TD-MPC 框架**：Task-Oriented Latent Dynamics 消除像素重建需要2. **大规模多任务**上17M 参数模型的104 个任务预训练
3. **Demonstration 增强**：结合示范数据提升样本效的4. **MPPI 规划**：在 latent space 中高效的采样型规。
## 代表性结。
在104 个连续控制任务（Meta-World、DMControl、Isaac Gym 等）上，TD-MPC2 的多任务预训练模型在 80% 的任务上零样本超越单任务 oracle。在样本效率上比 SAC 学4-10 倍。单任务模式下在 DMControl 所有28 个任务上超越 DreamerV3。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
