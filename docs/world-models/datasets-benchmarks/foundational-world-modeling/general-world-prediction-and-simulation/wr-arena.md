---
title: "World Reasoning Arena"
design: "WR-Arena"
arxiv: https://arxiv.org/abs/2603.25887
github: https://github.com/MBZUAI-IFM/WR-Arena
---

# WR-Arena: World Reasoning Arena

::: info 论文信息
- **Design**: WR-Arena
- **论文全称**: World Reasoning Arena
- **arXiv**: [https://arxiv.org/abs/2603.25887](https://arxiv.org/abs/2603.25887)
- **GitHub**: [https://github.com/MBZUAI-IFM/WR-Arena](https://github.com/MBZUAI-IFM/WR-Arena)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2603.25887](https://arxiv.org/abs/2603.25887)
- **GitHub**: [https://github.com/MBZUAI-IFM/WR-Arena](https://github.com/MBZUAI-IFM/WR-Arena)

## 简介
WR-Arena（World Reasoning Arena）是一个全面评估世界模型（WMs）的下一个世界模拟能力的基准。世界模型的初衷是作为真实世界的内部模拟器，使智能体能够理解、预测和作用于复杂环境。然而，现有世界模型基准仍然狭隘地关注下一步状态预测和视觉保真度，忽略了智能行为所需的更丰富的模拟能力。

WR-Arena 沿三个基本维度评估世界模型：(i) 动作模拟保真度（Action Simulation Fidelity），即理解和执行语义上有意义的多步指令并生成多样化反事实推演的能力；(ii) 长时域预测（Long-horizon Forecast），即在扩展交互中维持准确、连贯且物理合理的模拟能力；(iii) 模拟推理与规划（Simulative Reasoning and Planning），即通过模拟、比较和选择替代未来来支持目标导向推理的能力。

研究构建了任务分类体系并策划了多类数据集。在对SOTA世界模型的广泛实验中，结果暴露了当前模型与人类级别假设推理之间的巨大差距，确立了WR-Arena作为诊断工具和进阶指南的双重角色。

## 关键特征
- **数据规模**: 多维任务分类体系下的多个数据集
- **数据模态**: 视频生成 + 多步指令 + 反事实推演
- **主要指标**: 动作模拟保真度、长时域预测精度、模拟推理能力
- **领域**: 世界模型评估、具身规划

## 与世界模型的关系
WR-Arena 将视觉世界模型（VWM）的评估提升到了一个新的高度——从单步预测扩展到多步闭环推理。该基准特别强调了VWM的三大核心能力：(1) 理解和执行多步动作指令，(2) 长时间维持物理一致的模拟，(3) 在不同未来场景中进行推理和选择。这对于将VWM应用于实际决策场景（如自动驾驶和机器人规划）至关重要。WR-Arena 揭示的当前模型与人类级别的巨大差距，为VWM研究指明了明确的改进方向。

## 代表性用途
- WR-Arena (PAN Team, MBZUAI, 2026) - 原始论文，建立三维度世界模型评估框架
- SOTA世界模型的假设推理能力诊断
- 下一代世界模型的评估准则定义
