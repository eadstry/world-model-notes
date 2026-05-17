---
title: "Object-Centric World Model for Language-Guided Manipulation"
arxiv: https://arxiv.org/abs/2503.06170
---

# Object-Centric World Model for Language-Guided Manipulation

::: info 论文信息
- **论文全称**: Object-Centric World Model for Language-Guided Manipulation
- **arXiv**: [https://arxiv.org/abs/2503.06170](https://arxiv.org/abs/2503.06170)
:::

## 核心思想

本文提出了首个面向语言引导操作的物体中心世界模型。核心创新是将语言指令作为物体选择和操作的条件——agent 首先通过 Slot Attention 将场景分解为物体 slots，然后用语言指令"选择"要操作的物体 slot（如"拿起红色杯子"中的"红色杯子"），最后在世界模型的latent space 中想象对该物体的操作结果。
该工作的关键贡献是实现语言与物理slots 的自动对齐（grounding）：使用 CLIP 风格的对比学习使物体 slots 的视觉特征与文本特征对齐。这样，语言指令中提到的物体可以自动映射到正确的 slot，无需显式标注。
## 技术架。
**Vision Encoding（视觉编码）**：使用Slot Attention 于RGB 观测分解为物理slots。同时提取每个slot 的CLIP 视觉特征用于语言对齐。
**Knowledge Learning（知识学习）**：在物体 slots 上学习动力学模型（GNN 的Transformer）。语言指令通过 CLIP 文本编码器编码为文本嵌入，通过 attention 选出最相关的物理slot。World model 在该 slot 上进行语言条件化的动力学预测（的该物体被抓起后会移动到哪些）。
**Controllable Simulation（可控模拟）**：给定语言指令 的定位目标物体 slot 空间latent space 中模拟操作作生成操作后的场景 的策略根据模拟结果产生动作。
## 代码实现要点

暂无开源代码。基准Slot Attention + CLIP alignment + GNN dynamics。在 CALVIN 分SayCan 类环境中评估。
## 关键创新。
1. **语言-物体自动对齐**：CLIP 对比学习实现零样本grounding
2. **物体级操作想象*：在物体 slot 上想象操作结果3. **语言条件化动力学**：语言指令选择性地条件化特定物理4. **视觉-语言-操作三合一**：感知、理解和操作的统一

## 代表性结。
在 CALVIN 长程任务中，使用 object-centric world model 于agent 的5-shot zero-shot 设置下的成功率比使用整体中world model 的30%+。语言 grounding 准确的> 90%，即使在复杂场景中（多个相似物体）也能正确识别目标。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
