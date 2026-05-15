---
title: "Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators"
design: "VidIT"
arxiv: https://arxiv.org/abs/2407.07356
website: https://www.microsoft.com/en-us/research/project/ar-videos/
---

# VidIT: Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators

::: info 论文信息
- **Design**: VidIT
- **论文全称**: Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators
- **arXiv**: [https://arxiv.org/abs/2407.07356](https://arxiv.org/abs/2407.07356)
- **Website**: [https://www.microsoft.com/en-us/research/project/ar-videos/](https://www.microsoft.com/en-us/research/project/ar-videos/)
:::

## 学习笔记

## 核心思想

VidIT（Video In-context Learning）由微软研究院提出，发表于 ICLR 2025，探索了一种全新的视频世界模型范式——将视觉信号作为模型与环境交互的接口。核心思想是：给定一段演示视频（如折纸、绘画等操作过程），自回归 Transformer 可以通过上下文学习（in-context learning）"看懂"演示中蕴含的语义和操作模式，然后将其搬移到新的场景中生成对应的新视频——全程无需微调。这本质上是一种**零样本视频模仿**能力。

VidIT 将视频世界模型从"条件可控生成"推向"上下文驱动的场景泛化"。不同于传统方法需要显式的文本指令或动作标签，VidIT 从原始视频数据中自监督学习，模型在训练过程中仅见过大规模未标注视频，却能够在测试时理解从未见过的任务演示并正确模仿。论文通过设计专门的评估指标（包括客观的视频质量指标和人工评估的主观打分）验证了这一涌现能力，并发现模仿能力随着模型规模呈现扩展规律（scaling law）。

## 技术架构

**Vision Encoding（视觉编码）**：VidIT 将视频帧通过 VQ-VAE 编码为离散视觉 token 序列。关键设计在于**上下文窗口**的构建——将演示视频的多帧 token 和目标场景的初始帧 token 拼接到同一序列中，形成"演示段落 + 目标段落"的上下文。与纯语言模型的 few-shot prompting 类似，这种多帧拼接使 Transformer 能够通过自注意力机制自动对齐演示与目标之间的视觉语义对应关系。

**Knowledge Learning（知识学习）**：核心为自回归 Transformer，在大规模视频数据集（涵盖多种日常操作、运动、场景变换）上进行纯粹的 next-token prediction 训练。模型从未接受任何显式的"模仿任务"训练，但通过学习海量视频中帧与帧之间的转移规律，自然地涌现出了对视觉语义操作的抽象能力。这种涌现性模仿能力表明：足够大的自回归视觉模型可以将视频的动态演化知识内化到参数中，从而在推理时通过上下文示范提取并迁移这些知识。

**Controllable Simulation（可控模拟）**：VidIT 的"控制"不通过传统条件信号（动作、文本）实现，而是通过**演示视频本身作为控制信号**。用户可以通过提供不同的演示视频来指定不同的操作语义，模型会自动理解并将该语义应用至目标场景。例如，提供一个"折叠衣服"的演示 + 一件新衣服的初始帧，模型生成"折叠这件新衣服"的视频。这种上下文控制方式极大降低了用户的使用门槛——无需编写prompt或收集动作数据，只需录制一段演示即可。

## 代码实现要点

微软已开源 VidIT 的代码和模型。核心实现包括：(1) VQ-VAE tokenizer 将视频压缩为 token 序列，降低自回归生成的计算开销；(2) 基于 GPT 架构的自回归 Transformer 处理"演示+目标"的拼接序列；(3) 推理时支持多种上下文配置（单演示/多演示、不同的帧数、不同的帧间隔）。评估方面，论文设计了专门针对视频模仿任务的多维度评估体系：包括语义对齐度、时序一致性、视觉质量和人工偏好打分。

## 关键创新点

- **首次证明视频上下文学习能力**：自回归视觉模型可以在零样本设置下通过观看演示视频来模仿新任务，无需微调
- **视觉信号作为通用控制接口**：将演示视频本身作为控制信号，实现了比文本/动作更直观、更丰富的任务指定方式
- **上下文模仿的 scaling law**：实验验证了随着模型参数和数据量的增加，零样本模仿能力呈现可预测的扩展规律
- **全新评估框架**：针对视频模仿任务设计了语义对齐、生成质量等多维度的主客观评估指标

## 代表性结果

VidIT 在多种日常操作和运动场景下验证了零样本模仿能力：从折纸、绘画、物体搬运到运动姿势跟随，模型能够仅凭一段2-4帧的演示视频正确模仿语义操作。与需要微调的监督学习方法相比，VidIT 的零样本性能已经展现竞争力。在 scaling 实验中，更大的模型（从300M到3B参数）持续提升模仿精度和生成质量，表明这是一条有前景的规模化路径。人类评估中，约70%的生成视频被认为正确模仿了演示语义。
