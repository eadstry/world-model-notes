---
title: "WorldPack: Compressed Memory Improves Spatial Consistency in Video World Modeling"
design: "WorldPack"
arxiv: https://arxiv.org/abs/2512.02473
---

# WorldPack: Compressed Memory Improves Spatial Consistency in Video World Modeling

::: info 论文信息
- **Design**: WorldPack
- **论文全称**: WorldPack: Compressed Memory Improves Spatial Consistency in Video World Modeling
- **arXiv**: [https://arxiv.org/abs/2512.02473](https://arxiv.org/abs/2512.02473)
:::

## 学习笔记

## 核心思想

WorldPack（东京大学 松尾实验室）聚焦视频世界模型的**空间一致性**这一长期悬而未决的问题。即使最新的 SOTA 模型，在处理长上下文输入时的计算成本也令人望而却步，导致难以维持时间和空间上的连贯性。

WorldPack 的核心贡献是提出了一种**高效压缩记忆**机制，在**更短的上下文长度下**显著提升了长时间生成中的空间一致性、保真度和质量。这一机制包含两个组成部分：(1) **轨迹打包**（trajectory packing）——实现高上下文效率，将历史信息紧凑编码；(2) **记忆检索**（memory retrieval）——在长时 rollout 中维持一致性，支持需要空间推理的长时间生成。

WorldPack 使用 **LoopNav** 基准进行性能评估——这是专门为 Minecraft 环境设计的长期一致性评估基准。WorldPack 在 LoopNav 上显著超越强基线 SOTA 模型，证明了压缩记忆对视频世界建模的关键价值。

## 技术架构

**Vision Encoding（视觉编码）**：视频世界模型以过去观测和导航动作为条件生成未来视觉帧。压缩记忆机制降低了编码历史信息所需的上下文长度，减少了计算开销。

**Knowledge Learning（世界知识学习）**：轨迹打包将历史轨迹信息高效压缩编码，在有限的上下文窗口内保留关键的空间布局和视觉内容。记忆检索在需要时从压缩记忆中提取相关信息，支持长序列中的空间推理。

**Controllable Simulation（可控推演）**：导航动作驱动生成，压缩记忆在整个长时 rollout 中提供历史一致性锚点。LoopNav 基准要求模型在闭环导航中维持空间一致性——回到先前位置时应看到相同的场景。

## 代码实现要点

- 压缩记忆：轨迹打包 + 记忆检索
- 轨迹打包：高效上下文压缩编码
- 记忆检索：按需提取相关历史信息
- LoopNav 基准：Minecraft 长期一致性评估
- 东京大学 松尾实验室

## 关键创新点

- 压缩记忆以低上下文长度实现高空间一致性
- 轨迹打包将历史信息高效压缩
- 记忆检索支持长序列空间推理
- LoopNav 基准：专门评估长期一致性的 Minecraft 测试
- 显著超越强 SOTA 模型的长期一致性

## 代表性结果

- LoopNav 基准上显著超越 SOTA 模型
- 以更短上下文长度实现更优的空间一致性
- 长时生成中的保真度和质量同步提升
