---
title: "seq-JEPA: Autoregressive Predictive Learning of Invariant-Equivariant World Models"
design: "seq-JEPA"
arxiv: https://arxiv.org/abs/2505.03176
github: https://github.com/hafezgh/seq-jepa
---

# seq-JEPA: Autoregressive Predictive Learning of Invariant-Equivariant World Models

::: info 论文信息
- **Design**: seq-JEPA
- **论文全称**: seq-JEPA: Autoregressive Predictive Learning of Invariant-Equivariant World Models
- **arXiv**: [https://arxiv.org/abs/2505.03176](https://arxiv.org/abs/2505.03176)
- **GitHub**: [https://github.com/hafezgh/seq-jepa](https://github.com/hafezgh/seq-jepa)
:::

## 学习笔记

## 核心思想

seq-JEPA由Mila/蒙特利尔大学团队提出，解决了JEPA类自监督学习中不变性和等变性之间的根本性Trade-off。传统双视图范式（two-view paradigm）中，同一张图像的两个增强视图要么通过对比学习获得不变性表征（适合分类），要么通过掩码预测获得等变性表征（适合密集预测），难以两者兼得。
seq-JEPA的核心洞察是：通过处理短序列的多视角观测（observations），利用自回归Transformer的动作"（相对变换）为观测"嵌入串联处理，模型可以同时学习两个架构上分离的表征——一个用于等变性需求任务，一个用于不变性需求任务。
这种架构归纳偏置（architectural inductive biases）使seq-JEPA在不需要对偶预测头或额外损失项的情况下，自然地分离两种表征。更有趣的是，它在需要聚合多步观测序列的任务（如Path Integration和跨眼动预测学习）中表现出色。
## 技术架。
**Vision Encoding（视觉编码）**：seq-JEPA使用编码器将每个观测（图像经过变换后的视图）编码为潜在表示。每个编码后的视图与产生下一观测的相对变换（动作）嵌入拼接，形成视图-动作对。
**Knowledge Learning（世界知识学习）**：视频动作对序列通过Transformer编码器，输出一个聚合的序列级表征。预测器头以聚合表征和接下来的动作嵌入为条件，自回归预测下一次观测的表征。这种设计自然地让Transformer学习两个层次：序列内不变性（高层语义）和帧间等变性（细粒度变化）。
**Controllable Simulation（可控推演）**：模型可以通过给定序列和未来动作来预测未来观测的表征。路径积分（Path Integration）任务中，模型需要聚合多步动作观测序列来推断累积位移；跨眼动预测任务中，模型需要根据眼动信号预测视觉输入的变化。
## 代码实现要点

- 基于JEPA的自回归Transformer序列建模框架
- 视图-动作对拼接：编码视图与相对变换嵌入联合输入- 单一预测头在聚合表征和未来动作条件下预测下一观测表征
- 架构层面的不变化等变表征自然分离
- 开源代。
## 关键创新。
- 首次在JEPA框架中通过架构归纳偏置分离不变性和等变性表性- 打破传统双视图范式的Trade-off局的- 自回归序列建模：多步观测-动作对处理- 无需对偶预测头或额外损失的自然表征分类- Path Integration和跨眼动预测等聚合型任务上的独特优势

## 代表性结。
- 在不变性需求任务（分类）和等变性需求任务上均表现强化- Path Integration任务性能优异
- 跨眼动预测学习效果显式- 无需牺牲一方的统一表征学习方案

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
