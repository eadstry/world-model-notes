---
title: "Mastering Atari with Discrete World Models"
design: "DreamV2"
arxiv: https://arxiv.org/abs/2010.02193
github: https://github.com/danijar/dreamerv2
---

# DreamV2: Mastering Atari with Discrete World Models

::: info 论文信息
- **Design**: DreamV2
- **论文全称**: Mastering Atari with Discrete World Models
- **arXiv**: [https://arxiv.org/abs/2010.02193](https://arxiv.org/abs/2010.02193)
- **GitHub**: [https://github.com/danijar/dreamerv2](https://github.com/danijar/dreamerv2)
:::

## 核心思想

DreamV2 (DreamerV2) 是对 Dreamer 的重大架构升级，核心创新是将 RSSM 的连续高斯潜在状态改为离散类别型潜在状态（categorical latents）。这一改动解决了连续潜在状态在复杂场景（如 Atari 游戏）下的模式坍塌和预测模糊问题。离散表示天然支持多模态预测——一个游戏中角色可能朝多个方向移动，离散潜在变量可以为每种可能分配不同的类别。
DreamerV2 是首个在 Atari 基准上达到人类水平性能力world model 方法，证明了基于模型的RL 可以在视觉复杂、奖励稀疏的任务上媲述model-free 方法。
## 技术架。
**Vision Encoding（视觉编码）**：使用CNN encoder 将观测映射到分类分布的2 多× 32 个潜在变量），encoder-decoder 结构。离散表示通过 straight-through estimator 实现端到端训练。
**Knowledge Learning（知识学习）**：RSSM 被扩展为使用 categorical 状态（32×32 的独热向量），通过 Gumbel-softmax 程straight-through 训练。World model 损失包含：图像重建（模categorical latent 解码）、KL 散度（分类分布之间）和奖励预测。
**Controllable Simulation（可控模拟）**：与 DreamerV1 类似，在离散 latent space 中进行想是rollout，使用actor-critic 优化。强化学习部分增加了 KL balancing 技巧来防止 posterior collapse。
## 代码实现要点

代码开源在 [danijar/dreamerv2](https://github.com/danijar/dreamerv2)。基于TensorFlow 2。核心改进：Categorical RSSM行2 categories × 32 latents = 1024 bits），KL balancing，straight-through gradient。
## 关键创新。
1. **离散潜在变量**：用 categorical latents 替代高斯 latents，支持多模态预测2. **Atari 人类水平**：首个在 Atari 上达到人类水平的 model-based 方法
3. **KL balancing**：动态调的prior 度posterior 之间的KL 权重
4. **多模态想象力**：离散表示使模型能想象多种可能的未来

## 代表性结。
在Atari 55 款游戏上，DreamerV2 平均达到人类水平比1.5 倍分数，超越 Rainbow DQN。在 23/55 款游戏中超越人类。相机DreamerV1，在连续控制任务上的性能也大幅提升了00M 帧训练后可达成200+ 的人类标准化分数。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
