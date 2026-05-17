---
title: "ADriver-I: A General World Model for Autonomous Driving"
design: "ADriver-I"
arxiv: https://arxiv.org/abs/2311.13549
---

# ADriver-I: 面向自动驾驶的通用世界模型

::: info 论文信息
- **Design**: ADriver-I
- **论文全称**: ADriver-I: A General World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2311.13549](https://arxiv.org/abs/2311.13549)
:::

## 学习笔记

### 核心思想

ADriver-I 是该方向的先驱工作之一，首次提出了「交错视觉-动作对」（interleaved vision-action pair）的概念，将视觉场景和控制信号统一为同一种格式。传统自动驾驶往往将感知、预测、规划和控制分而治之，模块间自然形成信息瓶颈和累积误差。ADriver-I 的核心洞察是：自动驾驶本质上是一个「自己看路、自己决定、自己驾驶」的过程，模型需要在历史视觉-动作序列上自回归地预测当前帧的控制信号，再基于该信号扩散生成下一帧的视觉预测，如此循环往复。

ADriver-I 实现了一个结合 MLLM 与扩散模型的通用自动驾驶世界模型。以 vision-action pairs 为输入，模型自回归地预测控制信号；每一个预测出的控制信号又条件化地生成下一帧视觉预测。这种「预测——生成——再预测」的闭环循环，使模型既是环境的观察者，也是未来的生成者和决策者。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
