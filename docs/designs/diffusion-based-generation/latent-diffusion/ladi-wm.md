---
title: "LaDi-WM: A Latent Diffusion-based World Model for Predictive Manipulation"
design: "LaDi-WM"
arxiv: https://arxiv.org/abs/2505.11528
github: https://github.com/GuHuangAI/LaDiWM
---

# LaDi-WM: A Latent Diffusion-based World Model for Predictive Manipulation

::: info 论文信息
- **Design**: LaDi-WM
- **论文全称**: LaDi-WM: A Latent Diffusion-based World Model for Predictive Manipulation
- **arXiv**: [https://arxiv.org/abs/2505.11528](https://arxiv.org/abs/2505.11528)
- **GitHub**: [https://github.com/GuHuangAI/LaDiWM](https://github.com/GuHuangAI/LaDiWM)
:::

## 核心思想

LaDI-WM (Language-Diffusion Interaction World Model) 是提出的语言-扩散交互世界模型。核心创新是将自然语言紧密集成到扩散世界模型的每一层去噪过程中——语言不仅仅是一个"条件输入"，而是与世界模型进行"深度交互"，影响着预测的各个方面（从物体运动到场景结构）。

LaDI-WM 的关键贡献是"语言-扩散深度交互"：之前的方法仅在扩散过程的开始注入语言条件，LaDI-WM 在去噪 UNet 的多个层级注入语言特征，使语言信息深入渗透到生成过程的每个阶段。这使得语言引导更加精细和有效。

## 技术架构

**Vision Encoding（视觉编码）**：VAE encoder 压缩图像。Text encoder（如 CLIP 或 T5）编码语言指令。

**Knowledge Learning（知识学习）**：Multi-scale Text-Conditioned Diffusion——语言特征在 UNet 的多个 resolution level 通过 cross-attention 注入去噪过程。不同于仅在 bottleneck 注入，LaDI-WM 在每个 UNet block 都进行 language-vision interaction。使语言信息能影响低层细节和高层结构。

**Controllable Simulation（可控模拟）**：给定语言指令，世界模型生成对应的场景演变。"精细"的语言注入使生成内容高度遵从指令语义。

## 代码实现要点

暂无开源代码。基于 Latent Diffusion + Multi-scale language injection。在 CALVIN 和 Language Table 上评估。

## 关键创新点

1. **多尺度语言注入**：语言在 UNet 多个层级交互
2. **精细的语言控制**：深度交互使语言控制更精确
3. **结构+细节的顾及**：高层语言影响结构，低层语言影响细节
4. **语义遵从性**：生成场景高度遵从语言指令

## 代表性结果

在 CALVIN 的语言引导具身操控任务中，LaDI-WM 的语言指令遵从率（生成的场景是否符合指令）比仅 bottleneck 注入的方法高 25%。精细的语言交互使世界模型能区分细微的语义差异（如"轻轻推"vs"用力推"）。
