---
title: "ADriver-I: A General World Model for Autonomous Driving"
design: "ADriver-I"
arxiv: https://arxiv.org/abs/2311.13549
---

# ADriver-I: A General World Model for Autonomous Driving

::: info 论文信息
- **Design**: ADriver-I
- **论文全称**: ADriver-I: A General World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2311.13549](https://arxiv.org/abs/2311.13549)
:::

## 学习笔记

## 核心思想

ADriver-I 是该方向最早的工作之一，首次提出了**交错视觉-动作对**（interleaved vision-action pair）的概念，将视觉特征和控制信号统一为同一种格式。传统的自动驾驶采用模块化设计，将感知、预测、规划和控制分离，虽然可解释但引入了大量冗余。ADriver-I 的核心主张是：将自动驾驶建模为"在自己创造的世界中自主驾驶"——模型基于历史视觉-动作对自回归地预测当前帧的控制信号，再用预测的控制信号条件化生成下一帧，如此循环往复。

ADriver-I 构建了一个基于 MLLM 和扩散模型的通用自动驾驶世界模型。以 vision-action pairs 为输入，模型自回归地预测控制信号，每一步的预测结果又条件化地用于生成下一帧的视觉预测。这种交错循环的设计使得模型能够在"想象的世界"中无限循环运行——模型既是世界的观察者，也是世界的创造者和参与者。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：ADriver-I 的核心表征创新是 vision-action pairs——将视觉特征（从多视角相机图像提取的特征）和控制信号（如方向盘转角、加速度等）交错排列成一个统一的序列。这种格式消除了视觉感知和行动决策之间的传统的模态鸿沟，使得单一的自回归模型能够统一处理两种模态。

- **未来预测（Future Prediction）**：扩散模型负责视觉帧的条件生成。基于历史 vision-action pairs 和当前预测的控制信号，扩散模型生成下一帧的视觉预测。然后这帧预测又被反馈到模型中用于下一个时间步的控制信号预测。这种"预测-生成-再预测"的循环实现了闭环的自动驾驶世界模拟。

- **动作与交互（Action & Interaction）**：MLLM 基于历史的 vision-action pairs 自回归地预测当前帧的控制信号。预测出的控制信号不仅用于车辆的实时控制，还作为条件信号馈入扩散模型以生成下一帧视觉预测——这种设计实现了"控制信号 → 视觉结果 → 下一步控制"的闭环推理链。

## 代码实现要点

暂无公开代码。

## 关键创新点

1. **Vision-Action Pairs**：首创将视觉状态和动作控制交错编码为统一序列格式。
2. **闭环世界模拟**：模型在"自己创造的世界"中无限迭代驾驶，实现了真正的闭环自主驾驶世界模型。
3. **MLLM + 扩散模型协同**：MLLM 负责序列推理和控制预测，扩散模型负责视觉生成。
4. **最早将 MLLM 应用于世界模型**：2023 年的先驱性工作，早于该方向的多数后续论文。

## 代表性结果

在 nuScenes 和大规模私有数据集上展现了令人印象深刻的效果，验证了"在自己世界中驾驶"的概念可行性。
