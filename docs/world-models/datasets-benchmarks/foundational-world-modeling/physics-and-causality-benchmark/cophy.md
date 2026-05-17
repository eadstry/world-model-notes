---
title: "CoPhy: Counterfactual Learning of Physical Dynamics"
design: "CoPhy"
arxiv: https://arxiv.org/abs/1909.12000
github: https://github.com/fabienbaradel/cophy
---

# CoPhy: Counterfactual Learning of Physical Dynamics

::: info 论文信息
- **Design**: CoPhy
- **论文全称**: CoPhy: Counterfactual Learning of Physical Dynamics
- **arXiv**: [https://arxiv.org/abs/1909.12000](https://arxiv.org/abs/1909.12000)
- **GitHub**: [https://github.com/fabienbaradel/cophy](https://github.com/fabienbaradel/cophy)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/1909.12000](https://arxiv.org/abs/1909.12000)
- **GitHub**: [https://github.com/fabienbaradel/cophy](https://github.com/fabienbaradel/cophy)

## 简介
CoPhy（Counterfactual Learning of Physical Dynamics）提出了一个具有前瞻性的问题：反事实物理学习——从视觉输入学习物体力学的因果关系（发表于 ICLR 2020 Spotlight）。该工作开发了 CoPhy 基准来评估模型在合成3D环境中进行因果物理推理的能力。具体而言，在观察一个机械实验（如方块塔倒塌、弹跳球或碰撞物体）之后，模型需要学习预测对其初始条件进行任意干预（如移动场景中的一个物体）会对结果产生何种影响。

CoPhy 的核心创新在于反事实推理框架：给定被改变的过去，模型需要在没有任何监督的情况下，端到端地学习一个混淆变量的潜在表征来预测替代未来。与直接的前馈视频预测基线相比，CoPhy 表明观察替代经验使网络能够捕获环境的潜在物理属性，这带来了显著更准确的预测，达到了超人级别的性能。这一发现对世界模型研究具有深远影响——它表明仅靠大量观察数据并不足够，反事实推理是获得真正物理理解的关键。

## 关键特征
- **数据规模**: 合成3D环境，多种力学实验（倒塌、弹跳、碰撞）
- **数据模态**: 3D物理模拟视频
- **主要指标**: 反事实预测准确性
- **领域**: 因果推理、物理动力学

## 与世界模型的关系
CoPhy 首次将反事实推理引入视觉世界模型（VWM）评估，这一范式对VWM至关重要。世界模型的核心价值在于回答"如果我采取不同行动会发生什么"这类反事实问题。CoPhy 表明，通过观察替代经验（而非简单拟合观测数据），VWM可以学习到环境的潜在物理属性。这种方法论为训练能够进行因果推理和假设分析的世界模型提供了重要启示，远超单纯的视频预测范式。

## 代表性用途
- CoPhy (Baradel et al., ICLR 2020 Spotlight) - 原始论文，提出反事实物理学习
- VWM的因果推理能力评估
- 基于反事实学习的物理模拟训练
