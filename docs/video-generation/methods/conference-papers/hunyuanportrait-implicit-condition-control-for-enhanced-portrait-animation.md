---
title: "HunyuanPortrait: Implicit Condition Control for Enhanced Portrait Animation"
arxiv: https://arxiv.org/abs/2503.18860
github: https://github.com/kkakkkka/HunyuanPortrait
website: https://kkakkkka.github.io/HunyuanPortrait/
venue: CVPR
year: 2025
---

# HunyuanPortrait: Implicit Condition Control for Enhanced Portrait Animation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2503.18860](https://arxiv.org/abs/2503.18860)
- **GitHub**: [https://github.com/kkakkkka/HunyuanPortrait](https://github.com/kkakkkka/HunyuanPortrait)
- **Website**: [https://kkakkkka.github.io/HunyuanPortrait/](https://kkakkkka.github.io/HunyuanPortrait/)
:::

## 学习笔记

### 核心贡献
- 提出 HunyuanPortrait，一种基于隐式表示的条件控制方法，实现高可控性和逼真度的人像动画生成（已入选 CVPR 2025）。
- 利用预训练编码器实现视频中运动信息与身份信息的解耦，采用隐式表示编码运动信息作为动画阶段的控制信号。
- 以 Stable Video Diffusion 为核心骨干，精心设计适配器层通过注意力机制将控制信号注入去噪 UNet，兼顾空间细节丰富性与时间一致性。

### 方法细节
- 给定单张人像作为外观参考和一段视频作为驱动模板，模型将参考图中人物的面部表情和头部姿态按驱动视频进行动画化。
- 采用预训练编码器对视频进行运动与身份的显式解耦，将运动信息压缩为隐式表示向量。
- 隐式表示作为条件控制信号，通过专门设计的 adapter 层注入 Stable Video Diffusion 的去噪 UNet，利用交叉注意力与自注意力机制传递控制信息。
- Adapter 层设计兼顾空间维度上的细节保真和时间维度上的帧间连贯性，避免单独注入导致的模糊或抖动。
- 该方法无需对参考图像和驱动视频的特定风格进行微调，具备开箱即用的泛化能力。

### 关键发现
- HunyuanPortrait 能够生成高度逼真且可控的人像动画，表情迁移和头部运动与驱动视频高度一致。
- 隐式表示作为控制信号相比显式关键点或稠密运动场更具鲁棒性，能有效捕捉细微的面部运动变化。
- 模型在不同图像风格（写实、插画、油画等）下均表现良好，验证了外观与运动解耦的泛化效果。

### 方法归类
- 属于人像动画（Portrait Animation）方向，核心思路为隐式条件控制与运动-身份解耦。
- 可归类为“基于扩散模型的可控视频生成”（Diffusion-Based Controllable Video Generation），与 adapter 注入、注意力机制控制等主流范式一致。
