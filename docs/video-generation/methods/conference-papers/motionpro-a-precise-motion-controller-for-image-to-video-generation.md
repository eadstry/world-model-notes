---
title: "MotionPro: A Precise Motion Controller for Image-to-Video Generation"
arxiv: https://arxiv.org/abs/2505.20287v1
github: https://github.com/HiDream-ai/MotionPro
website: https://zhw-zhang.github.io/MotionPro-page/
venue: CVPR
year: 2025
---

# MotionPro: A Precise Motion Controller for Image-to-Video Generation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2505.20287v1](https://arxiv.org/abs/2505.20287v1)
- **GitHub**: [https://github.com/HiDream-ai/MotionPro](https://github.com/HiDream-ai/MotionPro)
- **Website**: [https://zhw-zhang.github.io/MotionPro-page/](https://zhw-zhang.github.io/MotionPro-page/)
:::

## 学习笔记

### 核心贡献
- 提出 MotionPro：精确的运动控制器，使 I2V（Image-to-Video）生成中的物体运动可控
- 构建 MC-Bench 评测基准，系统评估 I2V 模型的运动控制能力
- 支持多种运动控制信号：拖拽点、轨迹线、光流、bbox 位移

### 方法细节
- **运动注入**：在视频 DiT 的特定层中注入运动控制信号，通过 motion adapter 实现
- **控制粒度**：支持全局运动（相机）和局部运动（物体）的解耦控制
- **MC-Bench**：包含数百个精心设计的运动控制测试用例，覆盖不同运动类型
- **训练策略**：在视频数据上合成运动标签 → 训练 motion adapter → 冻结基座模型参数

### 关键发现
- 精确运动控制对 I2V 的质量提升显著——用户对「运动不符合预期」的容忍度远低于「纹理不符合预期」
- 全局运动（相机）比局部运动（物体）更容易精确控制
- MotionPro 的控制精度已接近商业 I2V 模型（如 Kling、Runway）

### 方法归类
监督微调 — 运动控制
