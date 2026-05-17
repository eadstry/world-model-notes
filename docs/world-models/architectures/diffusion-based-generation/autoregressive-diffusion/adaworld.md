---
title: "Adaworld: Learning adaptable world models with latent actions"
design: "Adaworld"
arxiv: https://arxiv.org/abs/2503.18938
github: https://github.com/Little-Podi/AdaWorld
---

# Adaworld: Learning adaptable world models with latent actions

::: info 论文信息
- **Design**: Adaworld
- **论文全称**: Adaworld: Learning adaptable world models with latent actions
- **arXiv**: [https://arxiv.org/abs/2503.18938](https://arxiv.org/abs/2503.18938)
- **GitHub**: [https://github.com/Little-Podi/AdaWorld](https://github.com/Little-Podi/AdaWorld)
:::

## 学习笔记

## 核心思想

AdaWorld（ICML 2025）是 OpenDriveLab/清华团队提出的一种创新的世界模型学习方法，旨在解决现有世界模型的核心局限：**严重依赖大量动作标注数据和昂贵训练，难以通过有限交互适应具有异构动作的新环境**。
AdaWorld 的核心突破是在世界模型预训练阶段**融入动作信息**——但不是依赖人工标注，而是通过**自监督方式从视频中提取潜在动态*（latent actions），捕捉帧之间最关键的状态转移。随后开发基于这些潜在动作条件的自回归世界模型。
这一学习范式使世界模型具有*高度可适应不*——仅需有限的交互和微调，即可高效迁移和学习新动作。综合实验表明，AdaWorld 在模拟质量和视觉规划方面均取得卓越性能。这项工作为世界模型的泛化和适应能力提供了新的视角。
## 技术架。
**Vision Encoding（视觉编码）**：自监督潜在动作提取模块——从视频帧序列中学习编码关键状态转移的紧凑动作表示，不依赖人工标注。自回归世界模型以历史帧和潜在动作为输入，预测未来帧。
**Knowledge Learning（世界知识学习）**：两阶段范式的1) 预训练阶段：在源域视频上自监督提取潜在动作，训练动作条件的自回归世界模型的2) 适应阶段：在新环境中通过有限交互微调，快速学习新动作的映射关系。潜在动作编码了跨场景通用的变化"概念。
**Controllable Simulation（可控推演）**：潜在动作为世界模型提供控制接口。在新环境中，通过少量交互学习如何将具体的物理动作映射到潜在动作空间。视觉规划方面，模型可以在潜在动作空间中搜索最优动作序列实现目标。
## 代码实现要点

- 自监督潜在动作提取：从视频中学习关键状态转移编码- 自回归世界模型：以潜在动作为条件预测未来
- 高效适应：有限交互+ 微调即可学习新动态 - 开源在 Little-Podi/AdaWorld，模型在 HuggingFace 上发。
## 关键创新。
- 自监督潜在动作提取替代动作标注依赖- 预训练阶段融入动作信息使世界模型高度可适应
- 有限交互即可高效适应异构动作的新环境
- 潜在动作空间实现跨场景动作泛化- 模拟质量与视觉规划双。
## 代表性结。
- ICML 2025 接收
- 多环境综合实验验证：模拟质量和视觉规划卓的- 高效适应：有限交互微调即可学习新环境中的新动作
- 超越依赖大量动作标注的现有方。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
