---
title: "Disentangled World Models: Learning to Transfer Semantic Knowledge from Distracting Videos for Reinforcement Learning"
design: "DisWM"
arxiv: https://arxiv.org/abs/2503.08751
github: https://github.com/qiwang067/DisWM
---

# DisWM: Disentangled World Models: Learning to Transfer Semantic Knowledge from Distracting Videos for Reinforcement Learning

::: info 论文信息
- **Design**: DisWM
- **论文全称**: Disentangled World Models: Learning to Transfer Semantic Knowledge from Distracting Videos for Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2503.08751](https://arxiv.org/abs/2503.08751)
- **GitHub**: [https://github.com/qiwang067/DisWM](https://github.com/qiwang067/DisWM)
:::

## 核心思想

DisWM (Disentangled World Model) 是清华大学提出的解耦世界模型框架。核心创新是在世界模型中实现语义（semantics）和干扰（distraction）的解耦——将观测分解为"与任务相关的语义部分"和"与任务无关的背景干扰部分"。通过这种解耦，agent 可以将在一个环境中学到的语义知识迁移到完全不同背景的新环境。

DisWM 解决了世界模型迁移的核心障碍：不同环境中任务语义相同（如"推红色方块"），但视觉背景完全不同（如大理石桌面 vs 木纹桌面）。传统 world model 将语义和背景混在同一个 latent state 中，导致跨域迁移性能崩溃。DisWM 通过显式解耦解决了此问题。

## 技术架构

**Vision Encoding（视觉编码）**：使用分离式编码器：Semantic encoder 提取任务相关特征（物体类别、位置、关系），Background encoder 提取环境上下文特征（纹理、光照、颜色）。解耦通过互信息最小化约束实现。

**Knowledge Learning（知识学习）**：双支路动力学模型：Semantic branch 仅使用语义特征预测未来的语义状态（如物体位置和类别），Background branch 使用背景特征和语义特征共同重建完整的未来图像。关键：语义动力学在跨域迁移中保持不变，仅背景需要适应。

**Controllable Simulation（可控模拟）**：在语义 latent space 中进行 imagination RL。由于语义表示跨域不变，在一个环境中训练的策略可直接迁移到新环境（无需任何微调）。

## 代码实现要点

代码开源在 [qiwang067/DisWM](https://github.com/qiwang067/DisWM)。基于 DreamerV3 + mutual information minimization。在 ProcGen 和 Distracting Control Suite 上评估。

## 关键创新点

1. **语义-背景解耦**：在世界模型中分离语义和视觉干扰
2. **跨域零样本迁移**：语义知识无需微调即可泛化
3. **互信息最小化**：约束语义和背景特征的独立性
4. **双支路动力学**：语义 predict + 背景 reconstruct

## 代表性结果

在 Distracting Control Suite 上（标准 DMC 加各种视觉干扰），DisWM 的零样本迁移成功率比 DreamerV3 高 50%+（如从大理石桌迁移到彩色斑纹桌面）。在 ProcGen 的泛化测试（未见过的关卡视觉风格）中，DisWM 的表现下降不到 15%，而 DreamerV3 下降 40%+。
