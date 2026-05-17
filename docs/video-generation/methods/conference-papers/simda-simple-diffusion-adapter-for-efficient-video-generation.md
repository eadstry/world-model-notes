---
title: "SimDA: Simple Diffusion Adapter for Efficient Video Generation"
arxiv: https://arxiv.org/abs/2308.09710
github: https://github.com/ChenHsing/SimDA
website: https://chenhsing.github.io/SimDA/
venue: CVPR
year: 2024
---

# SimDA: Simple Diffusion Adapter for Efficient Video Generation

::: info 论文信息
- **Venue**: CVPR (2024)
- **arXiv**: [https://arxiv.org/abs/2308.09710](https://arxiv.org/abs/2308.09710)
- **GitHub**: [https://github.com/ChenHsing/SimDA](https://github.com/ChenHsing/SimDA)
- **Website**: [https://chenhsing.github.io/SimDA/](https://chenhsing.github.io/SimDA/)
:::

## 学习笔记

### 核心贡献
- 提出 SimDA，一种轻量级视频生成适配方法，仅微调 Stable Diffusion 11 亿参数中的 2400 万，即可将其从 T2I 高效迁移至 T2V
- 设计 Latent-Shift Attention (LSA) 机制，在不增加额外参数的前提下实现帧间时序一致性

### 方法细节
- 将 T2I 模型的 UNet 扩展为 video UNet，插入轻量级空间适配器（spatial adapter）和时序适配器（temporal adapter），前者对齐图像分布，后者建模帧间运动信息
- LSA 对原始空间注意力中的 key/value 特征沿时间维度进行 latent shift 操作，使每帧能够融合相邻帧的上下文信息，保证时序平滑性
- 训练独立视频超分模型（同样基于 adapter 架构），将低分辨率输出上采样至 1024×1024 高清视频

### 关键发现
- SimDA 仅需 3 天单卡训练即可完成 T2V 模型适配，训练效率显著优于从头训练或全参数微调方案
- 在无需额外训练的条件下，SimDA 可直接用于 one-shot 视频编辑任务，仅需 2 分钟调优即可适配特定视频

### 方法归类
- **范式**: 参数高效微调 / Adapter-based Transfer Learning
- **关键技术**: Spatial-Temporal Adapter、Latent-Shift Attention (LSA)、Video Super-Resolution
- **适用场景**: 文到视频生成、视频编辑、计算资源受限场景下的视频模型微调
