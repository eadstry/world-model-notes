---
title: "Uncovering Untapped Potential in Sample-Efficient World Model Agents"
design: "Simulus"
arxiv: https://arxiv.org/abs/2502.11537
github: https://github.com/leor-c/Simulus
---

# Simulus: Uncovering Untapped Potential in Sample-Efficient World Model Agents

::: info 论文信息
- **Design**: Simulus
- **论文全称**: Uncovering Untapped Potential in Sample-Efficient World Model Agents
- **arXiv**: [https://arxiv.org/abs/2502.11537](https://arxiv.org/abs/2502.11537)
- **GitHub**: [https://github.com/leor-c/Simulus](https://github.com/leor-c/Simulus)
:::

## 核心思想

Simulus 是对样本高效世界模型 agent 的深入分析性工作。核心贡献是"发现未开发的潜力"——通过系统性消融实验，揭示了现有世界模型方法（如 DreamerV3、IRIS、STORM）中哪些组件真正贡献了样本效率，哪些是可有可无的。Simulus 发现了一些反直觉的现象，如更大的模型不一定更好、观察重建并非必要等。

Simulus 的关键发现包括：（1）TD-learning 在 latent space 中比 advantage-based 方法更稳定；（2）并行 token 预测在效率和性能上都优于自回归预测；（3）更大的 world model 不总是更好——中型模型通常在样本效率上优于大型模型；（4）observation reconstruction 在高维观测（Atari）中是有害的而非有益的。

## 技术架构

**Vision Encoding（视觉编码）**：对比了多种编码方案：VQ-VAE、CNN autoencoder、SimSiam pretrained encoder。

**Knowledge Learning（知识学习）**：详尽消融：RSSM vs Transformer vs SSM、自回归 vs 并行预测、图像重建 vs 仅 latent 预测、不同模型大小和训练策略。

**Controllable Simulation（可控模拟）**：对比了 Dreamer 风格的想象和 TD-MPC 风格的 planning。

## 代码实现要点

代码开源在 [leor-c/Simulus](https://github.com/leor-c/Simulus)。基于统一的 PyTorch 框架实现，支持多种世界模型架构的公平对比。在 Atari 100k 和 DMC 上评估。

## 关键创新点

1. **系统性消融分析**：揭示世界模型各组件对样本效率的真实贡献
2. **反直觉发现**：更大模型不一定更好、图像重建可能有害
3. **并行预测优势**：在效率和性能上都优于自回归
4. **统一对比框架**：公平对比多种世界模型架构

## 代表性结果

Simulus 的消融版世界模型（中型 Transformer + 并行预测 + 无图像重建）在 Atari 100k 上达到 1.3× 人类标准化分数，超越 IRIS 和 TWM，接近 EMERALD。关键是参数量仅为大型模型的 1/3，训练速度快 5 倍。
