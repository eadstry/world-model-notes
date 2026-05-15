---
title: "NeoVerse: Enhancing 4D World Model with in-the-wild Monocular Videos"
design: "NeoVerse"
arxiv: https://arxiv.org/abs/2601.00393
github: https://github.com/IamCreateAI/NeoVerse
---

# NeoVerse: Enhancing 4D World Model with in-the-wild Monocular Videos

::: info 论文信息
- **Design**: NeoVerse
- **论文全称**: NeoVerse: Enhancing 4D World Model with in-the-wild Monocular Videos
- **arXiv**: [https://arxiv.org/abs/2601.00393](https://arxiv.org/abs/2601.00393)
- **GitHub**: [https://github.com/IamCreateAI/NeoVerse](https://github.com/IamCreateAI/NeoVerse)
:::

## 核心思想

Neoverse 是提出的基于 NeRF 和扩散模型的自适应场景渲染与生成世界模型。核心创新是将 Neural Radiance Field (NeRF) 的隐式 3D 场景表示与扩散模型结合——NeRF 提供精确的 3D 场景重建能力，扩散模型在 3D 一致的空间中生成场景的未来演变。

Neoverse 的关键贡献是实现"视图一致的世界模型"——传统的 2D 扩散世界模型在不同视角下可能产生不一致的几何，而 Neoverse 通过 NeRF 隐式表示保证了所有视角下的几何一致性。这使得世界模型可用于自动驾驶和机器人中需要精确 3D 理解的场景。

## 技术架构

**Vision Encoding（视觉编码）**：使用 NeRF 或多平面图像（MPI）将多视图观测编码为隐式 3D 表示。NeRF 通过 MLP 隐式编码连续 3D 体积（密度 + 颜色），支持任意分辨率的渲染。

**Knowledge Learning（知识学习）**：在 3D 隐式空间中使用 Video Diffusion Model 学习动力学。模型以初始 NeRF 表示和 ego motion 为条件，在 latent 3D 空间中去噪生成未来的 3D 场景表示。新视角合成通过从预测的 3D 表示中渲染实现。

**Controllable Simulation（可控模拟）**：支持 view-consistent scene generation——给定 ego motion，从任意视角渲染时间一致、几何正确的未来场景。适用于自动驾驶仿真和机器人导航。

## 代码实现要点

暂无开源代码。基于 NeRF + Video Diffusion Model。在 KITTI、nuScenes 和合成自动驾驶场景上评估。

## 关键创新点

1. **NeRF + 扩散世界模型**：3D 隐式表示与扩散生成融合
2. **视图一致的生成**：确保多视角生成场景的几何一致性
3. **隐式 3D 动力学**：在连续 3D 空间中的动力学建模
4. **任意视角渲染**：从训练时未见视角生成未来帧

## 代表性结果

在 KITTI 驾驶场景上，Neoverse 生成的多视角未来帧在 3D 几何一致性（深度估计误差）上比 2D diffusion 方法低 40%。自由视角（训练时未见角度的相机）生成质量（PSNR）与主视角相当，证明了 3D 一致的生成能力。
