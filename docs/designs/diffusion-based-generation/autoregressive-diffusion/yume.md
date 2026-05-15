---
title: "Yume: An Interactive World Generation Model"
design: "Yume"
arxiv: https://arxiv.org/abs/2507.17744
github: https://github.com/stdstu12/YUME
---

# Yume: An Interactive World Generation Model

::: info 论文信息
- **Design**: Yume
- **论文全称**: Yume: An Interactive World Generation Model
- **arXiv**: [https://arxiv.org/abs/2507.17744](https://arxiv.org/abs/2507.17744)
- **GitHub**: [https://github.com/stdstu12/YUME](https://github.com/stdstu12/YUME)
:::

## 学习笔记

## 核心思想

Yume 旨在从图像、文本或视频创建交互式、逼真的动态世界，支持通过外设（键盘）或神经信号进行探索和控制。其核心愿景是打造一个高保真的交互式视频世界生成系统，让用户能够"走进"一张图片并在其中自由探索。

Yume提出了一个精心设计的四组件框架：相机运动量化、视频生成架构、高级采样器和模型加速。相机运动量化将连续的相机运离散化为键盘友好的离散动作，实现稳定训练和直观用户交互。Masked Video Diffusion Transformer (MVDT) 配合记忆模块支持自回归式无限视频生成。

在采样方面，Yume引入了训练无关的Anti-Artifact Mechanism (AAM) 和基于随机微分方程的Time Travel Sampling (TTS-SDE)，分别用于提升视觉质量和精确控制。模型加速方面则通过对抗蒸馏和缓存机制的协同优化实现实时生成。该工作使用高质量的世界探索数据集SEKAI进行训练。

## 技术架构

**Vision Encoding（视觉编码）**：Yume使用视频VAE将输入图像编码到潜在空间。相机运动被量化为离散的动作标签，作为视频扩散模型的条件输入。历史帧通过记忆模块维护，支持自回归生成过程中的上下文一致性。

**Knowledge Learning（世界知识学习）**：核心架构为Masked Video Diffusion Transformer (MVDT)，采用自回归去噪范式逐帧生成视频。记忆模块压缩并存储历史潜在token，为每步生成提供时序上下文。模型在SEKAI数据集上学习跨场景的世界动态和3D一致性。

**Controllable Simulation（可控推演）**：Yume通过键盘动作实现交互式世界探索，离散化的相机控制（前进、后退、左转、右转等）作为条件信号注入去噪过程。TTS-SDE采样器提供更精确的动作跟随控制，AAM机制消除生成伪影，对抗蒸馏实现实时交互（支持持续更新，追求月度迭代）。

## 代码实现要点

- 完全开源，包含代码库和模型权重
- MVDT架构基于扩散Transformer实现，集成记忆模块
- AAM和TTS-SDE作为可插拔的采样器组件
- 使用对抗蒸馏和KV缓存加速推理，目标实时交互
- SEKAI数据集提供高质量的多场景世界探索训练数据
- 模型按月迭代更新，持续推进原始目标（包括神经信号控制）

## 关键创新点

- 四组件统一框架：运动量化 + MVDT架构 + 高级采样 + 模型加速
- 相机运动量化策略：连续运动离散化为键盘友好动作，稳定训练
- AAM（Anti-Artifact Mechanism）：训练无关的伪影消除机制
- TTS-SDE采样器：基于SDE的时间旅行采样实现精确动作控制
- 对抗蒸馏+缓存协同优化实现实时交互生成

## 代表性结果

- 在多种场景和应用中取得显著的交互式世界生成效果
- 支持键盘实时探索生成的动态世界
- 高质量视觉输出和精确的动作跟随能力
- 模型加速策略有效降低推理延迟
