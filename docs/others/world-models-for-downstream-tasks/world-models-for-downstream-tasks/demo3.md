---
title: "Multi-Stage Manipulation with Demonstration-Augmented Reward, Policy, and World Model Learning"
design: "DEMO3"
arxiv: https://arxiv.org/abs/2503.01837
github: https://github.com/adrialopezescoriza/demo3
---

# DEMO3: Multi-Stage Manipulation with Demonstration-Augmented Reward, Policy, and World Model Learning

::: info 论文信息
- **Design**: DEMO3
- **论文全称**: Multi-Stage Manipulation with Demonstration-Augmented Reward, Policy, and World Model Learning
- **arXiv**: [https://arxiv.org/abs/2503.01837](https://arxiv.org/abs/2503.01837)
- **GitHub**: [https://github.com/adrialopezescoriza/demo3](https://github.com/adrialopezescoriza/demo3)
:::

## 学习笔记

### 核心思想

该工作提出了 Demo3，通过精馏世界模型来实现高效的机器人技能学习。其核心思路是：先训练一个功能强大的大型世界模型，然后通过知识精馏（distillation）技术将其压缩为一个小型高效的世界模型，用于实际部署和机器人策略学习。

该工作的价值在于解决了强大世界模型的计算开销与机器人实时推理需求之间的矛盾，为世界模型的工程化部署提供了实用的技术方案。
