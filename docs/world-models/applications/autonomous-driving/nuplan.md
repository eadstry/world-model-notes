---
title: "NuPlan: A closed-loop ML-based planning benchmark for autonomous vehicles"
design: "NuPlan"
arxiv: https://arxiv.org/abs/2106.11810
github: https://github.com/motional/nuplan-devkit
---

# NuPlan: A closed-loop ML-based planning benchmark for autonomous vehicles

::: info 论文信息
- **Design**: NuPlan
- **论文全称**: NuPlan: A closed-loop ML-based planning benchmark for autonomous vehicles
- **arXiv**: [https://arxiv.org/abs/2106.11810](https://arxiv.org/abs/2106.11810)
- **GitHub**: [https://github.com/motional/nuplan-devkit](https://github.com/motional/nuplan-devkit)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2106.11810](https://arxiv.org/abs/2106.11810)
- **GitHub**: [https://github.com/motional/nuplan-devkit](https://github.com/motional/nuplan-devkit)

## 简介
NuPlan 是由 Motional（与 nuScenes 同团队）发布的全球首个基于机器学习的"闭环"自动驾驶规划基准。与大多数自动驾驶基准只评估开环（open-loop）感知或预测指标不同，NuPlan 要求模型在仿真环境中实际"驾驶"，通过闭环指标（碰撞次数、舒适度、交通规则遵守情况）来评估规划质量。NuPlan 的数据集包含 1,282 小时的真实人类驾驶数据（来自拉斯维加斯、波士顿、新加坡和匹兹堡），覆盖 1,500 公里的真实道路由

NuPlan 定义了两种评估模式：开环（Open-Loop，评测规划轨迹与人类驾驶的偏差）和闭环（Closed-Loop，在仿真中实际驾驶）。闭环模式使用nuPlan 仿真器，将规划模型生成的轨迹在仿真环境中执行，检测是否发生碰撞、偏离道路或违反交通规则。NuPlan 使用综合驾驶分数（CLS-NR）和多个子指标（自车进度、违规次数、驾驶舒适度）进行全面评估。NuPlan 的数据规模是目前最大的规划数据源之一。

## 关键特征
- **数据规模**: 1282 小时驾驶数据模500 公里6 个城市中20 的 场景片段
- **数据模式**: 多相机图像、激光雷达点云、高精地图、人类驾驶轨迹（真值）
- **主要指标**: CLS-NR（综合闭环驾驶分数）、碰撞率、道路偏离率、驾驶舒适度
- **领域**: 闭环自动驾驶规划、基于学习的规划、驾驶世界模型评。

## 与世界模型的关系
NuPlan 的闭环评估协议为驾驶世界模型提供了独特的"规划导向"验证维度。世界模型不仅要生成视觉上逼真的未来场景，更要确保基于模型预测做出的规划决策在仿真执行中是安全的。NuPlan 检验世界模型是否真正理解驾驶场景的物理约束和交通规则，而非仅仅实现像素级预测。这是安全关键"评测对于自动驾驶世界模型的实用化至关重要，NuPlan 正成为端到端世界模型驱动型规划器的标准验证平台。

## 代表性用例
- PDM (2023) 在 NuPlan 上验证基于规则的规划基线
- GameFormer (2023) 使用 NuPlan 评测博弈论规划的交互式规划器
- PlanT (2022) 在 NuPlan 上验证基准Transformer 的规划策。
- 被用于评测基于世界模型的自动驾驶决策（如 MILE、Think2Drive。

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)