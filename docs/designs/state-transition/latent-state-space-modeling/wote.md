---
title: "End-to-End Driving with Online Trajectory Evaluation via BEV World Model"
design: "WoTE"
arxiv: https://arxiv.org/abs/2504.01941
github: https://github.com/liyingyanUCAS/WoTE
---

# WoTE: End-to-End Driving with Online Trajectory Evaluation via BEV World Model

::: info 论文信息
- **Design**: WoTE
- **论文全称**: End-to-End Driving with Online Trajectory Evaluation via BEV World Model
- **arXiv**: [https://arxiv.org/abs/2504.01941](https://arxiv.org/abs/2504.01941)
- **GitHub**: [https://github.com/liyingyanUCAS/WoTE](https://github.com/liyingyanUCAS/WoTE)
:::

## 核心思想

WoTE (World-model based online Trajectory Evaluation) 是中科院提出的端到端自动驾驶框架，核心创新是将世界模型用作在线轨迹评估器。传统轨迹规划器产生候选轨迹后，缺乏有效的评估手段（通常依靠简单的碰撞检查或单步预测）。WoTE 使用 BEV 世界模型对每个候选轨迹进行多步未来模拟，评估其安全性、舒适性和交通规则合规性。

WoTE 的关键设计是"世界模型作为评判器"：规划器生成多条候选轨迹（如不同的变道方案），世界模型对每条轨迹展开 N 步模拟，预测未来场景（含其他车辆的运动），然后基于模拟结果打分。这种世界模型评估方案比启发式规则更准确，因为它考虑了交通参与者的交互式动态。

## 技术架构

**Vision Encoding（视觉编码）**：多视图环视 → BEV encoder → BEV latent state，包含道路结构、交通参与者的位置和运动等信息。

**Knowledge Learning（知识学习）**：BEV 世界模型使用 Transformer-based RSSM 学习驾驶场景的动态演化。关键输入：BEV map、traffic participants states、ego trajectory。训练使用监督学习（预测未来的 BEV occupancy、agent 轨迹和自车位置）。

**Controllable Simulation（可控模拟）**：Online evaluation loop：规划器生成 N 条候选轨迹 → 世界模型对每条轨迹展开 M 步预测（如 5 秒 25 步）→ 基于模拟结果计算 score（安全性、舒适性、进度等）→ 选择最优轨迹。并行评估所有候选轨迹。

## 代码实现要点

代码开源在 [liyingyanUCAS/WoTE](https://github.com/liyingyanUCAS/WoTE)。基于 PyTorch。BEV encoder + Transformer RSSM + trajectory evaluation。在 nuScenes 和 CARLA 上评估。

## 关键创新点

1. **世界模型作为轨迹评判器**：使用多步模拟替代启发式规则
2. **交互式动态预测**：世界模型考虑交通参与者的反应
3. **并行候选评估**：高效的多轨迹并行模拟
4. **多维度评分**：安全性、舒适性、合规性综合评估

## 代表性结果

在 nuScenes 闭环和 CARLA 上，WoTE 的碰撞率比基于规则的轨迹评估降低 30%，路线完成率提升 15%。尤其在多车交互场景（如无保护左转）中，世界模型评估的轨迹更安全合理。
