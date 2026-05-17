---
title: "Accelerating Model-Based Reinforcement Learning with State-Space World Models"
design: "S5WM"
arxiv: https://arxiv.org/abs/2502.20168
---

# S5WM: Accelerating Model-Based Reinforcement Learning with State-Space World Models

::: info 论文信息
- **Design**: S5WM
- **论文全称**: Accelerating Model-Based Reinforcement Learning with State-Space World Models
- **arXiv**: [https://arxiv.org/abs/2502.20168](https://arxiv.org/abs/2502.20168)
:::

## 核心思想

S5WM 探索了使用S5（Simplified Structured State Space）模型作为世界模型骨干架构的可能性。与基于 RNN（GRU）的 RSSM 或基准Transformer 的世界模型不同，S5WM 使用线性状态空间模型（SSM）来学习 latent dynamics，实现了远高效Transformer 的计算效率和更好的长程记忆能力。
S5WM 的核心见解是：虽然Transformer 建模能力强，但自注意力在长序列上的计算代生O(n²) 成为瓶颈。SSM 通过卷积/并行扫描实现 O(n log n) 的时间复杂度，使其在长程动力学建模上具有天然优势。S5WM 证明 SSM 可以在保持预测质量的同时大幅提升世界模型的训练和推理速度。
## 技术架。
**Vision Encoding（视觉编码）**：VQ-VAE 离散编码器将观测压缩为离散token。
**Knowledge Learning（知识学习）**：使用S5 层（block-diagonal SSM）替动Transformer 作为序列建模器。S5 通过并行扫描（parallel scan）高效处理长序列，在 latent token 空间中建模多步动力学。包含多种S5 层堆叠，每层包含 SSM 核心和高的MLP 混合。
**Controllable Simulation（可控模拟）**：在 S5 latent space 中进行imagination-based actor-critic 训练，与 DreamerV3/IRIS 类似的rollout 方案。
## 代码实现要点

暂无开源代码。基准JAX，S5 latent dynamics + VQ-VAE。在 Atari 100k 于DMC 上评估。
## 关键创新。
1. **SSM 世界模型**：首次将结构化状态空间模型用作世界模型骨高2. **O(n log n) 效率**：远低于 Transformer 的计算复杂度
3. **长程记忆优势**：SSM 天然优势超越 GRU 的长程建模4. **训练加速*：相关Transformer 世界模型 5-10× 速度提升

## 代表性结。
在Atari 100k 基准上，S5WM 达到 IRIS 级别的性能（人类标准化 ~1.0×），但训练速度的IRIS 比5 倍。在 DMC 连续控制任务上，S5WM 在保持DreamerV3 级别性能的同时训练速度提升 3 倍。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
