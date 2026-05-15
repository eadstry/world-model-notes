---
title: "IntPhys: A Framework and Benchmark for Visual Intuitive Physics Reasoning"
design: "IntPhys"
arxiv: https://arxiv.org/abs/1803.07616
github: https://github.com/rronan/IntPhys-Baselines
---

# IntPhys: A Framework and Benchmark for Visual Intuitive Physics Reasoning

::: info 论文信息
- **Design**: IntPhys
- **论文全称**: IntPhys: A Framework and Benchmark for Visual Intuitive Physics Reasoning
- **arXiv**: [https://arxiv.org/abs/1803.07616](https://arxiv.org/abs/1803.07616)
- **GitHub**: [https://github.com/rronan/IntPhys-Baselines](https://github.com/rronan/IntPhys-Baselines)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1803.07616](https://arxiv.org/abs/1803.07616)
- **GitHub**: [https://github.com/rronan/IntPhys-Baselines](https://github.com/rronan/IntPhys-Baselines)

## 简介
IntPhys（Intuitive Physics）是由 Facebook AI Research 等机构联合推出的视觉直觉物理基准。受婴儿直觉物理学研究的启发，该基准通过测试系统能否区分"可能"与"不可能"事件来诊断其对物理世界的理解程度。测试视频使用游戏引擎构建，将物理上合理的场景与违反基本物理规律的场景进行精心匹配。

该基准要求系统对整个视频计算一个物理合理性分数。其设计无偏且能够测试一系列基本的物理推理概念（如物体永久性、固体性、连续性等）。重要的是，系统仅在物理上可能的视频上进行无监督训练，测试则要求区分可能与不可能事件。

IntPhys 还提出了两个基于未来语义掩码预测目标训练的无监督深度神经网络系统。与人类数据的对比分析揭示了下一帧预测架构在直觉物理推理中的潜力和局限。该基准被广泛认为是视频理解中物理推理能力评估的里程碑式工作。

## 关键特征
- **数据规模**: 游戏引擎生成的视频，包含可能与不可能事件
- **数据模态**: 合成视频
- **主要指标**: 可能/不可能事件二分类准确率
- **领域**: 直觉物理学、视觉推理

## 与世界模型的关系
IntPhys 奠定了基于"违反预期"（VoE）范式的世界模型物理评估方法。其核心思想——通过区分物理上可能的和不可能的事件来测试物理理解——已成为后续几乎所有VWM物理基准（VideoPhy、Physics-IQ、IntPhys 2等）的模板。IntPhys 还揭示了纯无监督视频预测训练在物理理解方面的根本局限，推动了后续研究向将结构化物理知识纳入VWM的方向发展。

## 代表性用途
- IntPhys (Riochet et al., 2018) - 原始论文，建立视觉直觉物理基准
- 无监督物理推理学习的经典评估
- 视频预测模型中物理理解能力的诊断
