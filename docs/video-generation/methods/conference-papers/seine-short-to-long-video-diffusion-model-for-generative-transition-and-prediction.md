---
title: "SEINE: Short-to-Long Video Diffusion Model for Generative Transition and Prediction"
arxiv: https://arxiv.org/abs/2310.20700
github: https://github.com/Vchitect/SEINE
website: https://vchitect.github.io/SEINE-project/
venue: ICLR
year: 2024
---

# SEINE: Short-to-Long Video Diffusion Model for Generative Transition and Prediction

::: info 论文信息
- **Venue**: ICLR (2024)
- **arXiv**: [https://arxiv.org/abs/2310.20700](https://arxiv.org/abs/2310.20700)
- **GitHub**: [https://github.com/Vchitect/SEINE](https://github.com/Vchitect/SEINE)
- **Website**: [https://vchitect.github.io/SEINE-project/](https://vchitect.github.io/SEINE-project/)
:::

## 学习笔记

### 核心贡献
- 提出短到长视频扩散模型 SEINE，专注于生成式转场（generative transition）与预测（prediction），实现从 shot-level 短视频到 story-level 长视频的连贯生成
- 提出随机掩码视频扩散模型（random-mask video diffusion），通过文本描述自动生成不同场景间的平滑且富有创意的转场视频
- 建立三端评估标准：时序一致性（temporal consistency）、语义相似性（semantic similarity）、视频-文本语义对齐（video-text semantic alignment）

### 方法细节
- 以不同场景的图像作为输入，结合文本控制，模型生成场景间的转场视频，保证连贯性与视觉质量
- 模型可自然扩展到图像到视频动画（image-to-video animation）和自回归视频预测（autoregressive video prediction）等多种任务
- 基于预训练视频扩散模型，引入随机掩码机制控制条件帧与生成帧的交互方式

### 关键发现
- SEINE 在生成式转场和预测任务上显著优于现有方法，能够生成质量更高、转场更自然的 story-level 长视频
- 随机掩码策略相比固定条件策略在转场多样性上有明显优势，允许更灵活的语义过渡
- 提出的评估指标能够有效区分不同方法在转场任务上的性能差异

### 方法归类
- **范式**: 基于扩散模型的短到长视频生成
- **关键技术**: 随机掩码视频扩散、文本引导转场生成、自回归视频预测
- **适用场景**: 多场景故事级长视频生成、视频转场特效生成、图像序列动画化
