---
title: "Extrapolating and Decoupling Image-to-Video Generation Models: Motion Modeling is Easier Than You Think"
arxiv: https://arxiv.org/abs/2503.00948
github: https://github.com/Chuge0335/EDG
venue: CVPR
year: 2025
---

# Extrapolating and Decoupling Image-to-Video Generation Models: Motion Modeling is Easier Than You Think

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2503.00948](https://arxiv.org/abs/2503.00948)
- **GitHub**: [https://github.com/Chuge0335/EDG](https://github.com/Chuge0335/EDG)
:::

## 学习笔记

### 核心贡献
- 首次将模型合并（model merging）技术引入 I2V 领域，通过外推与解耦框架将运动可控性和运动幅度解耦为独立可调的参数组，实现了两者的灵活权衡。
- 提出一种无需训练的推理解耦策略，通过在推理阶段逆转微调方向来显著放大运动幅度，无需额外训练即可增强动态范围。
- 揭示了 I2V-DM 在不同去噪时间步上对运动可控性和动态性具有不同敏感度的规律，并据此设计了时变参数注入机制。

### 方法细节
- 框架分为三个阶段：（1）运动可控性增强：在基础 I2V-DM 的时间模块中注入轻量可学习适配器，显式融入文本条件进行微调；（2）运动幅度外推：通过训练无关的外推策略反向操作微调过程，放大运动动态范围；（3）运动能力解耦与合并：将两阶段模型中分别对应运动可控性和运动幅度的相关参数解耦，合并注入到基础 I2V-DM 中。
- 根据去噪时间步调整运动感知参数的注入权重，使模型在不同生成阶段自适应地平衡运动质量与外观保真度。
- 无需对基础模型架构进行大规模修改，保持了与现有 I2V-DM 的兼容性。

### 关键发现
- 解耦后的模型能够灵活调控生成视频的运动幅度，实现了从静态到高动态的连续可控。
- 与现有 I2V 方法相比，该框架在运动自然度和文本-运动一致性上均有显著提升，同时有效保持了输入图像的外观特征。
- 训练无关的外推策略可以在不增加计算开销的前提下有效放大幅度范围，验证了运动建模本身比普遍认知的更易实现。

### 方法归类
- 属于图像到视频生成中的运动建模与可控生成方向，核心思路是通过扩散模型参数空间的操纵（微调、外推、解耦合并）来增强运动质量。
- 该工作将模型合并范式引入视频生成，为运动质量-外观保真度权衡问题提供了一种参数级解耦方案。
