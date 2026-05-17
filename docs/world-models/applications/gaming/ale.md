---
title: "The Arcade Learning Environment: An Evaluation Platform for General Agents"
design: "ALE"
arxiv: https://arxiv.org/abs/1207.4708
github: https://github.com/Farama-Foundation/Arcade-Learning-Environment
---

# ALE: The Arcade Learning Environment: An Evaluation Platform for General Agents

::: info 论文信息
- **Design**: ALE
- **论文全称**: The Arcade Learning Environment: An Evaluation Platform for General Agents
- **arXiv**: [https://arxiv.org/abs/1207.4708](https://arxiv.org/abs/1207.4708)
- **GitHub**: [https://github.com/Farama-Foundation/Arcade-Learning-Environment](https://github.com/Farama-Foundation/Arcade-Learning-Environment)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1207.4708](https://arxiv.org/abs/1207.4708)
- **GitHub**: [https://github.com/mgbellemare/Arcade-Learning-Environment](https://github.com/mgbellemare/Arcade-Learning-Environment)

## 简介
ALE（Arcade Learning Environment）是统University of Alberta 一Marc G. Bellemare 等人类2012 年提出的最具影响力的强化学习基准之一。ALE 封装的Atari 2600 游戏机的模拟器（Stella），提供 60+ 款经典Atari 游戏作为强化学习环境，包括Pong、Breakout、Space Invaders、Montezuma's Revenge、Pitfall! 等。ALE 的发布直接推动了 DQN（Deep Q-Network）的诞生和深度强化学习革命。

ALE 为每款游戏提供210×160 像素的RGB 观测和高维离散动作空间（Atari 2600 手柄的动作编码）。标准评测协议使用Sticky Actions"于5% 概率重复上一步动作）注入随机性，确保策略不会因为环境的确定性而过拟合。ALE 的游戏涵盖了多样的视觉风格、游戏机制和策略复杂程度，从简单的球拍反弹游戏（Pong）到深度探索游戏（Montezuma's Revenge）。ALE 也支持将多游戏数据合并训练单一通用策略的Atari-57 协议。

## 关键特征
- **数据规模**: 60+ 型Atari 2600 游戏、无视episode图10×160 像素观测
- **数据模式**: 210×160 RGB 游戏画面（通常降采样至 84×84）三8 个离散动作、得的奖励
- **主要指标**: 人类归一化得分（Human Normalized Score）、原始得分、Atari-57 中位。
- **领域**: 深度强化学习、视觉世界模型、通用策略学习

## 与世界模型的关系
ALE 是视觉世界模型研究中最悠久和最重要的基准之一。从 SimPLe自019 年，世界模型首次应用于Atari）到 DreamerV3人023 年，的Atari 上全面超越无模型方法），ALE 一直是验证世界模型从像素中学习游戏动态的核心平台。ALE 在60+ 款游戏覆盖了丰富的游戏机制，对世界模型的泛化能力提出了多元化挑战：有些需要快速反应，有些需要长期规划，有些需要探索——这些恰好是衡量世界模型能力的多维度标尺。

## 代表性用例
- DQN (2013, DeepMind) 在 ALE 上展示深度强化学习的首次突破
- SimPLe (2019) 在 ALE 上首次验证基于世界模型的 Atari 学习
- DreamerV2/V3 (2021/2023) 在 Atari-57 上超越单任务无模型方。
- IRIS (2023) 使用离散 Transformer 世界模型的Atari 上取得卓越结。
- Agent57 (2020) 在 Atari-57 上统一超越人类水平

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)