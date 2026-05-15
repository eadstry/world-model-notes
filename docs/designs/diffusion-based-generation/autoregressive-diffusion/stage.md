---
title: "STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation"
design: "STAGE"
arxiv: https://arxiv.org/abs/2506.13138
website: https://4dvlab.github.io/STAGE/
---

# STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation

::: info 论文信息
- **Design**: STAGE
- **论文全称**: STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation
- **arXiv**: [https://arxiv.org/abs/2506.13138](https://arxiv.org/abs/2506.13138)
- **Website**: [https://4dvlab.github.io/STAGE/](https://4dvlab.github.io/STAGE/)
:::

## 学习笔记

### 核心思想

STAGE (Streaming Temporal Attention Generative Engine) 是一个面向长时域驾驶场景仿真的流式自回归世界模型，发表于 IROS 2025。现有自动驾驶世界模型在生成长时域驾驶视频时面临两大核心挑战：时空动态解耦不充分导致的误差累积，以及跨帧特征传播机制受限引发的特征错位。STAGE 通过两个关键设计解决这些问题：(1) 分层时序特征迁移（HTFT）——将时序建模与去噪过程分离，并在帧间迁移去噪特征以增强时序一致性；(2) 多阶段训练策略——将训练划分为三个阶段，通过模型解耦和自回归推理过程模拟，加速收敛并减少误差累积。STAGE 在 NuScenes 数据集上生成了 600 帧高质量驾驶视频，远超现有方法的最大长度。

### 技术架构

**Vision Encoding（视觉编码）**：STAGE 使用视频扩散模型作为视觉编码骨干，将驾驶场景的多视角图像和 BEV 特征作为输入。分层时序特征迁移（HTFT）是核心创新——模型将时序演化过程与扩散去噪过程分别建模：时序模块负责帧间动态传递，去噪模块负责逐帧质量优化，二者通过特征迁移桥接。这种解耦设计避免了传统方法中将时序与去噪耦合导致的误差放大问题。

**Knowledge Learning（知识学习）**：STAGE 采用三阶段训练策略。第一阶段训练独立帧生成能力（模型解耦）；第二阶段引入时序模块，模拟自回归推理过程进行训练；第三阶段进行端到端微调，优化长时域生成质量。这种渐进式训练策略有效加速了模型收敛，并显著减少了自回归生成中的误差累积问题。

**Controllable Simulation（可控仿真）**：STAGE 支持流式（streaming）生成范式——模型可连续生成无限长度的驾驶视频，每个新帧的生成以历史帧为条件。在 NuScenes 数据集上，STAGE 成功生成了 600 帧高质量驾驶视频。该方法的核心优势在于通过 HTFT 确保了长时域时序一致性，使得自回归生成即使经过数百个去噪步骤后仍能维持场景的几何和语义一致性。

### 代码实现要点

- **HTFT 实现**：时序模块和去噪模块分离为两个子网络，通过特征迁移层在帧间传递隐状态
- **三阶段训练**：Stage 1 单帧训练 → Stage 2 引入时序模块模拟自回归 → Stage 3 端到端长序列微调
- **自回归推理**：使用滑动窗口方式，每个窗口内并行去噪，窗口间序列传递隐特征
- **数据**：基于 NuScenes 多视角驾驶数据集

### 关键创新点

- **分层时序特征迁移（HTFT）**：首次将视频扩散中的时序建模与去噪过程解耦并桥接，实现长时域一致生成
- **多阶段渐进式训练**：通过模拟自回归推理过程的有监督训练减少误差累积
- **600 帧超长生成**：生成远超现有方法的长时域驾驶视频（600 帧 vs 通常的 16-64 帧）
- **流式架构**：支持无限长度流式视频生成

### 代表性结果

- NuScenes 数据集上生成 600 帧高质量驾驶视频，远超现有方法
- 长时域时序一致性和视觉质量显著优于 SOTA
- 发表于 IROS 2025
