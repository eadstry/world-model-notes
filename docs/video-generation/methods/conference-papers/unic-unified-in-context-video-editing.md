---
title: "UNIC: Unified In-Context Video Editing"
arxiv: https://arxiv.org/abs/2506.04216v1
website: https://zixuan-ye.github.io/UNIC/
venue: ICLR
year: 2026
---

# UNIC: Unified In-Context Video Editing

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2506.04216v1](https://arxiv.org/abs/2506.04216v1)
- **Website**: [https://zixuan-ye.github.io/UNIC/](https://zixuan-ye.github.io/UNIC/)
:::

## 学习笔记

### 核心贡献
- 提出 Unified In-Context Video Editing（UNIC）框架，在单一模型中统一多种视频编辑任务，无需任务特定的适配器或 DDIM Inversion
- 将不同视频编辑任务的输入统一表示为三种 token 类型：源视频 token、噪声隐变量、多模态条件 token，通过 DiT 的原生注意力联合建模
- 引入 Task-aware RoPE 和 Condition Bias，解决跨任务统一中的 token 碰撞和任务混淆问题

### 方法细节
- 所有任务的输入被统一编码为连续 token 序列，利用 DiT 的自注意力/交叉注意力机制实现上下文建模
- Task-aware RoPE 为不同任务提供一致的时序位置编码，确保不同长度视频的时序信息正确传递
- Condition Bias 对条件 token 施加任务特定的偏置，使模型能够区分来自不同编辑任务的输入模式
- 支持灵活的任务组合，在六种代表性视频编辑任务（风格迁移、对象替换、背景替换等）上实现统一

### 关键发现
- 直接统一多任务会导致严重的 token 碰撞和任务混淆，需要显式建模任务身份
- Task-aware RoPE 和 Condition Bias 是消除任务间干扰的关键设计，使单个模型能够自适应执行多种编辑任务
- 统一模型不仅在各独立任务上达到或超过专用方法的性能，还展现出涌现式的任务组合能力（如同时风格迁移和对象替换）

### 方法归类
- **范式**: In-Context Learning + 统一的 token 序列建模
- **关键技术**: DiT 原生注意力、Task-aware RoPE、Condition Bias
- **适用场景**: 多任务视频编辑、文本驱动的视频编辑、视频风格迁移、对象/背景替换
