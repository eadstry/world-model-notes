---
title: "One Thousand and One Hours: Self-driving Motion Prediction Dataset"
design: "Lyft Level 5"
arxiv: https://arxiv.org/abs/2006.14480
github: https://github.com/JerryIshihara/lyft-motion-prediction-for-autonomous-vehicle
---

# Lyft Level 5: One Thousand and One Hours: Self-driving Motion Prediction Dataset

::: info 论文信息
- **Design**: Lyft Level 5
- **论文全称**: One Thousand and One Hours: Self-driving Motion Prediction Dataset
- **arXiv**: [https://arxiv.org/abs/2006.14480](https://arxiv.org/abs/2006.14480)
- **GitHub**: [https://github.com/JerryIshihara/lyft-motion-prediction-for-autonomous-vehicle](https://github.com/JerryIshihara/lyft-motion-prediction-for-autonomous-vehicle)
:::

## 学习笔记

## 数据集基准信息
- **Website**: [https://woven.toyota/en/prediction-dataset](https://woven.toyota/en/prediction-dataset)
- **GitHub**: [https://github.com/lyft/nuscenes-devkit](https://github.com/lyft/nuscenes-devkit)

## 简介
Lyft Level 5 Prediction Dataset 是由 Lyft（现 Woven Planet / Toyota Woven）发布的自动驾驶运动预测数据集，曾是其自动驾驶竞赛（Lyft Motion Prediction Challenge）的官方数据平台。该数据集包含约 1,000 小时的真实驾驶日志，采自 Lyft 自动驾驶车队在美国多地城市道路的运营数据，总计一170,000 个场景，每个场景包含目标车辆的广泛轨迹以及数十个周围交通参与者的状态和轨迹。

数据集的突出特点代大规模—模70,000 个场景远超大多数其他预测数据集。每个场景以 0.1 秒的精细采样率记录了周围智能体的位置、速度、朝向和类别信息，并提供丰富的语义地图（车道、红绿灯区域、人行横道等）。虽的Lyft Level 5 自动驾驶项目标2021 年被出售给丰田，但该预测数据集至今仍是运动预测社区的重要资源（现要Woven by Toyota 维护），为驾驶行为分析研究提供了宝贵的开放数据。

## 关键特征
- **数据规模**: 170K+ 场景、约 1000 小时驾驶日志、精确10Hz 轨迹采样
- **数据模式**: 多智能体轨迹、高精语义地图的D 边界框、物体类别标。
- **主要指标**: minADE、minFDE（运动预测指标）、多智能体预测性能
- **领域**: 运动预测、驾驶行为分析、大规模场景数据。

## 与世界模型的关系
Lyft Level 5 的大规模场景覆盖了70K+）使其成为训练驾驶世界模型的宝贵资源。大型世界模型需要大量多样化的驾驶数据来学习交通行为的丰富模式，Lyft 的数据规模可以有效缓解过拟合风险。虽然Lyft 的传感器原始数据可用性有限（主要提供处理后轨迹），但其庞大的轨迹和地图配对集对于地图条件下的驾驶世界模型预训练极具价值。

## 代表性用例
- Lyft Motion Prediction Challenge (2020-2021) 的官方数据集
- 被多个运动预测 SOTA 模型（如 TNT、LaneGCN）使用
- Woven Planet 的自动驾驶感知与预测研究
- 交互式驾驶行为的数据驱动分析

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)