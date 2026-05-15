---
title: "From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction"
design: "PWM"
arxiv: https://arxiv.org/abs/2510.19654
github: https://github.com/6550Zhao/Policy-World-Model
---

# PWM: From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction

::: info 论文信息
- **Design**: PWM
- **论文全称**: From Forecasting to Planning: Policy World Model for Collaborative State-Action Prediction
- **arXiv**: [https://arxiv.org/abs/2510.19654](https://arxiv.org/abs/2510.19654)
- **GitHub**: [https://github.com/6550Zhao/Policy-World-Model](https://github.com/6550Zhao/Policy-World-Model)
:::

## 学习笔记

## 核心思想

PWM（Policy World Model）发表于 NeurIPS 2025，提出了一种将世界建模与轨迹规划统一于一个框架中的新驾驶范式。当前的驾驶世界模型大多将世界模拟和路径规划分离——世界模型用于生成未来视觉状态（仿真），轨迹规划器单独工作（控制）——两者之间缺乏有效的协同。PWM 的核心创新是**协同状态-动作预测**：模型同时预测未来的环境状态（世界模拟）和自车的驾驶动作（轨迹规划），并通过**无动作未来状态预演（action-free future state forecasting）**机制，让规划器在决策前"预览"不执行任何动作时环境会如何变化，从而实现类似人类驾驶员的预判性感知。

PWM 的第二个关键技术贡献是**动态增强并行 token 生成机制**，由上下文引导 tokenizer（context-guided tokenizer）和自适应动态焦点损失（adaptive dynamic focal loss）构成。这些组件使得模型在使用仅前置摄像头输入的情况下，就在性能上匹配甚至超越了依赖多视角和多模态输入的 SOTA 方法——表明高效的架构设计可以部分替代昂贵的传感器配置。

## 技术架构

**Vision Encoding（视觉编码）**：PWM 使用上下文引导 tokenizer（Context-Guided Tokenizer）将前置摄像头图像编码为 token。与传统 VQ-VAE 不同，上下文引导 tokenizer 在编码过程中融入了当前驾驶上下文信息（如车速、历史路径），使得编码后的 token 不仅包含视觉内容，还编码了运动状态信息。这为后续的协同状态-动作预测提供了统一的表示基础。值得注意的是，PWM 仅使用单目前置摄像头输入——相比多视角方案大幅降低了传感器需求和计算开销。

**Knowledge Learning（知识学习）**：PWM 的学习包含两个核心任务：(1) **协同状态-动作预测**——给定历史序列（视觉 token + 动作 token），同时预测未来的视觉 token 和动作 token。两个预测共享同一个 Transformer 主干，通过交叉注意力实现信息交互：视觉预测提供"环境会如何变化"的信息帮助规划，动作预测提供"我会如何响应"的信息帮助世界模拟。(2) **无动作状态预演**——额外训练模型在"不提供未来动作"的条件下预测环境状态演变。这个机制赋予模型类似人类驾驶员的"预判"能力——先看看如果什么都不做会发生什么，再据此做决策。

**Controllable Simulation（可控模拟）**：PWM 的另一个创新是**动态增强并行 token 生成**——传统自回归生成是逐 token 生成的（慢），PWM 通过并行解码策略在保持时序因果性的同时实现 batch token 生成。自适应动态焦点损失使模型在训练中自动加大对"难预测区域"（如快速移动的车辆、突然出现的行人）的关注力度，从而提升在这些关键区域的预测质量。

## 代码实现要点

代码将在 GitHub 开源（6550Zhao/Policy-World-Model）。核心架构：(1) 上下文引导 tokenizer（CNN + Transformer 编码器）；(2) 统一预测 Transformer 主干；(3) 并行 token 生成解码器；(4) 自适应动态焦点损失模块。训练数据使用单目前置摄像头的驾驶数据（如 NuScenes、Waymo）。关键训练技巧：动态焦点损失的权重根据像素级预测误差自适应调整（高误差区域权重更大），上下文引导 tokenizer 的训练分为 VQ-VAE 预训练和上下文条件微调两个阶段。

## 关键创新点

- **协同状态-动作预测**：首次将世界模拟和轨迹规划整合为统一的联合预测框架，实现双向信息流动
- **无动作状态预演**：赋予模型预判性感知能力——在执行动作前先预测不动作的后果
- **仅用单目前置摄像头**：通过高效架构设计匹配甚至超越依赖多视角+多模态的 SOTA 方法
- **动态增强并行生成**：并行 token 生成 + 自适应焦点损失，同时提升效率和关键区域预测质量
- **NeurIPS 2025**：经顶级 ML 会议认可，代表了统一感知-规划框架的新方向

## 代表性结果

在使用仅前置摄像头输入的情况下，PWM 在轨迹规划精度（L2 距离）、碰撞率和驾驶舒适度等指标上匹配或超越了使用多视角+多模态输入的 SOTA 方法。协同预测的消融实验显示，移除状态预测分支（变为纯规划器）或移除动作预测分支（变为纯世界模拟器）均导致性能显著下降，验证了联合框架的协同效应。无动作预演机制的消融显示，该机制在高交互密度场景（如拥堵路口、多车并线）中对碰撞率的降低贡献最大。并行 token 生成使推理速度相比逐 token 自回归提升了 3-5 倍。
