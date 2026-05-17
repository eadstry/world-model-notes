---
title: "LWM (Large World Model)"
design: "LWM"
website: https://largeworldmodel.github.io/
---

# LWM (Large World Model)

::: info 论文信息
- **Design**: LWM
- **论文全称**: Large World Model
- **Website**: [https://largeworldmodel.github.io/](https://largeworldmodel.github.io/)
:::

## 学习笔记

### 核心思想

LWM（Large World Model）致力于解决世界模型领域的一个关键挑战：长序列建模。传统技术受限于模型上下文窗口的大小（通常 4K-32K tokens），无法处理需要长时间上下文的任务（如小时级视频理解、整本小说阅读等）。LWM 通过 Blockwise RingAttention 技术将上下文长度从 4K 扩展至 100 万 tokens（1M），开创了百万级上下文世界模型的先河。

该工作的一个重要贡献是完全开源了从数据处理到模型训练的全流程，包括：训练数据的收集和筛选过程、从 4K 到 1M tokens 的渐进式长度扩展策略、以及高效的分布式注意力训练实现。LWM 开源了一系列 7B 参数模型，能够处理长达 100 万 tokens 的文本、文档和视频。

### 核心架构

**Vision Encoding（视觉编码）**：LWM 同时支持文本和视频两种模态的输入。对于视频，使用 VQ-VAE 风格的分词器将视频帧编码为离散 token，然后与文本 token 交织形成统一 token 序列。视频信息以帧级 token 序列形式纳入。模型通过 Blockwise RingAttention 将长序列分解为多个 block，利用 ring-based 通信在多 GPU 间实现高效的分布式注意力计算。

**Knowledge Learning（知识学习）**：采用渐进式长度扩展训练策略，从 4K 上下文开始训练，逐步扩展到 8K、16K……直到 1M tokens。在每个阶段，模型学习越来越长的上下文依赖关系，同时保持一致的内部知识表示。预训练数据包括文本文档、书籍、代码等，以及视频数据集（电影、纪录片等）。通过预测 held-out token，模型以自回归方式学习时间结构和逻辑推理链。

**Controllable Simulation（可控模拟）**：LWM 的主要应用场景不是传统的可控视频生成，而是长上下文理解与生成。在长视频问答场景中，LWM 能回答关于长视频事件的高层理解问题（如"这部电影的结尾发生了什么？"），也能在长视频中进行摘要生成和事件预测。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
