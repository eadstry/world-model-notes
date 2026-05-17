---
title: "Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models"
design: "Omni-WorldBench"
arxiv: https://arxiv.org/abs/2603.22212
github: https://github.com/AMAP-ML/Omni-WorldBench
---

# Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models

::: info 论文信息
- **Design**: Omni-WorldBench
- **论文全称**: Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models
- **arXiv**: [https://arxiv.org/abs/2603.22212](https://arxiv.org/abs/2603.22212)
- **GitHub**: [https://github.com/AMAP-ML/Omni-WorldBench](https://github.com/AMAP-ML/Omni-WorldBench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2603.22212](https://arxiv.org/abs/2603.22212)

## 简介
Omni-WorldBench 是一个面向4D世界模型的交互中心综合评估基准。基于视频的世界模型已沿着两个主导范式涌现：视频生成和3D重建。然而，现有评估基准要么聚焦于生成模型的视觉保真度和文本-视频对齐，要么依赖忽略时间动态的静态3D重建指标。

Omni-WorldBench 的核心理念是：世界建模的未来在于4D生成——联合建模空间结构和时间演化。在这种范式下，核心能力是"交互响应"：忠实反映交互动作如何在时空上驱动状态转换。该基准包含两个关键组件：Omni-WorldSuite，一个跨多样化交互层级和场景类型的系统提示套件；以及 Omni-Metrics，一个基于智能体的评估框架，通过衡量交互动作对最终结果和中间状态演化轨迹的因果影响来量化世界建模能力。

在对18个代表性世界模型的多范式广泛评估中，Omni-WorldBench 揭示了当前世界模型在交互响应方面的关键局限，为未来研究提供了可操作的洞察。

## 关键特征
- **数据规模**: 多样化交互层级和场景类型，18个世界模型评估
- **数据模态**: 4D场景 + 交互动作
- **主要指标**: 交互响应能力、因果影响度量
- **领域**: 4D世界模型、交互响应

## 与世界模型的关系
Omni-WorldBench 代表了VWM评估的最新范式转变——从被动观察（生成/重建）转向主动交互。其"交互响应"能力指标直接对应VWM在具身智能和机器人中最关键的功能：预测行动如何改变世界。这一评估维度的加入填补了现有VWM基准的重大空白，为未来4D交互式世界模型的设计和评估提供了明确的方向。

## 代表性用途
- Omni-WorldBench (Wu et al., 2026) - 原始论文，评估18个代表性世界模型
- 4D世界模型的交互响应能力评估
- 基于智能体的世界模型因果影响评估
