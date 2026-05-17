---
title: "Precise Action-to-Video Generation Through Visual Action Prompts"
arxiv: https://arxiv.org/abs/2508.13104
website: https://zju3dv.github.io/VAP/
venue: ICCV
year: 2025
---

# Precise Action-to-Video Generation Through Visual Action Prompts

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2508.13104](https://arxiv.org/abs/2508.13104)
- **Website**: [https://zju3dv.github.io/VAP/](https://zju3dv.github.io/VAP/)
:::

## 学习笔记

### 核心贡献
- 提出视觉动作提示（Visual Action Prompts），以视觉骨架（visual skeleton）作为统一的动作表示，兼顾精度与跨域可迁移性
- 设计鲁棒的数据流水线，从人-物交互（HOI）和灵巧机器人操作两类数据源中提取动作骨架，支持跨域训练
- 通过轻量微调将视觉骨架条件集成到预训练视频生成模型中，实现复杂交互的精确动作控制

### 方法细节
- 将动作"渲染"为领域无关的视觉骨架，保留几何精度的同时具备跨域适应能力，解决了文本/粗粒度掩码不精确、agent 中心信号不可迁移的问题
- 从 EgoVid（HOI 视频）和 RT-1 / DROID（机器人操作视频）两类交互密集数据中构建骨架标注，支撑跨域模型训练
- 采用轻量微调策略，将骨架条件注入预训练视频扩散模型的交叉注意力层，不修改原始模型结构

### 关键发现
- 视觉骨架在动作精度与跨域迁移能力之间取得最佳平衡，显著优于文本、原始动作或粗粒度掩码方案
- 方法在 EgoVid（人-物交互）和 RT-1 / DROID（机器人操作）数据集上均验证了有效性，体现了对跨域动作动力学迁移的支持

### 方法归类
- **范式**: 基于视觉骨架条件的动作驱动视频生成
- **关键技术**: 视觉骨架渲染、HOI / 机器人数据流水线、轻量模型微调
- **适用场景**: 人-物交互视频生成、机器人操作视频生成、跨域动作动力学迁移
