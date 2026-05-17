---
title: "Wan-Move: Motion-controllable Video Generation via Latent Trajectory Guidance"
arxiv: https://arxiv.org/abs/2512.08765
github: https://github.com/ali-vilab/Wan-Move
website: https://wan-move.github.io/
venue: NeurIPS
year: 2025
---

# Wan-Move: Motion-controllable Video Generation via Latent Trajectory Guidance

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2512.08765](https://arxiv.org/abs/2512.08765)
- **GitHub**: [https://github.com/ali-vilab/Wan-Move](https://github.com/ali-vilab/Wan-Move)
- **Website**: [https://wan-move.github.io/](https://wan-move.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Latent Trajectory Guidance（LTG），在 DiT 隐空间实现基于密集点轨迹的精细化运动控制，无需修改模型架构。
- 轨迹编码：将 2D 像素空间的密集点轨迹通过 VAE 投影至隐空间，构造与视频帧对齐的时空特征图（Spatiotemporal Feature Map）。
- 首帧特征传播（Stacked Flow）：沿轨迹将首帧的局部隐特征传播至后续帧，确保被控制区域在时序上的一致性与平滑性。
- 兼容 Wan-I2V-14B 等现有 DiT 视频模型，无需重新训练即可作为即插即用模块接入。
- 提出 MoveBench 运动控制基准，覆盖单/多目标、多相机运动，系统评估轨迹跟随能力。

### 方法细节
- 用户提供密集点轨迹（sparse/dense point trajectories），描述像素在时间轴上的运动路径。
- 轨迹经 VAE Encoder 投影至隐空间，与噪声潜在帧对齐；利用高斯热图生成空间软掩码指示受控区域。
- 将首帧隐特征沿轨迹路径复制（stack）到后续帧的对应位置，形成"运动锚点"特征。
- 该锚点特征注入 DiT 的 Cross-Attention 层作为运动引导信号，与文本条件共同驱动生成。
- 支持基于预计算光流（CoTracker）自动提取轨迹或用户手动绘制轨迹两种输入模式。

### 关键发现
- 仅靠隐空间轨迹引导即可实现与 Kling 1.5 Pro Motion Brush 相当的精细运动控制效果。
- 密集轨迹保留了局部纹理和结构的时序稳定性，显著优于基于稀疏关键点的运动控制方法。

### 方法归类
- **范式**: [DiT 隐空间运动控制 / 即插即用]
- **关键技术**: [密集点轨迹 → 隐空间投影 → 首帧特征传播 → Cross-Attention 注入]
- **适用场景**: [单/多对象精细化运动控制，局部区域动画，I2V 运动精度要求高的场景]
