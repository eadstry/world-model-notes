---
title: "EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation"
design: "EgoVid-5M"
arxiv: https://arxiv.org/abs/2411.08380
github: https://github.com/JeffWang987/EgoVid
---

# EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation

::: info 论文信息
- **Design**: EgoVid-5M
- **论文全称**: EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation
- **arXiv**: [https://arxiv.org/abs/2411.08380](https://arxiv.org/abs/2411.08380)
- **GitHub**: [https://github.com/JeffWang987/EgoVid](https://github.com/JeffWang987/EgoVid)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: EgoVid-5M
- **arXiv**: [https://arxiv.org/abs/2411.08380](https://arxiv.org/abs/2411.08380)
- **GitHub**: [https://github.com/JeffWang987/EgoVid](https://github.com/JeffWang987/EgoVid)

## 简介

EgoVid-5M是首个大规模第一人称视频-动作生成数据集，旨在推动以自我为中心的视频生成和世界模型研究。该数据集包含约500万个第一人称视频片段，配有详细的文本动作描述，专注于从自我视角理解和生成物理交互视频。EgoVid-5M的独特之处在于它专门设计用于支持action-conditioned视频生成任务——模型需要根据动作指令生成第一人称视角的执行视频。

EgoVid-5M通过自动流水线从现有第一人称视频数据集和网络资源中收集和标注数据，使用多模态大模型进行数据清洗和动作描述增强。数据集覆盖了广泛的日常动作类型（如烹饪、组装、清理、修理等），每个视频片段都与一个具体的动作描述（如"从冰箱中取出牛奶"、"用螺丝刀拧紧螺丝"）配对。

对于世界模型研究，EgoVid-5M填补了第一人称视频生成训练数据的重要空白。训练能够从自我视角生成物理交互视频的模型是实现具身世界模型的关键一步——这些生成能力使机器人能够在其操作视角下"想象"动作的执行结果。

## 关键特征

- **数据模态**: 第一人称RGB视频 + 动作文本描述
- **规模**: ~500万视频-动作文本对
- **动作类型**: 覆盖日常烹饪、组装、清理、修理等广泛的物理操作
- **标注方式**: 多模态大模型自动标注+文本增强
- **来源**: 现有第一人称数据集+网络收集

## 与世界模型的关系

EgoVid-5M直接服务于第一人称视频生成世界模型的研究。在这个数据集上训练的模型学习的是从"将执行动作X"到"第一人称视角下的视觉变化"的映射——这正是具身世界模型的核心功能。对于机器人世界模型来说，能够根据动作指令生成第一人称视频意味着模型能够进行"具身想象"：在实际行动之前模拟可能的视觉结果。这对于机器人规划、技能学习和安全评估具有重要应用价值。

## 代表性用途

- 第一人称视频生成: 训练action-conditioned的ego-view视频生成模型
- 具身世界模型预训练: 为机器人世界模型提供大规模第一人称训练数据
- 动作-视觉对齐: 学习动作语言描述与第一人称视觉变化的对应关系
- 跨具身迁移: 利用不同参与者/场景的数据学习泛化的物理交互表征
- 技能想象的评估基准: 评估生成的第一人称动作视频的物理合理性
