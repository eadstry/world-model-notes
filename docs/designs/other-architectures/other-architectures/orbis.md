---
title: "Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models"
design: "Orbis"
arxiv: https://arxiv.org/abs/2507.13162
github: https://github.com/lmb-freiburg/orbis
---

# Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models

::: info 论文信息
- **Design**: Orbis
- **论文全称**: Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models
- **arXiv**: [https://arxiv.org/abs/2507.13162](https://arxiv.org/abs/2507.13162)
- **GitHub**: [https://github.com/lmb-freiburg/orbis](https://github.com/lmb-freiburg/orbis)
:::

## 学习笔记

### 核心思想

Orbis 是一个应对驾驶世界模型长时域预测挑战的框架，来自弗莱堡大学。现有自动驾驶世界模型在长时域生成和对挑战性场景的泛化上表现不佳。Orbis 的核心理念是"简约至上"——仅使用简单的设计选择，不引入额外的监督信号或传感器（如高清地图、深度、多摄像头），仅凭 469M 参数和 280 小时视频数据训练即达到 SOTA 性能。特别在困难场景（如转弯操作、城市交通）中表现突出。此外，Orbis 进行了离散 token vs 连续流匹配的并排对比实验，设计了一种可用于两种范式的混合 tokenizer。结论是连续自回归模型胜出——对设计选择更鲁棒且表现更强。

### 技术架构

**Vision Encoding（视觉编码）**：Orbis 使用混合 tokenizer，将视频帧编码为既可以离散化为 token 序列（用于离散自回归 Transformer），也可以作为连续潜在向量（用于流匹配或连续自回归）的表示。这种混合设计使研究能够公平对比离散和连续两种生成范式。

**Knowledge Learning（知识学习）**：Orbis 仅使用单目摄像头视频作为输入，无地图、无深度、无多摄。469M 参数在 280 小时驾驶视频上训练。连续自回归（continuous autoregressive）模型在每个时间步预测连续潜在向量，而非离散 token——这避免了量化误差的累积。研究发现连续模型对设计选择（如 tokenizer 大小、架构深度等）更为鲁棒。特别在转弯和城市交通等复杂驾驶场景中，Orbis 展现了优于离散模型和同类方法的性能。

**Controllable Simulation（可控仿真）**：Orbis 以自车位姿变化轨迹为条件进行未来帧预测。在长时域测试中（如多步 rollout），连续模型相比离散模型表现出更少的误差累积和视觉退化。模型在转弯、变道、拥堵等挑战性驾驶场景中保持了稳定的场景一致性和视觉质量。

### 代码实现要点

- **混合 tokenizer**：单一编码器支持离散化（离散 token）和连续化（潜在向量）两种输出
- **连续自回归**：每步预测连续潜在向量，通过潜在解码器还原为图像
- **轻量级设计**：469M 参数，280h 视频数据，单目相机
- **对比实验**：离散 vs 连续，相同 tokenizer 的公平对比

### 关键创新点

- **离散 vs 连续实证对比**：首次使用混合 tokenizer 进行公平对比，连续模型胜出
- **简约高效**：无地图/深度/多摄像头，469M 参数 SOTA
- **挑战场景优势**：转弯、城市交通等困难场景下表现突出
- **连续模型鲁棒性**：证明连续自回归比离散 token 更鲁棒
