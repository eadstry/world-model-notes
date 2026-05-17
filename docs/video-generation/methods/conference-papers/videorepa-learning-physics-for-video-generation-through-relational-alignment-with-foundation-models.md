---
title: "VideoREPA: Learning Physics for Video Generation through Relational Alignment with Foundation Models"
arxiv: https://arxiv.org/abs/2505.23656v1
github: https://github.com/aHapBean/VideoREPA
website: https://videorepa.github.io/
venue: NeurIPS
year: 2025
---

# VideoREPA: Learning Physics for Video Generation through Relational Alignment with Foundation Models

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2505.23656v1](https://arxiv.org/abs/2505.23656v1)
- **GitHub**: [https://github.com/aHapBean/VideoREPA](https://github.com/aHapBean/VideoREPA)
- **Website**: [https://videorepa.github.io/](https://videorepa.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 VideoREPA：通过关系对齐（Relational Alignment）将基础模型中的物理知识蒸馏到视频生成模型
- 不依赖物理标注数据，利用预训练基础模型（Video LLM）自动提取物理关系
- NeurIPS 2025 录用，物理感知视频生成的代表性工作

### 方法细节
- **关系提取**：使用 Video LLM 从真实视频中提取物体间的物理关系（空间、因果、力学）
- **关系对齐训练**：在视频扩散模型的特征空间中施加对比学习约束，使生成视频的物体关系与真实视频对齐
- **REPA 损失**：在 DiT 的中间层特征上计算关系一致性损失

### 关键发现
- 视频扩散模型内部已有一定的物理理解，关系对齐能激活和增强这种能力
- 对物理现象（重力、碰撞、流体）的改善显著，对纯外观类质量影响较小
- 与 WISA 不同：VideoREPA 在训练时优化内部表征，而非仅增强输入 prompt

### 方法归类
偏好优化 — 表征对齐
