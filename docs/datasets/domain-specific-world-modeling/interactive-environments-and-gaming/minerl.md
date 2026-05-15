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

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1907.13440](https://arxiv.org/abs/1907.13440)
- **GitHub**: [https://github.com/minerllabs/minerl](https://github.com/minerllabs/minerl)

## 简介
MineRL 是 CMU 和 Microsoft 联合推出的基于 Minecraft 的强化学习竞赛和基准。MineRL 的独特之处是其"样本效率"竞赛的定位——在 Minecraft 这个极其复杂的 3D 开放世界中，智能体需要通过极少量（仅 800 万个环境步/约 1 小时 Minecraft 游戏时间）的交互学习复杂的任务（如获取钻石）。MineRL 提供了人类玩家的"示范轨迹"（demonstration）作为辅助数据，鼓励参赛者使用模仿学习等样本高效的方法。

MineRL 包含 6 个不同难度的任务：导航（Navigate）、树木砍伐（TreeChop）、物品收集（ObtainItem）、生存（Survive）以及最终挑战"获取钻石"（ObtainDiamond）。获取钻石任务在 Minecraft 中是一个典型的多步骤长期任务——需要先砍树、做工具、挖石头、冶铁、做铁镐、最后挖钻石，通常人类需要 10-15 分钟，而 RL 智能体仅用 1 小时游戏时间必须完成。MineRL 的观测空间包括第一人称 RGB 视角视野和物品栏信息。

## 关键特征
- **数据规模**: 6 个任务、数万条人类示范轨迹（对应 6 千万帧）、Minecraft 3D 无限世界
- **数据模态**: 64×64 RGB 第一人称视野、物品库存状态指南示、离散动作空间
- **主要指标**: 任务完成率/得分、样本效率、示范数据利用率
- **领域**: 样本高效强化学习、人类示范学习、开放世界探索

## 与世界模型的关系
MineRL 对世界模型的挑战是综合性的：世界模型不仅需要在 3D 开放世界里进行长序列预测，还需在极少量交互中学习 Minecraft 的复杂物理和游戏机制。MineRL 的比赛设置高度符合视觉世界模型的研究目标——世界模型的核心价值正是在样本效率上（通过预测世界动态来减少对环境交互的需求）。MineRL 的人类示范数据也为训练"示范条件的世界模型"（从示范中学习任务知识然后生成未来预测）提供了珍贵的数据基础。

## 代表性用途
- MineRL NeurIPS Competition (2019-2021) 的核心竞赛平台
- 样本效率强化学习的标准化评测基准
- VPT (2022, OpenAI) 使用 MineRL 相关数据进行视频预训练
- MineDojo (2023) 进一步扩展了 MineRL 的数据和任务规模
