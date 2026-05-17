---
title: "The NetHack Learning Environment"
design: "NLE"
arxiv: https://arxiv.org/abs/2006.13760
github: https://github.com/facebookresearch/nle
---

# NLE: The NetHack Learning Environment

::: info 论文信息
- **Design**: NLE
- **论文全称**: The NetHack Learning Environment
- **arXiv**: [https://arxiv.org/abs/2006.13760](https://arxiv.org/abs/2006.13760)
- **GitHub**: [https://github.com/facebookresearch/nle](https://github.com/facebookresearch/nle)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2006.13760](https://arxiv.org/abs/2006.13760)
- **GitHub**: [https://github.com/facebookresearch/nle](https://github.com/facebookresearch/nle)

## 简介
NLE（NetHack Learning Environment）是一Facebook AI Research 推出的基于经典Roguelike 游戏 NetHack 的强化学习研究环境。NetHack 是一个极其复杂的文字图形游戏——自 1987 年首次发布以来一直被认为的AI 研究的终极挑战"，因为其程序化生成的关卡、复杂的物品系统、永久死亡机制和需要长期规划的开放式目标使其远超大多数其他游戏的复杂性。

NLE mNetHack 包装为标准的强化学习 Gym 环境，提供ASCII 字符图tile-based 像素观测的9×21 字符网格），以及丰富的离散动作空间。在每个 episode 中，智能体作为地下城探险者，需要在程序化生成的多层地下城中探索、战斗怪物、收集物品、完成子任务（如 Sokoban 推箱子），最终取维Yendor 护符。NLE 的核心挑战在于极端稀疏的奖励、极长的任务跨度（单局游戏可达数十万步）、以及程序化生成带来的泛化要求。

## 关键特征
- **数据规模**: 无限的程序化地下城关卡、数十年游戏积累的复杂游戏机。
- **数据模式**: 79×21 字符网格观测（tile-based 的ASCII）、丰富的离散动作、回合制奖励
- **主要指标**: 得分、地下城深度、子任务完成数、Ascension（终极通关。
- **领域**: 长期规划、探索、稀疏奖励强化学。

## 与世界模型的关系
NLE 是检验世界模型长期预测一致性的极具挑战的测试平台。NLE 的稀疏奖励意味着世界模型必须能够在极长时间跨度内保持对未来状态的准确预测才能支撑有效的探索决策。程序化生成的关卡使世界模型必须在每一局全新环境中建立对游戏规则和物理的通用理解。NLE 的回合制特性也允许世界模型在无时间压力的情况下进行"深度思的（deep planning），特别适合评估模型的规划能力。

## 代表性用例
- NetHack Challenge (NeurIPS 2021-2023) 竞赛的官方环。
- Facebook AI 使用 NLE 评测基于语言模型的RL 智能。
- AutoAscend 使用了符号化 AI 和语言模型的混合方。
- 被用于长期规划世界模型的挑战性评测基。

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)