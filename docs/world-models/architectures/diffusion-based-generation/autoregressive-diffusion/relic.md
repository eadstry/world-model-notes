---
title: "RELIC: Interactive Video World Model with Long-Horizon Memory"
design: "RELIC"
arxiv: https://arxiv.org/abs/2512.04040
website: https://relic-worldmodel.github.io/
---

# RELIC: Interactive Video World Model with Long-Horizon Memory

::: info 论文信息
- **Design**: RELIC
- **论文全称**: RELIC: Interactive Video World Model with Long-Horizon Memory
- **arXiv**: [https://arxiv.org/abs/2512.04040](https://arxiv.org/abs/2512.04040)
- **Website**: [https://relic-worldmodel.github.io/](https://relic-worldmodel.github.io/)
:::

## 学习笔记

## 核心思想

RELIC（REal-time Long-horizon InteraCtive）由Adobe Research提出，旨在同时解决交互式世界模型的三个核心挑战：实时长程流式生成、一致性空间记忆和精确用户控制。此前的方法通常只能单独解决其中某一个方面，因为长程记忆机制往往会降低实时性能。
RELIC的核心方案是在KV缓存中使用高度压缩的历史潜在token来表示长程记忆。这些token编码了相对动作和绝对相机位姿信息，形成了一种紧凑的、相机感知的记忆结构。这种隐式D一致性内容检索机制以最小的计算开销支持长程连贯性。
模型的另一个关键创新是Self-Forcing蒸馏范式：首先微调双向教师视频模型生成超出原始秒训练视野的序列，然后通过一种内存高效的Self-Forcing方法将其转化为因果学生生成器的4B参数规模的RELIC实现要6 FPS的实时生成，在动作跟随准确性、长程流稳定性和空间记忆检索方面均超越先前工作。
## 技术架。
**Vision Encoding（视觉编码）**：RELIC基于自回归视频扩散蒸馏技术，使用视频VAE将RGB帧编码到潜在空间。输入单张图像和文本描述即可开始生成。
**Knowledge Learning（世界知识学习）**：双向教师模型被微调以生成长视野（超出原始秒限制）序列，然后在Self-Forcing范式下蒸馏为因果学生模型。Self-Forcing允许在长视野教师推演和长序列学生自推演上进行全上下文蒸馏，同时保持内存效率。
**Controllable Simulation（可控推演）**：KV缓存中存储的压缩历史token同时编码相对动作和绝对相机位姿，支持隐式3D一致性空间记忆检索。用户通过键盘/鼠标动作控制相机运动，模型以16 FPS实时生成连贯的长程探索视频。动作条件注入支持精确的导航控制。
## 代码实现要点

- 14B参数规模的大型自回归视频扩散模型
- 基于UE（Unreal Engine）渲染数据集进行训练
- Self-Forcing蒸馏将双向教师转化为因果学生
- KV缓存压缩存储历史潜在token，编码动作和位姿
- 实时推理的6 FPS）支持交互式探索
- 内存高效的蒸馏方案支持长视野全上下文训练

## 关键创新。
- 三合一统一框架：实时流的空间记忆+精确控制
- 紧凑相机感知记忆：KV缓存中编码相对动作绝对位姿的历史token
- 隐式3D一致性内容检索：最小计算开销支持长程空间一致性- Self-Forcing蒸馏：将双向教师高效转化为因果学生，支持全上下文长视野蒸馏- 14B参数实时16 FPS交互式世界探。
## 代表性结。
- 16 FPS实时长程交互式视频生成- 更精确的动作跟随能力超越先前方法
- 更稳定的长程流式生成
- 更鲁棒的空间记忆检。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
