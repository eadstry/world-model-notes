---
title: "Sekai: A Video Dataset towards World Exploration"
design: "Sekai"
arxiv: https://arxiv.org/abs/2506.15675
github: https://github.com/Lixsp11/sekai-codebase
---

# Sekai: A Video Dataset towards World Exploration

::: info 论文信息
- **Design**: Sekai
- **论文全称**: Sekai: A Video Dataset towards World Exploration
- **arXiv**: [https://arxiv.org/abs/2506.15675](https://arxiv.org/abs/2506.15675)
- **GitHub**: [https://github.com/Lixsp11/sekai-codebase](https://github.com/Lixsp11/sekai-codebase)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2506.15675](https://arxiv.org/abs/2506.15675)
- **GitHub**: [https://github.com/Lixsp11/sekai-codebase](https://github.com/Lixsp11/sekai-codebase)

## 简介
Sekai（日语"世界"之意）是一个高质量的第一人称视角全球视频数据集，专门为世界探索任务而设计。视频生成技术已经取得了显著突破，有望成为交互式世界探索的基础。然而，现有视频生成数据集由于受到地点有限、时长短、场景静态以及缺乏探索相关标注等限制，并不适合世界探索训练。

Sekai 收集了超过5,000小时的步行或无人机视角（FPV和UAV）视频，覆盖来自100多个国家和地区、750多个城市的场景。研究团队开发了一套高效的端到端工具链，用于大规模收集、预处理和标注视频，标注内容包括地理位置、场景类型、天气状况、人群密度、字幕描述和相机轨迹等丰富信息。

全面的分析和实验证明了该数据集在规模、多样性、标注质量和训练视频生成模型方面的有效性。Sekai 的愿景是推动视频生成和世界探索领域的发展，并激励有价值的应用场景。

## 关键特征
- **数据规模**: 5,000+小时视频，100+国家，750+城市
- **数据模态**: 第一人称/无人机视频、地理位置、天气、密度标注、字幕、相机轨迹
- **主要指标**: 视频生成质量、世界探索效果、地理多样性
- **领域**: 世界探索、地理感知视频生成

## 与世界模型的关系
Sekai 对视觉世界模型（VWM）具有独特的价值。其第一人称视角的视频数据直接对应了具身智能体在真实世界中的感知体验，而丰富的元标注（位置、天气、相机轨迹等）为世界模型提供了关键的上下文学习信号。通过覆盖100多个国家的多样化场景，Sekai 有助于训练出具有广泛地理和场景泛化能力的世界模型。特别是相机轨迹标注，这为训练能够进行主动视觉探索的世界模型提供了关键的"行动-观测"配对数据。

## 代表性用途
- Sekai (Li et al., 2025) - 原始论文，验证全球视频数据集对视频生成模型的有效性
- 第一人称视角视频生成模型的训练
- 地理感知世界探索智能体的开发
