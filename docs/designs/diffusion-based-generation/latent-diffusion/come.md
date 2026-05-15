---
title: "COME: Adding Scene-Centric Forecasting Control to Occupancy World Model"
design: "COME"
arxiv: https://arxiv.org/abs/2506.13260
github: https://github.com/synsin0/COME
---

# COME: Adding Scene-Centric Forecasting Control to Occupancy World Model

::: info 论文信息
- **Design**: COME
- **论文全称**: COME: Adding Scene-Centric Forecasting Control to Occupancy World Model
- **arXiv**: [https://arxiv.org/abs/2506.13260](https://arxiv.org/abs/2506.13260)
- **GitHub**: [https://github.com/synsin0/COME](https://github.com/synsin0/COME)
:::

## 核心思想

COME 是提出的面向开放世界操控的组合式世界模型（Composable World Model）。核心创新是"组合性生成"——世界模型可以独立建模单个物体的动力学，然后通过组合操作生成包含任意数量物体的场景。这种组合式架构使模型具有极强的泛化性——能够在只有少量物体训练的情况下处理多物体场景。

COME 的关键贡献是提出了"物体组合子"（Object Composer）——一个能够将多个独立的物体动力学模型组合为统一场景预测的模块。组合子通过 attention 和 spatial arrangement 操作处理物体间的交互和遮挡。

## 技术架构

**Vision Encoding（视觉编码）**：使用 object discovery network 提取每个物体的视觉表示（appearance code + pose code）。

**Knowledge Learning（知识学习）**：每个物体类型学习独立的 diffusion-based dynamics model。Object Composer 模块将多个物体动力学模型的输出组合为统一场景，使用 compositing attention 处理物体交互和遮挡关系。

**Controllable Simulation（可控模拟）**：可通过添加/移除/替换物体来编排场景。组合式架构天然支持数量的任意组合。

## 代码实现要点

暂无开源代码。基于 Object-centric Diffusion + Composer。在 2D ShapeWorld 和 Physion 上评估。

## 关键创新点

1. **组合式世界模型**：独立物体动力学 + 组合生成
2. **Object Composer**：通用的物体动力学组合模块
3. **任意数量泛化**：组合式架构支持任意物体数量
4. **物体编辑**：添加/移除/替换物体的场景编辑

## 代表性结果

在 Physion 和 ShapeWorld 上，COME 展示了惊人的组合泛化——用 3 个物体训练，测试时可处理 10+ 个物体且预测质量保持（FVD 仅轻微上升）。物体编辑操作（如"将红球替换为蓝方块"）后的场景保持物理合理。
