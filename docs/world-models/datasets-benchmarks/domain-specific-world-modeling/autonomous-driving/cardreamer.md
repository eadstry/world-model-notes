---
title: "CarDreamer: Open-Source Learning Platform for World Model based Autonomous Driving"
design: "CarDreamer"
arxiv: https://arxiv.org/abs/2405.09111
github: https://github.com/ucd-dare/CarDreamer
---

# CarDreamer: Open-Source Learning Platform for World Model based Autonomous Driving

::: info 论文信息
- **Design**: CarDreamer
- **论文全称**: CarDreamer: Open-Source Learning Platform for World Model based Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2405.09111](https://arxiv.org/abs/2405.09111)
- **GitHub**: [https://github.com/ucd-dare/CarDreamer](https://github.com/ucd-dare/CarDreamer)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2405.09115](https://arxiv.org/abs/2405.09115)
- **GitHub**: [https://github.com/ucd-dare/CarDreamer](https://github.com/ucd-dare/CarDreamer)

## 简介
CarDreamer 是由 UC Davis 研究团队提出的基于世界模型的自动驾驶学习平台，专门设计用于训练和评估自动驾驶世界模型。CarDreamer 构建在 CARLA 仿真器之上，但提供了完全的世界模型训练框架——包括标准化的数据收集管道、世界模型训练协议和基于世界模型的策略学习算法（Dreamer-based Planning）。CarDreamer 的核心目标是使世界模型在 CARLA 中的训练变得系统和可复现。

CarDreamer 提供了三个关卡（Level 1-3）的渐进式训练协议：Level 1 在简单直线道路场景中训练，Level 2 扩展到城镇道路交叉口，Level 3 涉及复杂的多车道、多交通参与者交互场景。该平台在 40 个不同的 CARLA Town 环境中收集了超过 300,000 条驾驶轨迹，覆盖晴天、雨天、夜晚等多种天气和光照条件。CarDreamer 的一个关键创新是其"增量专家混合"策略——利用来自多个专家的数据来引导世界模型的学习。

## 关键特征
- **数据规模**: 300K+ 驾驶轨迹、40 个 CARLA 环境、3 个难度等级、多种天气/光照
- **数据模态**: CARLA 仿真数据（RGB、深度、语义分割）、车辆状态、专家/强化学习轨迹
- **主要指标**: 驾驶分数、路径完成率、违规统计、世界模型预测质量
- **领域**: 世界模型驱动的自动驾驶、渐进式学习、CARLA 评测

## 与世界模型的关系
CarDreamer 是首个明确定义了"面向自动驾驶"的世界模型训练框架，其三级渐进学习协议为世界模型的自动驾驶任务提供了结构化的训练路径。该工作展示了 Dreamer 系列世界模型在 CARLA 环境中的直接应用，验证了世界模型从仿真到驾驶的可行性。CarDreamer 还提出了"世界模型质量 = 下游驾驶性能"的评估哲学，推动社区以决策为导向评价世界模型。

## 代表性用途
- UC Davis team 使用 CarDreamer 训练 DreamerV3 的自动驾驶变体
- 作为世界模型在 CARLA 中的标准化训练平台
- 与世界模型驾驶评测竞赛直接相关的平台
- 推动了 Dreamer 系列模型向自动驾驶领域的迁移
