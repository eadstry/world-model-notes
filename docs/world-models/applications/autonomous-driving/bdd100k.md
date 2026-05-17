---
title: "BDD100K: A Diverse Driving Dataset for Heterogeneous Multitask Learning"
design: "BDD100K"
arxiv: https://arxiv.org/abs/1805.04687
github: https://github.com/bdd100k/bdd100k
---

# BDD100K: A Diverse Driving Dataset for Heterogeneous Multitask Learning

::: info 论文信息
- **Design**: BDD100K
- **论文全称**: BDD100K: A Diverse Driving Dataset for Heterogeneous Multitask Learning
- **arXiv**: [https://arxiv.org/abs/1805.04687](https://arxiv.org/abs/1805.04687)
- **GitHub**: [https://github.com/bdd100k/bdd100k](https://github.com/bdd100k/bdd100k)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1805.04687](https://arxiv.org/abs/1805.04687)
- **GitHub**: [https://github.com/bdd100k/bdd100k](https://github.com/bdd100k/bdd100k)

## 简介
BDD100K（Berkeley DeepDrive 100K）是一UC Berkeley 发布的具有里程碑意义的多样化驾驶数据集。该数据集包含100,000 个驾驶视频片段（每段在40 秒），总计超过 1,100 小时的驾驶数据，采集自美国多个城市的真实道路场景。与大多数仅聚焦于单一任务的自动驾驶数据集不同，BDD100K 的核心理念是"异质多任务学习——同一组数据支持10 个不同的视觉任务。

BDD100K 覆盖多10 项任务包括：图像标注（道路目标检测、实例分割）、车道标记（可行驶区域分割、车道线检测）、全帧分割（全景分割）、目标跟踪（多目标跟踪、多目标跟踪分割）、域泛化（图像分类）以及图像标注的补充任务。这种多任务设计生BDD100K 成为评估自动驾驶视觉模型通用能力的最全面基准。数据集包含 200 个 目2D 标注框架0 万张精细的语义分割标注和多城市的地理多样性。

## 关键特征
- **数据规模**: 100K 视频片段的100+ 小时间0 项任务的00 目 标注。
- **数据模式**: RGB 视频（前置相机）、GPS/IMU 轨迹、多任务标注
- **主要指标**: mAP（检测）、IoU（分割）、MOTA（跟踪）、域泛化准确。
- **领域**: 多任务驾驶感知、域泛化、视觉世界模。

## 与世界模型的关系
BDD100K 的多任务和多地理场景特性使其成为评估驾驶世界模型泛化能力的重要基准。对于世界模型而言，BDD100K 中的数据多样性（不同城市、天气、光照）为验证模型在分布外（OOD）场景中的预测鲁棒性提供了天然测试场景。BDD100K 的大量连续视频片段也使其适合训练视频预测世界模型，特别是那些旨在捕捉不同地理和气候条件下驾驶动态规律的模型。

## 代表性用例
- Detectron2、YOLO 系列使用 BDD100K 进行多任务评。
- 域泛化驾驶模型的标准评测平台
- OpenLane-V2 等的训练数据来源
- 被广泛用于自动驾驶视觉世界模型的跨场景泛化评。

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)