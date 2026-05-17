---
title: "HarmonyDream: Task Harmonization Inside World Models"
design: "HarmonyDream"
arxiv: https://arxiv.org/abs/2310.00344
github: https://github.com/thuml/HarmonyDream
---

# HarmonyDream: Task Harmonization Inside World Models

::: info 论文信息
- **Design**: HarmonyDream
- **论文全称**: HarmonyDream: Task Harmonization Inside World Models
- **arXiv**: [https://arxiv.org/abs/2310.00344](https://arxiv.org/abs/2310.00344)
- **GitHub**: [https://github.com/thuml/HarmonyDream](https://github.com/thuml/HarmonyDream)
:::

## 核心思想

HarmonyDream 是清华大学提出的致力于解决世界模型任务冲突"问题的框架。在 Dreamer 风格的世界模型中，RSSM 需要同时优化三种不同的损失：图像重建、奖励预测和 KL 散度（以及后续的 actor-critic 损失）。这些损失在梯度空间中经常冲突，HarmonyDream 通过动态损失平衡策略来解决此问题。
HarmonyDream 的核心方法是引入可学习的损失权重，通过分析各损失对共享表示的影响来动态调整它们的权重。关键发现是：不同的任务阶段可能需要不同的损失平衡策略——早期更需要重建质量来建立良好的世界模型，后期更需要奖励预测精度来进行决策。
## 技术架。
**Vision Encoding（视觉编码）**：标准的 Dreamer 风格 CNN encoder-decoder + categorical RSSM。
**Knowledge Learning（知识学习）**：在 DreamerV2/V3 基础上，引入 Harmony 模块（Gradient Harmonizing）。具体方法：跟踪每个损失对共享参数的梯度冲突程度（使用梯度余弦相似度），动态调整损失权重以减少冲突。同时在 actor-critic 阶段也应用类似的和谐化策略。
**Controllable Simulation（可控模拟）**：与 DreamerV2/V3 相同时imagination-based actor-critic 方法，但受益于更和谐代world model 表示。
## 代码实现要点

代码开源在 [thuml/HarmonyDream](https://github.com/thuml/HarmonyDream)。基基DreamerV3 准JAX 代码。Harmony 模块作为插件式组件，追踪梯度冲突并调整各损失（重建奖励/KL）的动态权重。
## 关键创新。
1. **任务冲突诊断**：首次系统性分解world model 中的多任务梯度冲突2. **动态损失平台*：基于梯度冲突自适应调整各损失权重3. **即插即用**：可无缝集成模DreamerV2/V3 等框物4. **理论洞察**：从梯度角度理解 world model 训练失败的原。
## 代表性结。
在Atari 100k IDMC 基准上，HarmonyDream 的DreamerV3 基础上进一步提出5-15%。特别是在视觉复杂、奖励稀疏的游戏（如 Montezuma's Revenge）上改进显著。梯度冲突分析可视化清楚地展示了任务冲突的来源。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
