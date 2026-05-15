---
title: "WorldCache: Accelerating World Models for Free via Heterogeneous Token"
design: "WorldCache"
arxiv: https://arxiv.org/abs/2603.06331
github: https://github.com/FofGofx/WorldCache
---

# WorldCache: Accelerating World Models for Free via Heterogeneous Token

::: info 论文信息
- **Design**: WorldCache
- **论文全称**: WorldCache: Accelerating World Models for Free via Heterogeneous Token
- **arXiv**: [https://arxiv.org/abs/2603.06331](https://arxiv.org/abs/2603.06331)
- **GitHub**: [https://github.com/FofGofx/WorldCache](https://github.com/FofGofx/WorldCache)
:::

## 学习笔记

### 核心思想
WorldCache 提出异质 token 缓存（Heterogeneous Token Caching）机制来加速世界模型的推理。核心思想是：世界模型在生成长视频序列时，相邻帧之间存在大量冗余信息——前景（动态物体）变化快需要完整计算，背景（静态场景）变化慢可以复用缓存。通过将 tokens 分为前景/背景两类并差异化缓存策略，实现"免费"的推理加速。

### 技术架构
- **Vision Encoding（视觉编码）**：使用 Video VAE 将视频帧编码为 latent tokens。同时使用轻量运动检测器（motion detector，基于帧差或光流）将 tokens 分类为高动态 tokens（前景/运动区域）和低动态 tokens（背景/静态区域）。
- **Knowledge Learning（知识学习）**：基于 Diffusion Transformer，核心修改在注意力/前向计算层面：(1) 低动态 tokens 的 KV 缓存复用——对于连续帧的静态区域，直接复用前几帧的 key/value，跳过重复计算；(2) 高动态 tokens 正常执行完整的前向计算。缓存更新策略基于运动检测器输出。
- **Controllable Simulation（可控仿真）**：加速后的世界模型支持更快的规划 rollouts，在相同的计算预算下可以探索更多的未来轨迹。

### 关键创新点
1. **异质 Token 缓存**：首次根据 token 的内容动态性设计差异化缓存策略，实现"白捡"的加速。
2. **运动感知缓存管理**：运动检测器自动区分前景/背景 tokens，无需人为标注。
3. **zero-cost 加速**：不需要重新训练模型，缓存机制可即插即用到任意 DiT-based 世界模型中。

### 代码实现要点
- 开源（FofGofx/WorldCache），基于 PyTorch
- 核心实现在 DiT attention 层的 KV 缓存模块
- 运动检测器使用轻量 CNN（或直接使用光流 mask）
- 支持调整缓存阈值以控制速度-质量的 trade-off

### 代表性结果
- 在视频生成世界模型上实现 1.5-2x 推理加速，FVD 质量几乎无损
- 缓存机制对驾驶场景（静态背景多）加速效果最显著
