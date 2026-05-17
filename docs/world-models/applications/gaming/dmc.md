---
title: "DeepMind Control Suite"
design: "DMC"
arxiv: https://arxiv.org/abs/1801.00690
github: https://github.com/google-deepmind/dm_control
---

# DMC: DeepMind Control Suite

::: info 论文信息
- **Design**: DMC
- **论文全称**: DeepMind Control Suite
- **arXiv**: [https://arxiv.org/abs/1801.00690](https://arxiv.org/abs/1801.00690)
- **GitHub**: [https://github.com/google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1801.00690](https://arxiv.org/abs/1801.00690)
- **GitHub**: [https://github.com/google-deepmind/dm_control](https://github.com/google-deepmind/dm_control)

## 简介
DeepMind Control Suite（DMC）是一Google DeepMind 发布的连续控制强化学习基准，基于 MuJoCo 物理引擎构建，是连续动作空间强化学习的标准评测平台。DMC 提供一30+ 个精心设计的连续控制任务，涵盖单刚体（Cartpole、Acrobot）、多关节机器人（Cheetah、Walker、Humanoid）、操作任务（Reacher、Manipulator）和复杂步态控制（Quadruped）等多个类别。每个任务都使用物理引擎进行真实物理仿真。

DMC 支持两种观测模式：状态向量（关节角度、速度等物理量，用于基于模型的方法）和像素观测的4×84 或更高分辨率和RGB 渲染，用于视觉世界模型）。DMC 的核心优势在于其无限的仿真数据生成能力——每个任务可以生成任意数量的多样化轨迹数据，且所有数据都带有地面真值（物理状态），这对世界模型的训练和验证至关重要。DMC 已从 DeepMind 内部工具发展为全球强化学习和世界模型研究社区的核心基准，并被纳入 Farama Foundation 目Gymnasium 标准环境。

## 关键特征
- **数据规模**: 30+ 个连续控制任务、无限仿真数据生。
- **数据模式**: 状态向量（关节角度/速度图 像素观测的4×84 RGB）、深度图、连续动。
- **主要指标**: 累积奖励、样本效率（奖励 vs 环境步数）、泛化性能
- **领域**: 连续控制、视觉强化学习、世界模型评。

## 与世界模型的关系
DMC 是从像素中训练视觉世界模型的最重要基准之一。其 30+ 个任务涵盖了广泛的物理动态（从简单的倒立摆到复杂的多关节 Humanoid 运动），使世界模型需要在不同物理复杂度层面展示其建模能力。DMC 学状态像素"双重观测使研究者可以在评估世界模型时使用精确的状态真值进行验证（如预测误差在状态空间中的度量），而不像纯视觉环境只能使用像素重建指标。Dreamer、TD-MPC、PlaNet 等世界模型系列均动DMC 作为主要评测平台。

## 代表性用例
- DreamerV1/V2/V3 (2019-2023) 在 DMC 上建立视觉世界模型SOTA
- TD-MPC (2022) 使用 DMC 验证基于模型的连续控。
- PlaNet (2019) 首次在DMC 上展示用于规划的深度世界模型
- DrQ-v2 (2022) 在 DMC 上评测视觉数据增强的强化学习
- DayDreamer (2023) 在 DMC 上验证世界模型对真实机器人的 Sim2Real 迁移

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)