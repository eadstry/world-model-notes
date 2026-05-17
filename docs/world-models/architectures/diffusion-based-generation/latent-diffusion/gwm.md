---
title: "GWM: Towards Scalable Gaussian World Models for Robotic Manipulation"
design: "GWM"
arxiv: https://arxiv.org/abs/2508.17600
github: https://github.com/Gaussian-World-Model/gaussianwm
---

# GWM: Towards Scalable Gaussian World Models for Robotic Manipulation

::: info 论文信息
- **Design**: GWM
- **论文全称**: GWM: Towards Scalable Gaussian World Models for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2508.17600](https://arxiv.org/abs/2508.17600)
- **GitHub**: [https://github.com/Gaussian-World-Model/gaussianwm](https://github.com/Gaussian-World-Model/gaussianwm)
:::

## 核心思想

GWM (Gaussian World Model) 提出了一个面向机器人操控的可扩展高斯世界模型。核心创新是一3D Gaussian Splatting动DGS）作为世界模型的核心表示，在 Gaussian 空间中进行高效的动力学预测和场景生成。GWM 通过"Gaussian 动作在紧凑的 3D 参数表示中模拟场景演变，实现高质量的机器人想象。

GWM 的关键优势是 Gaussian 表示的紧凑性和渲染效率——每个场景仅需数千帧Gaussians，渲染速度可达实时间0+ FPS），使世界模型能够快速产生大量想象样本用于策略训练。

## 技术架。

**Vision Encoding（视觉编码）**：多视角 RGB-D 输入通过 3DGS 重建为一个Gaussians。每个Gaussian 是一个3D 椭球体，具有位置、颜色、透明度、协方差矩阵参数。

**Knowledge Learning（知识学习）**：Gaussian Dynamics Transformer——在 Gaussian 集合上应用Point Transformer 风格的动力学预测。模型以当前 Gaussians 和机器人动作（关节角度）为条件，预测每个 Gaussian 的位移和外观变化。使用可微渲染（3DGS rasterizer）将预测的Gaussians 渲染为各视角图像，计算渲染损失。

**Controllable Simulation（可控模拟）**：给定初的Gaussian 场景和动作序列，预测 Gaussian 配置变化，从任意视角渲染未来帧。渲染的新视角图像可直接用于 visuomotor policy 训练。

## 代码实现要点

代码开源在 [Gaussian-World-Model/gaussianwm](https://github.com/Gaussian-World-Model/gaussianwm)。基准PyTorch + 3DGS rasterizer。Point Transformer + Gaussian dynamics + differentiable rendering。在 Robosuite 于Franka Kitchen 上评估。

## 关键创新。

1. **Gaussian 动力学*：在 3DGS 空间中的 Point Transformer 运动预测
2. **实时渲染想象**中0+ FPS 的未来帧生成
3. **紧凑 3D 表示**：数千个 Gaussians 表示整个场景
4. **可微渲染训练**：通过渲染损失端到端训练动力学

## 代表性结。

在Robosuite 操控任务中，GWM 生成的未来帧渲染质量（PSNR > 30dB）且渲染速度 > 30 FPS（比 2D diffusion 世界模型的100 倍）。在 Franka Kitchen 中，GWM 的rollout 的100 步内保持高几何精度。

## 核心思想

GWM (Gaussian World Model) 提出了一个面向机器人操控的可扩展高斯世界模型。核心创新是一3D Gaussian Splatting动DGS）作为世界模型的核心表示，在 Gaussian 空间中进行高效的动力学预测和场景生成。GWM 通过"Gaussian 动作在紧凑的 3D 参数表示中模拟场景演变，实现高质量的机器人想象。

GWM 的关键优势是 Gaussian 表示的紧凑性和渲染效率——每个场景仅需数千帧Gaussians，渲染速度可达实时间0+ FPS），使世界模型能够快速产生大量想象样本用于策略训练。

## 技术架。

**Vision Encoding（视觉编码）**：多视角 RGB-D 输入通过 3DGS 重建为一个Gaussians。每个Gaussian 是一个3D 椭球体，具有位置、颜色、透明度、协方差矩阵参数。

**Knowledge Learning（知识学习）**：Gaussian Dynamics Transformer——在 Gaussian 集合上应用Point Transformer 风格的动力学预测。模型以当前 Gaussians 和机器人动作（关节角度）为条件，预测每个 Gaussian 的位移和外观变化。使用可微渲染（3DGS rasterizer）将预测的Gaussians 渲染为各视角图像，计算渲染损失。

**Controllable Simulation（可控模拟）**：给定初的Gaussian 场景和动作序列，预测 Gaussian 配置变化，从任意视角渲染未来帧。渲染的新视角图像可直接用于 visuomotor policy 训练。

## 代码实现要点

代码开源在 [Gaussian-World-Model/gaussianwm](https://github.com/Gaussian-World-Model/gaussianwm)。基准PyTorch + 3DGS rasterizer。Point Transformer + Gaussian dynamics + differentiable rendering。在 Robosuite 于Franka Kitchen 上评估。

## 关键创新。

1. **Gaussian 动力学*：在 3DGS 空间中的 Point Transformer 运动预测
2. **实时渲染想象**中0+ FPS 的未来帧生成
3. **紧凑 3D 表示**：数千个 Gaussians 表示整个场景
4. **可微渲染训练**：通过渲染损失端到端训练动力学

## 代表性结。

在Robosuite 操控任务中，GWM 生成的未来帧渲染质量（PSNR > 30dB）且渲染速度 > 30 FPS（比 2D diffusion 世界模型的100 倍）。在 Franka Kitchen 中，GWM 的rollout 的100 步内保持高几何精度。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
