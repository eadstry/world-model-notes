---
title: "EchoWorld: Learning Motion-Aware World Models for Echocardiography Probe Guidance"
design: "EchoWorld"
arxiv: https://arxiv.org/abs/2504.13065
github: https://github.com/LeapLabTHU/EchoWorld
---

# EchoWorld: Learning Motion-Aware World Models for Echocardiography Probe Guidance

::: info 论文信息
- **Design**: EchoWorld
- **论文全称**: EchoWorld: Learning Motion-Aware World Models for Echocardiography Probe Guidance
- **arXiv**: [https://arxiv.org/abs/2504.13065](https://arxiv.org/abs/2504.13065)
- **GitHub**: [https://github.com/LeapLabTHU/EchoWorld](https://github.com/LeapLabTHU/EchoWorld)
:::

## 学习笔记

## 核心思想

EchoWorld（CVPR 2025）由清华大学提出，将世界模型引入心脏超声（Echocardiography）探头引导这一医疗应用场景。心脏超声是心血管疾病检测的关键手段，但高度依赖经验丰富的超声科医生。AI辅助或全自动超声扫描系统需要精确理解心脏解剖结构以及探头运动与视觉信号之间的复杂交互。
EchoWorld设计了运动感知世界建模框架：通过预训练阶段学习预测被遮挡的解剖区域并模拟探头调整的视觉结果，模型编码了心脏解剖知识和运动诱导的视觉动态。这种世界模型预训练使模型在微调时能有效利用历史视觉-运动序列信息。
微调阶段引入运动感知注意力机制（Motion-Aware Attention），整合历史视觉-运动数据，实现精确的自适应探头引导。在超过100万张超声图像的00+例常规扫描上训练，模型有效捕捉到了关键心脏超声知识。
## 技术架。
**Vision Encoding（视觉编码）**：EchoWorld使用视觉编码器将超声图像帧编码为特征表示。同时处理历史帧序列以获得时序上下文。
**Knowledge Learning（世界知识学习）**：预训练阶段借鉴世界建模原则设计两个任务：（1）预测被遮挡的解剖区域（掩码预测），学习心脏空间结构；（2）模拟探头调整后的视觉结果，学习运动-视觉动态映射。这编码了运动感知的解剖知识。
**Controllable Simulation（可控推演）**：微调阶段的运动感知注意力机制聚合历史视觉运动序列，根据当前观测和历史探头运动轨迹预测最优的下一步探头位置。这等价于在特征空间中进行动作条件的视觉预测，指导探头实时调整。
## 代码实现要点

- 基于世界模型原理的双任务预训练策略- 掩码解剖区域预测学习心脏结构知识
- 探头运动-视觉动态预测模拟手术过的- 运动感知注意力机制整合历史视觉运动序列
- 100例超声图像素00+病例的训练规模- CVPR 2025接收

## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)

## 关键创新。
- 世界模型首次应用于心脏超声探头引导领域- 双任务预训练：解剖掩码预测运动视觉动态预测- 运动感知注意力机制有效利用历史序列信号- 将探头引导建模为动作条件的视觉预测问题- 大规模真实临床数据的验证

## 代表性结。
- 引导误差显著低于现有视觉骨干和引导框架- 单帧和序列评估协议上均表现优化- 定性分析验证解剖知识的有效编码
- CVPR 2025接收
