---
title: "MoVideo: Motion-Aware Video Generation with Diffusion Models"
arxiv: https://arxiv.org/abs/2311.11325
website: https://jingyunliang.github.io/MoVideo/
venue: ECCV
year: 2024
---

# MoVideo: Motion-Aware Video Generation with Diffusion Models

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2311.11325](https://arxiv.org/abs/2311.11325)
- **Website**: [https://jingyunliang.github.io/MoVideo/](https://jingyunliang.github.io/MoVideo/)
:::

## 学习笔记

### 核心贡献
- 提出 MoVideo 框架，显式建模视频特有的运动信息，利用视频深度（video depth）和光流（optical flow）两个互补线索分别从帧内空间布局和帧间对应关系两个层面刻画运动
- 设计两阶段生成流程：第一阶段由时空扩散模型生成视频深度和光流，第二阶段在深度、光流扭曲潜变量和遮挡掩码的联合引导下生成视频潜在表示
- 在潜空间解码回像素空间时再次使用光流进行帧对齐与细节优化，进一步提升时序一致性与视觉质量

### 方法细节
- 第一阶段视频深度生成采用带有时空注意力模块的扩散模型，为每一帧预测密集深度图，深度图反映物体远近关系和空间排列，间接约束物体运动幅度和遮挡关系
- 第二阶段利用光流对已生成帧进行 backward warping，将前一帧的潜特征映射到当前帧，同时计算遮挡掩码标记不可见区域，使模型在生成时能区分可见区域的光流引导与遮挡区域的自由生成
- 解码时使用光流引导的对齐策略：计算相邻帧潜特征间的光流并做 warp 对齐，减少解码器对帧间抖动的放大效应，提升最终像素空间的时序平滑度

### 关键发现
- 深度与光流的联合引导显著优于二者单独使用：深度提供全局运动骨架，光流提供局部细节约束，两者互补使模型在复杂运动场景下仍能保持时序一致
- 光流引导的潜空间 warp 机制能有效缓解扩散模型在帧级独立去噪过程中产生的闪烁和抖动伪影
- 在文生视频和图生视频两项任务上均达到 SOTA，验证了运动显式建模策略的通用有效性

### 方法归类
- **范式**: 两阶段扩散模型（第一阶段生成运动表征 → 第二阶段在运动引导下生成视频）+ 时空注意力 + 光流 warp 引导
- **关键技术**: video depth 扩散模型、optical flow 光流引导、遮挡掩码、warp-based latent alignment、时空注意力模块
- **适用场景**: 需要精细运动控制的文生视频与图生视频任务，尤其适用于包含复杂物体交互和非刚性运动的场景
