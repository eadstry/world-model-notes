---
title: "FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models"
design: "FASTopoWM"
arxiv: https://arxiv.org/abs/2507.23325
github: https://github.com/YimingYang23/FASTopoWM
---

# FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models

::: info 论文信息
- **Design**: FASTopoWM
- **论文全称**: FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models
- **arXiv**: [https://arxiv.org/abs/2507.23325](https://arxiv.org/abs/2507.23325)
- **GitHub**: [https://github.com/YimingYang23/FASTopoWM](https://github.com/YimingYang23/FASTopoWM)
:::

## 学习笔记

### 核心思想

FASTopoWM 是一个面向车道段拓扑推理的 Fast-Slow 框架，以潜在世界模型增强时序感知。车道段拓扑推理提供全面的 BEV 道路场景理解，是规划导向端到端自动驾驶系统中的关键感知模块。现有方法在利用时序信息增强检测和推理性能方面存在不足——基于流（stream）的时序传播方法受三方面限制：过度依赖历史查询、对位姿估计失败敏感、时序传播不充分。FASTopoWM 的核心创新是快慢两支路架构：快速支路使用新初始化的查询快速响应新场景，慢速支路通过潜在世界模型将历史状态传播至当前时刻。统一框架实现快慢两支路的并行监督和相互增强，潜在世界模型以动作隐变量为条件来跨时序传播查询和 BEV 状态表示，显著降低了对位姿估计精度的依赖。

### 技术架构

**Vision Encoding（视觉编码）**：FASTopoWM 采用查询式架构进行车道段和中心线的拓扑推理。视觉编码器从多视图图像中提取 BEV 特征。Fast-Slow 双支路各自维护查询：快速支路（Fast）使用当前帧重新初始化的查询，快速适应新场景变化；慢速支路（Slow）使用从历史时刻传播来的查询，保留长时程时序信息。

**Knowledge Learning（知识学习）**：潜在世界模型是核心时序传播机制。它由潜在查询世界模型和潜在 BEV 世界模型组成，两者均以动作隐变量（由自车速度和转向信息编码）为条件，预测从 t-1 到 t 时刻的潜在状态变化。这种潜在空间的演化建模避免了显式几何投影对位姿精度的依赖。快慢支路共享检测头，历史查询和新查询的并行监督促进两支路之间的知识蒸馏——慢速支路学到更稳定的时序特征，快速支路学到更灵敏的即时响应。

**Controllable Simulation（可控仿真）**：FASTopoWM 在 OpenLane-V2 基准上评估，车道段检测 mAP 从 33.6% 提升到 37.4%（+3.8%），中心线感知 OLS 从 41.5% 提升到 46.3%（+4.8%）。潜在世界模型的引入使模型在复杂驾驶场景和高动态变化下仍能保持稳定的拓扑推理精度。

### 代码实现要点

- **Fast-Slow 双支路**：快速支路（新初始化查询）+ 慢速支路（时序传播查询），共享解码器
- **潜在世界模型**：查询世界模型 + BEV 世界模型，以动作隐向量为条件预测潜在状态演化
- **并行监督**：历史查询和新查询同时输入检测头，迫使慢速支路保持与快速支路相当的检测精度
- **OpenLane-V2**：标准车道拓扑推理基准

### 关键创新点

- **Fast-Slow 双支路拓扑推理**：历史和新初始化查询并行监督、相互增强
- **潜在世界模型驱动时序传播**：以动作隐变量条件在潜在空间演化，避免几何投影的位姿敏感性
- **大幅超越 SOTA**：车道段 mAP +3.8%，中心线 OLS +4.8%
- **OpenLane-V2 新标杆**
