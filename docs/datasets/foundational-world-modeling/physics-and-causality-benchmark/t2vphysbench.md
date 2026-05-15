---
title: "T2VPhysBench: A First-Principles Benchmark for Physical Consistency in Text-to-Video Generation"
design: "T2VPhysBench"
arxiv: https://arxiv.org/abs/2505.00337
---

# T2VPhysBench: A First-Principles Benchmark for Physical Consistency in Text-to-Video Generation

::: info 论文信息
- **Design**: T2VPhysBench
- **论文全称**: T2VPhysBench: A First-Principles Benchmark for Physical Consistency in Text-to-Video Generation
- **arXiv**: [https://arxiv.org/abs/2505.00337](https://arxiv.org/abs/2505.00337)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2505.00337](https://arxiv.org/abs/2505.00337)

## 简介
T2VPhysBench 是一个"第一性原理"基准，系统评估最先进的T2V系统是否遵守十二个核心物理定律。虽然T2V生成模型近年来在生成高质量视频方面取得了显著进展，但它们尊重基本物理定律的能力仍大部分未经测试——许多输出仍然违反刚体碰撞、能量守恒和重力动力学等基本约束，产生不真实甚至误导性的内容。

与依赖应用于简单生活场景提示词的自动像素级指标不同，T2VPhysBench 采用严格的"第一性原理"评估，系统评估开源和商业T2V系统是否遵守包括牛顿力学、守恒原理和唯象效应在内的十二个核心物理定律。

该基准包含三项针对性研究：(1) 综合合规性评估显示所有模型在每个定律类别上的平均得分低于0.60；(2) 提示消融实验揭示了即使提供详细的法律特定提示也无法纠正物理违规；(3) 反事实鲁棒性测试表明模型经常生成明确违反物理规则的视频。这些结果暴露了当前架构的持续性局限，为指导未来真正物理感知的视频生成提供了具体洞察。

## 关键特征
- **数据规模**: 12个核心物理定律，牛顿力学、守恒原理、唯象效应
- **数据模态**: 文本提示 + 生成视频 + 严格人类评估协议
- **主要指标**: 物理定律合规性（所有模型平均<0.60）
- **领域**: 第一性原理物理评估

## 与世界模型的关系
T2VPhysBench 以"第一性原理"为评估理念，代表了VWM物理评估的最高方法论严格度。其三项研究——合规性、消融和反事实测试——为VWM的物理能力评估提供了最完整的诊断框架。特别是反事实鲁棒性测试（模型是否会按指令违反物理定律）揭示了VWM的一个根本性问题：它们缺乏对物理定律的强制遵守机制，而这是一个真正的世界模型应该具备的核心属性。

## 代表性用途
- T2VPhysBench (Guo et al., 2025) - 原始论文，首次提出第一性原理VWM评估
- 开源/商业T2V系统的十二定律合规性诊断
- VWM中物理定律强制遵守机制研究
