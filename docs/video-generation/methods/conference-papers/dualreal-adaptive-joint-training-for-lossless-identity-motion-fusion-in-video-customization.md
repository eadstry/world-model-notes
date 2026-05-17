---
title: "DualReal: Adaptive Joint Training for Lossless Identity-Motion Fusion in Video Customization"
arxiv: https://arxiv.org/abs/2505.02192
github: https://github.com/wenc-k/DualReal
website: https://wenc-k.github.io/dualreal-customization/
venue: ICCV
year: 2025
---

# DualReal: Adaptive Joint Training for Lossless Identity-Motion Fusion in Video Customization

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2505.02192](https://arxiv.org/abs/2505.02192)
- **GitHub**: [https://github.com/wenc-k/DualReal](https://github.com/wenc-k/DualReal)
- **Website**: [https://wenc-k.github.io/dualreal-customization/](https://wenc-k.github.io/dualreal-customization/)
:::

## 学习笔记

### 核心贡献
- 首次提出身份-运动联合定制的视频生成框架 DualReal，突破现有方法将主体身份与运动动态孤立定制的局限，显式建模二者之间的互约束与协同依赖关系。
- 设计 Dual-aware Adaptation 机制，在训练过程中动态切换身份或运动维度，利用已冻结的维度先验引导当前维度学习，并通过正则化策略防止不同维度间的知识泄漏。
- 提出 StageBlender Controller，利用扩散过程中去噪阶段与 DiT 深度的差异化特性，以自适应粒度调控不同维度的生成，实现身份与运动模式的无损融合。

### 方法细节
- Dual-aware Adaptation 在每步训练中交替优化身份注入与运动注入的参数，冻结对方的 LoRA 权重作为约束先验，避免双向耦合导致的信息混淆。
- StageBlender Controller 将去噪时间步与 DiT 层的深度作为两维控制信号，在早期阶段优先引导主体身份一致性，在后期阶段更侧重运动动态的精确建模。
- 构建了比现有方法更全面的评测基准，覆盖多维度身份保持（CLIP-I、DINO-I）与运动质量（多类运动一致性指标），为联合定制任务提供更可靠的评估体系。
- 整体框架在预训练 T2V 扩散模型之上以适配器方式即插即用，无需修改基础模型权重，具有良好的可扩展性。

### 关键发现
- 在联合定制场景下，身份保持与运动一致性并非独立目标——孤立训练任一维度都会因另一维度的干扰而系统性退化，联合训练可显著缓解此冲突。
- DualReal 在 CLIP-I 和 DINO-I 指标上平均提升 21.7% 和 31.8%，同时在几乎全部运动质量指标上达到最优，验证了身份-运动无损融合的有效性。

### 方法归类
- 属于视频生成中的主体定制（subject customization）方向，具体聚焦于身份保持与运动迁移的联合建模，区别于仅做单维度（仅身份或仅运动）定制的已有工作。
- 方法论上属于基于预训练扩散模型的适配器微调范式（adapter-based fine-tuning），通过时空分离的参数高效微调策略实现多维度可控生成。
