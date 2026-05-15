---
title: "Accurate and Efficient World Modeling with Masked Latent Transformers"
design: "EMERALD"
arxiv: https://arxiv.org/abs/2507.04075
github: https://github.com/burchim/EMERALD
---

# EMERALD: Accurate and Efficient World Modeling with Masked Latent Transformers

::: info 论文信息
- **Design**: EMERALD
- **论文全称**: Accurate and Efficient World Modeling with Masked Latent Transformers
- **arXiv**: [https://arxiv.org/abs/2507.04075](https://arxiv.org/abs/2507.04075)
- **GitHub**: [https://github.com/burchim/EMERALD](https://github.com/burchim/EMERALD)
:::

## 核心思想

EMERALD 是 MIT 提出的准确和高效的世界模型框架。核心创新是使用掩码潜变量 Transformer（Masked Latent Transformer）进行世界模型学习：通过 masks 控制信息流，使模型在效率和准确度之间取得优秀平衡。EMERALD 采用编码器-解码器结构，在 masked latent space 中进行未来状态预测，实现了比 DreamerV3 更准确的长期预测。

EMERALD 的关键技术是 Masked Latent Modeling（受 MAE 启发）在时间维度的应用。通过随机遮蔽未来帧的某些 latent tokens，模型被迫学习鲁棒的时间预测能力。同时，masks 还用于通过控制信息流实现高效的并行训练。

## 技术架构

**Vision Encoding（视觉编码）**：ViT-based encoder 将观测映射为 latent patch tokens。类似 MAE，可在编码过程中应用 spatial masking 以提升效率。

**Knowledge Learning（知识学习）**：Masked Latent Transformer 在时间维度上应用 masking 策略：给定过去帧的 latent tokens 和动作，模型以并行方式预测未来帧的 masked latent tokens。使用多种 mask 策略（随机 mask、block mask、causal mask）。奖励和终止条件也通过 decoder 预测。

**Controllable Simulation（可控模拟）**：在 masked latent space 中进行 imagination rollout，结合 DreamerV3 风格的 actor-critic 训练。

## 代码实现要点

代码开源在 [burchim/EMERALD](https://github.com/burchim/EMERALD)。基于 PyTorch。ViT encoder + Masked Latent Transformer + actor-critic。在 Atari 100k、DMC 和 ProcGen 上评估。

## 关键创新点

1. **Masked Latent Transformer**：时间维度上的 masked prediction
2. **并行 latent prediction**：高效批量化预测
3. **多 mask 策略**：灵活的信息流控制
4. **准确-效率平衡**：在 DreamerV3 质量的前提下提升训练速度

## 代表性结果

在 Atari 100k 基准上，EMERALD 达到 1.35× 人类标准化分数，超越 DreamerV3 (0.95×)、IRIS (1.05×) 和 TWM (1.2×)。在 DMC 连续控制任务上性能匹配 DreamerV3，训练速度提升 2-3 倍。在 ProcGen 泛化测试中展现显著优势。
