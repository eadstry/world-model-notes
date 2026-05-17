---
title: "Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling"
design: "Geometry Forcing"
arxiv: https://arxiv.org/abs/2507.07982
github: https://github.com/CIntellifusion/GeometryForcing
---

# Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling

::: info 论文信息
- **Design**: Geometry Forcing
- **论文全称**: Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling
- **arXiv**: [https://arxiv.org/abs/2507.07982](https://arxiv.org/abs/2507.07982)
- **GitHub**: [https://github.com/CIntellifusion/GeometryForcing](https://github.com/CIntellifusion/GeometryForcing)
:::

## 学习笔记

### 核心思想

Geometry Forcing 旨在弥合视频扩散模型与物理世界的 3D 本质之间的鸿沟。作者分析发现，仅在原始视频数据上训练的视频扩散模型常常无法在其表示空间中捕获有意义的几何感知结构。Geometry Forcing 的核心思想是：通过将扩散模型中间表示与几何基础模型的特征对齐，强制模型内化 3D 表示。为此，引入两个互补的对齐目标：(1) 角度对齐（Angular Alignment）——通过余弦相似度强制方向一致性；(2) 尺度对齐（Scale Alignment）——从归一化的扩散表示中回归几何特征以保留尺度相关信息。该方法在相机视角条件和动作条件的视频生成任务上均显著提升了视觉质量的3D 一致性。
### 技术架。
**Vision Encoding（视觉编码）**：Geometry Forcing 在视频扩散模型的 UNet 中间层引入几何对齐机制。使用预训练的几何基础模型（geometric foundation model）作为教师，提取富含 3D 几何信息的特征。在扩散模型的每一层中间表示处，通过角度对齐损失（最大化扩散特征与几何特征的余弦相似度）和尺度对齐损失（从扩散特征回归预测几何特征的幅值）将扩散特征向几何感知方向引导。
**Knowledge Learning（知识学习）**：Geometry Forcing 的关键学习目标是让扩散模型在去噪过程中习的3D 空间感知能力。角度对齐确保扩散特征的"方向"与几何特征一致，即同一空间位置在不同视角下的特征应指向相同的3D 语义。尺度对齐则保留了几何特征的幅值信息，使模型能区分远近、大小等空间尺度属性。这两个目标互补——角度对齐关注特征方向，尺度对齐关注特征幅值。
**Controllable Simulation（可控仿真）**：Geometry Forcing 在两个任务上验证了有效性：相机视角条件的视频生成（给定相机轨迹，生成对应视角的视频）和动作条件的视频生成（给定动作序列，预测未来帧）。在这两种可控场景下，Geometry Forcing 相比基线方法表现出更好的 3D 视觉一致性和生成质量，特别是在视角大幅变化时的几何稳定性。
### 代码实现要点

- **几何教师模型**：使用预训练的几何基础模型提取逐像的3D 特征作为对齐目标
- **角度对齐损失**：`L_angle = 1 - cos_sim(f_diff, f_geo)`，计算扩散特征与几何特征的余弦相似度
- **尺度对齐损失**：对扩散特征施加 MLP 回归头预测几何特征的 L2 范数，使用MSE 损失
- **联合训练**：标准扩散损视+ λ₁·角度对多+ λ₂·尺度对齐，两个对齐损失分别作用于部分去噪步。
### 关键创新。
- **首次系统分析**视频扩散模型的几何感知缺陷，证明仅依赖视频数据训练不足以学习 3D 结构
- **双对齐机视*：角度对齐（方向一致性）+ 尺度对齐（空间幅值回归），互补覆盖几何信息的两个维度
- **即插即用**：Geometry Forcing 无需改变扩散模型架构，仅通过添加辅助损失即可提升 3D 一致性- **多任务验的*：相机条件和动作条件两种视频生成设置下均展现一致的性能提升

### 代表性结。
- 在相机视角条件和动作条件视频生成任务上，视觉质量的3D 一致性显著优于基于- 几何特征对齐有效弥合的2D 视频扩散的3D 物理世界之间的鸿。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
