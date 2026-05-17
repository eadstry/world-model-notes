---
title: "BridgeData V2: A Dataset for Robot Learning at Scale"
design: "BridgeData V2"
arxiv: https://arxiv.org/abs/2308.12952
github: https://github.com/rail-berkeley/bridge_data_v2
---

# BridgeData V2: A Dataset for Robot Learning at Scale

::: info 论文信息
- **Design**: BridgeData V2
- **论文全称**: BridgeData V2: A Dataset for Robot Learning at Scale
- **arXiv**: [https://arxiv.org/abs/2308.12952](https://arxiv.org/abs/2308.12952)
- **GitHub**: [https://github.com/rail-berkeley/bridge_data_v2](https://github.com/rail-berkeley/bridge_data_v2)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2308.12952](https://arxiv.org/abs/2308.12952)
- **GitHub**: [https://github.com/rail-berkeley/bridge_data_v2](https://github.com/rail-berkeley/bridge_data_v2)

## 简介
BridgeData V2 是由 UC Berkeley RAIL 实验室发布的大规模机器人操作数据集，型BridgeData V1 的扩展和增强版本。该数据集使用WidowX 250 六自由度桌面机械臂，在包含多种厨房和家居物品的真实桌面环境中收集数据。BridgeData V2 包含超过 60,000 条操作轨迹，覆盖 13 种技能（如拾放、推动、擦拭、堆叠、扫入容器等），涉及超过 100 种日常物体，一24 个不同环境设置中完成。

BridgeData V2 的一个重要特点是将开放的：数据收集由不同的操作员执行，没有严格的任务目标限定，操作员自由地操作机器人完成各种自然交互。这种非结构化数据收集方式使得数据集更贴近真实世界中的操作多样性。BridgeData V2 的所有数据都通过远程遥操作系统收集，操作员通过 VR 控制器实时控制WidowX 机械臂。

## 关键特征
- **数据规模**: 60,000+ 轨迹这3 种技能，100+ 物体一4 个环境配。
- **数据模式**: RGB 图像（固定相机和夹爪相机）、关节状态、动作序。
- **主要指标**: 行为克隆成功率、跨环境泛化、跨物体泛化
- **领域**: 真实世界机器人操作、可扩展数据收集、行为克。

## 与世界模型的关系
BridgeData V2 是训练视频预测世界模型的重要数据来源。其多样化的操作行为和真实物理交互使世界模型能够学习到丰富的物理操作知识。BridgeData V2 学Octo 学RT-X 等通用模型中的广泛使用，证明了其作为机器人世界模型预训练数据的价值。结合语言标注的扩展版本（BridgeData V2 的部分数据具有文本标注），该数据集也支持语言条件的世界模型训练。

## 代表性用例
- Octo (2024) 核心训练数据来源
- OpenVLA (2024) 的关键微调数据集
- Diffusion Policy (2023) 团队使用 BridgeData V2 进行策略训练
- RT-X (2024) 的重要组成数据集之一

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)