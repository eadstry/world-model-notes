---
title: "EVA: Aligning Video World Models with Executable Robot Actions via Inverse Dynamics Rewards"
design: "EVA"
arxiv: https://arxiv.org/abs/2603.17808
github: https://github.com/RobbinW/EVA
---

# EVA: Aligning Video World Models with Executable Robot Actions via Inverse Dynamics Rewards

::: info 论文信息
- **Design**: EVA
- **论文全称**: EVA: Aligning Video World Models with Executable Robot Actions via Inverse Dynamics Rewards
- **arXiv**: [https://arxiv.org/abs/2603.17808](https://arxiv.org/abs/2603.17808)
- **GitHub**: [https://github.com/RobbinW/EVA](https://github.com/RobbinW/EVA)
:::

## 学习笔记

### 核心思想
EVA（Executable Video Actions）针对视频世界模型与真实机器人动作之间的鸿沟，提出通过逆动力学奖励（Inverse Dynamics Rewards）将视频生成与可执行机器人动作对齐。核心思想是：世界模型生成未来视频后，使用逆动力学模型推断从当前帧到生成帧所需的动作，并验证该动作是否物理可行（可执行），以可行度作为额外的奖励信号来训练世界模型。

### 技术架。
- **Vision Encoding（视觉编码）**：使用Video VAE 将观测视频帧编码不latent tokens，同时编码机器人本体状态（关节角、末端位姿）。
- **Knowledge Learning（知识学习）**：包含三个子模块的1) Video World Model：基准Latent Diffusion Model 根据当前帧和候选动作生成未来帧的2) Inverse Dynamics Model（IDM）：根据当前帧和生成的未来帧推断所需动作设3) Reward Module：计理IDM 推断动作与原始候选动作的一致性，作为"可执行为奖励。三者通过自监督循环（cycle-consistency）联合训练。
- **Controllable Simulation（可控仿真）**：生成的视频帧不仅视觉合理，而且对应物理可执行的机器人动作，确保生成的想象"可以转化为真实机器人的运动。

### 关键创新。
1. **逆动力学对齐**：通过 IDM 闭环验证生成视频与真实动作的一致性，确保生成内容的可执行性。
2. **Cycle-Consistency 训练**：视频动作-视频的循环一致性损失，使世界模型不产生无法执行的动作幻觉。
3. **动作可执行性约束*：首次在视频世界模型训练中引入物理可执行性作为优化目标。

### 代码实现要点
- 开源（RobbinW/EVA），基于 PyTorch + Diffusers
- IDM 为轻量MLP 量Transformer，将帧对映射到动。
- 训练损失 = 视频重建损失 + 动作一致性损失+ IDM 预测损失
- 实验平台的robosuite 和真实Franka 机器。

### 代表性结。
- 生成视频对应的动作可执行率（action realizability）相比基线方法大幅提供>30%
- 在真实机器人上部署时，策略迁移成功率显著提高

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
