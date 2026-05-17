---
title: "OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation"
design: "OpenHumanVid"
arxiv: https://arxiv.org/abs/2412.00115
github: https://github.com/fudan-generative-vision/OpenHumanVid
---

# OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation

::: info 论文信息
- **Design**: OpenHumanVid
- **论文全称**: OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation
- **arXiv**: [https://arxiv.org/abs/2412.00115](https://arxiv.org/abs/2412.00115)
- **GitHub**: [https://github.com/fudan-generative-vision/OpenHumanVid](https://github.com/fudan-generative-vision/OpenHumanVid)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2412.00115](https://arxiv.org/abs/2412.00115)
- **GitHub**: [https://github.com/fudan-generative-vision/OpenHumanVid](https://github.com/fudan-generative-vision/OpenHumanVid)

## 简介
OpenHumanVid 是一个大规模高质量的人体中心视频数据集，由复旦大学生成式视觉团队开发。虽然视频生成技术显著提高了视频数据集的规模和可用性，但高质量的人体中心视频数据集仍然严重缺乏，这阻碍了该领域的进一步发展。

该数据集的特点是拥有精确且详细的字幕描述，涵盖了人体外观和运动状态，同时提供了补充的人体运动条件信息，包括骨骼序列和语音音频。为验证该数据集和训练策略的有效性，研究团队提出了对现有经典扩散变换器架构的扩展方案，并在该数据集上进行了进一步预训练。

研究得出了两个关键洞察：第一，大规模高质量数据集的引入显著提升了生成人体视频的评估指标，同时保持了一般视频生成任务的性能；第二，文本与人体外观、人体运动和面部运动的有效对齐对于产生高质量视频输出至关重要。基于这些洞察，在该数据集上训练的扩展网络展示了人体中心视频生成的明显改进。

## 关键特征
- **数据规模**: 大规模人体视频数据集
- **数据模态**: RGB视频、字幕描述、骨骼序列、语音音频
- **主要指标**: 人体视频生成质量、文本-人体对齐度
- **领域**: 人体中心视频生成、扩散模型

## 与世界模型的关系
OpenHumanVid 对视觉世界模型（VWM）中的人体运动理解具有重要价值。人体是物理世界中最复杂的动态实体之一，准确建模人体外观、运动和面部动作是世界模型的关键挑战。OpenHumanVid 提供的人体骨骼序列和语音音频等多模态条件信息，使VWM能够学习到人体运动的物理约束和语义意图。该数据集的文本-人体对齐训练策略直接贡献于提升VWM对人体场景的建模精度。

## 代表性用途
- OpenHumanVid (Li et al., 2024) - 原始论文，验证大规模人体数据集的训练价值
- 扩散变换器架构在人体视频生成中的扩展
- 文本-人体运动对齐的预训练
