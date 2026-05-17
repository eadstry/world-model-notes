---
title: "RLBench: The Robot Learning Benchmark & Learning Environment"
design: "RLBench"
arxiv: https://arxiv.org/abs/1909.12271
github: https://github.com/stepjam/RLBench
---

# RLBench: The Robot Learning Benchmark & Learning Environment

::: info 论文信息
- **Design**: RLBench
- **论文全称**: RLBench: The Robot Learning Benchmark & Learning Environment
- **arXiv**: [https://arxiv.org/abs/1909.12271](https://arxiv.org/abs/1909.12271)
- **GitHub**: [https://github.com/stepjam/RLBench](https://github.com/stepjam/RLBench)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1909.12271](https://arxiv.org/abs/1909.12271)
- **GitHub**: [https://github.com/stepjam/RLBench](https://github.com/stepjam/RLBench)

## 简介
RLBench 是由 Imperial College London 提出的机器人学习基准与仿真环境，是具身智能研究中最早也是最具影响力的大规模标准化机器人操作基准之一。RLBench 基于 CoppeliaSim（原 V-REP）仿真器构建，使用 Franka Panda 机械臂执行多种桌面操作任务。该基准包含 100 个独特的手工设计任务，涵盖抓取、推动、放置、插入、开抽屉等丰富类别，每个任务都支持通过程序化方式生成无限多样的变体（目标位置、物体颜色、干扰物等）。

RLBench 一个关键创新是其"演示生成"机制：通过运动规划（RRT-Connect）自动为每个任务生成专家演示，无需人工遥操作。这使得研究人员可以零成本获得大规模高质量演示数据，用于行为克隆（Behavior Cloning）和模仿学习研究。RLBench 支持多种观测模态，包括 RGB/RGB-D 图像（单视角或多视角）、点云和物体位姿真值。

## 关键特征
- **数据规模**: 100 个任务，每个任务可生成无限程序化变体
- **数据模态**: RGB/RGB-D 图像、点云、物体 6D 姿态、关节角度、末端执行器状态
- **主要指标**: 任务成功率（Success Rate）、完成步数、泛化能力
- **领域**: 机器人操作、模仿学习、language-conditioned 策略

## 与世界模型的关系
RLBench 为视觉世界模型在机器人操作领域提供了标准化评测平台。由于任务多样性高且支持程序化变体生成，RLBench 非常适合评估世界模型对未来视频帧的预测质量以及基于预测的决策规划能力。研究人员常使用 RLBench 中的多视角 RGB/RGB-D 序列数据训练视频预测世界模型，验证模型对物理交互（碰撞、抓取、释放）的建模精度。其自动演示生成能力也使世界模型能够以低成本获得大规模训练数据。

## 代表性用途
- PerAct (2023) 使用 RLBench 作为主要基准测试机器人操作的 Perceiver-Actor
- GNFactor (2023) 在 RLBench 上评估可泛化的操作策略
- Act3D (2024) 利用 RLBench 进行 3D 特征场操作策略学习
- Hiveformer (2023) 在 RLBench 上评测多任务指令遵循
