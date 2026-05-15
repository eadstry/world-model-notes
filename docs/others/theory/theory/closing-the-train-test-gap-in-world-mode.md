---
title: "Closing the Train-Test Gap in World Models for Gradient-Based Planning"
arxiv: https://arxiv.org/abs/2512.09929
github: https://github.com/qw3rtman/robust-world-model-planning
---

# Closing the Train-Test Gap in World Models for Gradient-Based Planning

::: info 论文信息
- **论文全称**: Closing the Train-Test Gap in World Models for Gradient-Based Planning
- **arXiv**: [https://arxiv.org/abs/2512.09929](https://arxiv.org/abs/2512.09929)
- **GitHub**: [https://github.com/qw3rtman/robust-world-model-planning](https://github.com/qw3rtman/robust-world-model-planning)
:::

## 学习笔记

### 核心思想

该工作聚焦世界模型在实际部署中的一个根本性挑战：训练环境与测试环境之间的分布偏移（distribution shift）。世界模型在训练环境中可能表现良好，但在部署场景中由于环境变化，其预测精度往往会显著下降——这就是所谓的"训练-测试鸿沟"。

作者针对基于梯度的规划任务，提出了一套系统性的分析和缓解策略。该工作的核心贡献在于揭示了这一鸿沟的形成机制，并提出了鲁棒世界模型规划的新方法。
