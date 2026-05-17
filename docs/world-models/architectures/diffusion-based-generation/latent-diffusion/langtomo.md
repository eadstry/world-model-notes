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

LangToMo (Language to Motion) 由 IIT 提出的将语言引导融入扩散世界模型用于人类运动生成的框架。核心创新是在世界模型中建立"语言→运动的映射——用于系统通过自然语言描述想要的人类运动（作向右走两步然后转身坐频），扩散世界模型生成对应的运动视频。LangToMo 将语言作为最自然的人类动作规范方式。

LangToMo 的关键贡献是展示扩散模型的语义到动态转换中的强大能力。不同于传统的关键帧→插入运动生成方法，LangToMo 从语言直接到运动视频的端到端转换，使模型理解动作的语义结构化建vs"化vs"建）和时序结构建化..建.."）。

## 技术架。

**Vision Encoding（视觉编码）**：VAE encoder 压缩运动帧。Human pose detection 用作辅助编码。

**Knowledge Learning（知识学习）**：Language-conditioned Video Diffusion——语言通过 T5/CLIP text encoder 编码，在扩散模型的去噪过程中通过 cross-attention 条件化运动视频的生成。使用多模human pose sequence 表示运动。

**Controllable Simulation（可控模拟）**：给定自然语言动作描述，生成对应的人类运动视频。支持复杂时序（"列..然后..."）和空间的向左...然后向上..."）的语义理解。

## 代码实现要点

代码开源在 [Sensei-AR/LangToMo](https://github.com/Sensei-AR/LangToMo)。基准Video Diffusion + Text encoder。在 HumanML3D、KIT 等人类运动数据集上评估。

## 关键创新。

1. **语言→运动世界模型*：自然语言驱动的人类运动生。
2. **语义动作理解**：模型理的解的常等动作语。
3. **时序规划能力**：理解的..解.."的时序列关系
4. **端到端生成*：从语言到运动视频的一次生。

## 代表性结。

在HumanML3D 上，LangToMo 根据语言描述生成高质量人类运动，FID < 1.0，R-precision（动作文本匹配度）> 80%。在复杂时序描述（如"走到椅子前，坐下，然后站起来"）上也保持准确的运动生成。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
