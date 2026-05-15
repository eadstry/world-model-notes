---
title: "Transformer-Based World Models Are Happy With 100k Interactions"
design: "TWM"
arxiv: https://arxiv.org/abs/2303.07109
github: https://github.com/jrobine/twm
---

# TWM: Transformer-Based World Models Are Happy With 100k Interactions

::: info 论文信息
- **Design**: TWM
- **论文全称**: Transformer-Based World Models Are Happy With 100k Interactions
- **arXiv**: [https://arxiv.org/abs/2303.07109](https://arxiv.org/abs/2303.07109)
- **GitHub**: [https://github.com/jrobine/twm](https://github.com/jrobine/twm)
:::

## 核心思想

TWM (Transformer-based World Model) 探索了 Transformer 架构在 world model 中的样本效率极限，证明在极度低数据场景（100k 环境交互步）下，Transformer 世界模型可以表现出色。TWM 直接对标 IRIS，验证了 Transformer world model 在 Atari 100k 基准上可以稳定超越 DreamerV3。

TWM 的设计理念是使用纯 Transformer 对序列化的观测-动作-奖励 token 进行自回归建模，结合 VQ-VAE 离散编码器。与 IRIS 的不同之处在于，TWM 使用了更丰富的训练技术（数据增强、更大的 codebook、更长的上下文窗口）来提升样本效率。

## 技术架构

**Vision Encoding（视觉编码）**：VQ-VAE 离散编码器，将 64×64 图像编码为 16×16=256 个离散 token（codebook 512-1024）。

**Knowledge Learning（知识学习）**：GPT 风格的自回归 Transformer，在包含观测、动作、奖励 token 的联合序列上进行 next-token prediction。关键改进：使用更长的上下文窗口（64 帧历史）和 SimSiam 风格的数据增强。

**Controllable Simulation（可控模拟）**：在 Transformer 生成的 latent token 上训练 actor-critic，使用 Dreamer 风格的 imagination rollout。

## 代码实现要点

代码开源在 [jrobine/twm](https://github.com/jrobine/twm)。基于 PyTorch。VQ-VAE encoder + GPT-style Transformer (15M 参数)，支持 Atari 100k 基准。

## 关键创新点

1. **100k 样本的 Transformer World Model**：极度低数据场景下的实证
2. **长上下文建模**：64 帧历史提升预测精度
3. **数据增强**：SimSiam 风格增强提升样本效率
4. **更大 codebook**：1024 codebook 提升离散表示质量

## 代表性结果

在 Atari 100k 基准上，TWM 平均人类标准化分数达到 1.2×，超越 IRIS (1.05×) 和 DreamerV3 (0.95×)。在 26 款游戏中，TWM 在 21 款上超越 DreamerV3。
