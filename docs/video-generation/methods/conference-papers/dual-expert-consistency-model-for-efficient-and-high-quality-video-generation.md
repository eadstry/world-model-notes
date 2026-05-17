---
title: "Dual-Expert Consistency Model for Efficient and High-Quality Video Generation"
arxiv: https://arxiv.org/abs/2506.03123
github: https://github.com/Vchitect/DCM
website: https://vchitect.github.io/DCM/
venue: ICCV
year: 2025
---

# Dual-Expert Consistency Model for Efficient and High-Quality Video Generation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2506.03123](https://arxiv.org/abs/2506.03123)
- **GitHub**: [https://github.com/Vchitect/DCM](https://github.com/Vchitect/DCM)
- **Website**: [https://vchitect.github.io/DCM/](https://vchitect.github.io/DCM/)
:::

## 学习笔记

### 核心贡献
- 通过分析 Consistency Model 在视频蒸馏中的训练动力学，首次揭示了不同时间步之间存在显著的优化梯度与损失贡献冲突，该冲突是导致时序一致性与外观细节退化的根本原因。
- 提出参数高效的 Dual-Expert Consistency Model（DCM），将视频生成任务分解为语义专家和细节专家两个子网络，分别负责语义布局/运动建模与精细细节优化。
- 在显著减少采样步数的前提下，DCM 达到当前最优的视频生成视觉质量，验证了专家特化在视频扩散蒸馏中的有效性。

### 方法细节
- 语义专家专注于学习视频的语义布局与运动模式，配合 Temporal Coherence Loss 强化跨帧运动一致性。
- 细节专家负责纹理、边缘等精细外观的还原，通过 GAN Loss 与 Feature Matching Loss 提升单帧合成质量。
- 两专家结构以参数高效的方式实现：在现有视频扩散模型上仅引入少量额外参数，保持推理开销可控。
- 蒸馏训练中，不同时间步的损失分别路由至语义与细节专家，缓解了单模型多阶段优化的梯度冲突。

### 关键发现
- 直接将 Consistency Model 应用于视频扩散模型会导致时序一致性和外观细节的双重退化，根本原因在于蒸馏过程中不同时间步的学习目标相互冲突。
- 语义/细节的专家分离策略有效解耦了全局运动建模与局部纹理优化，使两部分在各自的损失约束下协同工作。
- DCM 在极低采样步数下仍能保持较高的生成质量，证明了 Consistency Model 蒸馏在视频生成中可达实用水平。

### 方法归类
- 属于**视频扩散模型的加速蒸馏**方向，核心贡献在于通过双专家架构解决了 Consistency Model 直接应用于视频生成时的训练冲突问题。
- 在方法范式上，可归类为**解耦式视频生成模型**，通过将语义运动与细节纹理分别建模来实现高效且高质量的视频合成。
