---
title: "UniDrive-WM: Unified Understanding, Planning and Generation World Model For Autonomous Driving"
design: "UniDrive-WM"
arxiv: https://arxiv.org/abs/2601.04453
website: https://unidrive-wm.github.io/UniDrive-WM/
---

# UniDrive-WM: Unified Understanding, Planning and Generation World Model For Autonomous Driving

::: info 论文信息
- **Design**: UniDrive-WM
- **论文全称**: UniDrive-WM: Unified Understanding, Planning and Generation World Model For Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2601.04453](https://arxiv.org/abs/2601.04453)
- **Website**: [https://unidrive-wm.github.io/UniDrive-WM/](https://unidrive-wm.github.io/UniDrive-WM/)
:::

## 学习笔记

### 核心思想

UniDrive-WM 是一个统一个VLM（视觉语言模型）驱动的自动驾驶世界模型，在一个架构中联合完成驾驶场景理解、轨迹规划和轨迹条件的未来图像生成。现有方法通常将感知、预测和规划视为分离的模块，导致信息在各阶段间的不完整传递和误差累积。UniDrive-WM 的核心创新在于：轨迹规划器预测未来轨迹后，以该轨迹为条件通过 VLM 图像生成器产生合理的未来帧预测——这些视觉预测反过来提供额外的监督信号来增强场景理解并迭代优化轨迹生成。模型在 Bench2Drive 基准上将 L2 轨迹误差降低 7.3%，碰撞率降低 10.4%。此外还对比分析了离散和连续输出表示对未来图像预测和下游驾驶性能的影响。
### 技术架。
**Vision Encoding（视觉编码）**：UniDrive-WM 作VLM 为统一架构骨干，接收多视图驾驶图像和文本指令作为输入。VLM 的视觉编码器将环视图像编码为视觉 token 序列，与语言 token 共同输入自回建Transformer。模型输出三个统一头：场景理解（生成场景描述和分析）、轨迹规划（预测未来自车轨迹）和轨迹条件的图像生成（生成未来帧的视觉 token）。
**Knowledge Learning（知识学习）**：UniDrive-WM 的核心学习机制是三任务协同训练。轨迹规划器预测的未来轨迹作为条件输入到 VLM 图像生成器中，图像生成器预测的未来帧不仅用于视觉监督，还通过反馈回路增强场景理解——因为能准确预测未来视觉的模型必然对当前场景有深层理解。这种生成验证理解"的闭环设计使得三个任务相互增强：更好的场景理解的更好的轨迹预预测更准确的未来帧生成成进一步验证和优化场景理解。
**Controllable Simulation（可控仿真）**：UniDrive-WM 同时对比了离散token 和连接latent 两种未来帧输出表示。离散表示（预测视觉 token 序列）与 VLM 架构天然兼容，但存在量化误差；连续表示（预测 latent 特征）保真度更高，但需要额外的解码器。实验分析了两种表示对下游驾驶任务的不同影响。模型的统一架构使其只需一次前向传播即可同时输出场景理解、轨迹规划和未来预测，优化了推理效率。
### 代码实现要点

- **VLM 统一架构**：单一 Transformer 处理视觉+语言 token，三任务共享骨干
- **轨迹条件生成**：预测的轨迹通过自适应层归一化（AdaLN）或交叉注意力注视VLM 图像生成的- **闭环反馈训练**：未来帧预测损失同时反向传播到场景理解和轨迹规划分支
- **Bench2Drive 评估**：在官方 Bench2Drive 基准上评估规划质量（L2 error、碰撞率。
### 关键创新。
- **三合一统一架构**：首次将场景理解+轨迹规划+未来生成统一在单的VLM 世界模型的- **生成验证理解**的闭环学习：未来帧预测回传监督增强场景理解，实现双向增益
- **离散 vs 连续输出分析**：系统对比两种表示对驾驶性能的影存- **Bench2Drive SOTA**：在挑战性基准上 L2 误差降低 7.3%，碰撞率降低 10.4%

### 代表性结。
- Bench2Drive 基准确L2 轨迹误差降低 7.3%，碰撞率降低 10.4%
- 统一架构通过多任务协同提升三大驾驶核心能力- 项目标 https://unidrive-wm.github.io/UniDrive-WM/


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
