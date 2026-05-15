---
title: "Open-World Reinforcement Learning over Long Short-Term Imagination"
design: "LS-Imagine"
arxiv: https://arxiv.org/abs/2410.03618
github: https://github.com/qiwang067/LS-Imagine
---

# LS-Imagine: Open-World Reinforcement Learning over Long Short-Term Imagination

::: info 论文信息
- **Design**: LS-Imagine
- **论文全称**: Open-World Reinforcement Learning over Long Short-Term Imagination
- **arXiv**: [https://arxiv.org/abs/2410.03618](https://arxiv.org/abs/2410.03618)
- **GitHub**: [https://github.com/qiwang067/LS-Imagine](https://github.com/qiwang067/LS-Imagine)
:::

## 核心思想

LS-Imagine (Long Short-Term Imagination) 是清华大学提出的开放世界 RL 世界模型框架。核心创新是将想象过程分为长短两个时间尺度：短期想象（short-term imagination）用于精细的即时动作优化，长期想象（long-term imagination）用于高层级的目标导向规划。这种分离使世界模型能同时处理局部精细控制和全局任务理解。

LS-Imagine 的关键洞察是：在开放世界（如 Minecraft）中，单一时间粒度的 imagination 既不够精细（短期控制需要毫秒级精度），又不够远见（长期目标需要分钟级规划）。分层的长短想象机制解决了这个矛盾。

## 技术架构

**Vision Encoding（视觉编码）**：DreamerV3 风格的 CNN encoder + categorical RSSM。encoder 输出用于短期想象的 fine-grained latent 和用于长期想象的 coarser latent（通过下采样或 token pooling）。

**Knowledge Learning（知识学习）**：World model 在两个时间尺度上训练。短期 RSSM 使用高帧率（如 50Hz）学习精细动力学，长期 RSSM 使用低帧率（如 1Hz）学习粗粒度的状态转换。两个 RSSM 共享基础 encoder，差异在状态更新的时间分辨率。

**Controllable Simulation（可控模拟）**：分层 plan + execute：长期 imagination 在高层次 latent space 中规划子目标序列（如"先走到树，再挖木头"），短期 imagination 在每个子目标内产生精细的低级动作序列。

## 代码实现要点

代码开源在 [qiwang067/LS-Imagine](https://github.com/qiwang067/LS-Imagine)。基于 DreamerV3 JAX。Dual-timescale RSSM + hierarchical planner。在 Crafter 和 Minecraft 环境中评估。

## 关键创新点

1. **长短时想象分离**：在两个时间粒度上分别进行想象力模拟
2. **分层规划**：长期高纬度规划 + 短期精细控制
3. **开放世界适用**：适用于 Minecraft 等开放域任务
4. **共享 encoder 设计**：两类想象共享基础 encoder 降低计算开销

## 代表性结果

在 Crafter 上，LS-Imagine 在 1M 步内达到 DreamerV3 2× 的成就解锁数。在 Minecraft 任务中，LS-Imagine 在需要长期规划的序列任务（如制作工具链）上成功率比 DreamerV3 高 50%+。
