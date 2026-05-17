---
title: "EffiVMT: Video Motion Transfer via Efficient Spatial-Temporal Decoupled Finetuning"
arxiv: https://arxiv.org/abs/2506.05207v2
website: https://follow-your-motion.github.io/
venue: ICLR
year: 2026
---

# EffiVMT: Video Motion Transfer via Efficient Spatial-Temporal Decoupled Finetuning

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2506.05207v2](https://arxiv.org/abs/2506.05207v2)
- **Website**: [https://follow-your-motion.github.io/](https://follow-your-motion.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Follow-Your-Motion（EffiVMT），一种高效的二阶段视频运动迁移框架，通过时空解耦的 LoRA 微调解决现有方法在大型视频扩散 Transformer 上的运动不一致和微调低效问题。
- 设计时空解耦 LoRA（Spatial-Temporal Decoupled LoRA），将 3D 注意力中的空间外观与时序运动处理进行分离，缓解因时空耦合导致的运动一致性退化。
- 构建 MotionBench 基准，覆盖相机运动、单物体运动、多物体运动和复杂人体运动四类场景，为该领域提供标准化的评估平台。

### 方法细节
- 第一阶段采用时空解耦 LoRA，在注意力架构中将空间维度和时间维度的适配参数分离，使空间外观学习不受时序运动建模的干扰。
- 第二阶段引入稀疏运动采样（Sparse Motion Sampling）与自适应 RoPE（Adaptive RoPE），在保证运动迁移质量的同时显著加速微调过程。
- 框架基于强大的视频扩散 Transformer 骨干网络，充分利用其多样性运动生成能力，并通过解耦微调策略实现对复杂运动的精准复现。
- 自适应 RoPE 机制根据运动特征的特性动态调整位置编码，提升了模型对不同帧率和运动幅度的适应性。

### 关键发现
- 在 MotionBench 上的全面评估表明，Follow-Your-Motion 在运动一致性和画面质量上均优于现有的基于 LoRA 的运动迁移方案。
- 时空解耦 LoRA 有效缓解了 3D 注意力中空间-时间耦合带来的运动不一致问题，生成的视频与输入参考视频的运动保持了更好的对齐。
- 稀疏运动采样与自适应 RoPE 大幅缩短了二阶段微调的时间开销，显著提升了方法的实用性和部署效率。

### 方法归类
- 属于基于适配器（Adapter / LoRA）的视频运动迁移方向，通过参数高效微调将预训练视频扩散 Transformer 适配到运动迁移任务。
- 与传统的二阶段 LoRA 微调（如 Animate-Anything、MotionDirector）相比，核心改进在于时空解耦的注意力设计与加速采样策略，属于高效参数微调与运动解耦的交叉范式。
