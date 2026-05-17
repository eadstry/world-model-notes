---
title: "Dreamweaver: Learning Compositional World Models from Pixels"
design: "Dreamweaver"
arxiv: https://arxiv.org/abs/2501.14174
github: https://github.com/ahn-ml/dreamweaver-release
---

# Dreamweaver: Learning Compositional World Models from Pixels

::: info 论文信息
- **Design**: Dreamweaver
- **论文全称**: Dreamweaver: Learning Compositional World Models from Pixels
- **arXiv**: [https://arxiv.org/abs/2501.14174](https://arxiv.org/abs/2501.14174)
- **GitHub**: [https://github.com/ahn-ml/dreamweaver-release](https://github.com/ahn-ml/dreamweaver-release)
:::

## 核心思想

Dreamweaver SUC Berkeley 提出的从像素中学习组合式世界模型的方法。核心创新是"绑定的组合的（binding compositionality）：世界模型学习将场景元素（物体、属性、关系）绑定为可组合的latent 元素，然后在这些元素之上构建支持任意组合的动力学模型。这种设计使得模型可以从简单场景泛化到复杂场景。
Dreamweaver 的关键贡献是提出了一的system-2 风格的世界模型构建方法：首先通过视觉绑定（visual binding）将场景分解为物体概念和关系概念，然后通过概念组合（concept composition）构建场景的符号化动力学。这种两阶段方案使模型既能处理物理交互（碰撞），又能进行逻辑推理（关系判断）。
## 技术架。
**Vision Encoding（视觉编码）**：使用object discovery 网络（如 MONet 何Slot Attention）提取物理slots，同时使用relation encoder 推断物体间的关系（如 on top、next to、inside）。
**Knowledge Learning（知识学习）**：概念绑定层——将物体 slots 和关系编码绑定为 concept embeddings。动力学模型在这些concepts 上运行，使用 Transformer 预测未来 concepts。关键：concept 层面而非像素层面的预测使模型支持零样本组合——任意数量的物体和任意类型的关系。
**Controllable Simulation（可控模拟）**：在 concept space 中进行推理和规划。用户可以通过指定初始 concept configuration 帧编程"仿真（如"两个球，球A 是红色，球B 是蓝色，A on B"）。
## 代码实现要点

代码开源在 [ahn-ml/dreamweaver-release](https://github.com/ahn-ml/dreamweaver-release)。基准PyTorch。Object discovery + relation encoder + concept binding + Transformer dynamics。在 2D ShapeWorld 于BabyAI 上评估。
## 关键创新。
1. **概念绑定的世界模型*：物体和关系被绑定为 composition 概念
2. **零样本组合泛化*：任意物体数量和关系类型的推理3. **逻辑 + 物理统一**：同时处理物理交互和逻辑关系
4. **编程式仿真*：通过 concept specification 启动仿真

## 代表性结。
在ShapeWorld 的推理任务中，Dreamweaver 在未见过的物体数量和关系组合上准确率达到 85%+。在 BabyAI 的任务中，通过 concept 级的世界模型，agent 能在 5-shot 内学会新任务（传统方法需的1000+ 交互）。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
