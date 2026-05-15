---
title: "Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling"
design: "LPWM"
arxiv: https://arxiv.org/abs/2603.04553
github: https://github.com/taldatech/lpwm
---

# LPWM: Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling

::: info 论文信息
- **Design**: LPWM
- **论文全称**: Latent Particle World Models: Self-supervised Object-centric Stochastic Dynamics Modeling
- **arXiv**: [https://arxiv.org/abs/2603.04553](https://arxiv.org/abs/2603.04553)
- **GitHub**: [https://github.com/taldatech/lpwm](https://github.com/taldatech/lpwm)
:::

## 核心思想

LPWM (Latent Particle World Models) 提出了一个自监督的对象中心随机动力学模型，核心创新是用"潜在粒子"（latent particles）作为世界模型的基本表示单元。传统 object-centric 模型需要预设 slot 数量（如 7 个 slot），LPWM 使用可变数量的 latent particles 来灵活适配不同复杂度的场景。每个 latent particle 对应一个局部的物理实体片段（可以是整个物体、物体的一部分或背景区域）。

LPWM 的关键创新是将粒子模拟（particle simulation）的灵活性与深度学习的表达能力结合。Latent particles 在 latent space 中受物理方程启发——每个 particle 有位置、速度和质量属性，粒子间的交互通过距离相关的作用力建模（类似分子动力学中的势能）。这使模型天然具有物理合理性，且支持任意数量的物体。

## 技术架构

**Vision Encoding（视觉编码）**：使用可学习的 particle encoder 将图像映射为一组 latent particles。每个 particle 是一个向量，包含：latent position（2D/3D）、latent velocity、latent mass 和 visual feature。

**Knowledge Learning（知识学习）**：Particle dynamics——在 latent particles 上模拟类似牛顿力学的过程。粒子间的相互作用力通过 learned force field（position-based MLP）计算：距离越近的粒子相互作用越强。粒子位置根据力和速度更新（Verlet integration 风格）。Decoder 从 latent particles 重建图像。训练损失包含重建损失和物理一致性损失（如动量守恒）。

**Controllable Simulation（可控模拟）**：在 latent particle space 中进行长期 rollout。由于粒子动力学是物理规则的，rollout 稳定性远优于纯神经网络方法。支持添加/删除 latent particles 来编辑仿真。

## 代码实现要点

代码开源在 [taldatech/lpwm](https://github.com/taldatech/lpwm)。基于 PyTorch。Particle encoder + learned force field + Verlet integration + particle decoder。在 2D Shapes、Physion 和 CLEVRER 上评估。

## 关键创新点

1. **潜在粒子世界模型**：用 latent particles 作为基本表示单元
2. **物理启发的粒子动力学**：力场 + Verlet 积分确保物理合理性
3. **可变物体数量**：particles 灵活性天然支持任意数量物体
4. **长期稳定 rollout**：物理规则约束使 rollout 稳定 200+ 步

## 代表性结果

在 Physion 长期仿真（200+ 步）中，LPWM 的 rollout 质量保持稳定（FVD 增长缓慢），而 Slot-based 方法在 50 步后显著退化。在可变物体数量场景中（2-10 物体），LPWM 的粒子自动分配到不同物体上，展示了 vs fixed-slot 方法的灵活性优势。
