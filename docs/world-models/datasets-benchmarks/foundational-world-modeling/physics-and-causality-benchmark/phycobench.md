---
title: "A Physical Coherence Benchmark for Evaluating Video Generation Models via Optical Flow-guided Frame Prediction"
design: "PhyCoBench"
arxiv: https://arxiv.org/abs/2502.05503
github: https://github.com/Jeckinchen/PhyCoBench
---

# PhyCoBench: A Physical Coherence Benchmark for Evaluating Video Generation Models via Optical Flow-guided Frame Prediction

::: info 论文信息
- **Design**: PhyCoBench
- **论文全称**: A Physical Coherence Benchmark for Evaluating Video Generation Models via Optical Flow-guided Frame Prediction
- **arXiv**: [https://arxiv.org/abs/2502.05503](https://arxiv.org/abs/2502.05503)
- **GitHub**: [https://github.com/Jeckinchen/PhyCoBench](https://github.com/Jeckinchen/PhyCoBench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2502.05503](https://arxiv.org/abs/2502.05503)
- **GitHub**: [https://github.com/Jeckinchen/PhyCoBench](https://github.com/Jeckinchen/PhyCoBench)

## 简介
PhyCoBench 是一个通过光流引导帧预测来评估视频生成模型物理一致性的基准。视频生成模型最近的进展展示了它们作为世界模拟器的潜力，但它们经常在偏离物理定律的视频上挣扎——这一关键关注点被大多数T2V基准忽视。

PhyCoBench 包含120个提示词，覆盖7个类别的物理原理，捕获可在视频内容中观察到的关键物理定律。研究团队在PhyCoBench上评估了四个SOTA T2V模型并进行了人工评估。此外，PhyCoBench 提出了一个自动评估模型 PhyCoPredictor，这是一个以级联方式生成光流和视频帧的扩散模型。

通过比较自动评估结果与人工排序的一致性，实验结果表明 PhyCoPredictor 目前与人类评估最为接近。因此，它可以有效评估视频的物理一致性，为未来模型优化提供洞察。

## 关键特征
- **数据规模**: 120个提示词，7个物理原理类别
- **数据模态**: 文本提示 + 光流 + 视频帧
- **主要指标**: 物理一致性（自动+人工评估）
- **领域**: 物理一致性评估、光流引导

## 与世界模型的关系
PhyCoBench 的独特贡献在于通过光流这一中间表征来评估VWM的物理一致性。光流直接编码了运动信息，是连接视觉外观和物理动态的桥梁。PhyCoPredictor 的级联生成范式（先光流后帧）为VWM的物理感知设计提供了新的思路——将显式的运动表征融入世界模型的生成过程可能比单纯依赖像素预测更有效。

## 代表性用途
- PhyCoBench (Chen et al., 2025) - 原始论文，提出光流引导的物理一致性评估
- PhyCoPredictor 自动评估器的开发与应用
- 基于光流表征的VWM物理一致性改进
