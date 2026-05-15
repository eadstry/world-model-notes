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

DMWM (Dual-Mind World Model) 是 Virginia Tech 提出的双心智世界模型框架。核心创新是在世界模型中引入"双心智"架构——快速直觉系统（System 1）和慢速推理系统（System 2）。System 1 负责快速响应和短期想象（类人直觉），System 2 负责深度推理和长期规划（类人思考）。这种双心智设计受到认知科学中 Kahneman 的双系统理论启发。

DMWM 的关键理念是：不同的决策需要不同粒度的思维。躲避飞来的球需要毫秒级 System 1 响应，规划棋局需要 System 2 的深度搜索。两种系统可并行运行，也可合作决策——System 1 先产生快速直觉，System 2 在必要时介入验证或否决。

## 技术架构

**Vision Encoding（视觉编码）**：使用 DreamerV3 风格的 CNN encoder，输出 latent state 同时供 System 1 和 System 2 使用。

**Knowledge Learning（知识学习）**：System 1 使用轻量级 RSSM 学习快速但可能近似的动力学；System 2 使用更深层的 Transformer 学习准确但较慢的动力学。两个模型共享基础 encoder，差异在 dynamics 部分。使用知识蒸馏使 System 1 的预测逼近 System 2 的预测。

**Controllable Simulation（可控模拟）**：System 1 在每个时间步产生初步动作（快速通道），System 2 在关键决策时刻（如检测到不确定或危险时）介入，在 latent space 中进行更深入的想象验证。最终动作由二系统加权决策。

## 代码实现要点

代码开源在 [news-vt/DMWM](https://github.com/news-vt/DMWM)。基于 DreamerV3 JAX。Dual RSSM (System 1 + System 2) + knowledge distillation。在 Atari 100k 和 ProcGen 上评估。

## 关键创新点

1. **双心智世界模型**：认知科学启发的 System 1 & 2 设计
2. **快速-慢速推理分工**：不同场景使用不同粒度的想象
3. **知识蒸馏连接**：System 1 通过蒸馏学习 System 2 的知识
4. **自适应决策机制**：关键时刻触发慢速深度推理

## 代表性结果

在 Atari 100k 基准上，DMWM 达到 1.25× 人类标准化分数，超越 DreamerV3。在需要快速反应的游戏中（如 Pong、Breakout），System 1 的低延迟使反应时间缩短 30%+。在需要规划的游戏中（如 Montezuma's Revenge），System 2 使探索效率提升 2×。
