---
title: "Video-as-Answer: Predict and Generate Next Video Event with Joint-GRPO"
arxiv: https://arxiv.org/abs/2511.16669
github: https://github.com/KlingTeam/VANS
website: https://video-as-answer.github.io
venue: arXiv
year: 2025
---

# Video-as-Answer: Predict and Generate Next Video Event with Joint-GRPO

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [https://arxiv.org/abs/2511.16669](https://arxiv.org/abs/2511.16669)
- **GitHub**: https://github.com/KlingTeam/VANS
- **Website**: https://video-as-answer.github.io
:::

## 学习笔记

### 核心贡献
- 首次将视频作为一种新的回答模态引入下一事件预测（NEP）任务，形式化为 Video-Next-Event Prediction（VNEP），将传统文本预测扩展为动态视频回答
- 提出 VANS 模型，利用强化学习将视觉语言模型（VLM）与视频扩散模型（VDM）联合对齐，实现多模态输入理解、指令条件推理和视频生成的一体化
- 提出 Joint-GRPO 算法，通过共享奖励机制同时优化 VLM 和 VDM：使 VLM 生成准确且易于可视化的描述，同时引导 VDM 生成忠实于描述和输入视觉上下文的视频
- 构建 VANS-Data-100K 数据集，专门支撑 VNEP 任务的训练与评估

### 方法细节
- Joint-GRPO 将 VLM 与 VDM 视为联合策略单元，共享一个基于生成质量与语义一致性定义的奖励信号
- VLM 的奖励函数同时考量描述的事实准确性（与真值对比）和可被 VDM 有效可视化的程度
- VDM 的奖励函数评估生成视频与输入视觉上下文的时空一致性，以及对 VLM 生成描述的忠实度
- 两个模型在联合优化中相互适配：VLM 学会产生更"可画"的描述，VDM 学会更精确地遵从描述和上下文约束
- VANS-Data-100K 包含过程性（procedural）和预测性（predictive）两类场景，覆盖丰富的任务多样性

### 关键发现
- VANS 在过程性和预测性基准上均达到最优性能，在视频事件预测准确度和可视化质量两个维度上同步领先
- Joint-GRPO 的共享奖励机制有效解决了 VLM 和 VDM 单独优化时的目标不一致问题
- 视频作为回答模态在过程学习和创意探索场景中展现出文本不可替代的表达优势

### 方法归类
- **范式**: 强化学习对齐 / 多模态联合生成
- **关键技术**: Joint-GRPO、VLM-VDM 联合优化、VNEP 任务形式化、共享奖励设计
- **适用场景**: 过程性教学视频生成（如操作演示）、事件预测与推理可视化、多模态问答系统、创意内容生成
