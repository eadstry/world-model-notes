---
title: "SoliReward: 缓解视频生成奖励模型中的奖励破解与标注噪声"
source: "arxiv"
arxiv_id: "2512.22170"
tags: ["reward model","video generation","preference alignment","reward hacking","annotation noise","RLHF","Bradley-Terry"]
status: "已读"
---
## 学习笔记

### 核心贡献

- **面向视频生成的奖励模型训练框架**：SoliReward 针对视频生成模型偏好对齐（preference alignment）中的奖励模型（RM）训练问题，系统性地解决奖励破解（reward hacking）和标注噪声（annotation noise）两大挑战。
- **高效低成本的数据构建策略**：提出以单项二元标注（single-item binary annotations）替代成对比较标注，结合跨提示配对（cross-prompt pairing）策略，在不依赖昂贵成对标注的情况下构建高质量的 RM 训练数据。
- **分层渐进式查询注意力**：设计了 Hierarchical Progressive Query Attention (HPQA) 机制用于视频特征聚合，通过分层查询逐步融合时空特征，提升 RM 对视频质量细粒度差异的感知能力。
- **改进的 BT 损失函数**：修改 Bradley-Terry (BT) 损失以兼容胜负-平局（win-tie）场景，同时正则化 RM 的分数分布，缓解奖励破解（即 RM 给出极端高分但视频实际质量不佳的问题）。
- **多维度验证**：在物理合理性（physical plausibility）、主体畸形（subject deformity）和语义对齐（semantic alignment）三个视频生成质量评估基准上验证了 SoliReward 的有效性。

### 方法细节

- **数据构建策略**：
  - **Single-item Binary Annotation**：对单个视频给出「好/差」的二元标注，而非传统 RLHF 中的人工成对比较（pairwise comparison）。这大幅降低了标注成本和难度。
  - **Cross-Prompt Pairing**：将来自不同提示（prompt）的视频配对比对，通过跨提示的对比学习信号丰富训练样本的多样性，弥补单项标注缺乏显式比较信息的不足。
- **HPQA 特征聚合**：
  - 分层结构：在帧级（per-frame）、片段级（per-clip）、视频级（per-video）三个粒度上设置可学习的 Query Token。
  - 渐进式融合：先聚合帧内空间信息 → 再聚合片段内时序信息 → 最后聚合全视频层面特征，逐步捕捉从局部到全局的视频质量信号。
  - 与标准 ViT 特征提取相比，HPQA 对视频中的细微瑕疵（如物体形变、运动不自然）更敏感。
- **改进的 BT 损失**：
  - 引入平局类别：$P(\text{win}) = \frac{e^{s_A}}{e^{s_A} + e^{s_B} + e^{s_{\text{tie}}}}$，处理视频质量相近、难以判断优劣的场景。
  - 分数分布正则化：在损失中加入对 RM 输出分数分布的熵正则项，防止 RM 退化为对某些模式输出极端高分（reward hacking）。
- **训练流程**：预训练视觉编码器 → HPQA 聚合 → MLP 评分头 → BT Loss with Regularization。

### 关键发现

- SoliReward 训练的 RM 在物理合理性、主体畸形、语义对齐三个维度上均优于以成对标注训练的基线 RM，同时数据成本更低。
- HPQA 机制相比简单的全局池化或 Transformer 聚合，在捕捉视频细粒度质量问题（如肢体变形、违反物理规律）上提升显著。
- 改进的 BT 损失（含平局与正则化）有效缓解了 RM 的奖励破解问题：SoliReward RM 的分数分布更集中、与真实质量更相关，在高分区间不会出现虚假膨胀。
- 单项二元标注 + 跨提示配对的策略在标注效率（成本降低约 3-5 倍）与模型性能之间取得了良好的折中。

### 方法归类

- **类别**：视频生成评估 / 奖励模型 / 偏好对齐
- **技术栈**：Reward Model + Bradley-Terry + HPQA + Preference Optimization
- **与应用的关系**：属于视频生成的后训练（post-training）与评估基础设施，服务于 RLHF/DPO 等偏好对齐流程中的 RM 环节。与 VideoScore、VBench 等工作不同，SoliReward 更关注 RM 本身的鲁棒性训练，而非单纯构建评估基准。
