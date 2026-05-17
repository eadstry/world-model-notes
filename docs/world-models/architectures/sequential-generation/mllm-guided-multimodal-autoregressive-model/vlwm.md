---
title: "Planning with Reasoning using Vision Language World Model"
design: "VLWM"
arxiv: https://arxiv.org/abs/2509.02722
---

# VLWM: Planning with Reasoning using Vision Language World Model

::: info 论文信息
- **Design**: VLWM
- **论文全称**: Planning with Reasoning using Vision Language World Model
- **arXiv**: [https://arxiv.org/abs/2509.02722](https://arxiv.org/abs/2509.02722)
:::

## 学习笔记

### 核心思想

VLWM（Vision Language World Model）是一个具有里程碑意义的工作，首次将自然视频上的语言世界建模构建为统一的规划基础模型。其核心能力是：给定视觉观察和动作，推断目标是否达成，并预测交错的动作与世界状态变化轨迹。VLWM 的关键设计是同时学习两个能力——动作策略（Action Policy）和动态模型（Dynamics Model），分别支持两种互补的规划模式：快速反应式 System-1 推理（直接从观察到动作的映射）和反思式 System-2 规划（通过世界模型 rollout 和代价最小化进行深思熟虑的决策）。System-2 通过 dynamics model 进行多步 rollout 预测未来状态，Critic Model 评估 rollout 状态与目标状态的匹配度，通过代价最小化选择最优 rollout 路径。在 VPA 基准和自动驾驶 PlannerArena 上达到 SOTA，System-2 相比 System-1 的 Elo 评分提升 27%。

### 方法架构

**视觉编码（Vision Encoding）**：VLWM 使用 Tree of Captions 作为视觉观察的压缩表示。将视频帧分层描述为不同粒度的语义描述——从粗粒度的场景概览到细粒度的目标位置信息，构建树状字幕结构。这种层次化表示使 VLWM 能够以自然语言为媒介进行世界建模，避免了像素级视觉 token 的高维计算。

**知识学习（Knowledge Learning）**：Iterative LLM Self-Refine 是核心训练机制。使用 LLM 对视觉观察进行迭代精炼，提取"当前状态 + 目标状态"的训练目标。视觉观察被转化为 Tree of Captions 后，LLM 反复精炼以提取任务完成程度的判断和需要执行的动作。Dynamics Model 学习从动作和当前状态预测下一个状态，Action Policy 学习基于当前状态和目标选择最优动作。

**可控仿真（Controllable Simulation）**：VLWM 支持双系统推理模式：(1) System-1：快速反应式推理，直接从观察映射到动作；(2) System-2：通过 Dynamics Model 进行多步 rollout 预测未来状态，Critic Model 评估 rollout 状态与目标状态的匹配度，通过代价最小化选择最优 rollout。双系统设计模仿了人类的快慢思维模式。

### 关键实现要点

- **Tree of Captions**：层次化语义描述替代视觉 token 编码
- **LLM Self-Refine 目标提取**：从压缩观察中自动提取训练目标状态
- **Critic Model**：自监督训练，评估预测状态与目标状态的距离
- **Dual-System**：System-1 直觉推理 + System-2 反思规划

### 关键创新点

- **语言驱动的世界建模**：Tree of Captions 表示框架将视觉 token 替换为语言描述，使 LLM 直接成为世界模型
- **Self-Refine 目标提取**：LLM 自动化训练目标提取，消除人工标注
- **System-1/2 双系统**：模型式直觉推理与反思式规划的双模式架构
- **Elo 评分 +27%**：System-2 反思推理相较纯反应式推理的显著提升

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
