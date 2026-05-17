---
title: "Video prediction policy: A generalist robot policy with predictive visual representations"
design: "VPP"
arxiv: https://arxiv.org/abs/2412.14803
github: https://github.com/roboterax/video-prediction-policy
---

# VPP: Video prediction policy: A generalist robot policy with predictive visual representations

::: info 论文信息
- **Design**: VPP
- **论文全称**: Video prediction policy: A generalist robot policy with predictive visual representations
- **arXiv**: [https://arxiv.org/abs/2412.14803](https://arxiv.org/abs/2412.14803)
- **GitHub**: [https://github.com/roboterax/video-prediction-policy](https://github.com/roboterax/video-prediction-policy)
:::

## 核心思想

VPP (Video Prediction Policy) 是将视频预测世界模型与策略学习统一到一个扩散框架中的方法。核心创新是"预测即规模——在视频扩散模型的去噪过程中同时输出未来帧和对应的动作，使得生成的高质量未来视频可以直接转化为可执行的动作序列。

VPP 的关键洞察是：扩散模型的多步去噪过程可以用来迭代地精炼动作——早期去噪步骤产的粗略"的未来和动作，后期步骤精炼为"精确"的未来和动作。这种粗到精的过程类似于从粗略计划到精细执行的认知过程。

## 技术架。

**Vision Encoding（视觉编码）**：VAE encoder 压缩当前观测。使用预训练的视频扩散模型（的Stable Video Diffusion）。

**Knowledge Learning（知识学习）**：Video Diffusion Model 在联合去噪过程中同时预测未来 latent 帧action。Action prediction head 附加在扩展UNet 上，在每一步去噪中输出去噪程度对应的动作。训练损失同时包含视频重建和动作预测。

**Controllable Simulation（可控模拟）**：给定初始帧和（可选的）任务条件，在去噪过程中同时生成未来视频和输出动作。实现了"想象→行中的直接转换。

## 代码实现要点

代码开源在 [https://video-prediction-policy.github.io](https://video-prediction-policy.github.io/)。基准Stable Video Diffusion + Action Head。在 MetaWorld、RLBench 上评估。

## 关键创新。

1. **预测即规模*：视频生成和动作输出统一在一个扩散过程中
2. **粗到精动作精的*：去噪步骤提供渐进式动作优化
3. **端到端训练*：视频动作的联合优。
4. **通用于*：可适配多种具身控制和操控任。

## 代表性结。

在MetaWorld 操控任务上，VPP 展现了从视频预测到精确动作执行的能力，任务成功率与专用策略模型相当。生成的视频质量和动作精度在视觉复杂场景中表现良好，特别适合需要先看再动"的精确操控任务。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
