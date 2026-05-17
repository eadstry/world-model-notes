---
title: "Vista: A generalizable driving world model with high fidelity and versatile controllability"
design: "Vista"
arxiv: https://arxiv.org/abs/2405.17398
github: https://github.com/OpenDriveLab/Vista
---

# Vista: A generalizable driving world model with high fidelity and versatile controllability

::: info 论文信息
- **Design**: Vista
- **论文全称**: Vista: A generalizable driving world model with high fidelity and versatile controllability
- **arXiv**: [https://arxiv.org/abs/2405.17398](https://arxiv.org/abs/2405.17398)
- **GitHub**: [https://github.com/OpenDriveLab/Vista](https://github.com/OpenDriveLab/Vista)
:::

## 学习笔记

## 核心思想

Vista（NeurIPS 2024）是 OpenDriveLab 提出的通用驾驶世界模型，致力于解决现有驾驶世界模型的三大核心挑战：**对未见环境的泛化能力不足、关键细节预测保真度不够、动作可控性的灵活性受交*。通过系统性地诊断现有方法的不足，Vista 引入了一系列关键改进来逐个击破这些瓶颈。
在预测质量方面，Vista 提出两种新颖的损失函数：一种专注于促进**移动实例**（车辆、行人等动态目标）的学习，另一种强化*结构信息**的保持（道路、车道线等静态结构）。在长时推演方面，设计了高效的*潜在替换方法**（latent replacement），将历史帧作为先验注入，确保长距离 rollouts 的时序一致性。
在可控性方面，Vista 实现了从高层意图（指令、目标点）到底层操控（轨迹、角度、速度）的**多层次控制集数*，通过高效的学习策略统一处理。更重要的是，Vista 首次展示了世界模型本身可以作为*可泛化的奖励函数**，在无需访问真值动作的情况下评估真实世界的驾驶行为——这是向基于世界模型的自动驾驶评估迈出的重要一步。
## 技术架。
**Vision Encoding（视觉编码）**：基于扩散模型的视频生成架构，将历史驾驶观测帧编码为潜在表示。通过潜在替换机制，在长时推演中将历史帧的潜在特征注入生成过程，维持时序一致性。
**Knowledge Learning（世界知识学习）**：在大规模驾驶数据上训练，学习交通场景的复杂动力学。两种关键损失——移动实例损失（关注动态物体的运动模式）和结构保持损失（保持道路、车道线等静态结构稳定）——确保模型既理解动态交通流又维持场景几何一致性。
**Controllable Simulation（可控推演）**：多层次控制接口：高层指令（直行、左转等命令和导航目标点）与底层操控（精确轨迹、方向盘角度、速度）。所有控制信号通过统一的学习框架注入扩散生成过程。模型本身可作为可泛化奖励函数，评估实际驾驶行为质量。
## 代码实现要点

- 基于扩散模型实现，开源在 OpenDriveLab/Vista
- 移动实例损失：专门监督动态物体的运动预测精度
- 结构保持损失：维护道路、车道线等静态结构在推演中的稳定性- 潜在替换机制：长期rollout 时注入历史帧先验
- 多层次控制：从高层意图到底层操控的统一学习策略
- 自监督奖励：Vista 自身评估驾驶行为，无需真值动。
## 关键创新。
- 移动实例损失 + 结构保持损失双管齐下提升预测质量
- 潜在替换方法实现连贯的长时推理- 从高层意图到底层操控的完整控制层面- 首次使用世界模型作为可泛化的真实驾驶行为评估奖励
- 在 70%+ 对比中超越通用视频生成器，FID 提升 55%、FVD 提升 27%

## 代表性结。
- NeurIPS 2024 接收
- 超越最先进通用视频生成器（70%+ 对比胜出了- 超越最佳驾驶世界模型：FID 提升 55%，FVD 提升 27%
- 多数据集上的泛化验证
- 首次实现世界模型驱动的无真值动作驾驶评。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
