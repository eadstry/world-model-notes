---
title: "Scaling Offline Model-Based RL via Jointly-Optimized World-Action Model Pretraining"
design: "JOWA"
arxiv: https://arxiv.org/abs/2410.00564
github: https://github.com/CJReinforce/JOWA
---

# JOWA: Scaling Offline Model-Based RL via Jointly-Optimized World-Action Model Pretraining

::: info 论文信息
- **Design**: JOWA
- **论文全称**: Scaling Offline Model-Based RL via Jointly-Optimized World-Action Model Pretraining
- **arXiv**: [https://arxiv.org/abs/2410.00564](https://arxiv.org/abs/2410.00564)
- **GitHub**: [https://github.com/CJReinforce/JOWA](https://github.com/CJReinforce/JOWA)
:::

## 学习笔记

### 核心思想

该工作提出了 JOWA，通过联合优化世界模型与动作模型的预训练来实现基于模型的离线强化学习的规模化。其核心创新在于：不再分阶段训练世界模型和策略，而是将两者作为一个整体系统进行端到端的联合预训练，从而实现更紧密的协同优化。
该工作的贡献在于提出了一种更加统一的世界模型策略学习框架，有效地提升了离散RL 的数据效率和最终任务性能。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
