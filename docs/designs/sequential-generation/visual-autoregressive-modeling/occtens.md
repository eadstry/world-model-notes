---
title: "OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction"
design: "OccTENS"
arxiv: https://arxiv.org/abs/2509.03887
---

# OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction

::: info 论文信息
- **Design**: OccTENS
- **论文全称**: OccTENS: 3D Occupancy World Model via Temporal Next-Scale Prediction
- **arXiv**: [https://arxiv.org/abs/2509.03887](https://arxiv.org/abs/2509.03887)
:::

## 学习笔记

### 核心思想
OccTENS 提出将 3D 占用（Occupancy）世界建模与时序多尺度预测（Temporal Next-Scale Prediction）相结合。核心思想是：将自动驾驶场景表示为 3D 占用格（occupancy grid），使用自回归 Transformer 在多个空间尺度上逐级预测未来的 3D 占用状态，从而构建一个在 3D 几何空间中运行的、多尺度一致的世界模型。

### 技术架构
- **Vision Encoding（视觉编码）**：使用 BEV 特征提取器（如 LSS 或 BEVFormer 变体）将多视图 RGB 图像提升为 BEV 特征图，进一步通过 occupancy head 生成当前帧的 3D 占用表示。占用格编码了空间的占据/空闲/未知三种状态。
- **Knowledge Learning（知识学习）**：核心是 Temporal Next-Scale Transformer——在时间维度上自回归预测下一帧的 occupancy，同时在空间尺度上采用层次化策略：先预测低分辨率占用（粗粒度），再以粗预测为条件预测高分辨率占用（细粒度）。这种多尺度渐进式预测提高了效率和大范围空间一致性。
- **Controllable Simulation（可控仿真）**：预测的 3D 占用支持行为规划——包括碰撞检测、可行区域推断、轨迹规划等，可直接用于自动驾驶决策。

### 关键创新点
1. **3D 占用世界模型**：直接在 3D 占用空间中运行的世界模型，比 2D 视频世界模型具有更强的几何感知能力。
2. **时序多尺度预测**：Next-Scale Prediction 策略——从粗到细的空间尺度渐进预测，平衡计算效率与预测精度。
3. **统一几何表示**：3D 占用作为统一的场景表示，同时支持预测、规划和下游任务。

### 代码实现要点
- 基于 PyTorch，使用稀疏卷积或 Swin Transformer 处理 3D 占用数据
- Occupancy tokenizer 将 3D 占用格编码为序列 tokens
- 多尺度预测通过层级化 Transformer decoder 实现
- 训练损失包括 occupancy 分类损失（交叉熵）和时间一致性正则化

### 代表性结果
- 在 nuScenes 和 Waymo Open Dataset 上实现 SOTA 的 3D 占用预测精度
- 多尺度预测相比单尺度在远距离和大范围场景中提升显著
