---
title: "Genie: Generative Interactive Environments"
design: "Genie"
arxiv: https://arxiv.org/abs/2402.15391
website: https://sites.google.com/view/genie-2024/home
---

# Genie: Generative Interactive Environments

::: info 论文信息
- **Design**: Genie
- **论文全称**: Genie: Generative Interactive Environments
- **arXiv**: [https://arxiv.org/abs/2402.15391](https://arxiv.org/abs/2402.15391)
- **Website**: [https://sites.google.com/view/genie-2024/home](https://sites.google.com/view/genie-2024/home)
:::

## 论文信息

- **arXiv**: [2402.15391](https://arxiv.org/abs/2402.15391)
- **Website**: [https://sites.google.com/view/genie-2024/home](https://sites.google.com/view/genie-2024/home)
- **发表时间**: 2024年2月
- **作者团队**: Google DeepMind（Jake Bruce, Tim Rocktäschel 等）

## 核心思想

Genie是第一个以完全无监督方式从未标注互联网视频中训练出的生成式交互环境模型。其核心理念是：即使没有真实动作标签，仅从海量无标签视频数据中，也能学习到一个可控的世界模型。Genie以11B参数规模可被视为一个基础世界模型（Foundation World Model），能够将文本、合成图像、照片甚至手绘草图作为提示，生成无限多样的、可通过动作控制的虚拟世界。

Genie的关键突破在于提出了一种简单且可扩展的**潜在动作模型（Latent Action Model）**。该模型在训练时完全不需要任何真实动作标注——它通过自监督方式从视频帧的时序变化中推断出一组离散的潜在动作，这些潜在动作在语义上对应于视频中的可控行为（如角色移动、跳跃等）。在推理阶段，用户可以通过选择这些潜在动作来控制生成视频的逐帧演变，实现帧级别的交互式控制。

此外，学习到的潜在动作空间具有很好的迁移能力：即使Genie从未见过特定视频中的动作，也能通过潜在动作模型来模仿该视频中展示的行为，这为训练未来的通用智能体（generalist agents）开辟了路径——智能体可以通过观察视频学习行为，然后在Genie生成的环境中练习。

## 技术架构

### Vision Encoding（视觉编码）
Genie采用**时空视频分词器（Spatiotemporal Video Tokenizer）** 将原始视频帧编码为离散token序列。该分词器在空间和时间两个维度上对视频进行压缩，将高维的视频信号转化为紧凑的离散表示。对于不同的输入提示（文本、图像、草图），Genie将其统一映射到视频生成框架中——图像和草图作为初始帧，文本则通过条件机制引导生成过程。

### Knowledge Learning（知识学习）
核心是一个**自回归动力学模型（Autoregressive Dynamics Model）**，通过next-token prediction的方式预测下一帧的token序列。训练数据为大规模无标签互联网视频，模型从这些视频中隐式学习物理规律、物体运动、场景结构、因果关系等世界知识。训练过程完全无监督——模型仅通过预测下一帧来学习视频中的时序动态。关键创新在于Latent Action Model的引入：在预测下一帧时，模型同时推断一个离散的潜在动作变量，该变量编码了帧间变化中"可控"的部分，将帧间变化分解为"用户可控的变化"和"环境自主变化"。

### Controllable Simulation（可控模拟）
交互控制通过Latent Action Model实现。推理时，用户选择不同的潜在动作（latent action），模型根据当前帧和所选动作自回归地生成下一帧。Latent Action Model本质上是将连续的动作空间量化为有限个离散code，每个code对应一种可解释的行为模式。由于训练时没有真实动作标签，这些学到的潜在动作是从数据中自然涌现的（emergent），但在语义上是可解释的。此外，学到的潜在动作空间可用于训练模仿学习智能体——将未见过视频中的行为映射到潜在动作，然后在Genie生成的交互环境中复现。

## 代码实现要点

暂无开源代码。Genie由Google DeepMind开发，截至当前尚未公开模型权重或训练代码。

## 关键创新点

1. **无动作标签的世界模型训练**：首次证明可以从纯视频数据中学习可控交互环境，完全不需要动作标注
2. **可扩展的潜在动作模型**：简单且可扩展的离散潜在动作学习机制，无需特定领域知识
3. **多模态条件生成**：支持文本、图像、照片、草图等多种提示形式引导环境生成
4. **从视频到智能体的路径**：学习到的潜在动作空间为训练通用智能体提供了基础
5. **11B参数基础世界模型**：证明了大规模自回归视频生成模型可具备世界模拟能力

## 代表性结果

- 在无需动作标签的条件下，从2D平台游戏视频中学习到语义可解释的潜在动作（移动、跳跃等）
- 可通过手绘草图作为初始帧生成可交互的游戏环境
- 潜在动作空间支持跨视频的行为迁移——可通过观察新视频来模仿其中的行为
- 展示了模型在多种游戏类型和真实世界机器人视频上的泛化潜力
