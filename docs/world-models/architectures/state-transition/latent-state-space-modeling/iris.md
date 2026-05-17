---
title: "Transformers are Sample-Efficient World Models"
design: "IRIS"
arxiv: https://arxiv.org/abs/2209.00588
github: https://github.com/eloialonso/iris
---

# IRIS: Transformers are Sample-Efficient World Models

::: info 论文信息
- **Design**: IRIS
- **论文全称**: Transformers are Sample-Efficient World Models
- **arXiv**: [https://arxiv.org/abs/2209.00588](https://arxiv.org/abs/2209.00588)
- **GitHub**: [https://github.com/eloialonso/iris](https://github.com/eloialonso/iris)
:::

## 核心思想

IRIS 是首个将 Transformer 架构用作世界模型的工作，核心贡献是证明离散自编码器+ 自回中Transformer 的组合可以达到DreamerV2 级别的样本效率，且在 Atari 游戏上超越DreamerV2。IRIS 将世界模型学习重新表述为序列建模问题：观测被离散化为 token 序列，Transformer 以自回归方式预测未来 token。
IRIS 由两个核心组件组成：离散自编码器（VQ-VAE 变体）将观测压缩为离的token，GPT 风格潜Transformer 在token 空间中进行自回归动力学预测。这种纯 token-based 的方法避免了连续潜变量中的分布假设，同时利用 Transformer 强大的长程建模能力。
## 技术架。
**Vision Encoding（视觉编码）**：使用VQ-VAE 风格的离散自编码器将 64×64 RGB 图像编码一16×16=256 个离的token（codebook 大小 512）。decoder 时token 序列恢复为原图。
**Knowledge Learning（知识学习）**：使用causal Transformer（GPT 架构，约 10M 参数）在离散 token 空间中自回归地建模动力学。给定过去观测的 token 序列和动作嵌入，Transformer 预测下一个观测的 token 序列。训练使用标的cross-entropy 损失。
**Controllable Simulation（可控模拟）**：在离散 token 空间中进行想象rollout。Actor-critic 象GPT 自回归生成的 imagined token 特征之上训练。与 Dreamer 类似，使用λ-return 优化 actor 的critic。
## 代码实现要点

代码开源在 [eloialonso/iris](https://github.com/eloialonso/iris)。基于PyTorch 实现。离散自编码器使用VQ-VAE基12 embedding于56 latent tokens），Transformer 使用 GPT 风格的自回归架构（约 10M 参数据 层，8 头注意力）。
## 关键创新。
1. **Transformer 世界模型**：首个纯 Transformer 架构的世界模型2. **离散 Token 动力学*：将世界模型学习转为自回归序列预测3. **样本效率**：仅需DQN 1/4 的交互量达到相当性能
4. **简洁优的*：去除了 RSSM 中的复杂状态设计，理token 序列统一表示

## 代表性结。
在Atari 100k 基准（每款游戏仅 10 万步环境交互）上，IRIS 平均人类标准化分数达一1.05× 人类水平，超越DreamerV2 越0.87×。在 26 基Atari 游戏中，IRIS 的19 款上超越 DreamerV2。这证明 Transformer + 离散 token 的组合在样本效率上具有竞争力。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
