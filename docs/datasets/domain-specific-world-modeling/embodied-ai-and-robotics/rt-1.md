---
title: "RT-1: Robotics Transformer for Real-World Control at Scale"
design: "RT-1"
arxiv: https://arxiv.org/abs/2212.06817
github: https://github.com/google-research/robotics_transformer
---

# RT-1: Robotics Transformer for Real-World Control at Scale

::: info 论文信息
- **Design**: RT-1
- **论文全称**: RT-1: Robotics Transformer for Real-World Control at Scale
- **arXiv**: [https://arxiv.org/abs/2212.06817](https://arxiv.org/abs/2212.06817)
- **GitHub**: [https://github.com/google-research/robotics_transformer](https://github.com/google-research/robotics_transformer)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2212.06817](https://arxiv.org/abs/2212.06817)
- **GitHub**: [https://github.com/google-research/robotics_transformer](https://github.com/google-research/robotics_transformer)

## 简介
RT-1（Robotics Transformer 1）是 Google Robotics 提出的将大规模 Transformer 架构应用于真实世界机器人控制的里程碑工作。RT-1 的突出贡献不是数据集本身，而是提出了一套用于训练的"真实世界机器人操作数据配方"：该工作使用了由 13 台 Everyday Robots（Google 移动操作机器人）在办公室厨房环境中收集的长达 17 个月的 130,000 条演示轨迹（约 130K 集）进行训练。

RT-1 的演示数据涵盖 700+ 种不同指令（如"把可乐罐拿给我"或"打开抽屉"），涉及大量物体和技能。每一条轨迹由人类遥操作员通过 VR 界面控制 Everyday Robots 完成。RT-1 将图像和自然语言指令通过 FiLM 条件层融合到 Transformer 架构中，输出离散化的末端执行器动作。这项工作证明了大规模真实世界机器人数据与 Transformer 架构结合可以实现零样本泛化到新指令、新物体和新场景。

## 关键特征
- **数据规模**: 130,000 条演示轨迹，17 个月收集，13 台机器人，700+ 指令
- **数据模态**: RGB 图像、自然语言指令、关节状态、离散化动作标记
- **主要指标**: 任务成功率、零样本泛化率、新物体/新场景/新指令鲁棒性
- **领域**: 语言条件机器人操作、大规模 Transformer、真实世界操作

## 与世界模型的关系
RT-1 对世界模型研究的主要启示在于证明了大规模真实世界数据可以学得物理世界的良好内部表征。虽然 RT-1 不是显式世界模型，但其所用的 Transformer 架构本质上隐式地编码了对"图像-文本-动作"联合分布的世界知识。这为后续显式世界模型（如 UniPi 和 Genie 等）的设计提供了宝贵的工程和数据经验，尤其是在如何处理大规模异质真实世界视觉-语言-动作数据方面。

## 代表性用途
- 直接催生了 RT-2 (2023)，其将视觉语言模型能力整合进机器人控制
- 启发了 OpenVLA (2024) 和 Octo (2024) 的架构设计
- 成为通用机器人基础模型研究的基础实验范式
- 在 PaLM-E (2023) 中作为机器人控制模块使用
