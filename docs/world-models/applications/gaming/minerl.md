---
title: "The MineRL 2020 Competition on Sample Efficient Reinforcement Learning using Human Priors"
design: "MineRL"
arxiv: https://arxiv.org/abs/2101.11071
github: https://github.com/minerllabs/minerl
---

# MineRL: The MineRL 2020 Competition on Sample Efficient Reinforcement Learning using Human Priors

::: info 论文信息
- **Design**: MineRL
- **论文全称**: The MineRL 2020 Competition on Sample Efficient Reinforcement Learning using Human Priors
- **arXiv**: [https://arxiv.org/abs/2101.11071](https://arxiv.org/abs/2101.11071)
- **GitHub**: [https://github.com/minerllabs/minerl](https://github.com/minerllabs/minerl)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/1907.13440](https://arxiv.org/abs/1907.13440)
- **GitHub**: [https://github.com/minerllabs/minerl](https://github.com/minerllabs/minerl)

## 简介
MineRL LCMU NMicrosoft 联合推出的基准Minecraft 的强化学习竞赛和基准。MineRL 的独特之处是多样本效率"竞赛的定位——在 Minecraft 这个极其复杂的3D 开放世界中，智能体需要通过极少量（的800 万个环境中的1 小时 Minecraft 游戏时间）的交互学习复杂的任务（如获取钻石）。MineRL 提供了人类玩家的"示范轨迹"（demonstration）作为辅助数据，鼓励参赛者使用模仿学习等样本高效的方法。

MineRL 包含 6 个不同难度的任务：导航（Navigate）、树木砍伐（TreeChop）、物品收集（ObtainItem）、生存（Survive）以及最终挑战获取钻石"（ObtainDiamond）。获取钻石任务在 Minecraft 中是一个典型的多步骤长期任务——需要先砍树、做工具、挖石头、冶铁、做铁镐、最后挖钻石，通常人类需记10-15 分钟，的RL 智能体仅仅1 小时游戏时间必须完成。MineRL 的观测空间包括第一人称 RGB 视角视野和物品栏信息。

## 关键特征
- **数据规模**: 6 个任务、数万条人类示范轨迹（对数6 千万帧）、Minecraft 3D 无限世界
- **数据模式**: 64×64 RGB 第一人称视野、物品库存状态指南示、离散动作空。
- **主要指标**: 任务完成的得分、样本效率、示范数据利用率
- **领域**: 样本高效强化学习、人类示范学习、开放世界探。

## 与世界模型的关系
MineRL 对世界模型的挑战是综合性的：世界模型不仅需要在 3D 开放世界里进行长序列预测，还需在极少量交互中学习 Minecraft 的复杂物理和游戏机制。MineRL 的比赛设置高度符合视觉世界模型的研究目标——世界模型的核心价值正是在样本效率上（通过预测世界动态来减少对环境交互的需求）。MineRL 的人类示范数据也为训提示范条件的世界模型（从示范中学习任务知识然后生成未来预测）提供了珍贵的数据基础。

## 代表性用例
- MineRL NeurIPS Competition (2019-2021) 的核心竞赛平。
- 样本效率强化学习的标准化评测基准
- VPT (2022, OpenAI) 使用 MineRL 相关数据进行视频预训。
- MineDojo (2023) 进一步扩展了 MineRL 的数据和任务规模

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)