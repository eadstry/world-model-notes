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

VLWM (Vision Language World Model) 是一个基于语言的世界模型基础模型，在自然视频上进行训练，解决高层世界模型（能理解和推理具有语义和时间抽象的动作）长期欠发展的挑战。VLWM 的推理流程：给定视觉观察 → 推断整体目标达成情况 → 预测由交织动作和世界状态变化组成的轨迹。关键创新是使用迭代 LLM Self-Refine 机制，以压缩的未来观测（由 Tree of Captions 表示）为条件，提取动作和状态目标。VLWM 同时学习动作策略（Action Policy）和动态模型（Dynamics Model），分别支持反应式 System-1 策略解码和反思式 System-2 规划（通过代价最小化）。代价评估通过自监督训练的 Critic 模型测量假设未来状态与目标状态的语义距离。在 VPA 基准和自定义 PlannerArena 上达到 SOTA，System-2 相比 System-1 的 Elo 分数提升 27%。

### 技术架构

**Vision Encoding（视觉编码）**：VLWM 使用 Tree of Captions 作为视觉观测的压缩表示——对视频帧序列生成多层次纯语言描述树，捕获不同粒度的场景内容（从粗粒度场景类型到细粒度目标位置）。这种纯语言表示使 VLWM 可以作为语言模型进行训练和推理，无需处理视觉 token。

**Knowledge Learning（知识学习）**：Iterative LLM Self-Refine 是核心训练方法——使用 LLM 多次迭代精炼来提取"动作 + 世界状态变化"的训练目标。视觉观测被转换为 Tree of Captions 语言描述，然后 LLM 从中推理出目标实现程度、需要执行的子动作和相应的期望状态变化。Dynamics Model 学习预测动作后的世界状态变化；Action Policy 学习在给定当前状态和目标下选择最优动作。

**Controllable Simulation（可控仿真）**：VLWM 支持双系统规划：(1) System-1——快速反应式策略解码，直接从观测映射到动作；(2) System-2——通过 Dynamics Model 进行多步 rollout 预测未来状态，利用 Critic Model 评估 rollout 状态与目标的语义距离，通过代价最小化选择最优 rollout。这种双系统设计模仿了人类的快慢双思维模式。

### 代码实现要点

- **Tree of Captions**：多层次纯语言描述树，避免视觉 token 复杂性
- **LLM Self-Refine 目标提取**：从压缩观测迭代精炼提取动作和状态目标
- **Critic Model**：自监督训练，评估预测状态与目标状态的语义对齐度
- **Dual-System**：System-1 快速解码 + System-2 反思规划

### 关键创新点

- **纯语言世界建模**：Tree of Captions 表示避开视觉 token，使 LLM 直接成为世界模型
- **Self-Refine 目标提取**：LLM 迭代精炼提取训练目标，无需人工标注
- **System-1/2 双系统**：模仿人类快慢思考的双层规划架构
- **Elo 分数 +27%**：System-2 反思规划相对纯反应式策略的大幅提升
