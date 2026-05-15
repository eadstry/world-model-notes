---
title: "Toward Compositional Generalization in Object-Oriented World Modeling"
design: "HOWM"
arxiv: https://arxiv.org/abs/2204.13661
github: https://github.com/linfeng-z/HOWM
---

# HOWM: Toward Compositional Generalization in Object-Oriented World Modeling

::: info 论文信息
- **Design**: HOWM
- **论文全称**: Toward Compositional Generalization in Object-Oriented World Modeling
- **arXiv**: [https://arxiv.org/abs/2204.13661](https://arxiv.org/abs/2204.13661)
- **GitHub**: [https://github.com/linfeng-z/HOWM](https://github.com/linfeng-z/HOWM)
:::

## 核心思想

HOWM (Hierarchical Object-Oriented World Model) 是 CMU 和 FAIR 提出的面向组合泛化的层次化对象中心世界模型。核心创新是在对象中心的世界模型中引入层次化结构——底层建模单个物体的运动，高层建模物体间的交互和任务结构。这种层次化设计使世界模型能实现组合泛化：用少数物体训练，泛化到更多物体的场景。

HOWM 的关键见解是：物理世界具有天然的层次性——物体自身的动力学（旋转、平移）是物体内在属性，而物体间的交互（碰撞、复合）是高层现象。通过层次化建模，世界模型可以"先学会每个物体的内在动力学，再学会它们的交互"，这种解耦是组合泛化的基础。

## 技术架构

**Vision Encoding（视觉编码）**：使用 Slot Attention 将观测分解为物体级 slots。每个物体通过 object encoder 获得独立的表示。

**Knowledge Learning（知识学习）**：两层动力学模型：Low-level object dynamics——每个物体独立的 MLP 预测自身状态变化（intrinsic dynamics）。High-level interaction model——Transformer 在所有物体之间建模交互效应（extrinsic dynamics）。最终物体状态变化 = intrinsic + extrinsic。这种分解使模型能分离"物体自身属性"和"物体间关系"。

**Controllable Simulation（可控模拟）**：层次化 rollout——先计算每个物体的 intrinsic change，再计算所有物体间的 interaction，二者相加。此分解使模型在没见过的新物体组合中也能合理预测。

## 代码实现要点

代码开源在 [linfeng-z/HOWM](https://github.com/linfeng-z/HOWM)。基于 PyTorch。Slot Attention + hierarchical dynamics (MLP + Transformer)。在 2D Shapes、CLEVRER 和 Physion 上评估。

## 关键创新点

1. **层次化 object-centric dynamics**：物体内在动力学 + 物体间交互分层
2. **组合泛化**：trained on 3-object, tested on 10+ objects
3. **Intrinsic vs Extrinsic 解耦**：分离物体自身属性和交互效应
4. **可解释性**：可分析每个物体的独立运动和交互贡献

## 代表性结果

在 2D Shapes 和 CLEVRER 的组合泛化测试中，HOWM 在 unseen object counts（训练时 3 物体，测试时 10 物体）上的预测精度仅下降 10%，而整体式方法下降 50%+。在 Physion 的 physical reasoning 任务中，HOWM 的碰撞预测准确率比非层次化 object-centric 方法高 25%。
