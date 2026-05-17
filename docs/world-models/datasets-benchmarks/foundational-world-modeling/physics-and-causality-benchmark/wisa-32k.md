---
title: "WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation"
design: "WISA-32K"
arxiv: https://arxiv.org/abs/2503.08153
github: https://github.com/360CVGroup/WISA
---

# WISA-32K: WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation

::: info 论文信息
- **Design**: WISA-32K
- **论文全称**: WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation
- **arXiv**: [https://arxiv.org/abs/2503.08153](https://arxiv.org/abs/2503.08153)
- **GitHub**: [https://github.com/360CVGroup/WISA](https://github.com/360CVGroup/WISA)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.08153](https://arxiv.org/abs/2503.08153)

## 简介
WISA-32K 是与世界模拟器助手（World Simulator Assistant, WISA）框架配套的物理感知视频数据集。WISA 框架旨在将物理原理分解并融入T2V生成模型，解决当前T2V模型难以把握抽象物理原理并生成符合物理定律视频的挑战。

WISA 将物理原理分解为三个层次：文本物理描述、定性物理类别和定量物理属性。为将这些物理属性有效嵌入生成过程，WISA 引入了混合物理专家注意力（MoPA）和物理分类器等关键设计。WISA-32K 数据集是基于定性物理类别专门收集的，包含32,000个视频，代表17条物理定律，横跨三个物理学领域：力学、热学和光学。

实验结果表明，WISA 可以有效增强T2V模型与真实世界物理定律的兼容性，在 VideoPhy 基准上取得了显著改善。WISA-32K 为训练具有物理感知能力的世界模型提供了专门的视频数据资源。

## 关键特征
- **数据规模**: 32,000个视频，17条物理定律，3个物理领域
- **数据模态**: 物理感知视频
- **主要指标**: VideoPhy基准改善、物理定律兼容性
- **领域**: 物理感知视频生成

## 与世界模型的关系
WISA-32K 代表了VWM训练数据的一个新方向——从通用视频数据转向旨在显式编码物理定律的专业数据集。WISA的层次化物理分解（描述-类别-属性）为VWM的物理感知训练提供了结构化的方法论。MoPA注意力机制的引入也为VWM架构中如何融入物理知识提供了具体的技术方案。

## 代表性用途
- WISA (Wang et al., 2025) - 原始论文，提出物理分解与混合专家注意力
- T2V模型的物理感知增强训练
- MoPA注意力机制在VWM中的应用
