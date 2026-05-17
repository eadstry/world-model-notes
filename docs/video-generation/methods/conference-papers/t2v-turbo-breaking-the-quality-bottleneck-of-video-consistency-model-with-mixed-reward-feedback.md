---
title: "T2V-Turbo: Breaking the Quality Bottleneck of Video Consistency Model with Mixed Reward Feedback"
arxiv: https://arxiv.org/abs/2405.18750
github: https://github.com/Ji4chenLi/t2v-turbo
website: https://t2v-turbo.github.io/
venue: NeurIPS
year: 2024
---

# T2V-Turbo: Breaking the Quality Bottleneck of Video Consistency Model with Mixed Reward Feedback

::: info 论文信息
- **Venue**: NeurIPS (2024)
- **arXiv**: [https://arxiv.org/abs/2405.18750](https://arxiv.org/abs/2405.18750)
- **GitHub**: [https://github.com/Ji4chenLi/t2v-turbo](https://github.com/Ji4chenLi/t2v-turbo)
- **Website**: [https://t2v-turbo.github.io/](https://t2v-turbo.github.io/)
:::

## 学习笔记

### 核心贡献
- 将一致性模型（Consistency Model）从图像域扩展到视频域，实现 4-8 步视频生成
- 提出混合奖励反馈机制：组合多种自动评估信号（VideoScore + aesthetic score + motion score）作为训练引导
- 打破了先前一致性模型在视频上质量大幅下降的瓶颈

### 方法细节
- **视频一致性模型 (VCM)**：将扩散模型的 PF-ODE 轨迹蒸馏到一致性函数，实现少步采样
- **混合奖励**：组合 VideoScore（语义对齐）、LAION aesthetic predictor（审美）、optical flow magnitude（运动量）
- **奖励引导训练**：在一致性蒸馏过程中注入奖励信号，使少步生成同时优化质量和效率

### 关键发现
- 4 步生成的 VCM 可匹敌 50 步 DDIM 采样质量的约 95%
- 混合奖励比单一奖励更稳定，避免了 over-optimization
- 奖励信号需要小心校准：不同维度的 reward scale 差异很大会导致训练崩溃

### 方法归类
自训练与蒸馏 — 一致性模型
