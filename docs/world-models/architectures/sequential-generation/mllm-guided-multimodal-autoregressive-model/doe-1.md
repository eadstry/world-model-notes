---
title: "Doe-1: Closed-Loop Autonomous Driving with Large World Model"
design: "Doe-1"
arxiv: https://arxiv.org/abs/2412.09627
github: https://github.com/wzzheng/Doe
---

# Doe-1: 基于大世界模型的闭环自动驾驶

::: info 论文信息
- **Design**: Doe-1
- **论文全称**: Doe-1: Closed-Loop Autonomous Driving with Large World Model
- **arXiv**: [https://arxiv.org/abs/2412.09627](https://arxiv.org/abs/2412.09627)
- **GitHub**: [https://github.com/wzzheng/Doe](https://github.com/wzzheng/Doe)
:::

## 学习笔记

### 核心思想

Doe-1（Driving wOrld modEl）是清华大学 Lu 团队提出的闭环自动驾驶大世界模型。其核心洞见在于：将自动驾驶统一表述为「下一个 token 预测」问题——使用多模态 tokens 同时完成感知、预测和规划三大任务。具体而言：(1) 使用自由格式文本 token 进行场景描述与感知理解；(2) 使用 VQ-VAE 编码的图像 token 进行 RGB 未来帧预测；(3) 使用位置感知 tokenizer 将动作轨迹离散化为离散 token 进行动作编码。所有模态的 token 输入到一个多模态自回归 Transformer 中，以统一的 next-token 预测范式进行训练。

Doe-1 实现了真正的闭环驾驶：模型自回归地生成动作 token，动作 token 又作为条件来生成未来帧的图像 token，而生成的视觉反馈又为下一步动作规划提供依据。这种统一 token 空间的设计，使感知、预测和规划三种能力在同一个训练目标下协同进化。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
