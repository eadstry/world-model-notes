---
title: "Reimagination with Test-time Observation Interventions: Distractor-Robust World Model Predictions for Visual Model Predictive Control"
design: "ReOI"
arxiv: https://arxiv.org/abs/2506.16565
---

# ReOI: Reimagination with Test-time Observation Interventions: Distractor-Robust World Model Predictions for Visual Model Predictive Control

::: info 论文信息
- **Design**: ReOI
- **论文全称**: Reimagination with Test-time Observation Interventions: Distractor-Robust World Model Predictions for Visual Model Predictive Control
- **arXiv**: [https://arxiv.org/abs/2506.16565](https://arxiv.org/abs/2506.16565)
:::

## 学习笔记

### 核心思想

该工作提出了 ReOI，通过在测试时进行观察干预来实现对干扰因素鲁棒的世界模型预测。其核心创新在于：当部署场景中存在训练时未见过的视觉干扰（distractor）时，模型通过主动的"重新想象"（reimagination）对观察进行干预，滤除干扰因素的影响，保持准确的物理预测。

该工作的贡献在于为视觉模型预测控制（VMPC）提供了一种对抗策略，有效提升了世界模型在真实且充满干扰的环境中的鲁棒性和可靠性。
