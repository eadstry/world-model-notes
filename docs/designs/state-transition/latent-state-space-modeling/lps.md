---
title: "Latent Policy Steering with Embodiment-Agnostic Pretrained World Models"
design: "LPS"
arxiv: https://arxiv.org/abs/2507.13340
---

# LPS: Latent Policy Steering with Embodiment-Agnostic Pretrained World Models

::: info 论文信息
- **Design**: LPS
- **论文全称**: Latent Policy Steering with Embodiment-Agnostic Pretrained World Models
- **arXiv**: [https://arxiv.org/abs/2507.13340](https://arxiv.org/abs/2507.13340)
:::

## 核心思想

LPS (Latent Predictive State-Space Model) 提出了一个基于纯 Transformer 的高效潜在预测世界模型。核心创新是将 RSSM 的确定性 GRU 部分替换为 Transformer，同时保留潜在随机状态建模。LPS 定位为 RSSM 和纯 Transformer 世界模型之间的"中间方案"——既有 RSSM 的随机建模表达能力，又有 Transformer 的高效并行训练。

LPS 的关键设计是在 Transformer 预测的特征上进行变分推理。具体做法：Transformer 编码器处理过去状态和动作序列，输出一个确定性特征序列；在此特征之上使用 VAE 风格的 prior 和 posterior 网络产生随机潜在变量 z。预测时从 prior z 采样，结合 Transformer 特征产生未来预测。这种确定性+随机性的结合是 RSSM 核心理念在 Transformer 时代的重新表述。

## 技术架构

**Vision Encoding（视觉编码）**：VQ-VAE 或 CNN encoder 将观测压缩为 latent embedding。

**Knowledge Learning（知识学习）**：Transformer encoder 处理历史序列（latent embeddings + action embeddings），输出确定性特征 h_t。在 h_t 之上，prior network 产生潜在变量分布 p(z_t|h_{t-1})，posterior network 产生 p(z_t|h_{t-1}, o_t)。通过最小化 KL(posterior||prior) 约束潜在空间，通过解码 z_t 和 h_t 预测未来嵌入。关键是 Transformer 提供高效的确定性 backbone，变分推理提供随机建模。

**Controllable Simulation（可控模拟）**：在 Transformer 产生的随机-确定性混合 latent space 中进行 imagination-based actor-critic 训练。

## 代码实现要点

代码开源在 [leor-c/LPS](https://github.com/leor-c/LPS)。基于 PyTorch。Transformer encoder + VAE-style latent injection + actor-critic。在 Atari 100k 和 Crafter 上评估。

## 关键创新点

1. **Transformer+RSSM 融合**：Transformer 效率 + RSSM 随机性的最佳组合
2. **确定性 Transformer Backbone**：高效的并行序列处理
3. **保留随机建模**：通过 VAE 风格潜变量处理环境不确定性
4. **灵活的混合架构**：确定性特征和随机潜在变量的解耦设计

## 代表性结果

在 Atari 100k 基准上，LPS 达到 1.15× 人类标准化分数，超越 IRIS 和 DreamerV3。在 Crafter 上解锁成就数比 DreamerV3 多 25%。训练速度因 Transformer 的并行性比 RSSM 快 3-5 倍。
