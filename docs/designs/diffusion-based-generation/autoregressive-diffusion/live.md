---
title: "LIVE: Long-horizon Interactive Video World Modeling"
design: "LIVE"
arxiv: https://arxiv.org/abs/2602.03747
github: https://github.com/Junchao-cs/LIVE
---

# LIVE: Long-horizon Interactive Video World Modeling

::: info 论文信息
- **Design**: LIVE
- **论文全称**: LIVE: Long-horizon Interactive Video World Modeling
- **arXiv**: [https://arxiv.org/abs/2602.03747](https://arxiv.org/abs/2602.03747)
- **GitHub**: [https://github.com/Junchao-cs/LIVE](https://github.com/Junchao-cs/LIVE)
:::

## 学习笔记

## 核心思想

LIVE（Long-horizon Interactive Video World modEl）针对自回归视频世界模型的核心挑战——长程预测中的误差累积问题——提出了一个全新的解决方案。传统方法在短期预测中表现良好，但随着预测步数增加，小误差逐步累积导致画面发散。已有方法引入教师模型和序列级分布匹配来缓解，但计算成本高且无法防止训练视野外的误差传播。

LIVE的核心创新是提出循环一致性目标（Cycle-Consistency Objective）来强制有界误差累积：模型先从真实帧进行前向推演，然后应用反向生成过程重建初始状态，最后在重建的终端状态上计算扩散损失。这种双向约束显式限制了长程误差的传播，完全消除了对教师蒸馏的依赖。

此外，LIVE提供了一个统一视角来涵盖不同的世界模型训练方法，并引入渐进式训练课程策略来稳定长程训练过程。实验表明LIVE在长程基准上达到了最优性能，能够生成远超训练推演长度的高质量稳定视频。

## 技术架构

**Vision Encoding（视觉编码）**：LIVE采用视频扩散模型的编码器将视觉观测编码到潜在空间。输入包括真实帧（ground-truth frames）和动作信息，作为前向推演的起点。

**Knowledge Learning（世界知识学习）**：核心是循环一致性训练框架：(1)从真实帧出发，以动作条件进行前向自回归推演；(2)将终端帧作为起点，以逆动作条件进行反向生成；(3)在重建的初始状态上计算扩散损失。这个前向-反向循环显式约束了长程误差的有界性。渐进式训练课程逐步增加推演长度，避免直接训练长序列的不稳定。

**Controllable Simulation（可控推演）**：LIVE在推理时仅需前向推演，无需额外计算。由于循环一致性训练确保了长程稳定性，模型可以在远超训练视野的长度上保持稳定生成。动作条件信号控制生成方向，支持交互式世界探索。

## 代码实现要点

- 基于视频扩散模型的自回归生成框架
- 循环一致性训练：前向推演→反向生成→初始状态重建→扩散损失计算
- 渐进式训练课程：逐步增加推演长度以稳定训练
- 统一视角涵盖不同训练方法（教师蒸馏、分布匹配等）
- 不依赖教师模型推理，计算效率更高

## 关键创新点

- 循环一致性目标：前向→反向的闭环约束显式限制长程误差累积
- 完全消除教师模型依赖：无需蒸馏即可实现长程稳定生成
- 统一理论视角：将已有方法纳入统一框架分析
- 渐进式训练课程：稳定长序列训练过程
- 超训练视野泛化：生成远超训练推演长度的稳定视频

## 代表性结果

- 长程基准上达到SOTA性能
- 训练视野外的稳定视频生成能力
- 高质量视觉输出和精确的动作跟随
- 相比教师蒸馏方法计算成本更低
