---
title: "Leveraging Procedural Generation to Benchmark Reinforcement Learning"
design: "Procgen"
arxiv: https://arxiv.org/abs/1912.01588
github: https://github.com/openai/train-procgen
---

# Procgen: Leveraging Procedural Generation to Benchmark Reinforcement Learning

::: info 论文信息
- **Design**: Procgen
- **论文全称**: Leveraging Procedural Generation to Benchmark Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/1912.01588](https://arxiv.org/abs/1912.01588)
- **GitHub**: [https://github.com/openai/train-procgen](https://github.com/openai/train-procgen)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1912.01588](https://arxiv.org/abs/1912.01588)
- **GitHub**: [https://github.com/openai/procgen](https://github.com/openai/procgen)

## 简介
Procgen（Procedurally Generated Environments）是一OpenAI 发布的一组程序化生成的强化学习基准环境。与传统强化学习环境使用固定的关卡设计不同，Procgen 的所有16 个游戏环境都是通过程序化算法随机生成的——每次启动环境都会产生全新的关卡布局、敌人位置、障碍物配置和视觉纹理。这种设计的核心目标是对抗强化学习中通过拟的问题：模型不能靠记住特定关卡布局来获得高分数，而是必须学会真正泛化到新关卡。

Procgen 包含 16 个多样化的小游戏环境：金币收集（CoinRun）、平台跳跃（Jumper）、迷宫导航（Maze）、Boss 战斗（BossFight）、弹幕躲避（StarPilot）等，涵盖了多种视觉和策略模式。每个环境提供连续的帧观测（64×64 RGB 像素）和离散动作空间，所有环境共享相同的动作空间标准。Procgen 使用 Gym API 接口，部署在 Docker 进程内，结合成Python 真C/C++ 实现，支持在 CPU 上进行高效并行仿真（每个 CPU 核心可运行数十个环境实例）。

## 关键特征
- **数据规模**: 16 个游戏环境，每个环境无限随机化，数百万种可能的关卡配。
- **数据模式**: 64×64 RGB 图像观测、离散动作、奖励信号、关卡完成标。
- **主要指标**: 归一化回报（min-max 归一化）、泛化差距（训练 vs 测试奖励比）
- **领域**: 泛化强化学习、程序化内容生成、视觉世界模。

## 与世界模型的关系
Procgen 是评估世界模型泛化能力的理想环境。由于每个训练和测试关卡都是全新生成的，世界模型必须在持续变化的环境中学会通用物理规律和游戏机制，而不是单纯记忆特定关卡的视觉模式。DreamerV2/V3、STORM 等世界模型常识Procgen 验证其在上百个不同关卡中的稳定预测能力。Procgen 的离散动作空间和简单视觉风格也使其特别适合视频预测世界模型的训练和研究。

## 代表性用例
- PPO+Data Augmentation 使用 Procgen 展示数据增强化RL 泛化中的重要。
- DreamerV3 (2023) 在 Procgen 上验证跨环境的世界模型泛。
- STORM (2023) 使用 Procgen 作为离散控制世界模型评测
- IRIS (2023) 在 Procgen 上评测基准Transformer 的世界模。

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)