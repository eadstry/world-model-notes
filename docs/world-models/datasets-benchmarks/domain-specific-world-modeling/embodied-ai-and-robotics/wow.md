---
title: "WoW: Towards a world omniscient world model through embodied interaction"
design: "WoW"
arxiv: https://arxiv.org/abs/2509.22642
github: https://github.com/wow-world-model/wow-world-model
---

# WoW: Towards a world omniscient world model through embodied interaction

::: info 论文信息
- **Design**: WoW
- **论文全称**: WoW: Towards a world omniscient world model through embodied interaction
- **arXiv**: [https://arxiv.org/abs/2509.22642](https://arxiv.org/abs/2509.22642)
- **GitHub**: [https://github.com/wow-world-model/wow-world-model](https://github.com/wow-world-model/wow-world-model)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2509.22642](https://arxiv.org/abs/2509.22642)
- **GitHub**: [https://github.com/wow-world-model/wow-world-model](https://github.com/wow-world-model/wow-world-model)

## 简介
WoW（World Omniscient World model）是一个旨在通过"具身交互"（embodied interaction）构建全知世界模型的综合性框架。WoW 的核心理念是：世界模型应当通过主动的具身交互来获取对世界的全面认知，而非被动地从固定视角视频中学习。该框架构建了一个多模态世界模型，集成了视觉理解、物理推理和交互能力，从丰富的具身交互数据中学习环境的动力学特性。

WoW 框架包含了专门的数据收集管道，使用多种机器人平台在各种真实世界场景中执行多样化的交互任务。该模型能够生成对未来世界状态的预测（包括视觉和物理状态），并根据这些预测结果进行主动探索规划。WoW 的一个关键贡献是其"全知性"（omniscience）的追求——模型不仅要能预测当前的可见场景，还应当对不可见或被遮挡区域的物理状态具备推断能力。

## 关键特征
- **数据规模**: 多机器人平台的具身交互数据，覆盖家庭和工业场景
- **数据模态**: 多视角 RGB 视频、深度图、物理状态、交互动作
- **主要指标**: 视觉预测质量、物理预测准确度、主动探索效率
- **领域**: 具身世界模型、主动交互学习、全知视觉理解

## 与世界模型的关系
WoW 直接推动了"具身交互式世界模型"研究范式的发展。不同于传统的从静态视频中学习的世界模型，WoW 展示了通过主动交互可以构建更全面、更准确的世界认知。这一工作与 Genie 2、Matrix 等交互式世界模型形成互补，共同推动了世界模型从"被动观察者"向"主动参与者"的范式转变。WoW 的主动探索机制也对世界模型在机器人学中的实际部署具有重要意义。

## 代表性用途
- 具身交互式世界模型的代表性工作
- 被用于世界模型的主动探索和不确定性估计研究
- 与 WorldArena 等世界模型评测基准配合使用
