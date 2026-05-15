---
title: "CARLA: An Open Urban Driving Simulator"
design: "CARLA"
arxiv: https://arxiv.org/abs/1711.03938
github: https://github.com/carla-simulator/carla
---

# CARLA: An Open Urban Driving Simulator

::: info 论文信息
- **Design**: CARLA
- **论文全称**: CARLA: An Open Urban Driving Simulator
- **arXiv**: [https://arxiv.org/abs/1711.03938](https://arxiv.org/abs/1711.03938)
- **GitHub**: [https://github.com/carla-simulator/carla](https://github.com/carla-simulator/carla)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1711.03938](https://arxiv.org/abs/1711.03938)
- **GitHub**: [https://github.com/carla-simulator/carla](https://github.com/carla-simulator/carla)

## 简介
CARLA（Car Learning to Act）是自动驾驶研究中最广泛使用的开源仿真器，由 Intel Labs、Toyota Research Institute 和 Computer Vision Center（巴塞罗那）联合开发。CARLA 基于 Unreal Engine 4 构建，提供高度逼真的城市驾驶环境，包括建筑、植被、行人、交通信号和多种天气/光照条件。CARLA 的核心哲学是在安全、可控、可复现的仿真环境中进行自动驾驶算法的开发和评测。

CARLA 提供 9 个精心设计的小镇地图（从 Town01 到 Town10，部分为后续版本添加）、多种可配置的自动驾驶车辆模型和行人 AI 控制器。CARLA 支持通过 Python/C++ API 对车辆和传感器进行完全控制，包括相机（RGB/深度/语义分割）、激光雷达、毫米波雷达、GNSS、IMU 等多种传感器仿真。CARLA 的 Leaderboard 评测平台是端到端自动驾驶算法竞赛的官方平台，使用"违规统计"（碰撞、闯红灯、偏离道路等）作为评估指标，模拟真实世界的交通法规和驾驶场景。

## 关键特征
- **数据规模**: 9 个城市地图、无限天气/光照/交通组合、多传感器仿真
- **数据模态**: RGB/RGB-D/语义分割图像、激光雷达仿真、GNSS/IMU 数据、仿真车辆状态
- **主要指标**: 驾驶分数（Driving Score）、路径完成率、交通违规次数、碰撞次数
- **领域**: 端到端自动驾驶、自动驾驶仿真、世界模型训练环境

## 与世界模型的关系
CARLA 是训练自动驾驶世界模型的理想仿真环境。其可控制的场景生成能力允许构建多样化的训练数据——从简单的直行路况到复杂的十字路口交互——从而覆盖世界模型训练所需的全部驾驶场景多样性。CARLA 的语义分割和深度图真值数据使世界模型能够将语义理解和 3D 几何推理融入驾驶预测中。CarDreamer、DriveArena 等世界模型平台直接构建在 CARLA 之上，利用其作为"数字驾驶世界"来训练和评估世界模型的预测和决策能力。

## 代表性用途
- TransFuser (2021) 在 CARLA Leaderboard 上获得驾驶算法 SOTA
- InterFuser (2023) 利用 CARLA 评测安全增强型驾驶策略
- MILE (2023) 使用 CARLA 训练基于模型的模仿学习策略
- CarDreamer (2024) 直接在 CARLA 上构建世界模型训练平台
- Roach (2021) 在 CARLA 上通过强化学习蒸馏专家驾驶策略
