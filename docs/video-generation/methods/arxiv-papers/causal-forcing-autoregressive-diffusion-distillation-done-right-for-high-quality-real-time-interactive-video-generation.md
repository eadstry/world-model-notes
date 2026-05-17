---
title: "Causal Forcing: Autoregressive Diffusion Distillation Done Right for High-Quality Real-Time Interactive Video Generation"
arxiv: https://arxiv.org/abs/2602.02214
github: https://github.com/thu-ml/Causal-Forcing
website: https://thu-ml.github.io/CausalForcing.github.io/
venue: arXiv
year: 2026
---

# Causal Forcing: Autoregressive Diffusion Distillation Done Right for High-Quality Real-Time Interactive Video Generation

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2602.02214](https://arxiv.org/abs/2602.02214)
- **GitHub**: [https://github.com/thu-ml/Causal-Forcing](https://github.com/thu-ml/Causal-Forcing)
- **Website**: [https://thu-ml.github.io/CausalForcing.github.io/](https://thu-ml.github.io/CausalForcing.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 Causal Forcing：一种将自回归扩散模型蒸馏为实时交互式视频生成器的方法
- 解决了"自回归蒸馏中因果性断裂"这一核心问题——先前方法在蒸馏时破坏了帧间的因果依赖
- 实现 30+ FPS 的实时交互式视频生成

### 方法细节
- **因果蒸馏**：在蒸馏过程中严格保持帧间的因果依赖——未来帧不可影响过去帧的去噪
- **Forcing 机制**：教师模型的去噪轨迹被「强制」约束到因果结构中，学生从中学到因果一致的生成
- **架构适配**：在 DiT 中引入因果注意力 mask + 因果采样调度

### 关键发现
- 不保持因果性会导致蒸馏后的模型出现"回头看"问题——未来帧信息泄露到过去
- 因果蒸馏在交互式场景（游戏、实时仿真）中具有关键意义——用户输入只能影响未来
- 与 Anchor Forcing / Rolling Forcing / Motion Forcing 构成 Forcing 技术族

### 方法归类
自训练与蒸馏 — 因果蒸馏；推理时对齐 — Forcing 解码
