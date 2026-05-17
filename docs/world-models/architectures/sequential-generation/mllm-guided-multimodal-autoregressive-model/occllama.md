---
title: "OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving"
design: "OccLLaMA"
arxiv: https://arxiv.org/abs/2409.03272
website: https://vilonge.github.io/OccLLaMA_Page/
---

# OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving

::: info 论文信息
- **Design**: OccLLaMA
- **论文全称**: OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2409.03272](https://arxiv.org/abs/2409.03272)
- **Website**: [https://vilonge.github.io/OccLLaMA_Page/](https://vilonge.github.io/OccLLaMA_Page/)
:::

## 学习笔记

### 核心思想

OccLLaMA 是一种 Occupancy-Language-Action 生成式世界模型，以语义占用（semantic occupancy）作为自动驾驶的统一视觉表示，基于 MLLM 范式通过学习从感知到规划的直接映射，捕捉环境动态与车辆行为之间的耦合关系。其核心思路是将语义占用作为一种通用的 3D 场景表征，在此基础上构建统一的多模态自回归框架，使得视觉感知、语言推理与动作规划能够在同一个模型中协同进行。OccLLaMA 的创新性体现在三个方面：(1) 引入 VQVAE 式的场景 tokenizer，将 3D 占用场景高效离散化为紧凑的占用 token，兼顾重建精度与计算效率；(2) 构建视觉-语言-动作统一词汇表，将来自不同模态的 token 映射到共享的嵌入空间；(3) 增强 LLaMA 架构，以统一词汇表为媒介，通过下一 token/scene 预测的方式进行训练。模型能够同时支持 4D 占用预测、运动规划以及驾驶场景 VQA 等多种自动驾驶关键任务，展现了作为通用世界模型在自动驾驶领域的潜力。

### 方法架构

**视觉编码（Vision Encoding）**：OccLLaMA 使用 VQVAE 式的场景 tokenizer 处理语义占用（3D 语义标签，每个体素携带语义标签），将其离散化为占用 token。该 tokenizer 同时编码占用场景和语义分割，能够保留结构的完整性和语义信息。

**知识学习（Knowledge Learning）**：OccLLaMA 以 LLaMA 为核心的自回归架构，将视觉 token（占用编码）、语言 token（文本指令）和动作 token（控制轨迹）统一映射到共享嵌入空间，通过自回归下一 token 预测的方式学习"给定当前占用场景和文本指令，预测未来的占用状态/文本回答/控制轨迹"的统一映射，使得模型能够在统一的格式下同时学习感知、推理和决策知识。

**可控仿真（Controllable Simulation）**：OccLLaMA 的 4D 占用预测能力使其能够预测未来的 3D 占用场景序列，从而成为一种可控制的世界仿真器。基于历史观察和候选动作，模型可以前向 rollout 多步占用的演变过程，支持"预测如果我采取某动作，场景将如何变化"的 query。同时模型也支持视觉问答，如"当前场景中是否有行人"，拓展了其作为自动驾驶世界模型的表达能力。

### 关键实现要点

- **场景 tokenizer**：VQVAE 式的编码器-解码器联合优化占用重建和语义分割
- **统一词汇表**：视觉 token + 语言 token + 动作 token 共享嵌入空间
- **LLaMA 增强**：对 LLaMA 架构进行适配以处理多模态视觉/动作 token 序列
- **多任务训练**：4D 占用预测 + 运动规划 + VQA 联合训练

### 关键创新点

- **Occupancy-Language-Action 统一世界模型**：首次将占用作为视觉纽带统一 VLA 多模态
- **稀疏占用 tokenizer**：针对 3D 占用体素稀疏特性的高效 VQVAE
- **LLaMA 增强**：将 LLM 架构改造为自动驾驶的多模态世界模型骨干
- **多任务统一**：占用预测 + 规划 + VQA 在同一模型中协同学习

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
