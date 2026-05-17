---
title: "One Million Scenes for Autonomous Driving: ONCE Dataset"
design: "ONCE"
arxiv: https://arxiv.org/abs/2106.11037
github: https://github.com/PointsCoder/ONCE_Benchmark
---

# ONCE: One Million Scenes for Autonomous Driving: ONCE Dataset

::: info 论文信息
- **Design**: ONCE
- **论文全称**: One Million Scenes for Autonomous Driving: ONCE Dataset
- **arXiv**: [https://arxiv.org/abs/2106.11037](https://arxiv.org/abs/2106.11037)
- **GitHub**: [https://github.com/PointsCoder/ONCE_Benchmark](https://github.com/PointsCoder/ONCE_Benchmark)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2106.11037](https://arxiv.org/abs/2106.11037)
- **GitHub**: [https://github.com/PointsCoder/ONCE_Benchmark](https://github.com/PointsCoder/ONCE_Benchmark)

## 简介
ONCE（One Million Scenes）是由香港中文大学和华为诺亚方舟实验室联合发布的大规模自动驾驶数据集，其名称来源于其标志性的数据规模——约 100 万个驾驶场景。ONCE 采取了独特的数据收集策略：使用众包"方法在中国多个城市的公交车上安装传感器设备，以极低成本收集超大规模的驾驶日志，总计超过 144 个驾驶小时的 7,000 公里数据。这种策略使 ONCE 的场景多样性达到了前所未有的规模。

ONCE 的百万场景涵盖了大量的长尾（long-tail）案例——罕见但关键的交通场景（如突发事件、异常行为等）——这些场景在小型数据集中几乎不可能出现。ONCE 定义的3D 目标检测基准，提供 417,000 帧带有3D 标注框的数据（汽车、行人、骑行者、公交车、卡车等 5 类），以在100 万帧未标注的原始激光雷达数据用于自监督学习研究。ONCE 的数据长尾"特性对训练泛化性能强的自动驾驶感知模型至关重要。

## 关键特征
- **数据规模**: 100 万场景动44+ 驾驶小时的000 公里的17K 3D 标注帧一 个类。
- **数据模式**: 激光雷达点云、RGB 图像、GPS/IMU 数据、大量未标注数据
- **主要指标**: mAP3D 检测）3D 检测鲁棒性、长尾场景覆盖率
- **领域**: 大规模自动驾驶感知、长尾场景挖掘、自监督学习

## 与世界模型的关系
ONCE 的超大规模为世界模型研究提供了独特的"长尾覆盖"价值。世界模型的核心能力之一是处理罕见但关键场景——这些场景决定自动驾驶系统的安全上限。通过程ONCE 的百万场景上训练，世界模型可以学到比在小规模数据集上丰富得多的驾驶动态模式，从而在面对训练中未见过的长尾场景时也能做出合理的预测。ONCE 中大量未标注数据也为自监督世界模型预训练提供了珍贵的训练资源。

## 代表性用例
- 华为/港中文的 3D 目标检测和域自适应研究
- 长尾场景下的自动驾驶感知训练
- 大规模自监督激光雷达表示学。
- 中国城市驾驶场景的基础数据平台

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)