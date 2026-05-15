---
title: "Ego-centric Predictive Model Conditioned on Hand Trajectories"
design: "Ego-PM"
arxiv: https://arxiv.org/abs/2508.19852
github: https://github.com/binjiezhang/Ego-PM
---

# Ego-PM: Ego-centric Predictive Model Conditioned on Hand Trajectories

::: info 论文信息
- **Design**: Ego-PM
- **论文全称**: Ego-centric Predictive Model Conditioned on Hand Trajectories
- **arXiv**: [https://arxiv.org/abs/2508.19852](https://arxiv.org/abs/2508.19852)
- **GitHub**: [https://github.com/binjiezhang/Ego-PM](https://github.com/binjiezhang/Ego-PM)
:::

## 学习笔记

### 核心思想
Ego-PM（Ego-centric Predictive Model）针对第一人称操作场景，提出以手部轨迹为条件的自中心（egocentric）预测世界模型。核心思想是：给定当前自中心视角的 RGB 图像和未来手部运动轨迹（hand trajectory），预测未来第一人称视角视频帧。这使得机器人可以在"想象"中预览执行特定手部轨迹后的结果。

### 技术架构
- **Vision Encoding（视觉编码）**：使用预训练的图像编码器（如 ViT）将自中心视角 RGB 帧编码为 latent tokens，同时通过手部检测/跟踪提取手部关键点序列作为动作条件表示。此外，提取相机位姿和场景深度信息作为额外几何条件。
- **Knowledge Learning（知识学习）**：基于 Latent Diffusion Model（LDM），在手部轨迹条件的引导下在潜空间中预测未来帧。手部轨迹通过时序编码器（Temporal Encoder）处理，以交叉注意力的方式注入扩散模型。模型学习手部运动与场景变化之间的因果关系。
- **Controllable Simulation（可控仿真）**：通过指定不同的手部轨迹，模型可以生成不同操作结果的第一人称视频，支持"如果这样操作，场景将会如何变化"的反事实推理。

### 关键创新点
1. **手部轨迹条件**：首次将手部运动轨迹作为世界模型的核心控制条件，实现精细操作级别的预测。
2. **自中心视角**：专注第一人称操作场景（egocentric），相比第三人称更适合机器人操作规划。
3. **动作-视觉因果关系学习**：模型学习手部运动如何引起场景物体变化（抓取、移动、放下等）。

### 代码实现要点
- 开源（binjiezhang/Ego-PM），基于 PyTorch + Diffusers
- 手部轨迹使用手部关键点检测器（如 MediaPipe 或类似方案）提取
- 扩散模型骨干为 Video Diffusion Model，条件注入采用 adapter + cross-attention
- 训练数据来自自中心操作视频数据集（Ego4D 或类似数据集）

### 代表性结果
- 在自中心操作场景中生成与手部轨迹一致的高保真未来帧
- 手部运动-场景变化因果一致性优于无条件视频生成方法
