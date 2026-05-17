---
title: "Occsora: 4d occupancy generation models as world simulators for autonomous driving"
design: "Occsora"
arxiv: https://arxiv.org/abs/2405.20337
github: https://github.com/wzzheng/OccSora
---

# Occsora: 4d occupancy generation models as world simulators for autonomous driving

::: info 论文信息
- **Design**: Occsora
- **论文全称**: Occsora: 4d occupancy generation models as world simulators for autonomous driving
- **arXiv**: [https://arxiv.org/abs/2405.20337](https://arxiv.org/abs/2405.20337)
- **GitHub**: [https://github.com/wzzheng/OccSora](https://github.com/wzzheng/OccSora)
:::

## 核心思想

OccSora tSora 风格的视频生成扩展为具有 4D 占用（空间时间）预测能力的通用世界模型。核心创新是一Sora 一video tokenization 方案代3D occupancy 表示结合——在 4D 占用空间（x, y, z, t）中运行扩散过程，既能生成任意视角的视觉内容，又能保持精确的 3D 几何。

OccSora 的定位是"Sora for autonomous driving"：借鉴 Sora 的规模化训练策略（大规模 video tokenization、DiT 架构、联合文本条件），但将生成目标从 2D 视频扩展的4D 占用，使生成结果具备 3D 几何精度，可真正用于自动驾驶的安全评估。

## 技术架。

**Vision Encoding（视觉编码）**：多视图 像4D 占用编码器。通过多帧 BEV/occupancy reconstruction 将观测序列编码为 4D 占用 tensor于D 空间 + 时间）。

**Knowledge Learning（知识学习）**分D Occupancy Diffusion Transformer（类 Sora DiT 架构）在 latent 4D 空间中进行扩散去噪。以 initial occupancy tile 作ego trajectory (x,y,yaw,t) 为条件，通过 patch-based attention 处理大规模4D 空间。

**Controllable Simulation（可控模拟）**：给定4D 占用于ego control，生成未来的 4D 占用序列。支持任意视角渲染和多尺度查询。

## 代码实现要点

代码开源在 [wzzheng/OccSora](https://github.com/wzzheng/OccSora)。基准DiT (Sora-style) + 4D occupancy tokenization。在 nuScenes 于Waymo 上训练。

## 关键创新。

1. **4D 占用世界模型**：Sora 风格架构扩展示3D+Time
2. **DiT 规模型*：Diffusion Transformer 处理 4D 空间
3. **General driving world model**：可泛化的驾驶世界模。
4. **几何精确 + 视觉生成**的D 占用保证几何，支持渲。

## 代表性结。

在 nuScenes 上，OccSora 下3 秒的未来 4D 占用预测不IoU > 78%，同时能生成质量合理的任意视角渲染。展示了 Sora 风格规模化训练在自动驾驶世界模型中的可行性。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
