---
title: "HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips"
design: "HowTo100M"
arxiv: https://arxiv.org/abs/1906.03327
github: https://github.com/antoine77340/howto100m
---

# HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips

::: info 论文信息
- **Design**: HowTo100M
- **论文全称**: HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips
- **arXiv**: [https://arxiv.org/abs/1906.03327](https://arxiv.org/abs/1906.03327)
- **GitHub**: [https://github.com/antoine77340/howto100m](https://github.com/antoine77340/howto100m)
:::

## 学习笔记

## 数据集/基准信息

- **名称**: HowTo100M
- **arXiv**: [https://arxiv.org/abs/1906.03327](https://arxiv.org/abs/1906.03327)
- **GitHub**: [https://github.com/antoine77340/howto100m](https://github.com/antoine77340/howto100m)

## 简介

HowTo100M是由INRIA和Facebook AI Research联合发布的大规模教学视频数据集，是视频-语言预训练领域的里程碑工作之一。该数据集从YouTube上收集了约136万个教学视频（总计约13.4万小时），覆盖23,611种不同的视觉任务（如烹饪食谱、手工DIY、园艺、健身等）。其核心创新在于利用旁白语音的自动转录文字（ASR）作为弱监督信号，建立了视频-文本的对应关系。

HowTo100M的规模比同时期的其他视频-文本数据集大两个数量级，且其教学视频的性质使得旁白叙述与视觉内容高度相关——讲解人通常在描述正在进行的操作。这种自然的视听对齐为学习跨模态表示提供了丰富的训练信号。数据集的高噪声特性（自动转录可能不准确）反而促使了鲁棒学习方法的发展。

对于世界模型研究，HowTo100M是训练视频表示基础模型的关键资源。在这个数据集上训练的模型（如VideoCLIP、MIL-NCE等）学会了将视觉过程与自然语言描述关联起来，这种对齐能力是构建可交互的、语言引导的世界模型的基础。教学视频中的操作步骤也天然包含了动作序列和因果结构。

## 关键特征

- **数据模态**: RGB视频 + 音频 + ASR转录文字（自动生成，非人工标注）
- **规模**: ~136万视频，13.4万小时，23,611个任务类别
- **文本来源**: YouTube自动字幕（ASR），无需人工标注
- **噪声水平**: 较高（ASR转录存在错误），但规模弥补了质量损失
- **领域**: 烹饪、手工、园艺、健身、维修等各类教学任务

## 与世界模型的关系

HowTo100M是世界模型研究中视频-语言预训练的基础数据集。在此训练的模型（如MIL-NCE、VideoCLIP）能将视频中的物理操作过程与语言描述对齐，这种对齐对于构建语言引导的世界模型至关重要——未来的世界模型应该能根据语言指令生成或预测相应的视觉变化。此外，HowTo100M中教学视频固有的程序性（procedure）结构为世界模型学习动作序列和状态转移提供了自然的课程学习信号。

## 代表性用途

- MIL-NCE (Miech et al., 2020): 在HowTo100M上训练视频-文本匹配模型，使用多实例对比学习
- VideoCLIP (Xu et al., 2021): 在HowTo100M上对齐视频和文本表示
- Frozen in Time (Bain et al., 2021): 联合WebVid-2M和HowTo100M进行视频-图像-文本联合训练
- InternVideo (Wang et al., 2022): 使用HowTo100M作为大规模预训练数据之一
- Video-LLaMA等视频LLM: 使用HowTo100M训练的视觉编码器作为backbone
