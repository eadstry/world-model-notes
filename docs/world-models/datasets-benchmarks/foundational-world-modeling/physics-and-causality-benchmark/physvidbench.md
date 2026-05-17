---
title: "Can Your Model Separate Yolks with a Water Bottle? Benchmarking Physical Commonsense Understanding in Video Generation Models"
design: "PhysVidBench"
arxiv: https://arxiv.org/abs/2507.15824
github: https://github.com/ensanli/PhysVidBenchCode
---

# PhysVidBench: Can Your Model Separate Yolks with a Water Bottle? Benchmarking Physical Commonsense Understanding in Video Generation Models

::: info 论文信息
- **Design**: PhysVidBench
- **论文全称**: Can Your Model Separate Yolks with a Water Bottle? Benchmarking Physical Commonsense Understanding in Video Generation Models
- **arXiv**: [https://arxiv.org/abs/2507.15824](https://arxiv.org/abs/2507.15824)
- **GitHub**: [https://github.com/ensanli/PhysVidBenchCode](https://github.com/ensanli/PhysVidBenchCode)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2507.15824](https://arxiv.org/abs/2507.15824)

## 简介
PhysVidBench 是一个专注于评估T2V系统物理推理能力的基准，强调"工具使用"、材料属性和程序交互——这些领域对物理合理性至关重要。该基准包含383个精心策划的提示词，开创性地将焦点放在人类使用工具的物理常识上。

PhysVidBench 采用三阶段评估流程：(1) 从提示词中制定接地物理问题；(2) 使用视觉语言模型对生成的视频进行字幕描述；(3) 让语言模型仅基于字幕回答几个涉及物理的问题。这种间接策略巧妙地规避了直接基于视频评估中常见的幻觉问题。

通过突出可供性和工具中介行动——现有T2V评估中被忽视的领域——PhysVidBench 为评估生成视频模型中的物理常识提供了一个结构化、可解释的框架。其核心洞察是：物理常识不仅体现在物体运动中，更体现在人类如何使用工具和材料进行目标导向的操作中。

## 关键特征
- **数据规模**: 383个提示词，强调工具使用和材料属性
- **数据模态**: 文本提示 + 生成视频 + 三阶段VLM评估
- **主要指标**: 物理问答准确率
- **领域**: 工具使用、物理交互

## 与世界模型的关系
PhysVidBench 从"可供性"（Affordance）和工具使用的独特角度补充了VWM的物理评估。大多数物理基准关注物体运动的物理定律，而PhysVidBench关注的是人类如何利用物理原理进行工具操作——这对具身智能中的VWM应用至关重要。其三阶段评估流程（问题-字幕-回答）为VWM评估提供了一种高效且低幻觉的方法论参考。

## 代表性用途
- PhysVidBench (Sanli et al., 2025) - 原始论文，建立工具使用物理常识基准
- 三阶段VLM间接评估流程的开发
- T2V模型中可供性理解能力的评测
