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

ReDRAW (REsilient Dynamics with Residual Adaptation of World models) 提出了一种用 latent-state 动力学残差来适配世界模型的新方法。核心思想是：世界模型在新环境中暴露于"动力学偏的（dynamics shift）时——如摩擦力改变、载荷变化——通过学习一个residual dynamics model 来快速适应，而不是重新训练整个世界模型。
ReDRAW 的关键见解是：许多环境变化只是局部改变动力学（如地面从大理石变为草地），而非完全不同的物理规律。Residual adaptation 仅需学习"旧动力学到新动力学的差异部分"（通常很小），实现了10-100 倍的适应。这使得世界模型可以在部署中实时适应环境变化。
## 技术架。
**Vision Encoding（视觉编码）**：DreamerV3 风格潜CNN encoder，pretrained 在源域所有环境变化中。
**Knowledge Learning（知识学习）**：两阶段。Stage 1：在"标准环境"上预训练完整潜RSSM world model。Stage 2：在新环境中固定基础 world model 参数，仅学习 residual dynamics head——一个小型网络（MLP），以当前latent state 前action 为输入，输出基础 dynamics 预测中corrections。Residual head 的参数量仅为基础模型的1-5%。
**Controllable Simulation（可控模拟）**：在 residual-augmented latent space 中进行想象。Correction 的model 既保留基础物理知识，又适应新的动力学特性。
## 代码实现要点

网站 [redraw.jblanier.net](https://redraw.jblanier.net/)。基准DreamerV3 JAX。Residual dynamics head + online adaptation。在 DMC with dynamics shift 环境中评估。
## 关键创新。
1. **Residual Dynamics Adaptation**：仅学习动力学残差以适应新环境2. **极快适应**：residual head 极小，训练速度的10-100 的3. **保留基础知识**：固定基础模型防止灾难性遗忘4. **在线适应**：部署中实时学习动力学残。
## 代表性结。
在DMC odynamics shift 场景（摩擦力、重力、关节参数变化）中，ReDRAW 的1000 步内（vs DreamerV3 从头训练需 50k+ 步）即适应新动力学并恢复高性能。Residual adaptation 的成功率一200 步时已达 60%一00 步时基本恢复原性能。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
