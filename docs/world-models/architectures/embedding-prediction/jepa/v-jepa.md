---
title: "V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video"
design: "V-JEPA"
arxiv: https://arxiv.org/abs/2404.08419
github: https://github.com/facebookresearch/jepa
---

# V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video

::: info 论文信息
- **Design**: V-JEPA
- **论文全称**: V-JEPA: Revisiting Feature Prediction for Learning Visual Representations from Video
- **arXiv**: [https://arxiv.org/abs/2404.08419](https://arxiv.org/abs/2404.08419)
- **GitHub**: [https://github.com/facebookresearch/jepa](https://github.com/facebookresearch/jepa)
:::

## 学习笔记

## 核心思想

V-JEPA（Video JEPA）由Meta FAIR的Yann LeCun团队提出，是JEPA架构从图像到视频的自然延伸。其核心思想是通过在特征空间中预测视频被遮挡部分的表示来学习强大的视觉表征——不做像素重建，不依赖负样本对比，纯粹在表示空间中进行预测学习。
V-JEPA的设计哲学体现了LeCun对世界模型和自监督学习的核心理念：一个好的世界模型应该能够在抽象表示空间中预测世界的演变，而非在原始像素空间中。通过在视频的时空维度上进行掩码预测，V-JEPA迫使模型学习视频中的运动和时序动态信息。
V-JEPA在多个视频理解基准上取得了优异的性能，验证了特征预测范式在视频领域的有效性。其学到的表征不仅包含静态的语义信息，还编码了动态的运动模式，这使其特别适合作为视频世界模型的基础编码器。
## 技术架。
**Vision Encoding（视觉编码）**：V-JEPA采用上下文编码器（Context Encoder）和目标编码器（Target Encoder）的双编码器设计。上下文编码器处理视频的可见部分（未被遮挡的时空块），目标编码器处理完整视频帧以提供预测目标。目标编码器采用指数移动平均（EMA）更新。
**Knowledge Learning（世界知识学习）**：预测器接收上下文编码器的输出，以被遮挡区域的时空位置为条件，预测目标编码器在这些位置上的输出。损失函数仅在潜在空间中计算，不涉及像素重建。这种设计使模型专注于学习语义级的运动信息而非低层纹理。
**Controllable Simulation（可控推演）**：V-JEPA本身是一个表征学习框架而非完整的交互式世界模型。但其学到的时空预测能力为下游的动作条件世界建模提供了优秀的初始化——模型已经学会了"视频中的事物如何随时间运动。
## 代码实现要点

- 上下文编码器和目标编码器的双编码器架构- 时空掩码策略：在视频帧和时间维度联合进行遮挡
- EMA更新的目标编码器提供稳定的预测目的- 纯潜在空间预测损失，无需像素重建
- FAIR开源JEPA系列代码。
## 关键创新。
- JEPA范式从图像到视频的首个大规模成功应用
- 时空维度联合掩码预测学习运动表征
- 纯潜在空间预测：避免像素冗余的同时捕捉运动信息- EMA目标编码器保证表征学习稳定性- 无需负样本、无需增强、无需像素重建

## 代表性结。
- 多个视频理解基准上取得优异表征学习效的- 运动感知表征在动作识别等任务上表现突出- 为下游视频世界模型提供优秀的预训练初始权重

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
