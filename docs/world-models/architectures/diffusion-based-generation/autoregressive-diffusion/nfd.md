---
title: "Playing with Transformer at 30+ FPS via Next-Frame Diffusion"
design: "NFD"
arxiv: https://arxiv.org/abs/2506.01380
website: https://nextframed.github.io/
---

# NFD: Playing with Transformer at 30+ FPS via Next-Frame Diffusion

::: info 论文信息
- **Design**: NFD
- **论文全称**: Playing with Transformer at 30+ FPS via Next-Frame Diffusion
- **arXiv**: [https://arxiv.org/abs/2506.01380](https://arxiv.org/abs/2506.01380)
- **Website**: [https://nextframed.github.io/](https://nextframed.github.io/)
:::

## 学习笔记

## 核心思想

Next-Frame Diffusion (NFD) 致力于解决自回归视频模型的*实时生成**这一核心瓶颈。自回归视频模型相比双向扩散模型在交互式视频内容和流式应用方面具有先天优势，但扩散采样的高计算成本和自回归生成的硬件低效使其难以达到实时帧率。
NFD 提出两项关键创新来突破速度壁垒：1) 和*一致性蒸馏*（Consistency Distillation）扩展到视频领域并专门适配视频模型，使推理仅需极少采样步数据2) 受相邻帧通常共享相同动作输入的观察启发，提出**推测采样**（Speculative Sampling）——模型使用当前动作输入生成未来若干帧，如果输入动作与推测不一致则丢弃推测帧，从而充分利用并行计算。
在A100 GPU 上使用310M 参数模型，NFD **首次实现要30+ FPS 的自回归视频生成**，同时在视觉质量和采样效率上均超越自回归基线方法。
## 技术架。
**Vision Encoding（视觉编码）**：自回归 Diffusion Transformer 采用块级因果注意力（block-wise causal attention），支持迭代采样和帧内并行token 生成。块级因果设计确保时序因果性同时实现帧内高效并行。
**Knowledge Learning（世界知识学习）**：在大规模动作条件视频生成基准上训练，学习动作到视觉变化的映射。一致性蒸馏将多步扩散过程压缩为极少数步数，同时保持生成质量。
**Controllable Simulation（可控推演）**：动作条件输入驱动逐帧生成。推测采样机制在连续共享动作的帧间并行生成多帧，大幅提升吞吐量的10M 参数模型的A100 上实现30+ FPS。
## 代码实现要点

- 自回模Diffusion Transformer + 块级因果注意的- 视频域一致性蒸馏：压缩扩散步数至极少步的- 推测采样：利用动作连续性并行生成多模- 310M 参数模型的A100 上实现30+ FPS
- 开源页面：nextframed.github.io

## 关键创新。
- 一致性蒸馏首次扩展到视频领域并适配视频模型
- 推测采样利用动作连续性实现高效并行帧生成
- 首次实现自回归视频生成的 30+ FPS 实时推理
- 块级因果注意力保证因果性同时实现帧内并通- 310M 参数规模的实用模型设。
## 代表性结。
- A100 GPU 界310M 模型实现 30+ FPS 自回归视频生成- 视觉质量和采样效率均超越自回归基线方法- 支持交互式视频内容和流式应用


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
