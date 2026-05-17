---
title: "FOCUS: Object-Centric World Models for Robotics Manipulation"
design: "FOCUS"
arxiv: https://arxiv.org/abs/2307.02427
github: https://github.com/StefanoFerraro/FOCUS
---

# FOCUS: Object-Centric World Models for Robotics Manipulation

::: info 论文信息
- **Design**: FOCUS
- **论文全称**: FOCUS: Object-Centric World Models for Robotics Manipulation
- **arXiv**: [https://arxiv.org/abs/2307.02427](https://arxiv.org/abs/2307.02427)
- **GitHub**: [https://github.com/StefanoFerraro/FOCUS](https://github.com/StefanoFerraro/FOCUS)
:::

## 核心思想

FOCUS oMIT 提出的面向机器人操控的物体中心世界模型。核心创新是在机器人操控场景中利用对象中心表示来改善世界模型的准确性和泛化性。FOCUS 通过学习将场景分解为物体和背景，实现从像素到物体状态的无监督分解，然后在这些物体表示之上学习物体间的交互动力学。
FOCUS 的关键动机是：机器人操控本质上是以物体为中心的——agent 与特定物体交互（抓取、推动），场景中其他物体主要作为环境上下文。物体中心的世界模型的agent 能聚焦于与任务相关的物体，忽略无关背景变化，从而提升样本效率和泛化能力。
## 技术架。
**Vision Encoding（视觉编码）**：使用Slot Attention 于RGB 观测分解为物理slots。在机器人操控场景中，这种slots 通常分解为：操作物体、目标物体、机器人和背景。
**Knowledge Learning（知识学习）**：在物体 slots 上学习交互动力学。使用Transformer 于GNN 建模物体间的 pairwise interactions。世界模型预测每个物体的未来 slot 表示（位置、外观）。除了标准重建损失外，引入物体特定的损失（如物体是否被成功抓取）。
**Controllable Simulation（可控模拟）**：在物体 slots 空间中进行imagination-based planning。策略可以显式关注特定物体（的目标物体"slot），在想象中测试不同的交互方式。
## 代码实现要点

代码开源在 [StefanoFerraro/FOCUS](https://github.com/StefanoFerraro/FOCUS)。基准PyTorch。Slot Attention + GNN dynamics + behavior learning。在 MetaWorld 于Robosuite 上评估。
## 关键创新。
1. **机器人操控的物体中心世界模型**：Slot Attention 适配操控场景
2. **物体-背景解记*：分离操控物体和环境上下的3. **GNN 交互建模**：图神经网络建模物体间物理交互4. **聚焦式想象*：agent 在想象中关注任务相关物体

## 代表性结。
在MetaWorld 操控任务中，FOCUS 的5-shot 学习（仅 5 条示范轨迹）上成功率提DreamerV2 提20%。在物体数量变化（如增加干扰物体）的场景中，FOCUS 的成功率下降不到 10%，上DreamerV2 下降 30%+。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
