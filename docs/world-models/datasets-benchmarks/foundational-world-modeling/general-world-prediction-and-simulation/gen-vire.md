---
title: "Can World Simulators Reason? Gen-ViRe: A Generative Visual Reasoning Benchmark"
design: "Gen-ViRe"
arxiv: https://arxiv.org/abs/2511.13853
github: https://github.com/L-CodingSpace/GVR
---

# Gen-ViRe: Can World Simulators Reason? Gen-ViRe: A Generative Visual Reasoning Benchmark

::: info 论文信息
- **Design**: Gen-ViRe
- **论文全称**: Can World Simulators Reason? Gen-ViRe: A Generative Visual Reasoning Benchmark
- **arXiv**: [https://arxiv.org/abs/2511.13853](https://arxiv.org/abs/2511.13853)
- **GitHub**: [https://github.com/L-CodingSpace/GVR](https://github.com/L-CodingSpace/GVR)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2511.13853](https://arxiv.org/abs/2511.13853)
- **GitHub**: [https://github.com/L-CodingSpace/GVR](https://github.com/L-CodingSpace/GVR)

## 简介
Gen-ViRe（Generative Visual Reasoning Benchmark）是一个评估视频生成模型"视觉推理"能力的框架。虽然Chain-of-Thought（CoT）提示使大语言模型能够进行复杂的符号推理，但它仍局限于离散文本，无法模拟连续的、物理驱动的现实世界动态。最近的视频生成模型通过"Chain-of-Frames（CoF）推理"——将思维具体化为逐帧视觉序列——有望成为世界模拟器。

然而，一个根本挑战仍然存在：现有基准关注保真度和对齐度，并不评估CoF推理，因此无法衡量多步规划、算法逻辑或抽象模式外推等核心认知能力。Gen-ViRe 填补了这一评估空白。

该框架基于认知科学和现实世界AI应用，将CoF推理分解为六个认知维度——从感知逻辑到抽象规划——和24个子任务。通过多源数据策展、最小提示协议和基于VLM辅助的混合评估，Gen-ViRe 首次对视频模型作为推理器进行了定量评估。在SOTA系统上的实验揭示了令人印象深刻的视觉质量与实际推理深度之间的巨大差距。

## 关键特征
- **数据规模**: 6个认知维度，24个子任务
- **数据模态**: 视频帧序列推理
- **主要指标**: Chain-of-Frames 推理准确率、推理深度
- **领域**: 视觉推理、认知评估

## 与世界模型的关系
Gen-ViRe 直接触及了视觉世界模型（VWM）最核心但常被忽视的能力：推理。传统的VWM评估侧重于感知质量，但Gen-ViRe 揭示了一个关键问题——模型可能生成视觉上合理的输出，却完全缺乏对物理因果关系的真正理解。该基准提供的六维度认知评估框架（感知逻辑到抽象规划）为VWM的"智能程度"提供了新的衡量标准，对于推动VWM从"世界模拟器"向"世界推理器"的进化具有重要意义。

## 代表性用途
- Gen-ViRe (Liu et al., 2025) - 原始论文，首次定量评估视频模型的CoF推理能力
- Chain-of-Frames推理能力的系统评测
- 视觉世界模型的认知能力诊断
