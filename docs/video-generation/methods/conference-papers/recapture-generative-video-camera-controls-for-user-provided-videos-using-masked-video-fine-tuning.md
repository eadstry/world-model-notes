---
title: "ReCapture: Generative Video Camera Controls for User-Provided Videos using Masked Video Fine-Tuning"
arxiv: https://arxiv.org/abs/2411.05003
website: https://generative-video-camera-controls.github.io/
venue: CVPR
year: 2025
---

# ReCapture: Generative Video Camera Controls for User-Provided Videos using Masked Video Fine-Tuning

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2411.05003](https://arxiv.org/abs/2411.05003)
- **Website**: [https://generative-video-camera-controls.github.io/](https://generative-video-camera-controls.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 ReCapture，一种从单段用户提供视频生成具有全新相机轨迹视频的方法，无需视频模型生成即可直接处理任意真实视频。
- 能够以电影级相机运动从完全不同角度重新生成参考视频，同时保留其中的场景运动，并合理幻觉参考视频中不可见的部分场景内容。

### 方法细节
- 第一阶段：使用多视角扩散模型或基于深度的点云渲染生成具有新相机轨迹的噪声锚点视频。
- 第二阶段：提出掩码视频微调技术，将锚点视频重新生成为干净、时序一致的重视角视频。

### 关键发现
- 首次实现对用户提供的任意真实视频进行生成式相机控制，显著扩展了视频相机控制方法的应用范围。
- 掩码视频微调有效抑制了锚点视频中的噪声和伪影，输出高质量的重视角结果。

### 方法归类
- **范式**: 两阶段生成式视频相机控制
- **关键技术**: 多视角扩散模型 / 深度点云渲染、掩码视频微调
- **适用场景**: 用户提供的任意真实视频的相机重定向、重视角和新视角生成
