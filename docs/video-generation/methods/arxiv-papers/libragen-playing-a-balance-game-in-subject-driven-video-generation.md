---
title: "LibraGen：主体驱动视频生成的平衡博弈"
source: "arxiv"
arxiv_id: "2603.13506"
tags: ["Subject-Driven Video Generation","DPO","Model Merging","CFG","Post-Training"]
status: "已读"
---
## 学习笔记
### 核心贡献
- 提出 LibraGen，系统性地解决 Subject-to-Video (S2V) 中 VGFM 内在先验（运动连贯性、视觉美学、提示对齐）与主体保真能力之间的平衡难题。
- 提出「Raising the Fulcrum, Tuning to Balance」哲学：通过提升基础模型的整体能力水位（raising fulcrum），再精细调节实现平衡（tuning to balance）。
- 构建混合数据筛选 pipeline（自动筛选 + 人工精选），以千级训练数据实现超越开源与商业 S2V 模型的性能。
- 引入 Consis-DPO 与 Real-Fake DPO 双重偏好优化，以及时变动态 CFG（Time-Dependent Dynamic CFG）推理策略。
### 方法细节
- **混合数据筛选 Pipeline**：结合 CLIP score、美学评分等自动化指标与人工标注，从大规模视频中精选高质量 S2V 训练对，确保数据覆盖主体多样性与运动场景丰富性。
- **Tune-to-Balance 后训练**：
  - **Cross-Pair 数据**：同一主体在不同场景中的视频对，增强模型的主体泛化能力。
  - **In-Pair 数据**：同一场景中不同主体的视频对，强化主体区分能力。
  - **Model Merging**：将主体保持能力强的模型与运动生成能力强的模型进行加权融合（如 DARE/TIES 合并），在参数空间实现能力平衡。
  - **Consis-DPO**：一致性 DPO，优先选择主体外观跨帧一致的样本作为正例，抑制主体漂移。
  - **Real-Fake DPO**：真实视频 vs 生成视频的对比偏好优化，将生成分布拉向真实分布。
- **时变动态 CFG**：推理时在不同去噪步采用不同的 CFG 强度，早期步侧重主体对齐（高 CFG），后期步侧重运动自然度（低 CFG），实现生成质量的动态平衡。
- **训练数据规模**：仅千级精选样本即达成 SOTA。
### 关键发现
- 仅千级训练数据即可超越使用更大规模数据训练的开源与商业 S2V 模型，证明数据质量 >> 数据数量。
- Consis-DPO 与 Real-Fake DPO 的组合效果显著优于单一 DPO 变体，二者分别从主体一致性和真实感两个维度互补。
- 时变动态 CFG 在保持主体身份的同时显著改善了运动自然度，解决了固定 CFG 的顾此失彼问题。
- Cross-Pair + In-Pair 的混合数据策略对主体泛化至关重要，单独使用任一种均导致性能下降。
### 方法归类
- **任务**：Subject-to-Video (S2V) 生成，身份保持视频生成
- **架构**：基于 VGFM（Video Generation Foundation Model）的后训练优化
- **关键技术**：Consis-DPO、Real-Fake DPO、Model Merging、时变动态 CFG、混合数据筛选
- **训练策略**：千级数据后训练，多阶段偏好优化 + 模型合并
- **推理特点**：时变动态 CFG 调度，单次推理
