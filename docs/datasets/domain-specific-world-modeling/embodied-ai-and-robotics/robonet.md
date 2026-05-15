---
title: "RoboNet: Large-Scale Multi-Robot Learning"
design: "RoboNet"
arxiv: https://arxiv.org/abs/1910.11215
github: https://github.com/SudeepDasari/RoboNet
---

# RoboNet: Large-Scale Multi-Robot Learning

::: info 论文信息
- **Design**: RoboNet
- **论文全称**: RoboNet: Large-Scale Multi-Robot Learning
- **arXiv**: [https://arxiv.org/abs/1910.11215](https://arxiv.org/abs/1910.11215)
- **GitHub**: [https://github.com/SudeepDasari/RoboNet](https://github.com/SudeepDasari/RoboNet)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1910.11215](https://arxiv.org/abs/1910.11215)
- **GitHub**: [https://github.com/SudeepDasari/RoboNet](https://github.com/SudeepDasari/RoboNet)

## 简介
RoboNet 是由 UC Berkeley 提出的早期大规模多机器人学习数据集，开创了大模型驱动的机器人操作研究范式。该数据集的核心思想是"跨机器人泛化"：从多个不同形态和场景的机器人数据中学习通用的操作知识。RoboNet 包含 15 万个视频片段，来自 7 个不同的机器人平台（包括 Sawyer、Baxter、Kuka、Franka 等），在多个实验室的不同环境中收集，覆盖推、抓、提、放等基本操作行为。

RoboNet 的前瞻性体现在它是最早提出"从大规模异质机器人数据中预训练通用视频预测模型"的工作之一。该工作的核心假设是：尽管机器人形态和环境不同，但视频中物体的物理运动规律是通用的——物体下落、滑动、碰撞的行为不随机器人形态而改变。因此，从跨机器人视频数据中学到的视频预测模型可以作为多种操作策略的通用先验。

## 关键特征
- **数据规模**: 15 万个视频片段、7 种机器人平台、真实世界异质数据
- **数据模态**: RGB 视频、关节状态、动作序列（不统一格式）
- **主要指标**: 视频预测质量（PSNR、SSIM）、策略迁移效果
- **领域**: 跨机器人泛化、视频预测、预训练世界模型

## 与世界模型的关系
RoboNet 直接推动了视频预测世界模型在机器人学中的应用。该工作提出的"使用大规模异质视频预训练模型作为通用操作先验"思路，是后续 GenRL、Dreamer、UniPi 等工作的思想先驱。RoboNet 向社区展示了：通过大规模视频预测预训练，世界模型可以捕捉到跨机器人形态的通用物理知识，从而显著提升下游任务的样本效率。

## 代表性用途
- Video Prediction Models as Visual Robot Policies (2019) 的原始数据集
- Visual Foresight (2018) 和后续视频预测世界模型的基础
- 启发了 Open X-Embodiment 的大规模跨数据集联合训练范式
- 被广泛引用作为通用机器人视觉表示学习的先驱工作
