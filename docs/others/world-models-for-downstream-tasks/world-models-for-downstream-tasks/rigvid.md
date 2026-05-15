---
title: "Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations"
design: "RIGVid"
arxiv: https://arxiv.org/abs/2507.00990
github: https://github.com/shivanshpatel35/rigvid
---

# RIGVid: Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations

::: info 论文信息
- **Design**: RIGVid
- **论文全称**: Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations
- **arXiv**: [https://arxiv.org/abs/2507.00990](https://arxiv.org/abs/2507.00990)
- **GitHub**: [https://github.com/shivanshpatel35/rigvid](https://github.com/shivanshpatel35/rigvid)
:::

## 学习笔记

### 核心思想

该工作提出了 RIGVid，通过模仿生成视频而非物理演示来进行机器人操控学习。其核心创新在于：彻底跳过了物理演示数据的采集过程，直接利用世界模型/视频生成模型生成"想象中"的操作视频，然后让机器人策略从这些合成视频中学习操控技能。

该工作的突破性在于它展示了"零物理演示"的机器人学习可能性，为大幅降低机器人技能学习的数据门槛提供了全新的范式。
