---
title: "VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory"
design: "VMem"
arxiv: https://arxiv.org/abs/2506.18903
github: https://github.com/runjiali-rl/vmem
---

# VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory

::: info 论文信息
- **Design**: VMem
- **论文全称**: VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory
- **arXiv**: [https://arxiv.org/abs/2506.18903](https://arxiv.org/abs/2506.18903)
- **GitHub**: [https://github.com/runjiali-rl/vmem](https://github.com/runjiali-rl/vmem)
:::

## 学习笔记

## 核心思想

VMem（ICCV 2025 Highlight, Oxford VGG）为交互式环境探索的视频生成器提出了一种新颖的记忆模块设计。现有方法存在两类缺陷：(1) 向外绘制（out-painting的D 视图同时增量重建 3D 几何——该方法会快速累积误差；(2) 使用短上下文窗口的视频生成器——难以在长时间跨度内维持场景一致性。
VMem 的核心创新是 **Surfel-Indexed View Memory**（基于面元索引的视图记忆）：通过将过去视图按照它们所观测到的 **3D 表面元素（surfels中* 进行几何索引来记住历史画面。Surfel 代3D 表面的带属性的点——每个surfel 带有位置、法线、颜色等信息，自然地的2D 视图的3D 几何关联起来。
在生成新视角时，VMem 通过几何索引高效检测*最相关的过去视频*，仅关注这些相关视图而非将所有历史视图作为上下文。这一设计在维持场景连贯性和相机控制的同时，大幅降低了计算成本——以使用所有过去视图所需计算成本的一小部分实现了对环境的一致探索。
## 技术架。
**Vision Encoding（视觉编码）**：视频生成器接收查询视角，VMem 记忆模块通过 surfel 几何索引从记忆库中检索与该视角最相关的历史帧，将其作为条件信号注入生成过程。
**Knowledge Learning（世界知识学习）**：Surfel 索引机制的2D 视觉观测映射的3D 几何空间中。每个surfel 代表场景中的一个3D 表面点，携带位置、法线、颜色属性。记忆单元通过 surfel 索引存储历史帧，实现高效的3D 感知检索。
**Controllable Simulation（可控推演）**：相机控制信号驱动新视角的生成。Surfel 几何索引确保不同视角间场景内容的 3D 一致性。在长序列探索中，记忆机制防止场景漂移和累积误差。
## 代码实现要点

- Surfel-Indexed View Memory：面元几何索引的视图记忆模块
- 几何索引检索：根据 surfel 关联性高效检索相关历史帧
- 开源页面：v-mem.github.io

## 关键创新。
- Surfel 几何索引的2D 视图记忆提升的3D 几何层面
- 高效检索最相关视图，大幅降低上下文窗口需的- 避免 out-painting 的累积误差和短上下文的不一致性- 以极低计算成本维持长时场景一致性- 同时支持场景连贯性和相机控制

## 代表性结。
- ICCV 2025 Highlight 接收
- 挑战性长时场景合成基准上超越现有方法
- 以部分计算成本实现全量上下文级别的场景一致性- 高效的场景连贯性和相机控制


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
