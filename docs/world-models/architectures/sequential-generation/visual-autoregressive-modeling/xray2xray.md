---
title: "Xray2Xray: World Model from Chest X-rays with Volumetric Context"
design: "Xray2Xray"
arxiv: https://arxiv.org/abs/2506.19055
---

# Xray2Xray: World Model from Chest X-rays with Volumetric Context

::: info 论文信息
- **Design**: Xray2Xray
- **论文全称**: Xray2Xray: World Model from Chest X-rays with Volumetric Context
- **arXiv**: [https://arxiv.org/abs/2506.19055](https://arxiv.org/abs/2506.19055)
:::

## 学习笔记

### 核心思想

Xray2Xray 提出了一种新颖的世界模型范式——从 2D 胸部 X 光片（CXR）中学习包含 3D 解剖结构信息的潜在表示。胸部 X 光片是全球使用最广泛的医学影像模态，但作为 2D 投影图像，受结构叠加（structural superposition）的严重限制——三维解剖结构在二维平面上叠在一起导致关键病变可能被遮挡或混淆。Xray2Xray 的核心洞见是：通过建模不同角度 X 光投影之间的转换关系，约束模型隐式地重建 3D 胸部解剖结构。

本质上这是一个视角转换世界模型——模型不一定需要真实的多视角数据，而是学习"如果存在一个 3D 场景，那么不同角度的 X 光投影应该满足什么投影关系"。这种从 2D 投影约束中提取 3D 信息的能力，使 Xray2Xray 的潜在表示在心血管疾病检测和肺部病变分类中超越了监督学习和自监督预训练方法。

### 架构设计

- **Vision Encoding（视觉编码）**：Xray2Xray 使用专门的医学影像编码器（基于 CNN backbone）将 2D X 光图像编码为潜在表示。编码器需要从 2D 投影中提取足够的信息，使后续的转换模型能推断出 3D 解剖结构。鉴于医学影像的高分辨率和精细细节要求，编码器架构注重保留组织细节和器官边界的结构信息。
- **Knowledge Learning（知识学习）**：系统包含两个核心模型：(1) 视觉模型——将 CXR 编码为潜在表示；(2) 转换模型（Transition Model）——建模不同角度 X 光投影之间的演变关系。转换模型实际上是一个潜在空间中的"视角转换器"，接收当前角度的潜在表示，预测旋转后新角度的潜在表示。通过多视角转换自监督任务，转换模型被迫学习胸部解剖结构的 3D 信息（如器官位置、中叶/上叶关系等），并可选地使用 CT 重建的伪多视角数据进行监督以进一步提升 3D 精度。
- **Controllable Simulation（可控模拟）**：Xray2Xray 的可控性体现在两个层面：(1) 视角控制——用户可以指定目标投影角度，模型生成对应角度的合成 X 光片；(2) 潜在空间后处理——下游任务可直接使用潜在表示进行分类/回归，无需显式生成新视角图像。这种潜在空间的压缩能力使下游任务的推理效率远高于在原图空间操作。

### 关键创新

- **首个 CXR 世界模型**：将世界模型的视角转换范式引入医学影像领域，从 2D 投影中提取 3D 信息。
- **隐式 3D 推理**：无需 CT 重建作为输入，仅通过建模多角度投影的几何约束关系来学习 3D 结构。
- **超越监督学习**：在无监督/自监督预训练设置下，学到的潜在表示比标准监督学习和自监督预训练方法更优。
- **多种新视角合成**：展示了从潜在表示合成新角度 CXR 的能力，为放射科医生提供多视角辅助。

### 实验结果要点

在心血管疾病检测任务上，Xray2Xray 的潜在表示超越了多个监督学习和自监督预训练基线（如 SimCLR、BYOL），AUC 提升约 2-3%。在 5 种肺部分类任务中，达到与有监督方法相当的性能。通过潜在表示重建的多视角 X 光图像在视觉质量和解剖结构准确性上表现良好。视角合成实验充分验证了视角转换模型对 3D 空间的关键贡献，模型对复杂解剖结构的泛化能力良好。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
