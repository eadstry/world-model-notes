---
title: "Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models"
design: "HyDRA"
arxiv: https://arxiv.org/abs/2603.25716
github: https://github.com/H-EmbodVis/HyDRA
---

# HyDRA: Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models

::: info 论文信息
- **Design**: HyDRA
- **论文全称**: Out of Sight but Not Out of Mind: Hybrid Memory for Dynamic Video World Models
- **arXiv**: [https://arxiv.org/abs/2603.25716](https://arxiv.org/abs/2603.25716)
- **GitHub**: [https://github.com/H-EmbodVis/HyDRA](https://github.com/H-EmbodVis/HyDRA)
:::

## 学习笔记

### 核心思想
HyDRA（Hybrid Memory for Dynamic Video World Models）针对长视频世界建模中的记忆遗忘问题，提出混合记忆机制。核心思想是：将短期精确记忆（滑动窗口内的高保真 latent features）与长期压缩记忆（经过压缩的时序摘要）相结合，使世界模型在生成长序列视频时既能保持近期细节又能回溯远期的场景上下文。

### 技术架构
- **Vision Encoding（视觉编码）**：使用 Video VAE 将视频帧编码为 latent tokens，同时维护两个记忆库：Short-Term Memory（STM）存储最近 K 帧的全部 latent tokens，Long-Term Memory（LTM）通过时序压缩器（Temporal Compressor）将较远帧的 tokens 压缩为紧凑摘要向量。
- **Knowledge Learning（知识学习）**：基于 Diffusion Transformer（DiT），将 STM 和 LTM 作为额外的交叉注意力（cross-attention）条件注入到扩散去噪过程中。STM 提供精细的局部动态信息，LTM 提供全局场景上下文。记忆更新策略为滑动窗口 + 周期性压缩。
- **Controllable Simulation（可控仿真）**：支持动作条件控制和长时域滚动预测（rollout），混合记忆确保长时间生成不出现遗忘和坍塌。

### 关键创新点
1. **混合记忆架构**：首次在视频世界模型中显式区分短期精确记忆和长期压缩记忆，解决长序列生成中的遗忘问题。
2. **时序压缩器**：设计专门的压缩模块将远帧 latent tokens 压缩为紧凑表示，平衡记忆容量与计算开销。
3. **记忆感知扩散**：扩散模型的交叉注意力同时从短期和长期记忆中提取信息，增强生成一致性。

### 代码实现要点
- 开源（H-EmbodVis/HyDRA），基于 PyTorch
- 短期记忆为固定大小的 FIFO 队列，长期记忆通过可学习的时序压缩网络生成
- 训练时采用 teacher forcing + 记忆更新，推理时迭代更新记忆
- 使用 FVD 和长期一致性指标评估

### 代表性结果
- 在长时间视频预测任务中显著降低 FVD，远期帧质量大幅优于无记忆方法
- 混合记忆在 >100 帧的生成长度上保持空间一致性和时序连贯性
