---
title: "PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling"
design: "LongScape"
arxiv: https://arxiv.org/abs/2509.21790
github: https://github.com/tsinghua-fib-lab/Longscape
---

# LongScape: PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling

::: info 论文信息
- **Design**: LongScape
- **论文全称**: PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling
- **arXiv**: [https://arxiv.org/abs/2509.21790](https://arxiv.org/abs/2509.21790)
- **GitHub**: [https://github.com/tsinghua-fib-lab/Longscape](https://github.com/tsinghua-fib-lab/Longscape)
:::

## 学习笔记

### 核心思想

LongScape 是一个面向长时域具身世界模型的混合框架，由清华大学 FIB Lab 提出。现有视频世界模型在长时域生成中面临两难困境：经典扩散方法在多次 rollout 中容易出现时序不一致和视觉漂移；纯自回归方法则往往丢失视觉细节。LongScape 的核心创新是：自适应地在 chunk 内进行扩散去噪（保留视觉质量），在 chunk 间进行自回归因果生成（维持时序一致性）。关键机制是动作引导的变长分块（action-guided variable-length chunking）——根据机器人动作的语义上下文将视频分割为语义完整、连贯的动作块（chunk），而非按固定长度切分。进一步引入 Context-aware Mixture-of-Experts（CMoE），在生成时自适应激活各 chunk 的专门专家，保证高质量视觉输出和无缝块间过渡。该框架专为具身操控数据的生成而设计。

### 技术架构

**Vision Encoding（视觉编码）**：LongScape 采用混合架构，融合两种生成范式各自的优势。Chunk 内使用扩散模型进行高质量视觉生成的去噪过程；Chunk 间使用自回归因果 Transformer 进行时序传递。动作引导的变长分块机制依据机器人操作动作的语义边界（如"抓取"→"移动"→"放置"）自动确定分块边界，确保每个 chunk 对应一个完整的语义动作单元。

**Knowledge Learning（知识学习）**：CMoE（Context-aware Mixture-of-Experts）是 LongScape 的核心学习创新。模型包含多个专门化专家网络，每个专家擅长处理特定类型动作对应的视觉动态。在生成过程中，Context Router 根据当前 chunk 的动作上下文和视觉状态自适应选择并激活最相关的专家组合，确保各 chunk 的生成质量和相邻 chunk 间的平滑过渡。训练数据来自机器人的操控视频序列。

**Controllable Simulation（可控仿真）**：LongScape 针对具身智能场景设计——给定机器人动作序列，模型可以生成长时域的操控视频（rollout），用于训练和评估机器人策略。变长分块机制使模型能灵活适应不同持续时间的动作，CMoE 确保长时间 rollout 中视觉质量不退化、时序不发生漂移。这为具身智能的数据增强和闭环仿真提供了关键能力。

### 代码实现要点

- **变长分块**：根据机器人动作标签（如末端执行器速度变化）自动检测动作边界，动态确定 chunk 长度
- **CMoE**：多个 Diffussion UNet 专家 + Context Router（小网络基于 chunk 特征预测专家权重），实现软路由
- **混合生成流程**：chunk 内执行 N 步扩散去噪 → 输出最后 k 帧传递给下一 chunk 的因果编码器 → 下一 chunk 以此条件进行去噪
- **代码开放**：基于 GitHub 仓库开源

### 关键创新点

- **混合扩散-自回归架构**：chunk 内扩散 + chunk 间自回归，协同两范式优势
- **动作引导变长分块**：基于语义动作边界而非固定帧数的智能视频分割
- **上下文感知 MoE**：为不同动作类型分配专门化专家，自适应激活确保跨块一致性
- **长时域具身世界模型**：稳定生成长时域操控视频 rollout

### 代表性结果

- 在长时域 rollout 中维持稳定、一致的视觉生成
- 变长分块 + CMoE 显著优于固定长度分块的基线方法
