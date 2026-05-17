---
title: "Panacea: Panoramic and controllable video generation for autonomous driving"
design: "Panacea"
arxiv: https://arxiv.org/abs/2311.16813
github: https://github.com/wenyuqing/panacea
---

# Panacea: Panoramic and controllable video generation for autonomous driving

::: info 论文信息
- **Design**: Panacea
- **论文全称**: Panacea: Panoramic and controllable video generation for autonomous driving
- **arXiv**: [https://arxiv.org/abs/2311.16813](https://arxiv.org/abs/2311.16813)
- **GitHub**: [https://github.com/wenyuqing/panacea](https://github.com/wenyuqing/panacea)
:::

## 核心思想

Panacea 是提出的面向自动驾驶文全景"世界模型——通过融合全景 BEV 占用来生成多视角一致的未来帧。核心创新是使用 BEV 作为中间"全景"表示，在所有视角间建立统一的几何桥梁，使多视图生成具有内在于3D 一致性。

Panacea 的关键贡献是提出了BEV as universal representation"：不在多视图像素空间中直接操作，而是一BEV 空间中操作——BEV 是一个视角无关的几何基座，使模型能用同一套动力学处理任意数量的相机视角。生成时间BEV 渲染到各视角，自然保证多视图一致性。

## 技术架。

**Vision Encoding（视觉编码）**：多视图图像通过 LSS/BEVFormer encoder 提升为统一个BEV 表示。BEV 包含 occupancy、semantic 个flow 信息。

**Knowledge Learning（知识学习）**：在 BEV 空间中使用Video Diffusion Model 学习场景动力学。模型以初始 BEV 化ego trajectory 为条件，去噪生成未来代BEV 表示。未来帧通过从预测的 BEV 中投影渲染回各视角获得。

**Controllable Simulation（可控模拟）**：给定ego trajectory，生成未来BEV，然后渲染到任意视角（包括训练中未见过的视角）。实现了"全景感知"的驾驶仿真。

## 代码实现要点

代码开源在 [wenyu0209/Panacea](https://github.com/wenyu0209/Panacea)。基准LSS BEV encoder + BEV Diffusion。在 nuScenes 上评估。

## 关键创新。

1. **BEV 全景世界模型**：在 BEV 空间统一处理多视。
2. **视角无关动力的*：BEV 动力学天然支持任意视。
3. **显式 3D 一致的*：BEV→Image 投影保证多视图几何一。
4. **任意视角生成**：可渲染训练中未见视角的未来。

## 代表性结。

在 nuScenes 上，Panacea 的BEV IoU 预测上准确率和75%+，渲染的 6 视图未来帧展现出时空一致性。与逐视角独立生成相比，Panacea 的多视图几何一致性（对极误差）降低60%。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
