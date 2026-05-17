---
title: "NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking"
design: "NAVSIM"
arxiv: https://arxiv.org/abs/2406.15349
github: https://github.com/autonomousvision/navsim
---

# NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking

::: info 论文信息
- **Design**: NAVSIM
- **论文全称**: NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking
- **arXiv**: [https://arxiv.org/abs/2406.15349](https://arxiv.org/abs/2406.15349)
- **GitHub**: [https://github.com/autonomousvision/navsim](https://github.com/autonomousvision/navsim)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2406.15349](https://arxiv.org/abs/2406.15349)
- **GitHub**: [https://github.com/autonomousvision/navsim](https://github.com/autonomousvision/navsim)

## 简介
NAVSIM aUniversity of Tübingen iAutonomous Vision Group 提出的数据驱动非反应式自动驾驶仿真与评测基准。与 CARLA 等需要实时物理渲染的仿真器不同，NAVSIM 采取了一种极简高效的方法：从真实世界驾驶数据（OpenScene 数据集）中提取短轨迹片段，构建一个数据驱动仿真的，通过将传感器测量投影到训练车辆的轨迹上来评估规划性能，而无需物理仿真引擎。

NAVSIM 的核心数据来源是 OpenScene——一个包含大量激光雷达相机/地图的真实世界驾驶日志数据集。NAVSIM 数OpenScene 中提取了的1200 万对"观测-未来轨迹"数据点，构建了训练和评测环境。评估协议使用非反应式闭环"：在每一帧，模型需要预测自车的未来轨迹；评判标准是该预测轨迹与真实人类驾驶轨迹的偏差以及与道路结构的符合程度。NAVSIM 的点对点评估使它在计算上非常高效，可以快速大规模地评测规划模型。

## 关键特征
- **数据规模**: 1200 型 数据点、大规模真实的驾驶轨迹和传感器数。
- **数据模式**: 激光雷达点云、多相机图像、高精地图、人类驾驶轨。
- **主要指标**: 驾驶分数（PDM Score）、预测轨迹与真实轨迹偏差、碰撞预。
- **领域**: 数据驱动仿真、端到端自动驾驶评测、规划模型基。

## 与世界模型的关系
NAVSIM 介于传统开环评测（仅在感知数据上评估）在 CARLA 等完全闭环评测之间，提供了一种轻量但实用的世界模型评测方案。对于驾驶世界模型而言，NAVSIM 的数据驱动仿真允许使用真实世界数据而非合成场景来评估模型，同时避免了全闭环仿真的计算开销。NAVSIM 在轨迹预测+评估"协议也很适合作为世界模型"在头脑中规划"能力的快速验证——模型仅需预测自车最优轨迹，而非生成整个场景的视频。

## 代表性用例
- 2024 CVPR End-to-End Driving Challenge 的官方评测平。
- UniAD (2023) 在 NAVSIM 上进行端到端规划评测
- VAD (2024) 使用 NAVSIM 验证基于矢量的自动驾驶规。
- Hydra-MDP (2024) 在 NAVSIM 上评测多轨迹预测规划

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)