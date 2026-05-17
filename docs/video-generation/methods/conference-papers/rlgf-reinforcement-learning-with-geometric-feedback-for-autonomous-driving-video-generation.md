---
title: "RLGF: Reinforcement Learning with Geometric Feedback for Autonomous Driving Video Generation"
arxiv: https://arxiv.org/abs/2509.16500v2
venue: NeurIPS
year: 2025
---

# RLGF: Reinforcement Learning with Geometric Feedback for Autonomous Driving Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2509.16500v2](https://arxiv.org/abs/2509.16500v2)
:::

## 学习笔记

### 核心贡献
- 首次将强化学习与几何反馈引入自动驾驶视频生成，利用潜空间感知模型的奖励信号优化扩散模型，以解决合成视频中的几何畸变问题
- 提出潜空间窗口优化技术（Latent-Space Windowing Optimization），在扩散过程中对中间潜变量进行窗口化几何评估和定向反馈
- 设计分层几何奖励系统（Hierarchical Geometric Reward, HGR），提供点-线-面对齐和场景占据一致性的多层次奖励约束
- 提出 GeoScores 评估指标量化几何畸变，在 nuScenes 上对 DiVE 模型实现几何误差显著降低（VP 误差降 21%，深度误差降 57%）并提升 3D 检测 mAP 12.7%

### 方法细节
- RLGF 框架：强化学习策略优化视频扩散模型，奖励信号来自专用潜空间自动驾驶感知模型而非外部人工标注
- 潜空间窗口优化：在去噪过程中对中间潜变量切分为窗口，分别计算几何奖励并反向传播梯度，实现细粒度几何控制
- 分层几何奖励：包含低级点-线-面对齐奖励和高级场景占据一致性奖励，逐层约束生成视频的几何结构
- GeoScores：多维度几何质量指标（视点误差、深度误差等），定量评估合成视频的几何失真程度
- 即插即用设计：可直接应用于 DiVE 等现有视频扩散模型之上，无需重新训练基础生成模型

### 关键发现
- 当前最先进视频生成模型尽管视觉真实感强，但存在细微的几何畸变，导致合成数据在 3D 目标检测任务中性能大幅下降
- RLGF 的几何一致性提升可显著缩小合成数据与真实数据之间的 3D 检测性能差距（mAP 提升 12.7%）
- 分层几何奖励系统的多层级联合约束比单一几何约束效果更优，场景占据一致性奖励对检测任务的贡献最大

### 方法归类
- **范式**: Reinforcement Learning + Diffusion Model
- **关键技术**: Latent-Space Windowing Optimization, Hierarchical Geometric Reward, GeoScores
- **适用场景**: Autonomous Driving Video Generation, Geometric-Consistent Synthetic Data, Perception Model Pretraining
