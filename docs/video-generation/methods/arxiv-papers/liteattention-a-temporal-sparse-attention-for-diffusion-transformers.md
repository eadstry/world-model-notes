---
title: "LiteAttention: 面向扩散 Transformer 的时间稀疏注意力"
source: "arxiv"
arxiv_id: "2511.11062"
tags: ["video-generation","diffusion-transformer","sparse-attention","FLOPs-reduction","acceleration"]
status: "已读"
---
## 学习笔记

### 核心贡献

- 利用扩散去噪步骤间注意力稀疏模式的强时间连贯性：某时间步被标记为非必要的 token/区域，在后续步中大概率保持非必要。
- 提出 LiteAttention，在去噪早期标记非必要 tile，并将跳过决策向后传播，避免每步重复计算注意力 mask。
- 既规避了动态稀疏模式的额外开销（如 profiling），又克服了静态稀疏模式次优的问题。
- 直接构建于 FlashAttention 之上，具备良好的实现兼容性与工程效率。

### 方法细节

- 核心思想：扩散采样过程中，注意力注意图的空间稀疏模式随去噪步骤的变化缓慢，存在强时间相干性。因此可以在早期步（如 $t=T$ 附近）对注意力 tile 做一次 profiling，标记哪些 tile 是冗余的，后续步直接复用该跳过决策。
- 实现上采用 tile-level 的稀疏模式：将序列划分为 tile 块，基于 FlashAttention 框架在每个 tile 上做稀疏跳过判定。
- 无需引入额外的门控网络或强化学习来学习稀疏模式，仅依赖扩散时序的天然冗余性。
- 总体流程：在 $t$ 较大的早期步做完整注意力计算并决策 tile 重要性 → 后续步仅对「保留 tile」集合计算注意力 → 随 $t$ 减小可逐步放宽稀疏度以保证最终生成质量。

### 关键发现

- 稀疏模式的时间一致性确实显著：tile 跳过决策在连续多个去噪步间高度稳定，验证了核心假设。
- LiteAttention 在保持生成质量（FVD、CLIP-SIM）几乎不降的前提下，将注意力 FLOPs 降低约 30%–50%，具体取决于模型规模与稀疏策略。
- 相比纯动态 sparse attention（如基于分数的 top-k 选择），LiteAttention 的额外开销极小，避免了每步重复计算注意力分数与排序。

### 方法归类

- **方法类型**：推理加速（FLOPs 削减），基于时间一致的稀疏注意力。
- **适用阶段**：扩散 Transformer 视频生成的推理阶段。
- **基础设施**：FlashAttention，无需额外训练或微调。
- **相关方法**：ToMe（token merging）、PixArt-delta 的稀疏策略、动态稀疏注意力（如 SparseFormer）。
