---
title: "Decouple and Track: Benchmarking and Improving Video Diffusion Transformers For Motion Transfer"
arxiv: https://arxiv.org/abs/2503.17350
github: https://github.com/Shi-qingyu/DeT
website: https://shi-qingyu.github.io/DeT.github.io/
venue: ICCV
year: 2025
---

# Decouple and Track: Benchmarking and Improving Video Diffusion Transformers For Motion Transfer

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.17350](https://arxiv.org/abs/2503.17350)
- **GitHub**: [https://github.com/Shi-qingyu/DeT](https://github.com/Shi-qingyu/DeT)
- **Website**: [https://shi-qingyu.github.io/DeT.github.io/](https://shi-qingyu.github.io/DeT.github.io/)
:::

## 学习笔记

### 核心贡献
- 针对视频 DiT（Diffusion Transformer）中 3D Full Attention 无法显式分离时空信息的问题，提出 DeT 方法，通过时序核（temporal kernel）平滑 DiT 特征，实现前景运动与背景外观的解耦
- 构建 MTBench，一个通用且具有挑战性的运动迁移评测基准，覆盖多样化的运动类型和场景
- 提出混合运动保真度度量（hybrid motion fidelity metric），同时考虑全局与局部运动相似性，实现比以往工作更全面的评估
- 在潜在特征空间中沿稠密轨迹引入显式监督，进一步增强运动一致性

### 方法细节
- **时序核（Temporal Kernel）**：在 DiT 特征上沿时间维度施加可学习的平滑操作，抑制背景外观的时间抖动，同时保留与运动相关的时间变化分量
- **运动-外观解耦机制**：时序核使得 DiT 中间特征的时间变化主要编码前景运动信息，而空间维度保留外观信息，从而在 3D Full Attention 架构下实现隐式解耦
- **稠密轨迹监督（Dense Trajectory Supervision）**：在 VAE 潜在空间中提取像素级稠密运动轨迹，对生成视频与源视频的轨迹一致性施加额外损失
- **MTBench 基准**：涵盖多种运动类型（人体动作、物体运动、摄像机运动等），提供标准化的运动迁移评测协议
- **混合度量**：结合全局光流相似度与局部 patch 级运动匹配，更鲁棒地评估运动迁移质量
- 整体方法无需修改 DiT 模型架构，仅需在训练时加入时序核和轨迹监督，推理时保持原有效率

### 关键发现
- 3D Full Attention 的 DiT 模型由于时空信息的强耦合，在运动迁移任务上天然劣于显式分离时空注意力的 3D U-Net 架构
- 时序核对 DiT 特征的时间平滑操作是运动-外观解耦的关键，消融实验表明去除时序核会导致运动迁移质量显著下降
- DeT 在 MTBench 上取得了运动保真度（motion fidelity）与编辑保真度（edit fidelity）的最优权衡

### 方法归类
- **范式**: Motion Transfer（运动迁移）
- **关键技术**: Temporal Kernel, Dense Trajectory Supervision, Video DiT Adaptation
- **适用场景**: 基于 DiT 架构的视频运动迁移、视频编辑中的运动保持、跨视频运动风格迁移
