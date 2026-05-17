---
title: "Benchmarking the Spectrum of Agent Capabilities"
design: "Crafter"
arxiv: https://arxiv.org/abs/2109.06780
github: https://github.com/danijar/crafter
---

# Crafter: Benchmarking the Spectrum of Agent Capabilities

::: info 论文信息
- **Design**: Crafter
- **论文全称**: Benchmarking the Spectrum of Agent Capabilities
- **arXiv**: [https://arxiv.org/abs/2109.06780](https://arxiv.org/abs/2109.06780)
- **GitHub**: [https://github.com/danijar/crafter](https://github.com/danijar/crafter)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2112.03778](https://arxiv.org/abs/2112.03778)
- **GitHub**: [https://github.com/danijar/crafter](https://github.com/danijar/crafter)

## 简介
Crafter 是由 Danijar Hafner（Dreamer 系列世界模型的主要作者）提出的一个开放世界生存游戏的强化学习基准。该环境的Minecraft 启发，在一个程序化生成和2D 俯视世界模4×64 网格）中，玩家需要收集资源、制作工具、建造庇护所、对抗怪物并最终击败龙。Crafter 的独特之处在于其"成就系统"——定义了 22 个具有递进关系的成就（如收集木可控制作斧头 在开采铁可控制作铁剑 射击杀骷髅 射击败龙），为评测智能体的渐进学习能力提供了结构化的评估指标。

Crafter 的成就并非独立的，而是形成一棵依赖树（技能树）——必须先学会采集才能学习制作，必须先制作武器才能对抗更强的敌人。这种设计迫使智能体逐步构建对世界规则的理解，而不能通过无脑探索来碰运气。Crafter 环境提供了第一人称 RGB 视角观测图4×64 像素），以及生命值、饥饿度、饥饿度和资源库存等内部状态信息，还有离散的动作空间（移动、收集、制作等）。每个episode 理论上无限长，直到玩家死亡或击败龙。

## 关键特征
- **数据规模**: 无限的程序化世界模2 个递进成就、生存机。
- **数据模式**: 64×64 RGB 第一人称观测、内部状态（生命值、库存）、离散动作、成就解锁信。
- **主要指标**: 成就解锁数、成就得分（几何平均）、生存时间、最高成就等。
- **领域**: 开放世界探索、递进式学习、程序化生存游戏

## 与世界模型的关系
Crafter 关Dreamer 系列世界模型（DreamerV2、DreamerV3）的诞生地和核心评测基准。Crafter 的成就依赖树结构要求世界模型具有长期规划能力——为了解锁高级成就，模型必须在脑海中预测数十步甚至上百步之后的未来状态。程序化世界的无限多样性也迫使世界模型学习通用的游戏物理规则（如资源采集、合成系统、战斗机制）而非特定世界的记忆。DreamerV3 在Crafter 上首次实现了全成就解锁，展示了世界模型在开放世界中的规划能力。

## 代表性用例
- DreamerV2 (2021) 在 Crafter 上首次展示了基于世界模型的生存游戏策。
- DreamerV3 (2023) 在 Crafter 上实现全 22 成就解锁的里程碑成果
- IRIS (2023) 使用 Crafter 评测离散 Transformer 世界模型
- STORM (2023) 在 Crafter 上验证扩散世界模型的探索能力

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)