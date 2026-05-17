---
title: "Vivid-VR: Distilling Concepts from Text-to-Video Diffusion Transformer for Photorealistic Video Restoration"
arxiv: https://arxiv.org/abs/2508.14483v3
github: https://github.com/csbhr/Vivid-VR
website: https://csbhr.github.io/projects/vivid-vr/
venue: ICLR
year: 2026
---

# Vivid-VR: Distilling Concepts from Text-to-Video Diffusion Transformer for Photorealistic Video Restoration

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2508.14483v3](https://arxiv.org/abs/2508.14483v3)
- **GitHub**: [https://github.com/csbhr/Vivid-VR](https://github.com/csbhr/Vivid-VR)
- **Website**: [https://csbhr.github.io/projects/vivid-vr/](https://csbhr.github.io/projects/vivid-vr/)
:::

## 学习笔记

### 核心贡献
- 提出基于 T2V DiT 基础模型的生成式视频修复方法，利用 ControlNet 控制生成过程，并引入概念蒸馏训练策略（Concept Distillation Training）解决微调中的分布漂移问题。
- 重新设计控制架构：1）控制特征投影器（Control Feature Projector）滤除输入潜在中的退化伪影；2）双分支 ControlNet 连接器，融合 MLP 特征映射与 Cross-Attention 动态控制特征检索。

### 方法细节
- 利用预训练 T2V 模型合成携带文本概念的训练样本，将概念理解蒸馏到视频修复模型中，以保持纹理真实性和时序一致性。
- 退化视频经 VAE 编码后通过 Control Feature Projector 抑制伪影传播，再送入双分支 ControlNet 进行内容保持与自适应调制。
- 双分支中的 Cross-Attention 分支负责从空间-时间维度动态检索与目标视频最相关的控制特征。

### 关键发现
- 概念蒸馏策略有效缓解了可控生成管线在真实退化场景下的分布漂移，合成与真实基准上均实现优于现有方法的纹理真实感与时序一致性。
- 方法对 AIGC 视频同样有效，具备跨域泛化能力。

### 方法归类
- **范式**: [DiT 生成式视频修复 / 概念蒸馏 + ControlNet]
- **关键技术**: [概念蒸馏训练 → 控制特征投影 → 双分支 ControlNet（MLP + Cross-Attention）]
- **适用场景**: [真实世界视频修复，AIGC 视频伪影去除，高保真纹理恢复]
