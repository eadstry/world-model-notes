---
title: "I²-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting"
design: "I²-world"
arxiv: https://arxiv.org/abs/2507.09144
github: https://github.com/lzzzzzm/II-World
---

# I²-world: I²-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting

::: info 论文信息
- **Design**: I²-world
- **论文全称**: I²-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting
- **arXiv**: [https://arxiv.org/abs/2507.09144](https://arxiv.org/abs/2507.09144)
- **GitHub**: [https://github.com/lzzzzzm/II-World](https://github.com/lzzzzzm/II-World)
:::

## 学习笔记

## 核心思想

I²-World（Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting）提出了一种高效的 4D 占用预测框架，专注于自动驾驶中的未来场景演变预测。3D 占用（occupancy）表示在自动驾驶中越来越重要——它比 2D 图像更完整地描述了场景的几何结构。I²-World 的核心挑战在于：如何高效地将复杂的 3D 占用场景 token 化，使得自回归模型可以在保持预测质量的同时实现实时推理。

I²-World 的核心创新是将场景 token 化分解为**两个正交维度**：(1) **Intra-scene Tokenization（场景内 token 化）**——通过多尺度残差量化策略，将每个时刻的 3D 占用图分层压缩为紧凑的 token（保持场景内的空间结构）；(2) **Inter-scene Tokenization（场景间 token 化）**——在时间维度上通过残差聚合捕获场景之间的动态变化。这种双维解耦设计同时实现了 token 的紧凑性（效率高）和动态表达力（预测准）。I²-World 采用编码器-解码器架构（而非纯 decoder-only GPT），编码器聚合当前场景的空间上下文并预测变换矩阵以实现高层控制，解码器基于历史 token 和变换矩阵生成连贯的未来场景。

## 技术架构

**Vision Encoding（视觉编码）**：I²-World 的编码分为两个子模块：(1) **Intra-scene tokenizer** 采用多尺度残差量化——在不同空间尺度上对 3D 占用图进行 VQ 量化，高层 token 捕捉大范围的结构布局，低层 token 补充局部几何细节。残差设计使得每个尺度只编码当前尺度未被前一尺度捕获的"剩余信息"，大幅提升编码效率。(2) **Inter-scene tokenizer** 在时间维度上做残差聚合——当前帧的 token 仅编码与前一帧的"变化量"（残差），而非完整场景。静态场景部分（如建筑、路面）通过残差设计自然地被压缩为接近零的 token，使模型专注于动态区域（如移动的车辆和行人）。

**Knowledge Learning（知识学习）**：编码器在训练中学习两个关键能力：(1) 从当前场景聚合空间上下文并预测一个**变换矩阵**——该矩阵编码了场景的高层变化意图（如"整个场景向右偏移"表示自车左转），提供高层控制能力；(2) 通过对比学习确保 token 序列保持时序一致性。解码器在条件生成中同时接收历史 token 和变换矩阵，通过交叉注意力实现可控的 4D 占用生成。

**Controllable Simulation（可控模拟）**：I²-World 通过变换矩阵提供高层控制——用户可以指定不同的变换矩阵来引导场景向不同方向演化（例如，指定自车直行 vs. 左转，场景中其他交通参与者的响应会相应改变）。编码器-解码器架构使得这种控制在推理时几乎零开销——只需提供不同的变换矩阵即可生成不同的未来场景。

## 代码实现要点

代码已在 GitHub 开源（lzzzzzm/II-World）。核心架构：(1) 多尺度 VQ-VAE 编码器（3-4 个尺度层）；(2) 残差嵌入模块实现时间维度的差分 token 化；(3) 编码器中使用 Transformer 聚合空间上下文并预测变换矩阵；(4) 解码器中交叉注意力层接收变换矩阵作为条件。训练仅需 2.9 GB GPU 显存，推理速度 37 FPS，使其可在消费级 GPU 上运行。评估指标使用 4D 占用的 mIoU 和 IoU。

## 关键创新点

- **Intra-Inter 双维解耦 token 化**：将 3D 场景 tokenization 分解为空间（intra-scene）和时间（inter-scene）两个正交维度，同时提升效率和表达力
- **多尺度残差量化**：分层压缩场景信息，高层捕获大结构、低层补充细节，信息利用效率大幅提升
- **变换矩阵控制**：通过编码器预测的变换矩阵实现高层可控的场景生成，而非传统的逐像素条件控制
- **极致效率**：训练显存仅 2.9 GB，推理速度 37 FPS——是目前 4D 占用预测中最轻量的方案，同时性能超越更大模型 25.1% mIoU

## 代表性结果

I²-World 在 4D 占用预测任务上以 25.1% mIoU 和 36.9% IoU 的提升大幅超越现有方法。效率方面，训练仅需 2.9 GB 显存（相比之下，一些基于密集自回归的方法需要 20+ GB），推理速度达到 37 FPS（实时）。消融实验验证了 Intra-Inter 解耦设计的有效性——移除 Inter-scene 残差 tokenization 后，预测效率下降且长序列预测质量显著恶化。变换矩阵的控制实验展示了模型在不同驾驶意图下的场景演变预测能力。
