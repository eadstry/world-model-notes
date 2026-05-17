---
title: "Efficient Exploration and Discriminative World Model Learning with an Object-Centric Abstraction"
design: "MEAD"
arxiv: https://arxiv.org/abs/2408.11816
---

# MEAD: Efficient Exploration and Discriminative World Model Learning with an Object-Centric Abstraction

::: info 论文信息
- **Design**: MEAD
- **论文全称**: Efficient Exploration and Discriminative World Model Learning with an Object-Centric Abstraction
- **arXiv**: [https://arxiv.org/abs/2408.11816](https://arxiv.org/abs/2408.11816)
:::

## 核心思想

MEAD (Model-based Exploration And Discovery) 提出了一个利用物体中心抽象来实现高效探索和判别式世界模型学习的框架。核心创新是一object-centric 表示用于驱动探索行为——agent 通过追踪环境中每个物体的"认知不确定度"，决定探索方向。高不确定的物体（如从未成功操作的物体）成为探索目标。
MEAD 的关键见解是：高效探索需要结构化——随机探索（了ε-greedy）在复杂场景中效率极低。通过 object-centric 表示，agent 可以"命名"关注的对象（"那个蓝色方块我还不知道怎么操作"），从而实现有针对性的好奇心驱动探索。这比基于整体状态的不确定性驱动探索更有效。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为物体 slots。每一slot 个encoding 包含该物体的视觉特征和状态估计。
**Knowledge Learning（知识学习）**：在物体 slots 上学习双支路世界模型：（1）Discriminative branch——使用contrastive learning 使相似的物体状态在 latent space 中接近；的）Generative branch——预测物体未来的状态。探索奖励来自物理slot 的不确定度——ensemble 多个 world model，对每个物体动predictions disagreement 作为 curiosity bonus。
**Controllable Simulation（可控模拟）**：在 object-centric latent space 中进行curiosity-driven imagination。探索策略显式地朝向高不确定的物体移动。
## 代码实现要点

暂无开源代码。基准Slot Attention + DreamerV3 + contrastive representation + ensemble uncertainty。在 ProcGen 于DeepMind Lab 上评估。
## 关键创新。
1. **物体级探索驱动*：在物体粒度而非全局粒度计算探索奖励
2. **Contrastive World Model**：判别式对比学习增强物体表示
3. **Ensemble Disagreement**：物体级的不确定度驱动好奇心
4. **目标导向探索**：agent 明确保了解某物理作为探索目标

## 代表性结。
在ProcGen 的探索场景中，MEAD 的探索覆盖面积（state coverage）比 DreamerV3 学3 倍。在需的选择性交互的任务中（如多个物体中只有一个是任务相关），MEAD 的任务完成速度比随机探索方法快 5 倍。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
