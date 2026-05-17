---
title: "MagicStick: Controllable Video Editing via Control Handle Transformations"
arxiv: https://arxiv.org/abs/2312.03047
github: https://github.com/mayuelala/FollowYourHandle
website: https://magic-stick-edit.github.io/
venue: WACV
year: 2025
---

# MagicStick: Controllable Video Editing via Control Handle Transformations

::: info 论文信息
- **Venue**: WACV (2025)
- **arXiv**: [https://arxiv.org/abs/2312.03047](https://arxiv.org/abs/2312.03047)
- **GitHub**: [https://github.com/mayuelala/FollowYourHandle](https://github.com/mayuelala/FollowYourHandle)
- **Website**: [https://magic-stick-edit.github.io/](https://magic-stick-edit.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 MagicStick，首个基于预训练 T2I 模型实现视频属性编辑（形状、尺寸、位置、运动等）的统一框架。
- 发现关键帧内部控制信号（如边缘图、人体姿态）的变换可自然传播至其余帧，为视频编辑提供时空一致的引导。
- 通过 ControlNet 时序膨胀 + LoRA 场景适配 + Attention Remix 机制，在不重新训练视频模型的前提下实现灵活的视频属性编辑。

### 方法细节
- 时序膨胀：将预训练图像扩散模型与 ControlNet 从 2D 扩展至时空维度（pseudo-3D），继承 T2I 模型先验。
- LoRA 场景适配：在特定视频场景上训练低秩适配层以保持外观一致性，参数效率高。
- Attention Remix：在 inversion 与编辑阶段的空间注意力图之间进行融合重混，抑制编辑中的外观漂移。
- 编辑流程：先对原视频 inversion 得到噪声潜变量，再通过变换后的 ControlNet 控制信号引导生成目标视频。

### 关键发现
- 首次展示从预训练 T2I 模型直接实现物体形状、尺寸、位置、运动等多种属性的视频编辑，无需额外训练视频扩散模型。
- Attention Remix 有效缓解了 inversion-edit 过程中的注意力偏移问题，是外观保持的关键组件。
- 统一框架可处理多种属性编辑任务，展示了从 T2I 知识向视频编辑迁移的可行性。

### 方法归类
- **范式**: 基于 ControlNet 时序膨胀 + LoRA 适配的 inversion-editing 视频属性编辑
- **关键技术**: ControlNet 时序膨胀、LoRA 场景适配、Attention Remix 注意力融合、关键帧控制信号传播、Inversion + Editing 双阶段流程
- **适用场景**: 视频后期属性编辑、角色动画空间属性调整
