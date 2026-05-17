---
title: "Dyn-O: Building Structured World Models with Object-Centric Representations"
design: "Dyn-o"
arxiv: https://arxiv.org/abs/2507.03298
github: https://github.com/wangzizhao/dyn-O
---

# Dyn-o: Dyn-O: Building Structured World Models with Object-Centric Representations

::: info 论文信息
- **Design**: Dyn-o
- **论文全称**: Dyn-O: Building Structured World Models with Object-Centric Representations
- **arXiv**: [https://arxiv.org/abs/2507.03298](https://arxiv.org/abs/2507.03298)
- **GitHub**: [https://github.com/wangzizhao/dyn-O](https://github.com/wangzizhao/dyn-O)
:::

## 核心思想

Dyn-O 提出了一种使用对象中心表示构建结构化世界模型的通用方法。核心创新是将对象中心表示与潜在动力学模型紧密集成：使用 Slot Attention 进行场景分解，然后使用基于物体关系的动力学模型预测物体运动。Dyn-O 特别强调了物理合理性——通过引入物理先验（如物体的平滑运动假设、碰撞约束）来稳定世界模型的长期 rollout。
Dyn-O 的关键贡献是提出了O-Dynamics (Object Dynamics) 框架——一套标准化的对象中心世界模型构建方法论，包括物体发现、状态编码、交互建模和长期仿真四个步骤。这个统一框架使得不同对象中心方法的对比更加公平和系统。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 提取物体 slots。每个slot 包含物体的视觉特征、位置编码和可选的深度信息。
**Knowledge Learning（知识学习）**：O-Dynamics 框架：（1）slot encoder 的slot 压缩为低维状态向量；的）Interaction module（GNN 的Transformer）预测物体间的交互效应；用）Transition predictor 输出下一时间步的物体状态；的）Slot decoder 从预测的状态向量重建下一帧的 slot 表示。引输smoothness prior 入collision constraint 作为动力学先验。
**Controllable Simulation（可控模拟）**：支持object-level 的仿真编辑和 counterfactual 推理。长的rollout 由物理先验约束稳定。
## 代码实现要点

代码开源在 [wangzizhao/dyn-O](https://github.com/wangzizhao/dyn-O)。基准PyTorch。Slot Attention + O-Dynamics (GNN + physical priors)。在 Physion、CLEVRER 于3D 物理基准上评估。
## 关键创新。
1. **O-Dynamics 标准化框架*：对象中心世界模型的通用构建方法
2. **物理先验融合**：平滑运动和碰撞约束稳定长期仿真
3. **4 步标准化流水线*：物体发现→状态编码→交互建模→长期仿学4. **可编辑仿真*：支持对象级的counterfactual 推理

## 代表性结。
在Physion eCLEVRER S100+ 步长期仿真测试中，Dyn-O 的物理违规率提SlotFormer 提50%。在 3D 物理基准（如 Blender 场景）中，Dyn-O 的物体位姿预测精度（position MSE）比非物理约束的方法提升 30%+。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
