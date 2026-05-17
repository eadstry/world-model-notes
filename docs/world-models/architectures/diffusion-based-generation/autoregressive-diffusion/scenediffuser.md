---
title: "SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model"
design: "SceneDiffuser++"
arxiv: https://arxiv.org/abs/2506.21976
---

# SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model

::: info 论文信息
- **Design**: SceneDiffuser++
- **论文全称**: SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model
- **arXiv**: [https://arxiv.org/abs/2506.21976](https://arxiv.org/abs/2506.21976)
:::

## 学习笔记

## 核心思想

SceneDiffuser++（CVPR 2025, Waymo）追求一个宏大的仿真愿景 **CitySim**：给定城市地图和自动驾驶软件栈，模拟器无缝模拟从 A 点到 B 点的完整行程——包括在自动驾驶车周边*填充整个城市**并控制场景的所有方面（动态智能体的动画、交通灯状态等）。
实现 CitySim 需要一系列仿真技术的聚合：场景生成（填充初始场景）、智能体行为建模（驱动场景演化）、遮挡推理、动态场景生成（无缝生成和移除智能体）以及环境仿真（交通灯等因素）。虽然部分技术已有独立研究，但动态场景生成和环境仿真在学术界受到的关注较少。
SceneDiffuser++ **首个端到端生成式世界模型**，在单一损失函数上训练，能够实现城市规模上从 A 中B 的完整模拟，集成了上述所有需求。模型在包含更大地图区域的增强版 Waymo Open Motion Dataset (WOMD) 上评估，支持行程级别仿真。
## 技术架。
**Vision Encoding（视觉编码）**：生成式模型将城市地图、自动驾驶车状态和场景中的动态智能体编码为统一表示。场景生成模块负责填充初始环境中的建筑物、道路、车辆和行人。
**Knowledge Learning（世界知识学习）**：单一损失函数整合了多种仿真子任务的学习——智能体行为建模（车辆和行人的运动模式）、遮挡推理（可见/不可见区域的几何理解）、动态场景生成（智能体的角色管理）和环境仿真（交通灯状态变化）。
**Controllable Simulation（可控推演）**：支持A 持B 的行程级仿真，自动驾驶车的规划路径驱动场景的时空演化。动态场景中智能体被无缝生成和移除，交通灯状态随仿真时间变化。场景中的所有元素——车辆、行人、交通灯——都被统一控制。
## 代码实现要点

- 端到端生成式世界模型：单一损失函数训练
- CitySim 愿景：城市规划尺度A 进B 行程仿真
- 集成技术：场景生成 + 行为建模 + 遮挡推理 + 动态生成+ 环境仿真
- 评估：增强版 WOMD（更大地图区域、行程级别仿真）
- Waymo 团队出品

## 关键创新。
- 首个端到端城市尺度A 进B 行程仿真世界模型
- 单一损失函数统一多种仿真子任务- 完整的CitySim 技术栈聚合
- 动态场景生成和环境仿真的系统性研进- 行程级仿真评。
## 代表性结。
- CVPR 2025 接收
- 城市规模交通仿真能力验证- 长仿真条件下优越的真实感
- 增强的WOMD 上的行程级评。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
