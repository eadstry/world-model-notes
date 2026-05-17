---
title: "Efficient Video Diffusion Models via Content-Frame Motion-Latent Decomposition"
arxiv: https://arxiv.org/abs/2403.14148
website: https://sihyun.me/CMD/
venue: ICLR
year: 2024
---

# Efficient Video Diffusion Models via Content-Frame Motion-Latent Decomposition

::: info 论文信息
- **Venue**: ICLR (2024)
- **arXiv**: [https://arxiv.org/abs/2403.14148](https://arxiv.org/abs/2403.14148)
- **Website**: [https://sihyun.me/CMD/](https://sihyun.me/CMD/)
:::

## 学习笔记

### 核心贡献
- 提出 CMD（Content-Motion Latent Diffusion Model），将视频生成解耦为内容帧（类似图像）与低维运动隐表示两部分，分别由微调的预训练图像扩散模型和轻量运动扩散模型生成。
- 设计了一个紧凑的运动隐空间，可直接复用预训练图像扩散模型，这是以往视频隐扩散模型尚未实现的设计，显著降低了计算开销并提升了生成质量。
- 在推理效率上实现 7.7 倍加速，512×1024 分辨率、16 帧的视频可在 3.1 秒内完成采样。

### 方法细节
- 提出一种自编码器，将输入视频紧凑编码为一个内容帧（代表场景共性信息）加一个低维运动隐表示（代表底层运动模式）。
- 内容帧利用微调后的预训练图像扩散模型生成，运动隐表示则通过新训练的轻量扩散模型生成，两者在生成过程中协同工作。
- 运动隐空间的紧凑设计使得该框架能够直接受益于预训练图像扩散模型的生成能力，避免了从头训练高维视频扩散模型的高昂成本。
- 通过空间压缩（内容帧）与时间压缩（运动隐表示）的结合，实现了内容质量与运动保真度的有效平衡。

### 关键发现
- 在 WebVid-10M 数据集上取得 FVD 212.7，相比此前最优结果（FVD 292.4）提升 27.3%。
- 推理速度相比同类方案提升约 7.7 倍，验证了内容-运动分解策略在大幅降低计算成本的同时仍能保持生成质量。
- 实验表明，将内容与运动进行隐空间分解不仅提升了效率，还改善了对复杂运动模式的建模能力。

### 方法归类
- 属于高效视频扩散模型方法，核心思路是通过内容-运动解耦降低高维视频数据的计算负担。
- 与传统的视频隐扩散模型（如 Video LDM）相比，CMD 的关键区别在于将预训练图像扩散模型作为内容生成器，而非将整个视频压缩到统一隐空间。
