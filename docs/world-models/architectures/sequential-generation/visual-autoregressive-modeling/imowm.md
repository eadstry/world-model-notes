---
title: "iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation"
design: "iMoWM"
arxiv: https://arxiv.org/abs/2510.09036
---

# iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation

::: info 论文信息
- **Design**: iMoWM
- **论文全称**: iMoWM: Taming Interactive Multi-Modal World Model for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2510.09036](https://arxiv.org/abs/2510.09036)
:::

## 学习笔记

### 核心思想

iMoWM（Interactive Multi-Modal World Model for Robotic Manipulation）是一个**交互式多模态世界模型**，旨在将 2D 视频世界模型扩展为包含 3D 空间信息的精细化世界模型。当前 2D 视频世界模型在机器人操纵中取得了令人鼓舞的进展，但缺乏几何和空间理解能力，无法捕捉对操控成功至关重要的 3D 结构。iMoWM 的核心贡献是自回归地同时生成**彩色图像、深度图和机械臂掩码**——通过多模态表示来隐式建模 3D 结构信息。

iMoWM 的第二个关键创新是 MMTokenizer（多模态 tokenizer），将不同模态（RGB、深度、掩码）统一编码为紧凑的 token 表示。iMoWM 巧妙地**复用大规模预训练的 VideoGPT 模型**作为初始化，同时有效处理多模态数据。多模态预测实现了双重价值：(1) 视觉监督——深度和掩码提供的额外监督使 RGB 预测更加精准；(2) 下游应用——生成的深度图和掩码可以直接用于 model-based RL 的奖励计算和策略训练，也可用于真实世界的模仿学习。

### 核心架构

**Vision Encoding（视觉编码）**：iMoWM 使用 MMTokenizer（多模态统一编码器）：(1) RGB 图像通过标准 VQ-VAE 编码为视觉 token，捕捉语义和纹理信息；(2) 深度图通过独立编码器编码为深度 token，捕捉 3D 几何结构；(3) 机械臂掩码通过轻量编码器编码，捕捉操纵器位置和姿态。三个维度在 token 维度上进行拼接，形成统一的多模态 token 序列。MMTokenizer 的设计使 token 表示紧凑（避免模态冗余），并通过端到端的方式联合训练所有编码器。

**Knowledge Learning（知识学习）**：iMoWM 以预训练 VideoGPT 权重为初始化，在深度和掩码的支持下进行联合微调。训练目标包括多模态重建损失：RGB 使用感知损失 + L1 损失，深度图使用 L1 + 结构相似性损失，掩码使用交叉熵损失。预训练的 VideoGPT 已经蕴含了丰富的场景结构和运动模式知识。iMoWM 通过额外的几何监督信号来增强这些知识——深度图为模型提供显式的几何信息，机械臂掩码让模型关注操纵器本身（位置和姿态）。

**Controllable Simulation（可控模拟）**：iMoWM 以机器人动作为条件进行未来帧的多模态生成。多模态输出在下游应用中发挥巨大价值：(1) **Model-based RL**：生成的多模态预测可以计算丰富的奖励信号（碰撞检测、深度变化、目标接近度等）；(2) **模仿学习**：生成的多模态训练数据包含额外的场景信息来训练策略网络；(3) **Sim-to-Real 迁移**：多模态生成有助于弥合仿真-真实之间的视觉差异。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
