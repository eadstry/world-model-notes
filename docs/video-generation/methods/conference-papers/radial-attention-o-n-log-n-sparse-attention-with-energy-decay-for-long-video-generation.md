---
title: "Radial Attention: $O(n\\log n)$ Sparse Attention with Energy Decay for Long Video Generation"
arxiv: https://arxiv.org/abs/2506.19852v1
github: https://github.com/mit-han-lab/radial-attention
website: https://hanlab.mit.edu/projects/radial-attention
venue: NeurIPS
year: 2025
---

# Radial Attention: $O(n\log n)$ Sparse Attention with Energy Decay for Long Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.19852v1](https://arxiv.org/abs/2506.19852v1)
- **GitHub**: [https://github.com/mit-han-lab/radial-attention](https://github.com/mit-han-lab/radial-attention)
- **Website**: [https://hanlab.mit.edu/projects/radial-attention](https://hanlab.mit.edu/projects/radial-attention)
:::

## 学习笔记

### 核心贡献
- 发现视频扩散 Transformer 中的"时空能量衰减"（Spatiotemporal Energy Decay）现象：注意力能量随 token 之间的时空距离增加而指数衰减。
- 基于该现象提出 Radial Attention：$O(n\log n)$ 复杂度的稀疏注意力机制，每个 token 仅关注其附近 token，且注意力窗口随时空距离增加而收缩。
- 静态掩码设计，无需动态计算稀疏模式，推理时可直接应用，推理开销极低。
- LoRA 长度扩展方案：利用 LoRA 微调将短视频训练模型快速适配至长视频生成，训练成本为全量微调的 1/4.4。
- 在 Wan2.1-14B、HunyuanVideo、Mochi 1 三个主流视频 DiT 上实现 1.9x 推理加速，支持生成 4x 更长视频。

### 方法细节
- 注意力掩码定义为 token 之间时间和空间距离的衰减函数：$f(d_t, d_s) = \exp(-\alpha d_t - \beta d_s)$，超出阈值的 token 对被完全裁剪。
- 空间窗口随帧间时间距离自适应缩小：同一帧内允许全空间关注，时间间隔越大的帧之间注意力窗口越窄。
- 静态掩码在推理前一次性生成并缓存，无需每步重新计算，对推理吞吐影响极小。
- LoRA 长度扩展：在短视频上预训练的标准模型，冻结全部权重仅训练 LoRA 适配器即可支持长视频，避免了全量微调的高成本。
- 支持与 Flash Attention 等高效注意力实现兼容，进一步加速推理。

### 关键发现
- 时空能量衰减是视频 DiT 的固有属性，长距离 token 对的注意力分数趋近于零，为稀疏化提供了理论依据。
- LoRA 长度扩展即可有效迁移短视频学到的运动规律到长视频，无需重新训练生成骨架。

### 方法归类
- **范式**: [稀疏注意力 / 长视频高效推理]
- **关键技术**: [时空能量衰减 → 静态径向掩码 → $O(n\log n)$ 复杂度 → LoRA 长度扩展]
- **适用场景**: [长视频生成加速，视频 DiT 推理优化，跨模型通用注意力加速]
