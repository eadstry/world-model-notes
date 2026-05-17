---
title: "MagicMirror: ID-Preserved Video Generation in Video Diffusion Transformers"
arxiv: https://arxiv.org/abs/2501.03931
github: https://github.com/dvlab-research/MagicMirror
venue: ICCV
year: 2025
---

# MagicMirror: ID-Preserved Video Generation in Video Diffusion Transformers

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2501.03931](https://arxiv.org/abs/2501.03931)
- **GitHub**: [https://github.com/dvlab-research/MagicMirror](https://github.com/dvlab-research/MagicMirror)
:::

## 学习笔记

### 核心贡献
- 提出 MagicMirror 框架，在 Video Diffusion Transformer 中实现无需逐人微调的身份保持视频生成，兼顾电影级画质与自然动态。
- 以双分支面部特征提取器解耦身份特征与结构特征，结合轻量级跨模态适配器实现高效身份注入。
- 设计两阶段训练策略（合成身份对预训练 + 真实视频联合微调），缓解身份保持与运动多样性之间的冲突。

### 方法细节
- 双分支面部特征提取器：一支提取身份语义（identity branch），一支提取结构信息（structure branch），二者互补避免身份混淆。
- 轻量级跨模态适配器（Cross-Modal Adapter）：通过 Conditioned Adaptive Normalization（CAN）将身份特征注入 DiT backbone 的归一化层，参数量极小。
- 训练策略：第一阶段使用合成身份对（同一身份不同姿态）学习身份不变性；第二阶段融合真实视频数据提升自然运动表达。

### 关键发现
- 在不增加大量参数的条件下，MagicMirror 在身份一致性与自然运动之间取得了显著优于已有方法的平衡。
- 双分支特征提取与 CAN 是身份保持的关键设计，消融实验验证了各组件的贡献。
- 在多项自动化指标（人脸相似度、运动多样性、视频质量）上全面超越现有身份保持视频生成方法。

### 方法归类
- **范式**: 基于 DiT 的轻量级身份条件注入框架（无需每身份微调）
- **关键技术**: 双分支面部特征提取、Conditioned Adaptive Normalization、轻量级跨模态适配器、合成身份对预训练、两阶段训练策略
- **适用场景**: 虚拟数字人驱动、影视级角色一致性视频生成
