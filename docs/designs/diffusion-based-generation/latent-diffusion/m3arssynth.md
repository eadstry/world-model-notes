---
title: "Martian World Models: Controllable Video Synthesis with Physically Accurate 3D Reconstructions"
design: "M3arsSynth"
arxiv: https://arxiv.org/abs/2507.07978
github: https://github.com/loongfeili/Martian-World-Model
---

# M3arsSynth: Martian World Models: Controllable Video Synthesis with Physically Accurate 3D Reconstructions

::: info 论文信息
- **Design**: M3arsSynth
- **论文全称**: Martian World Models: Controllable Video Synthesis with Physically Accurate 3D Reconstructions
- **arXiv**: [https://arxiv.org/abs/2507.07978](https://arxiv.org/abs/2507.07978)
- **GitHub**: [https://github.com/loongfeili/Martian-World-Model](https://github.com/loongfeili/Martian-World-Model)
:::

## 学习笔记

### 核心思想
M3arsSynth 针对火星地形场景，提出将物理精确的 3D 重建与可控视频合成相结合的 Martian World Model。核心思想是：将火星车拍摄的稀疏多视图图像重构为带物理约束的 3D 场景表示，并以此 3D 表示作为条件，使用扩散模型生成新视角下的逼真视频，从而实现火星地形的可探索仿真。

### 技术架构
- **Vision Encoding（视觉编码）**：采用 Structure from Motion（SfM）和多视图立体匹配（MVS）重建火星地形的密集 3D 点云与网格，使用辐射场或 3D Gaussian 表示场景几何，提取视角相关的几何与纹理特征。
- **Knowledge Learning（知识学习）**：基于重建的 3D 表示，训练 latent diffusion model（LDM）学习火星地形的外观分布。模型以 3D 几何先验（深度图、法线图）为条件，在潜空间中建模火星场景的视觉变化规律。
- **Controllable Simulation（可控仿真）**：通过指定相机轨迹和 3D 场景条件，模型可生成任意视角的火星地形视频，支持光照调整和物理约束，实现火星探测任务的可控仿真与规划。

### 关键创新点
1. **物理精确 3D 重建 + 生成式视频合成**：将传统 SfM/MVS 重建与扩散生成相结合，确保生成视频的 3D 几何一致性。
2. **火星领域专属世界模型**：首个针对外星地形（火星）的世界模型，填补了地外探测仿真的空白。
3. **可控视频合成**：通过 3D 几何条件（深度、法线）和相机轨迹实现任意视角的可控生成。

### 代码实现要点
- GitHub 开源（loongfeili/Martian-World-Model），基于 PyTorch
- 3D 重建模块使用 COLMAP 或类似 SfM/MVS pipeline
- 扩散模型基于 Stable Video Diffusion 架构，接收深度/法线条件
- 生成结果通过 3D 几何一致性指标（重投影误差）评估

### 代表性结果
- 在火星探测仿真场景中生成高保真、多视角连续视频
- 相比纯 2D 生成方法，3D 几何一致性和视角间连续性显著提升
