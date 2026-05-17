---
title: "Video Editing via Factorized Diffusion Distillation"
arxiv: https://arxiv.org/abs/2403.09334
website: https://fdd-video-edit.github.io/
venue: ECCV
year: 2024
---

# Video Editing via Factorized Diffusion Distillation

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2403.09334](https://arxiv.org/abs/2403.09334)
- **Website**: [https://fdd-video-edit.github.io/](https://fdd-video-edit.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Emu Video Edit (EVE)，无需任何监督视频编辑数据即可实现视频编辑，并达到当时最先进水平
- 引入 Factorized Diffusion Distillation (FDD)，一种无监督蒸馏方法，可从多个 teacher 模型中同时蒸馏知识
- 将图像编辑能力和视频生成能力分离到两个 adapter 中，再通过蒸馏对齐实现视频编辑

### 方法细节
- 在同一个 T2I 基座模型上分别附加图像编辑 adapter 和视频生成 adapter，二者独立训练
- FDD 流程：从图像编辑 adapter 蒸馏逐帧精确编辑能力，从视频生成 adapter 蒸馏时序一致性能力，两者在无监督条件下联合优化
- 蒸馏过程中无需配对视频编辑数据，仅利用图像编辑对和视频生成数据的可用性，通过分数蒸馏（score distillation）实现知识迁移

### 关键发现
- 图像编辑 adapter 和视频生成 adapter 的功能解耦使模型结构简洁且可复用
- FDD 能有效解决帧间闪烁问题，使编辑后的视频保持时序平滑
- 同一框架可扩展到其他组合能力（如图像编辑 + 图像生成等），展现 adapter 组合的灵活性

### 方法归类
- **范式**: 扩散蒸馏 + Adapter 组合
- **关键技术**: Factorized Diffusion Distillation、图像编辑 adapter、视频生成 adapter、无监督对齐
- **适用场景**: 无需配对数据的视频编辑、文本驱动的视频局部修改、多 adapter 融合的功能扩展
