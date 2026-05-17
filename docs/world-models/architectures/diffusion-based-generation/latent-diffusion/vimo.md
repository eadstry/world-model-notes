---
title: "ViMo: A Generative Visual GUI World Model for App Agents"
design: "ViMo"
arxiv: https://arxiv.org/abs/2504.13936
github: https://github.com/ai-agents-2030/ViMo
---

# ViMo: A Generative Visual GUI World Model for App Agents

::: info 论文信息
- **Design**: ViMo
- **论文全称**: ViMo: A Generative Visual GUI World Model for App Agents
- **arXiv**: [https://arxiv.org/abs/2504.13936](https://arxiv.org/abs/2504.13936)
- **GitHub**: [https://github.com/ai-agents-2030/ViMo](https://github.com/ai-agents-2030/ViMo)
:::

## 核心思想

VIMO (Video to Motion) 是提出的使用视频世界模型进行行人运动预测的方法。核心创新是将世界模型应用于行人轨迹预测——通过学习行人视频中的运动模式，建立行人的可视化运动动力学模型。VIMO 使用扩散模型从过去的行人和场景视频中预测未来行人的运动轨迹和对应的视觉外观。

VIMO 的关键贡献是"从视频到运动"的范式：传统行人轨迹预测只输入2D 坐标轨迹，VIMO 同时生成行人的未来视频帧（包含运动模式和外观），这种可视化预测使模型对物理约束（如与其他行人和障碍物的碰撞）有更全面的理解。

## 技术架。

**Vision Encoding（视觉编码）**：使用VAE encoder 将包含行人运动的场景帧压缩到 latent space。

**Knowledge Learning（知识学习）**：Video Diffusion Model 学习行人动力学。模型以历史场景帧（包括行人当前位置和周围环境）为条件，去噪生成包含行人未来位置的场景帧。Trajectory 作为 attention 中的条件 embedding 注入去噪过程。

**Controllable Simulation（可控模拟）**：通过调节 trajectory condition 来生成不同运动轨迹对应的场景帧。可用于"假设行人这样走→场景会如何变化的规划和仿真。

## 代码实现要点

暂无开源代码。基准Video Diffusion Model + trajectory-conditioned denoising。在 SDD（Stanford Drone）、ETH/UCY 等行人数据集上评估。

## 关键创新。

1. **视频世界模型用于行人预测**：生成行人运动的视觉呈现
2. **轨迹条件视频生成**：控制行人运动的不同假设
3. **物理约束可视检测*：生成的视频可视觉检查碰撞和交互
4. **多模态未的*：扩散模型可生成多种可能的行人运。

## 代表性结。

在SDD iETH/UCY 行人轨迹预测基准上，VIMO 的轨迹预测误差（ADE/FDE）与专用预测器竞争，同时生成合理的行人运动视频。视频质量展现出行人对障碍物和其他行人的即时交互（如避让）。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
