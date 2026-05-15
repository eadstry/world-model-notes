---
title: "Owl-1: Omni World Model for Consistent Long Video Generation"
design: "Owl-1"
arxiv: https://arxiv.org/abs/2412.09600
github: https://github.com/huang-yh/Owl
---

# Owl-1: Omni World Model for Consistent Long Video Generation

::: info 论文信息
- **Design**: Owl-1
- **论文全称**: Owl-1: Omni World Model for Consistent Long Video Generation
- **arXiv**: [https://arxiv.org/abs/2412.09600](https://arxiv.org/abs/2412.09600)
- **GitHub**: [https://github.com/huang-yh/Owl](https://github.com/huang-yh/Owl)
:::

## 学习笔记

### 核心思想

Owl-1 (Omni World Model) 旨在解决长视频生成中的一致性问题。现有视频生成模型（VGM）每次只能生成短视频，扩展为长视频的方式是迭代调用 VGM——以最后一帧输出作为下一轮生成的条件。然而，最后一帧仅包含短程细粒度场景信息，导致长时域中出现场景不一致。Owl-1 的核心创新是将长时域演化建模在潜在世界中：用潜在状态变量表示世界，可解码为显式视频观测；这些观测作为预测时序动态的基础，时序动态更新状态变量。"演化动态 ↔ 持久状态"的交互增强了长视频的多样性和一致性。Owl-1 在 VBench-I2V 和 VBench-Long 上达到与 SOTA 相当的性能。

### 技术架构

**Vision Encoding（视觉编码）**：Owl-1 使用潜在状态变量作为世界的压缩表示——不是存储所有历史帧的像素，而是维护一个持久的世界状态（world state）。这个潜在状态可以解码为任意视点和时间步的视频帧观测（observation）。视频生成模型（VGM）作为解码器，将世界状态渲染为具体帧。

**Knowledge Learning（知识学习）**：训练涉及两个交互过程：(1) 解码——将潜在世界状态通过 VGM 解码为显式视频帧；(2) 演化——基于解码出的视频帧观测预测时序动态，并更新潜在世界状态。这种双向交互使模型同时学习短期视觉质量和长期世界演化规律。世界状态的持久性（persistent state）提供长时一致性，动态演化（evolving dynamics）提供多样性。

**Controllable Simulation（可控仿真）**：Owl-1 支持基于文本或初始图像的长视频生成。潜在世界状态可以通过"想象"不同动作/场景的演化来生成不同风格和内容的长期视频。在 VBench-Long 基准上的评估验证了其在长时域一致性上的优势。

### 代码实现要点

- **潜在世界状态**：压缩的潜在向量，解码可恢复视点和时间步的视频帧
- **双向演化**：解码观测 → 预测动态 → 更新状态 → 循环迭代
- **VGM 解码器**：使用预训练视频生成模型从世界状态渲染帧
- **开源**：GitHub 提供代码

### 关键创新点

- **潜在世界建模**：用持久潜在状态 + 演化动态替代帧级自回归
- **状态-演化双向交互**：世界状态和时序动态相互驱动
- **长时一致性突破**：超越"最后一帧条件"的短视问题
- **框架通用性**：可与多种 VGM 解码器结合使用
