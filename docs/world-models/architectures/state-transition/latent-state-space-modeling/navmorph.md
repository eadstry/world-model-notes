---
title: "NavMorph: A Self-Evolving World Model for Vision-and-Language Navigation in Continuous Environments"
design: "NavMorph"
arxiv: https://arxiv.org/abs/2506.23468
github: https://github.com/Feliciaxyao/NavMorph
---

# NavMorph: A Self-Evolving World Model for Vision-and-Language Navigation in Continuous Environments

::: info 论文信息
- **Design**: NavMorph
- **论文全称**: NavMorph: A Self-Evolving World Model for Vision-and-Language Navigation in Continuous Environments
- **arXiv**: [https://arxiv.org/abs/2506.23468](https://arxiv.org/abs/2506.23468)
- **GitHub**: [https://github.com/Feliciaxyao/NavMorph](https://github.com/Feliciaxyao/NavMorph)
:::

## 核心思想

NavMorph 提出了一个自我进化的世界模型框架用于连续环境中的视觉与语言导航（VLN）。核心创新是世界模型的自我进化"机制：agent 在探索新环境时，不断使用收集的数据更新世界模型，使得世界模型逐渐适应新环境的视觉和空间特性。
NavMorph 解决策VLN 中的关键挑战：agent 被部署到完全未见过的环境（新建筑、新布局），离线训练的世界模型可能无法泛化。通过在线自我进化，世界模型能够从最初的"陌生"状态逐步适应在熟悉"状态，实现渐进式的环境认知。
## 技术架。
**Vision Encoding（视觉编码）**：使用全景视图编码器（类型VLN-CE 的标注encoder）将 RGB-D 观测压缩为潜在状态。
**Knowledge Learning（知识学习）**：World model 在线自我进化：基在DreamerV3 风格的RSSM，但在agent 部署时持续用新数据更新（online fine-tuning）。语言指令通过 T5 encoder 编码为条件嵌入，与视觉latent state 结合指导世界模型的预测方向。
**Controllable Simulation（可控模拟）**：在 latent space 中进行language-conditioned imagination：世界模型在给定语言指令的条件下想象导航路径，actor 在想象中学习如何到达指令描述的目标。
## 代码实现要点

代码开源在 [Feliciaxyao/NavMorph](https://github.com/Feliciaxyao/NavMorph)。基准VLN-CE 环境 + DreamerV3 JAX。Panoramic encoder + T5 language encoder + online-adapting RSSM。
## 关键创新。
1. **自我进化的世界模型*：在线更新使世界模型适应新环境2. **VLN 中的 world model**：将世界模型引入视觉语言导航任务
3. **语言条件动力学*：语言指令作为世界模型的状态条件4. **渐进式环境认知*：从陌生到熟悉的平滑适应过程

## 代表性结。
在VLN-CE 基准在Habitat 环境中，NavMorph 的SPL（Success weighted by Path Length）比传统 behavioral cloning 方法方15%。在未见过的建筑物中，online adaptation 的performance 从初始的 40% 提升了75%，证明了自我进化的有效性。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
