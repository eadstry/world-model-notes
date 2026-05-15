---
title: "Emu3.5: Native Multimodal Models are World Learners"
design: "Emu3.5"
arxiv: https://arxiv.org/abs/2510.26583
github: https://github.com/baaivision/Emu3.5
---

# Emu3.5: Native Multimodal Models are World Learners

::: info 论文信息
- **Design**: Emu3.5
- **论文全称**: Emu3.5: Native Multimodal Models are World Learners
- **arXiv**: [https://arxiv.org/abs/2510.26583](https://arxiv.org/abs/2510.26583)
- **GitHub**: [https://github.com/baaivision/Emu3.5](https://github.com/baaivision/Emu3.5)
:::

## 学习笔记

### 核心思想

Emu3.5 是 BAAI（北京智源人工智能研究院）提出的大规模多模态世界模型，核心理念是"原生多模态模型即世界学习器"（Native Multimodal Models are World Learners）。模型在超过 10 万亿 tokens 的视觉-语言交织数据上进行端到端统一的下一个 token 预测预训练，数据主要来源于互联网视频的连续帧和文字稿。Emu3.5 天然接受交织的视觉-语言输入并生成交织的视觉-语言输出，不需要将视觉和语言视为分离的任务。预训练后，模型进一步通过大规模强化学习进行后训练，增强多模态推理和生成能力。为提升推理效率，提出离散扩散适配（DiDA），将逐 token 解码转化为双向并行预测，在不牺牲性能的前提下将单张图像推理速度提升约 20 倍。Emu3.5 在图像生成和编辑任务上的性能与 Gemini 2.5 Flash Image 相当，在交织生成任务上表现更优。

### 技术架构

**Vision Encoding（视觉编码）**：Emu3.5 采用统一的 token 化策略，将图像/视频帧和文本都离散化为共享词表的 tokens。视觉 tokenizer 将图像帧转换为离散视觉 token 序列，语言 tokenizer 将文本转换为文本 token 序列。这种统一 token 表示使模型可以在同一自回归 Transformer 中无缝处理视觉和语言的交织输入。DiDA 在推理时将自回归解码转为并行扩散预测，大幅加速推理。

**Knowledge Learning（知识学习）**：Emu3.5 的预训练规模惊人——在超 10 万亿 tokens 的视觉-语言交织语料上进行下一个 token 预测。数据主要来自互联网视频的连续帧序列及其对应的文字稿，模型通过预测下一帧（视觉）和下一词（语言）的组合来学习世界的动态性和多模态语义。大规模 RL 后训练进一步增强了推理和生成能力。这种端到端、统一的训练范式使模型自然地习得了世界建模所需的时空理解和多模态推理能力。

**Controllable Simulation（可控仿真）**：Emu3.5 展现了广泛的世界建模仿真能力：(1) 长时域视觉-语言生成——可以持续生成图像/视频帧和配套文字描述；(2) 任意模态到图像（Any-to-Image / X2I）生成；(3) 复杂文本丰富图像生成；(4) 时空一致的世界探索——可在开放世界中进行空间和时间上连贯的视觉探索；(5) 开放世界具身操控——支持跨场景、跨任务的具身智能仿真。DiDA 加速使这些能力在实际部署中变得可行。

### 代码实现要点

- **统一 token 化**：视觉 tokenizer + 语言 tokenizer 共享相同离散词表
- **大一统 Transformer**：标准因果自回归 Transformer，视觉和语言 tokens 混合输入
- **DiDA**：推理时将自回归序列转为并行去噪过程，mask 部分视觉 token 并同时预测，约 20x 加速
- **RL 后训练**：大规模强化学习优化多模态推理质量
- **开源**：模型权重和代码通过 GitHub 发布

### 关键创新点

- **原生多模态世界学习**：无需任务分离，端到端统一 token 预测学习视觉-语言世界
- **10 万亿 token 训练规模**：从互联网视频中学习世界动态
- **DiDA 并行推理**：将 token-by-token 解码加速 20 倍，解决自回归世界模型的推理瓶颈
- **规模与 Gemini 2.5 Flash Image 比肩**：国内开源模型首次在图像生成上与 Google 旗舰产品对标

### 代表性结果

- 图像生成和编辑性能与 Gemini 2.5 Flash Image (Nano Banana) 相当
- 交织视觉-语言生成任务上表现更优
- DiDA 实现约 20 倍推理加速
- 展现从世界探索到具身操控的全方位世界建模仿真能力
- 项目页: https://emu.world/
