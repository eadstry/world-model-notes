---
title: "Surgical Vision World Model"
design: "SurgWM"
arxiv: https://arxiv.org/abs/2503.02904
github: https://github.com/bhattarailab/Surgical-Vision-World-Model
---

# SurgWM: Surgical Vision World Model

::: info 论文信息
- **Design**: SurgWM
- **论文全称**: Surgical Vision World Model
- **arXiv**: [https://arxiv.org/abs/2503.02904](https://arxiv.org/abs/2503.02904)
- **GitHub**: [https://github.com/bhattarailab/Surgical-Vision-World-Model](https://github.com/bhattarailab/Surgical-Vision-World-Model)
:::

## 学习笔记

## 核心思想

SurgWM（Surgical Vision World Model）是首个手术视觉世界模型，发表于 MICCAI 2025 DEMI Workshop。手术模拟在医学专业培训和自主手术 agent 训练中具有重要应用价值，但现有方法要么依赖简化计算机模拟而缺乏真实感，要么需要昂贵的动作标注数据而难以大规模采集。SurgWM 的核心贡献是借鉴 Genie 的思路——**从无动作标注的手术视频中学习潜在动作空间**，进而实现动作可控的手术数据生成。

SurgWM 的重大突破在于将世界模型的适用范围从自然视觉领域拓展到手术领域，同时绕过了手术数据动作标注昂贵这一根本性瓶颈。模型在未标注的 SurgToolLoc-2022 手术数据集上训练，仅通过视频序列的自监督学习，就能发现手术操作中的潜在动作模式（如器械的移动方向、切割位置变化等），并基于这些潜在动作生成相应的未来手术画面。这为手术模拟、手术技能评估和自主手术 AI 训练提供了全新的数据生成管道。

## 技术架构

**Vision Encoding（视觉编码）**：SurgWM 采用 VQ-VAE 风格的视觉编码器，将手术视野的视频帧编码为离散的视觉 token。手术场景的特殊性在于高对比度的组织纹理和金属器械的反光，这对 VQ-VAE 的码本学习提出了额外挑战。编码器在手术数据上针对性微调，确保码本能够捕捉到关键解剖结构和手术器械的精细细节。

**Knowledge Learning（知识学习）**：核心包含三个子模块：(1) **视频 tokenizer** 将连续帧序列压缩为离散 token 流；(2) **潜在动作模型**（Latent Action Model, LAM）是一个可学习的动作编解码器，将连续的帧间变化编码为小维度的潜在动作向量——这些向量不需要人工标注，完全通过视频重建信号学习；(3) **动态模型**（Dynamics Model）是一个自回归 Transformer，以过去帧的 token 和潜在动作为输入，预测未来帧的 token。LAM 的关键设计是对潜在动作空间施加信息瓶颈（小维度 + 正则化），迫使它仅编码对预测有意义的"有效动作"信息。

**Controllable Simulation（可控模拟）**：训练完成后，SurgWM 可以通过两种方式控制生成：(1) 从真实视频中提取的潜在动作序列（用于重建和评估）；(2) 用户手动调节潜在动作向量（用于探索性模拟）。由于潜在动作空间经过信息瓶颈压缩，其每个维度往往对应可解释的手术操作属性（如器械水平移动、垂直移动、深度变化等），使得手动控制具有一定直觉性。

## 代码实现要点

代码已在 GitHub 开源（bhattarailab/Surgical-Vision-World-Model）。核心实现：(1) 基于 CNN 的 VQ-VAE 视频 tokenizer，针对手术场景的纹理和色彩特征做了适配；(2) LAM 采用 MLP 编码器和解码器，将帧间 token 差异压缩为 8-16 维的潜在动作；(3) 动态模型使用标准 Transformer 架构，输入为历史 token + 潜在动作，输出为下一帧 token。训练在 SurgToolLoc-2022 数据集上进行，使用 NVIDIA GPU 约需 1-2 天。评估指标包括未来帧重建的感知质量和潜在动作空间的可解释性分析。

## 关键创新点

- **首个手术视觉世界模型**：首次将世界模型范式从游戏/自动驾驶拓展到手术领域
- **无需动作标注的学习**：通过潜在动作模型从纯视频数据中发现控制信号，避免了手术数据标注的昂贵成本
- **信息瓶颈设计**：通过限制潜在动作的维度，使模型学到的潜在动作具有可解释性和语义意义
- **MICCAI 正式发表**：经顶级医学影像会议认可，证明了世界模型在医疗领域的实用价值

## 代表性结果

在 SurgToolLoc-2022 数据集上的实验表明，SurgWM 能够生成逼真的手术场景延续画面，在 FVD（Fréchet Video Distance）等指标上取得了有竞争力的结果。潜在动作空间的可视化分析显示，不同维度确实对应于不同类型的手术器械运动，验证了信息瓶颈设计的有效性。论文还展示了封闭环境中基于潜在动作的主动控制实验，验证了世界模型用于手术 agent 训练的可行性。
