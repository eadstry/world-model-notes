---
title: "Genesis: Multimodal Driving Scene Generation with Spatio-Temporal and Cross-Modal Consistency"
design: "Genesis"
arxiv: https://arxiv.org/abs/2506.07497
github: https://github.com/xiaomi-research/genesis
---

# Genesis: Multimodal Driving Scene Generation with Spatio-Temporal and Cross-Modal Consistency

::: info 论文信息
- **Design**: Genesis
- **论文全称**: Genesis: Multimodal Driving Scene Generation with Spatio-Temporal and Cross-Modal Consistency
- **arXiv**: [https://arxiv.org/abs/2506.07497](https://arxiv.org/abs/2506.07497)
- **GitHub**: [https://github.com/xiaomi-research/genesis](https://github.com/xiaomi-research/genesis)
:::

## 核心思想

Genesis 是小米研究院提出的多模态驾驶场景联合生成框架，核心创新在于同时生成多视图驾驶视频和 LiDAR 点云序列，并保证时空一致性和跨模态一致性。传统方法通常单独处理视频生成或 LiDAR 生成，导致视觉和几何模态之间缺乏对齐。Genesis 通过共享潜在空间将两者直接耦合，实现跨模态的协同进化。

Genesis 的另一创新是 DataCrafter 标注模块，它基于视觉语言模型提供场景级和实例级的监督信息。DataCrafter 自动为驾驶场景生成结构化语义描述，这些丰富语义标注被用作生成模型的条件输入，确保生成内容在语义层面的忠实度。

## 技术架构

**Vision Encoding（视觉编码）**：Genesis 采用两阶段架构。第一阶段使用 DiT（Diffusion Transformer）视频扩散模型，结合 3D-VAE 编码器将多视图视频压缩到隐空间。第二阶段使用 BEV-aware LiDAR 生成器，基于 NeRF 渲染和自适应采样技术，从 BEV 特征生成 LiDAR 点云。两种模态通过共享的潜在空间直接耦合。

**Knowledge Learning（知识学习）**：DataCrafter 基于视觉语言模型为驾驶场景生成两层语义标注：场景级描述覆盖全局交通语义，实例级描述覆盖每个个体的位置和运动属性。这些标注作为条件输入到 DiT 模型和 BEV LiDAR 生成器中。共享潜在空间确保视频和 LiDAR 的学习过程互相增益——LiDAR 的几何信息指导视频生成的空间一致性，视频的视觉信息丰富 LiDAR 的语义理解。

**Controllable Simulation（可控模拟）**：Genesis 通过语义条件实现可控生成，用户可通过 DataCrafter 生成的语义描述精确控制场景内容。同时支持利用结构化语义指导进行下游任务增强（分割、3D 检测）。在 nuScenes 上的评估显示，Genesis 在视频和 LiDAR 指标上均达到 SOTA。

## 代码实现要点

代码开源在 [xiaomi-research/genesis](https://github.com/xiaomi-research/genesis)。框架基于 DiT、3D-VAE、NeRF 等模块构建，DataCrafter 基于 VLM 进行语义标注。

## 关键创新点

1. **视频-LiDAR 联合生成**：首个在统一框架内同时生成多视图视频和 LiDAR 点云的模型
2. **共享潜在空间**：视频和 LiDAR 通过共享潜在空间直接耦合，确保跨模态一致性
3. **DataCrafter 自动标注**：基于 VLM 的场景级+实例级语义标注
4. **BEV-aware LiDAR 生成器**：结合 NeRF 渲染和自适应采样的 LiDAR 生成
5. **SOTA 指标**：FVD 16.95、FID 4.24、Chamfer 0.611

## 代表性结果

Genesis 在 nuScenes 上取得 SOTA：FVD 16.95、FID 4.24、Chamfer 0.611。生成的视频和 LiDAR 可与真实数据混合训练，显著提升下游分割和 3D 检测任务的性能。跨模态一致性体现在：视频中的物体与 LiDAR 中的几何结构精确对齐。
