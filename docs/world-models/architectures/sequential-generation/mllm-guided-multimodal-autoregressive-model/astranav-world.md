---
title: "AstraNav-World: World Model for Foresight Control and Consistency"
design: "AstraNav-World"
arxiv: https://arxiv.org/abs/2512.21714
github: https://github.com/amap-cvlab/AstraNav-World
website: https://astra-amap.github.io/AstraNav-World.github.io/
---

# AstraNav-World: 面向前瞻控制与一致性的世界模型

::: info 论文信息
- **Design**: AstraNav-World
- **论文全称**: AstraNav-World: World Model for Foresight Control and Consistency
- **arXiv**: [https://arxiv.org/abs/2512.21714](https://arxiv.org/abs/2512.21714)
- **GitHub**: [https://github.com/amap-cvlab/AstraNav-World](https://github.com/amap-cvlab/AstraNav-World)
- **Website**: [https://astra-amap.github.io/AstraNav-World.github.io/](https://astra-amap.github.io/AstraNav-World.github.io/)
:::

## 学习笔记

### 核心思想

AstraNav-World 是面向具身导航的端到端世界模型，由高德地图团队提出。其核心创新在于：将基于扩散的视频生成与视觉-语言策略（vision-language policy）统一在一个概率框架中，联合推理未来视觉状态与动作序列。在动态环境中，导航模型不仅要准确预测环境的未来演变，还需在视觉预测与轨迹规划之间保持一致性——即「看到什么」决定了「走向哪里」，而「规划路径」也应约束「预期看到什么」。

模型通过双向约束机制实现这一目标：视觉预测为轨迹规划提供前向引导，而规划路径又作为条件信号约束扩散模型生成的视觉内容。这种「视觉预测 + 轨迹规划」的双向统一训练，使模型在未见场景中展现出良好的泛化能力，甚至在真实世界部署中也能直接从仿真迁移到现实。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
