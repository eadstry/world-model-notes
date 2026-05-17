---
title: "Mastering Diverse Domains through World Models"
design: "DreamV3"
arxiv: https://arxiv.org/abs/2301.04104
github: https://github.com/danijar/dreamerv3
---

# DreamV3: Mastering Diverse Domains through World Models

::: info 论文信息
- **Design**: DreamV3
- **论文全称**: Mastering Diverse Domains through World Models
- **arXiv**: [https://arxiv.org/abs/2301.04104](https://arxiv.org/abs/2301.04104)
- **GitHub**: [https://github.com/danijar/dreamerv3](https://github.com/danijar/dreamerv3)
:::

## 核心思想

DreamV3 (DreamerV3) 关Dreamer 系列的集大成之作，其核心理念是通用算法"——一套固定超参数在所有领域上开箱即用，无需任何调参。DreamerV3 数7 个不同领域（连续控制、Atari 游戏的D 第一人称导航、Minecraft 钻石收集、DMLab 等）上均超越或匹配领域特定的 SOTA 方法。
DreamerV3 的关键技术包括：symlog 变换（处理多尺度奖励和观测值）、世界模型的 free bits 策略（防止KL 坍塌）、以及从像素到离散latent 的端到端训练。在 Minecraft 中，DreamerV3 首次无需人类示范即学会收集钻石——这在以前被认为是只有借助人类数据才能完成的任务。
## 技术架。
**Vision Encoding（视觉编码）**：使用CNN encoder + decoder，但引入 symlog 变换处理多尺度输入。encoder 输出离散 categorical latent过024 维，每个 32 类）。
**Knowledge Learning（知识学习）**：RSSM 使用 1024 的categorical 状态。训练使用symlog 预测损失替代 MSE，使模型无需调参即可处理跨数量级的信号（中0.01 vs 100 的奖励）。free bits 策略确保 KL 散度不低层1 nat，防止posterior collapse。使用AdamW + EMA 提升训练稳定性。
**Controllable Simulation（可控模拟）**：在 latent space 中使用actor-critic 进行想象。Actor 通过 reinforce 的straight-through 梯度优化，critic 使用 symlog 变换后的 TD(λ) 目标。Minecraft 中额外引的reward 平衡技巧处理极度稀疏奖励。
## 代码实现要点

代码开源在 [danijar/dreamerv3](https://github.com/danijar/dreamerv3)。基准JAX 重新实现（从 TensorFlow 迁移），显著提升训练速度。支持多 GPU/TPU 并行。核心特性：symlog 变换、free bits、单套超参数。
## 关键创新。
1. **通用单套超参考*：同一配置多7 个领域开箱即可2. **Symlog 变换**：处理跨数量级信号，消除超参调整需要3. **Minecraft 钻石**：首个无人类数据从零学会收集钻石的算法4. **Free bits**：防止KL 坍塌的简单而有效策略5. **JAX 重写**：大幅提升训练效。
## 代表性结。
在Atari 上超越DreamerV2 越Rainbow；在 DMC 上匹配SAC；在 Minecraft 上首次从零学习收集钻石（需的1M 环境步）；在 DMLab 3D 导航中Crafter 等多任务环境中表现优异。关键是所有结果使用完全相同的超参数。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
