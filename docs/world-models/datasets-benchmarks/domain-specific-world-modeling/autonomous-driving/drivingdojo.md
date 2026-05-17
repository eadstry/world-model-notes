---
title: "DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model"
design: "DrivingDojo"
arxiv: https://arxiv.org/abs/2410.10738
github: https://github.com/Robertwyq/Drivingdojo
---

# DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model

::: info 论文信息
- **Design**: DrivingDojo
- **论文全称**: DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model
- **arXiv**: [https://arxiv.org/abs/2410.10738](https://arxiv.org/abs/2410.10738)
- **GitHub**: [https://github.com/Robertwyq/Drivingdojo](https://github.com/Robertwyq/Drivingdojo)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2501.14295](https://arxiv.org/abs/2501.14295)
- **GitHub**: [https://github.com/Robertwyq/DrivingDojo](https://github.com/Robertwyq/DrivingDojo)

## 简介
DrivingDojo 是一个专为自动驾驶世界模型设计的"道场"（Dojo）——一个系统化的世界模型训练和评测框架。该框架的灵感来源于日本"道场"中反复练习直至精通的理念：DrivingDojo 提供了世界模型的"练习环境"，在其中世界模型可以不断生成未来驾驶场景、执行决策、接收反馈并自我提升。DrivingDojo 的独特之处在于其"人类驾驶先验"的注入——人类驾驶行为数据被用来引导世界模型生成更合理、更类人的驾驶场景。

DrivingDojo 包含三大模块：场景采集引擎（从 CARLA 和真实数据中提取驾驶场景）、世界模型训练器（支持 Dreamer、IRIS 等多种世界模型架构）、以及交互式评估器（允许世界模型在模拟环境中"驾驶"并根据表现进行调整）。DrivingDojo 收集了 CARLA 中 12 个城镇的多样化驾驶数据以及 nuScenes 的多场景数据，为世界模型提供了丰富的"练习素材"。该框架的创新在于其闭环反馈设计——世界模型在虚拟驾驶中的表现直接反馈到模型的进一步训练中。

## 关键特征
- **数据规模**: CARLA 12 个城镇 + nuScenes 真车数据、闭环反馈训练数据
- **数据模态**: RGB 图像、深度图、语义分割、驾驶动作、碰撞/违规反馈信号
- **主要指标**: 驾驶分数、人类先验一致性、世界模型预测精度、策略迭代提升
- **领域**: 世界模型训练框架、人类驾驶先验、闭环自动驾驶学习

## 与世界模型的关系
DrivingDojo 为视觉世界模型在自动驾驶中的应用提供了一个"训练道场"——系统地连接了世界模型的生成能力和自动驾驶的决策需求。该框架展示了世界模型如何通过与环境的持续交互（而非静态离线数据）来提升自身质量，这种"世界模型通过与世界互动来学习"的范式与人类认知过程非常类似。DrivingDojo 的"人类先验注入"机制也为世界模型引入行为合理性约束提供了技术路线。

## 代表性用途
- 世界模型在 CARLA 中的闭环自动驾驶训练
- Dreamer 等世界模型在驾驶任务上的系统性能分析
- 人类驾驶行为引导的世界模型优化
- 世界模型"自我对弈"（self-play）训练的初步探索
