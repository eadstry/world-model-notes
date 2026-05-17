---
title: "Generative World Explorer"
design: "GenEx"
arxiv: https://arxiv.org/abs/2411.11844
github: https://github.com/GenEx-world/genex
---

# GenEx: Generative World Explorer

::: info 论文信息
- **Design**: GenEx
- **论文全称**: Generative World Explorer
- **arXiv**: [https://arxiv.org/abs/2411.11844](https://arxiv.org/abs/2411.11844)
- **GitHub**: [https://github.com/GenEx-world/genex](https://github.com/GenEx-world/genex)
:::

## 核心思想

GenEx（Generative World Explorer）提出了一种类人的"心智探索"框架：在部分观测环境中，人类可以想象（imagine）未见的世界部分并在心智中探索，从而做出更明智的决策。GenEx 将这种人类能力赋身AI 智能体，使其能够在大的3D 城市场景中进行自我中心的世界探索，生成想象的观测来更新信念，在不需要实际物理探索的情况下做出更好的决策。

智体在仅有局部视野时，可控想象"探索周围的未知区域——沿某个方向前进，生成可能看到的画面。这种心智探索可循环进行（long-horizon exploration），使智能体在决策前获取更充分的全局信息。GenEx 使用合成城市场景数据集GenEx-DB 进行训练。

## 技术架。

**Vision Encoding（视觉编码）**：采用以自我为中心的视觉编码，输入当前RGB 局部观测，编码到潜在空间后结合探索方向信息。

**Knowledge Learning（知识学习）**：核心学习任务是 viewpoint-conditioned 视频预测——沿探索方向前进时会看到什么。需要学习城市场景的空间布局规律、物体间相对位置关系及视角变换的视觉连续性。GenEx-DB 提供大规模训练场景。

**Controllable Simulation（可控模拟）**：探索方向控制（前进、左转、右转、环顾等），模型生成相应方向画面。更新后的信念输的LLM agent 决策模型，帮助做出更明智的规划。

## 代码实现要点

代码开[GenEx-world/genex](https://github.com/GenEx-world/genex)，项目页面[generative-world-explorer.github.io](https://generative-world-explorer.github.io/)。

## 关键创新。

1. **心智探索范式**：首次将 mental exploration 引入世界建模
2. **大场景长探索**：支持街区级城市场景的长时间探索
3. **信念增强决策**：探索结果增强LLM agent 规划能力

## 代表性结。

GenEx 在大型虚拟物理世界中生成高质量、空间一致的探索画面。利用GenEx 探索更新的信念显著提升LLM agent 规划质量——智能体的想象"不同方向避开障碍，选择最优路径。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
