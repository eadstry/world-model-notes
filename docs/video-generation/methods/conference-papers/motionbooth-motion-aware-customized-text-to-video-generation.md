---
title: "MotionBooth: Motion-Aware Customized Text-to-Video Generation"
arxiv: https://arxiv.org/abs/2406.17758
github: https://github.com/jianzongwu/MotionBooth
website: https://jianzongwu.github.io/projects/motionbooth/
venue: NeurIPS
year: 2024
---

# MotionBooth: Motion-Aware Customized Text-to-Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2024)
- **arXiv**: [https://arxiv.org/abs/2406.17758](https://arxiv.org/abs/2406.17758)
- **GitHub**: [https://github.com/jianzongwu/MotionBooth](https://github.com/jianzongwu/MotionBooth)
- **Website**: [https://jianzongwu.github.io/projects/motionbooth/](https://jianzongwu.github.io/projects/motionbooth/)
:::

## 学习笔记

### 核心贡献
- 提出 MotionBooth 框架，能够在给定少量特定物体图像的前提下，对该物体的外观进行精准建模，并在生成视频中同时控制物体运动和相机运动
- 设计 subject region loss、video preservation loss 和 subject token cross-attention loss 三项目标函数，分别用于提升主体学习效果、维持视频一致性以及将定制主体与运动控制信号对齐
- 提出无需额外训练的推理技术，通过 cross-attention map 操作控制主体运动，并引入 latent shift module 实现相机运动控制

### 方法细节
- 基于预训练文生视频扩散模型进行高效微调，输入少量目标物体图像即可提取物体形状与外观特征
- 主体运动控制利用 cross-attention map 的显式操作实现：在去噪过程中操控特定 token 对应的注意力激活区域，从而引导主体在空间中的移动轨迹
- 相机运动控制通过 latent shift module 完成：在潜在空间中沿时间维度平移特征图，模拟相机平移/缩放的几何效果，无需额外训练

### 关键发现
- 隐式 subject token cross-attention loss 能有效弥合主体外观建模与运动控制之间的语义鸿沟，避免两者在联合优化中相互干扰
- 训练时对主体区域施加更强的监督信号（subject region loss）显著提升了定制物体的外观保真度
- 定量与定性实验均表明 MotionBooth 在主体外观保持与运动控制两方面均优于已有定制化文生视频方法

### 方法归类
- **范式**: 基于预训练扩散模型的微调 + 训练时损失函数设计 + 推理时注意力/潜空间操控
- **关键技术**: subject token cross-attention loss、cross-attention map 操控、latent shift module、video preservation loss
- **适用场景**: 需对特定物体进行角色化视频生成并同时控制主体移动轨迹与相机视角变化的任务
