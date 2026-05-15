---
title: "Clone Deterministic 3D Worlds with Geometrically-Regularized World Models"
design: "GRWM"
arxiv: https://arxiv.org/abs/2510.26782
github: https://github.com/M-E-AGI-Lab/Awesome-World-Models
---

# GRWM: Clone Deterministic 3D Worlds with Geometrically-Regularized World Models

::: info 论文信息
- **Design**: GRWM
- **论文全称**: Clone Deterministic 3D Worlds with Geometrically-Regularized World Models
- **arXiv**: [https://arxiv.org/abs/2510.26782](https://arxiv.org/abs/2510.26782)
- **GitHub**: [https://github.com/M-E-AGI-Lab/Awesome-World-Models](https://github.com/M-E-AGI-Lab/Awesome-World-Models)
:::

## 学习笔记

### 核心思想

该工作提出了 GRWM（Geometrically-Regularized World Models），旨在通过几何正则化技术实现确定性三维世界的精确复现。其核心假设是：有效的世界模型应该保持对三维几何结构的忠实表示，而非仅仅追求视觉上的逼真——几何一致性是世界理解的基础。

该工作的贡献在于提出了一套几何正则化约束，将三维世界的结构信息显式地注入世界模型的训练过程，从而在视频生成质量之外，大幅提升了模型的物理一致性和空间理解精度。
