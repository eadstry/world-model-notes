---
title: "Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning"
design: "Meta-World"
arxiv: https://arxiv.org/abs/1910.10897
github: https://github.com/Farama-Foundation/Metaworld
---

# Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning

::: info 论文信息
- **Design**: Meta-World
- **论文全称**: Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/1910.10897](https://arxiv.org/abs/1910.10897)
- **GitHub**: [https://github.com/Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1910.10897](https://arxiv.org/abs/1910.10897)
- **GitHub**: [https://github.com/Farama-Foundation/Metaworld](https://github.com/Farama-Foundation/Metaworld)

## 简介
Meta-World 是由 Stanford University 开发的多任务与元强化学习基准，专注于机器人桌面操作任务。该基准使用 MuJoCo 物理引擎的Sawyer 7 自由度机械臂，提供50 个不同的操作任务，涵盖抓取、推动、开门、开窗、按按钮、拧螺丝、挂钩放置、抽屉操作等广泛类别。Meta-World 的一个重要特点是所有任务共享相同的动作空间和工作空间，但需要截然不同的操作策略。

Meta-World 最突出的贡献是其对多任务和元学习场景的标准化评估协议。该基准定义的ML1（单任务变化）、ML10的0任务训练）、ML45的5任务训练+5任务测试）等多种分级设置，允许系统性地评估策略的跨任务泛化能力。此外，Meta-World 支持目标条件设定，每个任务都有特定的目标位置变化，从而测试策略对不同目标配置的适应能力。

## 关键特征
- **数据规模**: 50 个离散任务，每个任务支持目标位置随机。
- **数据模式**: 状态向量（关节角度、物体位姿）、RGB 图像、深度图
- **主要指标**: 成功率、跨任务泛化率、样本效率、元学习适应步数
- **领域**: 元强化学习、多任务强化学习、机器人操作

## 与世界模型的关系
Meta-World 是视觉世界模型研究中最常用的机器人仿真基准之一。由于其 50 个任务共享共同的动作-观测空间但需要不同策略，Meta-World 非常适合评估世界模型在多任务场景中的预测泛化能力。关键挑战在于世界模型是否能从少量交互中快速推断任务意图，并准确预测不同物体交互下的未来状态。Dreamer 系列、TD-MPC 等方法均在Meta-World 上展示了基于世界模型的策略学习。

## 代表性用例
- DreamerV3 (2023) 在 Meta-World 上验证跨任务的世界模型学。
- TD-MPC (2022) 使用 Meta-World 作为连续控制世界模型核心基准
- DrQ-v2 (2022) 在 Meta-World 用作多任务视觉强化学习评。
- MT-Opt (2022) 在 Meta-World 上测试多任务操作策略

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)