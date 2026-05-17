---
title: "Taming generative video models for zero-shot optical flow extraction"
design: "KL-tracing"
arxiv: https://arxiv.org/abs/2507.09082
github: https://github.com/neuroailab/kl_tracing
---

# KL-tracing: Taming generative video models for zero-shot optical flow extraction

::: info 论文信息
- **Design**: KL-tracing
- **论文全称**: Taming generative video models for zero-shot optical flow extraction
- **arXiv**: [https://arxiv.org/abs/2507.09082](https://arxiv.org/abs/2507.09082)
- **GitHub**: [https://github.com/neuroailab/kl_tracing](https://github.com/neuroailab/kl_tracing)
:::

## 学习笔记

### 核心思想

该工作提出了 KL-Tracing，通过对世界模型的后训练进行知识定位和路径追踪来提升其在下游任务中的表现。其核心思路是：识别世界模型中对特定下游任务最关键的知识路径，然后有针对性地对这些路径进行微调和优化。
该工作的一个突出见解是，世界模型训练不应止步于通用的预测能力，而应进一步通过任务特定的后训练来精准放大对下游任务最关键的知识信号，从而提高下游应用的效率。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
