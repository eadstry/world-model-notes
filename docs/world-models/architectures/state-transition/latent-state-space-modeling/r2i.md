---
title: "Mastering Memory Tasks with World Models"
design: "R2I"
arxiv: https://arxiv.org/abs/2403.04253
github: https://github.com/chandar-lab/Recall2Imagine
---

# R2I: Mastering Memory Tasks with World Models

::: info 论文信息
- **Design**: R2I
- **论文全称**: Mastering Memory Tasks with World Models
- **arXiv**: [https://arxiv.org/abs/2403.04253](https://arxiv.org/abs/2403.04253)
- **GitHub**: [https://github.com/chandar-lab/Recall2Imagine](https://github.com/chandar-lab/Recall2Imagine)
:::

## 核心思想

R2I (Recall2Imagine) 由 Mila/Chandar Lab 提出的专门解决记忆任务的世界模型框架。核心挑战是：许多RL 任务需的agent 记忆过去的信息（如迷宫中哪个方向是死胡同、哪个钥匙已经收集），但标准 world model 的记忆机制（的RSSM 潜GRU）在处理长程记忆时存在容量瓶颈。
R2I 的核心创新是引入显式记忆模块——agent 学习何时将关键信息写入记忆、何时从记忆读取。在想象阶段，agent 可以"回忆"（recall）记忆中的信息并"想象"（imagine）当前场景，实现记忆和想象的自然融合。这为处理需要长期记忆的决策任务（如被动-视觉迷宫）提供了解决方案。
## 技术架。
**Vision Encoding（视觉编码）**：使用DreamerV3 标准确CNN encoder + categorical RSSM。
**Knowledge Learning（知识学习）**：在 RSSM 之上增加外部记忆模块（memory bank）。记忆通过可学习的读写头（read-write head）操作：写头决定何时存储信息（key-value），读头基于当前状态和动作查询相关信息。记忆操作通过 Gumbel-softmax 实现可微分。
**Controllable Simulation（可控模拟）**：在 imagination 过程中，agent 读取记忆来补的partially observable 场景的上下文信息。这种agent 能在想象中记住"之前看到的线索。
## 代码实现要点

代码开源在 [chandar-lab/Recall2Imagine](https://github.com/chandar-lab/Recall2Imagine)。基基DreamerV3 准JAX 代码。External memory module + differentiable read-write mechanism。在 Memory Maze 等记忆任务上评估。
## 关键创新。
1. **显式记忆世界模型**：引入可学习的外部记忆模拟2. **Recall + Imagine**：记忆回忆与想象模拟的结构3. **可微读写**：Gumbel-softmax 实现端到端训练4. **POMDP 处理**：有效处理部分可观测的决策任。
## 代表性结。
在Memory Maze mPassive T-Maze 等需要长期记忆的任务上，R2I 显著优于 DreamerV3（成功率提30% 提升倍80%+）。尤其是在信息需要跨数百步保持的习惯性任务中，R2I 的记忆机制展现明显优势。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
