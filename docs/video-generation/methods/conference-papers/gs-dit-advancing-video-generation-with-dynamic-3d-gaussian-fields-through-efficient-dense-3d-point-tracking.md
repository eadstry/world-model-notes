---
title: "GS-DiT: Advancing Video Generation with Dynamic 3D Gaussian Fields through Efficient Dense 3D Point Tracking"
arxiv: https://arxiv.org/abs/2501.02690
github: https://github.com/wkbian/GS-DiT
website: https://wkbian.github.io/Projects/GS-DiT/
venue: CVPR
year: 2025
---

# GS-DiT: Advancing Video Generation with Dynamic 3D Gaussian Fields through Efficient Dense 3D Point Tracking

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2501.02690](https://arxiv.org/abs/2501.02690)
- **GitHub**: [https://github.com/wkbian/GS-DiT](https://github.com/wkbian/GS-DiT)
- **Website**: [https://wkbian.github.io/Projects/GS-DiT/](https://wkbian.github.io/Projects/GS-DiT/)
:::

## 学习笔记

### 核心贡献
- 提出 GS-DiT 框架，通过密集 3D 点跟踪构建伪 4D 高斯场并渲染为视频帧，指导预训练 DiT 生成具有 4D 可控性的视频
- 提出高效密集 3D 点跟踪方法 D3D-PT，在精度上超越 SOTA 稀疏方法 SpatialTracker，且推理速度提升两个数量级
- 将 Gaussian Splatting 的 4D 可控性扩展到视频生成领域，支持多摄像机拍摄、滑动变焦等高级电影镜头效果

### 方法细节
- 框架分为构建阶段和微调阶段：(1) 利用 D3D-PT 从单目视频构建伪 4D 高斯场；(2) 以渲染视频为条件微调预训练 DiT，使其学会遵循 4D 结构引导生成视频
- D3D-PT 实现密集（而非稀疏）3D 点跟踪，为伪 4D 高斯场的精确构建提供高效轨迹基
- 渲染阶段可根据不同的相机外参和内参对 4D 高斯场进行重渲染，生成对应视角的视频帧作为条件信号
- 推理时通过操控高斯场参数和相机内外参，可生成同一动态内容在不同 4D 配置下的视频
- 借鉴单目动态新视角合成（MDVS）思想，避免直接训练 4D 视频 DiT 所需的高成本多视图数据

### 关键发现
- GS-DiT 使同一动态内容能以不同相机参数生成视频，解决了当前视频生成模型缺乏 4D 内容可控性的核心局限
- D3D-PT 以两个数量级的速度优势为伪 4D 高斯场构建提供了关键效率保障，使整个框架训练可行
- 方法展示出强泛化能力，4D 可控性超越相机位姿，延伸至高斯场操控和相机内参调整

### 方法归类
- **范式**: 4D 表示引导的视频生成（以伪 4D 高斯场为中间表示，桥接单目视频与 4D 可控生成）
- **关键技术**: 密集 3D 点跟踪（D3D-PT）、伪 4D 高斯场构建与渲染、DiT 条件微调、相机参数可控生成
