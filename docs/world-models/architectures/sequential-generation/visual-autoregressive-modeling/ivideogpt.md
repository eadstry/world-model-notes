---
title: "iVideoGPT: Interactive VideoGPTs are Scalable World Models"
design: "iVideoGPT"
arxiv: https://arxiv.org/abs/2405.15223
---

# iVideoGPT: Interactive VideoGPTs are Scalable World Models

::: info 论文信息
- **Design**: iVideoGPT
- **论文全称**: iVideoGPT: Interactive VideoGPTs are Scalable World Models
- **arXiv**: [https://arxiv.org/abs/2405.15223](https://arxiv.org/abs/2405.15223)
:::

## 学习笔记

### 核心思想

iVideoGPT 是清华大学提出的一个可扩展的交互式世界模型架构，基于自回归 Transformer 框架，将多模态信号（视觉观察、动作、奖励）统一抽象为 token 序列，通过 next-token prediction 实现交互式世界建模。其核心洞见是：世界模型的核心不在于特定的模型架构，而在于能否构建一个足够"通用"的框架——既能处理不同环境的视觉输入，又能支持多种下游任务。

iVideoGPT 的关键技术是**压缩分词机制（Compressive Tokenization）**，能够高效地将高维视觉观测离散化为紧凑的 token 序列。相比传统视频分词器每个帧产生数千个 token，iVideoGPT 通过压缩编码将每帧的 token 数量降到约 256 个（对于 256x256 输入），使得基于自回归 Transformer 的动力学模型在计算上成为可行。这使得在包含多种机器人平台和任务的大规模数据集上进行预训练成为可能。

通过在包含多种机器人操控轨迹的大规模数据集上预训练，iVideoGPT 展示出作为通用世界模型基座的能力：无需为每个任务从头训练，只需微调即可适配到新的任务场景，包括视频预测、视觉规划（visual planning）和基于模型的强化学习（model-based RL）等。在所有这些下游任务中，iVideoGPT 都取得了与当前最先进方法相当甚至更优的性能。

### 核心架构

**Vision Encoding（视觉编码）**：iVideoGPT 采用**Compressive Tokenization**进行视觉编码。具体而言，使用一个压缩型 VQ-VAE（Context VQ-GAN）对单帧图像进行空间压缩（类似 ViT 的 patch embedding + vector quantization），并在时间维度上利用前一帧的上下文来增强当前帧的编码效率。压缩编码将 256×256 分辨率的图像压缩到约 256 个 token（原始 VQ-VAE 需要 4096+ token），显著减轻了后续自回归 Transformer 的计算负担。分词器提供两个版本：约 114M（64 分辨率）和 310M（256 分辨率）。

**Knowledge Learning（知识学习）**：核心是一个基于 LLaMA 架构的自回归 Transformer（138M / 436M 参数量），将视觉 token、动作 token 和奖励 token 交织为统一序列进行 next-token prediction 预训练。预训练数据来自 Open X-Embodiment 数据集——包含多种机器人操控轨迹，涵盖多种机器人平台和任务。通过预测下一个 token，模型以隐式方式学习物理动力学、物体交互关系和视觉-动作之间的映射。模型还支持目标条件下的生成（goal-conditioned generation），将目标帧作为条件输入来指导生成过程。

**Controllable Simulation（可控模拟）**：交互式控制通过动作条件注入实现帧级交互。推理时，模型接收当前帧的视觉 token 和给定的动作，通过自回归预测下一帧的视觉 token。通过连续注入不同的动作序列，模型可以探索不同的未来轨迹，为视觉规划提供基础。此外，iVideoGPT 支持基于模型的强化学习（MBRL）：在模型生成的 rollout 中训练策略，并在 MetaWorld 等基准上使用 MBPO 进行策略优化。

### 关键结果

- 在 Open X-Embodiment 预训练后，在 BAIR Robot Pushing 数据集上微调取得 SOTA 视频预测性能
- 在 MetaWorld 任务上，基于 iVideoGPT 的 MBRL 达到与 DreamerV3 等专门设计的 MBRL 方法相当的性能
- 在 Robosuite 和 Robodesk 系列任务上的视觉规划取得了令人瞩目的效果
- 模型展现出跨机器人平台和环境的泛化能力

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
