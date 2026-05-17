---
title: "JARVIS-VLA: Post-Training Large-Scale Visual Language Models to Play Visual Games with Keyboards and Mouse"
design: "JARVIS-VLA"
arxiv: https://arxiv.org/abs/2503.16365
github: https://github.com/CraftJarvis/JarvisVLA
---

# JARVIS-VLA: Post-Training Large-Scale Visual Language Models to Play Visual Games with Keyboards and Mouse

::: info 论文信息
- **Design**: JARVIS-VLA
- **论文全称**: JARVIS-VLA: Post-Training Large-Scale Visual Language Models to Play Visual Games with Keyboards and Mouse
- **arXiv**: [https://arxiv.org/abs/2503.16365](https://arxiv.org/abs/2503.16365)
- **GitHub**: [https://github.com/CraftJarvis/JarvisVLA](https://github.com/CraftJarvis/JarvisVLA)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2503.20372](https://arxiv.org/abs/2503.20372)

## 简介
JARVIS-VLA 是一个将视觉语言动作（VLA）模型应用于 Minecraft 的交互式游戏世界模型的综合系统。该工作探索的核心问题是：能否将 VLA 模型作为"游戏世界中的通用玩家"，通过理解像素和文本指令来与复杂的开放式游戏世界进行交互。JARVIS-VLA 构建模Minecraft 中的大规模语言-视觉-动作数据集，覆盖 100+ 种不同的游戏任务和活动。

JARVIS-VLA 使用了从 Minecraft 游戏中收集的多模态数据，包括第一人称视角的游戏画面、自然语言指令文本（如"建造一个小木屋"和寻找钻石"）以及对应的精细键盘/鼠标操作序列。该数据集的特点是覆盖了 Minecraft 的广阔游戏内容——从基础生存（采集、建造）到高级目标（红石电路、附魔），使模型需要掌在 Minecraft 的丰富世界规则。JARVIS-VLA 的系统架构结合了视觉编码器、语言编码器和动作解码器，实现了端到端的像素到动作映射。

## 关键特征
- **数据规模**: 100+ 型Minecraft 任务、大规模语言-视觉-动作对齐数据
- **数据模式**: 第一人称 RGB 游戏画面、自然语言指令、精细键盘鼠标操作
- **主要指标**: 任务完成率、指令遵循准确度、多任务泛化
- **领域**: 视觉语言动作模型、Minecraft 世界模型、语言驱动游戏交互

## 与世界模型的关系
JARVIS-VLA 展示了将"语言条件动作策略"学游戏世界模型"结合的可能性。虽的JARVIS-VLA 本身不是严格意义上的生成式世界模型，但它代表了世界模型的一种重要应用模式——在理解游戏世界视觉和物理规则的基础上，将语言指令转化为具体的游戏操作。这种理解→规划→执行"的流水线与基于世界模型的规划（model-based planning）高度一致，被视为世界模型在游戏场景中落地的关键范式。

## 代表性用例
- Minecraft 中的语言指令执行 VLA 系统
- 基于世界理解的游戏任务自动化
- 语言驱动的开放式游戏交互
- 与 MineDojo cVPT 形成互补的游的AI 研究体系

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)