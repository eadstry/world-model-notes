---
title: "WORLDMEM: Long-term Consistent World Simulation with Memory"
design: "WORLDMEM"
arxiv: https://arxiv.org/abs/2504.12369
github: https://github.com/xizaoqu/WorldMem
---

# WORLDMEM: Long-term Consistent World Simulation with Memory

::: info 论文信息
- **Design**: WORLDMEM
- **论文全称**: WORLDMEM: Long-term Consistent World Simulation with Memory
- **arXiv**: [https://arxiv.org/abs/2504.12369](https://arxiv.org/abs/2504.12369)
- **GitHub**: [https://github.com/xizaoqu/WorldMem](https://github.com/xizaoqu/WorldMem)
:::

## 学习笔记

## 核心思想

WorldMem 针对世界模拟的核心痛点——**有限的时间上下文窗口导致长时一致性问题**（尤其是 3D 空间一致性）——提出了基于记忆增强的解决方案。当世界模型需要维护长时间的场景一致性时，传统方法往往因上下文窗口的限制而"遗忘"先前观察到的场景细节。

WorldMem 的核心设计是一个**记忆库**（memory bank），由存储记忆帧和状态信息（位姿、时间戳等）的记忆单元组成。通过**记忆注意力机制**根据状态信息从记忆帧中提取相关信息，即使在显著的视角或时间间隔下，模型也能准确重建先前观察到的场景。

通过将时间戳纳入状态信息，WorldMem 不仅能建模静态世界，还能**捕捉世界随时间的动态演化**——既支持对过去场景的感知（perception），也支持对未来变化的交互（interaction）。在虚拟和真实场景中的大量实验验证了方法的有效性。

## 技术架构

**Vision Encoding（视觉编码）**：记忆帧存储了历史视觉观测，记忆注意力机制根据当前查询的状态（当前位姿、时间戳等）从记忆库中检索相关历史帧内容，将其融合到当前帧的生成中。

**Knowledge Learning（世界知识学习）**：记忆库是核心知识存储——记忆单元包含帧和状态信息（位姿 + 时间戳）。静态世界建模：通过学习不同视角下的场景外观关系，即使在从未见过的视角下也能恢复场景。动态演化建模：时间戳信息使模型理解场景中物体的运动和变化模式。

**Controllable Simulation（可控推演）**：支持在模拟世界中进行感知和交互——模型可以根据新的视角和时间戳条件生成对应的场景视图，同时保持与历史观测的空间一致性。显著的视角或时间间隔下仍能准确重建。

## 代码实现要点

- 记忆库：存储记忆帧 + 状态（位姿、时间戳）
- 记忆注意力机制：根据状态检索相关历史信息
- 支持静态世界和动态演化的统一建模
- 开源在 xizaoqu/WorldMem

## 关键创新点

- 记忆库机制突破世界模型的时间上下文限制
- 记忆注意力根据位姿和时间戳检索相关历史信息
- 同时支持静态场景重建和动态世界演化
- 显著视角/时间间隔下仍能维持一致性
- 统一的感知与交互框架

## 代表性结果

- 在显著视角间隔下准确重建先前观察场景
- 在显著时间间隔下保持长时一致性
- 虚拟和真实场景的大量实验验证
- 支持静态场景和动态演化的双模式建模
