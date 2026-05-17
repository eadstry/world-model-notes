---
title: "Large Scale Diffusion Distillation via Score-Regularized Continuous-Time Consistency"
arxiv: https://arxiv.org/abs/2510.08431v1
venue: ICLR
year: 2026
---

# Large Scale Diffusion Distillation via Score-Regularized Continuous-Time Consistency

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2510.08431v1](https://arxiv.org/abs/2510.08431v1)
:::

## 学习笔记

### 核心贡献
- 首次将连续时间一致性模型（continuous-time consistency model）扩展到大规模文生图与文生视频任务（最高达 14B 参数、5 秒视频），使基于 JVP 的蒸馏在大规模场景下实用化。
- 提出分数正则化连续时间一致性模型（rCM），通过引入 score distillation 作为长跳跃正则项（long-skip regularizer），弥补了 sCM 在细节生成中的质量缺陷。
- 蒸馏后模型仅需 1~4 步即可生成高保真样本，将扩散采样加速 15~50 倍，且无需 GAN 调优或大量超参数搜索。

### 方法细节
- 开发了兼容并行计算的 FlashAttention-2 JVP 核函数，使 sCM 训练可扩展至百亿参数模型和高维视频任务。
- 分析揭示了 sCM 细粒度生成质量受限的根源：误差累积（error accumulation）与前向散度目标（forward-divergence objective）的 mode-covering 特性。
- rCM 将 score distillation 作为长跳跃正则项融入 sCM 训练，以反向散度（reverse divergence）的 mode-seeking 特性互补原有目标，在维持多样性的同时提升视觉质量。
- 在 Cosmos-Predict2 和 Wan2.1 两个大规模模型上验证了方法的有效性。

### 关键发现
- rCM 在质量指标上与当前最优蒸馏方法 DMD2 持平，同时在多样性方面具有显著优势，有效缓解了 mode collapse 问题。
- 方法无需 GAN 训练技巧或大量超参数搜索，表现出良好的鲁棒性和可复现性。
- 蒸馏后模型在 1~4 步采样下即可生成高保真图像和视频，为大规模扩散模型的高效推理部署提供了可行方案。

### 方法归类
- 扩散模型蒸馏与加速推理（diffusion distillation），属于 consistency model 在大规模视频生成场景中的推广应用。
- 属于视频生成中效率优化方向的核心方法，兼顾生成质量与多样性，适合部署级应用场景。
