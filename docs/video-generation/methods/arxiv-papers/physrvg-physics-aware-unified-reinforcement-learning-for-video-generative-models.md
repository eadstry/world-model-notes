---
title: "PhysRVG: Physics-Aware Unified Reinforcement Learning for Video Generative Models"
arxiv: https://arxiv.org/abs/2601.11087
website: https://lucaria-academy.github.io/PhysRVG/
venue: arXiv
year: 2026
---

# PhysRVG: Physics-Aware Unified Reinforcement Learning for Video Generative Models

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2601.11087](https://arxiv.org/abs/2601.11087)
- **Website**: [https://lucaria-academy.github.io/PhysRVG/](https://lucaria-academy.github.io/PhysRVG/)
:::

## 学习笔记

### 核心贡献
- 提出 PhysRVG：统一的物理感知强化学习框架，可适配多种视频生成架构
- 设计了可验证的物理奖励函数，覆盖重力、碰撞、运动合理性等物理维度
- 是「可验证奖励 + RL」范式在视频生成中的系统化尝试

### 方法细节
- **统一 RL 框架**：将视频生成模型作为策略，去噪过程作为动作序列 → 物理奖励作为环境反馈
- **物理奖励设计**：包含基于物理仿真器的可验证奖励（如物体运动轨迹是否符合牛顿力学）
- **多阶段 RL**：先在单个物理维度上 RL 训练，再联合多维度优化
- **架构无关**：可适配 DiT、U-Net 等不同扩散架构

### 关键发现
- 可验证奖励比学习到的奖励模型更稳定，不受 reward hacking 影响
- 物理 RL 后训练与 SFT/蒸馏正交——可在已有后训练基础上叠加
- 局限性：基于仿真器的奖励需要已知物理参数的场景，对开放域泛化有限

### 方法归类
偏好优化 — RL（物理感知）
