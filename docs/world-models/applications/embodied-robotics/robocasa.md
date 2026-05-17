---
title: "RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots"
design: "RoboCasa"
arxiv: https://arxiv.org/abs/2406.02523
github: https://github.com/robocasa/robocasa
---

# RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots

::: info 论文信息
- **Design**: RoboCasa
- **论文全称**: RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots
- **arXiv**: [https://arxiv.org/abs/2406.02523](https://arxiv.org/abs/2406.02523)
- **GitHub**: [https://github.com/robocasa/robocasa](https://github.com/robocasa/robocasa)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2406.02523](https://arxiv.org/abs/2406.02523)
- **GitHub**: [https://github.com/robocasa/robocasa](https://github.com/robocasa/robocasa)

## 简介
RoboCasa MStanford University 与 UT Austin 联合开发，是一个面向通用机器人操作的大规模仿真环境。该环境基于 robosuite 框架的MuJoCo 物理引擎，致力于复制真实家庭环境中的日常操作任务。RoboCasa 最重要的贡献是提供了一个包含120 个完全布置的厨房场景的规模化仿真环境，每个场景都有不同的布局、家具、电器和物体排列。

RoboCasa 通过程序化生成（Procedural Generation）创建大规模的场景多样性：改变厨房布局、墙壁颜色、光照条件、物体纹理等。该环境支持 25 个细粒度原子任务（如开关微波炉、放置杯子、旋钮操作等），并可组合为复杂的长期操作序列。RoboCasa 还提供了通过大规模自动化演示生成管线创建的超的100,000 条演示轨迹，全部通过运动规划自动生成，使其成为通用机器人学习的理想训练场所。

## 关键特征
- **数据规模**: 120 个厨房场景一5 个原子任务中0 的 自动生成演示轨迹
- **数据模式**: RGB/RGB-D 图像（多视角）、物体位姿、关节状态、场景语义信。
- **主要指标**: 任务成功率、跨场景泛化、少样本适应、长期序列完成率
- **领域**: 通用机器人操作、程序化场景生成、仿真规模化

## 与世界模型的关系
RoboCasa 的大规模程序化场景生成能力使其成为世界模型研究的宝贵资源。通过一120 个不同厨房环境中学习，世界模型可以获取对家庭环境的通用理解，而非对单一场景的过拟合。世界模型在此环境中可以根据当前视觉观测和动作序列预测未来的厨房场景状态，并为下游策略提供决策参考。RoboCasa 特别适合评估世界模型在视觉密集变化环境中（光照、纹理、场景布局）的预测鲁棒性。

## 代表性用例
- RoboCasa 性MimicGen 结合用于自动演示生成
- MimicGen 团队使用 RoboCasa 生成大规模操作轨。
- 由 Stanford iNVIDIA 用于通用机器人操作基础模型训练

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)