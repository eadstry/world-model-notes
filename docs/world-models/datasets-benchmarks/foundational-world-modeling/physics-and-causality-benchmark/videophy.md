---
title: "VideoPhy: Evaluating Physical Commonsense for Video Generation"
design: "VideoPhy"
arxiv: https://arxiv.org/abs/2406.03520
github: https://github.com/Hritikbansal/videophy
---

# VideoPhy: Evaluating Physical Commonsense for Video Generation

::: info 论文信息
- **Design**: VideoPhy
- **论文全称**: VideoPhy: Evaluating Physical Commonsense for Video Generation
- **arXiv**: [https://arxiv.org/abs/2406.03520](https://arxiv.org/abs/2406.03520)
- **GitHub**: [https://github.com/Hritikbansal/videophy](https://github.com/Hritikbansal/videophy)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2406.03520](https://arxiv.org/abs/2406.03520)
- **GitHub**: [https://github.com/Hritikbansal/videophy](https://github.com/Hritikbansal/videophy)

## 简介
VideoPhy 是一个评估文本到视频（T2V）生成模型是否遵循物理常识的基准。该基准策划了多样化的提示词，涉及物理世界中不同物质类型之间的相互作用（如固体-固体、固体-流体、流体-流体），然后使用多种SOTA T2V生成模型基于这些提示词生成视频。

人类评估揭示了一个严峻的现实：现有模型严重缺乏生成遵循给定文本提示的视频的能力，同时也缺乏物理常识。表现最好的模型 CogVideoX-5B 生成的视频在所有实例中只有39.6%同时遵循字幕和物理定律。VideoPhy 因此强调，视频生成模型距离精确模拟物理世界仍有很大差距。

VideoPhy 还提出了自动评估器 VideoCon-Physics，用于可靠评估新发布模型的物理常识表现。这些发现对于视觉世界模型的发展方向具有重要指导意义——当前模型即使在视觉质量上取得了进步，其在物理常识方面的能力仍然严重不足。

## 关键特征
- **数据规模**: 多样化物质交互提示（固体-固体、固体-流体、流体-流体）
- **数据模态**: 文本提示 + 生成视频 + 人类评估
- **主要指标**: 语义遵循率、物理常识符合率（最佳模型39.6%）
- **领域**: 物理常识评估、视频生成

## 与世界模型的关系
VideoPhy 直接挑战了"视频生成模型正在成为世界模型"的乐观论断。通过严格的物理常识测试，它揭示了当前VWM的物理理解能力远落后于其视觉生成能力。这一发现对VWM研究方向具有重要意义——提升物理常识可能是当前最重要的研究挑战之一。VideoPhy 还启发了 VideoPhy-2 等后续更细粒度的评估工作。

## 代表性用途
- VideoPhy (Bansal et al., 2024) - 原始论文，评估T2V模型的物理常识
- VideoCon-Physics 自动评估器的开发与应用
- 视频生成模型中物理常识提升的后训练研究
