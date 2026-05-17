---
title: "DiWA: Diffusion Policy Adaptation with World Models"
design: "DiWA"
arxiv: https://arxiv.org/abs/2508.03645
github: https://github.com/acl21/diwa
---

# DiWA: Diffusion Policy Adaptation with World Models

::: info 论文信息
- **Design**: DiWA
- **论文全称**: DiWA: Diffusion Policy Adaptation with World Models
- **arXiv**: [https://arxiv.org/abs/2508.03645](https://arxiv.org/abs/2508.03645)
- **GitHub**: [https://github.com/acl21/diwa](https://github.com/acl21/diwa)
:::

## 学习笔记

### 核心思想

该工作提出了 DiWA，探索了扩散策略与世界模型的自适应融合。其核心设计是：利用世界模型对扩散策略生成的动作进行"虚拟执行"和评估，从而在策略部署前筛选和优化动作输出，提升策略在真实环境中的表现。
该工作的贡献在于为扩散策略提供了一种基于世界模型的实时动作验证和适应机制，有效弥合了策略训练环境与部署环境之间的分布偏移。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
