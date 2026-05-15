---
title: "VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness"
design: "VBench-2.0"
arxiv: https://arxiv.org/abs/2503.21755
github: https://github.com/Vchitect/VBench
---

# VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness

::: info 论文信息
- **Design**: VBench-2.0
- **论文全称**: VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness
- **arXiv**: [https://arxiv.org/abs/2503.21755](https://arxiv.org/abs/2503.21755)
- **GitHub**: [https://github.com/Vchitect/VBench](https://github.com/Vchitect/VBench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.21755](https://arxiv.org/abs/2503.21755)
- **GitHub**: [https://github.com/Vchitect/VBench](https://github.com/Vchitect/VBench)

## 简介
VBench-2.0 是下一代视频生成基准套件，专注于评估视频生成模型的"内在忠实度"（Intrinsic Faithfulness）。视频生成领域已从生成不切实际的输出发展到生成视觉上令人信服且时间一致的内容。然而，像VBench这样的现有基准主要评估表面忠实度（如逐帧美学、时间一致性和基本提示遵循），而忽略了生成视频是否遵循真实世界原则这一更根本的问题。

为了通过视频生成实现真正的"世界模型"，下一个前沿在于内在忠实度——确保生成的视频遵循物理定律、常识推理、解剖学正确性和构图完整性。VBench-2.0 评估五个关键维度：人体保真度（Human Fidelity）、可控性（Controllability）、创造力（Creativity）、物理学（Physics）和常识（Commonsense），每个维度进一步细分为细粒度能力。

评估框架整合了通用模型（如SOTA VLM和LLM）和专用方法（如针对视频生成的异常检测）。通过将评估从表面忠实度推向内在忠实度，VBench-2.0 旨在为下一代视频生成模型设定新标准。

## 关键特征
- **数据规模**: 5个关键维度，细粒度能力评估
- **数据模态**: 视频生成 + VLM/LLM评估 + 人类标注
- **主要指标**: 人体保真度、可控性、创造力、物理学、常识
- **领域**: 视频生成评估、世界模型基准

## 与世界模型的关系
VBench-2.0 直接定义了从"表面忠实度"到"内在忠实度"的评估范式转变，这与VWM从"视觉生成"到"世界理解"的进化路径完全一致。特别是其"物理学"和"常识"两个维度直接对应了VWM的核心能力。通过明确区分"看起来真实"和"实际上遵循物理定律"，VBench-2.0 为VWM提供了一个更有意义的评估标准。

## 代表性用途
- VBench-2.0 (Zheng et al., 2025) - 原始论文，定义内在忠实度评估
- 下一代视频生成模型的标准评估框架
- VWM内在忠实度的系统诊断
