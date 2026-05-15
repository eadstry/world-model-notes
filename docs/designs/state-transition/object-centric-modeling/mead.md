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

MEAD (Model-based Exploration And Discovery) 提出了一个利用物体中心抽象来实现高效探索和判别式世界模型学习的框架。核心创新是将 object-centric 表示用于驱动探索行为——agent 通过追踪环境中每个物体的"认知不确定度"，决定探索方向。高不确定的物体（如从未成功操作的物体）成为探索目标。

MEAD 的关键见解是：高效探索需要结构化——随机探索（如 ε-greedy）在复杂场景中效率极低。通过 object-centric 表示，agent 可以"命名"关注的对象（"那个蓝色方块我还不知道怎么操作"），从而实现有针对性的好奇心驱动探索。这比基于整体状态的不确定性驱动探索更有效。

## 技术架构

**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为物体 slots。每个 slot 的 encoding 包含该物体的视觉特征和状态估计。

**Knowledge Learning（知识学习）**：在物体 slots 上学习双支路世界模型：（1）Discriminative branch——使用 contrastive learning 使相似的物体状态在 latent space 中接近；（2）Generative branch——预测物体未来的状态。探索奖励来自物体 slot 的不确定度——ensemble 多个 world model，对每个物体的 predictions disagreement 作为 curiosity bonus。

**Controllable Simulation（可控模拟）**：在 object-centric latent space 中进行 curiosity-driven imagination。探索策略显式地朝向高不确定的物体移动。

## 代码实现要点

暂无开源代码。基于 Slot Attention + DreamerV3 + contrastive representation + ensemble uncertainty。在 ProcGen 和 DeepMind Lab 上评估。

## 关键创新点

1. **物体级探索驱动**：在物体粒度而非全局粒度计算探索奖励
2. **Contrastive World Model**：判别式对比学习增强物体表示
3. **Ensemble Disagreement**：物体级的不确定度驱动好奇心
4. **目标导向探索**：agent 明确将"了解某物体"作为探索目标

## 代表性结果

在 ProcGen 的探索场景中，MEAD 的探索覆盖面积（state coverage）比 DreamerV3 高 3 倍。在需要"选择性交互"的任务中（如多个物体中只有一个是任务相关），MEAD 的任务完成速度比随机探索方法快 5 倍。
