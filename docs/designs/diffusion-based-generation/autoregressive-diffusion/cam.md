---
title: "Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval"
design: "CaM"
arxiv: https://arxiv.org/abs/2506.03141
website: https://context-as-memory.github.io/
---

# CaM: Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval

::: info 论文信息
- **Design**: CaM
- **论文全称**: Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval
- **arXiv**: [https://arxiv.org/abs/2506.03141](https://arxiv.org/abs/2506.03141)
- **Website**: [https://context-as-memory.github.io/](https://context-as-memory.github.io/)
:::

## 学习笔记

### 核心思想

CaM (Context as Memory) 提出了一种将历史上下文直接作为记忆用于交互式长视频生成的方法，发表于 SIGGRAPH Asia 2025。现有交互式视频生成方法在长时间生成中难以维持场景一致性，根本原因在于对历史上下文的利用不足。CaM 的核心洞察是：将历史帧以原始格式存储为记忆，并在生成未来帧时直接将上下文帧与待预测帧沿帧维度拼接作为条件输入，无需额外控制模块。为解决将所有历史帧纳入计算带来的巨大开销，CaM 提出了 Memory Retrieval 模块——通过判断相机姿态间视场（FOV）重叠来选择真正相关的上下文帧，在不显著丢失信息的前提下大幅减少候选帧数量。该方法甚至在训练时未见过的开放域场景中也能有效泛化。

### 技术架构

**Vision Encoding（视觉编码）**：CaM 采用视频扩散模型作为基础生成骨架，将历史帧和待预测帧拼接在同一批次中处理。关键设计在于：不将历史上下文编码为压缩的隐变量，而是保持原始帧格式作为显式记忆，最大化信息保留。Memory Retrieval 模块通过相机位姿计算 FOV 重叠度进行记忆检索，选择与前向帧视场高度重叠的历史帧作为条件输入。

**Knowledge Learning（知识学习）**：模型通过视频扩散的标准去噪训练方式学习场景动态。训练数据包含带相机姿态标注的交互式遍历视频。CaM 的核心学习目标是让扩散模型学会在给定相关历史上下文的条件下，生成与场景几何一致、时间连贯的未来帧。Memory Retrieval 模块本身不需要额外训练，而是基于几何投影的确定性算法。

**Controllable Simulation（可控仿真）**：CaM 支持交互式长视频生成——用户可通过控制相机移动（平移、旋转、前进/后退）来探索场景。由于记忆检索机制确保了场景重访时的一致性，模型可以生成远长于训练上下文窗的场景遍历视频。该方法展示了世界模型在开放域场景中的场景一致交互式生成能力。

### 代码实现要点

- **记忆存储**：历史帧以原始像素格式存储于记忆缓冲区，不做压缩或特征提取后处理
- **Memory Retrieval**：基于相机位姿的几何投影，计算当前帧 FOV 与历史帧 FOV 的交并比（IoU）进行检索排序
- **条件拼接**：将检索到的上下文帧与噪声帧沿帧维度 `concat`，作为扩散模型的输入
- **训练方式**：标准视频扩散训练流程，记忆检索在推理时执行

### 关键创新点

- **Context as Memory 范式**：首次提出以原始帧格式存储历史上下文作为记忆，无需特征压缩或外部控制模块
- **FOV-based Memory Retrieval**：基于相机视场重叠的几何先验进行记忆检索，高效且无需训练
- **无需额外结构**：条件注入仅通过帧维度拼接实现，模型架构保持简洁
- **开放域泛化**：在训练时未见的场景中仍能有效泛化，体现方法的通用性

### 代表性结果

- 在交互式长视频生成中，场景一致性显著优于现有 SOTA 方法
- Memory Retrieval 大幅减少候选帧数量，同时保持信息完整性
- 发表于 SIGGRAPH Asia 2025
