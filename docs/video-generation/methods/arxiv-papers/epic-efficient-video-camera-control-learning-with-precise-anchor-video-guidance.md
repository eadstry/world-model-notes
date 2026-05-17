---
title: "EPiC: Efficient Video Camera Control Learning with Precise Anchor-Video Guidance"
arxiv: https://arxiv.org/abs/2505.21876v1
github: https://github.com/wz0919/EPiC
website: https://zunwang1.github.io/Epic
venue: arXiv
year: 2025
---

# EPiC: Efficient Video Camera Control Learning with Precise Anchor-Video Guidance

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2505.21876v1](https://arxiv.org/abs/2505.21876v1)
- **GitHub**: [https://github.com/wz0919/EPiC](https://github.com/wz0919/EPiC)
- **Website**: [https://zunwang1.github.io/Epic](https://zunwang1.github.io/Epic)
:::

## 学习笔记

### 核心贡献

EPiC 提出了一种高效、精确的视频相机控制学习框架，核心贡献有三点：

1. **无需相机轨迹标注的 Anchor Video 自动构建**：通过基于首帧可见性（first-frame visibility）的掩码策略，直接在源视频上掩码不可见区域来生成精确的 anchor video — 无需任何点云估计或相机轨迹标注，彻底解除了对昂贵标注数据的依赖。
2. **Anchor-ControlNet 轻量级条件注入模块**：参数量不足骨干扩散模型的 1%，将 anchor video 引导信号注入可见区域到预训练的视频扩散模型（VDM）中，高效实现相机控制条件化。
3. **训练-推理解耦的泛化能力**：尽管训练时仅使用基于掩码的 anchor video，模型在推理时能鲁棒地泛化到由点云渲染生成的 anchor video，实现精确的 3D 信息引导相机控制。

### 方法细节

1. **Anchor Video 自动构建流程**：对于任意 in-the-wild 视频，取第一帧为参考帧，计算后续每一帧中哪些像素在第一帧中可见（通过光流或深度估计进行可见性判定），将不可见区域用掩码遮蔽。这样生成的 anchor video 与目标视频在可见区域高度对齐，同时自然地提供了「哪些区域需要模型生成」的隐式指示。此方法可自动为任何视频生成 (anchor, target) 的 I2V 训练对。
2. **Anchor-ControlNet 架构**：以 ControlNet 为设计蓝本，在预训练 VDM 的编码器层旁路插入一个轻量级分支，接收 anchor video 作为条件输入，仅在可见区域（由掩码定义）注入条件特征。训练时冻结 VDM 骨干，仅更新 ControlNet 分支参数，确保训练极度高效。
3. **训练与推理流程**：
   - 训练阶段：使用掩码-based anchor video + 目标视频对，最小化扩散损失。
   - 推理阶段：接受任意来源的 anchor video（包括基于点云渲染的 anchor），由用户指定的相机轨迹定义 anchor for 目标视图，模型输出相机受控的生成视频。

### 关键发现

- EPiC 在 RealEstate10K 和 MiraData 上实现了 I2V 相机控制任务的 SOTA 性能。
- 基于掩码的 anchor video 比基于点云渲染的 anchor video 质量更高、对齐更精确，因为后者依赖点云估计精度，误差会逐帧累积。
- 极小的模型参数量（<1% 骨干参数）即可实现有效的相机控制条件注入，表明 anchor video 本身就是一种信息极丰富的控制信号。
- 方法对 in-the-wild 视频具有通用性，无需修改扩散模型骨干以补偿渲染不对齐，训练效率和泛化能力均显著优于现有方法。

### 方法归类

- **任务类别**：图像到视频生成（Image-to-Video）、相机可控视频生成（Controllable Camera Video Generation）
- **技术路线**：Video Diffusion Models + ControlNet 条件控制范式
- **核心方法论**：Anchor Video 引导 + 可见性掩码自监督训练
- **相关方法脉络**：属于扩散模型条件控制（ControlNet 系）与 3D 感知生成（3D-aware generation）的交叉。与 CameraCtrl、MotionCtrl 等基于点云+轨迹标注的方法不同，EPiC 通过数据层面的自监督策略（掩码）替代了显式 3D 重建步骤，大幅降低训练成本。
