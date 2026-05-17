---
title: "Vivid-ZOO: Multi-View Video Generation with Diffusion Model"
arxiv: https://arxiv.org/abs/2406.08659
github: https://github.com/hi-zhengcheng/vividzoo
website: https://hi-zhengcheng.github.io/vividzoo/
venue: NeurIPS
year: 2024
---

# Vivid-ZOO: Multi-View Video Generation with Diffusion Model

::: info 论文信息
- **Venue**: NeurIPS (2024)
- **arXiv**: [https://arxiv.org/abs/2406.08659](https://arxiv.org/abs/2406.08659)
- **GitHub**: [https://github.com/hi-zhengcheng/vividzoo](https://github.com/hi-zhengcheng/vividzoo)
- **Website**: [https://hi-zhengcheng.github.io/vividzoo/](https://hi-zhengcheng.github.io/vividzoo/)
:::

## 学习笔记

### 核心贡献
- 首次系统地探索基于扩散模型的 Text-to-Multi-View-Video（T2MVid）生成任务，提出将 T2MVid 分解为视角空间（viewpoint-space）和时间（time）两个独立因子。
- 复用预训练的多视图图像扩散模型和 2D 视频扩散模型分别建模视角一致性与时序连贯性，大幅降低训练成本，并引入对齐模块（Alignment Modules）消除 2D 与多视图数据之间的域间隙。
- 贡献了一个带标注的多视图视频数据集，支持本任务及后续研究。

### 方法细节
- 将 T2MVid 条件生成分解为：1）视角空间因子——用预训练多视图图像模型保证跨视图一致性；2）时间因子——用 2D 视频扩散模型保证时序流畅性。
- 两个因子的层通过 Alignment Modules 进行隐空间对齐，以解决因域间隙导致的复用层不兼容问题。
- 训练时仅需微调对齐模块和少量新增参数，骨干网络保持冻结。

### 关键发现
- 因子分解策略能够在不依赖大规模配对多视图视频数据的前提下，生成一致的多视图动态 3D 物体视频。
- 对齐模块对于弥合 2D 图像/视频与多视图数据之间的隐空间分布差异至关重要。

### 方法归类
- **范式**: [因子分解扩散 / T2MVid 生成]
- **关键技术**: [视角-时间因子分解 → 预训练模型复用 → 隐空间对齐模块 → 多视图视频数据集]
- **适用场景**: [文本驱动的多视图动态 3D 物体视频生成，虚拟内容制作，3D 资产动画]
