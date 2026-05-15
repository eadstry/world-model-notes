---
title: "GigaWorld-0: World Models as Data Engine to Empower Embodied AI"
design: "GigaWorld-0"
arxiv: https://arxiv.org/abs/2511.19861
github: https://github.com/open-gigaai/giga-world-0
website: https://giga-world-0.github.io/
---

# GigaWorld-0: World Models as Data Engine to Empower Embodied AI

::: info 论文信息
- **Design**: GigaWorld-0
- **论文全称**: GigaWorld-0: World Models as Data Engine to Empower Embodied AI
- **arXiv**: [https://arxiv.org/abs/2511.19861](https://arxiv.org/abs/2511.19861)
- **GitHub**: [https://github.com/open-gigaai/giga-world-0](https://github.com/open-gigaai/giga-world-0)
- **Website**: [https://giga-world-0.github.io/](https://giga-world-0.github.io/)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2511.19861](https://arxiv.org/abs/2511.19861)
- **GitHub**: [https://github.com/open-gigaai/giga-world-0](https://github.com/open-gigaai/giga-world-0)
- **Website**: [https://giga-world-0.github.io/](https://giga-world-0.github.io/)

## 简介
GigaWorld-0 是一个创新的世界模型框架，其核心理念是将"世界模型作为数据引擎"来赋能具身 AI 研究。GigaWorld-0 的设计哲学是"用世界模型生成训练数据"——通过一个预训练的高质量世界模型，自动生成大规模、多样化的具身交互数据（包括视觉观测、物理状态和动作），用于训练下游的具身 AI 策略模型。这种方法有效缓解了具身 AI 领域最严重的数据瓶颈问题。

GigaWorld-0 包含两个核心组件：一个大规模预训练的世界模型（能够根据动作序列生成高保真的未来视频帧和物理状态），以及一个数据生成调度器（控制世界模型生成特定场景和任务的数据）。该框架在多种仿真环境中进行了验证，展示了从世界模型生成的数据训练出的策略可以与在真实仿真环境中训练的策略性能相当，同时数据生成成本和多样性远优于传统方法。

## 关键特征
- **数据规模**: 世界模型可生成几乎无限量的多样化交互数据
- **数据模态**: RGB 视频、深度图、物理状态、动作序列、语义标注
- **主要指标**: 生成数据质量（FVD、物理一致性）、下游策略成功率、数据多样性
- **领域**: 世界模型数据引擎、具身 AI、自动化数据生成

## 与世界模型的关系
GigaWorld-0 展示了世界模型的一个全新应用范式：不仅仅是预测工具，更是数据生产工具。这一范式对世界模型社区的意义重大，因为它为世界模型的价值提供了新的衡量标准——世界模型的质量可以通过其"生成数据的训练价值"来评估。这种"世界模型→数据引擎→策略训练"的闭环也被认为是最终实现通用具身智能的关键路径之一，与 DeepMind 的 Genie、Genie 2 等方向高度一致。

## 代表性用途
- 作为具身 AI 的通用数据引擎
- 为机器人操作策略提供无限多样化的训练数据
- 支持少样本场景下的大规模数据扩展
- 与 Open X-Embodiment 等大规模真实数据集互补使用
