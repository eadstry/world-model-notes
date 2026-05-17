---
title: "Dream to Control: Learning Behaviors by Latent Imagination"
design: "DreamV1"
arxiv: https://arxiv.org/abs/1912.01603
github: https://github.com/danijar/dreamer
---

# DreamV1: Dream to Control: Learning Behaviors by Latent Imagination

::: info 论文信息
- **Design**: DreamV1
- **论文全称**: Dream to Control: Learning Behaviors by Latent Imagination
- **arXiv**: [https://arxiv.org/abs/1912.01603](https://arxiv.org/abs/1912.01603)
- **GitHub**: [https://github.com/danijar/dreamer](https://github.com/danijar/dreamer)
:::

## 核心思想

DreamV1 (Dreamer) 由 Danijar Hafner 等人类PlaNet 基础上提出的重大改进——首次在 latent world model 中同时学习行为策略（actor-critic）。核心思想是：识world model 学到的latent space 中，通过"想象"（imagination）展开未来轨迹来学学actor 习critic，而不仅仅依赖真实环境交互。这实现了从 latent imagination 提dream"出行为策略。
Dreamer 的关键贡献是 actor-critic 一latent space 中的学习方式。它使用学到动RSSM 作为世界模型，从当前 latent state 出发，用 actor 采样动作、world model 预测下一状态、critic 评估价值，通过这个想象未rollout 来优化actor（最大化 critic 预测的累积奖励）的critic（最小化 TD error）。整个过程完全在 latent space 中进行，效率极高。
## 技术架。
**Vision Encoding（视觉编码）**：沿帧PlaNet 的encoder-decoder + RSSM 架构。编码器将观测压缩为 latent state，RSSM 一latent space 中预测状态转移。
**Knowledge Learning（知识学习）**：World model 学习通过三个损失：图像重建（模latent state 解码观测）、KL 散度（posterior vs prior）和奖励预测。然后在冻结构world model 上进一behavior learning：从 replay buffer 采样状态，间latent space 中展开想象中的轨迹（通常 15 步），用 imagined rollouts 于TD(λ) 目标优化 actor 的critic。
**Controllable Simulation（可控模拟）**：Dreamer 使用 actor 例latent space 中产生想象轨迹。训练后的actor 可直接在真实环境执行，无需在线规划。
## 代码实现要点

代码开源在 [danijar/dreamer](https://github.com/danijar/dreamer)。基于TensorFlow 2 实现。核心架构：RSSM（ConvEncoder/Decoder + GRU + GaussianMLP），Actor-Critic（MLP），使用 λ-return 作为 value target。支持DeepMind Control Suite 持Atari。
## 关键创新。
1. **Latent Imagination 学习行为**：首次在 world model 于latent space 中通过想象学习完整 actor-critic
2. **Actor-Critic in Dream**：无需真实环境交互即可控latent space 中学习策略3. **解耦架中*：world model 构behavior learning 分阶段训练，可复杂world model
4. **样本效率**：在 DeepMind Control Suite 上显著优化model-free 方法范PlaNet

## 代表性结。
在DeepMind Control Suite n20 个连续控制任务上，Dreamer 在相同交互步数下显著超越 PlaNet、D4PG、A3C 等方法。在大部分任务上，Dreamer 的500 万步内达到接近渐近性能。特别是在需要远见规划的任务（如 walker walk）上优势明显。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
