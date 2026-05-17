---
title: "RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation"
design: "RynnVLA-001"
arxiv: https://arxiv.org/abs/2509.15212
github: https://github.com/alibaba-damo-academy/RynnVLA-001
---

# RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation

::: info 论文信息
- **Design**: RynnVLA-001
- **论文全称**: RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2509.15212](https://arxiv.org/abs/2509.15212)
- **GitHub**: [https://github.com/alibaba-damo-academy/RynnVLA-001](https://github.com/alibaba-damo-academy/RynnVLA-001)
:::

## 学习笔记

### 核心思想

RynnVLA-001 是一种集成了世界模型能力的视觉-语言-动作（VLA）模型，由阿里巴巴 DAMO 学院提出。其核心理念是通过大规模人类演示视频的生成式预训练来提升 VLA 模型的操控能力。训练分为两个阶段：第一阶段在 1200 万段第一视角操作视频上进行 Image-to-Video 预训练，让模型学习"从当前帧预测未来会发生什么"；第二阶段在此基础上联合预测未来的关键点轨迹，让模型学习"如果要完成任务，应该怎么动"。

RynnVLA-001 的核心贡献在于引入了 ActionVAE，将高维的机器人动作序列（关节角度/位姿）压缩为低维潜在表示，大幅降低了自回归生成的复杂度。这种从人类视频预训练到机器人动作微调的两阶段策略，有效解决了机器人操控数据稀缺的问题。在 LIBERO 和 CALVIN 等标准基准上，RynnVLA-001 以优越的微调成功率超越了同规模的 SOTA VLA 模型。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
