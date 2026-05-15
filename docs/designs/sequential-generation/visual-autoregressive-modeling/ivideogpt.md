---
title: "iVideoGPT: Interactive VideoGPTs are Scalable World Models"
design: "iVideoGPT"
arxiv: https://arxiv.org/abs/2405.15223
github: https://github.com/thuml/iVideoGPT
---

# iVideoGPT: Interactive VideoGPTs are Scalable World Models

::: info 论文信息
- **Design**: iVideoGPT
- **论文全称**: iVideoGPT: Interactive VideoGPTs are Scalable World Models
- **arXiv**: [https://arxiv.org/abs/2405.15223](https://arxiv.org/abs/2405.15223)
- **GitHub**: [https://github.com/thuml/iVideoGPT](https://github.com/thuml/iVideoGPT)
:::

## 论文信息

- **arXiv**: [2405.15223](https://arxiv.org/abs/2405.15223)
- **GitHub**: [https://github.com/thuml/iVideoGPT](https://github.com/thuml/iVideoGPT)
- **发表时间**: 2024年5月（NeurIPS 2024）
- **作者团队**: 清华大学（Jialong Wu, Mingsheng Long 等）

## 核心思想

iVideoGPT提出了一个可扩展的自回归Transformer框架，将多模态信号——视觉观察、动作和奖励——统一整合为token序列，通过next-token prediction实现交互式世界模型。其核心理念是：世界模型的核心能力在于"交互性"——智能体不仅需要预测环境如何演变，更需要能够根据不同的动作输入看到不同的未来。iVideoGPT正是为了让视频生成模型能够被用作实用的交互式世界模型而设计。

iVideoGPT的关键创新在于其**压缩分词技术（Compressive Tokenization）**，能够高效地将高维视觉观察离散化为紧凑的token序列。传统的视频分词器会产生大量token（每帧可能数千个），这使得基于自回归Transformer的世界模型在计算上不可行。iVideoGPT通过压缩编码显著减少了每帧的token数量，使得在百万级人类和机器人操作轨迹上进行大规模预训练成为可能。

通过大规模预训练，iVideoGPT可以作为通用基础世界模型，适配到多种下游任务，包括动作条件视频预测、视觉规划（visual planning）和基于模型的强化学习（model-based RL）。在所有这些任务上，iVideoGPT都取得了与当前最先进方法相当或更优的性能，填补了生成式视频模型与实际基于模型强化学习应用之间的鸿沟。

## 技术架构

### Vision Encoding（视觉编码）
iVideoGPT采用**Compressive Tokenization**技术进行视觉编码。具体来说，使用一种压缩型的VQ-VAE变体（Context VQ-GAN），不仅对单帧图像进行空间压缩（类似ViT的patch embedding + vector quantization），还在时间维度上利用上下文帧来增强当前帧的编码效率。这种压缩编码将256×256分辨率的图像压缩到仅约256个token（相比于原始VQ-VAE可能需要4096+ token），大幅降低了后续自回归Transformer的计算负担。分词器参数量约114M（64分辨率）到310M（256分辨率）。

### Knowledge Learning（知识学习）
核心是一个基于LLaMA架构的自回归Transformer（138M到436M参数），将视觉token、动作token和奖励token交织为统一的序列进行next-token prediction预训练。预训练数据来自Open X-Embodiment数据集，包含数百万条人类和机器人操作轨迹，涵盖多种机器人平台、场景和任务。通过预测后续token，模型隐式学习物理动力学、物体交互、因果关系以及动作与视觉变化之间的映射。模型还支持目标条件（goal-conditioned）生成，即给定目标帧作为条件预测中间帧序列。

### Controllable Simulation（可控模拟）
交互控制通过动作条件机制实现。在推理时，模型接收当前帧的视觉token和给定的动作（或从动作空间中采样），自回归地预测下一帧的视觉token。通过调整输入的动作序列，智能体可以在模型中探索不同的行为路径。此外，iVideoGPT支持基于模型的强化学习（MBRL）——在学到的世界模型中进行rollout来规划动作序列，以及视觉规划（visual planning）——通过搜索最优动作序列以达到目标视觉状态。代码实现了Metaworld环境上的MBPO（Model-Based Policy Optimization）训练流程。

## 代码实现要点

- **完整开源**: 提供预训练模型、训练代码、推理代码和下游任务微调代码
- **三阶段训练流程**: Stage 1训练Compressive Tokenizer → Stage 2预训练Transformer → Stage 3在下游任务上微调
- **模型发布**: HuggingFace上提供多个版本（act-free/act-cond/goal-cond，64/256分辨率），包括BAIR、RoboNet、Robosuite等下游任务模型
- **评估协议**: 使用FVD、SSIM、PSNR评估视频预测质量
- **下游任务支持**: 
  - 动作条件视频预测（action-conditioned video prediction）
  - 视觉模型基于RL（通过Metaworld MBPO接口）
  - 视觉规划（visual planning via goal-conditioned rollout）
- **数据来源**: Open X-Embodiment（大规模预训练）、BAIR Robot Pushing、RoboNet、VP2（Robosuite/Robodesk）
- **RLVR-World扩展**: 后续工作证明可以通过带可验证奖励的强化学习（RLVR）进一步提升iVideoGPT性能

## 关键创新点

1. **压缩分词技术**: 将高维视觉观察高效离散化，大幅减少token数量，使大规模世界模型预训练成为可能
2. **统一多模态token序列**: 将视觉、动作、奖励统一为单一token序列，实现统一的next-token prediction框架
3. **大规模预训练-微调范式**: 首次在百万级机器人操作轨迹上预训练通用交互式世界模型，可适配多种下游任务
4. **三种交互模式**: 同时支持动作条件预测、视觉规划和基于模型的RL，覆盖世界模型的主要应用范式
5. **可扩展架构**: 基于LLaMA的Transformer架构，模型规模可灵活扩展

## 代表性结果

- 在Open X-Embodiment上预训练后，在BAIR Robot Pushing数据集上微调取得了SOTA的视频预测质量
- 在Metaworld环境上，基于iVideoGPT的MBRL达到与DreamerV3等专门设计的MBRL方法相当的性能
- 在Robosuite和Robodesk上的视觉规划任务中取得了竞争性结果
- 模型展现出对新机器人平台和环境的泛化能力
