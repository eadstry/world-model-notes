---
title: "Masked World Models for Visual Control"
design: "MWM"
arxiv: https://arxiv.org/abs/2206.14244
github: https://github.com/younggyoseo/MWM
---

# MWM: Masked World Models for Visual Control

::: info 论文信息
- **Design**: MWM
- **论文全称**: Masked World Models for Visual Control
- **arXiv**: [https://arxiv.org/abs/2206.14244](https://arxiv.org/abs/2206.14244)
- **GitHub**: [https://github.com/younggyoseo/MWM](https://github.com/younggyoseo/MWM)
:::

## 核心思想

MWM (Masked World Model) 是 UC Berkeley 提出的基于掩码自编码器（MAE）的视觉世界模型。核心创新是将 MAE 预训练与机器人操控的世界模型学习相结合：使用大规模机器人视频数据进行 MAE 预训练获得强大的视觉表示，然后在此表示之上学习 latent dynamics 用于基于模型的规划。

MWM 的关键洞察是：在机器人操控场景中，像素重建的质量直接影响世界模型的规划精度。通过 MAE 风格的大规模预训练，encoder 能捕捉丰富的视觉语义，使得下游的 latent dynamics 学习更加高效。

## 技术架构

**Vision Encoding（视觉编码）**：基于 MAE 的 ViT encoder-decoder，在大规模机器人操作视频上预训练。encoder 在随机遮挡 75% 的 patch 条件下学习重建完整图像。

**Knowledge Learning（知识学习）**：在冻结的 MAE encoder 特征之上，学习一个基于 Transformer 的 latent dynamics 模型。动作条件被嵌入到 dynamics Transformer 中，预测未来的 latent features。

**Controllable Simulation（可控模拟）**：使用 CEM 或 MPPI 在 latent space 中进行规划。给定目标图像（目标状态），规划器在 latent space 中搜索能实现目标的动作序列。

## 代码实现要点

代码开源在 [younggyoseo/MWM](https://github.com/younggyoseo/MWM)。基于 PyTorch。MAE 预训练 + Transformer dynamics + CEM/MPPI 规划。支持 Robosuite 和 Franka Kitchen 机器人操控任务。

## 关键创新点

1. **MAE 预训练世界模型**：将掩码自编码器引入 world model 视觉编码
2. **冻结论文编码器**：encoder 在预训练后冻结，仅训练 dynamics
3. **目标条件规划**：支持以图像为目标的条件规划
4. **大规模预训练**：利用海量机器人视频提升泛化

## 代表性结果

在 Franka Kitchen 和 Robosuite 上的多任务操控场景中，MWM 显著超越 DreamerV2 和基于 ImageNet 预训练编码器的方案。MAE 预训练使模型在仅 10 个示范的条件下即可完成复杂操控任务。latent planning 精度比 Dreamer 提升 30%+。
