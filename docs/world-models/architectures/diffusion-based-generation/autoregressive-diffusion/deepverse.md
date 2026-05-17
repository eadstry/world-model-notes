---
title: "DeepVerse: 4D Autoregressive Video Generation as a World Model"
design: "DeepVerse"
arxiv: https://arxiv.org/abs/2506.01103
github: https://github.com/SOTAMak1r/DeepVerse
---

# DeepVerse: 4D Autoregressive Video Generation as a World Model

::: info 论文信息
- **Design**: DeepVerse
- **论文全称**: DeepVerse: 4D Autoregressive Video Generation as a World Model
- **arXiv**: [https://arxiv.org/abs/2506.01103](https://arxiv.org/abs/2506.01103)
- **GitHub**: [https://github.com/SOTAMak1r/DeepVerse](https://github.com/SOTAMak1r/DeepVerse)
:::

## 学习笔记

## 核心思想

DeepVerse 提出了一个关键洞察：现有交互式世界模型主要预测视觉观测，试*忽略了关键隐藏状态*——几何结构和空间连贯性——这导致快速的误差累积和时序不一致。视觉外观的逐帧预测缺乏对底理3D 世界的约束，使漂移成为必然。
DeepVerse 通过**显式引入几何预测**来解决这一问题：将前一时间步的几何预测结果显式地融入当前的动作条件预测中。这种4D 交互世界模型的D 空间 + 时间）不仅预测未来的视觉外观，还显式预测和维护场景的几何结构。
这种几何感知的设计带来多方面的收益：(1) 捕捉更丰富的时空关系和底层物理动力学习2) 显著减少漂移并增强时序一致性，(3) 可靠地生成扩展的未来序列的4) 在预测精度、视觉真实感和场景合理性方面实现大幅提升。DeepVerse 还提供了**几何感知记忆检测*的有效方案，长时间保持空间一致性。
## 技术架。
**Vision Encoding（视觉编码）**器D 自回归框架同时编码视觉外观和几何结构。前一时间步的几何预测（如深度图的D 结构）作为显式条件输入当前的生成过程，为视觉生成提供几何约束。
**Knowledge Learning（世界知识学习）**：几何预测与视觉预测的耦合学习使模型不仅学会看起来像什么，还学会"物体在哪里、形状如的。几何感知记忆检索利用空间位置关系从历史中检索相关信息，维持长时间的空间一致性。
**Controllable Simulation（可控推演）**：动作条件驱动4D 世界推演。几何约束在每一步都发挥纠偏作用——即使视觉特征出现微小偏差，明确性3D 结构约束也能限制漂移的幅度。扩展未来序列的可靠生成得益于几何层面的稳定性。
## 代码实现要点

- 4D 自回归世界模型：3D 空间 + 时间维度统一建模
- 显式几何预测融入当前预测的条件输入- 几何感知记忆检索：基于空间位置检索历史信息- 在多样化场景中验证几何对一致性的关键作用

## 关键创新。
- 显式几何预测的4D 交互世界模型
- 几何约束显著减少漂移并增强时序一致性- 几何与外观的耦合学习捕捉更丰富的物理动力的- 几何感知记忆检索长期保持空间一致性- 预测精度、视觉真实感、场景合理性的全面大幅提升

## 代表性结。
- 多样化场景验证高保真长时预测能力
- 几何感知动态显著减少漂频- 扩展未来序列的可靠生成- 时序一致性和空间一致性的大幅提升


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
