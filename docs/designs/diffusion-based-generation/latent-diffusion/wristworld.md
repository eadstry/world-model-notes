---
title: "WristWorld: Generating Wrist-Views via 4D World Models for Robotic Manipulation"
design: "WristWorld"
arxiv: https://arxiv.org/abs/2510.07313
github: https://github.com/XuWuLingYu/WristWorld
---

# WristWorld: Generating Wrist-Views via 4D World Models for Robotic Manipulation

::: info 论文信息
- **Design**: WristWorld
- **论文全称**: WristWorld: Generating Wrist-Views via 4D World Models for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2510.07313](https://arxiv.org/abs/2510.07313)
- **GitHub**: [https://github.com/XuWuLingYu/WristWorld](https://github.com/XuWuLingYu/WristWorld)
:::

## 学习笔记

### 核心思想
WristWorld 针对机器人操作中的视角变化问题，提出通过 4D 世界模型生成腕部视角（wrist-view）视频。核心思想是：给定第三视角（external-view）相机图像和机器人动作序列，使用 4D（3D 空间 + 时间）世界模型生成对应的腕部相机视角视频帧。这解决了机器人操作中腕部相机视角缺失或不可靠时的感知问题。

### 技术架构
- **Vision Encoding（视觉编码）**：使用双路编码器分别处理第三视角 RGB 图像和机器人本体状态（关节角度、末端执行器位姿）。通过隐式 3D 表示（如 Triplane 或 3D Gaussian）将 2D 图像提升为 3D-aware 特征。动作序列通过时序编码器处理。
- **Knowledge Learning（知识学习）**：核心是 4D 扩散模型——在 3D 隐式表示 + 时间维度（4D）上建模场景动态，通过交叉视角注意力（cross-view attention）学习第三视角和腕部视角之间的几何变换关系，从而在外推腕部视角时保持 3D 一致性。
- **Controllable Simulation（可控仿真）**：给定第三视角图像和动作序列，模型生成对应的腕部视角视频，支持机器人在没有腕部相机的情况下"想象"腕部视图。

### 关键创新点
1. **4D 世界模型**：在 3D 空间 + 1D 时间维度上统一建模，确保生成视频的时空一致性。
2. **腕部视角生成**：针对机器人操作的特定视角需求，实现从第三视角到腕部视角的跨视角视频生成。
3. **动作条件控制**：通过机器人动作序列精确控制生成内容，使腕部视图与机械臂运动一致。

### 代码实现要点
- 开源（XuWuLingYu/WristWorld），基于 PyTorch + Diffusers
- 使用 Triplane 表示或 3D Gaussian 作为中间 3D 表示
- 扩散模型为 Video Latent Diffusion Model，条件注入包含 action tokens + 第三视角 latent
- 训练数据需同时包含第三视角和腕部视角的同步录制视频

### 代表性结果
- 在机器人操作场景生成腕部视角视频，PSNR 和 SSIM 优于单视角插值方法
- 腕部视图与机械臂动作的一致性（IoU 评估）验证了 3D 几何一致性
