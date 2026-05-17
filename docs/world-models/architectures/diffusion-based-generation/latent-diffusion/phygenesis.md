---
title: "Toward Physically Consistent Driving Video World Models under Challenging Trajectories"
design: "PhyGenesis"
arxiv: https://arxiv.org/abs/2603.24506
github: https://github.com/wm-research/PhyGenesis
---

# PhyGenesis: Toward Physically Consistent Driving Video World Models under Challenging Trajectories

::: info 论文信息
- **Design**: PhyGenesis
- **论文全称**: Toward Physically Consistent Driving Video World Models under Challenging Trajectories
- **arXiv**: [https://arxiv.org/abs/2603.24506](https://arxiv.org/abs/2603.24506)
- **GitHub**: [https://github.com/wm-research/PhyGenesis](https://github.com/wm-research/PhyGenesis)
:::

## 核心思想

PhyGenesis 针对驾驶世界模型的一个关键弱点：现有模型主要在自然安全驾驶数据上训练，当条件输入为挑战性或反事实轨迹（如仿真器或规划系统生成的不完美轨迹）时，会生成严重物理不一致的视频。PhyGenesis 通过物理条件生成器（physical condition generator）将潜在无效的轨迹输入转换为物理合理的条件，再通过物理增强视频生成器（physics-enhanced video generator）生成高保真多视图视频。

PhyGenesis 的另一关键策略是使用CARLA 仿真器生成大规模物理丰富的异构数据集。传统方法仅依赖真实驾驶视频（都是安全驾驶），PhyGenesis 通过 CARLA 生成多样化挑战驾驶场景（急转向、近距离交互、避障等），从中提取物理监督信号来引导模型学习极端条件下的物理合理动态。这些挑战轨迹学习"策略既实现了轨迹纠正，也保证了物理一致的视频生成。

## 技术架。

**Vision Encoding（视觉编码）**：PhyGenesis 包含两个核心组件。物理条件生成器接收可能不合理的轨迹输入，通过物理约束优化将其修正为合理的条件表示。物理增强视频生成器基于扩散模型架构，将修正后的条件注入去噪过程，生成多视图驾驶视频。

**Knowledge Learning（知识学习）**：PhyGenesis 的知识来源于混合数据：真实世界驾驶视频（提供自然驾驶的外观分布）+ CARLA 仿真器数据（提供极端驾驶场景的物理监督）。模型通过挑战轨迹学习策略，从 CARLA 数据中学习什么样的轨迹是物理合理的、轨迹与视频帧之间的因果对应关系。物理条件生成器学习将不合理输入"投影"到合理的轨迹空间。

**Controllable Simulation（可控模拟）**：PhyGenesis 的核心控制是物理条件生成器，它能自动纠正输入轨迹中的不物理部分。这实现有鲁棒控制"——即使用户输入了在真实世界中会导致碰撞或翻车的轨迹，模型也能自动调整为合理版本并生成对应视频。在挑战性轨迹条件下，PhyGenesis 的综合性能一致超的SOTA 方法。

## 代码实现要点

项目页面 [wm-research.github.io/PhyGenesis](https://wm-research.github.io/PhyGenesis/)。代码开源在 [wm-research/PhyGenesis](https://github.com/wm-research/PhyGenesis)。框架包括物理条件生成器、物理增强视频生成器在 CARLA 数据生成管线。

## 关键创新。

1. **物理条件纠正**：自动修正不合理的输入轨迹为物理合理条件
2. **CARLA 合成监督**：利用仿真器生成挑战场景的物理监督信。
3. **挑战轨迹学习策略**：让模型学会在极端条件下保持物理一致。
4. **混合数据训练**：真实数据+ CARLA 仿真数据的联合利。
5. **轨迹鲁棒生成**：对不完美输入轨迹具有鲁棒性，实用性更。

## 代表性结。

PhyGenesis 在挑战性轨迹条件下的视频生成质量一致超的SOTA 方法。当输入不合理轨迹时，PhyGenesis 能自动修正并在生成视频中展示物理合理的行为。在 CARLA 数据混合训练后，模型也能在真实驾驶数据上保持高质量生成，未出现仿真真实差异导致的性能退化。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
