---
title: "DINO-WM: World Models on Pre-trained Visual Features enable Zero-Shot Planning"
design: "DINO-WM"
arxiv: https://arxiv.org/abs/2504.12158
---

# DINO-WM: World Models on Pre-trained Visual Features enable Zero-Shot Planning

::: info 论文信息
- **Design**: DINO-WM
- **论文全称**: DINO-WM: World Models on Pre-trained Visual Features enable Zero-Shot Planning
- **arXiv**: [https://arxiv.org/abs/2504.12158](https://arxiv.org/abs/2504.12158)
:::

## 学习笔记

## 核心思想

DINO-WM提出了一种极简而高效的世界模型构建方案：在DINOv2预训练视觉特征的基础上直接构建世界模型，实现零样本（Zero-Shot）规划。该工作的核心洞察是，DINOv2已经在海量数据上学习了鲁棒的、对象感知的视觉表征，这些表征天然地编码了场景的语义结构和物理约束。

与传统世界模型需要从头训练视觉编码器和动力学模型不同，DINO-WM直接"借用"DINOv2的视觉知识，仅需训练一个轻量级的动力学预测器在DINO特征空间中进行前向推演。这种设计使得世界模型可以在从未见过的新任务和新场景中实现零样本规划。

DINO-WM的关键突破在于证明了预训练视觉特征的"世界知识"足以支撑有效的规划，而无需在任务特定的交互数据上训练完整的世界模型。这为通用世界模型的构建提供了一种极具前景的路径。

## 技术架构

**Vision Encoding（视觉编码）**：使用预训练DINOv2作为固定的视觉编码器。DINOv2的patch特征提供了高分辨率、语义感知的视觉表示，其自注意力图能自动捕捉场景中的对象和区域。

**Knowledge Learning（世界知识学习）**：在DINOv2特征空间上构建动力学预测模型，学习从当前特征和动作到下一时刻特征的映射。模型采用简洁的预测架构（如MLP或小型Transformer），专注于学习动作-观测的动态关系。

**Controllable Simulation（可控推演）**：在DINOv2特征空间中进行多步推演，结合目标条件优化选择动作序列。零样本规划通过在特征空间中搜索使未来特征接近目标特征的动作序列实现。特征空间解码器将预测特征投影回观测空间以验证规划质量。

## 代码实现要点

- DINOv2作为"免费的"视觉世界知识来源
- 轻量级动力学预测器在DINO特征空间训练
- 特征空间中的多步推演和动作序列优化
- 零样本：新任务无需重新训练世界模型

## 关键创新点

- 预训练视觉特征直接用于世界模型构建
- 零样本规划：无需任务特定交互数据
- DINOv2特征空间中的高效动力学学习和推演
- 极简架构：仅训练动力学预测器

## 代表性结果

- 在新场景和新任务上的零样本规划能力
- 特征空间推演有效捕捉动作的视觉后果
- 远低于从头训练世界模型的计算成本
