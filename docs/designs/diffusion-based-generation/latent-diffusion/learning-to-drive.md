---
title: "Learning to Drive from a World Model"
design: "Learning to Drive"
arxiv: https://arxiv.org/abs/2504.19077
website: https://blog.comma.ai/mlsim
---

# Learning to Drive from a World Model

::: info 论文信息
- **Design**: Learning to Drive
- **论文全称**: Learning to Drive from a World Model
- **arXiv**: [https://arxiv.org/abs/2504.19077](https://arxiv.org/abs/2504.19077)
- **Website**: [https://blog.comma.ai/mlsim](https://blog.comma.ai/mlsim)
:::

## 核心思想

"Learning to Drive by Learning to Imagine" 是提出的将世界模型"想象"能力直接用于驾驶决策的框架。核心思想是：驾驶agent的核心能力是"想象不同动作会导致什么后果"。通过训练一个扩散世界模型来生成"如果我这样做，未来会怎样"的场景预测，agent 可以隐式地学习驾驶策略——选择"产生最佳未来"的动作。

该工作的关键贡献是建立了"想象驱动"（imagination-driven driving）的完整 pipeline：世界模型对每个候选动作生成未来场景预测 → 评估每个预测场景的安全性、舒适性和进度 → 选择最优动作。这是一种端到端的"基于想象的规划"在自动驾驶中的应用。

## 技术架构

**Vision Encoding（视觉编码）**：VAE encoder 压缩驾驶视图。多帧历史提供动力学上下文。

**Knowledge Learning（知识学习）**：Diffusion-based World Model 以当前场景和候选动作为条件，生成未来场景的预测。每个候选动作产生独立的未来预测分支。模型通过对比生成场景与真实发生的场景进行训练。

**Controllable Simulation（可控模拟）**：规划器生成 N 个候选动作 → World Model 生成 N 个对应的未来场景 → Policy 选择安全性最高的动作。实现了"在想象中试驾"。

## 代码实现要点

暂无开源代码。基于 Diffusion WM + model-based planning。在 CARLA 和 nuScenes 上评估。

## 关键创新点

1. **想象驱动的驾驶**：在扩散生成的未来中选择最优动作
2. **多候选动作对比**：多个未来并行生成和对比
3. **安全感知决策**：在未来预测中评估碰撞和风险
4. **端到端想象规划**：从 diffusion latent 到控制命令的统一 pipeline

## 代表性结果

在 CARLA 的驾驶任务中，基于"想象驱动"的方法在安全性（碰撞率）和舒适度（急刹车次数）上均优于端到端行为克隆和确定性 planning 方法。在复杂场景（如无保护转弯、交互式超车）中，"想象"提供了关键的预见能力。
