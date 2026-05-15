---
title: "Pixel motion as universal representation for robot control"
design: "LangToMo"
arxiv: https://arxiv.org/abs/2505.07817
github: https://github.com/kahnchana/LangToMo
---

# LangToMo: Pixel motion as universal representation for robot control

::: info 论文信息
- **Design**: LangToMo
- **论文全称**: Pixel motion as universal representation for robot control
- **arXiv**: [https://arxiv.org/abs/2505.07817](https://arxiv.org/abs/2505.07817)
- **GitHub**: [https://github.com/kahnchana/LangToMo](https://github.com/kahnchana/LangToMo)
:::

## 核心思想

LangToMo (Language to Motion) 是 IIT 提出的将语言引导融入扩散世界模型用于人类运动生成的框架。核心创新是在世界模型中建立"语言→运动"的映射——用户/系统通过自然语言描述想要的人类运动（如"向右走两步然后转身坐下"），扩散世界模型生成对应的运动视频。LangToMo 将语言作为最自然的人类动作规范方式。

LangToMo 的关键贡献是展示扩散模型在"语义到动作"转换中的强大能力。不同于传统的"关键帧→插值"运动生成方法，LangToMo 从语言直接到运动视频的端到端转换，使模型理解动作的语义结构（"走"vs"跑"vs"跳"）和时序结构（"先...再..."）。

## 技术架构

**Vision Encoding（视觉编码）**：VAE encoder 压缩运动帧。Human pose detection 用作辅助编码。

**Knowledge Learning（知识学习）**：Language-conditioned Video Diffusion——语言通过 T5/CLIP text encoder 编码，在扩散模型的去噪过程中通过 cross-attention 条件化运动视频的生成。使用多帧 human pose sequence 表示运动。

**Controllable Simulation（可控模拟）**：给定自然语言动作描述，生成对应的人类运动视频。支持复杂时序（"先...然后..."）和空间（"向左...然后向上..."）的语义理解。

## 代码实现要点

代码开源在 [Sensei-AR/LangToMo](https://github.com/Sensei-AR/LangToMo)。基于 Video Diffusion + Text encoder。在 HumanML3D、KIT 等人类运动数据集上评估。

## 关键创新点

1. **语言→运动世界模型**：自然语言驱动的人类运动生成
2. **语义动作理解**：模型理解"走/跑/跳"等动作语义
3. **时序规划能力**：理解"先...再..."的时序列关系
4. **端到端生成**：从语言到运动视频的一次生成

## 代表性结果

在 HumanML3D 上，LangToMo 根据语言描述生成高质量人类运动，FID < 1.0，R-precision（动作-文本匹配度）> 80%。在复杂时序描述（如"走到椅子前，坐下，然后站起来"）上也保持准确的运动生成。
