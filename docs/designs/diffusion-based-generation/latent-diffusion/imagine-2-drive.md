---
title: "Imagine-2-drive: High-fidelity world modeling in carla for autonomous vehicles"
design: "Imagine-2-drive"
arxiv: https://arxiv.org/abs/2411.10171
github: https://github.com/anantagrg/Imagine-2-Drive
---

# Imagine-2-drive: High-fidelity world modeling in carla for autonomous vehicles

::: info 论文信息
- **Design**: Imagine-2-drive
- **论文全称**: Imagine-2-drive: High-fidelity world modeling in carla for autonomous vehicles
- **arXiv**: [https://arxiv.org/abs/2411.10171](https://arxiv.org/abs/2411.10171)
- **GitHub**: [https://github.com/anantagrg/Imagine-2-Drive](https://github.com/anantagrg/Imagine-2-Drive)
:::

## 核心思想

Imagine-2-Drive 是提出的将文本到视频扩散世界模型集成到自动驾驶规划中的方法。核心创新是使用文本描述作为规划器的"想象引导"——LLM 输出驾驶场景的文本描述，世界模型将该文本描述转换为视觉"想象"，规划器在这个视觉想象的基础上进行决策。其中"2"代表从语言到视觉的两步转换过程。

Imagine-2-Drive 的关键洞察是：文本是一种紧凑的、可解释的世界描述方式。让 LLM 用文本"描述期望的未来状态"（如"我车已安全通过路口，行人已过完斑马线"），比直接规划连续的轨迹更高效。这种文本条件是"语言驱动想象"的自然应用。

## 技术架构

**Vision Encoding（视觉编码）**：使用标准 VAE encoder 压缩当前驾驶帧。

**Knowledge Learning（知识学习）**：两阶段框架：（1）LLM（如 GPT-4V）分析当前场景输出文本规划（如"我车应在斑马线前减速让行人先过"）；（2）Text-to-Video Diffusion Model 根据初始帧和文本规划生成未来视觉帧。规划器在生成的未来帧上评估轨迹安全。

**Controllable Simulation（可控模拟）**：LLM 输出文本规划的多个"假设"→Diffusion WM 生成每个假设对应的视觉未来→规划器评估并选择最安全的假设。

## 代码实现要点

暂无开源代码。基于 LLM + Text-to-Video Diffusion Model。在 CARLA 和 nuScenes 上评估。

## 关键创新点

1. **文本引导的可控想象**：LLM 输出文本描述，WM 生成对应视觉
2. **语言作为规划空间**：文本是紧凑可解释的规划表示
3. **多假设规划**：多个文本假设→多个视觉未来→安全决策
4. **LLM + WM 协同**：语言推理和视觉预测的优势结合

## 代表性结果

在 CARLA 的复杂驾驶场景中，Imagine-2-Drive 的安全性提升显著（碰撞率降低 30%），特别是在需要语义理解的场景（如"前方是学校区域需要减速"）中。LLM 的文本规划提供了可解释的决策原因。
