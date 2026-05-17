---
title: "SF-V: Single Forward Video Generation Model"
arxiv: https://arxiv.org/abs/2406.04324
github: https://github.com/snap-research/SF-V
website: https://snap-research.github.io/SF-V/
venue: NeurIPS
year: 2024
---

# SF-V: Single Forward Video Generation Model

::: info 论文信息
- **Venue**: NeurIPS (2024)
- **arXiv**: [https://arxiv.org/abs/2406.04324](https://arxiv.org/abs/2406.04324)
- **GitHub**: [https://github.com/snap-research/SF-V](https://github.com/snap-research/SF-V)
- **Website**: [https://snap-research.github.io/SF-V/](https://snap-research.github.io/SF-V/)
:::

## 学习笔记

### 核心贡献
- 提出 SF-V，首个通过单次前向传播（single forward pass）生成高质量视频的扩散模型，将多步迭代去噪压缩为一步生成
- 利用对抗训练（adversarial training）微调预训练视频扩散模型 Stable Video Diffusion (SVD)，实现单步视频合成
- 在去噪过程中实现约 23 倍加速（相比 SVD）和 6 倍加速（相比现有单步方法），同时生成质量更优

### 方法细节
- 以预训练的 SVD 为骨干，引入判别器（discriminator）对单步生成的视频进行时序和空间维度的对抗判别
- 判别器同时捕获视频数据中的时序依赖（temporal dependencies）和空间依赖（spatial dependencies），确保单步生成不丢失时序连贯性
- 训练目标结合对抗损失与蒸馏损失，使单步学生模型逼近多步教师模型的生成分布

### 关键发现
- 对抗训练能够有效弥补单步采样带来的质量损失，使单步视频扩散模型在视觉保真度上达到甚至超越多步模型
- 时序判别器对保持视频帧间运动连贯性至关重要，仅使用空间判别器会导致明显的时序伪影
- SF-V 在保持生成质量的同时大幅降低计算开销，为实时视频合成与编辑铺平了道路

### 方法归类
- **范式**: 单步对抗蒸馏视频生成
- **关键技术**: 对抗训练微调、时序-空间判别器、扩散模型蒸馏
- **适用场景**: 实时视频合成、视频编辑、资源受限环境下的视频生成
