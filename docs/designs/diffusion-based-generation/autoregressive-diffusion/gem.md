---
title: "Gem: A generalizable ego-vision multimodal world model for fine-grained ego-motion, object dynamics, and scene composition control"
design: "GEM"
arxiv: https://arxiv.org/abs/2412.11198
github: https://github.com/vita-epfl/GEM
---

# GEM: Gem: A generalizable ego-vision multimodal world model for fine-grained ego-motion, object dynamics, and scene composition control

::: info 论文信息
- **Design**: GEM
- **论文全称**: Gem: A generalizable ego-vision multimodal world model for fine-grained ego-motion, object dynamics, and scene composition control
- **arXiv**: [https://arxiv.org/abs/2412.11198](https://arxiv.org/abs/2412.11198)
- **GitHub**: [https://github.com/vita-epfl/GEM](https://github.com/vita-epfl/GEM)
:::

## 学习笔记

## 核心思想

GEM（Generalizable Ego-vision Multimodal world model）是 EPFL VITA 实验室提出的可泛化自我中心视觉多模态世界模型。其核心设计理念是**精确控制三大动态元素**：自我运动（ego-motion）、物体动力学（object dynamics）和人体姿态（human poses），同时生成**配对的 RGB 和深度输出**以提供更丰富的空间理解。

GEM 的训练数据规模宏大：4000+ 小时的多模态数据覆盖自动驾驶、自我中心人类活动和无人机飞行等跨域场景，使用伪标签获取深度图、自我轨迹和人体姿态信息。这种跨域数据策略赋予模型强大的泛化能力。

关键技术贡献包括：(1) 引入**自回归噪声调度**（autoregressive noise schedules）以实现稳定的长时生成；(2) 设计全面的评估框架，包括新的 **COM（Control of Object Manipulation）指标**来量化和评估可控性；(3) 代码、模型和数据集**全面开源**，推动社区发展。

## 技术架构

**Vision Encoding（视觉编码）**：以参考帧、稀疏特征、人体姿态和自我轨迹为输入，生成配对的 RGB 和深度输出。多模态输入使模型获得丰富的环境理解——深度信息补充了 RGB 的纯外观表示。

**Knowledge Learning（世界知识学习）**：在 4000+ 小时跨域多模态数据上训练，覆盖驾驶、自我中心活动和无人机飞行。模型学习这三类场景中物体动态、自我运动和人体运动的通用规律，实现跨场景泛化。

**Controllable Simulation（可控推演）**：三大精确控制维度：自我运动（轨迹控制全局视角移动）、物体动力学（操控场景中物体的运动）、人体姿态（控制人物动作）。自回归噪声调度确保长时生成过程中误差不累积，维持时序稳定性。

## 代码实现要点

- 多模态输入：参考帧 + 稀疏特征 + 人体姿态 + 自我轨迹
- 配对输出：RGB + 深度图
- 自回归噪声调度：实现稳定长时生成
- 数据集：4000+ 小时跨域多模态数据（驾驶+自我中心+无人机）
- COM 指标：量化物体操控可控性
- 全面开源：代码、模型、数据集

## 关键创新点

- 唯一同时控制自我运动、物体动态、人体姿态的世界模型
- 配对 RGB+深度输出提供丰富空间理解
- 4000+ 小时跨域数据训练实现强大泛化
- 自回归噪声调度确保长时生成稳定性
- COM 指标系统性量化可控性

## 代表性结果

- 跨驾驶、自我中心、无人机三大域的泛化生成
- 多样可控场景生成
- 长时生成保持时序一致性
- RGB+深度配对的丰富空间输出
