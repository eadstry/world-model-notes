---
title: "DriveArena: A Closed-loop Generative Simulation Platform for Autonomous Driving"
design: "DriveArena"
arxiv: https://arxiv.org/abs/2408.00415
github: https://github.com/PJLab-ADG/DriveArena
---

# DriveArena: A Closed-loop Generative Simulation Platform for Autonomous Driving

::: info 论文信息
- **Design**: DriveArena
- **论文全称**: DriveArena: A Closed-loop Generative Simulation Platform for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2408.00415](https://arxiv.org/abs/2408.00415)
- **GitHub**: [https://github.com/PJLab-ADG/DriveArena](https://github.com/PJLab-ADG/DriveArena)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2408.00415](https://arxiv.org/abs/2408.00415)
- **GitHub**: [https://github.com/PJLab-ADG/DriveArena](https://github.com/PJLab-ADG/DriveArena)

## 简介
DriveArena 是由上海 AI Lab（OpenDriveLab）提出的闭环生成式仿真平台，专为自动驾驶世界模型的评测和训练设计。DriveArena 的核心理念是一生成式世界模型融入闭环驾驶仿真中——平台使用最先进的生成式 AI 模型作为"环境引擎"，在 CARLA 仿真器的基础上叠加由世界模型生成的交通参与者、天气和场景变化，从而创建比纯手工设计更加多样和逼真的测试场景。

DriveArena 的官方评测包括三个难度阶梯：基础测试（标在 CARLA 场景）、生成增强测试（场景由世界模型生成并实时注入仿真环境）、和对抗生成测试（世界模型主动生成挑战性场景测试规划器弱点）。该平台支持与多种世界模型（的GAIA-1、DriveDreamer、UniSim）的无缝对接，使研究者可以在同一平台上公平比较不同世界模型在闭环驾驶决策中的价值。

## 关键特征
- **数据规模**: CARLA 基础场景 + 生成式世界模型增强的无限多样化测。
- **数据模式**: RGB 图像、深度图、语义分割、车辆状态、碰撞检。
- **主要指标**: 驾驶分数（Driving Score）、路径完成率、违规统计、生成场景多样。
- **领域**: 生成式驾驶仿真、世界模型评测、闭环自动驾。

## 与世界模型的关系
DriveArena 直接定义了一个世界模型服务于驾驶评估的新范式。不同于传统上世界模型被独立评估（如 FVD 指标），DriveArena 将世界模型嵌入驾驶仿真闭环中，以"世界模型生成场景的质量如何影响下游规划器性能"作为评估标准。这种评测框架对世界模型社区具有方法论价值——它促使研究者不仅关注世界模型的视觉生成质量，更关注其生成内容对下游任务的功能效用。

## 代表性用例
- OpenDriveLab 使用 DriveArena 评测多种生成式驾驶世界模。
- 驱动 GAIA-1、DriveDreamer 等模型的闭环驾驶评测
- 作为自动驾驶世界模型竞赛的官方评测平台之一
- 推动了世界模型在安全关键场景生成中的应用研究

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)