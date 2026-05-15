---
title: "Neurosymbolic Grounding for Compositional World Models"
design: "cosmos"
arxiv: https://arxiv.org/abs/2310.12690
github: https://github.com/trishullab/cosmos
---

# cosmos: Neurosymbolic Grounding for Compositional World Models

::: info 论文信息
- **Design**: cosmos
- **论文全称**: Neurosymbolic Grounding for Compositional World Models
- **arXiv**: [https://arxiv.org/abs/2310.12690](https://arxiv.org/abs/2310.12690)
- **GitHub**: [https://github.com/trishullab/cosmos](https://github.com/trishullab/cosmos)
:::

## 核心思想

cosmos 是 MIT 提出的神经符号组合世界模型。核心创新是将神经符号程序合成（neurosymbolic program synthesis）与世界模型结合——用符号化规则描述物体间的交互定律，用神经网络学习物体的视觉表示。这种神经符号方式使世界模型具有极强的组合性和因果推理能力。

cosmos 的关键独特之处：与纯神经网络世界模型（黑箱预测）不同，cosmos 学习显式的物理定律符号程序（如"如果物体 A 碰到物体 B，则...")。这些符号程序可通过程序合成从数据中学习，也可由人类指定。符号规则保证物理合理性，神经网络提供感知灵活性。

## 技术架构

**Vision Encoding（视觉编码）**：使用 YOLO 或 slot attention 等物体检测/分割模型提取场景中的物体。每个物体绑定到视觉特征（外观、位置、速度等）。

**Knowledge Learning（知识学习）**：程序合成模块（DreamCoder 风格）学习符号化的物体交互规则。这些规则以可读的程序形式表达（如 collision(A,B) → bounce(A, vector(from(A,B)))）。神经网络负责将视觉观测映射到符号化的物体属性，符号系统负责预测物体状态变化。

**Controllable Simulation（可控模拟）**：符号动力学使仿真具有因果性和可解释性。可以程序性地查询 counterfactual 问题（"如果不碰撞会怎样"）和进行组合性预测（"如果增加一个物体会怎样"）。

## 代码实现要点

代码开源在 [trishullab/cosmos](https://github.com/trishullab/cosmos)。基于 PyTorch + DreamCoder。Neuro-symbolic: YOLO detection + program synthesis dynamics。在 CLEVRER 和 CATER 等基准上评估。

## 关键创新点

1. **神经符号世界模型**：神经网络感知 + 符号程序动力学
2. **可读的物理定律**：学到的动力学是显式的可读程序
3. **因果推理**：支持 counterfactual 和干预式推理
4. **极强组合泛化**：符号规则天然支持任意物体数量

## 代表性结果

在 CLEVRER 的因果推理任务中（如 counterfactual 问题"如果不发生碰撞会怎样"），cosmos 的准确率达到 85%+，而纯神经网络世界模型仅 40%。在组合泛化测试中，cosmos 可泛化到包含训练时未见的物体类型和数量（如 20+ 物体）的场景。
