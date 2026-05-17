---
title: "Boosting Camera Motion Control for Video Diffusion Transformers"
arxiv: https://arxiv.org/abs/2410.10802
github: https://github.com/soon-yau/CameraMotionGuidance
website: https://soon-yau.github.io/CameraMotionGuidance/
venue: "ICLR"
year: 2025
---

# Boosting Camera Motion Control for Video Diffusion Transformers

::: info 论文信息
- **Venue**: ICLR 2025
- **arXiv**: [2410.10802](https://arxiv.org/abs/2410.10802)
- **GitHub**: [soon-yau/CameraMotionGuidance](https://github.com/soon-yau/CameraMotionGuidance)
- **Website**: [项目页面](https://soon-yau.github.io/CameraMotionGuidance/)
:::

## 学习笔记

### 核心贡献
- 系统性地诊断出 **DiT 架构中相机控制严重退化的根本原因**：退化源于条件注入方式（conditioning method）的设计缺陷，而非此前普遍认为的相机位姿表示方式
- 提出 **Camera Motion Guidance（CMG）**，基于无分类器引导（classifier-free guidance）机制增强相机运动控制信号，将 DiT 相机控制精度提升超过 400%
- 提出**稀疏相机控制管线（sparse camera control pipeline）**，通过少量关键帧位姿插值即可生成完整相机轨迹，大幅简化长视频的相机位姿指定流程
- 方法同时适用于 U-Net 和 DiT 两种主流扩散架构，具有通用性和即插即用特性

### 方法细节
- 对多种相机位姿表示方式（Plücker 坐标、旋转矩阵等）和条件注入方式（交叉注意力、自适应归一化、拼接等）进行系统消融实验
- CMG 在去噪过程每一步中使用无分类器引导公式，将相机条件信号转化为隐式梯度方向，约束生成结果符合目标相机运动
- 稀疏控制管线允许用户仅指定少量关键帧的相机位姿，通过插值生成密集轨迹，再输入 CMG 进行引导生成
- 方法无需对预训练 DiT 模型进行重新训练或微调，可作为推理阶段的通用增强模块接入
- CMG 引导强度可通过单一超参数调节，在相机控制精度与视频生成质量之间灵活平衡

### 关键发现
- 相机控制退化的瓶颈在于**条件注入方式**而非位姿表示，这一发现为 DiT 架构的可控生成研究提供了新的设计方向
- CMG 在 DiT 上实现了超过 4 倍的相机运动精度提升，同时未引入明显的额外计算开销
- 稀疏管线在保持相机控制精度的同时将用户标注负担从逐帧降至仅需数个关键帧

### 方法归类
- **范式**: 可控视频生成 / 扩散模型推理引导
- **关键技术**: Camera Motion Guidance（CMG）、无分类器引导、稀疏相机控制管线
- **适用场景**: 相机运动可控的视频生成、电影级运镜合成、虚拟摄影、自动驾驶数据增强
