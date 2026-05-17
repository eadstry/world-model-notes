---
title: "DragVideo: Interactive Drag-style Video Editing"
arxiv: https://arxiv.org/abs/2312.02216
github: https://github.com/RickySkywalker/DragVideo-Official
website: https://dragvideo.github.io/
venue: ECCV
year: 2024
---

# DragVideo: Interactive Drag-style Video Editing

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2312.02216](https://arxiv.org/abs/2312.02216)
- **GitHub**: [https://github.com/RickySkywalker/DragVideo-Official](https://github.com/RickySkywalker/DragVideo-Official)
- **Website**: [https://dragvideo.github.io/](https://dragvideo.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 DragVideo 通用拖拽式视频编辑框架，将 DragGAN 的交互范式从图像拓展到视频领域，支持用户通过直观的拖拽操作对视频内容进行精确控制。
- 设计了基于视频级拖拽目标函数的隐变量优化方法，在扩散模型的噪声隐空间上直接根据拖拽指令更新视频隐变量，实现对形状、表情和布局等属性的编辑。
- 引入 sample-specific LoRA 与 Mutual Self-Attention 机制，分别用于保持单样本编辑时的内容保真度和跨帧的时空一致性。

### 方法细节
- 拖拽风格视频隐变量优化：在视频扩散模型的去噪过程中，定义视频级别的拖拽目标函数，通过梯度回传更新噪声视频隐变量，使生成结果满足用户指定的控制点位移约束。
- sample-specific LoRA：针对每个待编辑视频样本训练低秩适配模块，在不改变预训练模型权重的前提下，使编辑过程保持原始视频内容的一致性，减少不自然的变形和伪影。
- Mutual Self-Attention：在自注意力层中引入跨帧互注意力机制，使各帧在生成过程中共享外观信息，从而维持编辑后视频的时空一致性。
- 框架兼容现有视频扩散模型，作为即插即用的编辑范式，支持动作编辑、骨架编辑等多种挑战性任务。

### 关键发现
- DragVideo 能够以直观且忠实于用户意图的方式完成视频编辑，编辑结果中几乎无明显失真与伪影。
- 在动作编辑、骨架编辑等多样化测试任务上均表现出良好的泛化能力，验证了拖拽式交互在视频编辑中的可行性。
- Mutual Self-Attention 与 sample-specific LoRA 的组合有效解决了视频编辑中的时空一致性与内容保真度问题。

### 方法归类
- 属于视频生成中的**交互式视频编辑**方向，将基于点的拖拽交互范式从图像引入视频领域。
- 方法上可归类为**扩散模型隐变量优化**，通过优化隐空间变量而非修改模型参数来实现精确可控的视频编辑。
