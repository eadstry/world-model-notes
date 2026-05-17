---
title: "Virtual Fitting Room: Generating Arbitrarily Long Videos of Virtual Try-On from a Single Image"
arxiv: https://arxiv.org/abs/2509.04450v1
website: https://immortalco.github.io/VirtualFittingRoom/
venue: NeurIPS
year: 2025
---

# Virtual Fitting Room: Generating Arbitrarily Long Videos of Virtual Try-On from a Single Image

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2509.04450v1](https://arxiv.org/abs/2509.04450v1)
- **Website**: [https://immortalco.github.io/VirtualFittingRoom/](https://immortalco.github.io/VirtualFittingRoom/)
:::

## 学习笔记

### 核心贡献
- 提出 Virtual Fitting Room (VFR)，首个能够从单张人物图像生成任意长度虚拟试穿视频的视频生成模型
- 将长视频生成建模为自回归的分段生成过程，避免了资源密集型的长视频数据需求

### 方法细节
- 通过前缀视频条件确保相邻片段之间的局部平滑性，利用锚定视频（anchor video）—— 一段全面捕捉人体完整外观的 360° 视频 —— 来强制全局时序一致性
- 模型在多种运动模式下都能生成分钟级长度的虚拟试穿视频，同时保持局部平滑和全局一致

### 关键发现
- 自回归分段生成 + 锚定视频策略有效解决了长视频生成中局部平滑与全局一致性的双重挑战
- 360° 锚定视频作为全局外观参考，比单张参考图像能提供更完整的体态信息，对长序列中的人物外观保持至关重要

### 方法归类
- **范式**: Auto-regressive Long Video Generation + Virtual Try-On
- **关键技术**: 自回归分段生成, 前缀视频条件, 锚定视频全局一致性约束
- **适用场景**: 虚拟试穿、电商服装展示、数字人形象生成等需要长时程保持外观一致性的任务
