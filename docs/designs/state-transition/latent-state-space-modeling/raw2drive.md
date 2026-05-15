---
title: "Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving"
design: "Raw2Drive"
arxiv: https://arxiv.org/abs/2505.16394
---

# Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving

::: info 论文信息
- **Design**: Raw2Drive
- **论文全称**: Raw2Drive: Reinforcement Learning with Aligned World Models for End-to-End Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2505.16394](https://arxiv.org/abs/2505.16394)
:::

## 核心思想

Raw2Drive 提出了一个"与真实驾驶对齐的"端到端世界模型强化学习框架。核心挑战是：在自动驾驶 RL 中，world model 在 latent space 中的想象可能与真实世界的驾驶规范不一致——world model 可能学到在 latent space 中"成功"但在现实中不安全的行为。Raw2Drive 通过多维度对齐来解决此问题。

Raw2Drive 的关键是"对齐"（alignment）：使用多种对齐信号（安全约束、交通规则遵守、人类驾驶偏好）来约束世界模型的想象和学习过程。对齐机制确保 world model 想象的世界状态和策略学习都符合真实驾驶的标准——不仅仅是最快到达目标，更是最安全和最符合规范的。

## 技术架构

**Vision Encoding（视觉编码）**：多视图环视 + 高精地图输入通过 BEV encoder 压缩为 aligned latent state。

**Knowledge Learning（知识学习）**：除了标准 RSSM 的重建和奖励预测损失外，还引入三种对齐损失：Safety Alignment（碰撞风险预测）、Rule Alignment（交通灯和限速遵守）和 Style Alignment（模仿人类驾驶风格的平滑性）。World model 的学习目标变为：真实 + 安全 + 合规 + 舒适。

**Controllable Simulation（可控模拟）**：在 latent space 中进行对齐的 imagination RL。策略优化同时考虑进度奖励和安全/合规/舒适成本。使用 Lagrangian 方法动态调节各目标权重。

## 代码实现要点

暂无开源代码。基于 DreamerV3 + multi-objective alignment。在 CARLA 模拟器上评估。

## 关键创新点

1. **多维度世界模型对齐**：安全+规则+风格三重对齐
2. **对齐的 imagination**：想象世界中的行为也受安全约束
3. **人类驾驶风格学习**：从人类数据中学习舒适和平滑性
4. **综合奖励设计**：进度+安全+合规+舒适的联合优化

## 代表性结果

在 CARLA 驾驶任务中，Raw2Drive 的碰撞率比未对齐的 DreamerV3 低 50%，交通违规减少 60%，乘坐舒适度（jerk 指数）降低 40%。在复杂的城市驾驶场景中，Raw2Drive 的行为更接近人类驾驶员。
