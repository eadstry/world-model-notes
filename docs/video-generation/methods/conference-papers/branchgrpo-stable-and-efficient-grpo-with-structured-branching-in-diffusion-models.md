---
title: "BranchGRPO: Stable and Efficient GRPO with Structured Branching in Diffusion Models"
arxiv: https://arxiv.org/abs/2509.06040v5
github: https://github.com/Fredreic1849/BranchGRPO
website: https://fredreic1849.github.io/BranchGRPO-Webpage/
venue: ICLR
year: 2026
---

# BranchGRPO: Stable and Efficient GRPO with Structured Branching in Diffusion Models

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2509.06040v5](https://arxiv.org/abs/2509.06040v5)
- **GitHub**: [https://github.com/Fredreic1849/BranchGRPO](https://github.com/Fredreic1849/BranchGRPO)
- **Website**: [https://fredreic1849.github.io/BranchGRPO-Webpage/](https://fredreic1849.github.io/BranchGRPO-Webpage/)
:::

## 学习笔记

### 核心贡献
- 提出 BranchGRPO：将 GRPO 的 rollout 过程重构为结构化分支树（Branching Tree），多条采样共享去噪前缀以摊分计算开销
- 引入奖励融合与深度加权优势（Reward Fusion & Depth-wise Advantage）：为去噪轨迹的每一步提供密集的步级别梯度信号，解决 GRPO 中早期步梯度稀疏问题
- 设计剪枝策略（Pruning）：在分支树中基于中间奖励预估剪除低价值路径，动态减少无效 rollout
- 相比 DanceGRPO 对齐指标提升 16%，训练速度提升 55%；在 WanX 视频生成上同样有效

### 方法细节
- **分支树结构**：将完整 rollout 组织为树形结构，根部为共享的去噪前缀（前若干步），分支点为树的分叉节点，每个叶节点对应一组完整采样
- **共享前缀摊分**：前缀步仅需一次正向传播，多条分支共享其隐状态与注意力状态，显著降低总计算量（相比独立全 rollout 减少约 55%）
- **奖励融合（Reward Fusion）**：将多个奖励信号（CLIP score、美学评分等）融合为统一标量，作为分支树中各节点的优化目标
- **深度加权优势（Depth-wise Advantage）**：按去噪步在轨迹中的深度位置对优势进行加权，早期步获得更大的优势权重，确保深层梯度信号充足
- **剪枝策略**：在分支树展开过程中，基于中间奖励预估剪除得分低于阈值的分支，将计算资源集中于高潜力路径

### 关键发现
- 共享前缀分支相比独立 rollout 减少约 55% 计算开销，同时保持对齐性能
- 深度加权优势有效缓解 GRPO 中早期去噪步梯度稀疏问题，训练更稳定
- 剪枝策略在几乎不损失对齐质量的前提下进一步提升训练效率
- BranchGRPO 在 WanX 视频生成任务上验证了方法对视频扩散模型的通用性
- 分支数量 4-8 在效率与质量之间达到最优平衡

### 方法归类
- **范式**: Preference Optimization / RLHF
- **关键技术**: GRPO, Structured Branching Tree, Shared Prefix Rollout, Depth-wise Advantage, Reward Fusion, Pruning
- **适用场景**: Diffusion Alignment, Video Generation (WanX), Text-to-Image Generation
