---
title: "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems"
design: "AgiBot-World"
arxiv: https://arxiv.org/abs/2503.06669
github: https://github.com/OpenDriveLab/AgiBot-World
---

# AgiBot-World: AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems

::: info 论文信息
- **Design**: AgiBot-World
- **论文全称**: AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
- **arXiv**: [https://arxiv.org/abs/2503.06669](https://arxiv.org/abs/2503.06669)
- **GitHub**: [https://github.com/OpenDriveLab/AgiBot-World](https://github.com/OpenDriveLab/AgiBot-World)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2503.06669](https://arxiv.org/abs/2503.06669)
- **GitHub**: [https://github.com/OpenDriveLab/AgiBot-World](https://github.com/OpenDriveLab/AgiBot-World)

## 简介
AgiBot World Colosseo 是由 AgiBot 和 OpenDriveLab 联合提出的大规模操作平台，旨在为具身智能系统提供可扩展的标准化评测与训练环境。该平台最突出的特色是其大规模真实机器人数据收集基础设施，涵盖超过 100 个不同日常操作任务，在超过 100 个真实家庭和工业场景中收集数据，使用 AgiBot 双臂机器人系统执行任务。

AgiBot World 的数据覆盖了厨房、清洁、整理、组装等多种操作类别，每个场景都包含细粒度的操作指令和详细的动作标注。平台的核心目标是通过对真实世界物理交互的大规模覆盖，使具身智能模型具备从感知到规划的端到端世界理解能力。该平台还提供了基于仿真环境的数字孪生，支持安全、大规模的策略训练和世界模型学习。

## 关键特征
- **数据规模**: 100+ 任务，100+ 真实场景，大规模双臂操作数据
- **数据模态**: 多视角 RGB/RGB-D 图像、关节角度、力反馈、语言指令
- **主要指标**: 任务成功率、场景泛化率、操作精确度、时间效率
- **领域**: 双臂操作、真实世界具身智能、世界模型评估

## 与世界模型的关系
AgiBot World 为世界模型研究提供了独特的双臂协调操作评测场景。其数据的规模（100+ 场景）和物理真实性使世界模型能够学习到双臂协调操作的空间-时间动态特性。平台对安全关键操作场景的覆盖（如厨房刀具操作）也使其成为验证世界模型安全性和可靠性的重要评测基准。其数字孪生设计更进一步支持了从仿真到真实世界（Sim2Real）的世界模型迁移研究。

## 代表性用途
- AgiBot 团队使用该平台训练基于扩散的世界模型
- OpenDriveLab 在 AgiBot World 上评测端到端视觉语言动作模型
- 被多家研究机构用于大规模真实世界操作策略的预训练和微调
