---
title: "VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation"
design: "VideoPhy-2"
arxiv: https://arxiv.org/abs/2503.06800
github: https://github.com/Hritikbansal/videophy
---

# VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation

::: info 论文信息
- **Design**: VideoPhy-2
- **论文全称**: VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation
- **arXiv**: [https://arxiv.org/abs/2503.06800](https://arxiv.org/abs/2503.06800)
- **GitHub**: [https://github.com/Hritikbansal/videophy](https://github.com/Hritikbansal/videophy)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.06800](https://arxiv.org/abs/2503.06800)
- **GitHub**: [https://github.com/videophy2/videophy2](https://github.com/videophy2/videophy2)

## 简介
VideoPhy-2 是 VideoPhy 基准的重大升级版本，引入了一个以行动为中心的物理常识评估数据集。虽然大规模视频生成模型能够创建多样化的逼真视频，是通用物理世界模拟器的强有力候选者，但它们在各种真实世界行动（如打网球、后空翻）中是否遵循物理常识仍不清楚。

VideoPhy-2 策展了200个多样化的行动和详细提示词，用于评估来自现代生成模型的合成视频。通过人类评估，衡量了生成视频的语义遵循度、物理常识遵循度和物理规则的接地性。研究发现揭示了主要缺陷——即使最好的模型在 VideoPhy-2 的困难子集上也仅达到22%的联合表现（即同时满足高语义和物理常识遵循度）。

关键发现包括模型在质量守恒和动量守恒方面的特殊困难。VideoPhy-2 还训练了 VideoPhy-AutoEval，一个用于快速可靠评估的自动评估器。与 VideoPhy 相比，VideoPhy-2 提供了更多的行动类型、更细粒度的物理规则分析和更严格的评估标准。

## 关键特征
- **数据规模**: 200个多样化行动，细粒度物理规则分析
- **数据模态**: 文本提示 + 生成视频 + 人类评估
- **主要指标**: 语义遵循度、物理常识遵循度（联合表现最佳仅22%）
- **领域**: 物理常识评估、行动中心

## 与世界模型的关系
VideoPhy-2 将VWM物理评估提升到了新的严格水平。其"以行动为中心"的评估范式特别重要，因为VWM的最终目标是支持智能体在物理世界中的行动决策。22%的联合表现揭示了一个核心问题：当前VWM无法在保持视觉质量的同时确保物理一致性——这是将VWM应用于实际场景的最大障碍。特别是模型在守恒定律方面的困难，表明VWM缺乏对物理世界最基本约束的理解。

## 代表性用途
- VideoPhy-2 (Bansal et al., 2025) - 原始论文，行动中心的物理常识评估
- VideoPhy-AutoEval 自动评估器
- T2V模型在守恒定律方面的系统诊断
