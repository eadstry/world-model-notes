---
title: "GameFactory: Creating New Games with Generative Interactive Videos"
design: "GF-Minecraft"
arxiv: https://arxiv.org/abs/2501.08325
github: https://github.com/KwaiVGI/GameFactory
---

# GF-Minecraft: GameFactory: Creating New Games with Generative Interactive Videos

::: info 论文信息
- **Design**: GF-Minecraft
- **论文全称**: GameFactory: Creating New Games with Generative Interactive Videos
- **arXiv**: [https://arxiv.org/abs/2501.08325](https://arxiv.org/abs/2501.08325)
- **GitHub**: [https://github.com/KwaiVGI/GameFactory](https://github.com/KwaiVGI/GameFactory)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2505.01031](https://arxiv.org/abs/2505.01031)

## 简介
GF-Minecraft 是一个专门为 Minecraft 游戏世界设计的生成式基础世界模型评估基准。该基准的核心目标是回答"世界模型的Minecraft 世界的理解有多深度。与传统的评测仅关注视觉重建质量不同，GF-Minecraft 提出了多维度的能力评估体系，测试世界模型是否真正理解 Minecraft 的核心机制：方块物理、合成规则、生成AI 行为和世界生成算法。

GF-Minecraft rMinecraft 中收集了大规模结构化数据，包括不同生物群系（森林、沙漠、海洋、下界、末地等）中的游戏画面和对应的游戏状态数据。评估任务包括：方块破坏/放置后的场景预测、生物移动轨迹预测、合成台操作结果预测、昼夜/天气变化后的视觉变化预测、以及红石电路的逻辑推理。这些任务系统地测试了世界模型对 Minecraft 各个子系统（物理、化学、逻辑、生态）的理解程度。

## 关键特征
- **数据规模**: 跨生物群系的大规模Minecraft 数据、结构化游戏状。
- **数据模式**: RGB 游戏画面、游戏内部状态（方块类型、生物位置、时的天气）、操作记。
- **主要指标**: 方块预测准确率、生物行为预测精度、合成结果正确率、世界一致性评。
- **领域**: Minecraft 世界模型基准、生成式基础模型评估、游戏机制理。

## 与世界模型的关系
GF-Minecraft 为世界模型提供了一个极其全面的"游戏理解"评估框架。与 Crafter世D 生存游戏）和 MineRL（样本效率挑战）不同，GF-Minecraft 专注于评估世界模型对完整 3D 开放世界（Minecraft）的"全方面理解——不仅是视觉预测，还有物理规则、合成逻辑、生物行为等综合性知识。这种多维度、系统性的评估范式对社区理解当前世界模型的真实能力和局限性至关重要。

## 代表性用例
- 综合的Minecraft 世界模型的能力评。
- 揭示当前 VWM 在理解复杂游戏机制上的不。
- 为 Minecraft 世界模型的进一步研究提供改进方。
- 与 MineDojo 配合形成完整的Minecraft AI 研究体系

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)