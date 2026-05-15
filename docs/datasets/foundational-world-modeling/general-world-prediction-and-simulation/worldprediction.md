---
title: "WorldPrediction: A Benchmark for High-level World Modeling and Long-horizon Procedural Planning"
design: "WorldPrediction"
arxiv: https://www.arxiv.org/abs/2506.04363
website: https://worldprediction.github.io/
---

# WorldPrediction: A Benchmark for High-level World Modeling and Long-horizon Procedural Planning

::: info 论文信息
- **Design**: WorldPrediction
- **论文全称**: WorldPrediction: A Benchmark for High-level World Modeling and Long-horizon Procedural Planning
- **arXiv**: [https://www.arxiv.org/abs/2506.04363](https://www.arxiv.org/abs/2506.04363)
- **Website**: [https://worldprediction.github.io/](https://worldprediction.github.io/)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2506.04363](https://arxiv.org/abs/2506.04363)
- **Website**: [https://worldprediction.github.io/](https://worldprediction.github.io/)

## 简介
WorldPrediction 是一个基于视频的基准，用于评估不同AI模型的高层次世界建模和长时域程序规划能力。人类拥有内在的"世界模型"，使我们能够基于世界状态进行行动规划。AI智能体同样需要这样的世界模型来进行行动规划。然而，当前AI模型（尤其是生成模型）如何学习此类世界模型并在不同环境中进行程序规划仍不明确。

与以往侧重于低层次世界建模和机器人运动规划的基准不同，WorldPrediction 是首个强调具有时间和语义抽象性的行动的基准。给定初始和最终世界状态，任务是区分正确的行动（WorldPrediction-WM）或正确排序的行动序列（WorldPrediction-PP）与反事实干扰项。

为防止模型利用背景场景中的低级连续性线索，基准提供了"行动等价物"——在不同上下文中观察到但具体执行内容不同的相同行动——作为候选选择项。该基准嵌入了一个正式的部分可观察半MDP框架，确保了评估的可靠性和鲁棒性。实验表明，当前前沿模型在WorldPrediction-WM上仅达到约57%的准确率，在WorldPrediction-PP上仅达到38%，而人类能够完美解决这两个任务。

## 关键特征
- **数据规模**: 高层次世界建模与程序规划任务
- **数据模态**: 视频状态的行动推理
- **主要指标**: 世界建模准确率（WM）、程序规划准确率（PP）
- **领域**: 程序规划、层次化世界建模

## 与世界模型的关系
WorldPrediction 为视觉世界模型（VWM）提供了独特的高层次认知评估维度。大多数VWM评估集中在像素级预测或低层次物理模拟上，而WorldPrediction 评估的是模型的抽象规划能力——理解行动如何改变世界状态并在长时域上进行推理。该基准揭示的前沿模型38%的程序规划准确率与人类100%之间的巨大差距，表明当前VWM在语义层面的世界理解能力仍有巨大的提升空间。

## 代表性用途
- WorldPrediction (Chen et al., 2025) - 原始论文，建立高层次世界建模基准
- 生成模型在程序规划中的能力评估
- 半MDP框架下的世界状态推理研究
