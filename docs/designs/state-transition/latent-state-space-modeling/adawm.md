---
title: "AdaWM: Adaptive World Model based Planning for Autonomous Driving"
design: "AdaWM"
arxiv: https://arxiv.org/abs/2501.13072
---

# AdaWM: Adaptive World Model based Planning for Autonomous Driving

::: info 论文信息
- **Design**: AdaWM
- **论文全称**: AdaWM: Adaptive World Model based Planning for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2501.13072](https://arxiv.org/abs/2501.13072)
:::

## 核心思想

AdaWM (Adaptive World Model) 提出了一种自适应世界模型规划框架用于自动驾驶。核心创新是使世界模型能够"自适应"不同的驾驶场景难度——在简单的直线场景中使用粗粒度的想象（节省计算），在复杂的交叉口/变道场景中使用精粒度的想象（确保安全）。

AdaWM 通过一个场景难度评估器来动态调节世界模型的 rollout 长度和频率：简单场景仅需 1-2 秒 rollout，复杂场景则需要 5-10 秒 rollout 来预见潜在风险。这使规划器能在计算效率和安全性之间取得自适应平衡。

## 技术架构

**Vision Encoding（视觉编码）**：多视图环视图像通过 BEV encoder 压缩为 latent state。

**Knowledge Learning（知识学习）**：基于 DreamerV3 风格的 RSSM 学习驾驶动力学。额外引入一个场景难度估计头（scene difficulty head），从 latent state 预测当前场景的复杂性分数（基于交通密度、路口复杂度等）。

**Controllable Simulation（可控模拟）**：自适应想象规划——planning horizon 根据场景难度动态调整。简单场景使用短 rollout（1-2 秒），复杂场景使用长 rollout（最多 10 秒）。规划频率也自适应：直线行驶低频规划，接近路口高频规划。

## 代码实现要点

暂无开源代码。基于 DreamerV3 + adaptive planning horizon。在 CARLA 和 nuScenes 上评估。

## 关键创新点

1. **自适应想象长度**：场景难度驱动的动态 rollout horizon
2. **场景难度评估器**：从 latent state 实时估计场景复杂性
3. **计算效率优化**：简单场景节省计算，复杂场景确保安全
4. **频率自适应**：规划频率随场景动态调整

## 代表性结果

在 CARLA 驾驶任务上，AdaWM 比固定 horizon 的 baseline 在保持相同安全性的前提下减少 40% 的计算开销。在 nuScenes 闭环评估中，AdAWM 在复杂场景（路口、拥堵）的通过率比固定方案高 15%。
