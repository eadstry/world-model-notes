---
title: "VADER: Video Diffusion Alignment via Reward Gradients"
arxiv: https://arxiv.org/abs/2407.08737
github: https://github.com/vader-vid/vader
website: https://vader-vid.github.io/
venue: ICLR
year: 2025
---

# VADER: Video Diffusion Alignment via Reward Gradients

::: info 论文信息
- **Venue**: ICLR (2025)
- **arXiv**: [https://arxiv.org/abs/2407.08737](https://arxiv.org/abs/2407.08737)
- **GitHub**: [https://github.com/vader-vid/vader](https://github.com/vader-vid/vader)
- **Website**: [https://vader-vid.github.io/](https://vader-vid.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 VADER：通过奖励模型梯度直接引导视频扩散模型的去噪过程
- 无需 RL 训练（免 PPO），利用可微分奖励模型的梯度信号实现推理时/微调时对齐
- 实现了与 RLHF 相当的偏好对齐效果，但训练更稳定

### 方法细节
- **奖励梯度引导**：在去噪过程中，将奖励模型 $R(x_t, c)$ 对隐变量 $x_t$ 的梯度注入去噪方向
- **训练时可微优化**：通过奖励模型梯度反向传播更新扩散模型参数
- **推理时也可用**：无需微调，直接在推理时注入奖励梯度（类似 classifier guidance）

### 关键发现
- VADER 避免了 RLHF 中的策略漂移和奖励攻击问题
- 可微奖励模型的选择至关重要：需要训练专用的视频评估奖励模型
- 与 T2V-Turbo 的蒸馏方法正交——二者可组合使用

### 方法归类
偏好优化 — 奖励梯度引导
