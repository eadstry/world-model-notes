---
title: "Mind the Time: Temporally-Controlled Multi-Event Video Generation"
arxiv: https://arxiv.org/abs/2412.05263
website: https://mint-video.github.io/
venue: CVPR
year: 2025
---

# Mind the Time: Temporally-Controlled Multi-Event Video Generation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2412.05263](https://arxiv.org/abs/2412.05263)
- **Website**: [https://mint-video.github.io/](https://mint-video.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 MinT，首个支持多事件时序控制的视频生成模型，允许用户为每个事件指定在视频中的起止时间段。
- 设计 ReRoPE（Relative Rotary Position Encoding with temporal scaling），一种基于时间的相对位置编码方法，使跨注意力机制能够感知事件与时间段的对应关系。
- 在预训练视频扩散 Transformer 上微调，利用时序标注数据实现事件间的平滑过渡与连贯叙事。

### 方法细节
- 将每个事件绑定到生成视频中一个连续的时间段，模型逐事件聚焦生成，避免长文本 prompt 下的事件遗漏或顺序错乱。
- ReRoPE 将时间步信息注入 RoPE，使交叉注意力头能区分不同事件的时间窗口，实现时间感知的 token 交互。
- 采用时序标注数据集（含事件边界标注）对预训练 DiT 进行微调，保持原有视觉质量同时获得时序控制能力。

### 关键发现
- 单段 prompt 生成多事件时，基线模型（如商用模型和开源 DiT）普遍出现事件遗漏、顺序颠倒等问题，MinT 显著缓解此类故障。
- 首次在文献层面证明视频扩散模型可提供事件级别的时序控制能力，且控制粒度可精细到帧级别。
- 定量指标（FVD、CLIP Score、事件顺序准确率）和用户研究均显示 MinT 大幅领先现有方法。

### 方法归类
- **范式**: 事件条件时序控制——将视频生成解耦为多个临时锚定的事件子任务，通过位置编码约束交叉注意力。
- **关键技术**: ReRoPE、时间窗事件绑定、时序标注数据微调、交叉注意力时间引导、视频扩散 Transformer
- **适用场景**: 多事件叙事视频生成（如"先开门、再倒水、最后坐下"）；需要对视频中事件发生时刻有精确控制的教育或广告内容制作
