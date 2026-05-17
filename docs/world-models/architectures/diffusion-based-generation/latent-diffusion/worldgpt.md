---
title: "Worldgpt: a sora-inspired video ai agent as rich world models from text and image inputs"
design: "WorldGPT"
arxiv: https://arxiv.org/abs/2403.07944
---

# WorldGPT: Worldgpt: a sora-inspired video ai agent as rich world models from text and image inputs

::: info 论文信息
- **Design**: WorldGPT
- **论文全称**: Worldgpt: a sora-inspired video ai agent as rich world models from text and image inputs
- **arXiv**: [https://arxiv.org/abs/2403.07944](https://arxiv.org/abs/2403.07944)
:::

## 核心思想

WorldGPT rSora 启发下的视频 AI Agent，旨在从文本和图像输入构建丰富的世界模型。其核心思想是利用多模态学习框架，通过两个阶段——提示增强（prompt enhancer）和完整视频生成（full video translation）——实现从文本+图像到高质量视频的端到端生成。

第一阶段利用 ChatGPT 的推理能力，将用户简短提示精炼和分解为逐步精确提示，确保每一帧生成有准确的语义引导。第二阶段兼容先进扩散技术，先生成关键帧，再利用首尾关键帧约束生成中间帧，确保时间一致性和动作平滑性。首尾帧驱动方法在保持视频流畅性方面展现了独特优势。

## 技术架。

**Vision Encoding（视觉编码）**：使用潜在扩散模型VAE 编码器将图像和视频帧压缩到隐空间。首尾帧作为整个视频的关键锚点，编码后约束中间帧生成过程。

**Knowledge Learning（知识学习）**：ChatGPT 提示增强器将用户简短查询转化为富含细节的分步描述（每帧场景元素、天气变化、运动过程）。视频生成器利用首尾关键帧扩散生成中间帧，学习时间平滑过渡。

**Controllable Simulation（可控模拟）**：用户通过文本+图像双模态控制生成内容。提示增强器提供细粒度时间控制（分步提示），首尾帧约束确保时序一致性。

## 代码实现要点

暂无开源代码。论文提供详细框架描述和实验验证。

## 关键创新。

1. **Sora 启发生Agent 设计**：视频生成作为AI Agent 任务，集的LLM 推理能力
2. **ChatGPT 提示增强**：LLM 将简短提示扩展为丰富分步生成指令
3. **首尾帧驱动*：关键帧约束确保时间一致性和动作平滑
4. **文本+图像双模态控的*：灵活的世界模型构建方式

## 代表性结。

实验表明 WorldGPT 在从文本+图像构建世界模型方面具有有效性和新颖性。生成视频展示良好时间一致性和动作平滑性。ChatGPT 生成的逐步描述有效指导每帧生成过程。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
