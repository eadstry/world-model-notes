---
title: "Learning World Models for Interactive Video Generation"
design: "VRAG"
arxiv: https://arxiv.org/abs/2505.21996
website: https://sites.google.com/view/vrag
---

# VRAG: Learning World Models for Interactive Video Generation

::: info 论文信息
- **Design**: VRAG
- **论文全称**: Learning World Models for Interactive Video Generation
- **arXiv**: [https://arxiv.org/abs/2505.21996](https://arxiv.org/abs/2505.21996)
- **Website**: [https://sites.google.com/view/vrag](https://sites.google.com/view/vrag)
:::

## 学习笔记

## 核心思想

VRAG（Video Retrieval Augmented Generation，Princeton）深入分析了视频世界模型的两个根本性挑战：(1) **复合误差**（compounding errors）在自回归视频生成中根本上是不可消除的——每一帧的微小误差在自回归循环中逐步放大的2) **记忆机制不足**导致世界模型失去时空连贯性。
VRAG 的实验揭示了关键发现：朴素的自回归生成（即使扩展上下文窗口）和基于检索增强生成（RAG）对视频生成效果有限——主要原因是当前视频模型的*上下文学习能力有的*，无法有效利用额外提供的参考信息。
VRAG 提出的解决方案是引入**显式全局状态条件*（explicit global state conditioning）：通过视频检索增强生成框架，将检索到的相关信息以显式状态的方式注入模型，而非依赖模型自己去从上下文中学习隐含关联。这种方法显著减少了长时复合误差，增强了世界模型的时空一致性。工作还为视频世界模型建立了全面的基准，照亮了未来的研究方向。
## 技术架。
**Vision Encoding（视觉编码）**：图像到视频模型通过额外的动作条件输入和自回归框架获得交互能力。VRAG 进一步引入视频检索机制，从数据库中检索与当前状态相关的历史视频片段作为条件信号。
**Knowledge Learning（世界知识学习）**：复合误差分析揭示了自回归视频生成中误差传播的本质——即使每个独立帧的生成质量很高，累积效应也会导致序列末端的严重漂移。显式全局状态条件将检索到的关键信息作为结构化状态注入，绕过了模型上下文学习的局限性。
**Controllable Simulation（可控推演）**：显式全局状态确保模型在长序列推演中保持对环境整体状态的认知，显著降低漂移。检索增强为模型提供"外部记忆"，补充模型内部知识的不足。
## 代码实现要点

- VRAG 框架：视频检索增强生成+ 显式全局状态条件- 复合误差分析：揭示自回归视频生成误差传播的本的- 大规模评估基准：为视频世界模型提供全面对于- 开源页面：sites.google.com/view/vrag

## 关键创新。
- 系统性揭示自回归视频生成中复合误差的不可消除的- 发现当前视频模型的上下文学习能力有限（RAG 效果不佳）：- 显式全局状态条件替代隐式上下文学习
- 视频检索增强框架显著减少长时误的- 建立全面的视频世界模型评估基。
## 代表性结。
- 显式全局状态条件显著减少长时复合误的- 时空一致性大幅提出- RAG 和扩展上下文窗口对视频生成效果有行- 为视频世界模型领域建立全面基。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
