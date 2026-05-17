---
title: "Many-for-Many: Unify the Training of Multiple Video and Image Generation and Manipulation Tasks"
arxiv: https://arxiv.org/abs/2506.01758v2
github: https://github.com/leeruibin/MfM
venue: ICLR
year: 2026
---

# Many-for-Many: Unify the Training of Multiple Video and Image Generation and Manipulation Tasks

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2506.01758v2](https://arxiv.org/abs/2506.01758v2)
- **GitHub**: [https://github.com/leeruibin/MfM](https://github.com/leeruibin/MfM)
:::

## 学习笔记

### 核心贡献
- 提出 Many-for-Many 统一框架，用单一 8B 模型覆盖 10+ 种视频与图像生成/编辑任务
- 轻量级 Adapter 设计：不同输入条件（文本、图像、视频、深度图）通过各自的轻量化 adapter 映射到统一潜空间
- 图像与视频数据从零开始联合训练，促进跨模态知识迁移
- 深度图作为 3D 条件信号，实现结构可控的视频生成

### 方法细节
- 统一架构：基于 Diffusion Transformer (DiT) backbone，所有任务共享 denoiser 权重，仅在输入端使用 modality-specific adapter
- Adapter 设计：文本用 CLIP/T5 encoder + 轻量投影层；图像/视频使用 VAE encoder + 时序适配层；深度图额外经过 depth encoder 后注入
- 训练策略：多任务联合训练，每个 batch 混合不同任务类型（T2V、I2V、V2V、图像/视频编辑等），使用任务标签控制 adapter 选择
- 跨帧注意力：3D 全注意力 + 可选的稀疏注意力模式，在长视频场景下平衡质量与效率
- 条件注入方式：采用 Adaptive Layer Norm (AdaLN) 注入时间步嵌入 + 任务类型嵌入 + adapter 输出，实现灵活的条件组合

### 关键发现
- 多任务联合训练比单任务训练带来显著性能提升，说明图像/视频、生成/编辑任务之间存在知识互补效应
- 深度图作为 3D 几何条件比原始像素条件更鲁棒，模型能更好地保持空间结构一致性
- 轻量 adapter 优于全微调（8B 模型全微调容易过拟合或灾难性遗忘）

### 方法归类
- **范式**: 统一多任务视频图像生成框架（Many-for-Many）
- **关键技术**: 模态适配 Adapter、图文视频联合训练、深度图条件注入、DiT backbone、多任务 Meta-Batch 训练
- **适用场景**: 统一视频/图像生成平台、多任务视频编辑工具、结构可控视频生成（深度图引导）
