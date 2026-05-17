---
title: "BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning"
design: "BC-Z"
arxiv: https://arxiv.org/abs/2202.02005
website: https://sites.google.com/view/bc-z/home?pli=1
---

# BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning

::: info 论文信息
- **Design**: BC-Z
- **论文全称**: BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning
- **arXiv**: [https://arxiv.org/abs/2202.02005](https://arxiv.org/abs/2202.02005)
- **Website**: [https://sites.google.com/view/bc-z/home?pli=1](https://sites.google.com/view/bc-z/home?pli=1)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2202.02005](https://arxiv.org/abs/2202.02005)
- **Website**: [https://sites.google.com/view/bc-z/home?pli=1](https://sites.google.com/view/bc-z/home?pli=1)

## 简介
BC-Z（Behavior Cloning from Zero-shot Task Generalization）是 Google Research 提出的一个旨在探测零样本任务泛化的机器人操作数据集和策略学习框架。该数据集使用一个移动操作平台（Mobile Manipulator），在真实世界中收集数100 个不同操作任务的演示数据，覆盖拾放、擦拭、开关门、倾倒、旋转等多种操作类型。这些任务由人类遥操作员完成，每条任务约含数十到数百条演示轨迹。

BC-Z 的核心创新在于将任务编码为可泛化的自然语言嵌入空间。每个任务都标注了自然语言指令（如 "pick up the red cup" 果"wipe the table"），并通过一个冻结的预训练语言模型将指令嵌入为任务表征。这使得 BC-Z 的策略能够在训练时未见的任务组合中进行零样本泛化——例如，训练中学会了"pick up can"预move object to the left"，测试时能泛化到"pick up can and move it to the left"这样的新组合。

## 关键特征
- **数据规模**: 100 个任务，每任务数十至数百条演示轨迹，真实世界数据
- **数据模式**: RGB 图像（多相机）、关节状态、语言指令、动作序。
- **主要指标**: 零样本任务成功率、跨任务泛化性能、长序列组合执行能力
- **领域**: 零样本泛化、语言条件模仿学习、任务组。

## 与世界模型的关系
BC-Z 对世界模型研究的重要启示在于展示了利用语言嵌入进行任务泛化的可行性。在世界模型的上下文中，BC-Z 的数据模式启发了一个语言条件世界模型"的设计：将自然语言指令作为世界模型的条件输入，使模型能够预测给定特定语言指令的操作场景的未来状态。这对于构建在真实世界中根据人类语言指令进行操作的通用世界模型具有重要意义。

## 代表性用例
- RT-1 (2023) 的预训练数据集之一
- Robotics Transformer 的基础实验平台
- Google Robotics 后续研究（SayCan, PaLM-E）的数据来源之一
- 启发了语言条件视觉世界模型的设计范。

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)