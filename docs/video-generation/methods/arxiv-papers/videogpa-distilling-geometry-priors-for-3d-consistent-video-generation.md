---
title: "VideoGPA: Distilling Geometry Priors for 3D-Consistent Video Generation"
arxiv: https://arxiv.org/abs/2601.23286
github: https://github.com/Hongyang-Du/VideoGPA
website: https://hongyang-du.github.io/VideoGPA-Website/#
venue: arXiv
year: 2026
---

# VideoGPA: Distilling Geometry Priors for 3D-Consistent Video Generation

::: info 论文信息
- **Venue**: arXiv 2026
- **arXiv**: [https://arxiv.org/abs/2601.23286](https://arxiv.org/abs/2601.23286)
- **GitHub**: https://github.com/Hongyang-Du/VideoGPA
- **Website**: https://hongyang-du.github.io/VideoGPA-Website/#
:::

## 学习笔记

### 核心贡献
- 首次指出标准去噪目标缺乏对几何一致性的显式激励，是视频扩散模型中物体变形和空间漂移的根本原因
- 提出 VideoGPA，一个数据高效的自监督框架，利用几何基础模型自动导出稠密偏好信号，通过 DPO 引导视频扩散模型生成分布向固有 3D 一致性方向偏移
- 整个训练过程无需人工标注，仅需极少量偏好对即可实现显著的 3D 一致性提升

### 方法细节
- 使用预训练的几何基础模型（geometry foundation model）对视频帧进行稠密几何分析，自动生成偏好信号：几何一致性好的帧获得正向偏好，一致性差的帧获得负向偏好
- 将几何偏好信号构造为 DPO 的偏好对，正样本和负样本均来自模型自身的生成结果，实现完全自监督
- DPO 训练使视频扩散模型学习偏好分布，在推理时自然生成几何一致性更高的视频，无需额外推理开销
- 方法具有模型无关性，可与不同架构的视频扩散模型结合使用

### 关键发现
- VideoGPA 在极少量偏好对（minimal preference pairs）下即可显著提升时序稳定性、几何合理性和运动连贯性
- 标准去噪目标确实缺乏几何维度的约束，引入几何先验作为偏好信号是解决 3D 不一致问题的有效途径
- 自监督方式获取的几何偏好信号质量足以替代人工标注，大幅降低数据获取成本

### 方法归类
- **范式**: 偏好对齐 / 自监督 3D 一致性约束
- **关键技术**: DPO（Direct Preference Optimization）、几何基础模型蒸馏、自监督偏好信号构造
- **适用场景**: 3D 一致性视频生成、长时序视频的物体稳定性提升、视频扩散模型的后训练优化
