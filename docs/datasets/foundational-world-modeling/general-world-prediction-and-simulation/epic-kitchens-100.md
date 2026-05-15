---
title: "Rescaling Egocentric Vision"
design: "EPIC-KITCHENS-100"
arxiv: https://arxiv.org/abs/2006.13256
github: https://github.com/epic-kitchens
---

# EPIC-KITCHENS-100: Rescaling Egocentric Vision

::: info 论文信息
- **Design**: EPIC-KITCHENS-100
- **论文全称**: Rescaling Egocentric Vision
- **arXiv**: [https://arxiv.org/abs/2006.13256](https://arxiv.org/abs/2006.13256)
- **GitHub**: [https://github.com/epic-kitchens](https://github.com/epic-kitchens)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: EPIC-KITCHENS-100
- **arXiv**: [https://arxiv.org/abs/2006.13256](https://arxiv.org/abs/2006.13256)
- **GitHub**: [https://github.com/epic-kitchens](https://github.com/epic-kitchens)

## 简介

EPIC-KITCHENS-100是目前最大规模的第一人称（egocentric）厨房活动数据集，由布里斯托大学和牛津大学联合发布。该数据集包含100小时的佩戴头戴式相机录制的无脚本日常厨房活动视频，标注了约90,000个动作片段，涵盖4,053个动词-名词组合（如"切-洋葱"、"打开-冰箱"、"搅拌-锅"等）。视频由45个参与者在各自不同的厨房环境中自然录制。

EPIC-KITCHENS的核心价值在于其第一人称视角——相机随佩戴者的头部运动而变化，记录了手部操作、物体交互和头部注意力的自然分布。这使得它特别适合研究具身智能和手-物交互理解。数据集提供多层标注：动作类别（动词+名词）、物体边界框、手部位置、以及动作预期（action anticipation）任务。

在世界模型研究中，EPIC-KITCHENS的第一人称特性使其成为评估具身世界模型的重要benchmark。世界模型需要从自我中心的视角预测即将发生的动作和视觉变化，而EPIC-KITCHENS的action anticipation任务（给定观察到的视频，预测下一个动作）恰好测试了这种能力。

## 关键特征

- **数据模态**: 第一人称RGB视频 + 音频 + 惯性传感器数据
- **规模**: 100小时，45个参与者，32个厨房环境，~90,000个动作片段
- **标注**: 动词（97类）+名词（300类）组合标注，物体边界框，手部位置
- **任务**: 动作识别、动作预期/预测、物体检测、手-物交互检测
- **挑战**: 第一人称视角的运动模糊、遮挡、不同厨房环境的外观差异

## 与世界模型的关系

EPIC-KITCHENS对世界模型研究的关键价值在于其action anticipation任务。该任务要求模型基于观察到的第一人称视频片段预测未来的动作，这正是世界模型的核心能力——预测未来状态。通过评估模型在此任务上的表现，可以直接衡量其对日常物理交互的预测能力。此外，EPIC-KITCHENS的多厨房环境设置也测试了世界模型的跨场景泛化能力——好的世界模型应该在未见过的厨房环境中也能准确预测常见物理交互的结果。

## 代表性用途

- EPIC-KITCHENS 挑战赛 (CVPR 2020-2023): 推动第一人称视频理解技术发展
- Action Anticipation: 大量工作使用EPIC-KITCHENS训练动作预测模型
- 手-物交互检测: 使用EPIC-KITCHENS评测细粒度交互理解
- Video-Language预训练: EgoVLP (Lin et al., 2022) 在EPIC-KITCHENS上训练第一人称视频-语言模型
- 具身世界模型评估: 用于评估模型从第一人称视角预测物理交互的能力
