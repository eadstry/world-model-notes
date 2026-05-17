---
title: "InternVid: A Large-scale Video-Text Dataset for Multimodal Understanding and Generation"
design: "InternVid"
arxiv: https://arxiv.org/abs/2307.06942
github: https://github.com/OpenGVLab/InternVideo
---

# InternVid: A Large-scale Video-Text Dataset for Multimodal Understanding and Generation

::: info 论文信息
- **Design**: InternVid
- **论文全称**: InternVid: A Large-scale Video-Text Dataset for Multimodal Understanding and Generation
- **arXiv**: [https://arxiv.org/abs/2307.06942](https://arxiv.org/abs/2307.06942)
- **GitHub**: [https://github.com/OpenGVLab/InternVideo](https://github.com/OpenGVLab/InternVideo)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: InternVid
- **arXiv**: [https://arxiv.org/abs/2307.06942](https://arxiv.org/abs/2307.06942)
- **GitHub**: [https://github.com/OpenGVLab/InternVideo](https://github.com/OpenGVLab/InternVideo)

## 简介

InternVid是由上海人工智能实验室（OpenGVLab）发布的大规模视频-文本数据集，旨在推动多模态视频理解和生成研究。该数据集包含超过700万个视频（总计约760万小时），是当时最大的公开视频-文本数据集之一。InternVid通过流水线自动地从海量网络视频中提取高质量的视频-文本对，并使用多级美学和内容质量筛选机制确保数据质量。

InternVid的独特价值在于其规模和质量的平衡。数据集被分为多个子集（如InternVid-10M、InternVid-50M等），研究者可以根据计算资源选择不同规模的数据进行实验。每个视频都配有详细的文本描述，通过多阶段标注流程（包括自动生成和筛选）获得。InternVid覆盖了极为广泛的视觉概念和场景类型，从自然风景到城市街景、从人物活动到抽象视觉艺术。

对于世界模型研究，InternVid为训练大规模视频生成模型和视频-语言基础模型提供了关键的数据基础设施。其在视频生成模型训练中的作用尤为突出——大规模、高质量的视频-文本数据是训练能够生成物理一致视频的世界模型的前提条件。

## 关键特征

- **数据模态**: RGB视频 + 多层级文本描述
- **规模**: 700万+视频，760万小时，234M+剪辑片段
- **子集**: InternVid-10M, InternVid-50M, InternVid-Full等多级规模
- **质量筛选**: 多级美学评分和内容过滤，去除了低质量和重复内容
- **文本描述**: 自动生成+筛选的详细视频描述
- **多样性**: 超广泛领域覆盖，16大类视觉概念

## 与世界模型的关系

InternVid是当前视频世界模型训练的核心数据资源。基于InternVid训练的InternVideo模型系列展示了强大的视频理解和生成能力。对于视频生成世界模型（如VideoPoet、Sora类模型）而言，InternVid级别的大规模视频-文本数据是不可或缺的——它们为模型提供了从文本到视觉世界的广阔映射空间。InternVid还推动了视频-语言对齐技术（如ViCLIP）的发展，这些技术使得世界模型能够将自然语言指令转化为视觉预测。

## 代表性用途

- InternVideo (Wang et al., 2022-2023): 使用InternVid训练视频基础模型
- ViCLIP: 基于InternVid训练的视频-文本对比学习模型
- VideoLLaMA/VideoChat: 使用InternVideo作为视频编码器
- 视频检索: InternVid推动了大规模视频-文本检索技术的发展
- 视频生成: 作为多个开源视频生成模型的预训练数据
