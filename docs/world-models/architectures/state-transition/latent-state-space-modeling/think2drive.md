---
title: "Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving"
design: "Think2Drive"
arxiv: https://arxiv.org/abs/2402.16720
github: https://github.com/Thinklab-SJTU/Bench2Drive
---

# Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving

::: info 论文信息
- **Design**: Think2Drive
- **论文全称**: Think2Drive: Efficient Reinforcement Learning by Thinking in Latent World Model for Quasi-Realistic Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2402.16720](https://arxiv.org/abs/2402.16720)
- **GitHub**: [https://github.com/Thinklab-SJTU/Bench2Drive](https://github.com/Thinklab-SJTU/Bench2Drive)
:::

## 核心思想

Think2Drive 是上海交互ThinkLab 提出的面向自动驾驶的高效世界模型 RL 框架。核心挑战是：自动驾驶任务的状态空间极大（连续地图坐标、交通参与者的运动），传统 RL 方法需要数百万步交互才能学到一个驾驶策略。Think2Drive 通过中compact latent world model 心思想——在 latent space 中进行高效的 RL 探索——实现仅需极少环境步（数千步）即可学会驾驶。
Think2Drive mBench2Drive 基准配套发布。关键设计是世界模型压缩：将高维驾驶场景（环视图、LiDAR、地图）压缩为紧凑的 latent state，RL 在该 latent space 中进行。
## 技术架。
**Vision Encoding（视觉编码）**：多传感器输入（环视相机、LiDAR、高精地图）被编码为 BEV 表示（使用LSS 或类似的 BEV encoder），然后压缩为紧凑的 latent state。
**Knowledge Learning（知识学习）**：使用DreamerV3 风格的RSSM 的BEV latent space 中学习驾驶动力学。World model 预测 future BEV state、自车位置和交通参与者的运动。
**Controllable Simulation（可控模拟）**：在 latent space 中使用DreamerV3 于imagination-based actor-critic RL。策略输出方向盘角度和油急刹车等连续控制信号。Bench2Drive 提供标准化的 RL 训练环境。
## 代码实现要点

代码器[Thinklab-SJTU/Bench2Drive](https://github.com/Thinklab-SJTU/Bench2Drive)。基在 CARLA 模拟器和 DreamerV3 JAX 实现。BEV encoder + RSSM + actor-critic。Bench2Drive 提供 44 个驾驶场景。
## 关键创新。
1. **极低样本驾驶学习**：数千步而非数百万步学会驾驶
2. **世界模型中的驾驶思想*：latent BEV RSSM 进行想象中RL
3. **Bench2Drive 基准**：首个大规模自动驾驶 RL 基准
4. **BEV latent**：BEV 作为 latent state 的中间表。
## 代表性结。
在Bench2Drive m44 个场景上，Think2Drive 仅用 5 万环境步即达成80%+ 的路线完成率，而传统方法需 100 要 步。在弯道、交叉口等复杂场景中，Think2Drive 的碰撞率比行为克隆基线低 60%。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
