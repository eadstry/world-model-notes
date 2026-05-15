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

DreamV3 (DreamerV3) 是 Dreamer 系列的集大成之作，其核心理念是"通用算法"——一套固定超参数在所有领域上开箱即用，无需任何调参。DreamerV3 在 7 个不同领域（连续控制、Atari 游戏、3D 第一人称导航、Minecraft 钻石收集、DMLab 等）上均超越或匹配领域特定的 SOTA 方法。

DreamerV3 的关键技术包括：symlog 变换（处理多尺度奖励和观测值）、世界模型的 free bits 策略（防止 KL 坍塌）、以及从像素到离散 latent 的端到端训练。在 Minecraft 中，DreamerV3 首次无需人类示范即学会收集钻石——这在以前被认为是只有借助人类数据才能完成的任务。

## 技术架构

**Vision Encoding（视觉编码）**：使用 CNN encoder + decoder，但引入 symlog 变换处理多尺度输入。encoder 输出离散 categorical latent（1024 维，每个 32 类）。

**Knowledge Learning（知识学习）**：RSSM 使用 1024 维 categorical 状态。训练使用 symlog 预测损失替代 MSE，使模型无需调参即可处理跨数量级的信号（如 0.01 vs 100 的奖励）。free bits 策略确保 KL 散度不低于 1 nat，防止 posterior collapse。使用 AdamW + EMA 提升训练稳定性。

**Controllable Simulation（可控模拟）**：在 latent space 中使用 actor-critic 进行想象。Actor 通过 reinforce 和 straight-through 梯度优化，critic 使用 symlog 变换后的 TD(λ) 目标。Minecraft 中额外引入 reward 平衡技巧处理极度稀疏奖励。

## 代码实现要点

代码开源在 [danijar/dreamerv3](https://github.com/danijar/dreamerv3)。基于 JAX 重新实现（从 TensorFlow 迁移），显著提升训练速度。支持多 GPU/TPU 并行。核心特性：symlog 变换、free bits、单套超参数。

## 关键创新点

1. **通用单套超参数**：同一配置在 7 个领域开箱即用
2. **Symlog 变换**：处理跨数量级信号，消除超参调整需求
3. **Minecraft 钻石**：首个无人类数据从零学会收集钻石的算法
4. **Free bits**：防止 KL 坍塌的简单而有效策略
5. **JAX 重写**：大幅提升训练效率

## 代表性结果

在 Atari 上超越 DreamerV2 和 Rainbow；在 DMC 上匹配 SAC；在 Minecraft 上首次从零学习收集钻石（需约 1M 环境步）；在 DMLab 3D 导航和 Crafter 等多任务环境中表现优异。关键是所有结果使用完全相同的超参数。
