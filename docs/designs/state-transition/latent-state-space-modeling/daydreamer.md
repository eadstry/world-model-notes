---
title: "DayDreamer: World Models for Physical Robot Learning"
design: "DayDreamer"
arxiv: https://arxiv.org/abs/2206.14176
github: https://github.com/danijar/daydreamer
---

# DayDreamer: World Models for Physical Robot Learning

::: info 论文信息
- **Design**: DayDreamer
- **论文全称**: DayDreamer: World Models for Physical Robot Learning
- **arXiv**: [https://arxiv.org/abs/2206.14176](https://arxiv.org/abs/2206.14176)
- **GitHub**: [https://github.com/danijar/daydreamer](https://github.com/danijar/daydreamer)
:::

## 核心思想

DayDreamer 是 Dreamer 算法首次在真实物理机器人上的部署应用。核心挑战是：真实机器人数据极其有限、噪声大、且无重置机制。DayDreamer 证明 DreamerV2 的 world model 方法可以在真实机器人上实现样本高效的在线学习——无需模拟器、无需人类示范、无需预训练，从零开始通过在线交互学习四足机器人的行走策略。

DayDreamer 的贡献不仅是实验验证，更重要的是提出了一套处理真实机器人世界模型训练的实践方案：使用 replay buffer 替代环境重置、利用 world model 实现离线想象（offline imagination）避免危险探索、以及通过多任务训练提升 world model 泛化能力。

## 技术架构

**Vision Encoding（视觉编码）**：使用标准的 CNN encoder-decoder 结构，输入为机器人本体感知（关节角度、IMU）和外部摄像头图像。RGB 图像通过 encoder 压缩到 categorical latent。

**Knowledge Learning（知识学习）**：基于 DreamerV2 的离散 RSSM 架构。关键适配：使用 high-frequency 控制器（50Hz）确保实时响应；world model 在在线收集的数据上持续更新（online world model learning），而非离线批次训练。多任务训练（行走 + 转身 + 站立）提升 world model 的泛化性。

**Controllable Simulation（可控模拟）**：在 robot 的 latent space 中进行想象式 actor-critic 训练，结合 online 真实交互。关键安全措施：在想象中而非真实世界中探索危险动作。

## 代码实现要点

代码开源在 [danijar/daydreamer](https://github.com/danijar/daydreamer)。基于 DreamerV2 的 TensorFlow 2 代码，通过 ROS 接口与 A1 机器人通信。运行时在 NVIDIA Jetson 嵌入式设备上执行。

## 关键创新点

1. **首次真实机器人 World Model**：Dreamer 系列首次在物理机器人上验证
2. **Online World Model Learning**：在真实机器人上实现持续的在线学习
3. **无需重置/示范**：完全从零开始在真实机器人上学习
4. **嵌入式部署**：在 Jetson 上实时运行 world model 和控制策略

## 代表性结果

在 Unitree A1 四足机器人上，DayDreamer 在约 1 小时真实世界交互内学会稳定的步行策略（每小时约 4K 样本）。机器人能够适应草地、斜坡等多种地形，且在无人类干预的情况下完成整个学习过程。这证明了 world model 方法从仿真走向真实世界的可行性。
