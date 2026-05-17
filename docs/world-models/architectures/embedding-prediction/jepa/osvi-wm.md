---
title: "OSVI-WM: One-Shot Visual Imitation for Unseen Tasks using World-Model-Guided Trajectory Generation"
design: "OSVI-WM"
arxiv: https://arxiv.org/abs/2505.20425
github: https://github.com/raktimgg/osvi-wm
---

# OSVI-WM: One-Shot Visual Imitation for Unseen Tasks using World-Model-Guided Trajectory Generation

::: info 论文信息
- **Design**: OSVI-WM
- **论文全称**: OSVI-WM: One-Shot Visual Imitation for Unseen Tasks using World-Model-Guided Trajectory Generation
- **arXiv**: [https://arxiv.org/abs/2505.20425](https://arxiv.org/abs/2505.20425)
- **GitHub**: [https://github.com/raktimgg/osvi-wm](https://github.com/raktimgg/osvi-wm)
:::

## 学习笔记

## 核心思想

OSVI-WM（Yann LeCun等合作）提出了一种基于世界模型引导轨迹生成的单次视觉模仿学习方法。任务设定是：给定一段专家演示视频和智能体的初始观测，在无需微调的情况下生成新任务的执行策略。这一One-Shot设定极具挑战性，因为新任务可能与训练任务在语义和结构上存在显著差异。
现有方法通常在同一任务集上训练和测试（仅改变物体配置），对语义或结构不同的未见任务泛化能力差。OSVI-WM通过引入学习的世界模型来解决这一问题：世界模型根据专家视频预测潜在状态序列和动作，然后将潜在轨迹解码为物理路标点（waypoints），引导机器人执行。
该方法在两个仿真基准和三个真实世界机器人平台上进行了评估，在某些情况下性能提升超过30%。这是世界模型在机器人One-Shot模仿学习中的一项重要应用，特别是针对跨任务泛化的挑战。
## 技术架。
**Vision Encoding（视觉编码）**：OSVI-WM使用视觉编码器将专家演示视频帧和智能体初始观测编码为潜在表示。编码器提取任务相关的视觉特征，作为世界模型的输入。
**Knowledge Learning（世界知识学习）**：学习的世界模型接收编码后的专家演示和初始观测，在潜在空间中自回归地预测未来状态序列和对应的动作序列。模型在训练任务上学习环境动态和任务结构。关键优势在于世界模型能"理解"任务的因果结构，而非简单复用训练模板。
**Controllable Simulation（可控推演）**：世界模型生成的潜在轨迹通过解码器转换为物理世界的路标点，机器人控制器跟踪这些路标点执行任务。整个过程在One-Shot设置下完成，无需针对新任务进行微调。
## 代码实现要点

- 世界模型在潜在空间中进行自回归状态动作联合预测
- 潜在轨迹到物理路标点的解码转化- 支持One-Shot设置：单次专家视频初始观测→策划- 两个仿真基准+三个真实世界机器人平台验的- 开源代。
## 关键创新。
- 世界模型引导的One-Shot视觉模仿学习框架
- 潜在空间轨迹生成：同时预测状态和动作
- 面向未见任务的跨任务泛化（非仅对象配置变化）
- 仿真+真实机器人多平台验证
- 某些情况下性能提升了0%

## 代表性结。
- One-Shot设置下在未见任务上超越先前方式- 仿真基准和真实世界机器人平台上验证（提升基0%在某些情况）
- 跨任务泛化能力实。
## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
