---
title: "DOLLAR: Few-Step Video Generation via Distillation and Latent Reward Optimization"
arxiv: https://arxiv.org/abs/2412.15689
website: https://quantumiracle.github.io/dollar/
venue: ICCV
year: 2025
---

# DOLLAR: Few-Step Video Generation via Distillation and Latent Reward Optimization

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2412.15689](https://arxiv.org/abs/2412.15689)
- **Website**: [https://quantumiracle.github.io/dollar/](https://quantumiracle.github.io/dollar/)
:::

## 学习笔记

### 核心贡献
- 首次将变分分数蒸馏（VSD）与一致性蒸馏（CD）统一在一个框架中，实现视频扩散模型的少步生成，从 50 步压缩至 4-8 步
- 提出隐奖励优化（Latent Reward Optimization）：在隐空间训练一个奖励模型，避免了对可微奖励函数的需求，大幅降低显存开销
- 实现 128 帧 12FPS（约 10 秒）长视频生成，VBench 综合得分 82.57，超越 Gen-3、T2V-Turbo、Kling 等商业模型
- 推理加速 278.6 倍（相比原始多步扩散模型），接近实时生成

### 方法细节
- **蒸馏组合设计**：先用 VSD 将教师模型（多步扩散）的知识蒸馏到学生模型，建立少步生成的基础轨迹；再用一致性蒸馏（CD）进一步对齐相邻去噪步的输出，减少少步采样中的累积误差
- **隐奖励模型训练**：在预训练 VAE 的隐空间中训练一个轻量级奖励模型 $R_{\phi}(z)$，直接评估隐变量 $z$ 的质量（如美学、文本对齐）；由于操作在低维隐空间而非高维像素空间，训练和推理成本大幅降低
- **隐奖励优化阶段**：将蒸馏后的少步学生模型用隐奖励 $R_{\phi}$ 进行 RL 式微调，优化目标为 $\max_{\theta} \mathbb{E}_{z \sim p_{\theta}}[R_{\phi}(z)]$，无需奖励函数可微（通过 REINFORCE 或类似梯度估计），进一步降低显存需求
- **三步训练流程**：(1) VSD 预蒸馏 → (2) CD 一致性精调 → (3) 隐奖励优化，各阶段独立训练，避免多目标联合优化的不稳定

### 关键发现
- VSD + CD 的蒸馏组合效果优于单独使用任一种蒸馏方法，证明两种蒸馏范式互补（VSD 提供全局轨迹对齐，CD 提供局部一致性）
- 隐奖励优化阶段对最终视频质量提升至关重要：仅用蒸馏（无奖励优化）的模型 VBench 得分约 78，添加隐奖励优化后提升至 82.57
- 278.6 倍加速下仍保持商业级别的视频质量，验证了蒸馏 + 奖励优化路线在视频生成领域的可行性和竞争力

### 方法归类
- **范式**: Distillation（蒸馏）+ Reward Optimization（奖励优化）
- **关键技术**: Variational Score Distillation (VSD), Consistency Distillation (CD), Latent Reward Model, 少步视频生成
- **适用场景**: 长视频（10 秒+）的实时/近实时生成、视频扩散模型推理加速、商业级视频质量竞争
