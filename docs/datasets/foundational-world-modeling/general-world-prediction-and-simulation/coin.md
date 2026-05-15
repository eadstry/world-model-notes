---
title: "COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis"
design: "COIN"
arxiv: https://arxiv.org/abs/1903.02874
github: https://github.com/coin-dataset/
---

# COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis

::: info 论文信息
- **Design**: COIN
- **论文全称**: COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis
- **arXiv**: [https://arxiv.org/abs/1903.02874](https://arxiv.org/abs/1903.02874)
- **GitHub**: [https://github.com/coin-dataset/](https://github.com/coin-dataset/)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: COIN
- **arXiv**: [https://arxiv.org/abs/1903.02874](https://arxiv.org/abs/1903.02874)
- **GitHub**: [https://github.com/coin-dataset/](https://github.com/coin-dataset/)

## 简介

COIN (Comprehensive Instructional video dataset) 是一个大规模教学视频数据集，由中国科学院自动化研究所发布。该数据集包含11,827个YouTube教学视频，覆盖180个不同的任务类别（分为12个领域，如烹饪、家具组装、汽车维修、电子设备操作等），总时长约476小时。每个视频都标注了详细的操作步骤及其起止时间戳。

COIN的核心价值在于其提供了长视频中结构化操作序列的标注。每个视频被分解为多个步骤（平均每个视频3.6个步骤），每个步骤有文字描述和时间边界。这使得COIN不仅是视频理解数据集，更是一个过程建模数据集——它记录了人类如何将复杂目标分解为有序子任务。

对于世界模型研究，COIN提供了丰富的过程性知识。视频中展示的操作序列体现了现实世界中的因果顺序约束（如必须先打开冰箱门才能取出食物），这种结构化过程数据对于训练能理解动作序列和规划的世界模型非常宝贵。此外，COIN的多步骤标注也使其适合评估模型对长时间依赖的建模能力。

## 关键特征

- **数据模态**: RGB视频 + 文字步骤描述
- **规模**: 11,827个视频，476小时，180个任务类别，12个领域
- **标注**: 每视频多个操作步骤（平均3.6步），每步有时间戳和文字描述
- **领域覆盖**: 烹饪、家具组装、汽车维修、电子设备、美妆等12个领域
- **视频长度**: 平均约2.4分钟/视频

## 与世界模型的关系

COIN对世界模型研究的价值在于其过程性知识——每个视频展示的是一系列有序的因果操作，这与世界模型需要建模的状态转移序列天然契合。教学视频中的"步骤-子目标-结果"结构可以用来训练或评估世界模型对动作规划和目标导向行为的理解能力。此外，COIN的跨任务多样性也为评估世界模型的泛化能力提供了丰富的测试场景——一个好的世界模型应该能在不同领域（如烹饪→组装）之间迁移物理常识。

## 代表性用途

- 过程性视频理解: 使用COIN训练步骤定位和步骤分类模型
- 视频问答: 基于COIN的步骤结构进行过程性推理
- 视频表征学习: 利用步骤结构进行自监督对比学习
- 教学视频摘要/对齐: 步骤级视频段落检索和跨视频步骤对齐
