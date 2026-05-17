---
title: "The Kinetics Human Action Video Dataset"
design: "Kinetics"
arxiv: https://arxiv.org/abs/1705.06950
github: https://github.com/cvdfoundation/kinetics-dataset
---

# Kinetics: The Kinetics Human Action Video Dataset

::: info 论文信息
- **Design**: Kinetics
- **论文全称**: The Kinetics Human Action Video Dataset
- **arXiv**: [https://arxiv.org/abs/1705.06950](https://arxiv.org/abs/1705.06950)
- **GitHub**: [https://github.com/cvdfoundation/kinetics-dataset](https://github.com/cvdfoundation/kinetics-dataset)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: Kinetics (Kinetics-400/600/700)
- **arXiv**: [https://arxiv.org/abs/1705.06950](https://arxiv.org/abs/1705.06950)
- **GitHub**: [https://github.com/cvdfoundation/kinetics-dataset](https://github.com/cvdfoundation/kinetics-dataset)

## 简介

Kinetics是由DeepMind发布的大规模人类动作视频数据集，是视频理解领域最重要的基准之一。原始版本Kinetics-400包含400个动作类别，每个类别至少400个视频片段（约30万个视频）。后续版本Kinetics-600和Kinetics-700进一步扩展了类别数量和规模，分别包含600类（约50万视频）和700类（约65万视频）。所有视频均来自YouTube，时长约10秒。

Kinetics的独特价值在于其前所未有的规模和多样性。覆盖的动作类别极为广泛，从简单的身体动作（跑步、跳跃）到复杂的人-物交互（修理自行车、弹钢琴）和社交活动（握手、拥抱）。其视频均带有时间标注的动作片段，同时Kinetics-700还提供了AVA时空动作标注的子集。作为预训练数据集，Kinetics深刻影响了视频领域的基础模型发展。

与世界模型研究相关的是，Kinetics不仅用于训练视频编码器（如VideoMAE、TimeSformer等），也越来越多地被用作视频生成模型的评估基准，用于衡量生成视频的动作一致性和多样性。许多视频世界模型使用在Kinetics上预训练的特征提取器来计算生成视频的质量指标。

## 关键特征

- **数据模态**: RGB视频 + 音频（部分版本）
- **规模**: Kinetics-400: ~30万视频/400类; K-600: ~50万/600类; K-700: ~65万/700类
- **标注**: 视频级动作类别标签；Kinetics-700子集有AVA时空标注
- **视频特征**: 约10秒/视频，YouTube来源，25或30fps
- **多样性**: 覆盖人类动作、人-物交互、人人交互的广泛类型

## 与世界模型的关系

Kinetics在世界模型研究中的作用主要体现在两方面：首先，它是视频基础模型预训练的核心数据集，大量视频自编码器和视频Transformer在此训练，这些组件常被用作世界模型的backbone。其次，Kinetics已成为视频生成评估的标准——FVD计算常使用在Kinetics上预训练的I3D网络作为特征提取器。此外，VideoMAE等工作展示了在Kinetics上进行掩码视频建模训练可学习到强时空表示，这正是世界模型所需的核心能力。

## 代表性用途

- I3D (Carreira & Zisserman, 2017): 将2D CNN膨胀为3D用于Kinetics动作识别，其Kinetics预训练特征用于FVD计算
- TimeSformer (Bertasius et al., 2021): 在Kinetics上训练视频Transformer，使用时空注意力
- VideoMAE/MViT (Tong/Feichtenhofer et al.): 在Kinetics上进行视频掩码自编码预训练
- VideoPoet/Sora等生成模型: 使用Kinetics作为评估集之一
- InternVideo (Wang et al., 2022): 使用Kinetics进行大规模视频-语言对齐训练
