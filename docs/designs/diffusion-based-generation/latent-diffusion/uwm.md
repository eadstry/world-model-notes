---
title: "Unified world models: Coupling video and action diffusion for pretraining on large robotic datasets"
design: "UWM"
arxiv: https://arxiv.org/abs/2504.02792
github: https://github.com/WEIRDLabUW/unified-world-model
---

# UWM: Unified world models: Coupling video and action diffusion for pretraining on large robotic datasets

::: info 论文信息
- **Design**: UWM
- **论文全称**: Unified world models: Coupling video and action diffusion for pretraining on large robotic datasets
- **arXiv**: [https://arxiv.org/abs/2504.02792](https://arxiv.org/abs/2504.02792)
- **GitHub**: [https://github.com/WEIRDLabUW/unified-world-model](https://github.com/WEIRDLabUW/unified-world-model)
:::

## 学习笔记

## 核心思想

UWM（Unified World Models）由华盛顿大学和丰田研究院提出，旨在通过统一视频扩散与动作扩散来解决大规模机器人数据预训练中的核心难题。机器人学习面临高质量专家示范数据稀缺的问题，而海量的无动作标注视频数据虽然包含丰富的世界动态信息，却难以直接用于策略学习。UWM通过一个创新的统一Transformer架构，将两种模态的扩散过程耦合在同一个模型中。

UWM的核心设计在于引入独立的模态扩散时间步（independent diffusion timesteps），分别控制视频生成和动作生成两个扩散过程。通过灵活操控各模态的时间步，同一个统一模型可以在四种功能模式间自由切换：策略（policy，预测动作）、前向动力学（forward dynamics，预测未来视频）、逆向动力学（inverse dynamics，从视频变化推断动作）和视频生成器。

这种统一框架使UWM能够在有动作标注的数据上进行模仿学习预训练，同时也能利用无动作标注的视频数据进行自监督共训练（co-training），显著提升了微调策略的泛化能力和鲁棒性。该工作为弥合模仿学习与世界建模之间的范式鸿沟提供了一个简洁而有效的统一方案。

## 技术架构

**Vision Encoding（视觉编码）**：UWM采用共享的视频编码器将原始机器人观测（RGB图像序列）编码为潜在表示。这些潜在表示作为Transformer架构的输入token，与动作token在同一序列中进行联合处理。

**Knowledge Learning（世界知识学习）**：核心是统一的扩散Transformer，内部包含视频扩散头和动作扩散头。模型通过控制各模态的扩散时间步来切换行为：当视频扩散时间步设为0（完全去噪）而动作扩散步数正常时，模型执行策略推理；反之则进行前向动力学预测。在大规模DROID机器人数据集上进行预训练，学习跨任务的环境动态。

**Controllable Simulation（可控推演）**：UWM实现了四个维度的可控能力：(1) 策略模式：从观测预测动作；(2) 前向动力学：从观测和动作预测未来视频；(3) 逆向动力学：从前后帧视频推断中间动作；(4) 视频生成：纯无条件/条件视频生成。无动作视频共训练通过将动作扩散时间步设为最大值来实现。

## 代码实现要点

- 基于PyTorch实现统一的扩散Transformer架构
- 使用Zarr压缩缓冲格式标准化DROID、Robomimic和LIBERO数据集
- 支持预训练→微调的两阶段训练流程
- 提供Robomimic单任务、LIBERO多任务和DROID大规模实验的完整配置
- 开源预训练checkpoint（LIBERO-90和DROID），可直接下载微调
- 环境接口封装支持Robomimic和LIBERO的评估

## 关键创新点

- 首次在统一Transformer中耦合视频扩散和动作扩散过程
- 独立模态扩散时间步设计使单一模型支持四种功能模式
- 无动作视频共训练：利用大规模无标注视频数据提升策略性能
- 从大规模异构机器人数据集中实现可扩展预训练
- 统一模仿学习和世界建模两个传统上分离的范式

## 代表性结果

- DROID大规模预训练显著提升了微调策略的泛化能力和鲁棒性
- 无动作视频共训练进一步提高了下游任务的表现
- LIBERO-90预训练后的多任务微调效果优于纯模仿学习基线
- 在Robomimic单任务基准上验证了统一框架的有效性
