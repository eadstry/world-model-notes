---
title: "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model"
design: "World4Drive"
arxiv: https://arxiv.org/abs/2507.00603
github: https://github.com/ucaszyp/World4Drive
---

# World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model

::: info 论文信息
- **Design**: World4Drive
- **论文全称**: World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model
- **arXiv**: [https://arxiv.org/abs/2507.00603](https://arxiv.org/abs/2507.00603)
- **GitHub**: [https://github.com/ucaszyp/World4Drive](https://github.com/ucaszyp/World4Drive)
:::

## 学习笔记

### 核心思想

World4Drive 是一个端到端自动驾驶框架，发表于 ICCV 2025，核心目标是实现"感知标注免费"的端到端规划。现有端到端自动驾驶方法直接从传感器数据生成规划轨迹，但通常依赖昂贵的感知监督（检测框、语义分割等）来提取场景信息。World4Drive 提出利用视觉基础模型构建潜在世界模型，以自监督方式生成和评估多模态规划轨迹——完全不需要人工感知标注。具体流程：首先提取包含驾驶意图和空间语义先验的潜在世界表示（由视觉基础模型提供先验），然后基于当前场景特征和驾驶意图生成多模态规划轨迹，并在潜在空间中预测多条轨迹对应的未来状态，最后引入世界模型选择器评估并选择最佳轨迹。在 NuScenes 开环和 NavSim 闭环基准上达到 SOTA，L2 误差相对降低 18.1%，碰撞率降低 46.7%，训练收敛速度快 3.75 倍。

### 技术架构

**Vision Encoding（视觉编码）**：World4Drive 使用视觉基础模型（VFM，如 DINOv2）作为视觉编码骨干，提取富含空间语义先验的场景特征。与需要人工标注监督的传统感知编码器不同，VFM 提供了无需标注的强视觉特征。驾驶意图（如直行、左转、右转）作为额外条件信号。

**Knowledge Learning（知识学习）**：World4Drive 的核心学习是潜在世界模型——它在潜在空间中预测给定轨迹将导致的未来场景状态。关键的自监督学习信号来自：真实未来观测与从潜在空间重建的预测观测之间的对齐。多模态轨迹规划器生成多条候选轨迹，每条轨迹通过世界模型在潜在空间中预测其对应的未来结果。世界模型选择器比较这些预测的未来状态，选择最佳轨迹——实现"生成→预测→评估→选择"的端到端决策闭环。

**Controllable Simulation（可控仿真）**：World4Drive 在 NuScenes（开环）和 NavSim（闭环）两个互补的基准上验证了性能。在闭环评估中，世界模型选择器的角色更为关键——它需要在高度不确定的未来中预测和评估不同决策的后果，然后做出最优选择。训练收敛速度快 3.75 倍，使 World4Drive 在大规模部署中具有实际可行性。

### 代码实现要点

- **VFM 视觉编码**：DINOv2 等视觉基础模型替代需标注监督的感知编码器
- **潜在世界模型**：在潜在空间中预测轨迹条件场景演化
- **多模态轨迹规划器**：生成多条候选轨迹（直行/左转/右转及微调变体）
- **世界模型选择器**：比较预测未来状态并选择最优轨迹
- **自监督对齐**：真实未来观测与重建预测之间的对齐损失
- **GitHub 开源**

### 关键创新点

- **无感知标注端到端规划**：利用 VFM 和自监督学习彻底绕过人工标注需求
- **世界模型驱动轨迹评估**：潜在空间中的"生成-预测-评估-选择"决策闭环
- **多维高效**：L2 误差↓18.1%，碰撞率↓46.7%，训练快 3.75×
- **ICCV 2025** 发表
