---
title: "CameraCtrl: Enabling Camera Control for Video Diffusion Models"
github: https://github.com/hehao13/CameraCtrl
website: https://arxiv.org/html/2404.02101v2
venue: ICLR
year: 2025
---

# CameraCtrl: Enabling Camera Control for Video Diffusion Models

::: info 论文信息
- **Venue**: ICLR (2025)
- **GitHub**: [https://github.com/hehao13/CameraCtrl](https://github.com/hehao13/CameraCtrl)
- **Website**: [https://arxiv.org/html/2404.02101v2](https://arxiv.org/html/2404.02101v2)
:::

## 学习笔记

### 核心贡献
- 首个为视频扩散 Transformer（DiT）实现相机控制的后训练方法
- 设计相机控制编码器，将相机参数（外参、内参）注入 DiT 的注意力层
- 实现了对生成视频的 6-DoF 相机运动控制

### 方法细节
- **相机参数编码**：将相机外参矩阵（旋转 + 平移）编码为条件嵌入
- **注入位置**：在 DiT 的交叉注意力层中注入相机条件，类似于 text condition 的处理方式
- **训练数据**：使用 3D 渲染引擎合成带相机标注的视频数据
- **与 VD3D 的区别**：CameraCtrl 控制 2D 视频的相机轨迹，VD3D 额外引入 3D 一致性

### 关键发现
- 相机控制能力是视频 DiT 的 emergent ability——模型在预训练中已内隐学习到 3D 空间理解
- 轻量级 LoRA + 相机编码器即可实现有效控制，无需全参数微调
- 相机运动的物理合理性与视频内容的物理合理性是解耦的——需要分别处理

### 方法归类
监督微调 — 相机控制
