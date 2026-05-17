---
title: "SePPO: Semi-Policy Preference Optimization for Diffusion Alignment"
github: https://github.com/DwanZhang-AI/SePPO
website: https://arxiv.org/html/2410.05255v1
venue: ICLR
year: 2025
---

# SePPO: Semi-Policy Preference Optimization for Diffusion Alignment

::: info 论文信息
- **Venue**: ICLR (2025)
- **GitHub**: [https://github.com/DwanZhang-AI/SePPO](https://github.com/DwanZhang-AI/SePPO)
- **Website**: [https://arxiv.org/html/2410.05255v1](https://arxiv.org/html/2410.05255v1)
:::

## 学习笔记

### 核心贡献
- 提出 SePPO：半策略偏好优化，结合 on-policy 和 off-policy 数据的优势
- 解决扩散模型中完全 on-policy 训练计算成本高、完全 off-policy 训练分布偏移大的问题
- ICLR 2025 录用，为扩散模型偏好优化提供了新的训练范式

### 方法细节
- **半策略采样**：部分训练数据来自当前模型（on-policy），部分来自历史检查点或预训练模型（off-policy）
- **混合损失设计**：on-policy 数据用策略梯度损失，off-policy 数据用重要性采样加权的 DPO 损失
- **策略更新频率**：每隔 k 步更新 on-policy 样本，避免完全在线训练的频繁采样

### 关键发现
- 半策略方法在训练效率和最终质量之间取得了比纯 on-policy 和纯 off-policy 更好的 Pareto 前沿
- 扩散模型的 on-policy 采样成本是主要瓶颈——半策略可减少约 60% 的采样开销
- SePPO 与 Diffusion-NPO 对比：前者是混合策略，后者是负偏好加权，二者可互补

### 方法归类
偏好优化 — 策略优化（半策略）
