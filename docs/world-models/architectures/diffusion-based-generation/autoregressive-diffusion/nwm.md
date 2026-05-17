---
title: "Navigation World Models"
design: "NWM"
arxiv: https://arxiv.org/abs/2412.03572
github: https://github.com/facebookresearch/nwm
---

# NWM: Navigation World Models

::: info 论文信息
- **Design**: NWM
- **论文全称**: Navigation World Models
- **arXiv**: [https://arxiv.org/abs/2412.03572](https://arxiv.org/abs/2412.03572)
- **GitHub**: [https://github.com/facebookresearch/nwm](https://github.com/facebookresearch/nwm)
:::

## 学习笔记

## 核心思想

NWM（Navigation World Model，CVPR 2025）是 Meta FAIR 由UC Berkeley（LeCun 团队）提出的导航世界模型，核心思路是将导航问题转化的*可条件控制的未来视觉预测**：给定过去的自我中心视觉观测和导航动作序列，模型直接生成未来会看到的画面。通过"想象"不同动作路径对应的视觉结果，NWM 可以评估每条路径是否通向目标，从而完成导航规划。
NWM 使用 Conditional Diffusion Transformer (CDiT) 架构，在包含人类和机器人自我中心视频的多样化数据集上训练的*参数规模模10 型*。在熟悉环境中，NWM 可以直接从头规划导航轨迹（模拟不同的动作序列并评估目标达成情况），也可以对来自外部策略的候选轨迹进行排序。不同于行为固定的监督式导航策略，NWM 在规划过程中可以**动态引入约束条件*。
更具突破性的是，NWM 利用其学到的视觉先验，仅仅*单张输入图像**就能的*陌生环境**中想象导航轨迹——无需在该环境中的任何先验经验。这使得 NWM 成为一个灵活而强大的下一代导航系统核心组件。
## 技术架。
**Vision Encoding（视觉编码）**：使用条件视频扩散模型将过去的自我中心视觉观测编码为条件信号。CDiT 骨干网络将图像帧和导航动作统一处理，通过扩散过程在像素空间中建模视觉世界的概率分布。
**Knowledge Learning（世界知识学习）**：在包含人类日常导航（Ego4D 等）和机器人导航的多样化自我中心视频数据上训练，学习通用的视觉运动动力学模B 参数据CDiT 捕获复杂的环境动态，从物体遮挡、视角变化到场景布局的时序一致性。通过在大量视频上学习条件生成，模型内化了"走这条路会看到什么的世界知识。
**Controllable Simulation（可控推演）**：导航动作（平移、旋转等）作为扩散模型的条件输入，控制生成的未来视觉内容。规划时，模型模拟多条候选轨迹的未来视觉观测，通过评估是否实现目标来选择最优路径。支持动态约束注入（如避开某些区域），使规划行为灵活可调。
## 代码实现要点

- 基于 Conditional Diffusion Transformer (CDiT)，开源在 facebookresearch/nwm
- 训练数据：Ego4D 等大规模自我中心视频数据相+ 机器人导航视界- 模型规模型0 亿参考- 推理时规划：生成多条候选轨迹的未来观测 的评估目标达成 的选择最佳路由- 支持零样本泛化到新环境：单张图像即可启动导航想象

## 关键创新。
- 将导航问题建模为可控视频生成，通过"视觉想象"评估不同动作路径
- 1B 参数据Conditional Diffusion Transformer 世界模型
- 在熟悉环境中从零规划导航轨迹，支持动态约仅- 仅凭单张输入图像即可在陌生环境中想象导航轨迹
- 灵活结合外部策略：可对策略输出的候选轨迹进行排。
## 代表性结。
- CVPR 2025 接收
- 在熟悉环境中有效规划导航轨迹，实现目标导向导航- 在陌生环境中单图即可想象合理导航轨迹
- 支持从头规划或对外部策略候选轨迹排序两种模型- 动态约束注入能力：规划时可灵活规避区域


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
