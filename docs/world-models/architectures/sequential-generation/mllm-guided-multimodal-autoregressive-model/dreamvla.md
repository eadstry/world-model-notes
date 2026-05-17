---
title: "DreamVLA: A Vision-Language-Action Model with World Model"
design: "DreamVLA"
arxiv: https://arxiv.org/abs/2507.04447
github: https://github.com/Zhangwenyao1/DreamVLA
---

# DreamVLA: 融合世界模型的视觉-语言-动作模型

::: info 论文信息
- **Design**: DreamVLA
- **论文全称**: DreamVLA: A Vision-Language-Action Model with World Model
- **arXiv**: [https://arxiv.org/abs/2507.04447](https://arxiv.org/abs/2507.04447)
- **GitHub**: [https://github.com/Zhangwenyao1/DreamVLA](https://github.com/Zhangwenyao1/DreamVLA)
:::

## 学习笔记

### 核心思想

DreamVLA 提出了一种全新的 VLA 范式：在采取行动之前，让模型先在「脑海」中预演未来的视觉状态，以此来引导和优化动作生成。传统的 VLA 模型主要是反应式的——看到当前状态，直接输出动作，缺乏对未来后果的预期能力。DreamVLA 的核心创新在于将世界模型嵌入到 VLA 框架中，使模型能够预测执行动作后世界的未来变化，再反过来据此调整当前的动作输出。

具体实现上，DreamVLA 引入了一种「动态区域引导的世界知识预测」（dynamic-region-guided world knowledge prediction）机制，同时预测动态信息（如物体运动）、空间信息（如 3D 位置）、世界关系（如语义约束）等多个维度的未来知识。通过分块结构化注意力（block-wise structured attention），不同知识源之间保持独立处理，防止信息泄露和语义混淆。在预测的未来知识基础上，使用扩散 Transformer 生成未来视觉帧，最终以「感知——预测——动作」的闭环方式输出精确的动作序列。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
