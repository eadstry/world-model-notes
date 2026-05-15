---
title: "YouTube-8M: A Large-Scale Video Classification Benchmark"
design: "YouTube-8M"
arxiv: https://arxiv.org/abs/1609.08675
github: https://github.com/google/youtube-8m
---

# YouTube-8M: A Large-Scale Video Classification Benchmark

::: info 论文信息
- **Design**: YouTube-8M
- **论文全称**: YouTube-8M: A Large-Scale Video Classification Benchmark
- **arXiv**: [https://arxiv.org/abs/1609.08675](https://arxiv.org/abs/1609.08675)
- **GitHub**: [https://github.com/google/youtube-8m](https://github.com/google/youtube-8m)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: YouTube-8M
- **arXiv**: [https://arxiv.org/abs/1609.08675](https://arxiv.org/abs/1609.08675)
- **GitHub**: [https://github.com/google/youtube-8m](https://github.com/google/youtube-8m)

## 简介

YouTube-8M是Google发布的大规模视频理解数据集，是当时最大的视频分类基准之一。该数据集包含约800万个YouTube视频（总计超过50万小时），标注了4,800个视觉实体的知识图谱标签。不同于传统视频数据集以视频帧存储，YouTube-8M提供的是预处理后的帧级和视频级特征（使用Inception网络提取），使得大规模训练成为可能。

数据集的核心创新在于其标签体系——使用YouTube视频的元数据自动构建多标签分类任务，每个视频平均有3.4个标签。标签涵盖广泛的视觉实体，包括物体、活动、场景等。YouTube-8M Segments版本进一步引入了时间定位任务，需要在长视频中准确找到每个标签出现的时间段，这使得数据集更接近真实世界中对视频内容细粒度理解的需求。

对于世界模型研究，YouTube-8M的超大规模和多模态特性使其成为视频表示学习的重要预训练资源。其提供的特征级数据降低了计算门槛，使研究者可以在有限资源下进行大规模视频理解实验。

## 关键特征

- **数据模态**: 预处理视觉+音频特征（非原始视频），YouTube-8M Segments有时间标注
- **规模**: ~800万视频，50万+小时
- **标签**: 4,800个知识图谱实体标签，多标签标注（平均3.4标签/视频）
- **特征**: Inception-v3 / Inception-ResNet-v2提取，1024维+128维音频
- **Segments版本**: 增加了人类验证的时间段标注

## 与世界模型的关系

YouTube-8M为世界模型研究提供了大规模视频特征预训练的基础设施。虽然其提供的是特征而非原始视频，但在这个数据集上训练的时域聚合模型展示了从视频序列中学习时间动态的有效方法，这与世界模型关注的时间演化建模高度相关。数据集的多标签特性也使其适合研究世界模型中概念组合和因果关联的能力。此外，AudioSet（与YouTube-8M相关）为视听联合建模提供了基础。

## 代表性用途

- YouTube-8M比赛: 推动了NetVLAD、NeXtVLAD等视频级特征聚合方法的发展
- 多模态表示学习: 使用视觉+音频特征联合训练视听理解模型
- Video Transformer预训练: 部分工作使用YouTube-8M进行大规模视频预训练
- 时间动作定位: YouTube-8M Segments版本推动了弱监督时间定位研究
