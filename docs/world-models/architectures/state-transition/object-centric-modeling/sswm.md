---
title: "Slot Structured World Models"
design: "SSWM"
arxiv: https://arxiv.org/abs/2402.03326
github: https://github.com/JonathanCollu/Slot-Structured-World-Models
---

# SSWM: Slot Structured World Models

::: info 论文信息
- **Design**: SSWM
- **论文全称**: Slot Structured World Models
- **arXiv**: [https://arxiv.org/abs/2402.03326](https://arxiv.org/abs/2402.03326)
- **GitHub**: [https://github.com/JonathanCollu/Slot-Structured-World-Models](https://github.com/JonathanCollu/Slot-Structured-World-Models)
:::

## 核心思想

SSWM (Slot Structured World Models) 提出了一个在 DreamerV2 风格框架中使用slot 结构化表示的世界模型。核心创新是一object-centric slot 表示供Dreamer 了latent imagination RL 框架集成——在 slot 空间中进行RSSM 式的潜在动力学学习，然后训slot latent space 中进行基于想象的 actor-critic 训练。
SSWM 的关键贡献是证明了object-centric 表示可以在强化学习任务中带来样本效率和泛化能力的提升。Slot 结构化表示使 world model 能更好地处理遮挡、多物体交互和场景组合变化，这对复杂操控任务尤为重要。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为物体的slots。每个slot 代表一个物体或背景区域。
**Knowledge Learning（知识学习）**：在 slot 表示之上应用 DreamerV2 风格的RSSM。每个slot 拥有独立的RSSM 状态，的slot 之间通过 Transformer 程self-attention 进行信息交换。World model 的损失包含：slot-level 图像重建（通过 slot decoder 合成图像）、KL 散度和奖励预测。
**Controllable Simulation（可控模拟）**：在 slot-structured latent space 中进行imagination rollout，然后在此空间中使用 Dreamer 风格的actor-critic RL。Slot 级别的状态使 agent 能关注与任务相关的特定物体。
## 代码实现要点

代码开源在 [JonathanCollu/Slot-Structured-World-Models](https://github.com/JonathanCollu/Slot-Structured-World-Models)。基准DreamerV2 + Slot Attention。在 Atari 100k 于ProcGen 等环境上评估。
## 关键创新。
1. **Dreamer + Slot Attention 融合**：将 slot 表示集成的latent imagination RL
2. **Slot 级别的RSSM**：每个物体拥有独立的潜在动力学状态3. **Slot 间通信**：通过 self-attention 建模物体交互
4. **RL 中的组合泛化**：slot 表示提升 RL 在物体数量变化时的泛。
## 代表性结。
在Atari 100k 基准上，SSWM 在一些多物体游戏（如 Space Invaders、Asterix）上下DreamerV2 的15-25% 分数。在 ProcGen 的泛化测试中（训练环境vs 未见环境），SSWM 的分数保持率提DreamerV2 提30%。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
