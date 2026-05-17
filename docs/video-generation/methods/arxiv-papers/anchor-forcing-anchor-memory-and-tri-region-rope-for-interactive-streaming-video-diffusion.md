---
title: "Anchor Forcing: Anchor Memory and Tri-Region RoPE for Interactive Streaming Video Diffusion"
arxiv: https://arxiv.org/abs/2603.13405
github: https://github.com/vivoCameraResearch/Anchor-Forcing
website: https://vivocameraresearch.github.io/anchorforcing/
venue: arXiv
year: 2026
---

# Anchor Forcing: Anchor Memory and Tri-Region RoPE for Interactive Streaming Video Diffusion

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2603.13405](https://arxiv.org/abs/2603.13405)
- **GitHub**: [https://github.com/vivoCameraResearch/Anchor-Forcing](https://github.com/vivoCameraResearch/Anchor-Forcing)
- **Website**: [https://vivocameraresearch.github.io/anchorforcing/](https://vivocameraresearch.github.io/anchorforcing/)
:::

## 学习笔记

### 核心贡献
- 首次系统性识别交互式流式视频扩散中的两种失败模式：提示切换时 KV cache 重建无法同时保留语义上下文与近期 latent 线索，导致边界条件弱化、感知质量下降；无界时间索引导致 RoPE 分布漂移，削弱预训练运动先验。
- 提出 **Anchor-guided Re-cache** 机制：将 KV 状态存储在锚点缓存中，每次提示切换时从锚点 warm-start 重建本地缓存，减少切换后 evidence loss，稳定感知质量。
- 提出 **Tri-Region RoPE**：将时间轴划分为三个区域，每个区域使用独立的参考原点，配合 RoPE Re-alignment Distillation，将无界流式索引与预训练 backbone 的有界 RoPE 分布对齐，保留运动先验。
- 基于 LongLive / Self-Forcing 构建，以 Wan2.1-T2V 为 backbone，通过蒸馏实现流式长视频生成。

### 方法细节
- **Anchor Memory**：在流式生成过程中每隔固定帧数保存锚点 KV 状态；提示切换时，re-cache 不仅依赖历史帧 latent，还从锚点记忆 $\mathcal{M}(t)$ 中恢复上下文 KV 证据，并刷新 junction caches。
- **Tri-Region RoPE**：划分 past/anchor/future 三个区域，past 区域使用历史原点、anchor 区域使用当前锚点原点、future 区域使用当前目标原点，通过区域特定参考避免无界时间索引的分布漂移。
- **RoPE Re-alignment Distillation**：蒸馏阶段将教师模型（有界 RoPE）的位置编码知识迁移到学生模型（无界索引），通过位置重对齐损失约束 Tri-Region RoPE 的表示空间。
- **训练策略**：两阶段训练——Stage 1 进行 Self-Forcing 初始化（短窗口 + Frame Sink），Stage 2 进行 Streaming Long Tuning，加入 Anchor Memory 与 Tri-Region RoPE。
- 实验对比 LongLive、Infinity-RoPE、MemFlow 等基线，在感知质量与运动连贯性指标上均有提升。

### 关键发现
- 仅用历史帧 latent 重建缓存会导致 prompt 切换后语义断裂与质量退化，锚点记忆的 warm-start 是维持跨片段连贯性的关键。
- Tri-Region RoPE 相比直接扩展 RoPE 或 Infinity-RoPE 更能保留预训练 backbone 的运动先验，蒸馏阶段的位置重对齐对长时运动保持至关重要。

### 方法归类
- **范式**: 蒸馏式流式视频扩散（Distilled Streaming Video Diffusion）
- **关键技术**: Anchor KV Cache、Tri-Region RoPE、RoPE Re-alignment Distillation、Prompt-Switch Re-cache
- **适用场景**: 交互式长视频生成（多段提示切换、叙事驱动的内容创作）
