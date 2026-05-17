---
title: "RoboScape: Physics-informed Embodied World Model"
arxiv: https://arxiv.org/abs/2506.23135v1
github: https://github.com/tsinghua-fib-lab/RoboScape
venue: NeurIPS
year: 2025
---

# RoboScape: Physics-informed Embodied World Model

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.23135v1](https://arxiv.org/abs/2506.23135v1)
- **GitHub**: [https://github.com/tsinghua-fib-lab/RoboScape](https://github.com/tsinghua-fib-lab/RoboScape)
:::

## 学习笔记

### 核心贡献
- 提出 RoboScape，一个统一物理感知的具身世界模型，在一个框架内联合学习 RGB 视频生成与物理知识
- 引入两类物理感知联合训练任务：时序深度预测（增强视频渲染中的 3D 几何一致性）和关键点动力学学习（隐式编码物体形状与材质等物理属性）
- 在下游任务（机器人策略训练与策略评估）中验证了生成数据的实用价值，展示了优于现有方法的视觉保真度和物理合理性

### 方法细节
- 基于扩散模型构建视频生成主干，在训练过程中同时优化 RGB 重建损失和物理知识引导的辅助损失
- 时序深度预测分支：利用深度估计任务规范视频帧间的 3D 几何结构，使生成结果在接触丰富的机器人场景中保持空间一致性
- 关键点动力学分支：通过预测物体关键点的运动轨迹，隐式学习物理交互规律（如碰撞、形变、摩擦），提升复杂运动建模能力

### 关键发现
- 物理感知联合训练显著改善了接触丰富场景（如抓取、堆叠、推动）下的视频生成质量，减少了物理不合理的伪影
- RoboScape 生成的视频数据可作为有效果的训练信号用于机器人策略学习，缩小了仿真数据与真实数据之间的 Sim-to-Real 差距
- 时序深度预测与关键点动力学学习两个任务互补：前者保障几何结构，后者捕捉动态物理特性

### 方法归类
- **范式**: 物理感知的具身世界模型（扩散视频生成 + 物理先验联合训练）
- **关键技术**: 时序深度预测、关键点动力学学习、视频扩散模型
- **适用场景**: 接触丰富的机器人操作任务中的视频生成、机器人策略训练的合成数据生成、策略评估的仿真环境替代
