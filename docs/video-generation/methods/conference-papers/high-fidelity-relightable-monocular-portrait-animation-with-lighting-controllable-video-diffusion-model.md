---
title: "High-Fidelity Relightable Monocular Portrait Animation with Lighting-Controllable Video Diffusion Model"
arxiv: https://arxiv.org/abs/2502.19894
github: https://github.com/MingtaoGuo/Relightable-Portrait-Animation
website: https://mingtaoguo.github.io/
venue: CVPR
year: 2025
---

# High-Fidelity Relightable Monocular Portrait Animation with Lighting-Controllable Video Diffusion Model

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2502.19894](https://arxiv.org/abs/2502.19894)
- **GitHub**: [https://github.com/MingtaoGuo/Relightable-Portrait-Animation](https://github.com/MingtaoGuo/Relightable-Portrait-Animation)
- **Website**: [https://mingtaoguo.github.io/](https://mingtaoguo.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 LCVD（Lighting Controllable Video Diffusion），首个支持可重光照的人像动画扩散模型，在生成动态人像的同时允许用户指定光照条件。
- 通过特征子空间解耦策略，将人像的内在属性（身份、外观）与外在属性（姿态、光照）分离，突破现有方法无法独立控制光照的局限。
- 利用三维网格、姿态信息和光照渲染的 shading hints 作为外在属性的显式表示，实现对光照、姿态和表情的精细控制。

### 方法细节
- 以预训练的图像到视频扩散模型为基础，在特征空间中定义内在特征子空间与外在特征子空间，分别承载身份外观信息与姿态光照信息。
- 设计 Reference Adapter，将静态参考肖像映射到内在特征子空间，保留身份和外观一致性。
- 设计 Shading Adapter，将光照渲染的 shading hints 映射到外在特征子空间，注入姿态与光照控制信号。
- 训练阶段通过合并两个子空间的特征，使模型学会在生成动画时解耦并独立操控光照、姿态与表情。
- 所有适配器模块均以可学习的方式插入扩散模型，无需重新训练基础模型。

### 关键发现
- LCVD 在光照真实感、图像质量和视频一致性三个维度上均超越现有最先进的人像动画方法。
- 内在与外在特征的显式子空间解耦是达成可重光照效果的关键设计，简单的特征拼接或隐式混合无法实现同等水平的可控性。
- 该方法支持用户指定的任意光照条件，同时保持驱动视频中的头部运动和表情，展现出高保真和灵活的可控生成能力。

### 方法归类
- 属于人像动画（Portrait Animation）方向，强调光照可控的视频扩散生成。
- 可归类为“可控视频生成”（Controllable Video Generation），在特征解耦、适配器注入和多条件融合等技术与现有条件视频扩散模型一脉相承。
