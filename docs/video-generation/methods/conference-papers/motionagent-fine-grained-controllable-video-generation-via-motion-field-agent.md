---
title: "MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent"
arxiv: https://arxiv.org/abs/2502.03207
github: https://github.com/leoisufa/MotionAgent
venue: ICCV
year: 2025
---

# MotionAgent: Fine-grained Controllable Video Generation via Motion Field Agent

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2502.03207](https://arxiv.org/abs/2502.03207)
- **GitHub**: [https://github.com/leoisufa/MotionAgent](https://github.com/leoisufa/MotionAgent)
:::

## 学习笔记

### 核心贡献
- 提出 MotionAgent 框架，通过运动场智能体（Motion Field Agent）将文本中的运动信息显式转化为显式运动场，实现文本引导的图像到视频生成中的细粒度运动控制
- 设计了解析式光流组合模块，将目标轨迹与相机外参在 3D 空间中统一集成并投影为统一的稠密光流，再通过光流适配器控制基础扩散模型
- 在 VBench 的 Video-Text Camera Motion 指标上取得显著提升，并构建了 VBench 子集用于评估文本运动信息与生成视频的对齐程度

### 方法细节
- 运动场智能体首先从文本 prompt 中解析出物体运动和相机运动两类信息，分别转化为物体轨迹（2D 空间中的关键点路径）和相机外参（旋转与平移矩阵）
- 解析式光流组合模块在 3D 空间中联合建模物体运动与相机运动，通过投影变换将两者合并为统一的 2D 稠密光流场，保证了运动引导的几何一致性
- 光流适配器将组合后的光流作为条件注入到预训练的图像到视频扩散模型中，通过轻量级适配实现无需重新训练全模型即可获得细粒度运动控制

### 关键发现
- 将文本中的运动信息显式解析为具象的运动场表示，比隐式条件注入（如 cross-attention）能实现更精确的运动控制
- VBench 上的 Video-Text Camera Motion 指标显著领先现有方法，证明该框架在相机运动控制方面的优势
- 物体轨迹与相机外参在 3D 空间中的联合建模避免了分别处理时的运动不一致问题，生成的视频运动更加协调

### 方法归类
- **范式**: 显式运动场条件控制（agent-based 解析 + 光流注入）
- **关键技术**: 运动场智能体、解析式光流组合、光流适配器、物体轨迹与相机外参联合建模
- **适用场景**: 文本引导的图像到视频生成、需要精确物体运动或相机运动控制的视频创作
