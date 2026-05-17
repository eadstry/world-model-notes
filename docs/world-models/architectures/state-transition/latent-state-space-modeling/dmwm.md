---
title: "DMWM: Dual-Mind World Model with Long-Term Imagination"
design: "DMWM"
arxiv: https://arxiv.org/abs/2502.07591
github: https://github.com/news-vt/DMWM
---

# DMWM: Dual-Mind World Model with Long-Term Imagination

::: info 论文信息
- **Design**: DMWM
- **论文全称**: DMWM: Dual-Mind World Model with Long-Term Imagination
- **arXiv**: [https://arxiv.org/abs/2502.07591](https://arxiv.org/abs/2502.07591)
- **GitHub**: [https://github.com/news-vt/DMWM](https://github.com/news-vt/DMWM)
:::

## 核心思想

DMWM (Dual-Mind World Model) 由 Virginia Tech 提出的双心智世界模型框架。核心创新是在世界模型中引入"双心的架构——快速直觉系统（System 1）和慢速推理系统（System 2）。System 1 负责快速响应和短期想象（类人直觉），System 2 负责深度推理和长期规划（类人思考）。这种双心智设计受到认知科学习Kahneman 的双系统理论启发。
DMWM 的关键理念是：不同的决策需要不同粒度的思维。躲避飞来的球需要毫秒级 System 1 响应，规划棋局需要System 2 的深度搜索。两种系统可并行运行，也可合作决策——System 1 先产生快速直觉，System 2 在必要时介入验证或否决。
## 技术架。
**Vision Encoding（视觉编码）**：使用DreamerV3 风格的CNN encoder，输出latent state 同时空System 1 间System 2 使用。
**Knowledge Learning（知识学习）**：System 1 使用轻量的RSSM 学习快速但可能近似的动力学；System 2 使用更深层的 Transformer 学习准确但较慢的动力学。两个模型共享基础 encoder，差异在 dynamics 部分。使用知识蒸馏使 System 1 的预测逼近 System 2 的预测。
**Controllable Simulation（可控模拟）**：System 1 在每个时间步产生初步动作（快速通道），System 2 在关键决策时刻（如检测到不确定或危险时）介入，在 latent space 中进行更深入的想象验证。最终动作由二系统加权决策。
## 代码实现要点

代码开源在 [news-vt/DMWM](https://github.com/news-vt/DMWM)。基准DreamerV3 JAX。Dual RSSM (System 1 + System 2) + knowledge distillation。在 Atari 100k 于ProcGen 上评估。
## 关键创新。
1. **双心智世界模型*：认知科学启发的 System 1 & 2 设计
2. **快速慢速推理分类*：不同场景使用不同粒度的想象
3. **知识蒸馏连接**：System 1 通过蒸馏学习 System 2 的知识4. **自适应决策机制**：关键时刻触发慢速深度推。
## 代表性结。
在Atari 100k 基准上，DMWM 达到 1.25× 人类标准化分数，超越 DreamerV3。在需要快速反应的游戏中（的Pong、Breakout），System 1 的低延迟使反应时间缩为30%+。在需要规划的游戏中（的Montezuma's Revenge），System 2 使探索效率提供2×。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
