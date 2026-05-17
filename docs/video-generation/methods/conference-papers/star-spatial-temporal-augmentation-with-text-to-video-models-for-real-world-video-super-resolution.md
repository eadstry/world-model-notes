---
title: "STAR: Spatial-Temporal Augmentation with Text-to-Video Models for Real-World Video Super-Resolution"
arxiv: https://arxiv.org/abs/2501.02976
github: https://github.com/NJU-PCALab/STAR
website: https://nju-pcalab.github.io/projects/STAR/
venue: ICCV
year: 2025
---

# STAR: Spatial-Temporal Augmentation with Text-to-Video Models for Real-World Video Super-Resolution

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2501.02976](https://arxiv.org/abs/2501.02976)
- **GitHub**: [https://github.com/NJU-PCALab/STAR](https://github.com/NJU-PCALab/STAR)
- **Website**: [https://nju-pcalab.github.io/projects/STAR/](https://nju-pcalab.github.io/projects/STAR/)
:::

## 学习笔记

### 核心贡献
- 首次将大规模文本到视频（T2V）生成模型（CogVideoX-5B）引入真实世界视频超分辨率任务，利用其时空建模能力同时提升空间细节和时间一致性
- 指出 T2V 模型直接用于 VSR 面临两大挑战：真实场景复杂退化引入的伪影、大模型强生成能力导致的保真度下降
- 提出局部信息增强模块（LIEM）和动态频率损失（DF Loss），分别解决伪影抑制和保真度约束问题

### 方法细节
- LIEM 置于全局注意力块之前，通过局部特征提取与融合丰富细节信息，有效抑制真实退化带来的伪影
- DF Loss 在不同扩散步数动态调整频率域监督权重，引导模型关注不同频段分量，在高保真重建与感知质量之间取得平衡
- 整体框架以预训练 T2V 模型为骨干，冻结大部分参数，仅微调适配模块和轻量可学习组件

### 关键发现
- 在合成和真实世界数据集上均超越既有 SOTA 方法，说明 T2V 先验对 VSR 任务的适用性
- LIEM 在抑制真实退化伪影方面效果显著，且对计算量影响极小
- DF Loss 相比传统 L1/L2 损失或单纯频域损失更能兼顾纹理细节重建与时序一致性

### 方法归类
- **范式**: T2V 扩散模型 + VSR 微调适配
- **关键技术**: 局部信息增强模块 (LIEM), 动态频率损失 (DF Loss), CogVideoX-5B 骨干
- **适用场景**: 真实世界视频超分辨率、老视频修复、监控视频增强
