---
title: "ShotAdapter: Text-to-Multi-Shot Video Generation with Diffusion Models"
arxiv: https://arxiv.org/abs/2505.07652
website: https://shotadapter.github.io/
venue: CVPR
year: 2025
---

# ShotAdapter: Text-to-Multi-Shot Video Generation with Diffusion Models

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2505.07652](https://arxiv.org/abs/2505.07652)
- **Website**: [https://shotadapter.github.io/](https://shotadapter.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 ShotAdapter 框架，首次将单镜头文本生成视频扩散模型扩展为多镜头视频生成，支持同一角色在不同镜头中执行不同动作（可跨背景）
- 提出新型数据收集管线，从现有单镜头视频数据集中构造多镜头视频训练数据

### 方法细节
- 在文本条件中引入 Transition Token，用于控制新镜头的起始帧位置
- 设计局部注意力掩码策略（local attention masking），控制 Transition Token 的影响范围，允许每个镜头使用独立的文本提示
- 所有镜头帧之间保持全注意力连接（full attention），确保角色和背景在多镜头间的连续性
- 对预训练文本生成视频模型只需微调数千步即可获得多镜头生成能力

### 关键发现
- 用户可通过 Transition Token 控制镜头数量、每镜头时长与内容，实现镜头级别的条件控制
- 全注意力机制是跨镜头一致性的关键设计，相比基于帧独立生成后拼接的方法显著提升连贯性

### 方法归类
- **范式**: 基于扩散模型的多镜头视频生成
- **关键技术**: Transition Token、局部注意力掩码、镜头特定条件注入、单镜头到多镜头数据管线
- **适用场景**: 需生成包含多个镜头切换、角色一致且场景可变的叙事性短视频
