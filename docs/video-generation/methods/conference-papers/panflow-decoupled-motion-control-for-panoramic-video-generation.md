---
title: "PanFlow: Decoupled Motion Control for Panoramic Video Generation"
arxiv: https://arxiv.org/abs/2512.00832v1
github: https://github.com/chengzhag/PanFlow
website: https://chengzhag.github.io/publication/panflow/
venue: AAAI
year: 2026
---

# PanFlow: Decoupled Motion Control for Panoramic Video Generation

::: info 论文信息
- **Venue**: AAAI (2026)
- **arXiv**: [https://arxiv.org/abs/2512.00832v1](https://arxiv.org/abs/2512.00832v1)
- **GitHub**: [https://github.com/chengzhag/PanFlow](https://github.com/chengzhag/PanFlow)
- **Website**: [https://chengzhag.github.io/publication/panflow/](https://chengzhag.github.io/publication/panflow/)
:::

## 学习笔记

### 核心贡献
- 提出 PanFlow，首个面向全景视频的显式运动控制框架，利用球面几何特性将相机旋转从光流条件中解耦，实现对大幅动态运动的精确控制。
- 构建大规模运动丰富的全景视频数据集，附带帧级位姿与光流标注，填补该领域数据空白。

### 方法细节
- **解耦运动控制**：利用全景图的球面表示，将相机旋转分量从输入光流中分离，使模型仅处理场景内的剩余运动，降低复杂运动的学习难度。
- **球面噪声扭曲策略**：在全景边界引入球面感知的噪声扭曲，促进帧间运动在边界处的循环一致性，消除接缝伪影。
- 支持运动迁移与视频编辑等下游应用，验证了框架的通用性。

### 关键发现
- 解耦后的光流条件显著提升了大运动场景下的运动保真度，远超现有全景视频生成方法。
- 球面噪声扭曲有效改善了全景视频的时域连贯性和边界一致性。

### 方法归类
- **范式**: 基于扩散模型的运动条件视频生成
- **关键技术**: 球面光流解耦、球面噪声扭曲、位姿-光流联合数据集
- **适用场景**: 虚拟现实全景内容创作、沉浸式视频编辑、动态全景场景生成
