---
title: "Wow, wo, val! A Comprehensive Embodied World Model Evaluation Turing Test"
design: "WoW-World-Eval"
arxiv: https://arxiv.org/abs/2601.04137
---

# WoW-World-Eval: Wow, wo, val! A Comprehensive Embodied World Model Evaluation Turing Test

::: info 论文信息
- **Design**: WoW-World-Eval
- **论文全称**: Wow, wo, val! A Comprehensive Embodied World Model Evaluation Turing Test
- **arXiv**: [https://arxiv.org/abs/2601.04137](https://arxiv.org/abs/2601.04137)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2601.04137](https://arxiv.org/abs/2601.04137)

## 简介
WoW-World-Eval 是一项针对具身世界模型的综合性评估"图灵测试"，旨在系统性地回答"世界模型是否真正理解了世界"这一核心问题。该基准提出了一个分层的世界模型评估框架，从多个维度（物理一致性、因果推理、空间记忆、时间预测等）对世界模型进行全面评测，类似于对世界模型进行多维度的图灵测试。

WoW-World-Eval 的一个关键创新是其"具身体验"测试设计：模型需要在仿真环境中主动交互，并基于交互结果回答关于世界的问题。评估任务包括物理规则验证（物体是否会掉落）、空间关系判断（A 在 B 的左边吗）、时间预测（下一步会发生什么）、因果推理（为什么物体移动了）等。该基准使用了多种仿真环境（包括机器人操作和物理模拟场景）作为测试平台，为标准化的世界模型评估提供了方法论基础。

## 关键特征
- **数据规模**: 多维度评估套件，覆盖物理、空间、时间、因果等多个子测试
- **数据模态**: 交互式环境观测、任务问题-答案对、多模态评估信号
- **主要指标**: 各维度通过率、综合图灵测试得分、物理一致性得分
- **领域**: 世界模型评估、图灵测试、具身认知

## 与世界模型的关系
WoW-World-Eval 直接服务了世界模型社区中一个被长期忽视的需求——系统性评估。"什么样的世界模型是好模型"一直困扰着研究者，而 WoW-World-Eval 提供了首个面向具身世界模型的多维度标准化评估框架。通过将评估分解为物理、空间、时间等子维度，该基准使研究者能够精确定位模型的强项和弱点，指导后续世界模型的改进方向。

## 代表性用途
- 作为具身世界模型的标准化评估框架
- 用于比较不同世界模型架构的能力边界
- 为世界模型的因果推理能力提供量化指标
- 与 WoW 世界模型框架配合进行系统性能力评估
