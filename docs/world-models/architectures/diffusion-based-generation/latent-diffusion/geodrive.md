---
title: "GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control"
design: "GeoDrive"
arxiv: https://arxiv.org/abs/2505.22421
github: https://github.com/antonioo-c/GeoDrive
---

# GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control

::: info 论文信息
- **Design**: GeoDrive
- **论文全称**: GeoDrive: 3D Geometry-Informed Driving World Model with Precise Action Control
- **arXiv**: [https://arxiv.org/abs/2505.22421](https://arxiv.org/abs/2505.22421)
- **GitHub**: [https://github.com/antonioo-c/GeoDrive](https://github.com/antonioo-c/GeoDrive)
:::

## 核心思想

GeoDrive 是上下AI Lab 提出的面向自动驾驶的"几何感知"世界模型。核心创新是在扩散世界模型中注入显式的3D 几何信息——模型不盲目生成像素，而是理解场景中3D 结构（深度、法线、物体几何），生成具有几何合理性的未来预测。

GeoDrive 的关键贡献是"几何引导生成"：在扩散去噪过程的每一步，几何信息（无论是已知的还是估计的深度和法线）被注入去噪过程以约束生成结果的几何合理性。这使得生成场景中建筑物的深度关系、道路的透视和物体的空间位置都是几何正确的。

## 技术架。

**Vision Encoding（视觉编码）**：多视图图像通过深度估计网络和法线估计网络提供3D 几何特征。这些特征与 RGB 特征融合。

**Knowledge Learning（知识学习）**：Geometry-aware Video Diffusion——在扩散 UNet 的每个去噪步骤中的D 几何特征（depth、normal）通过 spatial feature modulation 注入。深度特征控制空间布局，法线特征控制表面朝向。使得生成的帧维持几何准确性。

**Controllable Simulation（可控模拟）**：通过显式控制几何特征（如改变 depth map 中某区域）实现精细的场景编辑。

## 代码实现要点

代码开源在 [OpenDriveLab/GeoDrive](https://github.com/OpenDriveLab/GeoDrive)。基准Video Diffusion + Depth/Normal encoders。在 nuScenes 上评估。

## 关键创新。

1. **几何感知世界模型**：将 3D 几何注入扩散去噪
2. **深度+法线引导**：双几何信号约束生成合理。
3. **空间一致性保持*：几何约束防止了空间扭曲
4. **可编辑几何*：通过修改几何特征编辑生成场景

## 代表性结。

在 nuScenes 上，GeoDrive 生成场景的几何精确度（深度误差、法线误差）比纯 RGB 扩散模型的40%。生成帧中建筑物的空间关系保持正确（不出了浮空"间塌缩"的几何错误）。几何感知生成显著改善了远距离和边缘区域的预测质量。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
