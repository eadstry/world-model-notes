---
title: "ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model"
design: "ManiGaussian++"
arxiv: https://arxiv.org/abs/2506.19842
github: https://github.com/April-Yz/ManiGaussian_Bimanual
---

# ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model

::: info 论文信息
- **Design**: ManiGaussian++
- **论文全称**: ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model
- **arXiv**: [https://arxiv.org/abs/2506.19842](https://arxiv.org/abs/2506.19842)
- **GitHub**: [https://github.com/April-Yz/ManiGaussian_Bimanual](https://github.com/April-Yz/ManiGaussian_Bimanual)
:::

## 学习笔记

### 核心思想

ManiGaussian++ 是面向通用机器人双臂操控的分层高斯世界模型，是 ManiGaussian 框架的扩展。双臂操控相比单臂操控面临独特挑战：需要理解多体（双臂+物体）的时空动态交互。现有的 ManiGaussian 方法首次将高斯世界模型用于单臂操控，但忽视了双臂系统中多个执行体的交互，性能显著下降。ManiGaussian++ 通过分层高斯世界模型中的领导者-跟随者（Leader-Follower）架构解决这一问题：首先生成任务导向的高斯泼溅（Gaussian Splatting），区分主动臂（acting arm）和稳定臂（stabilizing arm）；然后建立分层高斯世界模型——Leader 预测稳定臂运动引起的高斯变形，Follower 基于此生成主动臂运动带来的物理后果。在 10 个仿真任务中超越 SOTA 方法 20.2%，在 9 个真实世界任务中平均成功率达到 60%。

### 技术架构

**Vision Encoding（视觉编码）**：ManiGaussian++ 从中间视觉特征（而非直接从像素）生成任务导向的高斯泼溅。关键设计是区分双臂角色——主动臂（执行任务如抓取、移动）和稳定臂（支撑如固定物体）。每种角色的高斯体具有不同的运动属性先验。分层世界模型由两个时序预测模块组成：Leader 以稳定臂动作为条件预测高斯的空间变形；Follower 以 Leader 输出和主动臂动作为条件生成最终的未来场景高斯场。

**Knowledge Learning（知识学习）**：ManiGaussian++ 在包含多种双臂操控任务的仿真数据上训练。学习目标包括：场景重建（高斯渲染 vs 观测）、未来预测（预测的高斯场 vs 未来帧）、和动作学习（通过渲染的未来场景评估动作质量，作为策略学习的奖励信号）。Leader-Follower 架构通过因果分解降低了学习难度——先建模稳定臂→环境的变化，再建模主动臂→结果的变化。

**Controllable Simulation（可控仿真）**：ManiGaussian++ 既可用于动作策略学习（通过世界模型评估候选动作的未来结果），也可用于合成仿真数据生成。在仿真 Bimanual Manipulation benchmark 和真实机器人平台上的实验结果验证了其在双臂操控任务中的泛化能力。

### 代码实现要点

- **任务导向高斯生成**：从视觉特征生成双角色高斯表示（主动臂/稳定臂分离）
- **Leader-Follower 时序预测**：两阶段因果建模——Leader（稳定臂影响）→ Follower（主动臂影响）
- **可微渲染**：高斯场渲染回图像用于自监督
- **开源**：GitHub 公开代码

### 关键创新点

- **双臂分层世界模型**：Leader-Follower 架构因果分解双臂交互动态
- **角色感知高斯表示**：区分主动臂和稳定臂的高斯运动属性
- **超越 SOTA**：仿真 +20.2%，真实世界 60% 成功率
- **高斯世界模型在多体系统上的首次成功扩展**
