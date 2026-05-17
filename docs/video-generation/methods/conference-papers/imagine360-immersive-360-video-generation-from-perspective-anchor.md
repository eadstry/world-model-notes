---
title: "Imagine360: Immersive 360 Video Generation from Perspective Anchor"
arxiv: https://arxiv.org/abs/2412.03552
github: https://github.com/3DTopia/Imagine360
website: https://ys-imtech.github.io/projects/Imagine360/
venue: NeurIPS
year: 2025
---

# Imagine360: Immersive 360 Video Generation from Perspective Anchor

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2412.03552](https://arxiv.org/abs/2412.03552)
- **GitHub**: [https://github.com/3DTopia/Imagine360](https://github.com/3DTopia/Imagine360)
- **Website**: [https://ys-imtech.github.io/projects/Imagine360/](https://ys-imtech.github.io/projects/Imagine360/)
:::

## 学习笔记

### 核心贡献
- 提出了 Imagine360，首个从透视视频锚点生成高质量 360° 等距矩形视频的框架，使得用户仅需提供普通透视视频即可获得具有丰富多样运动模式的沉浸式全景视频。
- 针对 360° 视频数据稀缺的问题，通过双分支设计、对映体掩码和仰角感知机制三种关键设计，在有限 360° 视频数据上学习细粒度的球形视觉与运动模式。

### 方法细节
- 采用双分支去噪架构，包含一个透视视频去噪分支和一个全景视频去噪分支，分别提供局部细节约束和全局空间一致性约束，二者协同引导 360° 视频的生成过程。
- 在全景分支中引入运动模块和空间 LoRA 层，并在扩展的网络 360° 视频数据上进行微调，以捕获全景空间中的时序运动模式。
- 设计了对映体掩码机制，用于捕获跨半球的远程运动依赖关系，增强对映体像素之间因相机反转运动而产生的运动一致性。
- 提出了仰角感知设计，使模型能够适应不同帧之间因拍摄仰角变化而导致的视频遮罩变化，从而泛化到多样化的透视视频输入。

### 关键发现
- 双分支设计中的局部与全局约束互补，是保证 360° 视频空间连续性和时序一致性的关键因素；相比于单分支架构，双分支方案在球面失真和边缘接缝处有明显改善。
- 对映体掩码有效缓解了等距矩形投影下远程像素之间的运动不连续问题，显著降低了半球边界处的伪影，提升了全景视频的整体观看沉浸感。
- 仰角感知机制使模型在输入视频含仰角变化的场景下仍能保持稳定的生成质量，拓展了方法的实际应用范围。

### 方法归类
- 属于沉浸式视频生成与 360° 全景视频合成方向，核心目标是从标准透视视频信号中重建全周围动态场景。
- 方法学定位为基于扩散模型的视频到视频翻译与跨视角生成，融合了运动建模、空间适配和投影几何感知等多种技术。
