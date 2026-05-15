---
title: "FlowDreamer: A RGB-D World Model with Flow-based Motion Representations  for Robot Manipulation"
design: "FlowDreamer"
arxiv: https://arxiv.org/abs/2505.10075
github: https://github.com/sharinka0715/FlowDreamer
---

# FlowDreamer: A RGB-D World Model with Flow-based Motion Representations  for Robot Manipulation

::: info 论文信息
- **Design**: FlowDreamer
- **论文全称**: FlowDreamer: A RGB-D World Model with Flow-based Motion Representations  for Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2505.10075](https://arxiv.org/abs/2505.10075)
- **GitHub**: [https://github.com/sharinka0715/FlowDreamer](https://github.com/sharinka0715/FlowDreamer)
:::

## 核心思想

FlowDreamer 探索如何训练更好的视觉世界模型用于机器人操作，特别是利用 RGB-D 数据。核心创新在于引入 3D 场景流（3D scene flow）作为显式运动表征：先用 U-Net 从过去帧和动作条件预测 3D 场景流，再用扩散模型利用场景流预测未来帧。将动态预测和视觉渲染解耦为两阶段模块化设计，但仍端到端可训练。

3D 场景流编码每个 3D 点的位移向量（dx, dy, dz），是紧凑却信息丰富的运动表征。在推、抓等操作中，场景流精确描述物体的移动和夹爪轨迹，比传统隐式建模更可靠。

## 技术架构

**Vision Encoding（视觉编码）**：接收 RGB-D 帧，通过编码器压缩到潜在空间。深度通道提供关键 3D 几何信息，使场景流预测在 3D 空间中进行。

**Knowledge Learning（知识学习）**：第一阶段 U-Net 预测 3D 场景流（每个 3D 点位移向量）。第二阶段扩散模型接收当前帧+预测场景流，去噪生成未来帧。模块化设计让动态预测和视觉渲染各司其职。

**Controllable Simulation（可控模拟）**：支持视频预测（过去帧+动作→未来帧）和视觉规划（当前帧+目标→最优动作序列）两种模式。覆盖 4 个基准测试，语义相似度 +7%、像素质量 +11%、操作成功率 +6%。

## 代码实现要点

项目页面 [sharinka0715.github.io/FlowDreamer](https://sharinka0715.github.io/FlowDreamer/)。代码基于扩散模型（Diffusers）构建，核心模块包括 3D 场景流预测 U-Net 和未来帧扩散模型。

## 关键创新点

1. **显式 3D 场景流表征**：动态预测和视觉渲染解耦
2. **模块化端到端训练**：两阶段各司其职但联合优化
3. **RGB-D 世界模型**：利用深度信息实现 3D 空间场景流预测
4. **多指标超越**：语义 +7%、像素 +11%、成功率 +6%

## 代表性结果

FlowDreamer 在 4 个机器人操作基准测试上均超越基线。视频预测在语义和像素层面更准确；视觉规划成功率更高。3D 场景流预测对接触丰富操作（如推动物体）特别有效。
