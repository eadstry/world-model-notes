---
title: "The \"something something\" video database for learning and evaluating visual common sense"
design: "SSV2"
arxiv: https://arxiv.org/abs/1706.04261
website: https://www.qualcomm.com/developer/software/something-something-v-2-dataset
---

# SSV2: The "something something" video database for learning and evaluating visual common sense

::: info 论文信息
- **Design**: SSV2
- **论文全称**: The "something something" video database for learning and evaluating visual common sense
- **arXiv**: [https://arxiv.org/abs/1706.04261](https://arxiv.org/abs/1706.04261)
- **Website**: [https://www.qualcomm.com/developer/software/something-something-v-2-dataset](https://www.qualcomm.com/developer/software/something-something-v-2-dataset)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: Something-Something V2 (SSV2)
- **arXiv**: [https://arxiv.org/abs/1706.04261](https://arxiv.org/abs/1706.04261)
- **官网**: [https://www.qualcomm.com/developer/software/something-something-v-2-dataset](https://www.qualcomm.com/developer/software/something-something-v-2-dataset)

## 简介

Something-Something V2 (SSV2) 是一个专门设计用于评估模型对物理常识和细粒度动作理解能力的视频数据集。由Twenty Billion Neurons GmbH发布，SSV2包含220,847个视频，覆盖174个基本动作类别。每个视频展示了人类执行一个基本动作（如"将某物放于某物之上"、"将某物从某物中取出"、"推某物使其掉落"等），时长为2-6秒。

SSV2的独特之处在于其动作标签聚焦于细粒度的物理交互而非外观识别。传统动作识别数据集（如Kinetics）的类别可以通过静态帧中的物体和场景来判断（如"弹钢琴"），但SSV2的类别（如"将某物推到某物左边"）必须通过理解时间动态才能区分。这使得SSV2成为评估模型对物理因果关系和时间演化建模能力的理想基准。

在世界模型研究中，SSV2的地位特别重要——它直接测试模型是否理解物体间的物理交互、空间关系和因果序列，这些正是视觉世界模型需要建模的核心能力。许多视频预测和视频生成模型将SSV2作为主要的动作条件生成评估集。

## 关键特征

- **数据模态**: RGB视频
- **规模**: 220,847个视频，174个动作类别
- **标注**: 细粒度物理动作标签，描述物体交互和空间变换
- **特殊价值**: 无法通过单帧静态信息判断类别，必须理解时间动态
- **动作空间**: 覆盖放置、移动、推拉、打开/关闭等基本物理动作

## 与世界模型的关系

SSV2是世界模型评估的重要基准，因为它直接衡量模型对物理交互的建模能力。世界模型需要在给定动作条件下预测未来状态，而SSV2的动作类别恰好刻画了这种"动作→结果"的因果关系。VideoPoet、TATS等生成模型在SSV2上测试class-conditional生成能力。此外，SSV2的细粒度动作类别也用于评估视频预测模型的物理合理性——一个好的世界模型应该能准确分辨"将物体推到左边"和"将物体推到右边"之间的差异。

## 代表性用途

- TSN/TRN (Zhou et al., 2018): 提出时序关系网络，在SSV2上展示细粒度动作识别能力
- TimeSformer (Bertasius et al., 2021): 使用SSV2评估视频Transformer的时空建模
- VideoMAE (Tong et al., 2022): 在SSV2上进行掩码视频预训练和微调
- TATS (Ge et al., 2022): 使用SSV2评估长视频生成的物理一致性
- VideoPoet: 在SSV2上进行action-conditioned视频生成评估
