---
title: "Preserve Your Own Correlation: A Noise Prior for Video Diffusion Models"
arxiv: https://arxiv.org/abs/2305.10474
website: https://research.nvidia.com/labs/dir/pyoco/
venue: ICCV
year: 2023
---

# Preserve Your Own Correlation: A Noise Prior for Video Diffusion Models

::: info 论文信息
- **Venue**: ICCV (2023)
- **arXiv**: [https://arxiv.org/abs/2305.10474](https://arxiv.org/abs/2305.10474)
- **Website**: [https://research.nvidia.com/labs/dir/pyoco/](https://research.nvidia.com/labs/dir/pyoco/)
:::

## 学习笔记

### 核心贡献
- 提出 PYoCo（Preserve Your Own Correlation），一种专为视频扩散模型设计的噪声先验
- 发现直接将图像扩散中的独立噪声先验扩展到视频框架会导致次优性能，设计保留帧间相关性的噪声采样策略以提升时序一致性
- 在预训练图像扩散模型基础上通过视频数据微调实现高质量视频生成，显著降低训练成本

### 方法细节
- 系统分析图像噪声先验与视频噪声先验的关键差异：视频帧间应保持特定相关性结构，而非完全独立采样
- 设计帧间相关性保持的噪声先验，即在不同帧的噪声潜变量中引入可控的相关性，使模型能更好地学习时序一致性
- 在固定预训练图像扩散模型的基础上，仅通过视频数据进行少量 fine-tuning，保持图像先验质量的同时赋予时序建模能力

### 关键发现
- PYoCo 在 UCF-101 和 MSR-VTT 零样本文本到视频生成任务上达到当时 SOTA
- 以 10 倍更小的模型规模和显著更少的计算量，在小规模 UCF-101 上达到超越先前工作的视频生成质量

### 方法归类
- **范式**: 基于预训练图像扩散模型微调的视频生成
- **关键技术**: 帧间相关性保持的噪声先验、噪声相关性建模、轻量视频微调
- **适用场景**: 零样本文本到视频生成、小数据量视频生成、计算资源受限的视频合成
