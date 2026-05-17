---
title: "GAIA-1: A Generative World Model for Autonomous Driving"
design: "GAIA-1"
website: https://wayve.ai/thinking/scaling-gaia-1/
---

# GAIA-1: A Generative World Model for Autonomous Driving

::: info 论文信息
- **Design**: GAIA-1
- **论文全称**: GAIA-1: A Generative World Model for Autonomous Driving
- **Website**: [https://wayve.ai/thinking/scaling-gaia-1/](https://wayve.ai/thinking/scaling-gaia-1/)
:::

## 学习笔记

### 核心思想

GAIA-1（Generative AI for Autonomy）是自动驾驶领域最早的规模化生成式世界模型之一。其核心思想是将世界建模转化为一个自监督序列建模问题：将驾驶场景的视频映射为离散 token，然后预测序列中的下一个 token。通过这种方式，GAIA-1 能够生成逼真的驾驶场景视频，并提供对自车行为的精细控制。

GAIA-1 的突破性贡献在于展示了世界模型如何涌现出高层场景理解能力。模型不仅学习到如何生成连续的驾驶视频，还能理解交通规则、道路结构、3D 几何和物体动力学等高层知识。它能够从相同的起始帧生成多条可能的未来轨迹，通过不同的控制信号（如转向、加速）引导生成结果，展示了世界模型在自动驾驶中作为"神经仿真器"的潜力。

### 核心架构

**Vision Encoding（视觉编码）**：GAIA-1 将视频帧编码为离散 token 序列。使用图像分词器对每一帧进行离散化，产生视觉 token。同时，文本 token（如语言指令）和动作 token（如转向角、速度/刹车等控制信号）也统一为同一 token 序列。

**Knowledge Learning（知识学习）**：以自回归 Transformer 为核心动力学模型，通过 next-token prediction 学习驾驶场景的演化规律。训练数据为真实驾驶环境的海量视频数据。模型从 token 序列的形式学习道路结构、交通规则以及其他道路使用者的行为模式等驾驶知识。

**Controllable Simulation（可控模拟）**：GAIA-1 支持多种方式实现精细可控的视频生成，包括动作控制（精确控制自车行为，如转向、速度）、文本控制（通过自然语言描述场景条件，如天气、时间）以及初始帧条件（从真实图像出发预测未来演化）。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
