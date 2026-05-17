---
title: "Back to the Features: DINO as a Foundation for Video World Models"
design: "DINO-world"
arxiv: https://arxiv.org/abs/2507.19468
---

# DINO-world: Back to the Features: DINO as a Foundation for Video World Models

::: info 论文信息
- **Design**: DINO-world
- **论文全称**: Back to the Features: DINO as a Foundation for Video World Models
- **arXiv**: [https://arxiv.org/abs/2507.19468](https://arxiv.org/abs/2507.19468)
:::

## 学习笔记

## 核心思想

DINO-world由FAIR（Meta AI）团队提出，核心思想简洁而强大：利用预训练图像编码器DINOv2的潜在空间作为视频世界模型的基础，在其中预测未来帧。与在像素空间或从头学习的潜在空间中建模不同，DINO-world直接在DINOv2的语义丰富、结构化的特征空间中预测未来。
这种"回到特征"的设计哲学带来多重优势：DINOv2已经在大规模数据上学习到了鲁棒的视觉表示，隐式捕捉了场景语义、物体边界和几何结构。DINO-world仅需训练一个小型的未来预测器来学习时序动态，无需重新学习视觉特征。
在大规模未整理视频数据集上训练后，DINO-world在分割预测、深度预测等多种视频预测基准上超越了先前模型，并展现了直观物理理解能力。更重要的是，该预测器可以微调为动作条件世界模型，通过在潜在空间中模拟候选轨迹来支持规划。
## 技术架。
**Vision Encoding（视觉编码）**：DINO-world直接使用预训练DINOv2作为固定的视觉编码器。DINOv2将观测图像编码为高质量、语义感知的潜在特征图，无需额外训练。这提供了免费的视觉基础。
**Knowledge Learning（世界知识学习）**：未来预测器以历史DINOv2特征为条件，学习在DINOv2潜在空间中预测未来帧的特征。预测器在大规模未整理视频数据上训练，学习跨场景的时序动态。由于DINOv2特征空间已经语义丰富，预测器可专注于纯动力学学习。
**Controllable Simulation（可控推演）**：预测器可微调为动作条件模型，接收观运动作轨迹作为输入。在潜在空间中模拟候选动作序列的未来特征演化，支持无需像素重建的高效规划。由于潜在空间是语义级的，规划可以在更高的抽象层次上执行。
## 代码实现要点

- DINOv2作为固定视觉骨干提供"免费"的语义特征空间- 轻量级未来预测器在DINOv2潜在空间中进行时序预测- 大规模未整理视频数据集训练- 支持动作条件微调进行潜在空间规划
- FAIR/Meta AI团队

## 关键创新。
- "回到特征"：利用预训练DINOv2特征空间作为世界模型基础
- 语义丰富的潜在空间预测，超越像素级建模- 结构和语义特征空间中的直观物理理解能力- 动作条件微调支持潜在空间规划
- 轻量高效：预测器仅需学习时序动。
## 代表性结。
- 分割和深度预测基准上超越先前视频预测模型
- 直观物理理解实验验证
- 潜在空间规划可行为- 跨驾驶、室内、模拟等多场景泛。
## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
