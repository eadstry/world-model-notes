---
title: "ReWorld: Multi-Dimensional Reward Modeling for Embodied World Models"
design: "ReWorld"
arxiv: https://arxiv.org/abs/2601.12428
---

# ReWorld: Multi-Dimensional Reward Modeling for Embodied World Models

::: info 论文信息
- **Design**: ReWorld
- **论文全称**: ReWorld: Multi-Dimensional Reward Modeling for Embodied World Models
- **arXiv**: [https://arxiv.org/abs/2601.12428](https://arxiv.org/abs/2601.12428)
:::

## 核心思想

ReWorld iUC Berkeley 提出的用于具身语言推理的自回归视频世界模型。核心创新是将视频生成世界模型与语言推理结合——模型通过自回归方式生成未来帧，同时在生成过程中引入语言作为条件，使世界模型能基于语言指令推理并生成符合语义的未来场景。

ReWorld 的关键贡献是"reversal world model"概念：模型不仅能正向预测（给定动作预测结果），还能反向推理（给定目标结果推测需要哪些动作）。这种双向推理能力使其特别适合语言引导的具身任务——从语言目标反向推导所需的动作序列。

## 技术架。

**Vision Encoding（视觉编码）**：使用VQ-GAN 将图像编码为离散 token。Token 序列通过自回归Transformer 建模。

**Knowledge Learning（知识学习）**：自回归 Transformer 中image tokens + language tokens 的联合序列上进行 next-token prediction。语言通过 text encoder（如 T5）编码后与图的token 交错排列。模型通过 causal attention 程token 空间中同时建模视觉变化和语言语义。

**Controllable Simulation（可控模拟）**：支持两种模式：的）正向模式：给定 action + language，自回归生成未来帧；的）反向模式：给定 target frame + language，自回归生成中间动作序列。

## 代码实现要点

暂无开源代码。基准VQ-GAN + causal Transformer。在 Calvin 于RLBench 上评估。

## 关键创新。

1. **语言条件视频世界模型**：语言作为生成条件融入自回归视频模。
2. **双向推理**：正向预测+ 反向推理的双重能。
3. **语言-视觉联合 token 系*：统一个token 序列建模
4. **具身推理**：从语言目标推导物理动作序列

## 代表性结。

在Calvin elong-horizon 语言引导任务中（的打开抽屉取出蓝色方块"），ReWorld 通过反向推理使子任务完成率提出25%。在 RLBench 上，语言条件的世界模型使 agent 能从未见过的语言指令（组合泛化）中推理出正确动作。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
