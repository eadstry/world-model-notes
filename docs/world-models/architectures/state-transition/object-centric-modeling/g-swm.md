---
title: "Improving Generative Imagination in Object-Centric World Models"
design: "G-SWM"
arxiv: https://arxiv.org/abs/2010.02054
github: https://github.com/zhixuan-lin/G-SWM
---

# G-SWM: Improving Generative Imagination in Object-Centric World Models

::: info 论文信息
- **Design**: G-SWM
- **论文全称**: Improving Generative Imagination in Object-Centric World Models
- **arXiv**: [https://arxiv.org/abs/2010.02054](https://arxiv.org/abs/2010.02054)
- **GitHub**: [https://github.com/zhixuan-lin/G-SWM](https://github.com/zhixuan-lin/G-SWM)
:::

## 核心思想

G-SWM aMila tGoogle Brain 提出的改进型对象中心世界模型，核心创新是提升 object-centric world model 的生成式想象（generative imagination）质量。G-SWM 指出，之前的 object-centric world model（如 COBRA、OP3）在 imagination rollout 时存在质量退化问题——预测的物体状态随时间逐渐偏离真实分布。G-SWM 通过引入潜变量（VAE）和改进的训练策略来解决这个问题。
G-SWM 的关键技术改进包括：新）在物体级状态中引入随机潜变化z_t，通过 VAE 训练使模型能表达多模态动力学；（2）使用具有时序一致性的隐变量prior 化posterior；（3）在 imagination 过程中使用更好的采样策略。
## 技术架。
**Vision Encoding（视觉编码）**：使用MONet 风格的scene decomposition 将观测分解为物体的slots，每个slot 通过独立的编码器处理。
**Knowledge Learning（知识学习）**：在物体级状态中引入随机潜变量z_t。Prior 网络从上一状态预测z_t 分布，Posterior 网络从上一状态和当前观测预测 z_t 分布，通过最小化 KL(posterior||prior) 训练。Transition model 作z_t 为条件预测下一物体状态。训练损失含物体级重建损失和 KL 散度。
**Controllable Simulation（可控模拟）**：在 imagination 过程中，对每个物体独立采自z_t ~ prior，然后用 transition model 展开。随机潜变量使模型能表达多种可能的未来。
## 代码实现要点

代码开源在 [zhixuan-lin/G-SWM](https://github.com/zhixuan-lin/G-SWM)。基准PyTorch。MONet decomposition + VAE-style object dynamics。在 GridWorld基D Shapes 于Atari Pong 等环境上评估。
## 关键创新。
1. **随机潜变量在物体层面**：在 object-centric 框架中引入VAE 式随机建了2. **改善想象质量**：随机性使 imagination 更贴近真实分解3. **时序一步prior/posterior**：保证潜在变量的时序连贯的4. **多模态未来预测*：物体可朝多个可能方向移。
## 代表性结。
在2D Shapes oGridWorld 环境中，G-SWM 的long-term imagination rollout的0+ 步）在像素精度（MSE）上比确定性基线低 40%。在 Atari Pong 上，生成的视频序列在 30 帧内保持高质量，展现了模型对碰撞事件的准确预测。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
