---
title: "SlotPi: Physics-informed Object-centric Reasoning Models"
design: "SlotPi"
arxiv: https://arxiv.org/abs/2506.10778
---

# SlotPi: Physics-informed Object-centric Reasoning Models

::: info 论文信息
- **Design**: SlotPi
- **论文全称**: SlotPi: Physics-informed Object-centric Reasoning Models
- **arXiv**: [https://arxiv.org/abs/2506.10778](https://arxiv.org/abs/2506.10778)
:::

## 核心思想

SlotPi 提出了物理信息增强的对象中心世界模型框架。核心创新是记Slot Attention 分解的物理slots 中注入物理信息（physics-informed features），使世界模型不仅学习外观动力学，还学习底层物理量（如质量、速度、动量）。这使得模型的长期预测更加物理一致，物体交互（如碰撞）的预测更加准确。
SlotPi 的关键设计是"物理感知识slot"——除了标准的视觉 slot 编码，SlotPi 还学习每个slot 的隐式物理属性向量（质量、弹性系数等），并将这些物理特征融入到动力学预测中。这些物理属性不需要人工标注，通过自监督方式从物体运动的物理规律中学到。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为物体 slots。此外引的Physics Encoder 从物体的运动模式中学习物理属性向量（如质量、弹性）。
**Knowledge Learning（知识学习）**：在物理增强的slots 上进行动力学预测。动力学模型同时接收视觉 slot 和物理slot 作为输入，预测未来slot。训练损失包括标准的重建损失和物理一致性损失（如动量守恒、能量守恒和碰撞法线约束）。物理属性通过多步动力学预测的误差信号进行自监督优化。
**Controllable Simulation（可控模拟）**：在物理增强化latent space 中进行rollout，物理先验确保长期预测稳定。
## 代码实现要点

暂无开源代码。基准Slot Attention + physics encoding + conservation law constraints。在 Physion 于CLEVRER 上评估。
## 关键创新。
1. **物理感知的物理slots**：在 visual slot 中融入隐式物理属性2. **自监督物理属性学习*：物理属性无需标注，从运动中学习3. **守恒定律约束**：动作能量守恒作为训练正则的4. **准确的碰撞预测*：隐式质量弹性改善碰撞动力学

## 代表性结。
在Physion 的物理交互测试中，SlotPi 在碰撞后物体速度预测的准确率比标注Slot-based 方法方40%。在需要质量推理的场景中（如不同质量球的碰撞），SlotPi 展示了正确的质量感知行为（小球被大球弹开，而非相反）。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
