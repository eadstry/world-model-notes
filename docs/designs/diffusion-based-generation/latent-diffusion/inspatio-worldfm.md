---
title: "InSpatio-WorldFM: An Open-Source Real-Time Generative Frame Model"
design: "InSpatio-WorldFM"
arxiv: https://arxiv.org/abs/2603.11911
github: https://github.com/inspatio/worldfm
---

# InSpatio-WorldFM: An Open-Source Real-Time Generative Frame Model

::: info 论文信息
- **Design**: InSpatio-WorldFM
- **论文全称**: InSpatio-WorldFM: An Open-Source Real-Time Generative Frame Model
- **arXiv**: [https://arxiv.org/abs/2603.11911](https://arxiv.org/abs/2603.11911)
- **GitHub**: [https://github.com/inspatio/worldfm](https://github.com/inspatio/worldfm)
:::

## 学习笔记

### 核心思想
InSpatio-WorldFM 是一个开源的实时生成式帧模型（Frame Models），旨在以极高帧率（实时）生成视频内容。核心思想是设计轻量级但高性能的生成架构，在保证视频质量的前提下实现实时推理，使世界模型可以嵌入到交互式应用（如游戏引擎、仿真环境）中运行。

### 技术架构
- **Vision Encoding（视觉编码）**：采用高效的视频 tokenizer（如轻量 VQ-VAE 或时序压缩编码器），将高分辨率视频帧压缩到紧凑的潜空间（latent tokens），降低后续处理的序列长度和计算量。
- **Knowledge Learning（知识学习）**：使用轻量级 Transformer（如 DiT-lite）或线性注意力机制在潜空间建模视频的时空动态，通过自回归或流匹配（flow matching）方式预测后续帧的 latent tokens。
- **Controllable Simulation（可控仿真）**：支持动作条件控制（action-conditioned），可根据给定动作序列生成对应的视频帧，同时保持实时推理速度（>30 FPS 生成）。

### 关键创新点
1. **实时生成**：通过架构优化（轻量 tokenizer + 高效骨干网络）实现实时视频生成，突破扩散模型推理慢的瓶颈。
2. **开源可复现**：全流程开源（inspatio/worldfm），提供预训练权重和推理 pipeline。
3. **帧模型范式**：推广 Frame Models 概念，强调以帧为单位的实时世界模拟。

### 代码实现要点
- 基于 PyTorch，提供完整训练/推理脚本
- 视频 tokenizer 使用轻量 VQ-VAE 变体，大幅压缩空间分辨率
- DiT-lite 骨干网络通过减少注意力头数和层数实现加速
- 支持 batch inference 和 streaming generation 模式

### 代表性结果
- 在 Minecraft、仿真驾驶等场景实现 >30 FPS 的视频生成
- 在保持较高视觉保真度（FVD、LPIPS）的同时达到实时推理延迟
