---
title: "UniAnimate-DiT: Human Image Animation with Large-Scale Video Diffusion Transformer"
arxiv: https://arxiv.org/abs/2504.11289
github: https://github.com/ali-vilab/UniAnimate-DiT
website: ""
venue: arXiv
year: 2025
---

# UniAnimate-DiT: Human Image Animation with Large-Scale Video Diffusion Transformer

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2504.11289](https://arxiv.org/abs/2504.11289)
- **GitHub**: [https://github.com/ali-vilab/UniAnimate-DiT](https://github.com/ali-vilab/UniAnimate-DiT)
:::

## 学习笔记

### 核心贡献
- 基于开源 Wan2.1 大规模视频 Diffusion Transformer 构建了 UniAnimate-DiT，实现一致性强的人体图像动画生成
- 采用 LoRA 对基础模型进行参数高效微调，仅训练极小量参数，显著降低训练显存开销
- 设计了由多层 3D 卷积堆叠构成的轻量姿态编码器，高效编码驱动姿态的运动信息
- 通过简洁的拼接操作将参考图像外观信息注入模型，并引入参考图像自身姿态信息以增强姿态对齐

### 方法细节
- 基础模型为 Wan2.1（开源大模型），通过 LoRA 适配图像动画任务，保留原始模型强大的生成先验
- 姿态编码器使用多层 3D 卷积捕获驱动姿态序列的时空运动特征
- 参考图像与噪声潜在变量沿通道维度拼接（concatenation），结合参考姿态作为额外条件
- 在 480p（832×480）分辨率视频上训练，推理阶段可无缝上采样至 720p（1280×720），展现良好的分辨率泛化能力
- 训练和推理代码完全开源

### 关键发现
- LoRA 微调策略在保留 Wan2.1 先验生成能力的同时实现了高效的参数适配
- 拼接式参考注入和参考姿态条件对姿态对齐和外观保持均有关键作用
- 模型在训练时未见过的更高分辨率（720p）下仍能产生视觉逼真且时序连贯的动画

### 方法归类
- **范式**: 人体图像动画 / 姿态驱动视频生成
- **关键技术**: LoRA 微调、3D 卷积姿态编码器、参考图像拼接注入、Diffusion Transformer（Wan2.1）
- **适用场景**: 数字人驱动、虚拟主播、电影/游戏角色动画生成、视频会议虚拟形象
