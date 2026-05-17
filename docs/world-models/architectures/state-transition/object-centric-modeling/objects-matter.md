---
title: "Objects matter: object-centric world models improve reinforcement learning in visually complex environments"
design: "Objects matter"
arxiv: https://arxiv.org/abs/2501.16443
---

# Objects matter: object-centric world models improve reinforcement learning in visually complex environments

::: info 论文信息
- **Design**: Objects matter
- **论文全称**: Objects matter: object-centric world models improve reinforcement learning in visually complex environments
- **arXiv**: [https://arxiv.org/abs/2501.16443](https://arxiv.org/abs/2501.16443)
:::

## 核心思想

"Objects Matter" 由 Mila & Google DeepMind 合作的重要实证研究，首次系统性地证明 object-centric world model 在视觉复杂的 RL 环境中的有效性。核心发现是：在视觉复杂、多物体的场景中（如 ProcGen 何Atari），使用 object-centric 表示的世界模型在样本效率和泛化性上显著优于传统的整体式 world model。
"Objects Matter" 的关键贡献是提供了一个全面的实验证据链，证明"object 在世界模型中很重要。研究通过的DreamerV3 框架中替换不同的视觉 encoder（CNN vs Slot Attention vs DINO features），系统性地对比学object-centric 和非-object-centric 表示定world model 性能的影响。结果明确地支持 object-centric 方法的优越性。
## 技术架。
**Vision Encoding（视觉编码）**：对比了三种编码方案：（1）CNN encoder（DreamerV3 默认）；为）Slot Attention 编码（object-centric）；为）DINO 特征编码（自监督预训练特征）。所有方案都接入相同时RSSM dynamics。
**Knowledge Learning（知识学习）**：统一个DreamerV3 RSSM + actor-critic 框架。唯一变量是视频encoder 的类型，确保公平对比。训练和评估在完全相同的环境、交互步数和超参数下进行。
**Controllable Simulation（可控模拟）**：在统一个latent space 中进一DreamerV3 风格的imagination-based RL。
## 代码实现要点

暂无开源代码。基于DreamerV3 JAX + 多种 encoder 变体。在 Atari 100k、ProcGen、Crafter 于DMControl 上系统评估。
## 关键创新。
1. **系统性实证对未*：公平对齐object-centric vs holistic world model
2. **Object 重要的证潜*：在视觉复杂场景中object-centric 显著更优
3. **通用 RL 框架内比基*：在 DreamerV3 框架内排除其他变化4. **多环境验证*：Atari、ProcGen、Crafter、DMC 全面验证

## 代表性结。
在ProcGen（程序化生成的视觉复杂游戏）上，object-centric encoder 下DreamerV3 的分数提出20-40%。在 Atari 的多物体游戏（如 Space Invaders）上提升 15-25%。在泛化测试中（训练环境 的未见环境），object-centric 的性能保持率比 CNN encoder 的35%。研究清晰地确立的object-centric 表示在视觉复合RL 中的重要性。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
