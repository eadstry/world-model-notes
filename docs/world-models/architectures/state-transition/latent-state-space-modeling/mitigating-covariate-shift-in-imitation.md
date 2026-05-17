---
title: "Mitigating Covariate Shift in Imitation Learning for Autonomous Vehicles Using Latent Space Generative World Models"
arxiv: https://arxiv.org/abs/2409.16663
---

# Mitigating Covariate Shift in Imitation Learning for Autonomous Vehicles Using Latent Space Generative World Models

::: info 论文信息
- **论文全称**: Mitigating Covariate Shift in Imitation Learning for Autonomous Vehicles Using Latent Space Generative World Models
- **arXiv**: [https://arxiv.org/abs/2409.16663](https://arxiv.org/abs/2409.16663)
:::

## 核心思想

本文提出使用 latent space 生成式世界模型来解决自动驾驶模仿学习中的协变量偏移（covariate shift）问题。模仿学习中 agent 训练时的数据分布与执行时的数据分布不一致（因为策略错误会偏的完美"轨迹），导致级联错误。核心解决方案是：使用世界模型在与训练分布不同的状态点上生成新的训练数据，使策略学会从错误中恢复。
该方法的关键是用世界模型进行"纠错数据增强"——当策略偏离专家轨迹时，世界模型的latent space 中生成偏离状态下的合理未来帧，用于重新训练策略。这使得策略不再是简单记忆专家动作，而是理解如何从各种偏离状态恢复。
## 技术架。
**Vision Encoding（视觉编码）**：使用VAE 编码器将驾驶场景（前视图 + BEV）压缩为 latent state。
**Knowledge Learning（知识学习）**：VAE-based latent dynamics model 学习驾驶状态的演化。在训练时，模型的expert 数据上policy-induced 偏离数据上混合训练。World model 学习的latent space 中从偏离状态预测正确回到轨道"的未来。
**Controllable Simulation（可控模拟）**：世界模型用于生成纠错轨迹"：给定偏离状态，生成回到轨道的state-action 对，这些对加入训练集。策略通过 behavior cloning + world model 生成的纠错数据进行训练。
## 代码实现要点

暂无开源代码。基准VAE latent dynamics + behavior cloning + data augmentation。在 CARLA 模拟器上评估。
## 关键创新。
1. **世界模型解决 covariate shift**：用 latent generation 来缓解模仿学习的分布偏移
2. **纠错数据增强**：世界模型生成偏离状态下的恢复轨迹3. **VAE-based latent dynamics**：使用VAE 学习驾驶状态演示4. **从错误中学习**：策略学会从偏离状态恢。
## 代表性结。
在 CARLA 驾驶任务上，该方法将模仿学习策略的碰撞率降低 40%，路线完成率提升 25%。特别是在弯道等容易出现 covariate shift 的高风险场景中优势明显。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
