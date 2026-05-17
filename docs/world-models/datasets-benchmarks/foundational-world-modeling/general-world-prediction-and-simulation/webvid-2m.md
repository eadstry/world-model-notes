---
title: "Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval"
design: "WebVid-2M"
arxiv: https://arxiv.org/abs/2104.00650
github: https://github.com/m-bain/webvid
---

# WebVid-2M: Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval

::: info 论文信息
- **Design**: WebVid-2M
- **论文全称**: Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval
- **arXiv**: [https://arxiv.org/abs/2104.00650](https://arxiv.org/abs/2104.00650)
- **GitHub**: [https://github.com/m-bain/webvid](https://github.com/m-bain/webvid)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: WebVid-2M
- **arXiv**: [https://arxiv.org/abs/2104.00650](https://arxiv.org/abs/2104.00650)
- **GitHub**: [https://github.com/m-bain/webvid](https://github.com/m-bain/webvid)

## 简介

WebVid-2M是由牛津大学VGG组发布的大规模视频-文本数据集，旨在推动视频-语言预训练研究。该数据集包含约250万个来自网络（主要是Shutterstock等素材网站）的视频-文本对，是首批免费开放的大规模视频-文本数据集之一。每个视频时长约10秒，伴随一条描述性的文本标题，总计约13,000小时的视频内容。

WebVid-2M的出现填补了视频-语言预训练领域的空白——此前的大规模视频-文本数据集（如HowTo100M）要么文本质量较低（ASR转录），要么需要付费获取。WebVid-2M的视频-文本对相对干净，适合训练视频-文本检索和视频生成模型。其素材库来源也意味着视频内容涵盖了极其广泛的主题，从自然风景到城市街景、从烹饪到体育赛事。

对于世界模型研究，WebVid-2M已成为训练视频生成模型和视频基模型的重要数据来源。其文本-视频对的格式天然适合训练文本到视频的生成模型，而这些生成模型正是当前世界模型研究的核心载体。许多开源视频生成模型（如VideoCrafter、ModelScopeT2V等）都使用WebVid-2M进行训练。

## 关键特征

- **数据模态**: RGB视频 + 文本描述
- **规模**: ~250万视频-文本对，约13,000小时
- **视频特征**: 平均约10秒/视频，素材库来源，内容多样性极高
- **文本质量**: 比ASR转录更干净，但比人工精标注更粗糙
- **Open Source**: 完全免费开放，已成为开源视频生成研究的标准数据集

## 与世界模型的关系

WebVid-2M是当前开源视频生成世界模型的支柱训练数据。ModelScopeT2V、VideoCrafter、Latte、OpenSora等主流开源文本到视频生成模型均使用WebVid-2M作为核心训练集。这些模型本质上在学习一个从文本到视觉世界的映射，即一种形式的"世界模型"。此外，WebVid-2M的规模使得研究者能够研究scaling law——随着数据和模型规模的增长，生成的视频如何展示出更强的物理一致性和世界理解能力。WebVid-10M作为其扩展版本，进一步推动了这一方向。

## 代表性用途

- Frozen in Time (Bain et al., 2021): 联合WebVid-2M进行视频-图像-文本联合训练
- ModelScopeT2V (Wang et al., 2023): 使用WebVid-2M训练开源文本到视频扩散模型
- VideoCrafter (Chen et al., 2023): 基于WebVid-2M训练视频生成模型
- InternVideo: 使用WebVid-2M作为视频-语言对齐数据之一
- LaVie/VideoFactory: 在WebVid-2M上进行视频生成预训练
