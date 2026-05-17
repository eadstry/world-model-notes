---
title: "MoSA: Motion-Coherent Human Video Generation via Structure-Appearance Decoupling"
arxiv: https://arxiv.org/abs/2508.17404v2
github: https://github.com/hywang2002/hywang2002.github.io/tree/main/MoSA
website: https://hywang2002.github.io/MoSA/
venue: ICLR
year: 2026
---

# MoSA: Motion-Coherent Human Video Generation via Structure-Appearance Decoupling

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2508.17404v2](https://arxiv.org/abs/2508.17404v2)
- **GitHub**: [https://github.com/hywang2002/hywang2002.github.io/tree/main/MoSA](https://github.com/hywang2002/hywang2002.github.io/tree/main/MoSA)
- **Website**: [https://hywang2002.github.io/MoSA/](https://hywang2002.github.io/MoSA/)
:::

## 学习笔记

### 核心贡献
- 提出结构-外观解耦框架 MoSA，将人体视频生成拆分为结构序列生成与外观合成两个独立阶段，以缓解现有模型对复杂人体运动合成能力不足的问题
- 引入 Human-Aware Dynamic Control 模块配合密集跟踪约束，实现对稀疏人体结构的细粒度控制；同时利用接触约束改善人体-环境交互的建模质量
- 贡献了一个包含更复杂多样运动的大规模人体视频数据集，填补了现有数据集在全身运动、长程动态和人-物交互方面的不足

### 方法细节
- 第一阶段使用 3D 结构 Transformer 根据文本 prompt 生成人体运动序列（包括关节轨迹与身体姿态序列），作为中间结构表征
- 第二阶段在结构序列的引导下合成视频外观，通过 Human-Aware Dynamic Control 模块将结构信息注入生成过程，并在训练时施加密集跟踪损失以保持时序一致性
- 接触约束通过检测人体与环境的接触点并施加物理合理性约束，使生成的人-物交互运动更加自然

### 关键发现
- 在通用视频生成、人体视频生成和人体动画三类模型的对比实验中，MoSA 在大多数评估指标上显著优于现有方法
- 结构-外观解耦策略能够有效提升复杂人体运动的时序连贯性和物理合理性
- 大规模复杂运动数据集的引入对提升模型在全身运动、长程动态场景下的表现至关重要

### 方法归类
- **范式**: 两阶段解耦生成（结构序列生成 + 外观合成）
- **关键技术**: 3D 结构 Transformer、Human-Aware Dynamic Control、密集跟踪约束、接触约束
- **适用场景**: 文本驱动的全身人体视频生成、复杂人-物交互场景动画
