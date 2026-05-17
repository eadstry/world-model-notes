---
title: "Hierarchical Planning with Latent World Models"
design: "HWM"
arxiv: https://arxiv.org/abs/2604.03208
github: https://github.com/kevinghst/HWM_PLDM
---

# HWM: Hierarchical Planning with Latent World Models

::: info 论文信息
- **Design**: HWM
- **论文全称**: Hierarchical Planning with Latent World Models
- **arXiv**: [https://arxiv.org/abs/2604.03208](https://arxiv.org/abs/2604.03208)
- **GitHub**: [https://github.com/kevinghst/HWM_PLDM](https://github.com/kevinghst/HWM_PLDM)
:::

## 学习笔记

## 核心思想

HWM（Meta FAIR, LeCun 团队）针对学习世界模型在长时域控制中的一个根本性难题：**预测误差累积和搜索空间指数增加*。随着规划时域增长，世界模型的预测误差逐层放大，型MPC 的搜索空间随步数呈指数增长，使得长时域任务几乎不可解。
HWM 的应对方案是**学习多时间尺度的潜在世界模型并进行分层规模*（Hierarchical Planning）。高层规划器使用长时域世界模型优化宏动作（macro-actions）以达到最终目标，其预测的第一个潜在状态作为子目标传递给低层规划器；低层规划器使用短时域世界模型优化原语动作以到达该子目标。这一分层抽象实现了长时域推理，同时大幅降低了推理时的规划复杂度。
在真实世界非贪心机器人任务（抓取与放置）上，仅给定最终目标规格，分层规划实现 70% 成功率，而单层世界模型为 0%。在物理仿真任务上，分层规划在达到更高成功率的同时仅需最成1/4 的规划计算量。
## 技术架。
**Vision Encoding（视觉编码）**：基准PLDM（Predictive Latent Dynamics Model）等现有世界模型框架的视觉编码器。在不同时间尺度上学习各自的潜在空间编码——短时域世界模型编码细粒度状态，长时域世界模型编码粗粒度/抽象状态。
**Knowledge Learning（世界知识学习）**：在多个时间尺度上分别训练世界模型。短时域模型（如 5 步预测）学习精确的局部动力学，长时域模型（如 50 步预测）学习粗粒度的长期转移。两者共享相同的潜在空间但关注不同的时间分辨率。训练使用标准的下一状态预测损失。
**Controllable Simulation（可控推演）**：分解MPC 框架构1) 高层规划器在粗粒度时间尺度上使用长时域世界模型搜索宏动作序列，以子目标形式产出第一个潜在状态；(2) 低层规划器接收该子目标，在细粒度时间尺度上使用短时域世界模型搜索原语动作。HWM 作为模块化规划抽象，可应用于多种潜在世界模型架构和领域。
## 代码实现要点

- 基于 PLDM（Predictive Latent Dynamics Model）框架实现- 多时间尺度世界模型独立训练（不同帧跳跃数 `frameskip`据- 分层规划通过 Python 类实现：高层（macro-action 优化的 低层（primitive action 优化的- 支持 MPPI 作为各层优化的- 环境通过 `pldm_envs/` 配置，包含maze、pusht 含- 数据集预处理脚本位于 `pldm_envs/` 子目。
## 关键创新。
- 多时间尺度潜在世界模型的分层规划范式
- 长时域世界模型+ 短时域世界模型的协同使用
- 模块化设计：可应用于多种潜在世界模型架构
- 真实世界零样本长时域任务的0% vs 0%的- 最后4 倍规划计算量节省

## 代表性结。
- 真实世界抓取与放置（非贪心）生0% 成功率（单层中%的- 物理仿真 Maze 导航：更高成功率 + 更低规划成本
- Push 操作：分层规划显著优于单层规模- 最后4 倍推理计算量节省

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
