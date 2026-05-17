---
title: "EVA: An Embodied World Model for Future Video Anticipation"
design: "EVA"
arxiv: https://arxiv.org/abs/2410.15461
website: https://sites.google.com/view/icml-eva
---

# EVA: 面向未来视频预测的具身世界模型

::: info 论文信息
- **Design**: EVA
- **论文全称**: EVA: An Embodied World Model for Future Video Anticipation
- **arXiv**: [https://arxiv.org/abs/2410.15461](https://arxiv.org/abs/2410.15461)
- **Website**: [https://sites.google.com/view/icml-eva](https://sites.google.com/view/icml-eva)
:::

## 学习笔记

### 核心思想

EVA（Embodied Video Anticipator）的核心创新在于提出了一种名为「生成的反思」（Reflection of Generation, RoG）的中间推理策略。该策略将预训练的视觉-语言模型（VLM）与视频生成模型有机结合：先由 VLM 分析当前场景状态和可能的未来事件（Reflection），再以 VLM 的推理结果作为条件信号，驱动视频生成模型预测未来的视觉帧（Generation）。这种「先理解将要发生什么，再生成具体画面」的方式，使模型在分布外（OOD）场景中表现出远强于纯视觉生成模型的泛化能力。

EVA 采用多阶段训练范式：首先在互联网规模数据上进行 VLM 的视觉-语言对齐预训练，然后在机器人操作数据集上进行视频生成的微调，最后通过自回归策略支持长视频序列的逐帧生成。为评估该框架，作者构建了 EVA-Bench——首个专门涵盖分布外数据的具身视频预测综合基准。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
