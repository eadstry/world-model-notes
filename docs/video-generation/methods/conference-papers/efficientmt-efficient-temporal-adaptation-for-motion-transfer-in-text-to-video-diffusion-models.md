---
title: "EfficientMT: Efficient Temporal Adaptation for Motion Transfer in Text-to-Video Diffusion Models"
arxiv: https://arxiv.org/abs/2503.19369
github: https://github.com/PrototypeNx/EfficientMT
venue: ICCV
year: 2025
---

# EfficientMT: Efficient Temporal Adaptation for Motion Transfer in Text-to-Video Diffusion Models

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.19369](https://arxiv.org/abs/2503.19369)
- **GitHub**: [https://github.com/PrototypeNx/EfficientMT](https://github.com/PrototypeNx/EfficientMT)
:::

## 学习笔记

### 核心贡献
- 提出 EfficientMT，一个端到端的视频运动迁移框架，无需测试时优化即可实现通用运动迁移，解决了现有方法依赖逐样本优化的高计算开销问题。
- 通过构造少量合成配对运动迁移样本，将预训练文生视频模型适配为通用运动迁移框架，具备准确捕获和复现多样化运动模式的能力。

### 方法细节
- 重用预训练文生视频模型的主干网络提取参考视频的时序信息，避免引入全新的时序特征提取模块。
- 设计一个 scaler 模块用于蒸馏运动相关信息，从参考视频中高效抽取运动特征。
- 提出时序整合机制（Temporal Integration Mechanism），将参考运动特征无缝注入视频生成过程，确保生成视频的运动与参考视频一致。
- 训练数据采用自收集的合成配对运动迁移样本，通过小规模数据即可实现高效的模型适配。

### 关键发现
- EfficientMT 在保持灵活运动可控性的同时，推理效率显著优于现有基于逐样本优化的运动迁移方法。
- 实验表明，端到端的训练策略能够有效泛化到未见过的运动模式，无需对每个测试样本重新微调。
- 所提出的 scaler 模块和时序整合机制能够准确传递参考视频的运动信息，同时不损害生成视频的空间质量。

### 方法归类
- 属于视频运动迁移（Motion Transfer）方向，核心目标是将参考视频的运动模式迁移到文本驱动的视频生成中。
- 与基于逐样本优化（如 DMT、MotionDirector）的方法不同，EfficientMT 通过端到端训练实现通用迁移能力，属于免测试时优化的高效运动迁移范式。
