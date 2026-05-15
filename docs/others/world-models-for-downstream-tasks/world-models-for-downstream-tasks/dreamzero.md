---
title: "World Action Models are Zero-shot Policies"
design: "DreamZero"
arxiv: https://arxiv.org/abs/2602.15922
github: https://github.com/dreamzero0/dreamzero
---

# DreamZero: World Action Models are Zero-shot Policies

::: info 论文信息
- **Design**: DreamZero
- **论文全称**: World Action Models are Zero-shot Policies
- **arXiv**: [https://arxiv.org/abs/2602.15922](https://arxiv.org/abs/2602.15922)
- **GitHub**: [https://github.com/dreamzero0/dreamzero](https://github.com/dreamzero0/dreamzero)
:::

## 学习笔记

### 核心思想

该工作提出了 DreamZero，证明了世界动作模型本身就可以作为零样本策略使用。其核心发现是：经过充分训练的世界模型，在理解物理世界动态后，可以直接通过"想象-评估"的推理过程生成合理的动作序列，而无需额外的策略训练。

该工作的突破性在于它模糊了"世界模型"与"策略"之间的传统边界，展示了世界理解与行动决策在深层上可能是统一的——一个真正理解世界的模型，天然就知道如何行动。
