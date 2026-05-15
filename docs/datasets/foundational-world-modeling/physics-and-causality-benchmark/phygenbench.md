---
title: "Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation"
design: "PhyGenBench"
arxiv: https://arxiv.org/abs/2410.05363
github: https://github.com/OpenGVLab/PhyGenBench
---

# PhyGenBench: Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation

::: info 论文信息
- **Design**: PhyGenBench
- **论文全称**: Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation
- **arXiv**: [https://arxiv.org/abs/2410.05363](https://arxiv.org/abs/2410.05363)
- **GitHub**: [https://github.com/OpenGVLab/PhyGenBench](https://github.com/OpenGVLab/PhyGenBench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2410.05363](https://arxiv.org/abs/2410.05363)
- **GitHub**: [https://github.com/OpenGVLab/PhyGenBench](https://github.com/OpenGVLab/PhyGenBench)

## 简介
PhyGenBench 是一个全面的物理生成基准，旨在评估文本到视频（T2V）生成中的物理常识正确性。认知心理学家认为，构建通用世界模拟器的基础是理解直觉物理学的能力。然而，当前T2V模型（如 Sora）准确表示直觉物理的能力仍大部分未被探索。

PhyGenBench 包含160个精心策划的提示词，覆盖27个不同的物理定律，横跨四个基本领域（力学、热学、光学、材料属性），全面评估模型对物理常识的理解。同时，PhyGenBench 提出了 PhyGenEval，一个采用层次化评估结构的评估框架，利用先进的视觉语言模型和大语言模型来评估物理常识。

通过 PhyGenBench 和 PhyGenEval，研究者可以进行大规模的T2V模型物理常识自动评估，其结果与人类反馈高度一致。评估结果显示，当前模型难以生成符合物理常识的视频。更重要的是，简单地扩展模型规模或使用提示工程技巧不足以完全解决 PhyGenBench 提出的挑战（特别是动态场景）。

## 关键特征
- **数据规模**: 160个提示词，27个物理定律，4个基本领域
- **数据模态**: 文本提示 + 生成视频 + 自动评估
- **主要指标**: 物理常识正确性（层次化评估）
- **领域**: T2V物理常识、物理定律评估

## 与世界模型的关系
PhyGenBench 为视觉世界模型（VWM）的物理评估提供了迄今为止最系统和覆盖面最广的测试方案之一。27个物理定律的系统覆盖使研究者能精确定位VWM在哪些物理概念上存在不足。该基准的一个重要发现是，单纯的模型规模扩展不足以解决物理常识问题，这表明VWM的物理理解能力需要新的架构设计和训练范式，而非简单地扩展数据和参数。

## 代表性用途
- PhyGenBench (Meng et al., 2024) - 原始论文，建立27条物理定律的评估基准
- Sora等T2V模型的物理常识系统评测
- VWM物理理解的精细化诊断
