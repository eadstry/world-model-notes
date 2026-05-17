---
title: "DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT"
design: "DrivingWorld"
arxiv: https://arxiv.org/abs/2412.19505
---

# DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT

::: info 论文信息
- **Design**: DrivingWorld
- **论文全称**: DrivingWorld: Constructing World Model for Autonomous Driving via Video GPT
- **arXiv**: [https://arxiv.org/abs/2412.19505](https://arxiv.org/abs/2412.19505)
:::

## 学习笔记

### 核心思想

DrivingWorld 是一个面向自动驾驶的 GPT 风格世界模型，能够自回归地进行视频生成以及对自车状态（ego state）的预测。其核心创新在于：传统 GPT 风格模型本质上是 1D 序列建模，缺乏有效建模视频数据中的复杂时空动态的能力。DrivingWorld 通过引入时空融合机制（spatial-temporal fusion mechanisms）解决了这一问题，使 GPT 类架构能够有效地在空间和时间两个维度上建模。

DrivingWorld 提出了双阶段建模视角，将视频生成分解为时间维度的状态转移和空间维度的图像生成：一方面通过下一状态预测（next-state prediction）来建模帧间的时间一致性，另一方面通过下一 token 预测（next-token prediction）来捕捉每帧内部的空间信息。

为缓解长序列生成中的漂移问题，DrivingWorld 引入了新颖的掩码策略（masking strategy）和重加权策略（rewighting strategy）进行 token 预测，实现精准控制并克服长期漂移。在实验中，DrivingWorld 能够生成长达 40 秒的高保真驾驶场景视频，性能比当前最先进的驾驶世界模型高出 2 倍以上。

### 核心架构

**Vision Encoding（视觉编码）**：DrivingWorld 使用 Video VQ-VAE 进行视觉编码，将驾驶场景的每一帧图像压缩为离散 token 序列。通过空间下采样网络将原始高分辨率图像压缩为低分辨率 token 图，从而实现高效的视频表示，并使用自回归 Transformer 以 next-token prediction 的方式生成视频。

**Knowledge Learning（知识学习）**：模型设计的关键在于双任务预测框架：(1) Next-State Prediction 聚焦于时间维度，模型学习预测下一帧的整体状态（如自车的位移、速度等）；(2) Next-Token Prediction 聚焦于空间维度，模型学习预测下一帧中每个 token 的内容。通过掩码和重加权策略，对不同位置的 token 分配不同的预测权重，强化对驾驶安全关键 token 的建模能力。

**Controllable Simulation（可控模拟）**：通过自车状态（ego pose，含偏航角和位移）实现可控生成。推理时提供初始帧序列（如前 15 帧）作为上下文，模型根据目标自车轨迹自回归地生成未来的视频帧和自车状态。支持多种生成模式：路线变更演示（Change Road Demo）、长期生成（Long-term Demo，达 40 秒）、多样化生成（通过修改目标 yaw/pos 参数），并使用 top-k / top-p 采样策略。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
