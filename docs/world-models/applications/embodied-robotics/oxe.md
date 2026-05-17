---
title: "Open X-Embodiment: Robotic Learning Datasets and RT-X Models"
design: "OXE"
arxiv: https://arxiv.org/abs/2310.08864
github: https://github.com/google-deepmind/open_x_embodiment
---

# OXE: Open X-Embodiment: Robotic Learning Datasets and RT-X Models

::: info 论文信息
- **Design**: OXE
- **论文全称**: Open X-Embodiment: Robotic Learning Datasets and RT-X Models
- **arXiv**: [https://arxiv.org/abs/2310.08864](https://arxiv.org/abs/2310.08864)
- **GitHub**: [https://github.com/google-deepmind/open_x_embodiment](https://github.com/google-deepmind/open_x_embodiment)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2310.08864](https://arxiv.org/abs/2310.08864)
- **GitHub**: [https://github.com/google-deepmind/open_x_embodiment](https://github.com/google-deepmind/open_x_embodiment)

## 简介
Open X-Embodiment (OXE) 是由 Google DeepMind 联合 34 个研究实验室发起的全球最大规模的机器人操作数据集联合项目。该数据集汇集了来自 60 个不同机器人数据集的超过 160 万条真实机器人操作轨迹，涵盖 22 种不同机器人形态（Franka、Kuka、xArm、WidowX、Mobile Manipulator 等），覆盖527 项独特技能和超过 160,000 个任务。数据收集跨越全球多个实验室的异构硬件平台和环境设置。

OXE 的核心愿景是通过聚合异质数据，训练通用"机器人基础模型。数据集包含了来自BridgeData V2、Language Table、Stanford HCI、Berkeley Autolab 等知名数据集的贡献，每种数据都经过统一的格式标准化处理。OXE 还作为RT-X（Robotics Transformer X）模型的训练数据来源，验证了跨数据集、跨机器人形态的通用策略的可行性，标志着机器人领域的 ImageNet 时刻。

## 关键特征
- **数据规模**: 160 态 轨迹这2 种机器人形态，60+ 数据集来源，527 项技。
- **数据模式**: RGB 图像、深度图、关节状态、自然语言指令、动作序。
- **主要指标**: 跨形态泛化成功率、零样本任务执行、多模态融合性能
- **领域**: 通用机器人基础模型、跨形态迁移、大规模模仿学习

## 与世界模型的关系
OXE 是训练视觉世界模型的理想数据来源。其超大规模、多形态、多场景的数据特性使得世界模型能够学习到跨机器人形态和操作环境的通用物理规律。世界模型可以从 OXE 的异质数据中提取出对物体交互、碰撞动力学、刚体运动等物理现象的泛化理解。RT-X 的成功经验表明，在OXE 上预训练的世界模型能够显著提升下游操作策略的样本效率和泛化性能。

## 代表性用例
- RT-X (2024) 使用 OXE 训练跨形态机器人 Transformer 基础模型
- Octo (2024) 以 OXE 为核心预训练数据集构建通用机器人模。
- OpenVLA (2024) 在 OXE 上微调视觉语言动作模型
- π0 (2024) 利用 OXE 数据训练通用操作策略基础模型

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)