---
title: "Olaf-World: Orienting Latent Actions for Video World Modeling"
design: "Olaf-World"
arxiv: https://arxiv.org/abs/2602.10104
github: https://github.com/showlab/Olaf-World
---

# Olaf-World: Orienting Latent Actions for Video World Modeling

::: info 论文信息
- **Design**: Olaf-World
- **论文全称**: Olaf-World: Orienting Latent Actions for Video World Modeling
- **arXiv**: [https://arxiv.org/abs/2602.10104](https://arxiv.org/abs/2602.10104)
- **GitHub**: [https://github.com/showlab/Olaf-World](https://github.com/showlab/Olaf-World)
:::

## 学习笔记

### 核心思想
Olaf-World（Orienting Latent Actions）提出在视频世界模型中引入可定向的隐动作（latent actions）概念。核心思想是：将隐动作空间结构化为有向表示（oriented latent actions），使每个隐动作对应一个明确的环境变化方向（如"向前移动"、"左转"），从而增强世界模型的可控性和可解释性。

### 技术架构
- **Vision Encoding（视觉编码）**：使用标准 Video VAE 将视频帧编码为 latent tokens序列，同时用可学习的动作码本（action codebook）对隐动作进行向量量化（VQ），每个码本向量对应一个语义明确的行为方向。
- **Knowledge Learning（知识学习）**：基于 Diffusion Transformer，通过定向对比学习（orienting contrastive learning）训练隐动作的语义对齐：使执行相同方向动作的视频片段在隐动作空间中靠近，不同方向的远离。扩散模型在去噪时以所选隐动作为条件生成对应方向的视频。
- **Controllable Simulation（可控仿真）**：用户可以通过选择隐动作码本中的向量来控制生成视频的变化方向，实现面向目标的视频生成和规划。

### 关键创新点
1. **定向隐动作**：首次将隐动作空间显式方向化，使每个隐动作有明确的语义方向（可解释、可组合）。
2. **动作码本 + 对比学习**：通过 VQ 码本 + 定向对比学习实现隐动作的语义对齐，无需动作标注。
3. **语义可解释性**：隐动作空间可视化显示每个方向对应具体的行为类型（前进、转弯、停止等）。

### 代码实现要点
- 开源（showlab/Olaf-World），基于 PyTorch
- 动作码本使用 VQ-VAE 风格，码本大小约 64-256
- 定向对比学习使用 triplet loss 或 InfoNCE，正样本对来自同向动作片段
- 实验环境包括自动驾驶（CARLA）和 Minecraft

### 代表性结果
- 在 CARLA 中实现可解释的隐动作控制（前进/左转/右转/停止）
- 方向对齐准确率超过 90%，隐动作的可控性优于 DreamerV3
