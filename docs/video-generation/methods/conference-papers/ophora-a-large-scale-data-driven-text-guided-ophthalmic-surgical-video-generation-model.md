---
title: "Ophora: A Large-Scale Data-Driven Text-Guided Ophthalmic Surgical Video Generation Model"
arxiv: https://arxiv.org/abs/2505.07449v7
github: https://github.com/uni-medical/Ophora
venue: MICCAI
year: 2025
---

# Ophora: A Large-Scale Data-Driven Text-Guided Ophthalmic Surgical Video Generation Model

::: info 论文信息
- **Venue**: MICCAI (2025)
- **arXiv**: [https://arxiv.org/abs/2505.07449v7](https://arxiv.org/abs/2505.07449v7)
- **GitHub**: [https://github.com/uni-medical/Ophora](https://github.com/uni-medical/Ophora)
:::

## 学习笔记

### 核心贡献
- 提出 Ophora，首个面向眼科手术视频的文本引导视频生成模型
- 构建 Comprehensive Data Curation 流程，将叙述性眼科手术视频转化为 Ophora-160K 大规模高质量数据集（16 万+视频-指令对）
- 提出 Progressive Video-Instruction Tuning 策略，将自然视频上预训练的 T2V 模型迁移至隐私保护的眼科手术视频生成

### 方法细节
- 数据构建：对原始叙事型手术视频进行自动清洗、分割、字幕对齐与指令化，形成高质量视频-文本对
- 渐进式微调：先冻结预训练 T2V 模型的大部分参数，逐步解冻并适应手术视频领域，避免灾难性遗忘
- 评估体系：采用定量指标（FVD、IS 等）结合眼科医生人工反馈进行双重验证

### 关键发现
- 大规模预训练自然视频 T2V 模型可通过渐进式指令微调有效迁移至医学手术视频领域
- 生成的手术视频在下游手术流程理解任务中具有辅助提升效果，验证了生成数据的可用性

### 方法归类
- **范式**: 文本引导视频生成 + 领域自适应迁移
- **关键技术**: Comprehensive Data Curation pipeline、Progressive Video-Instruction Tuning、领域自适应 T2V
- **适用场景**: 医学手术视频生成、隐私保护下的医疗数据增强、手术流程理解的下游任务支撑
