---
title: "Factorized Video Generation: Decoupling Scene Construction and Temporal Synthesis in Text-to-Video Diffusion Models"
arxiv: https://arxiv.org/abs/2512.16371
github: https://github.com/vita-epfl/FVG/tree/main
website: https://vita-epfl.github.io/FVG/
venue: arXiv
year: 2025
---

# Factorized Video Generation: Decoupling Scene Construction and Temporal Synthesis in Text-to-Video Diffusion Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2512.16371](https://arxiv.org/abs/2512.16371)
- **GitHub**: [https://github.com/vita-epfl/FVG/tree/main](https://github.com/vita-epfl/FVG/tree/main)
- **Website**: [https://vita-epfl.github.io/FVG/](https://vita-epfl.github.io/FVG/)
:::

## 学习笔记

### 核心贡献

本文的核心洞察是：现有 T2V 扩散模型的许多失败（包括看似是运动生成错误的问题）实际上源于模型无法构造一个语义正确、逻辑一致的**初始帧**。基于此，作者提出 **Anchored Video Generation (AVG)**，一种模块化三阶段流水线，将 T2V 生成解耦为三个专门化的子任务：(1) **推理（Reasoning）**：LLM 将视频提示改写为仅描述初始场景的文本，消除时间歧义；(2) **构图（Composition）**：T2I 模型根据改写后的提示合成高质量、构图正确的锚定帧（anchor frame）；(3) **时序合成（Temporal Synthesis）**：视频模型在锚定帧的条件下进行微调，使其能将全部容量集中于场景动画化与运动生成，无需再操心场景构建。这种解耦让每阶段专注于自身最擅长的任务，从结构上避免了端到端模型中的任务冲突。

### 方法细节

1. **Reasoning 阶段**：给定任意视频文本提示 $P_{\text{video}}$，LLM 被提示工程引导，提取出"视频开始时的场景描述"，输出纯静态场景描述 $P_{\text{anchor}}$。这一步的核心价值在于剥离提示中隐含的时间信息（如"一个人先站起来，然后走出房间"→"一个人坐在椅子上"），让后续 T2I 模型不因时间信息而困惑。
2. **Composition 阶段**：冻结的 T2I 模型（如 FLUX）接收 $P_{\text{anchor}}$，合成一张高保真、构图正确的锚定帧 $I_{\text{anchor}}$。因输入已不含时间信息，T2I 模型可充分发挥其空间构图能力。
3. **Temporal Synthesis 阶段**：视频扩散模型（如 CogVideoX）在锚定帧 $I_{\text{anchor}}$ 与原始提示 $P_{\text{video}}$ 的双重条件下进行微调。微调目标是让模型学会将锚定帧作为"视觉先验"解释后续运动，而非从噪声中凭空构建场景。训练样本由 $(I_{\text{anchor}}, P_{\text{video}})$ 对构成，损失函数与标准扩散损失一致。
4. **推理加速**：由于锚定帧已提供了高质量的初始视觉信息，采样过程无需从纯噪声中逐渐"还原"场景结构，因此可将采样步数减少 70% 而无性能损失。

### 关键发现

- 在 **T2V CompBench** 上达到新 SOTA，显著超越现有端到端方法。
- 在 **VBench2** 上，对所有测试的基座模型（CogVideoX 等）均有显著提升，表明方法具有模型无关的通用性。
- 视觉锚定使得推理效率大幅提升：采样步数可削减 **70%** 而性能无损。
- 消融实验证实，构图失败是端到端 T2V 的核心瓶颈，而非时序建模能力不足。

### 方法归类

- **范式**：模块化/解耦生成流水线（Modular Decoupled Pipeline）
- **技术路径**：LLM 语义推理 → T2I 空间构图 → 视频扩散模型时序合成
- **核心机制**：锚定条件生成（Anchor-Conditioned Generation）
- **相关方向**：Text-to-Video 解耦生成、组合式视频合成、推理效率优化
