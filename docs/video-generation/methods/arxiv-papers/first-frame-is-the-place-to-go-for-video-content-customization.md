---
title: "First Frame Is the Place to Go for Video Content Customization"
arxiv: https://arxiv.org/abs/2511.15700v1
github: https://github.com/zli12321/FFGO-Video-Customization
website: http://firstframego.github.io
venue: arXiv
year: 2025
---

# First Frame Is the Place to Go for Video Content Customization

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2511.15700v1](https://arxiv.org/abs/2511.15700v1)
- **GitHub**: [https://github.com/zli12321/FFGO-Video-Customization](https://github.com/zli12321/FFGO-Video-Customization)
- **Website**: [http://firstframego.github.io](http://firstframego.github.io)
:::

## 学习笔记

### 核心贡献

传统观点将视频生成中的首帧仅视为"时空起点"，即后续动画的种子。本文提出一个**根本性不同的视角**：视频模型隐式地将首帧当作一个**概念记忆缓冲区（conceptual memory buffer）**，用于存储视觉实体，并在后续帧生成过程中被反复检索和利用。基于这一洞察，作者展示了一种无需架构修改或大规模微调的方法，仅用 20–50 个训练样本即可在多种场景下实现鲁棒且泛化的视频内容定制（video content customization）。该工作揭示了视频生成模型中被忽视的强大能力，已被 **CVPR 2026** 接收。

### 方法细节

1. **首帧作为记忆缓冲区的发现**：作者通过对视频扩散模型（如 VideoCrafter、ModelScopeT2V 等）的内部表征进行分析，发现模型在生成过程中会反复"回看"首帧中的视觉实体信息。具体表现为：当首帧包含特定物体或角色时，后续帧的去噪过程中，交叉注意力图会持续关注首帧对应的 token 位置，表明模型将首帧编码为一种持久化的视觉记忆。
2. **视频内容定制方法（FFGO）**：利用上述发现，定制流程如下：
   - 收集目标视觉实体（如特定人物、宠物、物体）的 20–50 张参考图像。
   - 将这些参考图像组织为"首帧模板"，训练时仅对首帧的文本嵌入或少量注入层进行微调。
   - 微调目标是在扩散过程中增强首帧对目标实体视觉特征的"记忆强度"，而非改变模型的生成分布。
3. **无需架构变更**：方法直接工作在现有视频扩散模型之上，不引入额外的编码器、适配器或控制网络，仅通过优化首帧相关的文本嵌入与轻量注入参数实现定制。训练开销极低，可在数分钟内完成。
4. **泛化性设计**：训练时使用的参考图像与推理时的视频场景可以是不同的背景、姿态、光照条件，方法学到的是一种"实体层面的视觉概念编码"，而非像素级的外观记忆。

### 关键发现

- 首帧在视频扩散模型中扮演着**概念记忆缓冲区**的角色，存储视觉实体并在整个时序生成中持续供模型检索。
- 仅需 **20–50 张**训练图像即可实现高质量、泛化的视频内容定制，远少于 DreamBooth 等方法所需的样本量。
- 方法无需修改模型架构、无需大规模微调，仅靠优化首帧相关的嵌入与注入参数即可。
- 定制后的视频生成在保持原模型多样性（如不同背景、动作）的同时，准确保留目标实体的视觉身份。
- 工作已被 **CVPR 2026** 接收，侧面验证了"首帧记忆"这一洞察的学术价值。

### 方法归类

- **范式**：表征层面洞察驱动的轻量定制（Representation-Insight-Driven Lightweight Customization）
- **技术路径**：扩散模型内部表征分析 → 首帧记忆机制发现 → 基于首帧的视觉概念绑定与定制
- **核心机制**：首帧概念记忆缓冲区（First-Frame Conceptual Memory Buffer）、文本嵌入注入微调
- **相关方向**：Video Customization、Reference-Based Generation、Diffusion Model Interpretability、Few-Shot Personalization、Conceptual Embedding Learning
