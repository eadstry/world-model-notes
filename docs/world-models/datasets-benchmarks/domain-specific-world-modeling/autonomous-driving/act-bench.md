---
title: "ACT-Bench: Towards Action Controllable World Models for Autonomous Driving"
design: "ACT-Bench"
arxiv: https://arxiv.org/abs/2412.05337
github: https://github.com/turingmotors/ACT-Bench
---

# ACT-Bench: Towards Action Controllable World Models for Autonomous Driving

::: info 论文信息
- **Design**: ACT-Bench
- **论文全称**: ACT-Bench: Towards Action Controllable World Models for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2412.05337](https://arxiv.org/abs/2412.05337)
- **GitHub**: [https://github.com/turingmotors/ACT-Bench](https://github.com/turingmotors/ACT-Bench)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2501.13282](https://arxiv.org/abs/2501.13282)

## 简介
ACT-Bench 是一个专注于自动驾驶中"世界模型行动质量"的评测基准。该基准的核心问题不是"世界模型能否生成好看的驾驶视频"，而是"世界模型生成的动作序列能否安全地完成驾驶任务"。ACT-Bench 的这种"行动导向"评估哲学直接回应了自动驾驶世界模型面临的关键挑战：视觉质量不等于驾驶安全。

ACT-Bench 使用多个来源的真实世界驾驶数据（包括 nuScenes 和 Waymo），提取了数以万计的"交互性驾驶场景"（需要主动决策的场景，如变道、让行、合流等），构建了标准化的行动预测评测。对于每个场景，ACT-Bench 评估世界模型是否能够预测出与人类驾驶决策一致的行为，并使用碰撞率、道路偏离率等安全指标进行评分。该基准还定义了"行动一致性"度量——量化世界模型预测动作与人类驾驶动作的契合度。

## 关键特征
- **数据规模**: 从 nuScenes/Waymo 提取的万级交互决策场景
- **数据模态**: 多相机图像、激光雷达点云、人类驾驶动作真值、高精地图
- **主要指标**: 行动一致率、碰撞预测率、车道保持率、安全决策评分
- **领域**: 行动质量评估、自动驾驶世界模型、安全关键决策

## 与世界模型的关系
ACT-Bench 将世界模型评测的焦点从"视觉重建"转向"行动质量"，这一转变对世界模型在自动驾驶中的实际应用至关重要。该基准揭示了一个重要问题：高保真视频预测模型可能在关键行动决策上仍表现糟糕。ACT-Bench 促使社区在发展世界模型时同时关注"预测"和"行动"两个维度，避免陷入"追求更逼真的视频但忽视决策安全"的陷阱。
  
## 代表性用途
- 世界模型在自动驾驶中的"行动安全性"验证
- 对比不同世界模型在关键驾驶决策上的表现
- 推动世界模型从"视频预测"向"安全决策"的评估范式转变
- 为自动驾驶世界模型的安全性认证提供量化指标
