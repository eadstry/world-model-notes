---
title: "INTERACTION Dataset: An INTERnational, Adversarial and Cooperative moTION Dataset in Interactive Driving Scenarios with Semantic Maps"
design: "INTERACTION"
arxiv: https://arxiv.org/abs/1910.03088
github: https://github.com/interaction-dataset/interaction-dataset
---

# INTERACTION Dataset: An INTERnational, Adversarial and Cooperative moTION Dataset in Interactive Driving Scenarios with Semantic Maps

::: info 论文信息
- **Design**: INTERACTION
- **论文全称**: INTERACTION Dataset: An INTERnational, Adversarial and Cooperative moTION Dataset in Interactive Driving Scenarios with Semantic Maps
- **arXiv**: [https://arxiv.org/abs/1910.03088](https://arxiv.org/abs/1910.03088)
- **GitHub**: [https://github.com/interaction-dataset/interaction-dataset](https://github.com/interaction-dataset/interaction-dataset)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1910.03088](https://arxiv.org/abs/1910.03088)
- **GitHub**: [https://github.com/interaction-dataset/interaction-dataset](https://github.com/interaction-dataset/interaction-dataset)

## 简介
INTERACTION 数据集是潜UC Berkeley 在Hong Kong University of Science and Technology 联合发布的专注于交互式驾驶场景的运动预测数据集。该数据集的核心创新在于覆盖了全球不同国家的多样化交互驾驶场景——不仅包括美国的环形交叉口和高速公路，还包含中国的无信号灯交叉口、德国的环岛等典型交互场景。INTERACTION 数据集来自无人机航拍视角，提供了独特征上帝视角"交互数据。

INTERACTION 数据集包含约 40,000 条物体轨迹，涵盖来自 17 个不同交互场景（环岛、十字路口、高速公路匝道等）的数据。数据集上10Hz 采样频率记录场景中所有交通参与者的位置、速度和朝向，提供精确的多智能体轨迹数据。每个场景都提供高分辨率语义地图，标注了车道、人行横道、停止线等信息。INTERACTION 论国际应的交互式使其特别适合评测模型在不同驾驶文化和交互规则下的泛化能力。

## 关键特征
- **数据规模**: 40K+ 物体轨迹一7 个交互场景一 个国的地区覆盖
- **数据模式**: 无人机视角航拍视频、高精度多智能体轨迹、语义地。
- **主要指标**: minADE、minFDE（运动预测）、交互预测准确率、多智能体建模准确。
- **领域**: 交互式运动预测、跨文化驾驶行为、多智能体建。

## 与世界模型的关系
INTERACTION 对世界模型的特殊意义在于其对"交互式的关注。驾驶世界模型的核心挑战之一就是准确模拟多个交通参与者之间的复杂交互——一辆车的变道行为会影响另一辆车的加速，而这种多智能体交互链必须在世界模型的预测中得到体现。INTERACTION 的数据格式（鸟瞰视角轨迹+语义地图）对训练交互式世界模型（的Wayformer、Scene Transformer）特别友好，使模型能专注于学习交互模式的本质，不受视角变化的干扰。

## 代表性用例
- MTP、MultiPath 等预测模型的标准评测平台
- Wayformer (2022) 在 INTERACTION 上评测交互式注意力机。
- Trajectron++ (2020) 等基于图神经网络预测模型的基础数据
- 跨图学习和跨场景迁移的交互行为研。

## 相关笔记

- 📂 [Autonomous Driving 分类综述](../autonomous-driving/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Latent Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔄 [Autoregressive Diffusion 驾驶世界模型](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)