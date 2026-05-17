---
title: "RealCam-I2V: Real-World Image-to-Video Generation with Interactive Complex Camera Control"
arxiv: https://arxiv.org/abs/2502.10059
github: https://github.com/ZGCTroy/RealCam-I2V
website: https://zgctroy.github.io/RealCam-I2V/
venue: ICCV
year: 2025
---

# RealCam-I2V: Real-World Image-to-Video Generation with Interactive Complex Camera Control

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2502.10059](https://arxiv.org/abs/2502.10059)
- **GitHub**: [https://github.com/ZGCTroy/RealCam-I2V](https://github.com/ZGCTroy/RealCam-I2V)
- **Website**: [https://zgctroy.github.io/RealCam-I2V/](https://zgctroy.github.io/RealCam-I2V/)
:::

## 学习笔记

### 核心贡献
- 提出 RealCam-I2V，一个基于扩散模型的图像到视频生成框架，支持用户在真实世界图像上通过交互式 3D 场景拖拽绘制复杂相机轨迹。
- 引入单目度量深度估计作为预处理步骤，解决用户在缺乏深度和场景尺度的任意真实图像上无法提供精确相机参数的实际部署难题。

### 方法细节
- 训练阶段：利用重建的 3D 场景将相机参数从相对尺度缩放到度量尺度，保证多源真实图像之间的尺度一致性和兼容性。
- 推理阶段：提出场景约束噪声整形，在高噪声阶段对潜空间噪声进行结构化约束，在低噪声阶段保持动态和连贯的视频生成，兼顾精确相机控制与场景一致性。

### 关键发现
- 在 RealEstate10K 和域外图像上，RealCam-I2V 在可控性和视频质量上均取得显著改进。
- 支持相机可控的循环视频生成和生成式帧插值等下游应用，展示了框架的扩展能力。

### 方法归类
- **范式**: 基于扩散模型的图像到视频生成 + 度量深度辅助的 3D 场景感知相机控制
- **关键技术**: 单目度量深度估计、场景约束噪声整形、交互式 3D 轨迹绘制
- **适用场景**: 用户提供任意真实世界图像、需要精确复杂相机运动的 I2V 生成
