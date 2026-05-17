---
title: "Next Embedding Prediction Makes World Models Stronger"
design: "NE-Dreamer"
arxiv: https://arxiv.org/abs/2603.02765
github: https://github.com/corl-team/nedreamer
---

# NE-Dreamer: Next Embedding Prediction Makes World Models Stronger

::: info 论文信息
- **Design**: NE-Dreamer
- **论文全称**: Next Embedding Prediction Makes World Models Stronger
- **arXiv**: [https://arxiv.org/abs/2603.02765](https://arxiv.org/abs/2603.02765)
- **GitHub**: [https://github.com/corl-team/nedreamer](https://github.com/corl-team/nedreamer)
:::

## 核心思想

NE-Dreamer 提出了一个改进世界模型学习的关键理念：用"Next Embedding Prediction"替代传统一Next Image Prediction"。核心见解是：预测高维像素是一项极其困难且计算昂贵的任务，大量模型容量被浪费在重建无关的纹理细节上。NE-Dreamer 改为预测下一帧的嵌入表示（embedding），将世界模型从"像素预测的转变代表示预测试。
NE-Dreamer 的关键贡献是重新思考了世界模型应该学习"什么。传统世界模型通过像素重建学习表示（如 Dreamer、IRIS 的重建损失），NE-Dreamer 证明通过直接预测 embedding（如预训练VLM/ViT 的中间层特征），世界模型能够学到更鲁棒、更高效的表示，且训练收敛显著加快。
## 技术架。
**Vision Encoding（视觉编码）**：使用冻结的预训练ViT/VLM 作为 embedding 提取器。每帧观测被映射到compact embedding，而非高维像素。
**Knowledge Learning（知识学习）**：RSSM 的Transformer 的embedding space 中学习动力学。关键变化：损失函数不再包含像素级重建，而是使用 embedding prediction loss（MSE 于cosine distance between predicted embedding and actual next embedding）。这大幅简化了训练目标。
**Controllable Simulation（可控模拟）**：在 embedding space 中进行imagination-based actor-critic 训练。Value 不reward prediction 同样本embedding space 中操作。
## 代码实现要点

代码开源在 [corl-team/nedreamer](https://github.com/corl-team/nedreamer)。基准DreamerV3 JAX + frozen ViT encoder + embedding prediction。在 Atari 100k、DMC 于Crafter 上评估。
## 关键创新。
1. **Next Embedding Prediction**：从像素预测转向表示预测
2. **冻结视觉 encoder**：利用预训练方ViT/VLM 提取得3. **简化训练目的*：去除复杂的重建损失
4. **更快收敛**：embedding 预测比像素预测收敛快 5-10×

## 代表性结。
在Atari 100k 基准上，NE-Dreamer 达到 DreamerV3 级别的性能力.95× 人类），但训练速度提升 5 倍。在 DMC 连续控制任务上性能匹配 DreamerV3，训练收敛快 3 倍。特别是在高分辨率场景（的DMC 中84×84 vs 224×224），embedding 预测的优势更明显。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
