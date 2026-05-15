---
title: "Physion: Evaluating Physical Prediction from Vision in Humans and Machines"
design: "Physion"
arxiv: https://arxiv.org/abs/2106.08261
github: https://github.com/cogtoolslab/physics-benchmarking-neurips2021
---

# Physion: Evaluating Physical Prediction from Vision in Humans and Machines

::: info 论文信息
- **Design**: Physion
- **论文全称**: Physion: Evaluating Physical Prediction from Vision in Humans and Machines
- **arXiv**: [https://arxiv.org/abs/2106.08261](https://arxiv.org/abs/2106.08261)
- **GitHub**: [https://github.com/cogtoolslab/physics-benchmarking-neurips2021](https://github.com/cogtoolslab/physics-benchmarking-neurips2021)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2106.08261](https://arxiv.org/abs/2106.08261)
- **GitHub**: [https://github.com/cogtoolslab/physics-benchmarking-neurips2021](https://github.com/cogtoolslab/physics-benchmarking-neurips2021)

## 简介
Physion 是由斯坦福大学 Li Fei-Fei 和 MIT Joshua Tenenbaum 等知名学者联合推出的数据集和基准，旨在严格评估从视觉输入预测物理场景演化的能力。该数据集提供了涵盖广泛物理现象的真实模拟，包括刚体和软体碰撞、稳定多物体配置、滚动、滑动和抛射运动等，为物理理解提供了远超以往基准的综合挑战。

Physion 的独特之处在于它同时进行了精确的人类行为测量，在相同的场景集上测量了人类预测行为，从而可以直接评估模型在多大程度上能够逼近人类表现。研究发现，学习以物体为中心表征的视觉算法通常优于不学习此类表征的算法，但仍远落后于人类表现。另一方面，能够直接访问物理状态信息的图神经网络不仅表现更好，其预测也与人更相似。

这些结果表明，从场景中提取物理表征是视觉算法达到人类级别物理理解的主要瓶颈。Physion 公开了所有数据和代码，支持完全可复现的基准测试。

## 关键特征
- **数据规模**: 涵盖多种物理现象的场景模拟（刚体、软体、碰撞、滚动、滑动、抛射等）
- **数据模态**: 3D物理模拟视频
- **主要指标**: 物理预测准确性、与人类表现的对齐度
- **领域**: 物理直觉、视觉预测

## 与世界模型的关系
Physion 是视觉世界模型（VWM）物理理解评估的经典基准之一。它直接衡量了VWM从视觉输入预测物理动态的能力——这是世界模型在具身智能和机器人中的核心功能。Physion 的"物理解耦诊断"理念（即分离评估不同的物理概念）为后续的世界模型物理基准（如 WorldBench、PhyGenBench）奠定了方法论基础。该基准同时揭示了端到端视觉模型与基于物理状态图神经网络之间的性能差距，表明将结构化物理表征融入VWM是提升性能的关键方向。

## 代表性用途
- Physion (Bear et al., NeurIPS 2021) - 原始论文，评估多种架构的物理预测能力
- VWM的物理理解能力基线评估
- 物体为中心的视觉表征学习研究
