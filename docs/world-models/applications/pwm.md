---
title: "PWM: Policy Learning with Multi-Task World Models"
design: "PWM"
arxiv: https://arxiv.org/abs/2407.02466
github: https://github.com/imgeorgiev/PWM
---

# PWM: Policy Learning with Multi-Task World Models

::: info 论文信息
- **Design**: PWM
- **论文全称**: PWM: Policy Learning with Multi-Task World Models
- **arXiv**: [https://arxiv.org/abs/2407.02466](https://arxiv.org/abs/2407.02466)
- **GitHub**: [https://github.com/imgeorgiev/PWM](https://github.com/imgeorgiev/PWM)
:::

## 学习笔记

### 核心思想

该工作提出了 PWM（Policy learning with Multi-task World Models），探索了多任务世界模型驱动的策略学习。其核心思路是：构建一个能够同时捕捉多种操作任务动态的共享世界模型，然后利用该模型为各任务生成"想象"中的训练经验，从而实现样本高效的多任务策略学习。
该工作的贡献在于展示了共享世界模型在多任务策略学习中的知识迁移潜力，为构建通用操作策略提供了高效的技术方案。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
