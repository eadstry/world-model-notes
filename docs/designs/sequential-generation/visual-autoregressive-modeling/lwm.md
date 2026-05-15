---
title: "LWM (Large World Model)"
design: "Video GPT / Visual Autoregressive Model"
arxiv: "https://arxiv.org/abs/2402.08268"
github: "https://github.com/LargeWorldModel/LWM"
website: ""
---

# LWM

## 论文信息

- **arXiv**: [2402.08268](https://arxiv.org/abs/2402.08268)
- **GitHub**: [https://github.com/LargeWorldModel/LWM](https://github.com/LargeWorldModel/LWM)
- **发表时间**: 2024年2月
- **作者团队**: UC Berkeley（Hao Liu, Pieter Abbeel 等）

## 核心思想

LWM（Large World Model）致力于解决长上下文理解的关键挑战——这是开发能在可能包含百万级token的长时序上处理和操作的通用智能模型的核心组件。传统序列模型受限于有限的上下文窗口（通常4K-32K token），无法处理需要长时间记忆和理解的任务。LWM通过Blockwise RingAttention技术，将上下文长度从4K渐进扩展到100万token（1M），开创了百万级上下文世界模型的先河。

该工作的一个重要贡献是全面展示了从数据处理到模型训练的生产百万级上下文模型的全流程开发过程：包括长上下文数据筛选流程、从4K到1M token的渐进式上下文扩展策略，以及高效的分布式长序列训练实现。LWM开源了一系列7B参数模型，能够处理超过100万token的长文本文档和视频。

## 技术架构

### Vision Encoding
LWM同时支持文本和视频两种模态的输入。对于视频，使用VQ-VAE风格的分词器将视频帧编码为离散token，然后与文本token混合形成统一token序列。长视频被编码为百万级别的token序列。模型通过Blockwise RingAttention技术，将长序列切分为多个block，利用ring-based通信在多个GPU上高效分布计算注意力。

### Knowledge Learning
核心是渐进式上下文扩展训练策略：从4K上下文开始训练，逐步扩展到8K、16K...直到1M token。在每个阶段，模型学习在越来越长的序列上维持一致的知识表示和预测能力。训练数据包括长文本文档（书籍、论文等）和长视频（电影、纪录片等）。通过预测序列中held-out的token，模型隐式学习时空结构、叙事逻辑和因果关系。

### Controllable Simulation
LWM主要面向理解和推理而非交互控制。在视频理解任务上，LWM能回答关于长视频中事件的复杂语义问题（如"电影开头和结尾发生了什么变化？"）。模型也能基于长视频进行故事摘要和事件预测。

## 代码实现要点

- **开源**: UC Berkeley开源，提供1M上下文的大规模实现
- **7B参数家族**: 开源多个7B模型变体
- **核心技术**: Blockwise RingAttention实现高效分布式长序列训练
- **训练策略**: 渐进式上下文扩展（4K→1M）
- **数据**: 自定义长文档和长视频数据管线

## 关键创新点

1. **1M上下文**: 首次实现百万级token上下文的世界模型
2. **Blockwise RingAttention**: 高效的分布式长序列注意力机制
3. **渐进式扩展**: 从4K到1M的稳定训练策略
4. **视频-语言统一**: 同一模型处理长文本和长视频
5. **开源生态**: 完整代码、模型和训练流程开源

## 代表性结果

- 上下文长度达1M token（约1小时视频或整本小说）
- 在长文档检索任务上设立新基准
- 支持"大海捞针"式长视频问答
- 7B参数在长上下文任务上超越同规模模型的SOTA