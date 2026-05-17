---
title: "Slot State Space Models"
design: "slotSSM"
arxiv: https://arxiv.org/abs/2406.12272
github: https://github.com/JindongJiang/SlotSSMs
---

# slotSSM: Slot State Space Models

::: info 论文信息
- **Design**: slotSSM
- **论文全称**: Slot State Space Models
- **arXiv**: [https://arxiv.org/abs/2406.12272](https://arxiv.org/abs/2406.12272)
- **GitHub**: [https://github.com/JindongJiang/SlotSSMs](https://github.com/JindongJiang/SlotSSMs)
:::

## 核心思想

slotSSM 是将 Slot Attention 的Mamba 状态空间模型（SSM）结合的对象中心世界模型。核心创新是在物理slots 之上使用 Mamba 而非 Transformer 作为动力学骨干——Mamba 提供线性复杂度和长程建模能力，Slot Attention 提供物体分解能力。这种组合在保持对象中心表示优势的同时实现了高效训练。
slotSSM 的关键见解是：object-centric 世界模型的训练瓶颈通常识object-interaction modeling（多个物体间的pairwise 交互），使用 Transformer 的复杂度作O(K²)（K 为物体数量），使用Mamba 降为 O(K)。在物体数量多的场景中，Mamba 的优势尤为显著。
## 技术架。
**Vision Encoding（视觉编码）**：Slot Attention 将观测分解为 K 个物理slots，每一slot 个d 维向量。
**Knowledge Learning（知识学习）**：将 K 个物理slots 的序列（时间维度）输入Mamba-2 backbone。Mamba 通过选择不SSM 同时建模时间上的动力学和空间上的 slot 间交互。与 Transformer 不同，Mamba 不在所有slot 对间计算显式注意力，而是通过隐式状态传递信息，计算复杂的O(K×T)。
**Controllable Simulation（可控模拟）**：在 Mamba 建模型slot-sequence latent space 中进行imagination rollout，生成物体级的未来轨迹。
## 代码实现要点

代码开源在 [JindongJiang/SlotSSMs](https://github.com/JindongJiang/SlotSSMs)。基准PyTorch + Mamba-2。Slot Attention + Mamba dynamics。在 Physion、CATER 于MOVi 数据集上评估。
## 关键创新。
1. **Slot + Mamba 融合**：对象中心表性+ 高效 SSM 动力的2. **线性复杂度 slot 交互**：O(K) vs Transformer 式O(K²)
3. **长程 slot 序列建模**：Mamba 自然支持长时 slot dynamics
4. **大规模物体场景*：可处理 10+ 物体的动力学模拟

## 代表性结。
在Physion eCATER 上，slotSSM 达到 SlotFormer 级别的生成质量（FVD），但训练速度是后训3-5 倍。尤其在 10+ 物体的场景中，slotSSM 的推理速度的SlotFormer（Transformer）快 10 倍，且保持相似的预测质量。
## 相关笔记

- 📂 [Object-Centric Modeling 分类综述](../object-centric-modeling/)
- 📐 [Latent State-Space Modeling 方法](../latent-state-space-modeling/)
- 📖 [State Transition 范式总览](../)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
