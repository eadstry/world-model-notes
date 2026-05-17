---
title: "Versatile Transition Generation with Image-to-Video Diffusion"
arxiv: https://arxiv.org/abs/2508.01698
website: https://mwxely.github.io/projects/yang2025vtg/index
venue: ICCV
year: 2025
---

# Versatile Transition Generation with Image-to-Video Diffusion

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2508.01698](https://arxiv.org/abs/2508.01698)
- **Website**: [https://mwxely.github.io/projects/yang2025vtg/index](https://mwxely.github.io/projects/yang2025vtg/index)
:::

## 学习笔记

### 核心贡献
- 提出 VTG 框架，面向给定首帧、尾帧和文本描述生成平滑且语义一致的视频过渡片段，填补了该方向的空白
- 构建 TransitBench 基准，涵盖概念融合和场景过渡两类代表性过渡任务，支持统一评测
- 提出插值初始化、双向运动微调和表征对齐正则化三项技术，显著提升过渡视频的保真度和连贯性

### 方法细节
- 插值初始化：在潜空间对首尾帧进行线性插值作为生成起点，帮助保持目标身份并缓解内容突变
- 双向运动微调：利用正向和反向时序流联合优化运动平滑性，弥补预训练 I2V 模型在过渡场景中的不足
- 表征对齐正则化：约束生成中间帧的表征分布与真实过渡帧分布之间的 KL 散度，提升生成保真度

### 关键发现
- 直接使用预训练 I2V 模型生成过渡视频会出现身份漂移和运动突变，三项改进技术分别解决不同维度的问题
- VTG 在概念融合（如"马→斑马"）和场景过渡（如"室内→室外"）两类任务上均优于现有方法
- 插值初始化对身份保持贡献最大，双向运动微调对运动平滑性贡献最大

### 方法归类
- **范式**: I2V 扩散模型 + 任务特化适配
- **关键技术**: 潜空间插值初始化、双向运动微调、表征对齐正则化
- **适用场景**: 视频转场生成、概念融合动画、视频编辑中的桥接片段生成
