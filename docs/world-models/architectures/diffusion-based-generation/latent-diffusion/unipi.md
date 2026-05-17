---
title: "Learning universal policies via text-guided video generation"
design: "UniPi"
arxiv: https://arxiv.org/abs/2302.00111
website: https://universal-policy.github.io/unipi/
---

# UniPi: Learning universal policies via text-guided video generation

::: info 论文信息
- **Design**: UniPi
- **论文全称**: Learning universal policies via text-guided video generation
- **arXiv**: [https://arxiv.org/abs/2302.00111](https://arxiv.org/abs/2302.00111)
- **Website**: [https://universal-policy.github.io/unipi/](https://universal-policy.github.io/unipi/)
:::

## 核心思想

UniPi (Universal Policy) 由 Google 提出的统一扩散策略框架，将世界模型和策略统一在同一个视频扩散模型中。核心创新是"视频即策略——通过在视频扩散模型中引入动作 token，一个模型同时会预测未来视频和输出策略动作。UniPi 的设计理念是：如果模型能生成准确的未来视频，它就自然"知道"应该采取什么动作来达到那个未来。

UniPi 的关键贡献是证明视频生成模型可以被用作通用决策模型。通过将动作视为视频生成的条件/副产品，模型学会行为达成某种视觉目标应该执行什么动作——这是隐式地编码在世界模型中的策略。

## 技术架。

**Vision Encoding（视觉编码）**：Video Diffusion Model 实latent space 中生成未来帧。使用预训练动Stable Video Diffusion 作为骨干。

**Knowledge Learning（知识学习）**：在视频扩散模型的去噪过程中，动作被嵌入为额外的条件 token。模型同时预测去噪的视频 latent 和最优动作。训练损失同时包含视频重建和动作预测。模型在多种具身任务数据上训练。

**Controllable Simulation（可控模拟）**：给定初始帧和任务描述，模型去噪生成未来视频序列，同时输出每个时间步的动作。实现了"想象未来 + 输出动作"的统一。

## 代码实现要点

代码开源在 [google-research/universal-policy](https://github.com/google-research/universal-policy)。基准Stable Video Diffusion + action head。在 RLBench、Calvin 等具身操控数据集上训练。

## 关键创新。

1. **视频即策略*：在视频扩散模型中统一世界模型和策。
2. **通用决策模型**：一个模型处理多种具身操控任。
3. **隐式规划**：通过生成未来视频来隐式规划动。
4. **动作-视频联合学习**：动作和视频在扩散过程中相互促进

## 代表性结。

在RLBench eCalvin 上，UniPi 在多种语言引导的操控任务上展示竞争性成功率。视频生成的视觉质量与真实轨迹高度一致，表明模型对未来场景有准确的理解。通用策略展现了跨任务的泛化能力。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
