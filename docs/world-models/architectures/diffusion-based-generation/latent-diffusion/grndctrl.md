---
title: "GrndCtrl: Grounding World Models via Self-Supervised Reward Alignment"
design: "GrndCtrl"
arxiv: https://arxiv.org/abs/2512.01952
website: https://rlwg-grndctrl.github.io/
---

# GrndCtrl: Grounding World Models via Self-Supervised Reward Alignment

::: info 论文信息
- **Design**: GrndCtrl
- **论文全称**: GrndCtrl: Grounding World Models via Self-Supervised Reward Alignment
- **arXiv**: [https://arxiv.org/abs/2512.01952](https://arxiv.org/abs/2512.01952)
- **Website**: [https://rlwg-grndctrl.github.io/](https://rlwg-grndctrl.github.io/)
:::

## 学习笔记

### 核心思想
GrndCtrl（Grounding Control）提出通过自监督奖励对齐来解决世界模型的接地"（grounding）问题——即如何使世界模型的预测与真实的物理世界/任务奖励保持一致。核心思想是：使用无标签的交互数据，通过自监督对比学习，将世界模型隐空间中的状态表示对齐到奖励信号空间，使得在隐空间中规划时能更准确地预判动作的奖励结果。

### 技术架。
- **Vision Encoding（视觉编码）**：使用CNN/ViT 编码器将观测图像编码为隐状态，同时使用 RSSM（Recurrent State Space Model）建模时序动态，生成随机隐状态（stochastic latent state）和确定性隐状态（deterministic state）。
- **Knowledge Learning（知识学习）**：核心是双路径对齐学习：(1) World Model Path：RSSM 预测下一帧隐状态和重建图像的2) Reward Alignment Path：自监督对比学习对齐隐状态表示与任务奖励。通过 InfoNCE 损失使相似奖励结果的状态在隐空间中靠近，不相似的远离。额外的 reward predictor 从不完全标注中自监督学习。
- **Controllable Simulation（可控仿真）**：在 reward-aligned 隐空间中使用 MPC（模型预测控制）中actor-critic 进行规划，规划结果更准确地反映真实任务奖励。

### 关键创新。
1. **自监督奖励对齐*：不需要完整标记的奖励函数，通过对比学习在隐空间中隐式编码奖励结构。
2. **接地（Grounding）概念*：正式提出世界模型接地"问题——确保隐空间规划结果与真实世界奖励一致。
3. **双路径架构*：世界模型和奖励对齐共享隐空间但通过独立损失优化，互不干扰又相互增强。

### 代码实现要点
- 基于 DreamerV3 框架扩展，添界reward alignment 模块
- 奖励对齐使用对比学习（SimCLR 风格），正样本对为同一轨迹中奖励相近的状。
- 训练分两阶段：先预训练世界模型，再添加对齐损失微。
- 实验环境包括 DMControl、Meta-World 等标注RL benchmark

### 代表性结。
- 在稀疏奖励和噪声奖励场景中，对齐后的隐空间规划成功率大幅优于 DreamerV3
- 隐空间可视化显示 reward 结构在对齐后被清晰编。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
