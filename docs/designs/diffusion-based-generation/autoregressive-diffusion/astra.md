---
title: "Astra: General Interactive World Model with Autoregressive Denoising"
design: "Astra"
arxiv: https://arxiv.org/abs/2512.08931
github: https://github.com/EternalEvan/Astra
website: https://eternalevan.github.io/Astra-project/
---

# Astra: General Interactive World Model with Autoregressive Denoising

::: info 论文信息
- **Design**: Astra
- **论文全称**: Astra: General Interactive World Model with Autoregressive Denoising
- **arXiv**: [https://arxiv.org/abs/2512.08931](https://arxiv.org/abs/2512.08931)
- **GitHub**: [https://github.com/EternalEvan/Astra](https://github.com/EternalEvan/Astra)
- **Website**: [https://eternalevan.github.io/Astra-project/](https://eternalevan.github.io/Astra-project/)
:::

## 学习笔记

## 核心思想

Astra（ICLR 2026）由清华大学和美团联合提出，是一个通用的交互式世界模型，旨在为多种现实世界场景（自动驾驶、机器人抓取等）生成具有精确动作交互的未来预测。该工作弥补了视频扩散模型在长程交互预测方面的不足，特别是在通用场景和多样化动作形式上的空白。

Astra的核心架构创新是自回归去噪架构（Autoregressive Denoising），使用时序因果注意力聚合历史观测并支持流式输出。与传统的一次性生成整个视频不同，自回归去噪逐帧预测未来，使其能够处理无限长的交互序列。

为解决历史帧过度依赖问题，Astra提出噪声增强历史记忆（Noise-Augmented History Memory）——向历史帧注入适量噪声以平衡响应性和时序连贯性。对于精确动作控制，引入动作感知适配器（Action-Aware Adapter）和混合动作专家（Mixture of Action Experts），动态路由异构动作模态，增强跨任务的通用性。

## 技术架构

**Vision Encoding（视觉编码）**：采用扩散Transformer（DiT）作为骨干，使用视频VAE编码视觉帧到潜在空间。时序因果注意力机制确保模型只看到过去帧的信息，实现因果预测。

**Knowledge Learning（世界知识学习）**：自回归去噪架构在每个时间步对当前帧进行扩散去噪，以上一帧的去噪结果和动作为条件。噪声增强历史记忆通过向历史潜在表示注入适量噪声，防止模型过度依赖历史帧的细节。混合动作专家根据动作类型（相机运动、机器人关节角等）动态选择不同的条件注入路径。

**Controllable Simulation（可控推演）**：动作感知适配器将异构动作信号直接注入扩散去噪过程。混合动作专家模块使单一模型能够处理多种动作模态——探索（相机运动）、操作（机器人关节运动）和相机控制。自回归流式输出支持实时交互式世界预测。

## 代码实现要点

- 基于扩散Transformer的自回归去噪架构
- 时序因果注意力实现流式预测
- 噪声增强历史记忆：向历史帧添加噪声以防止过度依赖
- 动作感知适配器：将异构动作注入去噪过程
- 混合动作专家：动态路由不同动作类型
- 开源代码（ICLR 2026），支持自动驾驶和机器人抓取等场景

## 关键创新点

- 自回归去噪架构：首次在通用世界模型中采用自回归去噪范式
- 噪声增强历史记忆：平衡响应性与时序连贯性
- 动作感知适配器：精确动作信号注入机制
- 混合动作专家：动态路由异构动作模态提升通用性
- 覆盖自动驾驶、机器人操作等多种真实世界场景
- ICLR 2026接收

## 代表性结果

- 多个数据集上在保真度、长程预测和动作对齐方面超越SOTA
- 跨场景通用性：自动驾驶+机器人操作统一建模
- 长期视频预测的稳定性和一致性
- 混合动作专家有效提升异构动作的处理能力
