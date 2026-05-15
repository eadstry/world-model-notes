---
title: "Walk Through Paintings : Ego-centric World Models from Internet Priors"
design: "EgoWM"
arxiv: https://arxiv.org/abs/2601.15284
github: https://github.com/miccooper9/egowm
---

# EgoWM: Walk Through Paintings : Ego-centric World Models from Internet Priors

::: info 论文信息
- **Design**: EgoWM
- **论文全称**: Walk Through Paintings : Ego-centric World Models from Internet Priors
- **arXiv**: [https://arxiv.org/abs/2601.15284](https://arxiv.org/abs/2601.15284)
- **GitHub**: [https://github.com/miccooper9/egowm](https://github.com/miccooper9/egowm)
:::

## 学习笔记

## 核心思想

EgoWM（Egocentric World Model）提出了一个简单但极具启发性的问题：如果视频生成模型不仅能想象一个合理的未来，而且是正确的未来——准确反映每个动作如何改变世界？该工作的核心方法是架构无关（architecture-agnostic）的，通过轻量级条件化层将任何预训练视频扩散模型转化为动作条件的自我中心世界模型，而不需要从头训练。

EgoWM的精髓在于重新利用互联网规模视频模型的丰富世界先验，而不是从头构建世界模型。通过注入运动命令（motor commands）作为条件信号，模型能够在忠实跟随动作的同时保持视觉真实感和强泛化能力。这种设计理念极大地降低了构建高质量世界模型的门槛和计算成本。

模型的关键贡献之一是提出了结构一致性评分（Structural Consistency Score, SCS），用于独立于视觉外观评估物理正确性——即场景中的稳定结构元素是否与提供的动作一致地演化。EgoWM在导航任务上将SCS提升了80%，推理延迟降低了6倍，并展示了令人惊叹的泛化能力——包括在名画中"行走"。

## 技术架构

**Vision Encoding（视觉编码）**：EgoWM复用预训练视频扩散模型（如SVD、Cosmos、Wan2.1等）的视觉编码能力。这些模型已经在大规模互联网视频数据上学习到了丰富的视觉世界先验，包括物理规律、光照变化和物体运动模式。

**Knowledge Learning（世界知识学习）**：在冻结预训练模型主干的基础上，仅通过轻量级条件化层注入动作信息。对SVD模型，通过修改输入通道来接收动作条件；动作表示包括3-DoF（移动机器人导航：Δx, Δy, Δφ）和25-DoF（人形机器人关节角度）。仅需适度微调即可实现高质量可控生成。

**Controllable Simulation（可控推演）**：模型支持跨具身形态和动作空间的扩展，从3-DoF移动机器人到25-DoF人形机器人。通过前帧图像和动作命令生成连贯的未来帧序列，支持导航和操作两类任务的仿真推演。Structural Consistency Score（SCS）提供了独立于视觉外观的物理一致性评估指标。

## 代码实现要点

- 基于Stable Video Diffusion (SVD)实现，使用SVD.yaml conda环境
- 支持多种基座模型：SVD（已发布）、Cosmos-2B（计划中）、Wan2.1-14B（计划中）
- 数据集覆盖RECON、SCAND和Tartan Drive（3-DoF导航）以及EVE 1x（25-DoF人形机器人）
- 提供预训练checkpoint下载，支持分布内推理和绘画场景的OOD泛化推理
- SCS评估指标脚本和Wan2.1-14B训练/推理脚本即将发布
- 使用Hugging Face进行模型和数据管理

## 关键创新点

- 架构无关方法：将任意预训练视频扩散模型转化为动作条件世界模型
- 轻量级条件化：仅通过少量可学习层注入动作控制，最小化微调成本
- 跨具身形态扩展：统一框架支持3-DoF到25-DoF的多样化动作空间
- Structural Consistency Score（SCS）：首个独立于视觉外观的物理正确性评估指标
- 极端泛化：在绘画等OOD场景中展现惊人的零样本泛化能力

## 代表性结果

- SCS评分在导航世界模型上相比先前SOTA提升80%
- 推理延迟降低至先前方法的1/6
- 3-DoF导航：在RECON、SCAND、Tartan Drive上实现高质量动作条件预测
- 25-DoF人形机器人：EVE 1x平台上的关节角度条件预测
- OOD泛化：在名画场景中进行成功的虚拟导航，展示世界先验的强大迁移能力
