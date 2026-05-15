---
title: "Bevworld: A multimodal world model for autonomous driving via unified bev latent space"
design: "Bevworld"
arxiv: https://arxiv.org/abs/2407.05679
github: https://github.com/zympsyche/BevWorld
---

# Bevworld: A multimodal world model for autonomous driving via unified bev latent space

::: info 论文信息
- **Design**: Bevworld
- **论文全称**: Bevworld: A multimodal world model for autonomous driving via unified bev latent space
- **arXiv**: [https://arxiv.org/abs/2407.05679](https://arxiv.org/abs/2407.05679)
- **GitHub**: [https://github.com/zympsyche/BevWorld](https://github.com/zympsyche/BevWorld)
:::

## 学习笔记

## 核心思想

BEVWorld 是百度提出的面向自动驾驶的多模态世界模型，其核心创新在于将异构传感器输入（多视角图像和LiDAR点云）统一编码到紧凑的鸟瞰图（BEV）潜在空间中，实现全景场景表示的统一建模。该方法通过自监督学习实现多模态数据的双向编码-解码，并利用潜在扩散模型进行未来场景的时序生成。

传统的世界模型通常只在单一模态或单视角下工作，而 BEVWorld 首次在统一BEV空间中对多模态传感器数据进行联合建模。通过在共享空间表示中集成环视图像和点云数据，该模型能够更完整地理解驾驶场景的几何结构和语义信息，为下游感知、预测和规划任务提供更丰富的世界动态先验。

模型的时序预测通过潜在BEV序列扩散模型实现，以高层动作token为条件进行未来场景预测。这种设计使模型不仅能够生成视觉上逼真的未来观测，还能在场景层面进行时序推理，显著提升了自动驾驶系统对未来环境变化的理解和规划能力。

## 技术架构

**Vision Encoding（视觉编码）**：BEVWorld采用多模态分词器（Multi-modal Tokenizer），将多视角图像和LiDAR点云分别编码，并投影到统一的BEV潜在空间。该分词器通过射线投射渲染（Ray-casting Rendering）以自监督方式将潜在BEV token解码回LiDAR和环视图像观测，实现了异构传感器数据与统一空间表示之间的双向映射。

**Knowledge Learning（世界知识学习）**：模型在BEV潜在空间中学习场景的时空动态规律。潜在BEV序列扩散模型（Latent BEV Sequence Diffusion Model）以前序BEV潜在表示为条件，学习预测未来时刻的BEV潜在token分布，采用扩散过程逐步去噪生成高质量的未来场景表示。

**Controllable Simulation（可控推演）**：时序预测以高层动作token（如速度、转向角等驾驶控制信号）为条件，使模型能够在不同动作策略下生成相应的未来场景。解码器将预测的潜在BEV token恢复为多模态观测（LiDAR点云和多视角图像），为自动驾驶系统提供可交互的仿真环境。

## 代码实现要点

- 基于百度自研框架，代码仓库包含完整的多模态分词器和潜在BEV扩散模型实现
- 使用射线投射渲染技术将BEV潜在空间投影回原始传感器视图
- 支持在nuScenes等标准自动驾驶基准上进行训练和评估
- 提供预训练权重和推理脚本，可用于未来场景生成和下游任务评估

## 关键创新点

- 首次提出在统一BEV潜在空间中对多模态传感器数据进行联合建模，实现环视图像和LiDAR点云的双向编码-解码
- 通过射线投射渲染实现自监督的多模态重建，无需额外标注
- 潜在BEV序列扩散模型在紧凑的空间表示中进行时序预测，效率高且生成质量好
- 高层动作条件控制使模型适用于自动驾驶的交互式仿真

## 代表性结果

- 在自动驾驶基准测试中展示了逼真的未来场景生成能力
- BEV潜在表示能够有效提升下游感知和运动预测任务的性能
- 多模态重建质量超越了单模态方法的视觉保真度
- 时序预测在场景级别保持了时空一致性
