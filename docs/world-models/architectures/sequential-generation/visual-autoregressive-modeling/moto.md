---
title: "Moto: Latent Motion Token as the Bridging Language for Learning Robot Manipulation from Video"
design: "Moto"
arxiv: https://arxiv.org/abs/2412.04445
github: https://github.com/TencentARC/Moto
---

# Moto: Latent Motion Token as the Bridging Language for Learning Robot Manipulation from Video

::: info 论文信息
- **Design**: Moto
- **论文全称**: Moto: Latent Motion Token as the Bridging Language for Learning Robot Manipulation from Video
- **arXiv**: [https://arxiv.org/abs/2412.04445](https://arxiv.org/abs/2412.04445)
- **GitHub**: [https://github.com/TencentARC/Moto](https://github.com/TencentARC/Moto)
:::

## 学习笔记

### 核心思想

Moto 提出了一种基于自回归视频生成的世界模型，用于机器人操控任务。其核心思路是将视觉预测与动作生成相结合：从视频中提取"潜在运动 Token"（Latent Motion Token），作为视觉观测与机器人动作之间的统一桥接语言。通过自回归 Transformer 对运动 Token 进行预测，模型既能生成未来的视觉状态，也能输出相应的机器人动作轨迹。

Moto 的关键贡献在于定义了"运动作为桥接语言"的范式——通过无监督方式从视频中学习运动表示，再将视频中学到的运动知识迁移到真实机器人操控中。该方法在视频生成和机器人控制之间建立了高效的知识共享机制，有效利用了海量视频数据中的运动先验。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
