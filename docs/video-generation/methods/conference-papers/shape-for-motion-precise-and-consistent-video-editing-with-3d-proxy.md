---
title: "Shape-for-Motion: Precise and Consistent Video Editing with 3D Proxy"
arxiv: https://arxiv.org/abs/2506.22432v2
github: https://github.com/yuhaoliu7456/Shape-for-Motion
website: https://shapeformotion.github.io/
venue: SIGGRAPH Asia
year: 2025
---

# Shape-for-Motion: Precise and Consistent Video Editing with 3D Proxy

::: info 论文信息
- **Venue**: SIGGRAPH Asia (2025)
- **arXiv**: [https://arxiv.org/abs/2506.22432v2](https://arxiv.org/abs/2506.22432v2)
- **GitHub**: [https://github.com/yuhaoliu7456/Shape-for-Motion](https://github.com/yuhaoliu7456/Shape-for-Motion)
- **Website**: [https://shapeformotion.github.io/](https://shapeformotion.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Shape-for-Motion 框架，将输入视频中的目标物体转换为时序一致的 3D 网格（3D proxy），在代理网格上执行编辑再反投影回视频帧，实现精确且一致的视频编辑
- 设计 Dual-Propagation Strategy，用户只需编辑单帧的 3D 网格，编辑自动传播至其他帧，大幅简化编辑流程

### 方法细节
- 将输入视频中的目标物体重建为时序一致的 3D 网格序列（3D proxy），编辑操作直接在 3D 空间进行
- 采用解耦的视频扩散模型（decoupled video diffusion model），将编辑后的几何与纹理渲染结果作为条件输入，生成最终视频帧
- 支持姿态编辑、旋转、缩放、平移、纹理修改以及物体合成等多种物理一致的操控

### 关键发现
- 3D proxy 作为中间表示能天然保证跨帧的几何与运动一致性，避免了 2D 编辑方法中常见的闪烁和形变问题
- 在多种视频编辑任务上，该方法在精确性和一致性方面优于现有 2D 和 3D 编辑基线

### 方法归类
- **范式**: 基于 3D 代理的解耦式视频编辑
- **关键技术**: 时序一致 3D 网格重建、Dual-Propagation 策略、解耦视频扩散模型
- **适用场景**: 需要对视频中特定物体进行精确几何/外观操控的场景（如姿态调整、物体替换、纹理编辑）
