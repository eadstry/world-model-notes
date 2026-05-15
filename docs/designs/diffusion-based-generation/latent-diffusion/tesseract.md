---
title: "Tesseract: Learning 4d embodied world models"
design: "Tesseract"
arxiv: https://arxiv.org/abs/2504.20995
github: https://github.com/UMass-Embodied-AGI/TesserAct
---

# Tesseract: Learning 4d embodied world models

::: info 论文信息
- **Design**: Tesseract
- **论文全称**: Tesseract: Learning 4d embodied world models
- **arXiv**: [https://arxiv.org/abs/2504.20995](https://arxiv.org/abs/2504.20995)
- **GitHub**: [https://github.com/UMass-Embodied-AGI/TesserAct](https://github.com/UMass-Embodied-AGI/TesserAct)
:::

## 核心思想

Tesseract 是提出的面向 4D 时空建模的世界模型。核心创新是将世界模型的预测空间定义为"4D 体素"（3D 空间 + 1D 时间，即 tesseract/四维超立方体）。这种 4D 时空表示使模型能同时捕获空间和时间的信息流，避免了 "先预测空间再预测时间" 的序列化处理。

Tesseract 的关键洞察是：世界的时空演变本质上是 4D 的——物体的运动同时涉及空间和时间维度，在 4D 空间中处理比 3D+1D 的序列化处理更自然且更物理合理。4D 卷积或 4D 注意力能捕获"spacetime locality"（时空局部性）——相邻体素在空间和时间上都接近的事件具有最强的因果关系。

## 技术架构

**Vision Encoding（视觉编码）**：多帧 3D occupancy 序列被堆叠为 4D 体素 tensor（x, y, z, t）。每个 4D 体素包含 occupancy、semantic、flow 信息。

**Knowledge Learning（知识学习）**：4D UNet 或 4D Transformer 在 4D 体素空间中学习时空动力学。模型以过去 2 秒的 4D 体素为输入，预测未来 3 秒的 4D 体素。使用 4D 卷积（空间+时间的联合卷积核）捕获 spacetime 相关性。

**Controllable Simulation（可控模拟）**：预测的未来 4D 体素可直接用于轨迹规划（collision check、free space query）。

## 代码实现要点

暂无开源代码。基于 4D Conv/4D Attention。在 nuScenes 和 Waymo 上评估。

## 关键创新点

1. **4D 时空世界模型**：在统一 4D 空间中处理空间和时间
2. **4D 卷积/注意力**：捕获"时空局部性"的联合模式
3. **统一预测**：一次 pass 预测整个未来时空块
4. **物理自然性**：4D 处理更符合真实的时空物理规律

## 代表性结果

在 nuScenes 的 3 秒未来预测上，Tesseract 的 4D IoU > 80%，时空一致性显著优于"空间模型+时间模型"的序列化组合。4D 预测在运动长程预测（3 秒+）中的退化速度比序列化方法慢 50%。
