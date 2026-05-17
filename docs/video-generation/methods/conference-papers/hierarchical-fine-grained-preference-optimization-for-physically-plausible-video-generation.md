---
title: "Hierarchical Fine-grained Preference Optimization for Physically Plausible Video Generation"
arxiv: https://arxiv.org/abs/2508.10858v1
website: https://haroldchen19.github.io/PhysHPO-Page/
venue: NeurIPS
year: 2025
---

# Hierarchical Fine-grained Preference Optimization for Physically Plausible Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2508.10858v1](https://arxiv.org/abs/2508.10858v1)
- **Website**: [https://haroldchen19.github.io/PhysHPO-Page/](https://haroldchen19.github.io/PhysHPO-Page/)
:::

## 学习笔记

### 核心贡献
- 提出 PhysHPO，一种分层的跨模态直接偏好优化（Hierarchical Cross-Modal Direct Preference Optimization）框架，首次实现面向物理合理性视频生成的细粒度偏好对齐。
- 定义四个层次的优化粒度——实例级（Instance Level）、状态级（State Level）、运动级（Motion Level）和语义级（Semantic Level），从整体内容一致性到运动轨迹与叙事的逻辑连贯性逐层提升视频的物理真实感。
- 设计自动化的数据筛选管线，从现有大规模文本-视频数据集中高效识别和利用“优质数据”，免除耗时且昂贵的人工数据集构建过程。

### 方法细节
- 实例级优化对齐整体视频内容与输入提示词，确保生成的视频在全局语义上与用户意图一致。
- 状态级优化以边界帧作为锚点来约束时间一致性，减少帧间闪烁和不连贯问题。
- 运动级优化对运动轨迹进行显式建模，使动态行为更符合真实世界的物理规律。
- 语义级优化维护叙事内容与视觉呈现之间的逻辑一致性，避免生成结果出现语义冲突或不合理场景。
- 自动数据筛选机制利用已有的大规模文本-视频数据集，通过质量评估自动挑选适用于物理合理性训练的优质样本。

### 关键发现
- PhysHPO 在物理合理性指标和整体视频生成质量上均显著优于现有方法，验证了分层偏好优化的有效性。
- 四层次粒度设计相互补充，联合优化比单独使用任一层级更能一致提升视频的真实感与物理可信度。
- 自动数据筛选管线能够在不需要额外人工标注的情况下提供高质量训练数据，大幅降低数据准备成本。

### 方法归类
- 属于视频生成中的偏好优化与物理合理性方向，通过 DPO 框架将人类偏好信号注入视频生成模型的训练。
- 可归类为“物理感知的视频生成”（Physically-Aware Video Generation），与运动建模、时间一致性约束等技术路线高度相关。
