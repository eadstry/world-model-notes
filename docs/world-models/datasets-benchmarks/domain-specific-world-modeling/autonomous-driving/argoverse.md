---
title: "Argoverse: 3D Tracking and Forecasting With Rich Maps"
design: "Argoverse"
arxiv: https://arxiv.org/abs/1911.02620
github: https://github.com/argoverse/argoverse-api
---

# Argoverse: 3D Tracking and Forecasting With Rich Maps

::: info 论文信息
- **Design**: Argoverse
- **论文全称**: Argoverse: 3D Tracking and Forecasting With Rich Maps
- **arXiv**: [https://arxiv.org/abs/1911.02620](https://arxiv.org/abs/1911.02620)
- **GitHub**: [https://github.com/argoverse/argoverse-api](https://github.com/argoverse/argoverse-api)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1911.02620](https://arxiv.org/abs/1911.02620)
- **GitHub**: [https://github.com/argoverse/argoverse-api](https://github.com/argoverse/argoverse-api)

## 简介
Argoverse 是 Argo AI（后被整合入福特和大众的自动驾驶合资企业）发布的自动驾驶数据集，专注于 3D 跟踪和运动预测任务。该数据集包含 324,557 个带标注的 3D 物体轨迹，覆盖来自匹兹堡和迈阿密两个城市的 113 个日志场景。Argoverse 的独特之处在于其提供的"高精地图"（HD Map）数据，包括车道几何、交通标志和交叉口拓扑的详细标注——这些信息对理解交通参与者行为至关重要。

Argoverse 1.0 定义了运动预测挑战赛（Motion Forecasting Challenge），要求模型根据前 2 秒的观测预测目标车辆未来 3 秒的轨迹。数据集提供约 324K 条 3D 轨迹用于训练和验证。Argoverse 还推出了 3D 跟踪基准，包含对多种交通参与者（车辆、行人、骑行者、公交车等）的精确 3D 跟踪标注。其丰富的语义地图数据使 Argoverse 成为地图条件下的运动预测和交互建模的标准评测平台。

## 关键特征
- **数据规模**: 324K+ 3D 轨迹、113 个场景日志、匹兹堡+迈阿密双城市
- **数据模态**: 激光雷达点云、RGB 图像（多相机）、高精语义地图、3D 轨迹
- **主要指标**: minADE、minFDE、MR（Miss Rate，运动预测）、MOTA、MOTP（跟踪）
- **领域**: 自动驾驶运动预测、3D 跟踪、交互建模

## 与世界模型的关系
Argoverse 是评估驾驶世界模型在动态交互场景中预测能力的核心基准。世界模型不仅要预测自车的未来自运动（ego-motion），还必须模拟其他交通参与者（车辆、行人）的复杂交互行为。Argoverse 的地图条件设置使世界模型能够学习"道路结构→交通行为"的因果映射，这对于在全新道路场景中生成物理合理的未来驾驶场景至关重要。Argoverse 也是 Wayformer、Scene Transformer 等基于 Transformer 的交互式世界模型的主要评测平台。

## 代表性用途
- LaneGCN (2020) 在 Argoverse 上取得运动预测 SOTA
- HiVT（2022）使用 Argoverse 评测分层矢量 Transformer
- TNT、DenseTNT 等基于目标点的预测方法的核心基准
- 启发了 Wayformer 和 Motion Transformer 的交互式世界建模设计
