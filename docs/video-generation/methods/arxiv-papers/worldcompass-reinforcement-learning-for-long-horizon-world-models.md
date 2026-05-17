---
title: "WorldCompass: Reinforcement Learning for Long-Horizon World Models"
arxiv: https://arxiv.org/abs/2602.09022
github: https://github.com/Tencent-Hunyuan/HY-WorldCompass
website: https://3d-models.hunyuan.tencent.com/world/
venue: arXiv
year: 2026
---

# WorldCompass: Reinforcement Learning for Long-Horizon World Models

::: info 论文信息
- **Venue**: arXiv (2026)
- **arXiv**: [https://arxiv.org/abs/2602.09022](https://arxiv.org/abs/2602.09022)
- **GitHub**: [https://github.com/Tencent-Hunyuan/HY-WorldCompass](https://github.com/Tencent-Hunyuan/HY-WorldCompass)
- **Website**: [https://3d-models.hunyuan.tencent.com/world/](https://3d-models.hunyuan.tencent.com/world/)
:::

## 学习笔记

### 核心贡献
- 提出 WorldCompass (腾讯混元)：基于 RL 的长周期世界模型，将视频生成作为世界模拟器进行 RL 后训练
- 设计 World Compass Reward——结合 3D 几何一致性和物理合理性的复合奖励
- 在长周期视频（>30 秒）上保持世界一致性

### 方法细节
- **世界模型 RL**：视频扩散模型作为世界模型 → 在 rollout 轨迹上计算奖励 → 反向传播优化
- **Compass Reward**：3D geometry consistency + physics plausibility + visual quality 的加权组合
- **长周期训练**：通过自回归 rollout 多步 → 在 rollout 终点计算累积奖励 → 训练模型优化长期一致性
- **基于 HunyuanVideo**：利用腾讯混元视频生成模型的强大基座能力

### 关键发现
- RL 后训练使世界模型的长周期预测质量提升显著——自回归漂移从约 50 步推迟到 150+ 步
- 3D 几何奖励对于保持场景一致性至关重要，纯外观奖励容易导致内容崩坏
- WorldCompass 代表了「视频生成 → 世界模拟器 → RL 优化」的技术路线

### 方法归类
自训练与蒸馏 — RL 自训练（世界模型）
