---
title: "PAN: A World Model for General, Interactable, and Long-Horizon World Simulation"
design: "PAN"
arxiv: https://arxiv.org/abs/2511.09057
website: https://ifm.mbzuai.ac.ae/pan/
---

# PAN: A World Model for General, Interactable, and Long-Horizon World Simulation

::: info 论文信息
- **Design**: PAN
- **论文全称**: PAN: A World Model for General, Interactable, and Long-Horizon World Simulation
- **arXiv**: [https://arxiv.org/abs/2511.09057](https://arxiv.org/abs/2511.09057)
- **Website**: [https://ifm.mbzuai.ac.ae/pan/](https://ifm.mbzuai.ac.ae/pan/)
:::

## 学习笔记

## 核心思想

PAN由MBZUAI基础模型研究所（Institute of Foundation Models）提出，代表了一种全新的世界模型设计哲学：通过大语言模型（LLM）作为潜在空间推理骨干，结合视频扩散解码器作为视觉渲染引擎，实现"想象"与"现实"的统一。这种Generative Latent Prediction（GLP）架构将世界建模从纯粹的像素预测提升到语义理解的层次。

PAN的核心创新在于利用LLM的广泛文本知识作为世界动力学的基础，使得动作条件可以用自然语言指定，而不局限于低层控制信号（如相机的Δx,Δy）。自回归潜在动力学骨干在语义空间中推演未来世界状态，视频扩散解码器将这些语义表示转化为逼真的视觉观测。

GLP架构的精妙之处在于实现了潜在空间推理（Imagination）和可实现世界动力学（Reality）的统一。LLM在潜在空间中执行"思考"，利用其大规模文本训练获得的常识和物理知识；扩散解码器确保"思考"的结果能被视觉化为连贯、真实的世界观。这种设计在开放域、动作条件的长时间仿真中展现了强泛化能力。

## 技术架构

**Vision Encoding（视觉编码）**：PAN使用视频编码器将历史观测编码为LLM可理解的潜在token，作为自回归动力学骨干的输入。视觉信息被转化为与LLM潜在空间兼容的表示。

**Knowledge Learning（世界知识学习）**：GLP架构的核心是自回归潜在动力学骨干（基于LLM），在语义潜在空间中预测未来世界状态。LLM利用其大规模预训练获得的世界知识和常识推理能力来模拟场景动态。视频扩散解码器作为独立的视觉渲染模块，将潜在状态重建为高质量、时序连贯的视频帧。

**Controllable Simulation（可控推演）**：自然语言动作描述作为条件注入LLM动力学骨干，使模型能够理解高层语义指令（如"向右转并加速"）。跨域大规模视频-动作对训练使模型支持开放域的动作条件仿真。LLM的上下文理解能力支持长程动力学连贯性。

## 代码实现要点

- GLP架构：LLM自回归潜在动力学骨干 + 视频扩散解码器
- LLM在潜在空间执行语义级世界状态预测
- 自然语言动作描述作为高层控制信号
- 跨域大规模视频-动作对预训练
- 视频扩散解码器独立优化视觉渲染质量
- 来自MBZUAI基础模型研究所

## 关键创新点

- Generative Latent Prediction (GLP)：LLM语义推理+扩散视觉渲染的统一架构
- 自然语言动作条件：突破传统低层控制信号的限制
- 想象与现实的统一：LLM的符号推理能力与扩散模型的视觉生成能力结合
- 开放域通用性：大规模跨域训练支持多样场景和交互
- 长程语义连贯性：LLM的序列建模能力支持超长视野预测

## 代表性结果

- 动作条件世界仿真性能显著超越其他视频生成器和世界模型
- 长程预测保持语义和视觉连贯性
- 开放域泛化能力在未见场景中展现鲁棒性
- 仿真推理（simulative reasoning）的定性验证
