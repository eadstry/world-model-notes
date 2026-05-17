---
title: "Surgical Vision World Model"
design: "SurgWM"
arxiv: https://arxiv.org/abs/2503.02904
github: https://github.com/bhattarailab/Surgical-Vision-World-Model
---

# SurgWM: Surgical Vision World Model

::: info 论文信息
- **Design**: SurgWM
- **论文全称**: Surgical Vision World Model
- **arXiv**: [https://arxiv.org/abs/2503.02904](https://arxiv.org/abs/2503.02904)
- **GitHub**: [https://github.com/bhattarailab/Surgical-Vision-World-Model](https://github.com/bhattarailab/Surgical-Vision-World-Model)
:::

## 学习笔记

### 核心思想

SurgWM 是首个针对外科手术场景的视觉世界模型，发表于 MICCAI 2025 DEMI Workshop。传统手术仿真要么过于简化而缺乏真实感，要么需要大量人工标注而难以规模化。SurgWM 借鉴 Genie 的思路，通过 VQ-VAE 将手术视频帧编码为离散视觉 Token，然后使用 Latent Action Model（LAM）以完全无监督的方式学习控制手术场景演化的潜在动作，最后通过 Dynamics Model（自回归 Transformer）根据历史 Token 和潜在动作预测未来的视频帧。

SurgWM 的核心贡献在于将世界模型范式从游戏/自动驾驶领域首次扩展到医疗手术场景，证明了在无需任何动作标注的情况下，模型能够从手术视频中自主发现可解释的潜在动作空间并生成逼真的手术场景演化。该工作为手术仿真、手术教学和手术 AI Agent 训练提供了全新的视频生成管道，在 SurgToolLoc-2022 数据集上展示了有前景的生成质量。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
