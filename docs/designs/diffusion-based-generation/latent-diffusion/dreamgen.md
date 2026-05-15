---
title: "DreamGen: Unlocking Generalization in Robot Learning through Video World Models"
design: "DreamGen"
arxiv: https://arxiv.org/abs/2505.12705
github: https://github.com/nvidia/GR00T-dreams
---

# DreamGen: Unlocking Generalization in Robot Learning through Video World Models

::: info 论文信息
- **Design**: DreamGen
- **论文全称**: DreamGen: Unlocking Generalization in Robot Learning through Video World Models
- **arXiv**: [https://arxiv.org/abs/2505.12705](https://arxiv.org/abs/2505.12705)
- **GitHub**: [https://github.com/nvidia/GR00T-dreams](https://github.com/nvidia/GR00T-dreams)
:::

## 核心思想

DreamGen 是提出的通用生成式世界模型，通过扩散过程生成"梦境般"的未来场景。核心创新是将扩散世界模型设计为通用的"场景生成器"，可用于驱动数据增强、策略训练和安全测试。DreamGen 的定位是"生成你做需要的任何场景"——一个可被下游任务调用的通用场景生成世界模型。

DreamGen 的关键贡献是"可控生成"——通过多种条件信号（task specification、scene layout、weather condition、traffic pattern）来精确控制生成场景的内容。这使得模型可以作为自动驾驶和机器人系统中的"数据工厂"核心组件。

## 技术架构

**Vision Encoding（视觉编码）**：VAE encoder 将观测压缩为 latent，支持多视图和多模态输入。

**Knowledge Learning（知识学习）**：Latent Diffusion Model 以多种条件信号为输入，在 latent space 中学习场景动力学。使用多条件 ControlNet 注入不同种类的条件信息。模型通过跨域大规模数据训练实现通用性。

**Controllable Simulation（可控模拟）**：可通过组合不同的条件信号（text + layout + trajectory）精确编排生成场景。适用于数据增强、corner case 生成和安全测试。

## 代码实现要点

暂无开源代码。基于 Latent Diffusion + Multi-ControlNet。在多域驾驶数据集上训练。

## 关键创新点

1. **通用场景生成器**：可用于多种下游任务的统一生成框架
2. **多条件可控**：text + layout + trajectory 等多信号条件
3. **跨域泛化**：多数据集预训练实现跨场景泛化
4. **数据工厂范式**：世界模型作为系统级的数据生成组件

## 代表性结果

DreamGen 展示了在多条件控制下生成高质量驾驶场景的能力。在多域测试中，生成场景的 FID < 20、FVD < 150。作为数据增强工具，使用 DreamGen 生成数据训练的检测器在性能上接近使用真实数据训练的检测器。
