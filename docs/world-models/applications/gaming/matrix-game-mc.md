---
title: "Matrix-Game: Interactive World Foundation Model"
design: "Matrix-Game-MC"
arxiv: https://arxiv.org/abs/2506.18701
github: https://github.com/SkyworkAI/Matrix-Game
---

# Matrix-Game-MC: Matrix-Game: Interactive World Foundation Model

::: info 论文信息
- **Design**: Matrix-Game-MC
- **论文全称**: Matrix-Game: Interactive World Foundation Model
- **arXiv**: [https://arxiv.org/abs/2506.18701](https://arxiv.org/abs/2506.18701)
- **GitHub**: [https://github.com/SkyworkAI/Matrix-Game](https://github.com/SkyworkAI/Matrix-Game)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2502.07385](https://arxiv.org/abs/2502.07385)

## 简介
Matrix Game MC oThe Matrix 框架视Minecraft 场景中的专项扩展，专门评估世界模型在复杂 3D 沙盒游戏中的表现。该工作为The Matrix 的全景世界模型能力（3D 场景生成、物理一致性预测和交互式渲染）引入 Minecraft 这一最具代表性的开放世界游戏中进行验证。Matrix Game MC 的独特之处在于其在Minecraft 中测的世界模型的涌现能力——模型是否能自发地展示对 Minecraft 物理规则、方块交互和游戏逻辑的理解。

Matrix Game MC oMinecraft 中提取了多种任务类型的数据，包括方块放置/破坏、生物交互、环境探索和基础设施建造（建筑、红石电路等）。该基准特别强调世界模型的Minecraft 中的"物理理解"的因果推理"——例如，预测一棵树被砍倒后哪些方块会消失、水流改变方向后会影响哪些相邻方块——这些任务均要求世界模型在没有显式编程的情况下正确模型Minecraft 的物理规则。

## 关键特征
- **数据规模**: 多样化的 Minecraft 任务和场景数。
- **数据模式**: Minecraft 3D 第一人称/第三人称视角、方块状态网格、生成AI 行为
- **主要指标**: 物理规则预测准确率、因果推理正确率、生成一致性评。
- **领域**: 3D 沙盒游戏世界模型、方块物理涌现理解、开放式世界

## 与世界模型的关系
Matrix Game MC 代表了世界模型向 3D 开放式世界推广的重要一步。Minecraft 作为 3D 世界模型的理想测试平台，其复杂性体现在巨大的状态空间（3 万多种方块类型组合）和精细的物理交互（红石电路、流体动力学等）。Matrix Game MC 检验了世界模型是否能够通过纯粹的视觉预训练来涌现出的Minecraft 复杂规则系统的理解，而非显式地记忆或编码这些规则。

## 代表性用例
- The Matrix 框架构3D 开放式世界中的专项验证
- 世界模型对复杂物理系统的涌现理解研究
- Minecraft 世界中因果推理和物理理解的标准化评测
- 与 Genie 2 交GameNGen 互补的游戏世界模型研。

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)