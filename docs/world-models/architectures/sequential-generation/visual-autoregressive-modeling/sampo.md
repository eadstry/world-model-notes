---
title: "SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models"
design: "SAMPO"
arxiv: https://arxiv.org/abs/2509.15536
---

# SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models

::: info 论文信息
- **Design**: SAMPO
- **论文全称**: SAMPO: Scale-wise Autoregression with Motion Prompt for Generative World Models
- **arXiv**: [https://arxiv.org/abs/2509.15536](https://arxiv.org/abs/2509.15536)
:::

## 学习笔记

### 核心思想

SAMPO 提出了一种融合视觉自回归（VAR）与序列式生成的新型世界模型框架，旨在同时解决传统自回归视频生成的三大挑战：空间结构破坏、生成效率低、运动建模不充分。其核心设计包括：(1) 帧内使用视觉自回归（多尺度渐进生成 + 双向注意力）保有空间结构并支持并行解码；(2) 帧间使用时序 Transformer 进行自回归预测，保证时间一致性；(3) 轨迹感知的运动提示（Motion Prompt）模块，将机器人动作和物体运动轨迹显式注入生成过程。

SAMPO 的贡献在于首次将 VAR 范式引入世界模型，通过非对称多尺度 Tokenizer（高分辨率编码观测帧、低分辨率编码预测帧）实现了精度与效率的 Pareto 最优。该模型在多种视频预测基准上达到竞争性精度，同时实现了 4.4 倍的推理加速，使得长程 rollout 变得实际可用。运动提示模块使模型能精确控制和模拟机器人操作和物体运动。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
