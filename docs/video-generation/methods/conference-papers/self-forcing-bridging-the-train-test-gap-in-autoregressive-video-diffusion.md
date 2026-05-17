---
title: "Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion"
arxiv: https://arxiv.org/abs/2506.08009v2
github: https://github.com/guandeh17/Self-Forcing
venue: NeurIPS
year: 2025
---

# Self Forcing: Bridging the Train-Test Gap in Autoregressive Video Diffusion

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.08009v2](https://arxiv.org/abs/2506.08009v2)
- **GitHub**: [https://github.com/guandeh17/Self-Forcing](https://github.com/guandeh17/Self-Forcing)
:::

## 学习笔记

### 核心贡献
- 提出 Self Forcing 训练范式，解决自回归视频扩散模型中长期存在的曝光偏差（exposure bias）问题——训练时模型使用 ground-truth 上下文，推理时却需要基于自身不完美的输出进行条件生成
- 在训练阶段执行自回归 rollout 并配合 KV 缓存，使每一帧的生成基于先前自我生成的输出，实现对完整序列质量的视频级整体损失（holistic loss）监督
- 在单 GPU 上实现亚秒延迟的实时流式视频生成，生成质量匹敌甚至超越显著更慢的非因果扩散模型

### 方法细节
- 训练时利用 KV 缓存机制记录自回归过程中各帧的键值对，支持高效的自回归展开
- 引入少步扩散模型（few-step diffusion model）配合随机梯度截断策略（stochastic gradient truncation），平衡计算开销与性能
- 提出滚动 KV 缓存（rolling KV cache）机制，支持高效的视频自回归外推（extrapolation），无需每次从头重新编码

### 关键发现
- 直接对自回归生成序列施加视频级损失显著优于逐帧独立损失，曝光偏差得到有效缓解
- 随机梯度截断使得训练长序列自回归扩散模型在计算上可行，而不会影响最终生成质量
- Self Forcing 生成的流式视频在时序连贯性和视觉质量上均优于基于 ground-truth 条件训练的基线方法

### 方法归类
- **范式**: 自回归视频扩散生成
- **关键技术**: 自回归训练时 rollout、KV 缓存、随机梯度截断、少步扩散蒸馏
- **适用场景**: 实时流式视频生成、长视频自回归外推、低延迟视频生成应用
