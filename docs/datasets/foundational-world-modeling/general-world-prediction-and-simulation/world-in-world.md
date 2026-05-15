---
title: "World-in-World: World Models in a Closed-Loop World"
design: "World-in-World"
arxiv: https://arxiv.org/abs/2510.18135
github: https://github.com/World-In-World/world-in-world
---

# World-in-World: World Models in a Closed-Loop World

::: info 论文信息
- **Design**: World-in-World
- **论文全称**: World-in-World: World Models in a Closed-Loop World
- **arXiv**: [https://arxiv.org/abs/2510.18135](https://arxiv.org/abs/2510.18135)
- **GitHub**: [https://github.com/World-In-World/world-in-world](https://github.com/World-In-World/world-in-world)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2510.18135](https://arxiv.org/abs/2510.18135)
- **GitHub**: [https://github.com/World-In-World/world-in-world](https://github.com/World-In-World/world-in-world)

## 简介
World-in-World 是首个在闭环世界中基准测试世界模型的开放平台。随着生成式世界模型已经能够以惊人的视觉真实感模拟世界，一个自然的问题出现了：它们能否为具身智能体提供预测感知以支持决策？然而，由于碎片化的评估体系——大多数现有基准采用强调孤立视觉质量的开环协议——这个核心问题尚未得到回答。

World-in-World 提供了一个统一的在线规划策略和标准化的动作API，使异构的世界模型能够进行决策。研究团队策划了四个闭环环境，严格评估多样化的世界模型，将任务成功作为主要指标，超越了常见的视觉质量焦点。他们还首次提出了具身场景下世界模型的数据缩放定律。

该研究揭示了三个关键发现：(1) 视觉质量不能保证任务成功，可控性更重要；(2) 使用动作-观测数据扩展后训练比升级预训练视频生成器更有效；(3) 分配更多推理时计算可以让世界模型显著提高闭环性能。

## 关键特征
- **数据规模**: 四个闭环环境，多个任务场景
- **数据模态**: 视频生成 + 动作-观测序列
- **主要指标**: 任务成功率、视觉质量、可控性
- **领域**: 具身智能、闭环决策

## 与世界模型的关系
World-in-World 代表了世界模型评估范式的关键转变——从"世界模型是否生成了好视频"转向"世界模型是否能帮助智能体完成任务"。这种闭环评估直接对应了视觉世界模型（VWM）在具身智能中的核心价值：为智能体提供准确的环境预测以支持规划和决策。该研究揭示的可控性优先于视觉质量的发现，对VWM的架构设计和训练策略具有深远的指导意义。

## 代表性用途
- World-in-World (Zhang et al., 2025) - 原始论文，首次提出闭环世界模型评估
- 具身场景下视觉世界模型的数据缩放定律研究
- 异构世界模型的统一决策接口比较
