---
title: "WorldBench: Disambiguating Physics for Diagnostic Evaluation of World Models"
design: "WorldBench"
arxiv: https://arxiv.org/abs/2601.21282
---

# WorldBench: Disambiguating Physics for Diagnostic Evaluation of World Models

::: info 论文信息
- **Design**: WorldBench
- **论文全称**: WorldBench: Disambiguating Physics for Diagnostic Evaluation of World Models
- **arXiv**: [https://arxiv.org/abs/2601.21282](https://arxiv.org/abs/2601.21282)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2601.21282](https://arxiv.org/abs/2601.21282)
- **Website**: [https://world-bench.github.io/](https://world-bench.github.io/)

## 简介
WorldBench 是一个专为世界模型概念特异性、解耦评估而设计的新型视频基准。虽然生成性基础模型（常被称为"世界模型"）的进步推动了其在机器人规划和自主系统训练等关键任务中的应用，但现有基于物理的视频基准存在严重的"纠缠"问题——单个测试同时评估多个物理定律和概念，从根本上限制了其诊断能力。

WorldBench 的创新之处在于其概念特异性的解耦评估设计，允许研究者严格隔离和评估模型对单一物理概念或定律的理解。为了做到全面，WorldBench在两个不同层次上设计了基准：(1) 评估直觉物理理解（如物体永久性或尺度/透视）；(2) 评估低层级物理常数和材料属性（如摩擦系数或流体粘度）。

当SOTA视频世界模型在 WorldBench 上被评估时，发现了在特定物理概念上的失败模式——所有测试模型都缺乏生成可靠真实世界交互所需的物理一致性。通过其概念特异性评估，WorldBench 提供了一个更细致和可扩展的框架，用于严格评估视频生成和世界模型的物理推理能力。

## 关键特征
- **数据规模**: 概念特异性解耦测试，两个评估层次
- **数据模态**: 视频生成 + 物理概念测试
- **主要指标**: 各物理概念的解耦评估分数
- **领域**: 解耦物理评估

## 与世界模型的关系
WorldBench 解决了VWM评估中最核心的方法论问题——物理概念的纠缠评估。通过将不同的物理定律和概念解耦为独立的测试维度，它使研究者能够精确定位VWM在哪些物理概念上失败。这种诊断精度对于指导VWM的针对性改进至关重要。WorldBench 的两个层次设计也反映了从直觉物理理解到精确物理量化的完整评估链条。

## 代表性用途
- WorldBench (Upadhyay et al., UCLA, 2026) - 原始论文，提出解耦物理评估
- SOTA世界模型的物理概念特异性诊断
- 摩擦系数、流体粘度等低层级物理属性评估
