---
title: "VC4VG: Optimizing Video Captions for Text-to-Video Generation"
arxiv: https://arxiv.org/abs/2510.24134
github: https://github.com/qyr0403/VC4VG
venue: EMNLP
year: 2025
---

# VC4VG: Optimizing Video Captions for Text-to-Video Generation

::: info 论文信息
- **Venue**: EMNLP (2025)
- **arXiv**: [https://arxiv.org/abs/2510.24134](https://arxiv.org/abs/2510.24134)
- **GitHub**: [https://github.com/qyr0403/VC4VG](https://github.com/qyr0403/VC4VG)
:::

## 学习笔记

### 核心贡献
- 提出 VC4VG，首个面向 T2V 训练的视频描述优化框架，从视频重建需求出发系统设计 caption 内容构成
- 构建 VC4VG-Bench 基准，引入细粒度、多维度、必要性分级的评测指标，与 T2V 生成质量对齐
- 通过大量 T2V 微调实验验证了 caption 质量与视频生成性能之间的强相关性

### 方法细节
- 将视频 caption 从 T2V 视角分解为多个语义维度（如主体、动作、背景、运镜等），提出有原则的 caption 设计方案
- 采用 caption 优化 pipeline，对原始描述进行维度补齐和质量提升，生成更适配 T2V 训练的文本标注
- 必要性分级机制区分哪些维度对视频重建不可或缺，哪些仅起辅助作用

### 关键发现
- 提升 caption 的完整性和准确性可直接改善 T2V 模型的指令对齐能力和视频连贯性
- 不同语义维度对生成质量的影响权重不同，主体和动作维度最为关键
- 简单增加 caption 长度不如针对性优化各维度信息覆盖

### 方法归类
- **范式**: 数据标注优化
- **关键技术**: 多维度 caption 分解、必要性分级、Benchmark 构建
- **适用场景**: T2V 训练数据筛选与标注清洗、视频-文本对齐质量提升
