---
title: "FinePhys: Fine-grained Human Action Generation by Explicitly Incorporating Physical Laws for Effective Skeletal Guidance"
arxiv: https://arxiv.org/abs/2505.13437v1
github: https://github.com/SmartDianLab/FinePhys
website: https://smartdianlab.github.io/projects-FinePhys/
venue: CVPR
year: 2025
---

# FinePhys: Fine-grained Human Action Generation by Explicitly Incorporating Physical Laws for Effective Skeletal Guidance

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2505.13437v1](https://arxiv.org/abs/2505.13437v1)
- **GitHub**: [https://github.com/SmartDianLab/FinePhys](https://github.com/SmartDianLab/FinePhys)
- **Website**: [https://smartdianlab.github.io/projects-FinePhys/](https://smartdianlab.github.io/projects-FinePhys/)
:::

## 学习笔记

### 核心贡献
- 提出了 FinePhys 框架，首次显式地将物理定律（Euler-Lagrange 方程）融入人体动作视频生成流程，以获取有效的骨骼引导信号。
- 设计了基于物理的运动重估计模块，通过双向时序更新计算关节加速度，缓解了纯数据驱动 3D 姿态的不稳定性和可解释性不足问题。
- 将物理预测的 3D 姿态与数据驱动的 3D 姿态相融合，为扩散模型提供多尺度 2D 热图引导。

### 方法细节
- 首先生成 2D 姿态估计，随后通过上下文学习（in-context learning）实现 2D 到 3D 的维度提升。
- 引入基于 Euler-Lagrange 方程的物理运动重估计模块，利用双向时序传播计算关节加速度，从物理角度优化姿态序列的合理性。
- 将物理预测的 3D 姿态与数据驱动的 3D 姿态进行融合，生成多尺度 2D 关键点热图，作为扩散过程的引导条件。
- 整个框架将物理先验作为可微的引导信号嵌入生成流程，而非后处理约束。

### 关键发现
- 在 FineGym 数据集的三个细粒度动作子集（FX-JUMP、FX-TURN、FX-SALTO）上，FinePhys 显著优于现有竞争方法。
- 物理引导有效改善了复杂体操动作（如“switch leap with 0.5 turn”）的生成质量，在语义准确性和时序连贯性上均有提升。
- 融合物理预测与数据驱动的姿态可以有效互补：物理模型保证运动合理性，数据驱动方法提供细节保真度。

### 方法归类
- 属于人体动作视频生成中的物理引导生成方向，核心思路是将经典力学定律（Euler-Lagrange）作为先验知识嵌入扩散模型的引导信号。
- 该工作代表了视频生成从纯数据驱动向物理-数据混合驱动的范式演进，特别适用于需要精确运动学约束的细粒度动作生成场景。
