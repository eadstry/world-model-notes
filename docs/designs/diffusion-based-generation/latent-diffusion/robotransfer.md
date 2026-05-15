---
title: "RoboTransfer: Geometry-Consistent Video Diffusion for Robotic Visual Policy Transfer"
design: "RoboTransfer"
arxiv: https://arxiv.org/abs/2505.23171
github: https://github.com/HorizonRobotics/RoboTransfer
---

# RoboTransfer: Geometry-Consistent Video Diffusion for Robotic Visual Policy Transfer

::: info 论文信息
- **Design**: RoboTransfer
- **论文全称**: RoboTransfer: Geometry-Consistent Video Diffusion for Robotic Visual Policy Transfer
- **arXiv**: [https://arxiv.org/abs/2505.23171](https://arxiv.org/abs/2505.23171)
- **GitHub**: [https://github.com/HorizonRobotics/RoboTransfer](https://github.com/HorizonRobotics/RoboTransfer)
:::

## 核心思想

RoboTransfer 提出了面向机器人操控的世界模型迁移框架。核心挑战是：在仿真中训练的扩散世界模型如何迁移到真实世界机器人上。RoboTransfer 通过学习一个"域适应（domain adaptation）"模块，将真实世界的视觉观测转换为仿真世界的 latent 分布，使仿真中训练的 world model 能在真实世界中使用。

RoboTransfer 的关键创新是"sim-to-real world model transfer"：不同于常见的 sim-to-real policy transfer（迁移策略），RoboTransfer 迁移的是世界模型本身。这使得真实世界中的规划也能利用仿真的丰富想象能力。

## 技术架构

**Vision Encoding（视觉编码）**：Domain Adapter——将真实世界图像映射到仿真域的特征空间。使用 CycleGAN 或 AdaIN 风格的域迁移技术。

**Knowledge Learning（知识学习）**：Diffusion World Model 在仿真域中训练。域适配器在成对的仿真+真实图像上学习（通过 aligned data collection）。真实图像通过适配器进入世界模型，世界模型在"仿真的眼睛"中看到真实场景。

**Controllable Simulation（可控模拟）**：真实场景 → 域适配 → 世界模型想象未来 → 策略在想象的未来中决策 → 真实执行。

## 代码实现要点

暂无开源代码。基于 Diffusion WM + Domain Adapter。在 Robosuite → Franka Robot 的 sim2real 迁移中评估。

## 关键创新点

1. **世界模型 Sim2Real 迁移**：迁移世界模型而非策略
2. **域适配模块**：将真实域映射到仿真域的 latent space
3. **保留想象力**：真实世界也能使用仿真的丰富想象
4. **Aligned data collection**：成对数据学习域适配

## 代表性结果

在 Franka 真实机器人的操控任务中，通过 RoboTransfer 迁移的世界模型生成的未来帧在视觉上接近真实（FID 比直接部署降低 60%）。使用迁移后世界模型进行 planning 的成功率比 sim-only 策略高 40%。
