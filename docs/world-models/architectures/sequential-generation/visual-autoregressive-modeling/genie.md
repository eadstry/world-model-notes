---
title: "Genie: Generative Interactive Environments"
design: "Genie"
arxiv: https://arxiv.org/abs/2402.15391
---

# Genie: Generative Interactive Environments

::: info 论文信息
- **Design**: Genie
- **论文全称**: Genie: Generative Interactive Environments
- **arXiv**: [https://arxiv.org/abs/2402.15391](https://arxiv.org/abs/2402.15391)
:::

## 学习笔记

### 核心思想

Genie 是第一个以完全无监督方式从无标注互联网视频训练的生成式交互环境模型。其核心突破在于：即使没有真实的动作标签，仅从大量无标签的 2D 平台游戏视频中，也能学习到一个可控的世界模型。Genie 是一个 11B 参数的基础世界模型（Foundation World Model），能够将文本描述或素描/照片/手绘草图作为提示，生成完整的、可交互的游戏世界。

Genie 的关键突破之一是完全从视频中涌现出一个**潜在动作模型（Latent Action Model）**。该模型在训练时完全不需要任何真实的动作标注，而是通过自监督方式从视频帧之间的时序变化中自动推断出一组离散的潜在动作。这些潜在动作在语义上对应人类可理解的游戏操作——如角色移动、跳跃等——尽管模型从未接触过这些动作的概念。用户只需选择一个潜在动作，模型就能将当前帧推进到下一帧，实现交互式控制。

此外，学到的潜在动作空间具有良好的迁移性：即使 Genie 在未见过的特定游戏视频上训练，也能通过潜在动作模型模仿该游戏展示的行为——这为训练通用智能体（generalist agents）开辟了道路：先通过观察视频学习行为，再在 Genie 生成的环境中练习。

### 核心架构

**Vision Encoding（视觉编码）**：Genie 使用**时空视频分词器（Spatiotemporal Video Tokenizer）**将原始视频帧编码为离散 token 序列。该分词器在空间和时间两个维度上对视频进行压缩，将高维视频信号转化为紧凑的离散表示。对于不同模态的提示（文本、图像、草图），Genie 统一映射到视频生成框架——图像和草图作为初始帧，文本通过条件注入指导生成过程。

**Knowledge Learning（知识学习）**：核心是一个**自回归动力学模型（Autoregressive Dynamics Model）**，通过 next-token prediction 的方式预测下一帧的 token 序列。训练数据仅为无标签的游戏视频。模型从这些视频中以自回归方式学习场景的演化规律和物体之间的交互关系。关键创新是并行训练的 **Latent Action Model**：在预测下一帧时，模型同时推断一个离散的潜在动作，这个动作成为控制帧间变化的"可控"因素——它将帧间变化分解为"不受控的背景变化"和"受控的前景动作"。

**Controllable Simulation（可控模拟）**：交互式控制通过 Latent Action Model 实现帧级动作控制。推理时，用户可以选择不同的潜在动作（latent action），模型根据当前帧和选定的潜在动作自回归地生成下一帧。Latent Action Model 本质上是将连续的动作空间量化为有限个离散 code，每个 code 对应一种可解释的动作模式。训练时没有真实动作标签，学到的潜在动作是从视频数据的统计规律中自然涌现的（如移动、跳跃等概念的自动发现）。学到的潜在动作空间具有一定的跨域迁移性——可以在未见过的视频中识别对应的行为，然后在 Genie 生成的交互环境中复现该行为。

### 关键结果

- 无需任何动作标签，从 2D 平台游戏视频中学习出可交互的世界模型
- 支持通过手绘草图作为初始帧，生成可交互的游戏关卡
- 潜在动作空间支持跨游戏视频的行为迁移——通过观察他人游戏视频来模仿其中的行为
- 11B 参数的基础世界模型，展示了大模型具备世界建模能力

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
