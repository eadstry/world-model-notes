---
title: "RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot"
design: "RH20T"
arxiv: https://arxiv.org/abs/2307.00595
github: https://github.com/rh20t/rh20t_api
---

# RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot

::: info 论文信息
- **Design**: RH20T
- **论文全称**: RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot
- **arXiv**: [https://arxiv.org/abs/2307.00595](https://arxiv.org/abs/2307.00595)
- **GitHub**: [https://github.com/rh20t/rh20t_api](https://github.com/rh20t/rh20t_api)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2307.00595](https://arxiv.org/abs/2307.00595)
- **GitHub**: [https://github.com/rh20t/rh20t_api](https://github.com/rh20t/rh20t_api)

## 简介
RH20T 是由清华大学和上海期智研究院联合发布的大规模多模态机器人操作数据集。该数据集包含110,000 条操作序列，覆盖 147 种不同的操作任务，由 12 名人类操作员通过 VR 遥控设备（HTC Vive）进行遥操作数据收集。RH20T 的突出特点是其多模态特性：同时采集了人类操作员的头部和手部运动数据、机器人视频流、力反馈数据和操作语言描述。

RH20T 的一个核心贡献在于其"在机对目（human-robot correspondence）标注机制：每条机器人轨迹都与人类操作员的运动数据进行了对齐，实现了对人-机映射关系的大规模建模。数据集还包含了细粒度的任务分解标注，将复杂任务细分为多个原子子任务。RH20T 覆盖的任务类别广泛，包括抓取、推动、插入、堆叠、工具使用、精密操作等。

## 关键特征
- **数据规模**: 110,000 条序列，147 种任务，12 位操作员，VR 遥操。
- **数据模式**: RGB 视频、深度图、关节角度、力反馈、人类VR 运动数据（人体姿态）、自然语言指令
- **主要指标**: 操作成功率、轨迹相似度、运动精度、跨任务泛化性能
- **领域**: 多模态操作数据、人机映射、技能学。

## 与世界模型的关系
RH20T 为世界模型研究提供的独特价值在于其多模态对齐特性。世界模型不仅可以从机器人操作数据中学习物理交互动力学，还可以从人类运动数据中学习到操作意图和运动先验。这种人-机对应标注使世界模型有可能学习到"人类意图→机器人行为→环境状态变化的完整因果链条，为构建更高级的交互式世界模型提供数据支撑。

## 代表性用例
- RH20T 用于训练基于 Transformer 的多模态技能迁移模。
- 被清华大学团队用于一次性技能学习研究
- 作为跨形态操作数据集被纳入多种通用机器人学习框。

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)