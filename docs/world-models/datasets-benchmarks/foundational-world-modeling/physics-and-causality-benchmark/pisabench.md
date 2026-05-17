---
title: "PISA Experiments: Exploring Physics Post-Training for Video Diffusion Models by Watching Stuff Drop"
design: "PisaBench"
arxiv: https://arxiv.org/abs/2503.09595
github: https://github.com/vision-x-nyu/pisa-experiments
---

# PisaBench: PISA Experiments: Exploring Physics Post-Training for Video Diffusion Models by Watching Stuff Drop

::: info 论文信息
- **Design**: PisaBench
- **论文全称**: PISA Experiments: Exploring Physics Post-Training for Video Diffusion Models by Watching Stuff Drop
- **arXiv**: [https://arxiv.org/abs/2503.09595](https://arxiv.org/abs/2503.09595)
- **GitHub**: [https://github.com/vision-x-nyu/pisa-experiments](https://github.com/vision-x-nyu/pisa-experiments)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.09595](https://arxiv.org/abs/2503.09595)
- **GitHub**: [https://github.com/vision-x-nyu/pisa-experiments](https://github.com/vision-x-nyu/pisa-experiments)

## 简介
PisaBench（PISA Experiments）来自纽约大学和 Saining Xie 团队，通过一个简单却基本的物理任务——物体自由落体——来研究视频扩散模型的物理后训练。大规模预训练的视频生成模型在内容创作方面表现卓越，但作为物理精确的世界模拟器并不可靠。

研究发现，SOTA视频生成模型在这个基本任务上表现不佳，尽管它们的视觉输出令人印象深刻。为解决这个问题，研究发现在相对少量的模拟视频上进行微调可以有效诱导模型的下落行为，且通过一个新颖的奖励建模程序可以进一步改善结果。

PisaBench 还揭示了后训练在泛化和分布建模方面的关键局限。该基准可作为追踪大规模视频生成模型物理准确性的有用诊断工具。PisaBench 的简约设计——聚焦于单一物理现象——使其成为物理后训练研究中高度可解释的测试平台。

## 关键特征
- **数据规模**: 物体自由落体模拟视频
- **数据模态**: 合成物理模拟视频
- **主要指标**: 自由落体行为准确性
- **领域**: 物理后训练、视频扩散模型

## 与世界模型的关系
PisaBench 对VWM研究具有独特的方法论价值。通过聚焦于最基础的物理现象（自由落体），它提供了一个极简但高度可解释的测试平台来研究VWM的物理学习机制。该研究的三个核心发现对VWM具有普遍启示：(1) 少量模拟数据可以高效诱导物理行为；(2) 奖励建模可以进一步提升物理准确性；(3) 后训练存在泛化局限。这些发现为设计具有物理感知能力的VWM提供了实用的训练策略指引。

## 代表性用途
- PisaBench (Li et al., NYU, 2025) - 原始论文，研究视频扩散模型的物理后训练
- VWM物理行为的微调与奖励建模研究
- 物理后训练的泛化局限性分析
