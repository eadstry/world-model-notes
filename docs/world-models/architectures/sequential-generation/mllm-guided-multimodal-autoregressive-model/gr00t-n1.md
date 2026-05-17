---
title: "GR00T N1: An Open Foundation Model for Generalist Robot Manipulation"
design: "GR00T N1"
arxiv: https://arxiv.org/abs/2503.14734
github: https://github.com/NVIDIA/Isaac-GR00T
---

# GR00T N1: 面向通用机器人操作的开源基础模型

::: info 论文信息
- **Design**: GR00T N1
- **论文全称**: GR00T N1: An Open Foundation Model for Generalist Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2503.14734](https://arxiv.org/abs/2503.14734)
- **GitHub**: [https://github.com/NVIDIA/Isaac-GR00T](https://github.com/NVIDIA/Isaac-GR00T)
:::

## 学习笔记

### 核心思想

GR00T N1 是 NVIDIA 推出的开源通用机器人操作基础模型。其核心架构采用独特的分层设计：顶层是视觉-语言模型（VLM）负责高层推理与任务理解（约 1-3 Hz），中间层是技能库用于任务分解与技能选择，底层是扩散 Transformer 世界模型负责实时动作生成（10-100 Hz）。这种「慢思考 + 快执行」的双系统架构，巧妙地平衡了推理深度与控制的实时性。

GR00T N1 的泛化能力来源于大规模异构数据混合训练：模型同时在真实机器人轨迹数据、人类操作视频和合成数据集上进行训练，实现了跨多种机器人形态的泛化。在 LIBERO 基准、Fourier GR-1 人形机器人实战和双手机器人操作任务中均取得了领先性能。模型完全开源（Apache 2.0），提供代码、权重和部署工具，支持从数据中心 GPU 到 Jetson 嵌入式的多平台推理。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
