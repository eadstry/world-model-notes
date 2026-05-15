---
title: "DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model"
design: "Drivingdiffusion"
arxiv: https://arxiv.org/abs/2310.07771
github: https://github.com/shalfun/DrivingDiffusion
---

# Drivingdiffusion: DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model

::: info 论文信息
- **Design**: Drivingdiffusion
- **论文全称**: DrivingDiffusion: Layout-Guided multi-view driving scene video generation with latent diffusion model
- **arXiv**: [https://arxiv.org/abs/2310.07771](https://arxiv.org/abs/2310.07771)
- **GitHub**: [https://github.com/shalfun/DrivingDiffusion](https://github.com/shalfun/DrivingDiffusion)
:::

## 核心思想

DrivingDiffusion 是针对 BEV（鸟瞰视角）自动驾驶感知模型的数据增强需求而设计的布局引导多视图视频生成框架。其核心思想是：利用 3D 布局作为控制条件，通过级联的潜在扩散模型生成时空一致的高质量多视图驾驶视频，从而缓解自动驾驶多视图数据获取昂贵的问题。

DrivingDiffusion 将复杂问题分解为三个阶段。多视图单帧图像生成阶段通过相邻相机间的信息交换确保跨视图一致性。单视图视频生成阶段（多相机共享）从首帧生成后续帧，通过时间注意力查询首帧信息。后处理阶段使用时间滑动窗口算法进一步增强跨视图一致性并扩展视频长度。模型引入本地提示提升生成实例的质量。

## 技术架构

**Vision Encoding（视觉编码）**：基于潜在扩散模型（Latent Diffusion Model），使用 VAE 编码器压缩图像到隐空间。多视图模型中，相邻相机通过信息交换模块在潜在空间交互，确保相邻视角的内容对齐。

**Knowledge Learning（知识学习）**：知识学习分为三个级联阶段。阶段一学习多视图单帧生成，通过跨相机信息交换学习空间布局一致性。阶段二学习单视图时序生成，通过时间注意力从首帧多视图图像中查询后续帧信息。阶段三通过后处理和时间滑动窗口学习长视频时序一致性。本地提示机制提供实例级控制。

**Controllable Simulation（可控模拟）**：以 3D 布局（3D layout）作为核心控制条件，包括场景中物体的位置、朝向、尺寸和类别等。布局引导确保生成视频中的物体位置和运动符合物理场景约束。后处理阶段的时间滑动窗口算法支持生成任意长度的视频。

## 代码实现要点

代码开源在 [shalfun/DrivingDiffusion](https://github.com/shalfun/DrivingDiffusion)。核心模块包括：多视图单帧生成、单视图时序生成和后处理。训练基于 nuScenes 等多视图驾驶数据集。

## 关键创新点

1. **布局引导的多视图生成**：利用 3D 布局作为显式控制条件
2. **三级联分解策略**：将多视图视频生成分解为空间→时间→后处理三个阶段
3. **跨相机信息交换**：相邻相机在潜在空间进行信息交互
4. **本地提示机制**：提升生成实例质量的精细控制
5. **时间滑动窗口**：支持任意长度驾驶视频生成

## 代表性结果

DrivingDiffusion 能生成大规模逼真多相机驾驶视频（6 相机 × 多帧），覆盖复杂城市场景。跨视图一致性表现突出——车辆穿越相机边界时无变形或消失。跨帧一致性方面，时间滑动窗口确保长视频中物体运动连续流畅。生成的视频可有效增强下游 BEV 检测和分割任务。
