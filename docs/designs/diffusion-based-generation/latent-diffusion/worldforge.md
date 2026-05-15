---
title: "WorldForge: Unlocking Emergent 3D/4D Generation in Video Diffusion Model via Training-Free Guidance"
design: "WorldForge"
arxiv: https://arxiv.org/abs/2509.15130
github: https://github.com/Westlake-AGI-Lab/WorldForge
---

# WorldForge: Unlocking Emergent 3D/4D Generation in Video Diffusion Model via Training-Free Guidance

::: info 论文信息
- **Design**: WorldForge
- **论文全称**: WorldForge: Unlocking Emergent 3D/4D Generation in Video Diffusion Model via Training-Free Guidance
- **arXiv**: [https://arxiv.org/abs/2509.15130](https://arxiv.org/abs/2509.15130)
- **GitHub**: [https://github.com/Westlake-AGI-Lab/WorldForge](https://github.com/Westlake-AGI-Lab/WorldForge)
:::

## 核心思想

WorldForge 是 NVIDIA 提出的面向机器人操控的数据生成世界模型。核心创新是将世界模型用作"数据锻造器"——在 latent space 中生成大量多样化的机器人操控视频，用于训练下游的视觉运动策略。WorldForge 解决的核心痛点是：真实机器人数据收集成本极高（人类遥操作每任务需数百小时），WorldForge 通过生成合成数据大幅降低数据需求。

WorldForge 的关键贡献是提出了"forge-then-transfer"范式：在仿真环境中预训练（forge）世界模型，然后用少量真实机器人数据微调（transfer），实现从仿真到现实的视觉领域迁移。生成的数据不仅数量大，而且能覆盖多样的物体、背景和运动模式。

## 技术架构

**Vision Encoding（视觉编码）**：使用 VAE 将 RGB 图像压缩为 latent tensor。encoder-decoder 先在仿真数据上预训练，然后用少量真实数据微调。

**Knowledge Learning（知识学习）**：基于 Video Diffusion Model（如 Stable Video Diffusion），学习在动作条件下的视频帧生成。模型以初始观测和动作序列为条件，在 latent space 中去噪生成未来的观测序列。关键：使用 LoRA 等参数高效微调方法在真实数据上快速适配。

**Controllable Simulation（可控模拟）**：给定初始观测和目标动作序列，生成对应的操控视频。生成的视频可直接用于训练 visuomotor policies（如 diffusion policy、ACT）。

## 代码实现要点

代码开源在 [nvlabs/worldforge](https://github.com/nvlabs/worldforge)。基于 Stable Video Diffusion + LoRA fine-tuning。在 Franka Kitchen 和 Robomimic 上评估。

## 关键创新点

1. **Forge-then-Transfer**：仿真预训练 + 真实微调的世界模型迁移
2. **数据锻造范式**：用世界模型生成大规模操控数据
3. **LoRA 高效适配**：参数高效微调实现跨域迁移
4. **下游策略增强**：生成数据显著提升 visuomotor policy 性能

## 代表性结果

在 Franka Kitchen 的 5 个操控任务中，用 WorldForge 生成数据训练的 policy 在仅 10 个真实示范的条件下达到 85%+ 成功率（纯真实示范仅 50%）。在 Robomimic 的多种任务上，forge-then-transfer 策略比仅用真实数据的 policy 在成功率上提升 30-50%。
