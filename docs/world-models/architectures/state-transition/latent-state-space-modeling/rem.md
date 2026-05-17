---
title: "Improving Token-Based World Models with Parallel Observation Prediction"
design: "REM"
arxiv: https://arxiv.org/abs/2402.05643
github: https://github.com/leor-c/REM
---

# REM: Improving Token-Based World Models with Parallel Observation Prediction

::: info 论文信息
- **Design**: REM
- **论文全称**: Improving Token-Based World Models with Parallel Observation Prediction
- **arXiv**: [https://arxiv.org/abs/2402.05643](https://arxiv.org/abs/2402.05643)
- **GitHub**: [https://github.com/leor-c/REM](https://github.com/leor-c/REM)
:::

## 核心思想

REM (Rapid Environment Modeling) 提出了一种改进的 token-based 世界模型训练方案：并行观测预测。传的token-based 世界模型（如 IRIS）以自回归方式的token、逐帧预测未来，这限制了训练速度和时间精度。REM 使用并行预测方案——一次性并行预测所有未的token，大幅提升训练效率。
REM 的核心见解是：自回归预测在训练时引入了不必要的顺序依赖，而真实世界中许多部分的演化是独立或近似独立的（如场景的不同区域）。并行预测利用这种局部独立性，在保持预测质量的同时实现 10×+ 加速。
## 技术架。
**Vision Encoding（视觉编码）**：VQ-VAE 离散编码器，将观测压缩为离散 token 序列。
**Knowledge Learning（知识学习）**：使用Transformer decoder 在离散token 空间中进行并行预测。核心差异：传统方法的token 自回归（O(N^2) 时间），REM 一次性预测所有token（O(1) 时间）。通过 mask token 方案支持条件预测——masked tokens 的unmasked context 预测。
**Controllable Simulation（可控模拟）**：在并行预测的token 空间中进行imagination-based actor-critic 训练，与 IRIS/TWM 类似。
## 代码实现要点

代码开源在 [leor-c/REM](https://github.com/leor-c/REM)。基准PyTorch。并行token prediction Transformer + VQ-VAE。在 Atari 100k 基准上评估。
## 关键创新。
1. **并行 token 预测**：去除自回归中的顺序瓶颈
2. **10× 训练加速*：并行方案显著加速world model 训练
3. **质量保持**：加速的同时保持预测质量不降
4. **Mask token 方案**：灵活的条件预测试unconditional 生成

## 代表性结。
在Atari 100k 基准上，REM 达到 IRIS 级别的性能（人类标准化 ~1.0×），但训练速度提升 10+ 倍。在部分游戏上超的IRIS，特别是在快速变化的游戏（如 Breakout）上并行预测优势明显。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
