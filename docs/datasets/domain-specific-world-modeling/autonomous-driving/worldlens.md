---
title: "WorldLens: Full-Spectrum Evaluations of Driving World Models in Real World"
design: "WorldLens"
arxiv: https://arxiv.org/abs/2512.10958
github: https://github.com/worldbench/WorldLens
website: https://worldbench.github.io/worldlens
---

# WorldLens: Full-Spectrum Evaluations of Driving World Models in Real World

::: info 论文信息
- **Design**: WorldLens
- **论文全称**: WorldLens: Full-Spectrum Evaluations of Driving World Models in Real World
- **arXiv**: [https://arxiv.org/abs/2512.10958](https://arxiv.org/abs/2512.10958)
- **GitHub**: [https://github.com/worldbench/WorldLens](https://github.com/worldbench/WorldLens)
- **Website**: [https://worldbench.github.io/worldlens](https://worldbench.github.io/worldlens)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.15206](https://arxiv.org/abs/2503.15206)
- **GitHub**: [https://github.com/tsinghua-fib-lab/WorldLens](https://github.com/tsinghua-fib-lab/WorldLens)

## 简介
WorldLens 是清华大学提出的一个创新视角——将世界模型作为"观察世界的镜头"来评估自动驾驶系统的语义理解能力。该工作的核心思想是：世界模型不应仅用于"生成未来帧"，更应作为场景中语义概念的"可查询数据库"。WorldLens 构建了一个基于世界模型内部的场景记忆系统，允许用户通过自然语言查询来检索和"预演"驾驶场景中的关键信息。

WorldLens 使用 nuScenes 数据作为其世界模型的基础训练数据，但评测方式与传统感知基准根本不同：评估不是通过标注真值对比（如 mAP、mIoU），而是通过"世界模型作为问答引擎"的范式——基于世界模型生成的未来场景来回答关于场景语义的问题（如"3 秒后那辆白车会在哪里"或"这个行人是否会过马路"）。这种范式使世界模型的价值直观地体现为语义理解能力。

## 关键特征
- **数据规模**: 基于 nuScenes 的世界模型训练和评测，自然语言交互
- **数据模态**: RGB 图像、激光雷达点云、高精地图、自然语言查询
- **主要指标**: 语义查询准确率、时序预测合理性、视觉-语言对齐度
- **领域**: 世界模型可解释性、语义场景理解、语言驱动的世界查询

## 与世界模型的关系
WorldLens 开辟了世界模型评估的新方向——"可查询性"。传统世界模型仅被视为视频预测工具，而 WorldLens 将世界模型的内部表征视为可被语义查询的空间，本质上将世界模型从"预测引擎"重新定义为"世界知识库"。这种范式转变对世界模型的发展极具影响，提示研究者关注世界模型的语义理解和可解释性，而不仅仅是像素预测质量。

## 代表性用途
- 清华团队使用 WorldLens 展示世界模型的可解释语义理解
- 为世界模型的"预演推理"（imaginary reasoning）能力提供评测
- 启发了基于世界模型的自动驾驶视觉问答研究
- 推动世界模型从"黑盒预测"向"可查询语义世界"的转变
