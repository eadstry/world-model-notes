---
title: "WHALE: A World Model for Embodied Decision-Making"
design: "WHALE"
arxiv: https://arxiv.org/abs/2411.05619
---

# WHALE: A World Model for Embodied Decision-Making

## 学习笔记

### 核心思想

WHALE（World model for embOdied decision-making）旨在构建面向具身决策的强化学习世界模型，解决模型在分布外（OOD）场景下需要可靠模拟、以及需要可靠不确定性估计两大挑战。

WHALE 提出了两个关键技术创新：(1) 行为条件化（behavior-conditioning）——解决策略分布偏移问题，即模型误差累积的主要来源之一；(2) 回溯展开（retracing-rollout）——在不需要模型集成（ensembles）的情况下进行高效不确定性估计。这两种技术是通用的，可与任何模型架构结合。WHALE 基于 Whale-ST（空间-时间 Transformer）和 Whale-X（414M 参数，在 970K Open X-Embodiment 轨迹上训练）实现了大规模世界模型。

### 架构设计

- **Vision Encoding（视觉编码）**：Whale-ST 使用空间-时间 Transformer 进行视觉编码。时间 Transformer 同时处理空间维度（图像 patch）和时间维度（帧序列），通过注意力机制建模帧间视觉对应关系。
- **Knowledge Learning（知识学习）**：WHALE 的方法构建在两个关键技术之上：(1) 行为条件化——训练时将模型自身策略作为额外输入，使模型适应不同策略分布，减少策略偏移导致的仿真崩溃；(2) 回溯展开——将 rollout 生成的轨迹进行回溯重采样，通过比较原始预测和回溯重采样后的差异来估计不确定性。Whale-X 在 OX 的 970K 轨迹上进行了大规模预训练。
- **Controllable Simulation（可控模拟）**：模拟通过自回归方式控制模拟：输入历史观测和当前动作，自回归预测下一观测和奖励。不确定性估计使智能体可以主动规避模型不可信的区域进行决策。Whale-X 展示了对新物体和场景的有效泛化。

### 关键创新

- **行为条件化**：解决世界模型中策略分布偏移的关键技术。
- **回溯展开不确定性估计**：无需 ensemble 的高效不确定性估计方法。
- **通用性**：两种技术适用于任何模型架构。
- **Whale-X 大规模预训练**：414M 参数，970K OX 轨迹预训练。

### 实验结果要点

- 在模型误差和策略价值估计准确率及视频生成质量方面取得显著提升。
- 不确定性估计更安全可靠，显著增强了基于模型的策略优化。
- Whale-X 在多种任务上展示了可扩展性和对新物体的泛化能力。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
