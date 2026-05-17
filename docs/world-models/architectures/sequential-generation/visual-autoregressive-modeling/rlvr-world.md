---
title: "RLVR-World: Training World Models with Reinforcement Learning"
design: "RLVR-World"
arxiv: https://arxiv.org/abs/2505.13934
github: https://github.com/thuml/RLVR-World
---

# RLVR-World: Training World Models with Reinforcement Learning

::: info 论文信息
- **Design**: RLVR-World
- **论文全称**: RLVR-World: Training World Models with Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2505.13934](https://arxiv.org/abs/2505.13934)
- **GitHub**: [https://github.com/thuml/RLVR-World](https://github.com/thuml/RLVR-World)
:::

## 学习笔记

### 核心思想

RLVR-World 提出了一种全新的世界模型训练范式：使用强化学习（RL）配合可验证奖励（Verifiable Rewards）来训练世界模型。传统世界模型通过极大似然估计（MLE）优化单步 Token 预测的交叉熵损失，但这种"逐 Token 优化"与"模型的实际使用目标（多步预测质量）"之间存在严重偏差。RLVR-World 直接将世界模型的多步生成过程视为一个决策问题，使用 GRPO 等 RL 算法，以面向下游应用的验证奖励（如预测状态与真实状态的 L2 距离、生成视频的 SSIM/PSNR 等）作为优化信号，直接优化模型的多步累积预测质量。

RLVR-World 是将 RLVR 范式从 LLM 扩展到多模态世界模型的开创性工作，发表于 NeurIPS 2025。该方法不绑定于任何特定架构，可广泛应用于状态预测、视频生成等多种模态的世界模型。实验证明，RLVR 训练的模型在多步预测累积误差上显著低于 MLE 训练的模型，在长程预测场景中优势尤为突出。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
