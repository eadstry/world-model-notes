---
title: "LiON-LoRA: Rethinking LoRA Fusion to Unify Controllable Spatial and Temporal Generation for Video Diffusion"
arxiv: https://arxiv.org/abs/2507.05678
website: https://fuchengsu.github.io/lionlora.github.io/
venue: ICCV
year: 2025
---

# LiON-LoRA: Rethinking LoRA Fusion to Unify Controllable Spatial and Temporal Generation for Video Diffusion

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2507.05678](https://arxiv.org/abs/2507.05678)
- **Website**: [https://fuchengsu.github.io/lionlora.github.io/](https://fuchengsu.github.io/lionlora.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 LiON-LoRA 框架，基于三个核心原则——线性可扩展性（Linear scalability）、正交性（Orthogonality）和范数一致性（Norm consistency）——重新设计 LoRA 融合机制，解决多 LoRA 组合控制中融合不稳定和非线性扩展的问题。
- 在扩散变换器（DiT）架构中引入可控 Token，通过改进的自注意力机制实现相机轨迹与物体运动的线性、解耦控制。
- 利用静态相机视频将 LiON-LoRA 扩展至时间维度的生成控制，统一了空间可控生成与时间可控生成的框架。

### 方法细节
- 通过分析 VDM 浅层中 LoRA 特征的正交性，发现浅层 LoRA 表示天然具有解耦特性，基于此设计了保持正交性的 LoRA 融合策略，使不同运动属性的控制互不干扰。
- 在 DiT 中引入可控 Token，以标量形式线性调节运动振幅，配合修改后的自注意力模块，使同一 LoRA 融合可同时控制相机运动和物体运动，且二者在特征空间中保持解耦。
- 范数一致性约束在跨层 LoRA 融合时强制执行，确保不同深度的 LoRA 特征在融合后保持统一的范数尺度，避免深层特征因数值不稳定而偏离控制目标。
- 时间生成扩展方面，使用仅含静态相机视角的视频训练时间维度的 LoRA，使模型在推理时可通过调节同一个可控 Token 独立控制时间动态的强度。
- 方法仅需少量训练数据即可实现泛化，支持多种相机运动（如平移、旋转、缩放）和物体运动的任意组合。

### 关键发现
- LiON-LoRA 在轨迹控制精度和运动强度可调性上均超越现有 SOTA 方法，能够在同一模型中实现精细的相机轨迹与物体运动联合控制。
- 正交性和范数一致性设计有效消除了多 LoRA 融合时的冲突和退化问题，使复杂运动组合（如旋转 + 平移 + 物体移动）的控制效果保持稳定。
- 时间生成扩展表明，通过静态相机视频训练的 LoRA 可赋予预训练 VDM 可控的时间动态生成能力，实现了空间控制与时间控制的统一建模。

### 方法归类
- 属于可控视频生成方向下的参数高效微调方法，以 LoRA 融合为核心实现多属性解耦控制，与 ControlNet、VideoComposer 等以附加模块实现控制的路线互补。
- 将空间可控（相机轨迹 + 物体运动）与时间可控（动态程度）统一到同一框架中，是视频扩散模型可控性研究中的重要架构创新。
