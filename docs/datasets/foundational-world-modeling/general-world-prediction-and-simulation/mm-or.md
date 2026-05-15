---
title: "MM-OR: A Large Multimodal Operating Room Dataset for Semantic Understanding of High-Intensity Surgical Environments"
design: "MM-OR"
arxiv: https://arxiv.org/abs/2503.02579
github: https://github.com/egeozsoy/MM-OR
---

# MM-OR: A Large Multimodal Operating Room Dataset for Semantic Understanding of High-Intensity Surgical Environments

::: info 论文信息
- **Design**: MM-OR
- **论文全称**: MM-OR: A Large Multimodal Operating Room Dataset for Semantic Understanding of High-Intensity Surgical Environments
- **arXiv**: [https://arxiv.org/abs/2503.02579](https://arxiv.org/abs/2503.02579)
- **GitHub**: [https://github.com/egeozsoy/MM-OR](https://github.com/egeozsoy/MM-OR)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.02579](https://arxiv.org/abs/2503.02579)
- **GitHub**: [https://github.com/egeozsoy/MM-OR](https://github.com/egeozsoy/MM-OR)

## 简介
MM-OR 是首个大规模的、高真实感的多模态时空手术室数据集。手术室是高度复杂且高风险的动态环境，需要精确理解医护人员、工具和设备之间的交互，以增强手术辅助、态势感知和患者安全。然而，现有数据集在规模、真实性和多模态覆盖方面都存在严重不足。

MM-OR 捕获了全面的手术室场景，包含RGB-D数据、细节视图、音频、语音转录、机器人日志和跟踪数据，并标注了全景分割、语义场景图以及下游任务标签。该数据集也是首个支持多模态场景图生成的数据集。

研究团队还提出了 MM2SG，首个用于场景图生成的多模态大型视觉语言模型，通过广泛实验展示了其有效利用多模态输入的能力。MM-OR 和 MM2SG 共同建立了整体手术室理解的新基准，为复杂高危险环境中的多模态场景分析开辟了道路。

## 关键特征
- **数据规模**: 大规模多模态手术室数据
- **数据模态**: RGB-D、音频、语音转录、机器人日志、跟踪数据
- **主要指标**: 场景图生成质量、语义理解精度、任务完成率
- **领域**: 手术室场景理解、多模态场景分析

## 与世界模型的关系
MM-OR 代表了视觉世界模型（VWM）在一个高度专业化、高风险领域中的应用前沿。手术室环境的动态性、多模态性（视觉+音频+语音+机器人）和精确的操作约束使其成为VWM的理想测试场景。该数据集提供的多模态场景图标注为训练能够理解复杂交互语义的VWM提供了宝贵的监督信号。MM-OR 的成功展示了VWM从通用场景向特定专业领域延伸的巨大潜力。

## 代表性用途
- MM-OR (Özsoy et al., 2025) - 原始论文，建立多模态手术室数据集
- MM2SG 多模态场景图生成模型训练
- 手术室场景中的世界模型应用研究
