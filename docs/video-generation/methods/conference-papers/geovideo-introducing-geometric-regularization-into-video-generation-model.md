---
title: "GeoVideo: Introducing Geometric Regularization into Video Generation Model"
arxiv: https://arxiv.org/abs/2512.03453v1
github: https://github.com/yunpeng1998/GeoVideo
website: https://geovideo.github.io/GeoVideo/
venue: NeurIPS
year: 2025
---

# GeoVideo: Introducing Geometric Regularization into Video Generation Model

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2512.03453v1](https://arxiv.org/abs/2512.03453v1)
- **GitHub**: [https://github.com/yunpeng1998/GeoVideo](https://github.com/yunpeng1998/GeoVideo)
- **Website**: [https://geovideo.github.io/GeoVideo/](https://geovideo.github.io/GeoVideo/)
:::

## 学习笔记

### 核心贡献
- 首次将多视图几何损失引入视频扩散模型训练，通过在共享 3D 坐标系中对齐各帧深度预测来强制结构一致性
- 以深度图作为几何代理表征，利用深度预测网络为每帧提供 3D 结构监督，在不修改生成模型架构的前提下桥接外观生成与 3D 结构建模
- 提出训练时注入几何正则化、推理时零额外开销的即插即用范式

### 方法细节
- 利用预训练深度预测网络为视频生成模型输出的每帧 RGB 估计深度图 $D_t$
- 在共享 3D 坐标系中构建帧间多视图几何对齐损失，约束不同帧的深度预测在 3D 空间保持一致
- 几何损失与原有扩散损失联合优化反向传播至生成模型，迫使网络学习 3D 一致的视频内容
- 深度作为几何表征，得益于深度估计技术的成熟度和与图像潜在编码器的天然兼容性
- 训练结束后深度预测网络可移除，推理阶段不增加额外计算

### 关键发现
- 几何正则化有效减少了纯 2D 像素空间建模带来的时序不一致、不合理运动和结构伪影
- 仅通过损失层面的几何监督即可显著改善时空一致性、形状一致性和物理合理性，无需改变模型架构

### 方法归类
- **范式**: 几何正则化驱动的视频生成（训练时注入 3D 结构先验，推理时零额外开销）
- **关键技术**: 多视图几何损失、逐帧深度预测、共享 3D 坐标对齐、训练时结构监督
