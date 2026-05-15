---
title: "PBench: A benchmark for evaluating generative models"
design: "PBench"
website: https://research.nvidia.com/labs/dir/pbench/
---

# PBench: A benchmark for evaluating generative models

::: info 论文信息
- **Design**: PBench
- **论文全称**: PBench: A benchmark for evaluating generative models
- **Website**: [https://research.nvidia.com/labs/dir/pbench/](https://research.nvidia.com/labs/dir/pbench/)
:::

## 数据集/基准信息
- **Website**: [https://pbench.github.io/](https://pbench.github.io/)

## 简介
PBench 是一个专注于物理常识推理的基准测试集。它旨在评估AI模型在涉及物理世界常识的场景中进行推理和判断的能力。PBench 的设计融合了经典物理问题和日常生活场景，要求模型不仅理解物理原理，还能在实际情境中灵活应用这些知识。

该基准涵盖了从基础力学（如重力、碰撞、摩擦）到更复杂的物理现象（如流体行为、热传导、材料特性）的广泛物理概念。PBench 的评估任务包括物理场景分类、物理事件预测和物理一致性判断等多种形式。

PBench 的特色在于以常识推理为焦点——不要求精确的物理计算，而是测试模型对物理世界运作方式的直觉理解。这种设计与认知科学中对人类"朴素物理学"（Naive Physics）的研究高度契合。

## 关键特征
- **数据规模**: 物理常识推理多任务评估
- **数据模态**: 文本/图像物理场景
- **主要指标**: 物理常识推理准确率
- **领域**: 物理常识、直觉推理

## 与世界模型的关系
PBench 从"常识推理"角度补充了VWM的物理评估。大多数VWM物理基准测试的是视觉层面的物理理解（生成视频是否物理合理），而PBench关注的是认知层面的物理推理——模型是否知道"物体会往下掉"而不需要精确计算重力加速度。这种常识层面的评估对于VWM在一般性世界理解中的应用场景非常重要。

## 代表性用途
- PBench 物理常识推理基准
- VWM的朴素物理学评估
- 物理常识在AI推理中的应用研究
