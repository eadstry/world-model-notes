---
title: "Do generative video models understand physical principles?"
design: "Physics-IQ"
arxiv: https://arxiv.org/abs/2501.09038
github: https://github.com/google-deepmind/physics-IQ-benchmark
---

# Physics-IQ: Do generative video models understand physical principles?

::: info 论文信息
- **Design**: Physics-IQ
- **论文全称**: Do generative video models understand physical principles?
- **arXiv**: [https://arxiv.org/abs/2501.09038](https://arxiv.org/abs/2501.09038)
- **GitHub**: [https://github.com/google-deepmind/physics-IQ-benchmark](https://github.com/google-deepmind/physics-IQ-benchmark)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2501.09038](https://arxiv.org/abs/2501.09038)
- **GitHub**: [https://github.com/google-deepmind/physics-IQ-benchmark](https://github.com/google-deepmind/physics-IQ-benchmark)

## 简介
Physics-IQ 是由 Google DeepMind 推出的全面物理理解基准数据集。AI视频生成正在经历一场革命，质量和真实感快速提升。这些进步引发了一场激烈的科学辩论：视频模型是否学习了发现物理定律的"世界模型"——还是仅仅是复杂的像素预测器，达到视觉真实感但未理解现实的物理原理？

Physics-IQ 通过开发一个只能通过深入理解多种物理原理才能解决的全面基准来回答这个问题。涵盖的物理原理包括流体动力学、光学、固体力学、磁学和热力学等。在对一系列当前模型（Sora、Runway、Pika、Lumiere、Stable Video Diffusion 和 VideoPoet）的评估中，研究发现物理理解严重受限，且与视觉真实感无关。

与此同时，一些测试用例已经可以被成功解决，这表明仅从观测中获取某些物理原理可能是可能的，但重大挑战仍然存在。Physics-IQ 的核心结论是：视觉真实感并不意味着物理理解——这对当前VWM的发展方向具有警示意义。

## 关键特征
- **数据规模**: 覆盖多种物理原理的全面测试（流体、光学、固体力学、磁学、热力学）
- **数据模态**: 视频生成 + 物理原理测试
- **主要指标**: 物理原理理解准确率
- **领域**: 物理理解、视频生成模型评估

## 与世界模型的关系
Physics-IQ 由 DeepMind 团队开发，直接回应了"Sora是否学习了世界模型"的争议。它提供了目前来自顶级研究机构的最权威的VWM物理理解评估。关键发现——视觉真实感与物理理解无关——强烈影响了VWM领域的研究方向，促使研究者不再仅关注视觉质量提升，而是寻求将结构化物理知识融入模型的新方法。

## 代表性用途
- Physics-IQ (Motamed et al., Google DeepMind, 2025) - 原始论文，评估Sora等主流模型
- 视频生成模型物理理解能力的前沿诊断
- VWM的物理学习路径研究
