---
title: "I2-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting"
design: "I2-World"
arxiv: https://arxiv.org/abs/2507.09144
---

# I2-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting

::: info 论文信息
- **Design**: I2-World
- **论文全称**: I2-World: Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting
- **arXiv**: [https://arxiv.org/abs/2507.09144](https://arxiv.org/abs/2507.09144)
:::

## 学习笔记

### 核心思想

I2-World（Intra-Inter Tokenization for Efficient Dynamic 4D Scene Forecasting）是一种高效的 4D 占用预测框架，专注于自动驾驶中的未来场景演化预测。3D 占用（occupancy）表示在自动驾驶中越来越重要——相比 2D 图像，它提供了场景的完整几何结构。I2-World 的核心挑战在于：如何高效地 tokenize 复杂的 3D 占用场景，使自回归模型能够在保持预测能力的同时实现实时推理。

I2-World 的核心创新在于将 token 化分解为两个互补的维度：(1) **Intra-scene Tokenization（场景内 token 化）**——通过多层级并行方案，对每个时刻的 3D 占用图进行分层压缩，捕捉场景内的空间结构；(2) **Inter-scene Tokenization（场景间 token 化）**——在时间维度上对各场景层进行残差聚合，捕捉场景间的动态变化。这种双维度设计同时实现了紧凑的 token 表示和高效的时间动态建模。

### 核心架构

**Vision Encoding（视觉编码）**：I2-World 的编码分为两个模块：(1) **Intra-scene tokenizer** 采用多层级并行架构，在不同空间尺度上对 3D 占用图进行 VQ 编码。高层 token 捕捉大范围的结构信息，低层 token 补充局部细节。层级间的残差连接使每个尺度只编码当前尺度独有的"剩余信息"，大幅提高了效率。(2) **Inter-scene tokenizer** 在时间维度上进行残差聚合。当前帧的 token 与前一帧的"残差"进行对比，仅编码变化部分——如移动车辆、新出现的物体等，而对静态背景不再重复编码。

**Knowledge Learning（知识学习）**：通过层级化训练和学习获取关键能力：(1) 从当前场景的综合空间表示中预测一组**变换参数**，如高层"偏航位移"表示自车的旋转和平移，提供高层运动先验；(2) 通过对比学习确保 token 编码保持时序一致性；(3) 联合空间残差 token 和变换参数，通过交叉注意力实现可控的 4D 占用生成。

**Controllable Simulation（可控模拟）**：I2-World 通过提供高层运动参数实现可控生成。用户可指定不同的文本描述（如"直行"、"右转"等），模型通过高层语义映射将其转化为对应的变换参数，进而生成对应轨迹的未来占用场景。支持多样化的未来轨迹探索——给定相同的起始场景，通过不同的控制参数可以生成多种可能的未来演化。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
