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

## 数据集/基准信息
- **Website**: [https://woven.toyota/en/prediction-dataset](https://woven.toyota/en/prediction-dataset)
- **GitHub**: [https://github.com/lyft/nuscenes-devkit](https://github.com/lyft/nuscenes-devkit)

## 简介
Lyft Level 5 Prediction Dataset 是由 Lyft（现 Woven Planet / Toyota Woven）发布的自动驾驶运动预测数据集，曾是其自动驾驶竞赛（Lyft Motion Prediction Challenge）的官方数据平台。该数据集包含约 1,000 小时的真实驾驶日志，采自 Lyft 自动驾驶车队在美国多地城市道路的运营数据，总计约 170,000 个场景，每个场景包含目标车辆的广泛轨迹以及数十个周围交通参与者的状态和轨迹。

数据集的突出特点是"大规模"——170,000 个场景远超大多数其他预测数据集。每个场景以 0.1 秒的精细采样率记录了周围智能体的位置、速度、朝向和类别信息，并提供丰富的语义地图（车道、红绿灯区域、人行横道等）。虽然 Lyft Level 5 自动驾驶项目在 2021 年被出售给丰田，但该预测数据集至今仍是运动预测社区的重要资源（现由 Woven by Toyota 维护），为驾驶行为分析研究提供了宝贵的开放数据。

## 关键特征
- **数据规模**: 170K+ 场景、约 1000 小时驾驶日志、精细 10Hz 轨迹采样
- **数据模态**: 多智能体轨迹、高精语义地图、3D 边界框、物体类别标签
- **主要指标**: minADE、minFDE（运动预测指标）、多智能体预测性能
- **领域**: 运动预测、驾驶行为分析、大规模场景数据集

## 与世界模型的关系
Lyft Level 5 的大规模场景覆盖（170K+）使其成为训练驾驶世界模型的宝贵资源。大型世界模型需要大量多样化的驾驶数据来学习交通行为的丰富模式，Lyft 的数据规模可以有效缓解过拟合风险。虽然 Lyft 的传感器原始数据可用性有限（主要提供处理后轨迹），但其庞大的轨迹和地图配对集对于地图条件下的驾驶世界模型预训练极具价值。

## 代表性用途
- Lyft Motion Prediction Challenge (2020-2021) 的官方数据集
- 被多个运动预测 SOTA 模型（如 TNT、LaneGCN）使用
- Woven Planet 的自动驾驶感知与预测研究
- 交互式驾驶行为的数据驱动分析
