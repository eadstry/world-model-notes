---
title: "Learning Interactive World Model for Object-Centric Reinforcement Learning"
design: "FIOC-WM"
arxiv: https://arxiv.org/abs/2511.02225
---

# FIOC-WM: Learning Interactive World Model for Object-Centric Reinforcement Learning

::: info 论文信息
- **Design**: FIOC-WM
- **论文全称**: Learning Interactive World Model for Object-Centric Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2511.02225](https://arxiv.org/abs/2511.02225)
:::

## 核心思想

FIOC-WM (Fully Interactive Object-Centric World Model) 提出了一个全交互式的对象中心世界模型用于强化学习。核心创新是提出了双向的（bidirectional）物理环境交互模型：不仅物体受环境（物理规律）影响，物体也会影响环境（如推开其他物体、改变场景布局）。这种双向交互建模使世界模型能处理复杂的多物体因果链。
FIOC-WM 的关键洞察是：在对象中心世界模型中，大多数方法只建模"物体如何被环境改变（被动），而忽略了"物体如何改变环境"（主动）。FIOC-WM 在物理slots 之间引入显式的pairwise interaction 建模，特别是 attention-based 的交互图——每个物体预测它对其他物体的影响力（influence vector），这种影响通过图传播实现级联效应。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 分解物体 slots。每个slot 包含视觉特征和空间嵌入（位置、方向）。
**Knowledge Learning（知识学习）**：全交互图（Fully Interactive Graph）：每个物体 slot 通过 GAT（Graph Attention Network）预测它对其他每个物理slot 理影响向量"。影响向量被应用到其中slots 的动力学更新中，实现双向交互。此外学习交互热图（interaction heatmap），标识出哪些物体对之间存在重要的物理交互。使用多个物体交互相关的辅助任务（如"预测哪些物体将碰未）来监督交互图。
**Controllable Simulation（可控模拟）**：在交互图增强的 latent space 中进行rollout。可理imagination 解重连"交互图边，实现counterfactual 推理解如果这两个物体不碰撞会怎样"）。
## 代码实现要点

暂无开源代码。基准Slot Attention + GAT interaction graph + auxiliary interaction tasks。在 Physion、CATER 于robot manipulation 基准上评估。
## 关键创新。
1. **全交互物体中心模型*：双向物理环境交互，同时建模主动和被动
2. **GAT 交互视*：图注意力网络显式建模物体间的影响力
3. **交互热图监督**：辅助任务使交互建模可解码4. **Counterfactual 推理**：支持交互图编辑和反事实模拟

## 代表性结。
在Physion 的多体（3-8 物体）碰撞链预测中，FIOC-WM 比单向交互的 baseline 预测精度提升 35%。在需要因果链推理的场景（如多米诺效应、牛顿摆），FIOC-WM 准确预测了级联碰撞事件（5+ 次连续碰撞）。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
