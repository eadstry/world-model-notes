---
title: "Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion"
design: "Copilot4D"
arxiv: https://arxiv.org/abs/2311.01017
website: https://waabi.ai/research/copilot-4d
---

# Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion

::: info 论文信息
- **Design**: Copilot4D
- **论文全称**: Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion
- **arXiv**: [https://arxiv.org/abs/2311.01017](https://arxiv.org/abs/2311.01017)
- **Website**: [https://waabi.ai/research/copilot-4d](https://waabi.ai/research/copilot-4d)
:::

## 学习笔记

## 核心思想

Copilot4D（ICLR 2024, Waabi）提出了一种新的世界建模范式：通过 **VQVAE 对传感器观测进行 Token 自*，然后使用*离散扩散**预测未来。这种设计的动机是解决自动驾驶世界模型的两个核心瓶颈的1) 复杂非结构化的观测空间（激光雷达点云等），(2) 需要可扩展的生成模型。
Copilot4D 的关键技术贡献是统**Masked Generative Image Transformer（MaskGIT一*重新解读为离散扩散模型，并通过一系列简单修改进行了增强。这一视角转换带来了显著的性能提升——统一了掩码建模和扩散两个方向的理论框架。
在点云观测的世界模型学习任务上，Copilot4D 下NuScenes、KITTI Odometry 在 Argoverse2 数据集上分别将先验SOTA 的Chamfer 距离降低了**超过 65%3 秒预测）和超越50%3 秒预测）**，证明了离散扩散在机器人无监督学习中的强大潜力。
## 技术架。
**Vision Encoding（视觉编码）**：VQVAE 将原始传感器观测（激光雷达点云）量化为离散token 序列。VQVAE 的编码器将连续的点云转换为离散码本索引，解码器从 token 恢复点云。这种离散化处理使非结构化的点云数据能够用标准的序列建模范式处理。
**Knowledge Learning（世界知识学习）**：离散扩散模型以过去时token 序列为条件，通过逐步去噪预测未来帧token。递归一MaskGIT 被重新表述为离散扩散——从完全掩码状态开始，逐步揭示 token，每次预测最可信息token 位置。增强改进包括优化的去噪调度和条件注入机制。
**Controllable Simulation（可控推演）**：以过去的观测序列为条件，模型通过离散扩散过程生成未来的观测token，再通过 VQVAE 解码器恢复为点云。这种自回归的潜空间推演能够预测场景中动态物体的未来位置和运动模式。
## 代码实现要点

- VQVAE 离散化：将点云观测编码为离散 token
- 离散扩散：将 MaskGIT 重新表述为扩散模型并增强
- 训练数据集：NuScenes、KITTI Odometry、Argoverse2
- 评估指标：Chamfer 距离散s/3s 预测的- Waabi 团队（Raquel Urtasun）出。
## 关键创新。
- 首次将离散扩散应用于点云世界模型
- VQVAE + 离散扩散的组合范式：先离散化再建模- 的MaskGIT 重新解读为离散扩散并增强
- 点云预测 Chamfer 距离降低 65%+了s）和 50%+频s扩- 展示离散扩散释放 GPT 式无监督学习在机器人领域的潜。
## 代表性结。
- ICLR 2024 接收
- NuScenes、KITTI Odometry、Argoverse2 三数据集验证
- 1 秒预测：Chamfer 距离降低 >65%
- 3 秒预测：Chamfer 距离降低 >50%
- 离散扩散范GPT 式无监督学习范式进入机器人领。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
