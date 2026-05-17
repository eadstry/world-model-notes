---
title: "Zenseact Open Dataset: A Large-Scale and Diverse Multimodal Dataset for Autonomous Driving"
design: "ZOD"
arxiv: https://arxiv.org/abs/2305.02008
github: https://github.com/zenseact/zod
---

# ZOD: Zenseact Open Dataset: A Large-Scale and Diverse Multimodal Dataset for Autonomous Driving

::: info 论文信息
- **Design**: ZOD
- **论文全称**: Zenseact Open Dataset: A Large-Scale and Diverse Multimodal Dataset for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2305.02008](https://arxiv.org/abs/2305.02008)
- **GitHub**: [https://github.com/zenseact/zod](https://github.com/zenseact/zod)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2305.02008](https://arxiv.org/abs/2305.02008)
- **GitHub**: [https://github.com/zenseact/zod](https://github.com/zenseact/zod)

## 简介
ZOD（Zenseact Open Dataset）是 Zenseact（沃尔沃汽车自动驾驶软件子公司）发布的大规模多模态自动驾驶数据集。该数据集使用沃尔沃 XC90 自动驾驶测试车在瑞典真实道路环境中采集，总计覆盖 8 个序列（每个 15-30 分钟），提供约 100,000 帧带有全景标注的数据。ZOD 的独特之处在于其北欧驾驶场景的覆盖——包括雪地道路、北欧独特的交通标志和冬季光照条件，这在其他主流数据集中极为罕见。

ZOD 提供了一系列独特的标注：交通标志（包括瑞典特有的麋鹿警告标志等）、道路标记、车道线几何、和交通灯状态。数据集的一个关键创新是其"全帧"全景标注方法——每 100 米标注一帧的完整全景信息（所有车道、交通标志和物体），而不仅仅是围绕自车的局部区域。ZOD 还提供同步的激光雷达点云和高分辨率图像数据，支持精确的 3D 场景理解研究。

## 关键特征
- **数据规模**: 100K 帧、8 个长序列、北欧驾驶环境（瑞典）、独特交通标志
- **数据模态**: 高分辨率 RGB 图像、激光雷达点云、全景标注、GPS/IMU
- **主要指标**: 全景分割质量、交通标志识别准确率、车道线检测精度
- **领域**: 北欧自动驾驶、极端天气驾驶、交通标志/标记检测

## 与世界模型的关系
ZOD 为驾驶世界模型提供了极具价值的"分布外"（OOD）测试环境。大部分驾驶世界模型在加州阳光或新加坡城市中训练，但在北欧冬季场景（雪地、低光照、独特交通标志）中的表现未知。ZOD 允许研究者评估世界模型在面对与训练数据截然不同的视觉和物理条件下的预测鲁棒性，这对于自动驾驶世界模型的全球化部署至关重要。

## 代表性用途
- 北欧场景自动驾驶感知算法的训练和验证
- 交通标志全球化识别模型的扩展训练数据
- 极端天气条件下的自动驾驶鲁棒性评估
- 被用于沃尔沃/Zenseact 的自动驾驶安全评测
