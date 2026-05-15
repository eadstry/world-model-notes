---
title: "WoVoGen: World Volume-Aware Diffusion for Controllable Multi-Camera Driving Scene Generation"
design: "WoVoGen"
arxiv: https://arxiv.org/abs/2312.02934
github: https://github.com/fudan-zvg/WoVoGen
---

# WoVoGen: World Volume-Aware Diffusion for Controllable Multi-Camera Driving Scene Generation

::: info 论文信息
- **Design**: WoVoGen
- **论文全称**: WoVoGen: World Volume-Aware Diffusion for Controllable Multi-Camera Driving Scene Generation
- **arXiv**: [https://arxiv.org/abs/2312.02934](https://arxiv.org/abs/2312.02934)
- **GitHub**: [https://github.com/fudan-zvg/WoVoGen](https://github.com/fudan-zvg/WoVoGen)
:::

## 核心思想

WovoGen 是提出的"世界-体积"（World-Volume）生成框架，用于自动驾驶场景生成。核心创新是将世界模型从像素生成转向体积生成——在 3D volume（如 occupancy voxels）中生成未来场景，而不是生成 2D 图像。这种体积表示天然保持 3D 一致性，避免了"视角不同产生不一致内容"的问题。

WovoGen 的关键贡献是提出了"Volumetric World Model"概念：生成的是一个完整的 3D 体积"快照"，包含了场景中所有物体的位置、形状和语义信息，而非特定视角的投影。规划器可以从这个 3D 体积中查询任意位置、任意视角的信息。

## 技术架构

**Vision Encoding（视觉编码）**：多视图 → 3D occupancy 编码器，使用 Triplane 或 Voxel grid 表示。

**Knowledge Learning（知识学习）**：3D Diffusion Model 在 voxel space 中学习体积动力学。模型以当前 3D volume 和 ego motion 为条件，去噪生成未来的 3D volume。Volume 包含 occupancy、semantic、flow 三个通道。

**Controllable Simulation（可控模拟）**：生成未来 3D volume → 从任意视角查询和渲染。支持 collision check、free space analysis 等规划级操作。

## 代码实现要点

暂无开源代码。基于 3D Diffusion + Triplane/Voxel representation。在 nuScenes 上评估。

## 关键创新点

1. **体积世界模型**：3D volume generation 替代 2D pixel generation
2. **视角无关表示**：3D volume 天然无视角限制
3. **Geometry-first 范式**：先生成几何，再渲染视觉
4. **直接可规划**：预测的 volume 可直接用于碰撞检测

## 代表性结果

在 nuScenes 的 3 秒未来预测中，WovoGen 的体积占用预测 IoU > 78%，预测的 3D volume 在多视角渲染测试中展示了完美的几何一致性（对极误差为 0）。为自动驾驶规划提供了比视频生成更精确的未来表示。
