---
title: "DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model"
design: "DOME"
arxiv: https://arxiv.org/abs/2410.10429
github: https://github.com/gusongen/DOME
---

# DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model

::: info 论文信息
- **Design**: DOME
- **论文全称**: DOME: Taming Diffusion Model into High-Fidelity Controllable Occupancy World Model
- **arXiv**: [https://arxiv.org/abs/2410.10429](https://arxiv.org/abs/2410.10429)
- **GitHub**: [https://github.com/gusongen/DOME](https://github.com/gusongen/DOME)
:::

## 核心思想

DOME 是提出的面向具身操控 (Embodied Manipulation) 的扩散世界模型。核心创新是将物体编码(Object Editing) 能力融入世界模型——用于策略可以根据指定的物体操作（的移动红色方块到蓝色盒子旁"），世界模型生成对应操作结果的未来场景预测。DOME 使世界模型同时具体编辑"的预测"能力。

DOME 的关键创新是"扩散编辑"：在扩散过程的中间去噪步骤，注入物体级编辑操作（如对特定物体 Region 的latent perturbation），使最终生成的场景反映编辑后的物体配置。这实现了可编程的具身场景生成。

## 技术架。

**Vision Encoding（视觉编码）**：使用VAE encoder 将观测压缩为 latent。通过 instance segmentation 的SAM 获得物体 mask。

**Knowledge Learning（知识学习）**：Diffusion-based World Model 的latent space 中学习场景动力学。模型以初始 latent 和物体编辑操作为条件——编辑操作通过 masked latent injection 在扩散过程中实现：在去噪的特地步骤，将被编辑物体区域的latent 替换为编辑后的值。

**Controllable Simulation（可控模拟）**：支持两种模式：
- Free generation：给定初始观测，自然预测未来。
- Guided editing：指定物体操作，生成对应的操作结果。

## 代码实现要点

代码开源在 [sites.google.com/view/dome-t2m](https://sites.google.com/view/dome-t2m)。基准Latent Diffusion Model + masked latent injection。在 Robosuite 于MetaWorld 上评估。

## 关键创新。

1. **扩散编辑世界模型**：在扩散去噪过程中实现物体级场景编辑
2. **Masked Latent Injection**：通过 mask 实现精确的物体操作编。
3. **可编程场景生成*：通过指定物体操作来编排场景变。
4. **Free + Guided 双重模式**：自然预测和引导编辑无缝切换

## 代表性结。

在Robosuite 上，DOME 展示了精确的物体编辑能力（物体位置编辑误图< 5 像素），同时保持场景的自然性（FID < 30）。在需要多种操作组合的复杂任务中，DOME 的编辑引导使场景配置准确保> 90%。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
