---
title: "GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction"
design: "GaussianWorld"
arxiv: https://arxiv.org/abs/2412.10373
github: https://github.com/zuosc19/GaussianWorld
---

# GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction

::: info 论文信息
- **Design**: GaussianWorld
- **论文全称**: GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction
- **arXiv**: [https://arxiv.org/abs/2412.10373](https://arxiv.org/abs/2412.10373)
- **GitHub**: [https://github.com/zuosc19/GaussianWorld](https://github.com/zuosc19/GaussianWorld)
:::

## 学习笔记

### 核心思想

GaussianWorld 是一种基于世界模型的框架，将 3D 占用预测重新定义为以当前传感器输入为条件的 4D 占用预测问题。现有时序方法通常只是简单融合前序帧的表示来推断当前 3D 占用，但忽略了驾驶场景的连续性以及 3D 场景演化提供的强先验知识（例如只有动态物体移动，静态场景保持一致）。GaussianWorld 的核心创新是将场景演化显式分解为三个因素：(1) 静态场景的自我运动对齐；(2) 动态物体的局部运动；(3) 新观察场景的补全。然后使用高斯世界模型（3D Gaussian Splatting）显式利用这些先验进行场景演化推理，在不增加额外计算开销的情况下提升单帧模型性能 2%+ mIoU。

### 技术架构

**Vision Encoding（视觉编码）**：GaussianWorld 使用 3D Gaussian Splatting 作为世界表示——将场景表示为一组具有位置、协方差、颜色和不透明度属性的 3D 高斯椭球体。视觉编码分为三个并行路径：自我运动对齐将上一时刻的高斯场通过自车位姿变化刚性变换到当前坐标系；动态物体运动预测更新移动物体的高斯位置和属性；新观察区域补全根据当前传感器观测推断新进入视野区域的高斯分布。

**Knowledge Learning（知识学习）**：模型在 NuScenes 数据集上以自监督方式训练。关键学习信号来自三个方面：预测的高斯场渲染后的图像应与实际观测一致；预测量占用应与激光雷达点云生成的伪真值占用一致；场景演化预测应保持时序连续性。高斯表示的自然可微性使渲染和预测可以在同一框架中端到端优化。

**Controllable Simulation（可控仿真）**：GaussianWorld 主要面向 3D 占用预测任务，但它的世界模型设计使其天然支持"根据当前观测推断完整 4D 场景状态"的预测能力，可作为下游规划和控制任务的感知输入。由于不增加额外计算，该框架可高效集成到现有的占用预测流水线中。

### 代码实现要点

- **3D 高斯场景表示**：将场景编码为一组 3D 高斯，每个高斯包含位置 μ、协方差 Σ、不透明度 α 和颜色 c
- **三项分解**：自我运动对齐（刚性变换矩阵 T_ego）、动态物体预测（运动网络 Δμ_dyn）、新场景补全（新高斯生成网络）
- **可微渲染**：通过 splatting 将高斯场渲染为 2D 图像，与观测对比计算光度损失
- **代码开源**：GitHub 公开

### 关键创新点

- **4D 占用预测重定义**：将 3D 占用预测提升为场景演化驱动的 4D 预测问题
- **三项因素分解**：自车运动 + 动态物体 + 新场景补全的显式解耦
- **高斯世界模型**：使用 3DGS 作为统一的世界表示和演化载体
- **零额外计算开销**：性能提升 2%+ mIoU 但不增加推理计算量
