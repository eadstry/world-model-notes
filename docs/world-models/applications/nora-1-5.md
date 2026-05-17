---
title: "NORA-1.5: A Vision-Language-Action Model Trained using World Model and Action-based Preference Rewards"
design: "NORA-1.5"
arxiv: https://arxiv.org/abs/2511.14659
github: https://github.com/declare-lab/nora-1.5
---

# NORA-1.5: A Vision-Language-Action Model Trained using World Model and Action-based Preference Rewards

::: info 论文信息
- **Design**: NORA-1.5
- **论文全称**: NORA-1.5: A Vision-Language-Action Model Trained using World Model and Action-based Preference Rewards
- **arXiv**: [https://arxiv.org/abs/2511.14659](https://arxiv.org/abs/2511.14659)
- **GitHub**: [https://github.com/declare-lab/nora-1.5](https://github.com/declare-lab/nora-1.5)
:::

## 学习笔记

### 核心思想

该工作提出了 NORA-1.5，一个利用世界模型和基于动作的偏好奖励进行训练的视觉语言动作模型。其核心创新在于将世界模型用作偏好信号的生成器——通过世界模型对不同动作方案进行模拟，生成关于哪个动作更好的偏好反馈，用于训练 VLA 模型。
该工作的贡献在于预VLA 训练提供了一种基于世界模型模拟的新型奖励信号生成机制，绕开了传统人类偏好标注的高成本瓶颈。
## 相关笔记

- 📂 [Downstream Tasks 分类综述](../)
- 🌍 [Designs 架构设计](/world-models/architectures/)
- 📊 [Datasets & Benchmarks](/world-models/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
