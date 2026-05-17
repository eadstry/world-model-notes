---
title: "Learning Latent Dynamics for Planning from Pixels"
design: "PlaNet"
arxiv: https://arxiv.org/abs/1811.04551
github: https://github.com/google-research/planet
---

# PlaNet: Learning Latent Dynamics for Planning from Pixels

::: info 论文信息
- **Design**: PlaNet
- **论文全称**: Learning Latent Dynamics for Planning from Pixels
- **arXiv**: [https://arxiv.org/abs/1811.04551](https://arxiv.org/abs/1811.04551)
- **GitHub**: [https://github.com/google-research/planet](https://github.com/google-research/planet)
:::

## 核心思想

PlaNet rGoogle Research / Danijar Hafner 等人提出的经典世界模型框架，首次将深潜状态空间模型（RSSM）引入基于模型的强化学习。其核心思想是：与其在原始像素空间中规划，不如先学习一个紧凑的潜在动力学模型（latent dynamics model），然后在学到的潜在空间中进行规划。PlaNet 使用于latent imagination 进行规划，无需在真实环境中互动即可评估未来动作序列的效果。
PlaNet 提出框RSSM（Recurrent State Space Model）架构结合了确定性和随机性状态分量，确定性部分通过 GRU 捕捉长期依赖，随机性部分通过 VAE 方式建模多模态分布。这种混合设计使得模型既能保持长期记忆，又能表达不确定性。
## 技术架。
**Vision Encoding（视觉编码）**：PlaNet 使用 encoder-decoder 架构将高维像素观测压缩为低维潜在表示。编码器视RGB 图像映射到潜在空间，解码器从潜在状态重建图像。
**Knowledge Learning（知识学习）**：RSSM 是核心学习模块，包含确定性状态h_t（通过 GRU 传递）和随机状态s_t（高斯分布，测h_t 和当前观的前一步状态推理得到）。三个损失函数同时优化：重建损失（decoder）、KL 散度（prior vs posterior）和奖励预测损失。模型在重放的离线数据上训练。
**Controllable Simulation（可控模拟）**：PlaNet 使用 CEM（Cross Entropy Method）在 latent space 中进行MPC 规划。给定当前latent state，CEM 采样多个动作序列，用 latent dynamics 展开，选择预期奖励最高的轨迹。此过程纯在 latent space 中进行，每秒可行数千次 rollout。
## 代码实现要点

代码开源在 [google-research/planet](https://github.com/google-research/planet)。核心使用TensorFlow 实现 RSSM（GRU cell + 高斯分布 VAE），规划器使用CEM 算法。支持DeepMind Control Suite 路Gym 环境。
## 关键创新。
1. **Latent Planning 范式**：首次在 pixel-based RL 中实现纯 latent space 规划
2. **RSSM 架构**：确定的随机性混合状态空间，奠基准Dreamer 系列
3. **高效率*：相在Atari 上的 model-free 方法（通常需数亿步），PlaNet 仅需数千步交互4. **通用于*：一个统一架构同时适用于多种连续控制任。
## 代表性结。
在DeepMind Control Suite 多个任务上（cheetah run, walker walk, cartpole swingup等），PlaNet 仅用 2000-5000 步环境交互即达到接近渐近性能，比当时间model-free 方法（如 D4PG）少 50-500 倍样本。latent imagination 的rollout 长度可达 50 步，规划效果良好。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
