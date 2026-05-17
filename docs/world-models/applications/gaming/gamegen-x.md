---
title: "GameGen-X: Interactive Open-world Game Video Generation"
design: "GameGen-X"
arxiv: https://arxiv.org/abs/2411.00769
github: https://github.com/GameGen-X/GameGen-X
---

# GameGen-X: Interactive Open-world Game Video Generation

::: info 论文信息
- **Design**: GameGen-X
- **论文全称**: GameGen-X: Interactive Open-world Game Video Generation
- **arXiv**: [https://arxiv.org/abs/2411.00769](https://arxiv.org/abs/2411.00769)
- **GitHub**: [https://github.com/GameGen-X/GameGen-X](https://github.com/GameGen-X/GameGen-X)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2410.23614](https://arxiv.org/abs/2410.23614)
- **GitHub**: [https://github.com/GameGen-X/GameGen-X](https://github.com/GameGen-X/GameGen-X)

## 简介
GameGen-X 是一个专门用于生成开放域游戏视频"的大规模生成式模型，由多个大学联合研究团队提出。GameGen-X 的核心理念是"从互联网收集的海量游戏视频中学习通用游戏知识"——团队抓取了超过 150 款不同游戏的超过 32,000 小时的游戏视频数据，涵盖第一人称射击（FPS）、角色扮演（RPG）、即时战略（RTS）、体育游戏、竞速游戏等多种类型。这是当前面向游戏视频生成的最大规模公开数据集合。

GameGen-X 的数据集包含来自 YouTube 动Twitch 等视频平台的游戏实况录像，每段视频都标注了游戏名称、类型、和对应的控制输入推测（通过视频逆推可能的玩家操作）。模型基于扩散模型架构，学习从噪声控制输入到新游戏画面的映射。GameGen-X 的生成能力包括：从文本描述生成游戏画面、从游戏视频预测后续画面、在不同游戏风格之间切换、以及对游戏场景中的角色和物体进行交互式操控。该工作展示了世界模型在开放域游戏内容生成中的巨大潜力。

## 关键特征
- **数据规模**: 150+ 款游戏的2,000+ 小时视频、多游戏类型覆盖
- **数据模式**: RGB 游戏视频、游戏类型标签、文本描述、推测控制输。
- **主要指标**: FVD（视频生成质量）、CLIP 相似度、用户偏好评。
- **领域**: 开放式游戏视频生成、交互式内容创作、跨游戏世界模型

## 与世界模型的关系
GameGen-X 展示了世界模型在"开放域游戏视频"上的泛化能力——模型不是仅学会一款游戏的动态，而是一150+ 款游戏中提取共通的视觉和交互模式。这证明世界模型可以从大规模异质数据中学习跨环境的通用世界知识。GameGen-X 的数据集规模型2K 小时）也为训练大规模游戏世界模型提供了新标准，推动世界模型向"通用游戏引擎"的目标迈进。

## 代表性用例
- 开放域游戏视频/内容生成的研究基。
- 游戏开发和实时渲染的AI 辅助工具
- 游戏世界模型的大规模预训练数据源
- 交互式游戏环境生成的世界模型验证平台

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)