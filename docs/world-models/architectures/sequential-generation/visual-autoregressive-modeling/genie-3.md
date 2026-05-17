---
title: "Genie 3: A New Frontier for World Models"
design: "Genie 3"
website: https://deepmind.google/discover/blog/genie-3/
---

# Genie 3: A New Frontier for World Models

::: info 论文信息
- **Design**: Genie 3
- **论文全称**: Genie 3: A New Frontier for World Models
- **Website**: [https://deepmind.google/discover/blog/genie-3/](https://deepmind.google/discover/blog/genie-3/)
:::

## 学习笔记

### 核心思想

Genie 3 是 Google DeepMind 推出的通用世界模型（General Purpose World Model），能够根据文本提示生成前所未有的多样化交互式环境，允许用户进行实时探索和交互。从 Genie 1（从视频学习潜在动作）到 Genie 2（大规模虚拟世界生成），再到 Genie 3，DeepMind 将世界模型研究推向了全新前沿。Genie 3 首次实现了实时交互（24 帧/秒）、长时间一致性（数分钟）和高分辨率（720p）的统一。

Genie 3 是 DeepMind 模拟环境研究十余年积累的技术顶点，被视为通向 AGI 的关键路径。世界模型使 AI 系统能够在无限丰富的模拟环境中进行训练和评估。Genie 3 的环境多样性令人印象深刻——从冰雪、水面、沙漠、火山等自然景观到复杂的生态系统（动物行为、植被生长），结合了 Veo 2 和 Veo 3 系列视频生成模型的强大能力。

### 核心架构

**Vision Encoding（视觉编码）**：Genie 3 的视觉编码技术细节尚未在公开材料中详细披露。基于 Genie 系列的技术积累，可推测其采用大规模时空视频编码方法，支持高分辨率（720p）的连续、高效压缩表示，模型视觉编码能力受益于 DeepMind 在视频生成（Veo 系列）中的技术积累。

**Knowledge Learning（知识学习）**：Genie 3 的知识学习涵盖多维度：(1) 物理世界——水波、光照、反射、烟雾、山脉等自然现象；(2) 自然世界——生态系统、动物行为、植被生长；(3) 3D 空间几何——场景的一致性在视角变换时保持稳定。相比 Genie 2，Genie 3 在分辨率（720p vs 低分辨率）、一致性（数分钟 vs 短时）和多样性方面实现了质的飞跃。

**Controllable Simulation（可控模拟）**：Genie 3 的核心突破是实时交互能力——24 FPS 帧率，用户可通过键盘/鼠标实时自然地控制视角和移动。方式包括：文本提示指定初始环境，用户通过直观的控制方式（移动、转向）在环境中自由探索，模型保持画面一致性和物理连贯性，不会出现场景崩溃或视觉伪影。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
