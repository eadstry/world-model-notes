---
title: "PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation"
design: "PIVOT-R"
arxiv: https://arxiv.org/abs/2410.10394
github: https://github.com/abliao/PIVOT-R
---

# PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation

::: info 论文信息
- **Design**: PIVOT-R
- **论文全称**: PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2410.10394](https://arxiv.org/abs/2410.10394)
- **GitHub**: [https://github.com/abliao/PIVOT-R](https://github.com/abliao/PIVOT-R)
:::

## 学习笔记

## 核心思想

PIVOT-R 解决了语言引导机器人操作中的一个核心问题：**如何让模型学习从抽象语言指令到低层可执行动作的可迁移映射**，而不是简单地记忆训练数据的表面模式。传统方法试图直接从指令映射到关节角度等低层动作，使得模型对场景的微小变化非常敏感。PIVOT-R 的核心创新是引入了一个中间表征——**任务相关的 waypoint（路径关键点）**。

PIVOT-R 架构由两个模块组成：Waypoint-aware World Model（WAWM）负责动作原语解析和原语驱动的 waypoint 预测；轻量级动作预测模块负责将 waypoint 解码为低层动作。此外，论文还设计了异步层级执行器（Asynchronous Hierarchical Executor，AHE），允许模型的不同模块以不同频率运行，在不显著降低性能的前提下将执行效率提升了 28 倍。这一设计直接回应该领域长期存在的高层推理（低频率）与低层控制（高频率）的速度匹配问题。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：WAWM 的核心是**动作原语解析**——将复杂的语言指令分解为一系列基础操作原语（如"抓取""移动到""放置"）。每个原语对应一个 waypoint 预测，这些 waypoint 是任务空间中的关键位置点（如抓取位姿、放置位置），构成了高层次规划与低层次控制之间的**语义桥梁**。

- **未来预测（Future Prediction）**：WAWM 执行原语驱动的 waypoint 预测——根据当前状态和动作原语，预测下一个关键 waypoint 的位置。这是一个简化的世界模型预测——不预测完整的未来图像或状态，只预测与任务完成直接相关的最小必要信息（waypoint 坐标）。这种最小化设计使模型避免了对环境视觉细节的过度拟合。

- **动作与交互（Action & Interaction）**：轻量级动作预测模块将 waypoint 转化为低层动作序列（如末端执行器的笛卡尔轨迹和夹爪指令）。AHE 允许 WAWM 以较低频率运行（原语解析和 waypoint 预测），而动作预测和控制以较高频率执行，大大减少了计算冗余。

## 代码实现要点

开源代码在 [abliao/PIVOT-R](https://github.com/abliao/PIVOT-R)（NeurIPS 2024 录用）。

## 关键创新点

1. **Waypoint 作为抽象接口**：用任务关键点而非原始图像或动作作为高层低层之间的接口，减少了数据分布的表面相关性。
2. **原语驱动的世界模型**：将复杂的语言指令分解为可预测的动作原语，每个原语对应一个 waypoint 预测。
3. **异步层级执行器（AHE）**：不同模块以不同频率运行，在几乎不损失性能的情况下将执行效率提升 28 倍。
4. **仅预测任务相关信息**：世界模型只预测任务相关的 waypoint，避免了对不相关环境细节的过拟合。

## 代表性结果

在 SeaWave 基准上超越所有开源 SOTA 模型，在四个级别的指令任务上实现平均 19.45% 的相对提升。搭载 AHE 后执行效率提升 28 倍，性能仅下降 2.9%。
