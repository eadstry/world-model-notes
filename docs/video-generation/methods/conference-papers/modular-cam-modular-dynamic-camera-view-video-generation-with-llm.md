---
title: "Modular-Cam: Modular Dynamic Camera-view Video Generation with LLM"
arxiv: https://arxiv.org/abs/2504.12048v1
github: https://github.com/pzrain/Modular-Cam
website: https://modular-cam.github.io/
venue: AAAI
year: 2025
---

# Modular-Cam: Modular Dynamic Camera-view Video Generation with LLM

::: info 论文信息
- **Venue**: AAAI (2025)
- **arXiv**: [https://arxiv.org/abs/2504.12048v1](https://arxiv.org/abs/2504.12048v1)
- **GitHub**: [https://github.com/pzrain/Modular-Cam](https://github.com/pzrain/Modular-Cam)
- **Website**: [https://modular-cam.github.io/](https://modular-cam.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Modular-Cam，利用大语言模型将复杂提示解耦为多个独立场景及转场动作，解决现有方法无法处理动态多场景+多视角变换的问题
- 引入 CamOperator 模块化网络实现精细的相机运动控制，配合 AdaControlNet 确保跨场景一致性与自适应色调调整

### 方法细节
- 使用 LLM 分析用户指令，将复杂提示拆分为多个场景描述与转场动作序列
- CamOperator 作为模块化网络嵌入扩散模型，对相机运动进行显式建模与控制
- AdaControlNet 基于 ControlNet 架构，自适应调整生成视频的色调风格，实现多场景间的视觉一致性

### 关键发现
- 定性与定量实验证实 Modular-Cam 在多场景视频生成和细粒度相机运动控制两方面均显著优于基线方法
- 模块化设计使相机控制与场景切换可独立调节，提升了系统的可解释性与可控性

### 方法归类
- **范式**: 扩散模型 + LLM 规划
- **关键技术**: LLM 场景解耦、CamOperator 相机控制模块、AdaControlNet 自适应色调调控
- **适用场景**: 多场景动态视频生成、相机视角可控的视频创作、电影级运镜自动化

