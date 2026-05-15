---
title: "EDELINE: Enhancing Memory in Diffusion-based World Models via Linear-Time Sequence Modeling"
design: "EDELINE"
arxiv: https://arxiv.org/abs/2502.00466
github: https://github.com/LJH-coding/EDELINE
---

# EDELINE: Enhancing Memory in Diffusion-based World Models via Linear-Time Sequence Modeling

::: info 论文信息
- **Design**: EDELINE
- **论文全称**: EDELINE: Enhancing Memory in Diffusion-based World Models via Linear-Time Sequence Modeling
- **arXiv**: [https://arxiv.org/abs/2502.00466](https://arxiv.org/abs/2502.00466)
- **GitHub**: [https://github.com/LJH-coding/EDELINE](https://github.com/LJH-coding/EDELINE)
:::

## 学习笔记

## 核心思想

EDELINE（NeurIPS 2025 Spotlight）提出了一种将状态空间模型（SSM）与扩散模型统一融合的世界模型架构，以解决现有扩散世界模型中内存容量受限的核心问题。传统的扩散世界模型（如DIAMOND）使用固定长度的上下文帧进行条件生成，这严重限制了模型对长程时序依赖的捕捉能力。

EDELINE通过引入线性时间序列建模（基于Mamba等SSM架构），使世界模型能够高效地处理长序列历史信息，同时保持扩散模型在视觉保真度方面的优势。这种统一架构使模型在需要长期记忆的复杂环境中表现出色，突破了固定上下文窗口的天花板。

EDELINE在多个维度验证了长程记忆对强化学习世界模型的重要性：在视觉复杂的Atari 100k基准、需要长期规划的记忆型Crafter环境和3D第一人称ViZDoom任务中，均取得了超越DIAMOND和传统RNN-based世界模型的最优性能。

## 技术架构

**Vision Encoding（视觉编码）**：采用与DIAMOND类似的扩散框架，使用视频扩散模型在像素空间或潜在空间中进行观察预测。视觉编码器将原始图像帧压缩为紧凑的潜在表示，作为扩散模型的条件输入。

**Knowledge Learning（世界知识学习）**：核心创新在于用状态空间模型（SSM/Mamba）替代传统RNN进行历史状态聚合。SSM提供线性时间复杂度O(L)的序列建模能力，相比Transformer（O(L²)）和固定窗口方法，能够高效处理长序列。模型在潜在空间中学习状态转移动态，并通过扩散过程生成高质量的未来帧预测。

**Controllable Simulation（可控推演）**：与DIAMOND相同，模型通过学习奖励和终止信号预测器来支持Actor-Critic强化学习。智能体可以在世界模型的想象中（in imagination）进行策略优化，不依赖与真实环境的交互。长程记忆能力使智能体能够更好地处理部分可观测和需要长期规划的任务。

## 代码实现要点

- 基于DIAMOND代码库构建，集成Mamba.py实现SSM序列建模
- 使用Hydra进行配置管理，支持灵活的架构超参数调优
- 支持Atari 100k、Crafter和ViZDoom三种环境基准
- 构建在k-diffusion框架上实现扩散过程的训练和采样
- 提供weights & biases日志支持和checkpoint管理
- 可通过配置开关实现model-free RL对比实验

## 关键创新点

- 首次将状态空间模型（SSM）与扩散世界模型统一，解决长程记忆瓶颈
- 线性时间复杂度O(L)的序列建模，扩展历史上下文至远超固定窗口的规模
- 统一架构同时优化视觉保真度（扩散模型）和时序推理（SSM）
- 在记忆密集型任务（Crafter）中显著超越固定上下文方法

## 代表性结果

- Atari 100k基准：超越DIAMOND等扩散世界模型基线
- Crafter基准：在需要长期记忆的任务上表现优异，验证SSM的记忆优势
- ViZDoom 3D环境：在3D第一人称视角任务中展现鲁棒性能
- 消融实验证实序列建模长度对记忆密集型任务的关键影响
