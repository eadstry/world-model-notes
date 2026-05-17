---
title: "IntPhys 2: Benchmarking Intuitive Physics Understanding In Complex Synthetic Environments"
design: "IntPhys 2"
arxiv: https://arxiv.org/abs/2506.09849
github: https://github.com/facebookresearch/IntPhys2
---

# IntPhys 2: Benchmarking Intuitive Physics Understanding In Complex Synthetic Environments

::: info 论文信息
- **Design**: IntPhys 2
- **论文全称**: IntPhys 2: Benchmarking Intuitive Physics Understanding In Complex Synthetic Environments
- **arXiv**: [https://arxiv.org/abs/2506.09849](https://arxiv.org/abs/2506.09849)
- **GitHub**: [https://github.com/facebookresearch/IntPhys2](https://github.com/facebookresearch/IntPhys2)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2506.09849](https://arxiv.org/abs/2506.09849)
- **GitHub**: [https://github.com/IntPhys2025/IntPhys-2](https://github.com/IntPhys2025/IntPhys-2)

## 简介
IntPhys 2 是经典 IntPhys 基准的重大升级版本，专门设计用于评估深度学习模型在复杂合成环境中的直觉物理理解。该基准聚焦于与宏观物体相关的四个核心物理原则：物体永久性（Permanence）、不变性（Immutability）、时空连续性（Spatio-Temporal Continuity）和固体性（Solidity）。这些条件受到儿童早期直觉物理理解研究启发。

IntPhys 2 基于"违反预期"框架提供了一套全面的测试套件，挑战模型在可控且多样化的虚拟环境中区分可能和不可能事件的能力。与仅提供可能与不可能二分类的 IntPhys 不同，IntPhys 2 提供了更丰富的场景复杂度和更精细的物理诊断能力。

在对多个SOTA模型的性能评估中，发现这些模型虽然展示了基本的视觉理解能力，但在复杂场景中掌握直觉物理方面面临重大挑战——大多数模型在四个物理原则上的表现处于随机水平（50%），而人类表现接近完美。这凸显了当前模型与类人直觉物理理解之间的差距。

## 关键特征
- **数据规模**: 复杂合成环境，4个核心物理原则
- **数据模态**: 3D合成视频
- **主要指标**: 可能/不可能事件二分类准确率（每个物理原则）
- **领域**: 直觉物理学、违反预期

## 与世界模型的关系
IntPhys 2 代表了VWM物理理解评估的最新标准。通过将评估从简单的"可能vs不可能"扩展到四个解耦的物理原则，它使研究者能够精确诊断VWM在特定物理概念上的弱点。随机水平的表现（50%）与人类近乎完美的对比，表明当前VWM即使在最基本的物理原则（如物体永久性）上也远未达到人类水平。这对VWM架构设计提出了严峻挑战。

## 代表性用途
- IntPhys 2 (Bordes et al., Meta AI, 2025) - 原始论文，扩展直觉物理评估维度
- SOTA模型的物理原则解耦诊断
- VWM架构中物理归纳偏置的研究
