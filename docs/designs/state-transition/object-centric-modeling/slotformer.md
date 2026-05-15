---
title: "SlotFormer: Unsupervised Visual Dynamics Simulation with Object-Centric Models"
design: "SlotFormer"
arxiv: https://arxiv.org/abs/2210.05861
github: https://github.com/pairlab/SlotFormer
---

# SlotFormer: Unsupervised Visual Dynamics Simulation with Object-Centric Models

::: info 论文信息
- **Design**: SlotFormer
- **论文全称**: SlotFormer: Unsupervised Visual Dynamics Simulation with Object-Centric Models
- **arXiv**: [https://arxiv.org/abs/2210.05861](https://arxiv.org/abs/2210.05861)
- **GitHub**: [https://github.com/pairlab/SlotFormer](https://github.com/pairlab/SlotFormer)
:::

## 核心思想

SlotFormer 是 MIT CSAIL 提出的首个以对象为中心的（object-centric）无监督视觉动力学模拟框架。核心思想是将世界模型构建在"slot"（槽位）表示之上——每个 slot 对应场景中的一个物理实体（如一个物体、一个 agent），世界模型通过 Transformer 在这些 slot 之间建模交互动力学。

SlotFormer 解决了传统的整体式世界模型（monolithic world model）的关键问题：缺乏组合性（compositionality）。在整体式 RSSM 中，所有物体共享同一套潜在表示，当场景中物体数量变化时模型难以泛化。SlotFormer 使用 Slot Attention 将场景分解为物体级 slots，然后在这些 slots 上使用 Transformer 进行自回归动力学预测，天然支持组合泛化。

## 技术架构

**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为 K 个 object slots（固定数量，如 7 个）。每个 slot 通过 iterative attention 竞争"解释"图像的不同区域。Slot encoder 完全无监督，不需要物体标注。

**Knowledge Learning（知识学习）**：Slot Transformer——在 K 个 slot 上使用 causal Transformer 自回归地预测未来的 slot 表示。Transformer 通过 self-attention 建模 slot 之间的交互动力学（如物体碰撞、遮挡）。训练使用 slot-level 的 reconstruction loss（通过 slot decoder 重建下一帧）。

**Controllable Simulation（可控模拟）**：通过 Slot Transformer 进行长期 rollout，支持交互式物体动力学模拟。模型支持 slot 级别的编辑——如删除某个物体、改变其属性，观察对未来的影响。

## 代码实现要点

代码开源在 [pairlab/SlotFormer](https://github.com/pairlab/SlotFormer)。基于 PyTorch。Slot Attention + Causal Slot Transformer + slot decoder。在 Physion、CATER 和 OBJ3D 等物体中心数据集上评估。

## 关键创新点

1. **首个 Object-Centric World Model**：将 slot 表示引入世界模型
2. **Slot Transformer 动力学**：在物体槽位上使用 Transformer 建模交互
3. **组合泛化**：支持不同数量/配置的物体场景
4. **无监督物体发现**：不需要物体标注的 slot 学习

## 代表性结果

在 Physion 和 CATER 等物体中心数据集上，SlotFormer 生成的长程视频（100+ 帧）在视觉质量（FVD）上显著优于基于整体表示的方法。模型展示了对组合变化的泛化：用 3 个物体训练的模型可在推理时处理 5+ 个物体。Slot 的可解释性允许用户"编程式"地操作仿真（如改变球的颜色、移除方块）。
