---
title: "Adapting World Models with Latent-State Dynamics Residuals"
design: "ReDRAW"
arxiv: https://arxiv.org/abs/2504.02252
website: https://redraw.jblanier.net/
---

# ReDRAW: Adapting World Models with Latent-State Dynamics Residuals

::: info 论文信息
- **Design**: ReDRAW
- **论文全称**: Adapting World Models with Latent-State Dynamics Residuals
- **arXiv**: [https://arxiv.org/abs/2504.02252](https://arxiv.org/abs/2504.02252)
- **Website**: [https://redraw.jblanier.net/](https://redraw.jblanier.net/)
:::

## 核心思想

ReDRAW (REsilient Dynamics with Residual Adaptation of World models) 提出了一种用 latent-state 动力学残差来适配世界模型的新方法。核心思想是：世界模型在新环境中暴露于"动力学偏移"（dynamics shift）时——如摩擦力改变、载荷变化——通过学习一个 residual dynamics model 来快速适应，而不是重新训练整个世界模型。

ReDRAW 的关键见解是：许多环境变化只是局部改变动力学（如地面从大理石变为草地），而非完全不同的物理规律。Residual adaptation 仅需学习"旧动力学到新动力学的差异部分"（通常很小），实现快 10-100 倍的适应。这使得世界模型可以在部署中实时适应环境变化。

## 技术架构

**Vision Encoding（视觉编码）**：DreamerV3 风格的 CNN encoder，pretrained 在源域所有环境变化中。

**Knowledge Learning（知识学习）**：两阶段。Stage 1：在"标准环境"上预训练完整的 RSSM world model。Stage 2：在新环境中固定基础 world model 参数，仅学习 residual dynamics head——一个小型网络（MLP），以当前 latent state 和 action 为输入，输出基础 dynamics 预测的 corrections。Residual head 的参数量仅为基础模型的 1-5%。

**Controllable Simulation（可控模拟）**：在 residual-augmented latent space 中进行想象。Correction 使 model 既保留基础物理知识，又适应新的动力学特性。

## 代码实现要点

网站 [redraw.jblanier.net](https://redraw.jblanier.net/)。基于 DreamerV3 JAX。Residual dynamics head + online adaptation。在 DMC with dynamics shift 环境中评估。

## 关键创新点

1. **Residual Dynamics Adaptation**：仅学习动力学残差以适应新环境
2. **极快适应**：residual head 极小，训练速度快 10-100 倍
3. **保留基础知识**：固定基础模型防止灾难性遗忘
4. **在线适应**：部署中实时学习动力学残差

## 代表性结果

在 DMC 的 dynamics shift 场景（摩擦力、重力、关节参数变化）中，ReDRAW 在 1000 步内（vs DreamerV3 从头训练需 50k+ 步）即适应新动力学并恢复高性能。Residual adaptation 的成功率在 200 步时已达 60%，500 步时基本恢复原性能。
