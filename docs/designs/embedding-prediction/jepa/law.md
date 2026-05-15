---
title: "Enhancing End-to-End Autonomous Driving with Latent World Model"
design: "LAW"
arxiv: https://arxiv.org/abs/2406.08481
github: https://github.com/BraveGroup/LAW
---

# LAW: Enhancing End-to-End Autonomous Driving with Latent World Model

::: info 论文信息
- **Design**: LAW
- **论文全称**: Enhancing End-to-End Autonomous Driving with Latent World Model
- **arXiv**: [https://arxiv.org/abs/2406.08481](https://arxiv.org/abs/2406.08481)
- **GitHub**: [https://github.com/BraveGroup/LAW](https://github.com/BraveGroup/LAW)
:::

## 学习笔记

## 核心思想

LAW（Latent Auto-regressive World Model, ICLR 2025）由中科院自动化所提出，将潜在世界模型作为自监督学习任务融入端到端自动驾驶框架，提升场景特征学习质量。端到端规划器能够直接利用原始传感器数据提取更丰富的场景特征，但如何更好地学习这些特征是一个关键研究问题。

LAW的核心创新在于：基于当前场景特征和自我车辆轨迹预测未来场景特征——这是一个纯粹的特征空间预测任务，不需要生成像素级重建。这种自监督任务可以无缝集成到无感知（perception-free）和基于感知（perception-based）的端到端框架中，通过预测未来特征来增强模型的场景理解能力。

LAW在多个基准上达到SOTA性能，包括真实世界开环基准nuScenes和NAVSIM，以及基于模拟器的闭环基准CARLA，验证了自监督世界建模在端到端自动驾驶中的巨大价值。

## 技术架构

**Vision Encoding（视觉编码）**：LAW采用端到端框架的视觉编码器（基于多视角图像和/或LiDAR），将传感器数据编码为BEV场景特征。这些特征作为世界模型的输入。

**Knowledge Learning（世界知识学习）**：潜在自回归世界模型以前序场景特征和自车未来轨迹为条件，预测未来时刻的场景特征。这是一个纯特征空间的预测任务，损失函数计算预测特征与真实未来场景特征之间的差异。这种设计避免了像素生成的高计算成本，同时提供了有效的自监督学习信号。

**Controllable Simulation（可控推演）**：LAW支持的端到端框架通过自车轨迹（ego trajectory）作为条件信号进行"可控推演"——虽然不生成视觉观测，但特征空间的预测隐含地提供了未来场景状态的先验，辅助规划器做出更好的决策。

## 代码实现要点

- 潜在世界模型在特征空间进行自回归预测，无需像素生成
- 无缝集成到无感知和基于感知的端到端框架
- 自车轨迹作为条件信号驱动未来特征预测
- 支持nuScenes（开环）、NAVSIM和CARLA（闭环）多个基准
- 开源代码

## 关键创新点

- 将潜在世界模型引入端到端自动驾驶作为自监督辅助任务
- 特征空间预测：避免像素生成的高成本，直接优化场景特征
- 统一框架：兼容无感知和基于感知的端到端方法
- 自车轨迹作为可控性条件信号
- ICLR 2025接收

## 代表性结果

- nuScenes和NAVSIM开环基准SOTA
- CARLA闭环基准SOTA
- 自监督世界模型辅助任务显著提升场景特征学习质量
