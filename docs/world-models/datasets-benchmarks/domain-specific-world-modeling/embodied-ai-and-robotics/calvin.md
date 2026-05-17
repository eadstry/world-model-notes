---
title: "CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks"
design: "CALVIN"
arxiv: https://arxiv.org/abs/2112.03227
github: https://github.com/mees/calvin
---

# CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks

::: info 论文信息
- **Design**: CALVIN
- **论文全称**: CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks
- **arXiv**: [https://arxiv.org/abs/2112.03227](https://arxiv.org/abs/2112.03227)
- **GitHub**: [https://github.com/mees/calvin](https://github.com/mees/calvin)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2112.03227](https://arxiv.org/abs/2112.03227)
- **GitHub**: [https://github.com/mees/calvin](https://github.com/mees/calvin)

## 简介
CALVIN（Composing Actions from Language and Vision）由 University of Freiburg 提出，是一个专为语言条件长期机器人操作策略学习设计的基准。CALVIN 的仿真环境基于 PyBullet 物理引擎和 Franka Panda 机械臂，包含 4 个独特场景环境（A/B/C/D），每个环境中有抽屉、开关、灯、滑块等多种交互物体。该基准定义了 34 个基本任务，可以被串联成任意长度的复杂指令序列。

CALVIN 的核心挑战在于长期序列执行：智能体需要从自然语言指令中解析多步骤任务序列（如"打开抽屉，拿起粉色块，放入抽屉，关闭抽屉"），并依次完成每个子任务。环境提供了"Play Data"数据集——包含约 1000 万帧的遥操作演示数据（涵盖约 20 小时的交互）用于训练模仿学习策略。这使 CALVIN 成为 language-conditioned 操作策略的事实标准基准。

## 关键特征
- **数据规模**: ~1000 万帧演示数据（20+ 小时遥操作），4 个环境场景
- **数据模态**: RGB 图像（静态相机+夹爪相机）、深度图、关节状态、自然语言指令
- **主要指标**: 序列平均完成任务数、任务成功率、泛化到新场景（零样本）的性能
- **领域**: 语言条件操作、长期任务规划、模仿学习

## 与世界模型的关系
CALVIN 对世界模型的研究至关重要，因为它能在长期序列预测的背景下评测世界模型的质量。一个优秀的 CALVIN 世界模型不仅需要准确预测下一个视觉状态，还需要理解自然语言指令与物理交互之间的语义映射，并在长时间跨度下维持对任务目标的记忆。GR-1、Susie 等视频预测模型曾将 CALVIN 作为核心评测基准，验证世界模型对语言条件动作序列的预测能力。

## 代表性用途
- GR-1 (2024) 在 CALVIN 上验证语言条件视频预测世界模型
- 3D Diffuser Actor (2024) 使用 CALVIN 评测 3D 扩散策略
- Octo (2024) 在 CALVIN 上评测通用机器人基础模型
- SuSIE (2023) 利用 CALVIN 展示子目标驱动的世界模型规划
