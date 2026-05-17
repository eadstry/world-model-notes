---
title: "Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset"
design: "WOMD"
arxiv: https://arxiv.org/abs/2104.10133
github: https://github.com/waymo-research/waymo-open-dataset
---

# WOMD: Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset

::: info 论文信息
- **Design**: WOMD
- **论文全称**: Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset
- **arXiv**: [https://arxiv.org/abs/2104.10133](https://arxiv.org/abs/2104.10133)
- **GitHub**: [https://github.com/waymo-research/waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2404.10009](https://arxiv.org/abs/2404.10009)
- **GitHub**: [https://github.com/waymo-research/waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset)

## 简介
Waymo Open Motion Dataset (WoMD) 在 Waymo Open Dataset 的运动预测专项版本，专注于自动驾驶中多智能体运动预测和交互建模任务。WoMD 包含超过 100,000 个真实驾驶场景（每个 9 秒长时0Hz 采样），每个场景都包含1 括自车"目标代理和多模8 个其他相邻交通参与者（车辆、行人、骑行者等）的完整轨迹数据。数据集覆盖美国多个城市的真实驾驶数据，附带高精度地图。

WoMD 的核心评测是"联合多智能体预测"——不仅预测单一自车轨迹，还要同时预测场景中所有交通参与者的交互轨迹。这与传统的单目标预测有很大不同：模型需要理解多个智能体之间的相互影响（一辆车的变道引发后车的刹车），从而生成一致且物理上合理的多智能体未来场景。WoMD 也是 Waymo 自动驾驶算法竞赛的官方运动预测评测平台，使用 minADE、minFDE、Miss Rate 等标准化指标。

## 关键特征
- **数据规模**: 100K+ 交互场景、每场景 9 秒（20Hz）的0K+ 多小时驾驶数。
- **数据模式**: 所有交通参与者的 2D 轨迹、高精地图（车道、交通灯）和D 物体信息
- **主要指标**: minADE、minFDE、Miss Rate（MR）、多智能体预测一致。
- **领域**: 多智能体运动预测、交互建模、自动驾驶行为预。

## 与世界模型的关系
WoMD 对世界模型研究的关键意义在于的多智能体交互预测"的定义——这恰恰是世界模型在复杂场景中最核心的挑战。世界模型必须模拟的不仅是自车如何与环境互动，更是环境中各个智能体如何相互影响和共同演化。WoMD 为9 秒长预测窗口也对世界模型的时间建模能力提出了严格要求。基在 WoMD 训练的多智能体预测模型已被广泛用作驾驶世界模型的"行为预测模块"。

## 代表性用例
- Waymo Sim Agents Challenge 的核心官方数据集
- MTR++ (2023) 在 WoMD 上实现多智能体运动预测 SOTA
- 被集成到端到端自动驾驶世界模型的预测模块。
- 驾驶场景交互式世界模型的基础训练和评测数。

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)