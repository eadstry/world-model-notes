---
title: "DreamWorld: Unified World Modeling in Video Generation"
design: "DreamWorld"
arxiv: https://arxiv.org/abs/2603.00466
github: https://github.com/ABU121111/DreamWorld
---

# DreamWorld: Unified World Modeling in Video Generation

::: info 论文信息
- **Design**: DreamWorld
- **论文全称**: DreamWorld: Unified World Modeling in Video Generation
- **arXiv**: [https://arxiv.org/abs/2603.00466](https://arxiv.org/abs/2603.00466)
- **GitHub**: [https://github.com/ABU121111/DreamWorld](https://github.com/ABU121111/DreamWorld)
:::

## 核心思想

DreamWorld 提出了一种统一世界建模框架，核心观点认为：现有视频生成模型的根本局限在于它们仅学习表面层面的合理性（surface-level plausibility），缺乏对世界的连贯统一理解。世界模型需要联合建模多个异质维度（物理常识、3D 一致性、时序一致性等），而以往方法仅引入单一形式的世界知识或采用刚性对齐策略，远远不够。

DreamWorld 的核心贡献是联合世界建模范式（Joint World Modeling Paradigm），通过在视频生成器训练时联合预测视频像素和基础模型特征（foundation model features），将时间动态、空间几何和语义一致性等多维世界知识编码到生成模型中。为防止异构目标的直接优化导致视觉不稳定，论文提出了 Consistent Constraint Annealing（CCA）训练策略和 Multi-Source Inner-Guidance 推理策略。

## 技术架构

**Vision Encoding（视觉编码）**：DreamWorld 基于 Wan2.1 视频生成架构，视频通过 VAE 编码器压缩。编码过程中，模型同时从多个基础模型（3D 几何模型、语义模型、时序模型）提取特征作为辅助监督信号。

**Knowledge Learning（知识学习）**：DreamWorld 的核心训练策略是 Consistent Constraint Annealing（CCA）。在训练初期，世界一致性约束的权重很小，让模型先学会基本的外观生成。随着训练进行，约束权重逐步"退火"增加，引导模型学习物理常识和几何一致性。模型需要联合预测像素值、深度图、语义特征和光流。

**Controllable Simulation（可控模拟）**：DreamWorld 通过 Multi-Source Inner-Guidance 在推理时施加世界先验。在去噪过程中，除了原始视频生成梯度外，还引入来自基础模型的引导梯度来确保生成结果符合物理常识和 3D 几何约束。这类似于 Classifier Guidance 的多维扩展。

## 代码实现要点

代码将开源在 [ABU121111/DreamWorld](https://github.com/ABU121111/DreamWorld)。基于 Wan2.1 构建，集成多个基础模型提取特征，实现 CCA 训练和 Multi-Source Inner-Guidance 推理。

## 关键创新点

1. **联合世界建模范式**：首次同时利用像素预测和基础模型特征预测进行世界知识编码
2. **Consistent Constraint Annealing**：逐步引入世界一致性约束的训练策略
3. **Multi-Source Inner-Guidance**：多维先验引导的推理策略
4. **多维世界知识**：同时建模物理常识、3D 几何和时序一致性
5. **超越 Wan2.1**：在 VBench 上比 Wan2.1 提升 2.26 分

## 代表性结果

DreamWorld 在 VBench 上比 Wan2.1 提升 2.26 分（世界一致性指标）。生成的视频在物理合理性方面表现更好——物体不会突兀出现或消失、运动轨迹符合物理规律、场景深度关系保持稳定。CCA 策略被证明比刚性约束更有效，能避免视觉闪烁等不稳定现象。
