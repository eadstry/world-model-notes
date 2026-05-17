---
title: "BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation"
design: "BEHAVIOR-1K"
arxiv: https://arxiv.org/abs/2403.09227
github: https://github.com/StanfordVL/BEHAVIOR-1K
---

# BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation

::: info 论文信息
- **Design**: BEHAVIOR-1K
- **论文全称**: BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation
- **arXiv**: [https://arxiv.org/abs/2403.09227](https://arxiv.org/abs/2403.09227)
- **GitHub**: [https://github.com/StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2403.09227](https://arxiv.org/abs/2403.09227)
- **GitHub**: [https://github.com/StanfordVL/BEHAVIOR-1K](https://github.com/StanfordVL/BEHAVIOR-1K)

## 简介
BEHAVIOR-1K IStanford Vision and Learning Lab 提出的最具雄心的具身 AI 基准之一，旨在评测智能体执行 1000 项日常人类活动的能力。该基准的NVIDIA Omniverse 物理仿真平台上构建了高度逼真的家居环境，使用双臂移动操作机器人（带轮式基座的视Franka 机械臂）执行包括清洁、烹饪、整理、维修等 1000 项真实世界日常活动。BEHAVIOR-1K 作BEHAVIOR-100 的大幅扩展版本。

BEHAVIOR-1K 的突出特点在于其对物理真实性和任务复杂性的极致追求。每个任务都被表述为一阶逻辑目标（如 "所有脏盘子都洗净并放入碗平 AND "台面上没有水体），且涉及多步骤、多物体、长序列操作。该基准使用基于物理的Omniverse 仿真，支持柔体、流体、颗粒物等复杂物理现象的模拟。BEHAVIOR-1K 还包含8000+ 个带物理属性和语义标注的3D 物体模型，为训练提供了极度逼真的视觉环境。

## 关键特征
- **数据规模**: 1000 项日常活动作000+ 3D 物体模型的0 个场景布局
- **数据模式**: RGB/RGB-D 图像、深度图、语义分割、物体位姿、力觉反馈、逻辑目标状。
- **主要指标**: 任务成功率、子目标完成率、任务执行时间、物理合理。
- **领域**: 具身 AI、复杂家居任务、物理仿真、通用智能评测

## 与世界模型的关系
BEHAVIOR-1K 为世界模型研究提供了终极的长序列多任务评测平台代000 项任务覆盖了人类日常生活的极大部分，迫使世界模型必须具备广泛的物理知识——从液体流动到刚体碰撞，从温度变化到物体变形。在此基准上成功运行的世界模型需要具备对多尺度物理现象的统一建模能力。BEHAVIOR-1K 的语言指令和逻辑目标设定也使其成为评测语言条件世界模型的理想平台。

## 代表性用例
- Stanford VL 实验室使用BEHAVIOR-1K 评测大语言模型驱动的机器人规划
- 作为具身 AI 领域的主要基准之一，被 ICLR/NeurIPS 等会议广泛引。
- 推动 Omniverse 作Isaac Sim 在具的AI 世界模型中的标准化应。
- 启发了后续大规模具身评测基准（如 Habitat 3.0 的社会导航任务）

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)