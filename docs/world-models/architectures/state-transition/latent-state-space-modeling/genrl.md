---
title: "GenRL: Multimodal-Foundation World Models for Generalization in Embodied Agents"
design: "GenRL"
arxiv: https://arxiv.org/abs/2406.18043
github: https://github.com/mazpie/genrl
---

# GenRL: Multimodal-Foundation World Models for Generalization in Embodied Agents

::: info 论文信息
- **Design**: GenRL
- **论文全称**: GenRL: Multimodal-Foundation World Models for Generalization in Embodied Agents
- **arXiv**: [https://arxiv.org/abs/2406.18043](https://arxiv.org/abs/2406.18043)
- **GitHub**: [https://github.com/mazpie/genrl](https://github.com/mazpie/genrl)
:::

## 核心思想

GenRL 是清华MAZ 团队提出的多模态基础世界模型框架，目标是将世界模型的泛化能力提升到新水平。核心思想是：利用预先训练好的多模态基础模型（Video-Language Model，如 Video-LLaMA）作为世界模型的"感知 backnone"，从中提取富语义视觉特征，然后在此特征之上学习轻量级的latent dynamics。
GenRL 解决了传统世界模型的一个核心瓶颈：视觉编码器通常从头训练，无法利用互联网规模的多模态知识。通过接入 VLM 的特征，世界模型可以泛化到训练数据中未见过的物体和场景——因果VLM 已经在海量数据上学习了丰富的视觉-语义关联。
## 技术架。
**Vision Encoding（视觉编码）**：使用冻结的 Video-LLaMA 或其动VLM 作为视觉编码器。VLM 将RGB 帧映射为富含语义的latent features。不需要为每个新任务重新训练encoder。
**Knowledge Learning（知识学习）**：在 VLM 特征之上学习轻量级的 latent dynamics model（MLP 或小型Transformer）。由于VLM 特征已经高度语义化，dynamics 模型只需学习语义层面的状态转移，参数量大幅减少。
**Controllable Simulation（可控模拟）**：在 VLM 语义 latent space 中进行MPPI 规划的behavioral cloning。语义特征使策略能跨任务泛化。
## 代码实现要点

代码开源在 [mazpie/genrl](https://github.com/mazpie/genrl)。基在PyTorch。VLM encoder（冻结）+ lightweight dynamics + MPPI planner。在 Robosuite、MetaWorld 等环境中评估。
## 关键创新。
1. **VLM 作为感知 backbone**：世界模型首次接入多模态基础模型
2. **语义级泛化*：VLM 特征可world model 能处理未见物理3. **轻量的dynamics**：VLM 特征简介downstream dynamics learning
4. **跨域迁移**：从仿真到真实世界的潜在迁移能力

## 代表性结。
在Robosuite 上，GenRL 展现了对不可见物体（训练时未见的颜色、形状）的显著泛化能力（成功率比 DreamerV3 基40%）。在 MetaWorld 的跨任务迁移场景中，GenRL 的迁移性能比从头训练每任务的世界模型高 -2× 样本效率。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
