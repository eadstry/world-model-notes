---
title: "Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving"
design: "Drive-WM"
arxiv: https://arxiv.org/abs/2311.17918
github: https://github.com/BraveGroup/Drive-WM
---

# Drive-WM: Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving

::: info 论文信息
- **Design**: Drive-WM
- **论文全称**: Driving into the Future: Multiview Visual Forecasting and Planning with World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2311.17918](https://arxiv.org/abs/2311.17918)
- **GitHub**: [https://github.com/BraveGroup/Drive-WM](https://github.com/BraveGroup/Drive-WM)
:::

## 核心思想

Drive-WM 是首个与现有端到端规划模型兼容的世界模型，其核心思想是利用世界模型为自动驾驶安全规划提供"多未来前的能力。传统的端到端规划模型直接输出驾驶动作，缺乏对动作后果的预见性评估。Drive-WM 可以通过生成多条驾驶动作对应的未来视频（"驶向多种未来"），然后基于图像奖励（image-based rewards）选择最优轨迹，首次将世界模型应用于安全驾驶规划。

Drive-WM 的技术关键是其视图分解（view factorization）策略下的联合时空建模。多视图驾驶视频中，空间维度一 个相机）和时间维度（多个时间步）的建模成本很高。Drive-WM 通过视图分解——将多视图建模分解为各视图独立编码跨视图交互——在保持多视图一致性的同时控制计算复杂度。

## 技术架。

**Vision Encoding（视觉编码）**：Drive-WM 采用基于扩散模型的潜在空间编码。多视图图像通过各视图独立的 VAE 编码器压缩到隐空间，随后通过视图分解模块（view factorization）进行跨视图交互。

**Knowledge Learning（知识学习）**：Drive-WM 的核心学习机制是联合时空建模（joint spatial-temporal modeling）。在视图分解的基础上，时间建模模块学习驾驶场景的时间动态——车辆的纵向和横向运动、场景元素的移动等。时空学习在真实驾驶数据集上进行，确保模型学习到物理合理的运动模式。

**Controllable Simulation（可控模拟）**：Drive-WM 的可控模拟体现在"多未来生成能力。对于当前场景，用户可输入多种驾驶操作（直行、左转、右转等），模型为每种操作生成对应未来视频。通过图像奖励函数（评估碰撞风险、车道偏离等）对候选轨迹评分，选择最优轨迹。这是世界模型在自动驾驶规划中最早的端到端应用之一。

## 代码实现要点

代码开源在 [BraveGroup/Drive-WM](https://github.com/BraveGroup/Drive-WM)，项目页的[drive-wm.github.io](https://drive-wm.github.io/)。核心流程包括多视图编码、视图分解、联合时空建模、多未来生成和图像奖励轨迹评估。

## 关键创新。

1. **首个兼容端到端规划的世界模型**：与现有规划模型无缝集成，首次将世界模型用于安全规划
2. **视图分解策略**：高效的多视图联合时空建模方。
3. **多未来生成*：同一场景为不同驾驶动作生成多个未来视。
4. **图像奖励评估**：利用生成视频质量评估和选择最优规划轨。
5. **实用导向**：展示了世界模型在实际自动驾驶安全规划中的潜。

## 代表性结。

Drive-WM 在真实驾驶数据集上生成了高质量、一致且可控的多视图视频。在多未来规划方面，模型能从多个候选轨迹中正确识别出安全的驾驶操作，避开碰撞风险轨迹。不同驾驶动作（直行、左转、右转等）对应的生成视频展现了有意义的时空差异，证明了动作条件控制的有效性。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
