---
title: "DC-VideoGen: Efficient Video Generation with Deep Compression Video Autoencoder"
arxiv: https://arxiv.org/abs/2509.25182v1
github: https://github.com/dc-ai-projects/DC-VideoGen
website: https://hanlab.mit.edu/projects/dc-videogen
venue: arXiv
year: 2025
---

# DC-VideoGen: Efficient Video Generation with Deep Compression Video Autoencoder

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2509.25182v1](https://arxiv.org/abs/2509.25182v1)
- **GitHub**: [https://github.com/dc-ai-projects/DC-VideoGen](https://github.com/dc-ai-projects/DC-VideoGen)
- **Website**: [https://hanlab.mit.edu/projects/dc-videogen](https://hanlab.mit.edu/projects/dc-videogen)
:::

## 学习笔记

### 核心贡献

DC-VideoGen 是一个面向预训练视频扩散模型的后训练加速框架，核心贡献包括两点：

1. **Deep Compression Video Autoencoder (DC-VAE)** ：提出了一种全新的视频自编码器，采用 chunk-causal temporal 设计，在空间维度实现 32x/64x 压缩、时间维度实现 4x 压缩的同时，保持了高重建质量和向更长视频的泛化能力。相比常见的 8x 空间 + 4x 时间压缩方案（如 Wan-VAE），DC-VAE 将潜空间维度大幅降低，从而减少扩散模型每一步推理的计算量。

2. **AE-Adapt-V 适配策略**：设计了一种稳健的模型适配方法，能够将任意预训练视频扩散模型快速、稳定地迁移到 DC-VAE 的深度压缩潜空间中，仅需轻量微调（LoRA 级别），无需从头训练。以 Wan-2.1-14B 为例，适配仅需 10 GPU 天（NVIDIA H100），加速后推理延迟最高降低 14.8x，且支持在单 GPU 上生成 2160x3840 分辨率视频。

### 方法细节

**DC-VAE 架构**：
- 编码器-解码器结构，基于 3D 卷积与 3D 转置卷积实现空间和时间维度的下采样/上采样。
- **Chunk-causal temporal 设计**：对视频进行分块（chunk）处理，块内使用全注意力或卷积，块间引入因果约束，确保当前块只能访问过去块的信息，从而支持任意长视频的编码/解码而不破坏时间一致性。这一设计是 DC-VAE 能在 4x 时间压缩下仍保持高重建质量的关键。
- 空间压缩：通过级联下采样实现 32x（f32）或 64x（f64）空间压缩，中间层保持合理的通道数以保留信息。
- 训练时使用重建损失（L1/L2）、感知损失（LPIPS）、对抗损失（GAN loss）以及 KL 正则化项的加权组合。

**AE-Adapt-V 适配流程**：
- 保持预训练扩散模型的主干权重冻结或仅微调少量适配器参数（如 LoRA）。
- 核心思路是让扩散模型学会在新潜空间中预测噪声：由于 DC-VAE 的潜空间与原始 VAE 潜空间在统计分布上不同，AE-Adapt-V 通过少量步数的微调使扩散模型的输入/输出分布对齐到新潜空间。
- 支持逐步适应策略：先从低分辨率、短时长视频开始微调，再逐步扩展到更高分辨率和更长视频。

**推理加速原理**：
- 潜空间分辨率降低 → 扩散模型每一步去噪的张量尺寸变小 → 单步推理 FLOPs 大幅减少。
- 与蒸馏、步数压缩（如 DPM-Solver）等正交，可叠加使用获得更大加速。

### 关键发现

1. **深度压缩潜空间不牺牲质量**：尽管潜空间被压缩了 32x 空间 + 4x 时间，经过 AE-Adapt-V 适配后的扩散模型仍能生成与原始模型视觉质量相当的视频。这表明现有视频 VAE 的压缩比（如 8x 空间）留有大量冗余。

2. **Chunk-causal 设计对长视频泛化至关重要**：消融实验表明，移除 chunk-causal 约束会导致长视频编码时出现时间伪影和一致性下降，证实了因果时间建模在深度压缩场景下的必要性。

3. **适配效率极高**：仅需 10 GPU 天即可完成 14B 参数模型的适配，远低于从头训练视频扩散模型的成本，使得加速方案具有实际可部署性。

4. **单 GPU 4K 生成**：加速后支持在单张 GPU 上生成 2160x3840 分辨率视频，极大降低了高端视频生成的硬件门槛，对视频生成民主化有重要意义。

5. **与现有加速技术正交**：DC-VideoGen 与步数压缩（distillation、DPM-Solver）、推理优化（FlashAttention、量化）等技术互不冲突，可组合使用以获得更大的加速效果。

### 方法归类

- **大方向**：视频生成模型加速 / Video Diffusion Model Acceleration
- **技术维度**：潜空间压缩（Latent Space Compression）、后训练适配（Post-training Adaptation）
- **相关方法**：VideoVAE+（压缩比提升）、Wan-VAE（8x 空间 + 4x 时间）、MAGVIT-v2（video tokenizer）、CogVideoX VAE
- **定位**：与步数压缩（LCM、SDXL-Turbo）、结构优化（FlashAttention）互补，属于潜空间维度的效率优化
