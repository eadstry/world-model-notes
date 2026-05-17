---
title: "4DNeX: Feed-Forward 4D Generative Modeling Made Easy"
arxiv: https://arxiv.org/abs/2508.13154v1
github: https://github.com/3DTopia/4DNeX
website: https://4dnex.github.io/
venue: arXiv
year: 2025
---

# 4DNeX: Feed-Forward 4D Generative Modeling Made Easy

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2508.13154v1](https://arxiv.org/abs/2508.13154v1)
- **GitHub**: [https://github.com/3DTopia/4DNeX](https://github.com/3DTopia/4DNeX)
- **Website**: [https://4dnex.github.io/](https://4dnex.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出首个 Feed-Forward 式图像到 4D 生成框架，无需逐场景优化即可从单张输入图像直接生成动态 3D 场景（4D = 3D 空间 + 时间维度）
- 构建了 4DNeX-10M 大规模 4D 数据集，包含约 1000 万个动态 3D 场景，覆盖多样化的物体类别与运动模式，为 4D 生成提供数据基础
- 提出统一的 6D 视频表示（RGB + XYZ），将传统 RGB 视频与对应深度/坐标信息联合编码为 6 通道视频，使预训练视频扩散模型可直接适配到 4D 生成任务
- 通过极简适配策略（Simple Adaptation Strategies）将预训练视频扩散模型改造为 4D 生成器，无需从头训练 4D 原生架构

### 方法细节
- 6D 视频表示的核心思想：将 3D 场景的动态点云渲染为多视角 RGB 图及其对应的 XYZ 坐标图，沿视角维度拼接形成 6 通道「视频」，统一了外观（RGB）和几何（XYZ）信息
- 输入处理：给定一张 RGB 参考图像，首先利用预训练深度估计模型获得初始 3D 信息，然后通过扩散模型生成该物体在新视角下的外观 + 几何（即 6D 表示的新帧）
- 训练策略：将预训练的视频扩散模型（如 Stable Video Diffusion）的输入通道从 3（RGB）扩展为 6（RGB+XYZ），仅需微调输入层和少量适配层，冻结大部分主干参数
- 数据构造流水线：从 Objaverse 等 3D 模型库出发，利用物理仿真（运动生成）+ 多视角渲染（外观和坐标图），全自动化生成 4DNeX-10M 数据集
- 推理过程为纯 Feed-Forward，无需测试时优化，单次前向传播即可输出完整的动态 3D 场景，可进一步渲染为任意视角的 RGB 视频

### 关键发现
- 6D 表示使得预训练视频扩散模型对 4D 内容的适配成本极低——仅需改造输入层，模型内部的时间/空间注意力机制即可自动学习到 3D 一致性
- Feed-Forward 方法相比逐场景优化方案（如 DreamFusion）在速度上有数量级优势，同时生成质量并未显著下降，展示了「通用先验 + 轻量适配」路线的有效性

### 方法归类
- **范式**: Feed-Forward 生成（基于预训练视频扩散模型适配）
- **关键技术**: 6D 视频表示（RGB+XYZ）、大规模 4D 数据集构造、通道扩展微调
- **适用场景**: 动态 3D 内容生成、新视角视频合成、VR/AR 动态场景创建、3D 素材自动化生产
