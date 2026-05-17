---
title: "Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling"
arxiv: https://arxiv.org/abs/2507.07982v1
github: https://github.com/CIntellifusion/GeometryForcing
website: https://GeometryForcing.github.io
venue: ICLR
year: 2026
---

# Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2507.07982v1](https://arxiv.org/abs/2507.07982v1)
- **GitHub**: [https://github.com/CIntellifusion/GeometryForcing](https://github.com/CIntellifusion/GeometryForcing)
- **Website**: [https://GeometryForcing.github.io](https://GeometryForcing.github.io)
:::

## 学习笔记

### 核心贡献
- 揭示了纯视频数据训练的视频扩散模型难以自发学习有意义的几何感知表征，并提出 Geometry Forcing 方法弥合视频扩散与 3D 世界的鸿沟
- 通过将视频扩散模型的中间表征与几何基础模型的特征对齐，使扩散模型内化 3D 几何结构，提升生成视频的空间一致性

### 方法细节
- 核心思路：在视频扩散模型训练过程中，引入来自几何基础模型（如深度估计或 3D 重建模型）的几何特征作为监督信号，引导扩散模型的中间层学习几何感知表征
- Angular Alignment 目标：通过余弦相似度约束扩散特征与几何特征的方向一致性，确保两个特征空间的向量方向对准
- Scale Alignment 目标：对归一化后的扩散特征回归预测几何特征，保留几何信息的尺度相关分量
- 两种对齐目标互为补充，分别从方向一致性和尺度保真两个维度将 3D 信息注入扩散模型

### 关键发现
- 在相机视角条件生成和动作条件生成两类任务上均取得显著的视觉质量与 3D 一致性提升，验证了方法的通用性
- 几何对齐训练为模型引入了对场景深度、遮挡关系和物体空间布局的隐式理解，使生成视频的跨帧几何关系更加合理

### 方法归类
- **研究方向**: 3D 感知视频生成、世界模型
- **技术路线**: 以几何基础模型的特征为监督，通过表征对齐将 3D 先验注入视频扩散模型，属于训练阶段的正则化方法
