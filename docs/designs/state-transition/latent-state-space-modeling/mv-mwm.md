---
title: "Multi-View Masked World Models for Visual Robotic Manipulation"
design: "MV-MWM"
arxiv: https://arxiv.org/abs/2302.02408
github: https://github.com/younggyoseo/MV-MWM
---

# MV-MWM: Multi-View Masked World Models for Visual Robotic Manipulation

::: info 论文信息
- **Design**: MV-MWM
- **论文全称**: Multi-View Masked World Models for Visual Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2302.02408](https://arxiv.org/abs/2302.02408)
- **GitHub**: [https://github.com/younggyoseo/MV-MWM](https://github.com/younggyoseo/MV-MWM)
:::

## 核心思想

MV-MWM 是 MWM 的多视图扩展，针对需要多视角感知的机器人操控任务（如需要同时观察顶部视角和手部视角的操作）。核心挑战是：如何使用多个摄像机输入联合学习一个连贯的世界模型。MV-MWM 提出了一种多视图 MAE 预训练 + 多视图 latent fusion 的方案，将不同视角的视觉信息融合到统一的 latent dynamics 中。

MV-MWM 证明了多视图世界模型比单视图世界模型在机器人操控任务上有显著的优势：多视角提供互补的空间信息（俯视图提供全局场景理解，手部视图提供精细操作感知）。

## 技术架构

**Vision Encoding（视觉编码）**：每个视角使用独立的 MAE ViT encoder。多视图特征通过 cross-attention fusion 模块融合为统一的 latent representation。

**Knowledge Learning（知识学习）**：多视图融合后的 latent 特征输入到 Transformer dynamics 模型中。dynamics 模型学习在统一 latent space 中预测未来状态，同时学习一个跨视图一致性损失——不同视角应该描述相同的底层状态。

**Controllable Simulation（可控模拟）**：CEM 规划器在融合后的 latent space 中进行规划，可同时考虑多视角信息。

## 代码实现要点

代码开源在 [younggyoseo/MV-MWM](https://github.com/younggyoseo/MV-MWM)。多视图 MAE encoder + cross-attention fusion + Transformer dynamics。支持 Robosuite 多视角任务。

## 关键创新点

1. **多视图机器人世界模型**：首个利用多相机输入的机器人 world model
2. **Cross-attention fusion**：多视角特征的注意力融合
3. **跨视图一致性**：确保不同视角的潜在表示一致
4. **互补视角规划**：在规划中同时利用全局和局部视角

## 代表性结果

在 Franka Kitchen 和 Robosuite 的多视图任务上，MV-MWM 相比单视图 MWM 规划成功率提升 15-20%。特别是在需要精确 3D 空间推理的操控任务（如插拔、堆叠）上优势明显。
