---
title: "STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning"
design: "STORM"
arxiv: https://arxiv.org/abs/2310.09615
github: https://github.com/weipu-zhang/STORM
---

# STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning

::: info 论文信息
- **Design**: STORM
- **论文全称**: STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2310.09615](https://arxiv.org/abs/2310.09615)
- **GitHub**: [https://github.com/weipu-zhang/STORM](https://github.com/weipu-zhang/STORM)
:::

## 核心思想

STORM 是北京大学提出的高效随机 Transformer 世界模型。核心创新是一Transformer world model 中重新引入随机性（stochasticity），但以一种计算高效的方式。STORM 解决了纯确定性Transformer（如 IRIS、TWM）在表达环境不确定性方面的不足——真实世界本质上是随机的（如 Atari 游戏中的随机怪物生成）。
STORM 的关键设计是：在 Transformer 的中间层注入潜在的随机变量（stochastic latent），结合自回归token 预测和变分推理进行训练。这样既保留能Transformer 的长程建模优势，又具备随机世界模型的多模态预测能力。
## 技术架。
**Vision Encoding（视觉编码）**：VQ-VAE 离散编码器，将观测压缩为离散 token 序列。
**Knowledge Learning（知识学习）**：在 GPT Transformer 的中间层引入随机潜变化z_t，通过 VAE 风格的prior-posterior 框架训练。posterior 使用观测和上一状态编码，prior 仅使用上一状态和动作。Transformer 在随机变量的条件下自回归预测未来 token。使用KL 散度约束 prior 中posterior 的距离。
**Controllable Simulation（可控模拟）**：在随机 Transformer 器latent space 中训练actor-critic，想象轨迹同时包含确定性和随机性成分。
## 代码实现要点

代码开源在 [weipu-zhang/STORM](https://github.com/weipu-zhang/STORM)。基准PyTorch。Stochastic Transformer (GPT + VAE-style latent injection)，在 Atari 100k 基准上评估。
## 关键创新。
1. **随机 Transformer world model**：在 GPT 架构中引入随机潜变量
2. **高效随机性建模*：中间层注入而非浅层注入
3. **多模态想是*：随机性使模型能想象多种可能的未来
4. **计算效率**：相比RSSM 更高效的随机性实。
## 代表性结。
在Atari 100k 基准上，STORM 平均人类标准化分数达成1.26×，超越IRIS、TWM 越DreamerV3。在需要处理环境随机性的游戏（如 Asterix、BattleZone）上优势尤为明显。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
