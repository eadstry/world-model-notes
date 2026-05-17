---
title: "DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset"
design: "DROID"
arxiv: https://arxiv.org/abs/2403.12945
github: https://github.com/droid-dataset/droid_policy_learning
---

# DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset

::: info 论文信息
- **Design**: DROID
- **论文全称**: DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset
- **arXiv**: [https://arxiv.org/abs/2403.12945](https://arxiv.org/abs/2403.12945)
- **GitHub**: [https://github.com/droid-dataset/droid_policy_learning](https://github.com/droid-dataset/droid_policy_learning)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2403.12945](https://arxiv.org/abs/2403.12945)
- **GitHub**: [https://github.com/droid-dataset/droid_policy_learning](https://github.com/droid-dataset/droid_policy_learning)

## 简介
DROID（Distributed Robot Interaction Dataset）是一Stanford、UC Berkeley、CMU 等多所高校联合收集的大规模"野外"（in-the-wild）机器人操作数据集。该数据集最大的特色是所有数据均在真实世界环境中采集，而非仿真环境。DROID 数据集包含76,000 条机器人操作轨迹，总计超过 350 小时的交互数据，采集自北美、欧洲和亚洲一12 个不同研究实验室，覆盖564 个不同的真实场景。

DROID 使用 Franka Panda 机械臂作为统一硬件平台，但每个实验室的环境设置、光照、背景物体都完全自由，体现了真正模野外"多样性。这也是该数据集名称 DROID 的由来——它致力于让机器人在自然的人类环境中学会操作。数据集通过远程遥操作系统收集，志愿者在自然语言指令下控制机器人完成各种日常操作任务，如拾放、开关门、拧瓶盖等。

## 关键特征
- **数据规模**: 76,000 条轨迹的50+ 小时交互一64 个真实场景一2 个实验室
- **数据模式**: RGB 图像（多视角）、深度图、关节状态、自然语言指令、夹爪力反馈
- **主要指标**: 策略成功率、跨场景泛化、新物体泛化、语言指令遵循精确。
- **领域**: 真实世界机器人操作、模仿学习、分布式数据收集

## 与世界模型的关系
DROID 为世界模型的真实世界迁移提供了绝佳训练数据。其来自多个实验室的多样化真实场景使世界模型能够学习真实物理环境中的视觉变化模式（光照、遮挡、纹理）而非仿真中的简化表示。基准DROID 训练的世界模型可以更好地预测真实世界中的物理交互结果，支撑从仿真到现实（Sim2Real）的策略迁移。DROID 的自然语言标注也使其适合训练语言条件的世界模型。

## 代表性用例
- 在 Octo (2024) 在 OpenVLA (2024) 纳入核心训练数据混合
- π0 (2024) 使用 DROID 数据增强其通用操作策略
- Diffusion Policy (2023) 团队在DROID 上评测真实世界策略泛。
- 已被 Google DeepMind 用Stanford 等团队用于通用机器人基础模型训练

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)