---
title: "MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft"
design: "MineWorld"
arxiv: https://arxiv.org/abs/2504.08388
github: https://github.com/microsoft/mineworld
---

# MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft

::: info 论文信息
- **Design**: MineWorld
- **论文全称**: MineWorld: a Real-Time and Open-Source Interactive World Model on Minecraft
- **arXiv**: [https://arxiv.org/abs/2504.08388](https://arxiv.org/abs/2504.08388)
- **GitHub**: [https://github.com/microsoft/mineworld](https://github.com/microsoft/mineworld)
:::

## 论文信息

- **arXiv**: [2504.08388](https://arxiv.org/abs/2504.08388)
- **GitHub**: [https://github.com/microsoft/mineworld](https://github.com/microsoft/mineworld)
- **发表时间**: 2025年4月
- **作者团队**: 微软研究院（Junliang Guo, Tianyu He, Tim Pearce, Jiang Bian 等）

## 核心思想

MineWorld是一个在Minecraft（我的世界）开放沙盒游戏上构建的实时交互世界模型。Minecraft作为一个开放式的、具有丰富动态和复杂交互的游戏环境，被广泛用作世界模型的测试平台。MineWorld的核心目标是实现一个能够在Minecraft中实时运行（达到游戏可玩帧率）、视觉质量高且动作跟随能力强的世界模型。

MineWorld基于**视觉-动作自回归Transformer**，将配对的游戏场景和对应动作作为输入，生成动作执行后的新场景。其关键设计在于将视觉场景和动作分别通过图像分词器和动作分词器转换为离散token后交织拼接为输入序列，通过next-token prediction同时学习游戏状态的丰富表示以及状态-动作之间的条件映射关系。

MineWorld的一大突破是**并行解码算法（Diagonal Decoding）**，解决了自回归模型生成高分辨率图像时速度慢的瓶颈。传统自回归解码需要逐token生成每帧图像的所有空间token，而Diagonal Decoding利用图像token之间的空间冗余性，同时预测每个帧中空间上冗余的token，使不同规模的模型实现了每秒4到7帧的生成速度，从而支持与玩家的实时交互。此外，MineWorld提出了新的评估指标，不仅衡量视觉质量，还评估生成新场景时的动作跟随能力——这是世界模型的关键属性。

## 技术架构

### Vision Encoding（视觉编码）
MineWorld使用图像分词器（VQ-VAE风格）将Minecraft游戏场景的每一帧编码为离散token网格。分词器在空间上进行压缩（如将原始图像压缩为16×16或32×32的token网格），每个空间位置的token对应原图中的一块区域（patch）。VAE分词器还提供了一个解码器，可以将token还原为图像。视觉编码的目标是在保留场景语义信息的同时尽可能压缩token数量。

### Knowledge Learning（知识学习）
核心是视觉-动作自回归Transformer（Visual-Action Autoregressive Transformer）。训练数据为Minecraft游戏录屏，包含配对的（场景帧，动作）序列。动作包括摄像机移动（俯仰/偏航）和游戏内操作（移动、跳跃、攻击等），通过动作分词器编码为离散token。视觉token和动作token按照"视觉帧token₁, 动作token₁, 视觉帧token₂, 动作token₂, ..."的顺序交织排列。模型通过next-token prediction训练——给定历史和当前动作，预测下一帧的视觉token。这种方式使模型同时学习：(1) Minecraft世界的视觉动力学、(2) 动作与视觉变化之间的因果关系、(3) 场景结构的底层表示。

### Controllable Simulation（可控模拟）
交互控制通过动作条件机制实现。推理时，用户选择动作（如前进、转动视角），模型将当前帧token与动作token拼接后自回归生成下一帧所有token。核心加速技术是**Diagonal Decoding**：将每帧内空间上不直接依赖的token组并行预测（沿对角线方向组织token组），大幅提升推理速度到4-7 FPS。模型提供Web Demo界面（Gradio），用户可以通过按钮交互式地在Minecraft世界中探索。提供多个模型规格（300M到1200M参数），支持不同的上下文长度（16或32帧）以平衡质量和速度。

## 代码实现要点

- **完整开源**: 微软研究院开源，MIT许可证，473+ Stars
- **模型发布**: HuggingFace上提供多个checkpoint（300M/700M/1200M参数，16帧/32帧上下文）
- **Diagonal Decoding**: 核心推理加速算法，独立论文发表在arXiv（2503.14070）
- **关键文件**: 
  - `mineworld.py` — 主模型架构和训练逻辑
  - `inference.py` — 本地推理和评估脚本
  - `diagonal_decoding.py` — 并行解码算法实现
  - `vae.py` — VAE分词器
  - `mcdataset.py` — Minecraft数据集加载
- **评估指标**: FVD（视觉质量）、IDM（动作跟随能力），提出新benchmark
- **Web Demo**: 基于Gradio的交互式演示界面
- **模型规模**: 300M_16f, 700M_16f, 700M_32f, 1200M_16f, 1200M_32f

## 关键创新点

1. **视觉-动作交织token序列**: 将视觉与动作统一为单一自回归序列，同时学习状态表示和状态-动作条件关系
2. **Diagonal Decoding并行推理**: 利用空间token冗余实现4-7 FPS实时交互，突破自回归模型速度瓶颈
3. **全新评估框架**: 提出IDM等评估动作跟随能力的指标，填补了世界模型评估的空白
4. **首个Minecraft实时世界模型**: 在开放沙盒游戏中实现可玩帧率的交互式世界模拟
5. **多规模开放模型**: 提供从300M到1.2B的多种模型规格，促进社区研究和应用

## 代表性结果

- 生成速度4-7 FPS（Diagonal Decoding vs 原始自回归的<1 FPS），支持实时交互
- 视觉质量显著优于基于扩散模型的现有开放世界模型
- 动作跟随能力强：在提出的动作条件评估基准上表现精准且一致
- 多规模模型均能生成连贯的高保真Minecraft场景帧
