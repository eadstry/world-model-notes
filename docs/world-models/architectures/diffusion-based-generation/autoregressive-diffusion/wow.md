---
title: "WoW: Towards a World omniscient World model Through Embodied Interaction"
design: "WoW"
arxiv: https://arxiv.org/abs/2509.22642
github: https://github.com/wow-world-model/wow-world-model
---

# WoW: Towards a World omniscient World model Through Embodied Interaction

::: info 论文信息
- **Design**: WoW
- **论文全称**: WoW: Towards a World omniscient World model Through Embodied Interaction
- **arXiv**: [https://arxiv.org/abs/2509.22642](https://arxiv.org/abs/2509.22642)
- **GitHub**: [https://github.com/wow-world-model/wow-world-model](https://github.com/wow-world-model/wow-world-model)
:::

## 学习笔记

## 核心思想

WoW（PKU/智源, 140 亿参数）基于一个核心假说：**真正的物理直觉必须建立在与真实世界的大量因果丰富交互之上**。人类通过主动与世界互动来发展直觉物理理解——这一Sora 等依赖被动观察的视频模型形成鲜明对比，后者因此难以掌握物理因果性。
WoW a**200 万条机器人交互轨迹*上训练了一个140 亿参数的生成式世界模型。研究揭示了关键发现：模型对物理的理解本质上的*多种可能结果的概率分解*，这导致的*随机不稳定性和物理幻觉**——模型会生成物理上不可能的画面。
为将这一涌现的物理能力导向真实性，团队提出了**SOPHIA**——由视觉-语言模型（VLM）代理评估DiT 生成输出的物理一致性，并通过迭代优化语言指令来引导生成结果向物理真实方向收敛。同时，联合训练的*逆动力学模型**将精炼后的计划转化为可执行的机器人动作，实现了想象力到行动的闭环。WoW 建立的**WoWBench** 基准（专注于物理一致性和因果推理），在人类和自动评估中达成SOTA，展现出强大的物理因果性、碰撞动力学和物体恒存性能力。
## 技术架。
**Vision Encoding（视觉编码）**：DiT 架构处理视觉输入，在 200 万条机器人交互轨迹的规模上学习。
**Knowledge Learning（世界知识学习）**：从大量真实世界交互中学习物理知识。模型对物理的理解表现为概率分布——多种可能结果的分布而非确定性的单一预测。这一发现是理解世界模型物理能力的核心。
**Controllable Simulation（可控推演）**：SOPHIA 系统使用 VLM 代理对生成结果进行物理一致性评估和迭代精炼。逆动力学模型的VLM 输出的语言计划转化为动作，实现从想象到执行的闭环。WoWBench 定义了物理一致性和因果推理的视频评估标准。
## 代码实现要点

- 140 亿参考DiT 世界模型
- 200 万条真实机器人交互轨迹训练- SOPHIA：VLM 代理评估 + 迭代语言指令精炼
- 逆动力学模型：语言计划 的可执行动态 - WoWBench：物理一致性与因果推理视频基准

## 关键创新。
- 大规模真实机器人交互作为物理直觉的基础
- 揭示世界模型的物理理解是概率分布（物理幻觉的根源代- SOPHIA：VLM 代理引导生成向物理真实收集- 逆动力学模型闭合想象到行动的闭环
- WoWBench：专注物理一致性的全新视频评估基准

## 代表性结。
- WoWBench 物理一致性和因果推理 SOTA
- 强大的物理因果性、碰撞动力学和物体恒存中- VLM 引导的生成精炼有效减少物理幻觉- 200 万条真实交互轨迹驱动


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
