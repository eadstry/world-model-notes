---
title: "RoboScape: Physics-informed Embodied World Model"
design: "RoboScape"
arxiv: https://arxiv.org/abs/2506.23135
github: https://github.com/tsinghua-fib-lab/RoboScape
---

# RoboScape: Physics-informed Embodied World Model

::: info 论文信息
- **Design**: RoboScape
- **论文全称**: RoboScape: Physics-informed Embodied World Model
- **arXiv**: [https://arxiv.org/abs/2506.23135](https://arxiv.org/abs/2506.23135)
- **GitHub**: [https://github.com/tsinghua-fib-lab/RoboScape](https://github.com/tsinghua-fib-lab/RoboScape)
:::

## 学习笔记

### 核心思想

RoboScape 是一种物理信息增强的具身世界模型，专为机器人操控场景设计。针对当前世界模型普遍缺乏物理常识的问题（如抓取时物体变形、碰撞时运动不对等），RoboScape 在自回归视频生成的基础上显式地融入了物理知识：模型不仅预测未来的 RGB 视频帧，还同时预测深度图和关键点运动轨迹。深度图提供 3D 几何信息，关键点动力学学习则通过预测物体表面关键点的位移，隐式地建模物体的材料属性（硬度、弹性）和物理交互规律。

RoboScape 是首个系统性地研究物理感知世界模型的工作，在接触密集型机器人操控任务（抓取、放置、推动）中展现出显著的视觉质量提升和物理一致性改善。相比纯视觉世界模型，RoboScape 生成的操作视频中物体的形变、接触和碰撞行为更加符合真实物理规律，为 sim-to-real 迁移和机器人策略训练提供了更可靠的虚拟环境。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
