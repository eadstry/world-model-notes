---
title: "WorldDreamer: Towards General World Models for Video Generation via Predicting Masked Tokens"
design: "WorldDreamer"
arxiv: https://arxiv.org/abs/2401.09985
---

# WorldDreamer

## 学习笔记

### 核心思想

WorldDreamer 首次提出了面向通用视频生成的世界模型，旨在弥补现有世界模型局限于特定任务（游戏、驾驶等）的不足。其核心思想是：将世界建模视为有监督视觉预测任务，将视觉观测映射为离散 token，通过预测被 mask 的 token 来学习通用世界动力学。

WorldDreamer 选择了 masked token prediction 而非 next-token prediction 作为核心学习方式，这使得模型可以同时从过去和未来的视觉 token 中提取双向上下文信息。此外，模型引入了多模态条件（文本、图像等）以促进通用世界模型的建立。实验证明 WorldDreamer 在自然场景、驾驶场景等多种场景下生成高质量视频，并支持文本到视频、图像到视频、视频编辑等多种任务。

### 架构设计

- **Vision Encoding（视觉编码）**：基于 VQ-VAE 将视觉分词器将图像/视频帧压缩为离散 token。视觉输入被统一映射到 codebook 中的离散索引，形成标准 token 序列。对于视频，形成 3D token 序列（空间+时间），在时间维度上施加 mask 遮挡部分 token。
- **Knowledge Learning（知识学习）**：核心学习方式是 Masked Token Prediction——模型接收部分被 mask 的视觉 token 序列，通过双向 Transformer 预测被 mask 的 token。与纯自回归（单向 mask）不同，WorldDreamer 使用双向注意力机制，使模型能利用前后文信息进行预测。
- **Controllable Simulation（可控模拟）**：WorldDreamer 支持多种控制方式：文本到视频（通过文本条件控制视频内容）、图像到视频（从初始帧生成未来帧序列）、视频编辑（对现有视频进行局部修改）。通过将控制信号编码为条件 token 注入到预测网络中实现。

### 关键创新

- **通用视觉世界模型**：首次提出面向通用场景的视觉世界模型。
- **Masked Token Prediction**：将 masked prediction 与 next-token prediction 结合，实现双向上下文利用。
- **多模态条件**：文本、图像的统一条件编码。
- **多任务通用性**：同一模型支持文本-视频、图像-视频、视频编辑等任务。

### 实验结果要点

- 在自然场景和驾驶场景等多种场景下生成高质量视频。
- 文本-视频、图像-视频、视频编辑等多任务均展现卓越性能。
- 能捕捉动态元素（云、水、人物运动等），物理一致性好。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
