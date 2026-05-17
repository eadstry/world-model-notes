---
title: "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft"
design: "MineWorld"
arxiv: https://arxiv.org/abs/2504.08388
---

# MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft

::: info 论文信息
- **Design**: MineWorld
- **论文全称**: MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft
- **arXiv**: [https://arxiv.org/abs/2504.08388](https://arxiv.org/abs/2504.08388)
:::

## 学习笔记

### 核心思想

MineWorld 是一个基于 Minecraft 游戏的全开源实时交互式世界模型，旨在将世界模型技术应用于开放世界沙盒游戏场景。Minecraft 作为一个开放式、动态性强、交互复杂的游戏，凭借其丰富的游戏机制和广泛的玩家基础，成为测试世界模型能力的理想平台。MineWorld 的核心目标是实现一个能够在 Minecraft 中实时交互的世界模型，达到游戏级帧率和视觉质量，从而推动世界模型在强交互场景中的实际应用。

MineWorld 采用**视觉-动作自回归 Transformer**，以当前游戏画面和对应动作作为输入，生成动作执行后的下一帧场景。其关键技术在于将视觉信息和动作信息分别通过图像分词器和动作分词器转化为离散 token，交织拼接为统一序列，通过 next-token prediction 同时学习游戏状态的丰富表示以及状态-动作之间的因果关系。

MineWorld 的一个突出贡献是**对角线解码算法（Diagonal Decoding）**，解决了自回归模型在生成高分辨率图像时的速度瓶颈。传统自回归方法需要逐行生成图像 token，每帧耗时巨大。Diagonal Decoding 利用图像 token 之间的空间相关性，同时预测每个帧内空间对角线上多个 token，使同一模型规模下实现每秒 4-7 帧的生成速度，从而支持游戏级的实时交互。此外，MineWorld 还引入了新的评估指标，用于衡量视觉质量和动作准确性，填补了世界模型评估的空白。

### 核心架构

**Vision Encoding（视觉编码）**：MineWorld 使用图像分词器（VQ-VAE 风格）将 Minecraft 游戏画面的每一帧编码为离散 token 序列。分词器在空间上进行压缩，将原始图像压缩为 16×16 至 32×32 的 token 图——每个空间位置的 token 对应原图像中的一个 patch。VAE 分词器提供了一对编解码映射：编码时将图像压缩为 token，解码时将 token 还原为图像。视觉编码的目标是在保持足够细节信息的同时，尽可能地压缩 token 数量。

**Knowledge Learning（知识学习）**：采用视觉-动作自回归 Transformer（Visual-Action Autoregressive Transformer）进行训练。训练数据为 Minecraft 游戏录制数据，包含连续的游戏画面和玩家操作。每一帧的视觉 token 与动作 token 按照"视觉帧 token、动作 token、视觉帧 token、动作 token..."的顺序交织拼接成序列。模型通过 next-token prediction 进行训练，从前序的视觉和动作信息中预测下一帧的视觉 token。这种方式使模型同时学会：(1) Minecraft 游戏的视觉规律；(2) 动作与视觉变化之间的因果关系；(3) 游戏物理引擎的底层表示。

**Controllable Simulation（可控模拟）**：交互式控制通过动作 token 注入实现帧级动作驱动。推理时，用户选择特定的动作（如前/后/左/右移动、跳跃、转向等），模型将当前帧 token 与动作 token 拼接后，自回归地生成下一帧的视觉 token。关键的加速技术是 **Diagonal Decoding**：每个帧内，在空间维度上沿着对角线方向并行预测多个 token（沿对角线方向组织 token 组），从而实现 4-7 FPS 的实时交互速度。模型提供 Web Demo（基于 Gradio），用户可通过鼠标点击操作在 Minecraft 世界中实时探索，并支持 300M/700M/1200M 等多种模型规模和 16 帧/32 帧上下文长度配置。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
