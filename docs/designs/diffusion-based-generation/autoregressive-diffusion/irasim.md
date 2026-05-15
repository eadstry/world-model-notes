---
title: "IRASim: A Fine-Grained World Model for Robot Manipulation"
design: "IRAsim"
arxiv: https://arxiv.org/abs/2406.14540
github: https://github.com/bytedance/IRASim
---

# IRAsim: IRASim: A Fine-Grained World Model for Robot Manipulation

::: info 论文信息
- **Design**: IRAsim
- **论文全称**: IRASim: A Fine-Grained World Model for Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2406.14540](https://arxiv.org/abs/2406.14540)
- **GitHub**: [https://github.com/bytedance/IRASim](https://github.com/bytedance/IRASim)
:::

## 学习笔记

## 核心思想

IRASim（ICCV 2025）是字节跳动提出的**细粒度机器人操作世界模型**，核心挑战在于：现有方法在视觉空间中难以精确建模机器人与物体的精细交互，因为它们**忽视了每个动作与对应帧之间的精确对齐**。

IRASim 的关键创新是在 Diffusion Transformer 架构中引入了**帧级动作条件模块**（frame-level action-conditioning module），在每个 Transformer block 内显式建模和强化动作与帧之间的对齐关系。这使得生成的视频能够精确反映机器人的每一次微小动作如何影响场景中的物体。

IRASim 展示了令人瞩目的实用价值：(1) 生成视频质量超越所有基线方法，且随模型规模和计算增加有效提升；(2) 基于 IRASim 的策略评估与真值模拟器高度相关，有望**加速真实世界的策略评估**；(3) 通过 IRASim 进行模型规划（test-time scaling）显著提升策略性能——Push-T 基准的 IoU 从 0.637 提升至 0.961；(4) 灵活的动作控制支持键盘和 VR 控制器操作。

## 技术架构

**Vision Encoding（视觉编码）**：Diffusion Transformer 架构在像素空间中处理视频帧。历史观测帧作为条件输入，模型通过扩散过程生成未来的视觉观测。Transformer 架构天然适合建模长程的时空依赖。

**Knowledge Learning（世界知识学习）**：在机器人操作数据上训练，学习精细的机器人-物体交互动力学。帧级动作条件模块是核心——在每个 Transformer block 内将动作信号与视觉特征紧密结合，确保模型理解"这个动作导致这个视觉变化"的因果关系。

**Controllable Simulation（可控推演）**：以机器人动作轨迹为条件，生成对应的未来视觉帧。支持键盘和 VR 控制器的灵活操控。推理时可通过模型规划（MPC 式）搜索最优动作序列，显著提升策略性能。

## 代码实现要点

- Diffusion Transformer + 帧级动作条件模块，开源在 bytedance/IRASim
- 在每个 Transformer block 内注入动作条件，强化动作-帧对齐
- Push-T 基准：通过模型规划将 IoU 从 0.637 提升至 0.961
- 支持键盘和 VR 控制器的灵活操控
- 策略评估与真值模拟器高度相关 → 加速策略迭代

## 关键创新点

- 帧级动作条件模块：在每个 Transformer block 内显式对齐动作与帧
- Diffusion Transformer 用于细粒度机器人操作世界模型
- Test-time scaling：通过模型规划显著提升策略性能
- 策略评估与真值模拟器高度相关，加速真实世界策略迭代
- 灵活的操控接口（键盘、VR 控制器）

## 代表性结果

- ICCV 2025 接收
- 视频生成质量超越所有基线方法，随模型规模有效扩展
- Push-T 基准：IoU 从 0.637 提升至 0.961（通过模型规划）
- 策略评估与真值模拟器高度相关
- 支持键盘和 VR 控制器的灵活虚拟操作
