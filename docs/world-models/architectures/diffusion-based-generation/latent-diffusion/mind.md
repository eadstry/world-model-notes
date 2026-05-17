---
title: "MinD: Learning A Dual-System World Model for Real-Time Planning and Implicit Risk Analysis"
design: "MinD"
arxiv: https://arxiv.org/abs/2506.18897
github: https://github.com/manipulate-in-dream/MinD
---

# MinD: Learning A Dual-System World Model for Real-Time Planning and Implicit Risk Analysis

::: info 论文信息
- **Design**: MinD
- **论文全称**: MinD: Learning A Dual-System World Model for Real-Time Planning and Implicit Risk Analysis
- **arXiv**: [https://arxiv.org/abs/2506.18897](https://arxiv.org/abs/2506.18897)
- **GitHub**: [https://github.com/manipulate-in-dream/MinD](https://github.com/manipulate-in-dream/MinD)
:::

## 核心思想

MIND (Modeling Imagination for Next-generation Driving) 是提出的面向自动驾驶思想象驱动"世界模型。核心创新是"想象即规架——构建一个能在多个假设"条件下进行场景想象的世界模型，然后在这些想象中选择最安全的驾驶行为。MIND 的核心特色是"分支式多未来"——世界模型在关键决策点（如路口前）同时想象多种可能的未来（直行、左转、右转、被其他车辆影响等）。

MIND 的关键贡献是将想象关系统化地融入自动驾驶决策框架。想象不是可选的辅助，而是核心决策机制——agent 在每个决策点通过对多种未来的想象评测试"每个候选动作的安全性。

## 技术架。

**Vision Encoding（视觉编码）**：VAE encoder 压缩驾驶场景帧。多帧历史提供时序上下文。

**Knowledge Learning（知识学习）**：Multi-branch Diffusion——世界模型以当前场景中动作分支"（ego motion proposals）为条件，并行生成多个未来分支。所有分支在同一扩散过程中生成（通过 batch 维度并行），分支之间通过共享的noise space 保持一致性。

**Controllable Simulation（可控模拟）**：在每个决策点，同时生成 N 个未来分支。规划器对每个分支进行安全评估，选择"在所有想象中都安装的动作。

## 代码实现要点

暂无开源代码。基准Diffusion WM + Multi-branch imagination。在 CARLA 在 nuScenes 上评估。

## 关键创新。

1. **想象驱动决策**：想象是核心决策机制而非辅助
2. **分支式多未来**：同时想象多种动作的未来结果
3. **共享噪声的并行分确*：保证多分支间的视觉一致。
4. **全想象安全评估*：在所有想象中选择安全动作

## 代表性结。

在 CARLA 上，MIND 在复杂决策场景（如无保护左转、交叉口优先通行）中的安全性显著提升。多分支想象中agent 能预测如果我继续而对面车辆闯红灯"之类的危险分支，避免做出不安全决策。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
