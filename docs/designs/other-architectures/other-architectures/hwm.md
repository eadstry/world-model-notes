---
title: "Humanoid World Models: Open World Foundation Models for Humanoid Robotics"
design: "HWM"
arxiv: https://arxiv.org/abs/2506.01182
---

# HWM: Humanoid World Models: Open World Foundation Models for Humanoid Robotics

::: info 论文信息
- **Design**: HWM
- **论文全称**: Humanoid World Models: Open World Foundation Models for Humanoid Robotics
- **arXiv**: [https://arxiv.org/abs/2506.01182](https://arxiv.org/abs/2506.01182)
:::

## 学习笔记

### 核心思想

HWM (Humanoid World Models) 是一系列轻量级、开源的人形机器人世界模型，旨在以学术和小型实验室可用的计算资源（1-2 GPU）进行训练和部署。人形机器人因其类人形态天然适合在人类环境中交互，但让人形机器人在复杂开放世界中进行推理、规划和行动仍然是重大挑战。世界模型通过预测给定动作的未来结果，可以支持长时域规划中的动态建模和为策略学习生成合成数据。HWM 的核心贡献是：在 100 小时人形机器人演示数据上训练了两种生成模型（Masked Transformer 和 Flow-Matching），并探索了不同注意力机制和参数共享策略的架构变体。参数共享技术减少了 33-53% 模型大小，对性能影响极小。

### 技术架构

**Vision Encoding（视觉编码）**：HWM 以人形机器人的自我中心（egocentric）视频作为输入，视觉编码器将 RGB 帧映射为潜在 token 序列。同时接收控制 token（control tokens）作为条件信号，编码机器人的关节位置、目标末端执行器姿态等。

**Knowledge Learning（知识学习）**：HWM 对比了两种生成范式：(1) Masked Transformer——使用 masking 策略进行自回归或掩码预测；(2) Flow-Matching——学习从噪声到目标帧的最优传输路径。研究了不同注意力机制（全局、因果、局部窗口）对预测质量和计算效率的权衡。参数共享策略在视觉编码器和时序预测器中共享权重，减少参数量 33-53%。所有训练仅需 100 小时人形机器人演示数据。

**Controllable Simulation（可控仿真）**：HWM 的输出是以控制信号为条件的未来自我中心视频预测。这意味着给定一个机器人拟执行的动作计划，HWM 可以"可视化"执行该计划后会发生什么，从而支持长时域规划（将 HWM 作为可微模拟器使用）和合成数据生成（为策略学习生成大量仿真交互数据）。轻量级设计使 HWM 适用于 1-2 GPU 的学术环境。

### 代码实现要点

- **双范式**：Masked Transformer + Flow-Matching，两种架构提供不同精度-效率权衡
- **控制 token 调制**：机器人控制信号通过 AdaLN 调制或交叉注意力注入视频生成骨干
- **参数共享**：编码器和解码器层之间共享权重，减少 33-53% 参数量
- **小型化设计**：在 100 小时人形机器人数据上 1-2 GPU 即可完成训练

### 关键创新点

- **首个开源人形世界模型**：面向人形机器人的轻量级视频预测世界模型
- **双架构对比**：Masked Transformer vs Flow-Matching 的实证比较
- **参数共享压缩**：33-53% 参数减少，性能损失极低
- **低资源友好**：1-2 GPU 可完成训练部署
