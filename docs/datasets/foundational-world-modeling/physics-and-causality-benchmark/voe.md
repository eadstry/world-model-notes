---
title: "A Benchmark for Modeling Violation-of-Expectation in Physical Reasoning Across Event Categories"
design: "VoE"
arxiv: https://arxiv.org/abs/2111.08826
---

# VoE: A Benchmark for Modeling Violation-of-Expectation in Physical Reasoning Across Event Categories

::: info 论文信息
- **Design**: VoE
- **论文全称**: A Benchmark for Modeling Violation-of-Expectation in Physical Reasoning Across Event Categories
- **arXiv**: [https://arxiv.org/abs/2111.08826](https://arxiv.org/abs/2111.08826)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2111.08826](https://arxiv.org/abs/2111.08826)

## 简介
VoE（Violation-of-Expectation）基准是一个基于婴儿心理学"违反预期"范式的大规模合成3D物理推理数据集。随着计算机视觉和认知推理领域对VoE范式越来越广泛的采用，研究人员正通过让模型仅在"预期"场景上学习，评估其将场景标注为"预期"或"令人惊讶"的能力。

与之前仅提供视觉数据、几乎不包含启发式或归纳偏置的VoE数据集不同，该基准策划了一个新型大规模合成3D VoE数据集，配有因果相关特征和规则的地面真值启发式标签。数据覆盖了五个物理推理事件类别，并进行了人类基线评估和人类表现分析。

研究团队还提出了 OFPR-Net（Object File Physical Reasoning Network），利用该数据集新颖的启发式特征，在物理推理任务上超越基线和消融模型。OFPR-Net 还展示了学习替代物理现实的能力，表明其能够学习物理推理中的普遍因果关系，创建具有更好可解释性的系统。

## 关键特征
- **数据规模**: 大规模合成3D场景，5个物理推理事件类别
- **数据模态**: 3D合成视频 + 启发式标注
- **主要指标**: 预期/违反预期二分类准确率
- **领域**: 物理推理、认知科学

## 与世界模型的关系
VoE基准将认知科学中婴儿物理理解的经典范式引入视觉世界模型（VWM）评估。其贡献在于提供了结构化的物理解耦标注（因果相关特征和规则），而非仅依赖纯视频观测。这对于训练和评估需要精确物理解释能力的VWM至关重要。OFPR-Net 的成功表明，将结构化的物理启发式知识融入VWM可以显著提升其物理推理能力和可解释性。

## 代表性用途
- VoE (Dasgupta et al., 2021) - 原始论文，建立带启发式标注的VoE数据集
- OFPR-Net 物理推理网络的训练与评估
- 认知科学的物理推理模型验证
