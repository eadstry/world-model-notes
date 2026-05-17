---
title: "MATRIX: Mask Track Alignment for Interaction-aware Video Generation"
arxiv: https://arxiv.org/abs/2510.07310v1
venue: ICLR
year: 2026
---

# MATRIX: Mask Track Alignment for Interaction-aware Video Generation

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2510.07310v1](https://arxiv.org/abs/2510.07310v1)
:::

## 学习笔记

### 核心贡献
- 首次系统分析 Video DiT 内部交互表征机制，揭示交互信息集中于少量交互主导层，并据此提出 MATRIX 正则化方法以增强多实例交互生成。
- 构建 MATRIX-11K 数据集（含交互感知字幕与多实例掩码轨迹）并引入 InterGenEval 评估协议，为交互感知视频生成的精细评估提供基础设施。

### 方法细节
- 从语义接地（video-to-text attention）和语义传播（video-to-video attention）两个视角形式化分析 Video DiT 的内部交互表征。
- 识别出交互主导层（interaction-dominant layers），并对这些层的注意力施加 mask track alignment regularization，使注意力分布与真实多实例掩码轨迹对齐。
- InterGenEval 评估协议量化交互保真度和语义对齐度，弥补现有评价指标对交互质量的覆盖不足。

### 关键发现
- 语义接地与语义传播效应均集中于少数交互主导层，为轻量级训练正则化提供了天然切入点。
- 对齐交互主导层注意力可同时提升交互保真度与语义对齐度，并减少主体漂移和幻觉现象。
- MATRIX-11K 数据集使对 Video DiT 内部交互表征的精细分析成为可能，揭示了现有模型在多实例交互建模上的系统性不足。

### 方法归类
- **范式**: 基于注意力层正则化的训练时干预，通过掩码轨迹对齐增强多实例交互表征。
- **关键技术**: 交互主导层识别、mask track alignment regularization、语义接地图投影、语义传播分析、InterGenEval 评估协议、MATRIX-11K 数据集构建。
- **适用场景**: 多实例交互视频生成（人物-物体交互、多角色协作场景）、需要精确语义绑定的 T2V 应用。
