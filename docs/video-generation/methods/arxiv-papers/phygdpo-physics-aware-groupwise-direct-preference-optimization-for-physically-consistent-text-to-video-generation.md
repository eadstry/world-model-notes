---
title: "PhyGDPO: Physics-Aware Groupwise Direct Preference Optimization for Physically Consistent Text-to-Video Generation"
arxiv: https://arxiv.org/abs/2512.24551
github: https://github.com/caiyuanhao1998/Open-PhyGDPO
website: https://caiyuanhao1998.github.io/project/PhyGDPO/
venue: arXiv
year: 2025
---

# PhyGDPO: Physics-Aware Groupwise Direct Preference Optimization for Physically Consistent Text-to-Video Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2512.24551](https://arxiv.org/abs/2512.24551)
- **GitHub**: [https://github.com/caiyuanhao1998/Open-PhyGDPO](https://github.com/caiyuanhao1998/Open-PhyGDPO)
- **Website**: [https://caiyuanhao1998.github.io/project/PhyGDPO/](https://caiyuanhao1998.github.io/project/PhyGDPO/)
:::

## 学习笔记

### 核心贡献
- 提出 PhyGDPO：将 DPO 与物理约束结合，通过分组偏好优化提升视频生成的物理一致性
- 设计物理感知的偏好分组策略：同一物理场景下不同生成结果的成对比较
- 开源实现（Open-PhyGDPO），推动物理感知视频生成的开放研究

### 方法细节
- **分组 DPO**：按物理现象类型（重力、碰撞、流体等）将偏好对分组，组内独立优化
- **偏好数据生成**：对同一 prompt 生成多个视频 → 用物理评估器评分 → 构造 win/lose 对
- **物理评估器**：利用预训练物理推理模型或 rule-based 物理检查器自动评估
- **分组优化优势**：避免不同物理维度之间的梯度冲突

### 关键发现
- 分组 DPO 比标准 DPO 在物理一致性上提升约 15-20%
- 不同物理现象的优化存在冲突——分组策略能有效解耦
- 纯数据驱动的物理偏好优化无法完全替代物理仿真先验，但可作为有效补充

### 方法归类
偏好优化 — DPO 变体（物理感知）
