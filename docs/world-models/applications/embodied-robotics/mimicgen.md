---
title: "MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations"
design: "MimicGen"
arxiv: https://arxiv.org/abs/2310.17596
github: https://github.com/NVlabs/mimicgen
---

# MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations

::: info 论文信息
- **Design**: MimicGen
- **论文全称**: MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations
- **arXiv**: [https://arxiv.org/abs/2310.17596](https://arxiv.org/abs/2310.17596)
- **GitHub**: [https://github.com/NVlabs/mimicgen](https://github.com/NVlabs/mimicgen)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2310.17596](https://arxiv.org/abs/2310.17596)
- **GitHub**: [https://github.com/NVlabs/mimicgen](https://github.com/NVlabs/mimicgen)

## 简介
MimicGen iNVIDIA tUT Austin 联合提出的自动化数据生成系统，旨在解决机器人学习中的"数据瓶颈"问题。传统机器人演示数据依赖昂贵的人工遥操作，为MimicGen 通过"源演示分割与适应"（source demonstration segmentation and adaptation）的方法，从少量人工演示（约 10 条）自动生成大量的高质量机器人操作数据（跨不同场景配置、物体位姿、机器人起始位置）。

MimicGen 的自动化数据生成原理是：将人工演示分解为多个物体中心的子动作片段，然后将每个子动作适应到新的场景配置中（通过 IK 求解器、运动规划和场景适应），最后拼接为完整的演示轨迹。在 robosuite 仿真环境中，MimicGen 的10 条人工演示中可生成超的1000 条不同场景变体下的高质量演示。该系统支持 12 个不同操作任务，覆盖拾放、装配、堆叠、挂钩放置等类别。

## 关键特征
- **数据规模**: 型10 条人工演示生成1000+ 条变体演示，12 个任务、多场景配置
- **数据模式**: RGB/RGB-D 图像、关节状态、物体位姿、夹爪状。
- **主要指标**: 生成演示质量、策略训练成功率提升、数据生成效。
- **领域**: 自动化数据生成、机器人操作、演示增。

## 与世界模型的关系
MimicGen 对世界模型研究具身数据增强"方面的特殊意义。世界模型的训练通常需要大量高质量交互数据，MimicGen 提供了一种从少量真实演示扩展到大规模仿真数据的方法，可直接用于训练视频预测世界模型。通过 MimicGen 生成的大规模多场景变体数据，世界模型可以学习更丰富的物理交互模式，提升对未见场景的泛化能力。MimicGen 结合 RoboCasa 尤其适合为世界模型提供大规模厨房操作训练数据。

## 代表性用例
- 性RoboCasa 结合生成大规模家庭操作数。
- 为模仿学习策略提供增强数据（集ACT、Diffusion Policy。
- 被用于预训练通用机器人视觉编码器（R3M、VC-1 等的数据增强。
- 启发了后续自动化数据生成管线（如 GenAug, ROSIE 等）

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)