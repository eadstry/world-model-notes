---
title: "Argoverse 2: Next Generation Datasets for Self-Driving Perception and Forecasting"
design: "Argoverse 2"
arxiv: https://arxiv.org/abs/2301.00493
github: https://github.com/argoverse/av2-api
---

# Argoverse 2: Next Generation Datasets for Self-Driving Perception and Forecasting

::: info 论文信息
- **Design**: Argoverse 2
- **论文全称**: Argoverse 2: Next Generation Datasets for Self-Driving Perception and Forecasting
- **arXiv**: [https://arxiv.org/abs/2301.00493](https://arxiv.org/abs/2301.00493)
- **GitHub**: [https://github.com/argoverse/av2-api](https://github.com/argoverse/av2-api)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2301.00493](https://arxiv.org/abs/2301.00493)
- **GitHub**: [https://github.com/argoverse/av2-api](https://github.com/argoverse/av2-api)

## 简介
Argoverse 2 是 Argo AI 在 Argoverse 1.0 基础上大幅扩展的下一代自动驾驶数据集。该数据集在数据规模、传感器配置和任务种类上进行了全面升级。Argoverse 2 包含 1,000 个驾驶日志（250,000 个标注场景），6 个城市（奥斯汀、底特律、迈阿密、匹兹堡、帕洛阿尔托、华盛顿特区），以及全面升级的传感器套件——包括 7 个环形相机、2 个立体相机和 2 个激光雷达。

Argoverse 2 定义了三大核心任务：3D 目标检测与跟踪（250K 场景中的 1,163 个类别标签）、运动预测（250K 标注轨迹，预测窗口从 Argoverse 1.0 的 3 秒延长到 6 秒），以及全新引入的"激光雷达场景流"任务。此外，Argoverse 2 还提供丰富的高精地图，包含更详细的车道拓扑和交通控制信息。其大幅增加的场景多样性和城市覆盖度使 Argoverse 2 成为当前自动驾驶领域领先的感知-预测联合基准之一。

## 关键特征
- **数据规模**: 1000 个驾驶日志、250K 标注场景、6 个城市、250K 3D 轨迹
- **数据模态**: 7 相机 RGB 图像（360°）、2 个立体相机、2 个激光雷达、高精地图
- **主要指标**: mAP（3D 检测）、minADE/minFDE（6 秒预测）、brier-minFDE、MOTA（跟踪）
- **领域**: 自动驾驶感知、运动预测、多目标跟踪、场景流

## 与世界模型的关系
Argoverse 2 的 6 秒长预测窗口是对驾驶世界模型能力的直接挑战——模型必须创造性地模拟车辆未来 6 秒内的运动轨迹，这远超传统的物理推演（physics roll-out）所能覆盖的时间范围，需要模型具备对交互行为的高级理解。Argoverse 2 的 6 城市覆盖和丰富的传感器配置也使得它成为评估驾驶世界模型在多样化城市环境中的泛化能力的理想基准。GAIA-1 和 DriveDreamer 等生成式驾驶世界模型在训练和评测中均大量使用 Argoverse 2 的数据。

## 代表性用途
- QCNet (2023) 在 Argoverse 2 上取得运动预测基准 SOTA
- MTR++ (2023) 使用 Argoverse 2 的 6 秒预测窗口验证交互式 Transformer
- GAIA-1 (2023) 的核心训练数据来源之一
- 用于评测端到端自动驾驶和 Planning-Oriented 世界模型
