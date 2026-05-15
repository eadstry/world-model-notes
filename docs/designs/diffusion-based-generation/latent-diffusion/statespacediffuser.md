---
title: "StateSpaceDiffuser: Bringing Long Context to Diffusion World Models"
design: "StateSpaceDiffuser"
arxiv: https://arxiv.org/abs/2505.22246
github: https://github.com/insait-institute/StateSpaceDiffuser
---

# StateSpaceDiffuser: Bringing Long Context to Diffusion World Models

::: info 论文信息
- **Design**: StateSpaceDiffuser
- **论文全称**: StateSpaceDiffuser: Bringing Long Context to Diffusion World Models
- **arXiv**: [https://arxiv.org/abs/2505.22246](https://arxiv.org/abs/2505.22246)
- **GitHub**: [https://github.com/insait-institute/StateSpaceDiffuser](https://github.com/insait-institute/StateSpaceDiffuser)
:::

## 核心思想

StateSpaceDiffuser 是将状态空间模型（SSM/Mamba）与扩散模型结合的世界模型。核心创新是在扩散去噪 UNet 中用 Mamba 层替换部分 self-attention 层，实现 O(n) 复杂度的高效长序列去噪生成。这解决了传统 Diffusion Transformer 在处理长视频序列时计算瓶颈（O(n²)）。

StateSpaceDiffuser 的关键贡献是证明 SSM 可以替代 Transformer 在扩散模型中的位置，保持生成质量的同时大幅降低计算成本。这对世界模型的长程 rollout（数百帧）至关重要——传统 DiT 世界的模型在长序列 rollout 时严重受限于自注意力的计算开销。

## 技术架构

**Vision Encoding（视觉编码）**：VAE encoder 压缩单帧或少量帧为 latent tokens。

**Knowledge Learning（知识学习）**：Diffusion SSM——将 Mamba-2 层插入扩散去噪 UNet，替代部分 self-attention 操作。Mamba 层处理序列化的时空 latent tokens，通过选择性 SSM 实现内容感知的序列处理。O(n) 复杂度使模型能处理数百帧的上下文。

**Controllable Simulation（可控模拟）**：长序列想象 rollout 受益于 O(n) 复杂度——传统方法受限于数十帧，SSM 方法可处理数百帧。

## 代码实现要点

暂无开源代码。基于 Diffusion UNet + Mamba-2 layers。在 Atari 100k 和视频预测基准上评估。

## 关键创新点

1. **SSM 增强的扩散世界模型**：将 Mamba 融入扩散去噪
2. **O(n) 长序列效率**：线性复杂度处理数百帧上下文
3. **长程 rollout 能力**：SSM 使世界模型可做超长序列预测
4. **质量保持**：生成质量与 DiT 相当，速度快 5-10×

## 代表性结果

在 Atari 100k 基准上，StateSpaceDiffuser 在保持预测质量的同时将推理速度提升 5 倍（比 DiT）。在需要极长记忆的任务上，SSM 的世界模型 rollout 质量在 200 步内保持稳定，而 DiT 在 50 步后开始退化。
