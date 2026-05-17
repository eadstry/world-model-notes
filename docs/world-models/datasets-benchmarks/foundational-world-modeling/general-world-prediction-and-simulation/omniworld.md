---
title: "OmniWorld: A Multi-Domain and Multi-Modal Dataset for 4D World Modeling"
design: "OmniWorld"
arxiv: https://arxiv.org/abs/2509.12201
github: https://github.com/yangzhou24/OmniWorld
---

# OmniWorld: A Multi-Domain and Multi-Modal Dataset for 4D World Modeling

::: info 论文信息
- **Design**: OmniWorld
- **论文全称**: OmniWorld: A Multi-Domain and Multi-Modal Dataset for 4D World Modeling
- **arXiv**: [https://arxiv.org/abs/2509.12201](https://arxiv.org/abs/2509.12201)
- **GitHub**: [https://github.com/yangzhou24/OmniWorld](https://github.com/yangzhou24/OmniWorld)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2509.12201](https://arxiv.org/abs/2509.12201)
- **GitHub**: [https://github.com/yangzhou24/OmniWorld](https://github.com/yangzhou24/OmniWorld)

## 简介
OmniWorld 是一个大规模、多领域、多模态的数据集，专门为4D世界建模而设计。近年来，4D世界建模领域——旨在同时捕获空间几何和时间动态——在大规模生成模型和多模态学习的推动下取得了显著进展。然而，真正通用的4D世界模型的发展仍受限于高质量数据的可用性。

OmniWorld 由新收集的 OmniWorld-Game 数据集和多个精心整理的公共数据集组成，涵盖多个不同领域。与现有合成数据集相比，OmniWorld-Game 提供了更丰富的模态覆盖、更大的数据规模和更真实的动态交互。基于该数据集，研究团队建立了一个具有挑战性的基准，暴露了当前最先进方法在建模复杂4D环境方面的局限性。

更重要的是，在 OmniWorld 上微调现有SOTA方法能在4D重建和视频生成任务上带来显著的性能提升，这有力地验证了 OmniWorld 作为训练和评估的强大资源价值。OmniWorld 被设想为推动通用4D世界模型发展的催化剂，最终推进机器对物理世界的整体理解。

## 关键特征
- **数据规模**: 大规模游戏引擎生成数据 + 多个公共数据集
- **数据模态**: RGB视频、深度、相机姿态、文本标注等多模态
- **主要指标**: 4D重建精度、视频生成质量、动态交互真实性
- **领域**: 4D世界建模、多领域场景理解

## 与世界模型的关系
OmniWorld 直接填补了4D世界模型训练数据的关键缺口。其多领域覆盖（游戏引擎数据提供精确的地面真值标注，公共数据提供真实场景多样性）使世界模型能够同时受益于合成数据的可控性和真实数据的多样性。该数据集支持的关键任务——4D几何重建、未来预测和摄像机控制视频生成——正是视觉世界模型的核心能力需求。在 OmniWorld 上微调带来的显著性能提升表明，高质量、多模态的训练数据是推动世界模型发展的关键瓶颈。

## 代表性用途
- OmniWorld (Zhou et al., 2025) - 原始论文，验证多模态4D数据集的有效性
- 4D场景重建模型的预训练和微调
- 视频生成模型的物理一致性增强训练
