---
title: "FOUNDER: Grounding Foundation Models in World Models for Open-Ended Embodied Decision Making"
design: "FOUNDER"
arxiv: https://arxiv.org/abs/2507.12496
website: https://sites.google.com/view/founder-rl
---

# FOUNDER: Grounding Foundation Models in World Models for Open-Ended Embodied Decision Making

::: info 论文信息
- **Design**: FOUNDER
- **论文全称**: FOUNDER: Grounding Foundation Models in World Models for Open-Ended Embodied Decision Making
- **arXiv**: [https://arxiv.org/abs/2507.12496](https://arxiv.org/abs/2507.12496)
- **Website**: [https://sites.google.com/view/founder-rl](https://sites.google.com/view/founder-rl)
:::

## 核心思想

FOUNDER 是 UC Berkeley 提出的将基础模型（Foundation Models）与世界模型融合的创新框架，专为开放域具身决策设计。核心思想是：通过世界模型作为"认知基础"（grounding），让 VLM/VLA 等基础模型的语义推理能力与物理世界的动力学真实发生连接。世界模型在这里充当"语义与现实之间的桥梁"——将 VLM 的高层语义决策转化为物理上可行的动作。

FOUNDER 的关键创新是"世界模型 grounding"：VLM 输出语义意图（如"我的手应该到达杯子附近"），世界模型在 latent space 中模拟该意图的执行结果并反馈可行性（"你能到达但杯子会翻"）。这种 closed-loop 的语义-物理反馈使得 agent 能避免物理上不可能或不安全的行为。

## 技术架构

**Vision Encoding（视觉编码）**：多视图 RGB + 深度输入，通过 ViT encoder 压缩为 latent state。

**Knowledge Learning（知识学习）**：FOUNDER 包含两个核心组件：（1）预训练的 VLM 作为高层语义推理器，输出子目标描述；（2）RSSM 风格的世界模型学习物理动力学，将子目标语义转化为 latent space 目标状态。VLM 和 WM 之间的 grounding 通过 contrastive learning 实现——将语义一致的状态在 latent space 中对齐。

**Controllable Simulation（可控模拟）**：VLM 生成子目标 → WM 在 latent space 中验证可行性 → 如果可行则执行，如果不可行则 VLM 根据 WM 的反馈重新规划。

## 代码实现要点

网站 [sites.google.com/view/founder-rl](https://sites.google.com/view/founder-rl)。基于 VLM + RSSM world model + contrastive grounding。

## 关键创新点

1. **World Model Grounding**：世界模型作为 VLM 语义决策的物理约束
2. **语义-物理 closed-loop**：VLM 的语义输出通过 World Model 验证
3. **Contrastive 对齐**：语义和物理潜在空间的对齐学习
4. **开放域决策**：处理开放世界中未见过的物体和任务

## 代表性结果

在 Language Table 和 SAYCan 等需要语义理解和物理交互的任务中，FOUNDER 比纯 VLM（无 world model grounding）的成功率高 40-60%。特别是在涉及新物体的物理推理（如"把易碎物品轻轻推"）场景中，grounding 使 agent 不会做出暴力动作。
