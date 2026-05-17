---
title: "Lux Post Facto: Learning Portrait Performance Relighting with Conditional Video Diffusion and a Hybrid Dataset"
arxiv: https://arxiv.org/abs/2503.14485
website: https://www.eyelinestudios.com/research/luxpostfacto.html
venue: CVPR
year: 2025
---

# Lux Post Facto: Learning Portrait Performance Relighting with Conditional Video Diffusion and a Hybrid Dataset

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2503.14485](https://arxiv.org/abs/2503.14485)
- **Website**: [https://www.eyelinestudios.com/research/luxpostfacto.html](https://www.eyelinestudios.com/research/luxpostfacto.html)
:::

## 学习笔记

### 核心贡献
- 提出 Lux Post Facto，一种兼具真实感与时间一致性的视频人像重光照方法，将条件视频扩散模型首次应用于该任务
- 设计基于混合数据集的训练策略，将静态表情 OLAT 数据与 in-the-wild 人像表演视频联合训练，避免采集成对多光照视频数据的高昂成本
- 提出新的光照注入机制（lighting injection mechanism），在保留预训练视频扩散模型时空生成能力的同时实现精确的光照控制

### 方法细节
- 以预训练的高质量视频扩散模型（SOTA video diffusion model）为基础，将其改造为条件生成模型以处理重光照这一非适定问题
- 设计 lighting injection mechanism，将目标光照条件编码后注入扩散模型的去噪网络，引导模型生成符合目标光照的人像
- 利用混合数据集训练：静态表情 OLAT 数据提供成对光照监督以学习面部反射特性，in-the-wild 表演视频提供丰富动态以学习时序建模能力

### 关键发现
- 混合数据集策略有效解耦了光照建模与运动建模，避免了直接采集动态多光照成对数据的依赖
- 模型在真实感（photorealism）和时间一致性（temporal consistency）两个维度上均达到 SOTA 水平

### 方法归类
- **范式**: 基于预训练视频扩散模型的条件生成，利用混合数据集联合学习重光照与时序建模
- **关键技术**: Conditional video diffusion model、Lighting injection mechanism、Hybrid dataset training (static OLAT + in-the-wild video)、预训练模型复用
- **适用场景**: 影视后期人像重光照、虚拟拍摄中的光照匹配、人像视频的实时/离线光照编辑
