---
title: "Playable Video Generation"
design: "CADDY"
arxiv: https://arxiv.org/abs/2101.12195
github: https://github.com/willi-menapace/PlayableVideoGeneration
---

# CADDY: Playable Video Generation

::: info 论文信息
- **Design**: CADDY
- **论文全称**: Playable Video Generation
- **arXiv**: [https://arxiv.org/abs/2101.12195](https://arxiv.org/abs/2101.12195)
- **GitHub**: [https://github.com/willi-menapace/PlayableVideoGeneration](https://github.com/willi-menapace/PlayableVideoGeneration)
:::

## 核心思想

CADDY (Playable Video Generation) 是首个将世界模型与可玩视频生成相结合的工作。核心思想是：学习一个交互式视频世界模型，用户可以通过离散动作（如键盘按键）控制生成视频的内容。CADDY 将"玩视频"视为一个 world model 控制问题——给定当前帧和历史动作，模型生成下一帧，使得生成结果与用户输入的动作一致。

CADDY 代表了世界模型研究的交互式视频生成方向，与后来的 GameNGen、Oasis 等"可玩的视频游戏"一脉相承。其核心理念是：如果世界模型足够准确，生成的视频就可以被"玩"。

## 技术架构

**Vision Encoding（视觉编码）**：使用 VQ-VAE 离散编码器将帧压缩为离散 token。

**Knowledge Learning（知识学习）**：基于多帧自回归 Transformer，在离散 token 空间中建模帧间依赖和动作条件动力学。给定过去帧的 token 序列和动作嵌入，Transformer 自回归预测下一帧的 token。训练数据来自真实视频游戏（如 VizDoom、Super Mario）。

**Controllable Simulation（可控模拟）**：用户通过离散动作（方向键+功能键）控制生成过程。模型在未来 token 采样中融入动作条件，使得不同动作产生不同帧序列。

## 代码实现要点

代码开源在 [willi-menapace/PlayableVideoGeneration](https://github.com/willi-menapace/PlayableVideoGeneration)。基于 PyTorch。VQ-VAE + Autoregressive Transformer（GPT 风格），在 VizDoom 等游戏上训练。

## 关键创新点

1. **可玩视频生成**：首个交互式可控视频世界模型
2. **离散动作空间控制**：通过离散按键动作操控视频
3. **基于真实游戏数据**：从真实游戏录像中学习交互
4. **VQ-VAE + AR**：为后续 Genie、Diamond 等奠基

## 代表性结果

在 VizDoom 和 Super Mario 上，CADDY 支持多帧交互生成（用户按键后模型实时生成对应帧）。生成的视频在视觉上连贯且动作响应准确（不同按键动作产生合理不同的画面变化）。
