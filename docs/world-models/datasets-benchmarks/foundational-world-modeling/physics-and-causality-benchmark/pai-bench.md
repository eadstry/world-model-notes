---
title: "Physical ai bench: A comprehensive benchmark for physical ai generation and understanding"
design: "PAI-Bench"
github: https://github.com/SHI-Labs/physical-ai-bench
---

# PAI-Bench: Physical ai bench: A comprehensive benchmark for physical ai generation and understanding

::: info 论文信息
- **Design**: PAI-Bench
- **论文全称**: Physical ai bench: A comprehensive benchmark for physical ai generation and understanding
- **GitHub**: [https://github.com/SHI-Labs/physical-ai-bench](https://github.com/SHI-Labs/physical-ai-bench)
:::

## 数据集/基准信息
- **GitHub**: [https://github.com/PAIRobotics/PAI-Bench](https://github.com/PAIRobotics/PAI-Bench)

## 简介
PAI-Bench（Physics-Aware Intelligence Benchmark）是一个专注于物理感知智能评估的基准。该基准从机器人学和具身智能的实际需求出发，评估模型在物理交互场景中的推理和预测能力。PAI-Bench 的设计理念是：真正的物理智能不仅需要理解物理定律，还需要在具体的操作和交互场景中应用这些知识。

与传统的视频生成物理基准不同，PAI-Bench 更强调物理推理在机器人操作中的实际应用，包括物体操控、力反馈预测和物理交互规划等维度。该基准填补了从桌面物理推理到实际机器人操作之间的评估空白。

PAI-Bench 的评估任务设计考虑了真实机器人操作中的物理挑战，如摩擦力不确定性、物体质量分布未知和接触动力学等。

## 关键特征
- **数据规模**: 机器人物理交互场景评估
- **数据模态**: 机器人操作模拟、物理交互
- **主要指标**: 物理推理准确率、操作规划成功率
- **领域**: 机器人学、物理感知智能

## 与世界模型的关系
PAI-Bench 代表了VWM从"观看物理"到"参与物理"的评估延伸。在机器人操作场景中，VWM需要预测行动-物理后果的因果链——这是世界模型最具应用价值也最具挑战性的用例。PAI-Bench 提供的操作导向评估为VWM在具身智能中的实际部署提供了关键的测试平台。

## 代表性用途
- PAI-Bench 物理感知智能基准
- 机器人操作场景中的VWM评估
- 物理交互规划能力评测
