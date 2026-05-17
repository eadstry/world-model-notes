---
title: "The ApolloScape Dataset for Autonomous Driving"
design: "ApolloScape"
arxiv: https://arxiv.org/abs/1803.06184
github: https://github.com/ApolloScapeAuto/dataset-api
---

# ApolloScape: The ApolloScape Dataset for Autonomous Driving

::: info 论文信息
- **Design**: ApolloScape
- **论文全称**: The ApolloScape Dataset for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/1803.06184](https://arxiv.org/abs/1803.06184)
- **GitHub**: [https://github.com/ApolloScapeAuto/dataset-api](https://github.com/ApolloScapeAuto/dataset-api)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1803.06184](https://arxiv.org/abs/1803.06184)
- **GitHub**: [https://github.com/ApolloScapeAuto/dataset-api](https://github.com/ApolloScapeAuto/dataset-api)

## 简介
ApolloScape 是由百度 Apollo 自动驾驶平台发布的大规模自动驾驶数据集，是业界最早的面向"全栈自动驾驶"的开源数据发布之一。该数据集采集自中国多个城市的真实道路环境，使用百度 Apollo 自动驾驶车辆的传感器套件（相机、激光雷达、GPS/IMU），包含超过 140,000 帧高分辨率标注图像和对应的激光雷达点云。ApolloScape 的独特之处在于其明确的中国道路场景覆盖——这是早期数据集中罕见的地理多样性。

ApolloScape 定义了 26 个语义类别的全景标注，远多于 KITTI 的 3 类，更接近于 nuScenes 的 23 类。数据集的标注任务涵盖：场景解析（像素级语义分割）、车道线分割、3D 车辆检测、立体视觉和自定位。ApolloScape 还提供完整的轨迹数据，支持对车辆运动跟踪的研究。尽管如今其在数据噪声和标注一致性方面不如 Waymo 和 nuScenes，但 ApolloScape 作为中国自动驾驶数据领域和全栈标注的先驱工作具有重要的历史意义。

## 关键特征
- **数据规模**: 140K+ 标注帧、26 个语义类别、中国城市道路环境
- **数据模态**: RGB 图像、激光雷达点云、GPS/IMU 轨迹、像素级标注
- **主要指标**: mIoU（语义分割）、mAP（3D 检测）、车道检测准确率
- **领域**: 自动驾驶感知、中国道路场景、全景标注

## 与世界模型的关系
ApolloScape 为交通世界模型提供了亚洲城市环境的独特视角，补充了大多数来自欧美城市的数据集。其 26 类语义标注和中国的驾驶行为模式（不同的交通标志、道路设计、行人和非机动车交互）为世界模型学习跨文化交通规则提供了宝贵数据。对于致力于构建能在中国道路场景中运行的世界模型而言，ApolloScape 的数据是不可或缺的训练资源。

## 代表性用途
- 百度 Apollo 自动驾驶感知系统的训练和验证数据
- 车道线检测模型的评测基准
- 中国驾驶场景中的语义分割研究
- 被中国自动驾驶领域综述广泛引用
