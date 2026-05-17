---
title: "UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving"
design: "UniMLVG"
arxiv: https://arxiv.org/abs/2412.04842
github: https://github.com/SenseTime-FVG/OpenDWM
---

# UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving

::: info 论文信息
- **Design**: UniMLVG
- **论文全称**: UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2412.04842](https://arxiv.org/abs/2412.04842)
- **GitHub**: [https://github.com/SenseTime-FVG/OpenDWM](https://github.com/SenseTime-FVG/OpenDWM)
:::

## 学习笔记

## 核心思想

UniMLVG 是商汤提出的统一多视角长时驾驶视频生成框架，旨在解决自动驾驶感知和规划系统对**多样化、逼真驾驶场景**的需求。生成环绕视图一致的长时驾驶视频一直是一个重大挑战，UniMLVG 通过精确控制下的扩展街景多视角视频生成来应对这一挑战。
核心设计包括三个方面的1) 将单视角和多视角驾驶视频统一融入训练数据，通过多训练目标的**三阶段训练*更新 DiT 扩散模型（配备跨帧和跨视角模块），大幅提升生成内容的多样性和质量键2) 创新是*显式视角建模**方法，有效改善多视图视频生成中的运动过渡一致性；(3) 支持多种输入参考格式（文本、图像或视频），根据 3D 边界框或帧级文本描述等条件约束生成高质量多视角视频。
UniMLVG eFID 上比同类最强模型提出**48.2%**，FVD 提升 **35.2%**。
## 技术架。
**Vision Encoding（视觉编码）**：DiT 扩散模型配备跨帧模块（处理时间维度）和跨视角模块（处理多相机空间一致性）。显式视角建模方法为每个相机视角建立明确的几何关系，确保运动过渡在多视角间一致。
**Knowledge Learning（世界知识学习）**：三阶段训练策略——逐步引入多目标训练，从基础生成质量到视角一致性再到细粒度控制。单视角和多视角驾驶视频的联合训练使模型同时学习单路质量和多路一致性。
**Controllable Simulation（可控推演）**：支持多种控制信号：3D 边界框（指定场景中物体的位置和运动）、帧级文本描述（逐帧语义控制）。支持多种输入参考格式——文本、图像或视频——灵活适应不同的生成需求。
## 代码实现要点

- DiT 扩散模型 + 跨帧模块 + 跨视角模型- 三阶段训练：多目标逐步引入
- 显式视角建模：确保多视图运动过渡一致性- 多种输入格式：文本、图像、视频均可作为条件- 开源在 SenseTime-FVG/OpenDWM

## 关键创新。
- 统一单视角和多视角驾驶视频训练的三阶段框架- 显式视角建模有效改善多视图运动过渡一致的- DiT 跨帧+跨视角模块设分- 支持文本、图像、视频多种输入格的- 3D BBox 和帧级文本等多种控制信号

## 代表性结。
- FID 提升 48.2%（与同类最强模型对比）
- FVD 提升 35.2%
- 多视角长时驾驶视频生成- 多种输入格式和多种控制信号支。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
