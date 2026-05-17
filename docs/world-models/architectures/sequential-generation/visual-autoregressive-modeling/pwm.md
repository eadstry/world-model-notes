---
title: "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction"
design: "PWM"
arxiv: https://arxiv.org/abs/2510.19654
github: https://github.com/6550Zhao/Policy-World-Model
---

# PWM: From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction

::: info 论文信息
- **Design**: PWM
- **论文全称**: From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction
- **arXiv**: [https://arxiv.org/abs/2510.19654](https://arxiv.org/abs/2510.19654)
- **GitHub**: [https://github.com/6550Zhao/Policy-World-Model](https://github.com/6550Zhao/Policy-World-Model)
:::

## 学习笔记

### 核心思想

PWM（Policy World Model）提出了一种将世界建摸与轨迹规划统一为一个框架的方法，核心是"协同状态-动作预测"（Collaborative State-Action Prediction）。模型使用自回归视频预测来同时生成未来的视觉状态和自车动作，既能够在不给定动作的情况下预测环境将如何自然演化（action-free future forecasting），又能够在给定动作条件下预测执行该动作后的环境变化。

PWM 的关键创新在于引入了"动态增强 Token 生成机制"和"自适应动态焦点损失"，使得模型即使在仅使用当前前视图的条件下，也能在轨迹预测精度上超越使用全景多模态输入的 SOTA 方法。该工作发表于 NeurIPS 2025，证明了将世界建摸和策略规划统一建模的有效性，且在 NuScenes 和 Waymo 等数据集上展现出显著优势。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
