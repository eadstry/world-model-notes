---
title: "Benchmarking Progress to Infant-Level Physical Reasoning in AI"
design: "InfLevel"
github: https://github.com/allenai/inflevel
---

# InfLevel: Benchmarking Progress to Infant-Level Physical Reasoning in AI

::: info 论文信息
- **Design**: InfLevel
- **论文全称**: Benchmarking Progress to Infant-Level Physical Reasoning in AI
- **GitHub**: [https://github.com/allenai/inflevel](https://github.com/allenai/inflevel)
:::

## 数据集/基准信息
- **GitHub**: [https://github.com/inflevel/inflevel](https://github.com/inflevel/inflevel)

## 简介
InfLevel 是一个专注于多层物理推理能力的评估基准。它继承了视觉直觉物理评估的传统（如IntPhys、Physion等），但将评估维度扩展到多层级的物理理解和交互推理。该基准通过构建需要多步物理推理的测试场景，衡量AI模型在物理因果关系链上的理解深度。

与仅评估单步物理判断的基准不同，InfLevel 要求模型理解物理事件的级联效应——一个物理变化如何引发另一个变化，形成完整的因果链。这种多层级评估对于测试模型是否真正理解物理原理而非仅仅记忆表面模式至关重要。

InfLevel 的设计理念反映了认知科学中对人类物理直觉层级结构的研究：人类在理解物理世界时并非一步到位，而是通过多个抽象层次逐步建立对复杂物理现象的理解。

## 关键特征
- **数据规模**: 多层物理推理测试场景
- **数据模态**: 3D合成视频/模拟
- **主要指标**: 多层推理准确率
- **领域**: 层级物理推理

## 与世界模型的关系
InfLevel 对视觉世界模型（VWM）的核心启示是：真正的物理理解需要多层级（而非单层级）的因果推理能力。这对于VWM的设计和评估具有重要意义——当前大多数VWM评估仅测试单步物理预测，而 InfLevel 表明多层级因果推理可能是区分浅层模式匹配和深层物理理解的关键测试维度。

## 代表性用途
- InfLevel 多层物理推理基准
- VWM的层级因果推理评估
- 直觉物理学中多步推理能力的诊断
