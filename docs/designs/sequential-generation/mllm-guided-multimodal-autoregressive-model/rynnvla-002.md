---
title: "RynnVLA-002: A Unified Vision-Language-Action and World Model"
design: "RynnVLA-002"
arxiv: https://arxiv.org/abs/2511.17502
github: https://github.com/alibaba-damo-academy/RynnVLA-002
---

# RynnVLA-002: A Unified Vision-Language-Action and World Model

::: info 论文信息
- **Design**: RynnVLA-002
- **论文全称**: RynnVLA-002: A Unified Vision-Language-Action and World Model
- **arXiv**: [https://arxiv.org/abs/2511.17502](https://arxiv.org/abs/2511.17502)
- **GitHub**: [https://github.com/alibaba-damo-academy/RynnVLA-002](https://github.com/alibaba-damo-academy/RynnVLA-002)
:::

## 学习笔记

### 核心思想

RynnVLA-002 是阿里巴巴达摩院提出的统一 VLA（Vision-Language-Action）与世界模型框架。核心洞察：VLA 模型和世界模型可以相互增强——世界模型利用动作和视觉输入预测未来图像状态，学习环境底层物理规律以精炼动作生成；VLA 模型从图像观测产生后续动作，增强视觉理解并支持世界模型的图像生成。RynnVLA-002 的联合学习架构使环境动态建模和动作规划相互促进。实验验证了这一假说：在 LIBERO 仿真基准上无预训练情况下达 97.4% 成功率；在真实世界 LeRobot 实验中，集成世界模型使整体成功率提升 50%。

### 技术架构

**Vision Encoding（视觉编码）**：RynnVLA-002 用单一统一 Transformer 骨干同时处理视觉编码（编码当前图像观测为 token）和视觉预测（解码未来图像状态）。共享的视觉表示使 VLA 和世界模型分支都能访问相同的场景理解。

**Knowledge Learning（知识学习）**：联合学习涉及两个方向的信号流：(1) VLA→World Model——VLA 产生的动作建议作为世界模型预测未来状态的输入条件，世界模型学会将动作与视觉结果关联；(2) World Model→VLA——世界模型对未来状态的预测提供额外的视觉监督和场景上下文，VLA 可以利用这些"想象"的未来来优化当前动作选择。这种双向增强是 RynnVLA-002 超越单独 VLA 或世界模型的关键。

**Controllable Simulation（可控仿真）**：RynnVLA-002 在两种场景中验证：(1) LIBERO 仿真基准——97.4% 成功率无需预训练，证明联合学习的样本效率；(2) 真实世界 LeRobot 机器人操作——集成世界模型使成功率提升 50%，证明世界模型的物理理解对真实环境的显著价值。

### 代码实现要点

- **统一 Transformer**：单骨干同时用于 VLA 动作预测和世界模型未来生成
- **双向信息流**：VLA→WM 动作条件 + WM→VLA 未来视觉反馈
- **LIBERO 评估**：无预训练 end-to-end 训练达到 97.4%
- **GitHub 和模型开源**

### 关键创新点

- **VLA + World Model 统一联合学习**：双向增强而非独立或串行
- **世界模型增强真实操作**：真实世界成功率 +50% 验证世界模型的物理理解价值
- **97.4% 零预训练**：LIBERO 基准上从零训练达极高成功率
- **阿里巴巴达摩院出品**，模型和代码全开源
