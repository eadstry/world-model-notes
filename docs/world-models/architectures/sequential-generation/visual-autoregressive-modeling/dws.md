---
title: "Pre-Trained Video Generative Models as World Simulators"
design: "DWS"
arxiv: https://arxiv.org/abs/2502.07825
---

# DWS: Pre-Trained Video Generative Models as World Simulators

::: info 论文信息
- **Design**: DWS
- **论文全称**: Pre-Trained Video Generative Models as World Simulators
- **arXiv**: [https://arxiv.org/abs/2502.07825](https://arxiv.org/abs/2502.07825)
:::

## 学习笔记

### 核心思想

DWS（Dynamic World Simulation）提出一种将预训练视频生成模型转化为可控世界模拟器的新范式。当前视频生成模型虽然在生成逼真视频方面取得了巨大进展，但它们本质上是为静态条件（文本或图像）设计的，缺乏对交互性和动态环境的建模能力。DWS 的核心贡献是一个**轻量级通用动作条件模块**，可以即插即用地添加到任何预训练视频生成模型中——无论是扩散模型还是自回归 Transformer——使其具备动作可控的视频生成能力。

DWS 的另一关键在于引入**运动增强损失（motion-reinforced loss）**，通过强化模型对帧间动态的关注，显著提升了动作控制精度。此外，DWS 还将该世界模型框架应用于模型驱动的强化学习（MBRL），提出了**优先想象（prioritized imagination）**策略，在 MBRL 中以更少的环境交互步骤取得优异的采样效率。实验证明 DWS 在多种视频游戏和机器人操纵任务上均展现出卓越的有效性。

### 核心架构

**Vision Encoding（视觉编码）**：DWS 不修改预训练模型的视觉编码部分，而是添加一个轻量级的动作条件模块。对扩散模型，动作条件通过交叉注意力注入到去噪 U-Net 的中间层；对自回归 Transformer，动作 token 被插入到视觉 token 序列中。这种设计保持了预训练模型的全部视觉编码能力，同时以高效的方式引入了运动控制。

**Knowledge Learning（知识学习）**：DWS 将预训练视频生成模型的知识与动态世界仿真的学习结合在一起。模型已经蕴含了丰富的场景结构和运动模式知识，DWS 通过微调使模型学习将这些知识与新的动态控制信号关联起来。核心的创新是**运动增强损失**，相比标准的视频重建损失，该损失显式地惩罚帧间运动预测的误差，迫使模型关注"运动区域"而非"静态背景"，从而大幅提升动态预测的精确度。

**Controllable Simulation（可控模拟）**：DWS 支持多种动作控制方式——游戏中的离散动作、机器人手臂的关节角度、连续空间中的混合动作。对于 MBRL 应用，DWS 引入**优先想象**策略：在当前状态下生成多条可能的未来轨迹，通过世界模型评估每条轨迹的预期奖励，选择最优轨迹进行探索。相比传统的均匀采样策略，该方法显著提高了探索效率。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
