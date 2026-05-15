---
title: "MoDem-V2: Visuo-Motor World Models for Real-World Robot Manipulation"
design: "MoDem-V2"
arxiv: https://arxiv.org/abs/2309.14236
github: https://github.com/facebookresearch/modemv2
---

# MoDem-V2: Visuo-Motor World Models for Real-World Robot Manipulation

::: info 论文信息
- **Design**: MoDem-V2
- **论文全称**: MoDem-V2: Visuo-Motor World Models for Real-World Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2309.14236](https://arxiv.org/abs/2309.14236)
- **GitHub**: [https://github.com/facebookresearch/modemv2](https://github.com/facebookresearch/modemv2)
:::

## 核心思想

MoDem-V2 是 Meta FAIR 提出的视觉-运动世界模型，专为真实世界机器人操控设计。核心创新是将视觉世界模型和运动策略学习紧密结合：世界模型预测未来的视觉状态（RGB图像），策略模型基于预测的视觉状态产生控制动作。这种视觉-运动闭环使模型能够处理真实世界中复杂的物体交互。

MoDem-V2 的定位是"visuo-motor"而非纯视觉世界模型。关键理念是：在机器人操控中，预测物体如何移动（视觉预测）和预测如何控制机器人（运动预测）是紧密耦合的，统一建模优于分离建模。

## 技术架构

**Vision Encoding（视觉编码）**：使用 ResNet encoder + decoder 结构，输入为手腕和俯视视角的 RGB 图像。

**Knowledge Learning（知识学习）**：两阶段训练。第一阶段：视觉动力学预训练——模型学习在动作条件下预测未来的多视角图像。第二阶段：基于视觉预测的运动策略微调——策略 model 同时接收当前图像和预测的未来图像来输出机器人动作。使用 MAE 风格的掩码预训练增强视觉编码。

**Controllable Simulation（可控模拟）**：给定当前观测和目标图像，世界模型生成中间视觉状态序列，策略根据这些预测的视觉状态执行动作。

## 代码实现要点

代码开源在 [facebookresearch/modemv2](https://github.com/facebookresearch/modemv2)。基于 PyTorch。ResNet encoder-decoder + visual foresight + behavior cloning。在 Franka Emika 机器人上评估。

## 关键创新点

1. **视觉-运动统一建模**：视觉预测和运动策略联合学习
2. **真实世界部署**：从仿真到 Franka 机器人的成功迁移
3. **MAE 视觉预训练**：掩码预训练提升视觉表示鲁棒性
4. **多视角预测**：同时预测手腕和俯视视角

## 代表性结果

在真实 Franka 机器人上，MoDem-V2 在多种操控任务（抓取、放置、推动）上成功率 80%+。相比纯行为克隆方法，成功率提升 20-30%。模型对背景变化和物体摆放变化表现出鲁棒性。
