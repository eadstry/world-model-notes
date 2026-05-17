---
title: "WorldVLA: Towards Autoregressive Action World Model"
design: "WorldVLA"
arxiv: https://arxiv.org/abs/2506.21539
---

# WorldVLA: Towards Autoregressive Action World Model

::: info 论文信息
- **Design**: WorldVLA
- **论文全称**: WorldVLA: Towards Autoregressive Action World Model
- **arXiv**: [https://arxiv.org/abs/2506.21539](https://arxiv.org/abs/2506.21539)
- **GitHub**: [https://github.com/alibaba-damo-academy/WorldVLA](https://github.com/alibaba-damo-academy/WorldVLA)
:::

## 学习笔记

### 核心思想

WorldVLA 是阿里巴巴达摩院提出的统一自回归动作世界模型。其核心是将世界模型和 VLA（Vision-Language-Action）模型纳入同一框架中协同训练——世界模型通过预测未来图像来学习环境动力学，同时为动作模型提供丰富的前瞻性视觉信号；VLA 模型基于当前观测生成动作，同时受益于世界模型提供的"动作执行后会发生什么"的预测信息。

WorldVLA 的第二大关键技术是发现并解决了自回归动作生成中的误差累积问题。在长序列自回归动作生成中，早期步骤的误差会逐步累积并传播至后续步骤，导致多步动作质量严重退化。为此，WorldVLA 设计了一种注意力掩码策略——在生成当前动作时，选择性地遮蔽掉部分历史动作 token，防止模型过度依赖于可能已积累误差的历史信息。

### 架构设计

- **Vision Encoding（视觉编码）**：WorldVLA 使用视觉编码器（基于 ViT 架构）将图像观测编码为视觉特征。同时，语言指令通过 LLM 分词和编码。视觉特征和语言特征通过交叉注意力融合后输入到核心模型的特征序列中。视觉编码在训练过程中与世界模型和动作模型共同优化。
- **Knowledge Learning（知识学习）**：WorldVLA 的训练涉及两个紧密交织的目标：(1) 世界模型目标——基于当前图像和历史动作预测未来图像，学习环境动力学；(2) 动作模型目标——基于当前图像和语言指令预测动作序列，学习控制策略。两个目标共享同一个模型骨架，使视觉特征和潜变量同时为两个任务服务。关键设计在于信息流向——世界模型分支的预测结果作为动作模型分支的辅助信号，提供关于动作后果的前瞻性信息。
- **Controllable Simulation（可控模拟）**：WorldVLA 支持两种推理模式：(1) 动作推理模式——输入观测和指令，自回归生成动作序列；(2) 模拟模式——输入观测和动作序列，自回归生成未来图像。注意力掩码策略专为动作推理模式设计，将当前位置的注意力窗口限制为"当前观测 + 语言指令 + 最近 1-2 步动作"，防止历史误差干扰当前决策。

### 关键创新

- **世界模型与动作模型的双向增强**：首次在统一框架中实现世界模型和 VLA 的双向信息流动与能力互补。
- **注意力掩码策略**：新颖的选择性历史遮蔽方法，有效抑制自回归动作生成中的误差累积。
- **领先的动作生成和世界模型质量**：模型在两种模式下均超越对应的专用模型。
- **显著提升多步动作稳定性**：注意力掩码使多步动作生成的性能衰减大幅减缓。

### 实验结果要点

在多个机器人操作基准上，WorldVLA 在动作预测精度和模型预测视觉质量方面均超越现有的 VLA 模型和视频预测模型。注意力掩码策略在实际多步操作中实现了约 30-40% 的误差累积降低。世界模型分支对未来视觉状态的准确预测被证明对长期操作任务至关重要，消融实验显示世界模型训练的贡献显著。在双臂操作等复杂任务中，WorldVLA 展现了稳定的长期表现。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
