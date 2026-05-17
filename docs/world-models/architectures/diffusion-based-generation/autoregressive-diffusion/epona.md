---
title: "Epona: Autoregressive Diffusion World Model for Autonomous Driving"
design: "Epona"
arxiv: https://arxiv.org/abs/2506.24113
github: https://github.com/Kevin-thu/Epona
---

# Epona: Autoregressive Diffusion World Model for Autonomous Driving

::: info 论文信息
- **Design**: Epona
- **论文全称**: Epona: Autoregressive Diffusion World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2506.24113](https://arxiv.org/abs/2506.24113)
- **GitHub**: [https://github.com/Kevin-thu/Epona](https://github.com/Kevin-thu/Epona)
:::

## 学习笔记

## 核心思想

Epona（ICCV 2025，南洋理工大学）是一个用于自动驾驶的自回归扩散世界模型，旨在解决现有视频扩散世界模型的两大痛点：(1) 无法进行**灵活长度的长时预测*——传统扩散模型依赖固定长度帧序列的全局联合分布建模，而非逐时间步构建局部分布；(2) 难以**整合轨迹规划**——视觉建模与运动规划通常是分离的。
Epona 通过两项关键创新实现局部时空分布建模：(1) **解耦时空分解*——将时序动力学建模与细粒度未来世界生成分离，使时间预测和空间生成各自独立优化，实现灵活长度的预测规2) **模块化轨迹与视频预测**——在端到端框架中无缝融合运动规划与视觉建模，世界模型同时输出未来轨迹和对应的高质量视觉内容。
架构支持高分辨率长时生成，并引入新颖的*链式前向训练策略**（chain-of-forward training）以解决自回归循环中的误差累积。实验取式7.4% FVD 改善和比此前工作长数分钟的预测时长。学习到的世界模型进一步作为*实时运动规划潜*，在 NAVSIM 基准上超越强大的端到端规划器。
## 技术架。
**Vision Encoding（视觉编码）**：解耦时空分解——时序动力学模块独立建模时间维度上的演化规律，视觉生成模块基于时间动力学输出生成精细的未来世界画面。高分辨率输出保持视觉质量。
**Knowledge Learning（世界知识学习）**：链式前向训练策略在自回归循环中引入前向一致性约束，有效对抗多步预测中的误差累积。端到端训练同时学习视觉建模和运动规划，两种能力相互增强。
**Controllable Simulation（可控推演）**：模块化轨迹与视频预测——轨迹规划模块输出未来运动路径，视频预测模块生成对应的视觉观测。世界模型同时作为实时运动规划器，在 NAVSIM 上超越SOTA 端到端规划器。
## 代码实现要点

- 自回归扩散世界模型：局部时空分布建模- 解耦时空分解：时序动力学的视觉生成分离
- 模块化轨迹视频预测：端到端整合规划与生成- 链式前向训练：对抗自回归循环的误差累的- 开源：Kevin-thu/Epona

## 关键创新。
- 解耦时空分解实现灵活长度长时预测- 模块化设计无缝融合轨迹规划与视觉建模
- 链式前向训练策略对抗自回归误差累的- 世界模型即实时运动规划器（NAVSIM SOTA的- FVD 改善 7.4%，预测时长延长数分钟

## 代表性结。
- ICCV 2025 接收
- FVD 改善 7.4%，预测时长超此前工作数分类- 高分辨率长时生成
- NAVSIM 基准超越 SOTA 端到端规划器
- 世界模型同时作为实时运动规划。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
