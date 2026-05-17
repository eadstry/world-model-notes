---
title: "WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models"
design: "WorldArena"
arxiv: https://arxiv.org/abs/2602.08971
github: https://github.com/tsinghua-fib-lab/WorldArena
---

# WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models

::: info 论文信息
- **Design**: WorldArena
- **论文全称**: WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models
- **arXiv**: [https://arxiv.org/abs/2602.08971](https://arxiv.org/abs/2602.08971)
- **GitHub**: [https://github.com/tsinghua-fib-lab/WorldArena](https://github.com/tsinghua-fib-lab/WorldArena)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2602.08971](https://arxiv.org/abs/2602.08971)
- **GitHub**: [https://github.com/tsinghua-fib-lab/WorldArena](https://github.com/tsinghua-fib-lab/WorldArena)

## 简介
WorldArena 是清华大学提出的一个统一的世界模型评测基准，专注于具身世界模型的"感知质量"的功能效用"两大维度。该基准的一个核心洞察是：现有世界模型评测要么只测感知（视频重建质量），要么只测功能（下游任务成功率），缺乏两者之间的统一评估框架。WorldArena 填补了这一空白，提出了一套同时衡与世界模型是否看得了的世界模型是否有用"的双轨评测协议。

WorldArena 包含了来自多种具身AI 环境的标准化测试场景，涵盖机器人操作和室内导航任务。对于每个场景，WorldArena 定义了感知评估任务（衡量模型对未来视频帧的预测质量）和功能评估任务（衡量基于模型预测的决策质量）。该基准还引入了"一致性度的——评估感知质量和功能效用之间的相关性和权衡关系。WorldArena 是首个系统性地将世界模型的感知和功能评估统一在同一个框架下的基准。

## 关键特征
- **数据规模**: 跨多个具身环境（机器人操作室内导航）的标准化测试集
- **数据模式**: RGB/RGB-D 视频、动作序列、物理状态、任务目。
- **主要指标**: 感知质量得分（FVD、PSNR、LPIPS）、功能效用得分（规划成功率）、一致性指。
- **领域**: 世界模型评估、感知功能统一评测、具身智。

## 与世界模型的关系
WorldArena 为世界模型研究社区提供了目前最全面的统一评测协议。通过同时衡量感知和功能两大维度，WorldArena 帮助研究者理的更好的视频预测是否必然导致更好的决策"这一核心问题（答案通常是否定的）。该基准还揭示了不同世界模型在的感知-功能权衡光谱上的分布，为研究者选择或设计特定应用场景的世界模型提供了定量依据。WorldArena 上一致性度的概念正在成为世界模型评估的新标准。

## 代表性用例
- 清华团队使用 WorldArena 评测主流世界模型（Dreamer、IRIS、STORM 等）
- 作为世界模型竞赛（如 VWM Challenge）的官方评测平台
- 帮助揭示了视频预测质量和实际控制价值之间的不一致。
- 推动世界模型研究的更好的预测转向"更有用的预测"

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)