---
title: "RLVR-World: Training World Models with Reinforcement Learning"
design: "RLVR-World"
arxiv: https://arxiv.org/abs/2505.13934
github: https://github.com/thuml/RLVR-World
---

# RLVR-World: Training World Models with Reinforcement Learning

::: info 论文信息
- **Design**: RLVR-World
- **论文全称**: RLVR-World: Training World Models with Reinforcement Learning
- **arXiv**: [https://arxiv.org/abs/2505.13934](https://arxiv.org/abs/2505.13934)
- **GitHub**: [https://github.com/thuml/RLVR-World](https://github.com/thuml/RLVR-World)
:::

## 学习笔记

## 核心思想

RLVR-World（Reinforcement Learning with Verifiable Rewards for World Models）由清华大学提出，发表于 NeurIPS 2025。它提出了一种全新的世界模型训练范式：**将强化学习（RL）引入世界模型的训练过程中**，直接以世界模型的下游使用指标（如状态转换预测准确率、生成视频的感知质量）作为奖励信号进行优化。这与传统基于最大似然估计（MLE）的训练形成鲜明对比——MLE 优化的是 token 级别的交叉熵损失，往往与"世界模型好不好用"这一最终目标存在偏差。

RLVR-World 的灵感来自近期大语言模型推理能力的突破（如 RLVR 在数学推理中的应用），但将其拓展到了更广泛的生成模型领域。核心挑战在于：世界模型通常以自回归 token 预测方式工作，但其评估指标（如未来帧的重建质量）只能对解码后的实际内容进行计算。论文巧妙地将**可验证奖励**定义为对解码后预测结果的度量，然后通过 RL 策略梯度将奖励信号反传回 token 生成过程。这在语言世界模型（文本游戏、网页导航）和视频世界模型（机器人操作）两个模态上都展现了显著提升。

## 技术架构

**Vision Encoding（视觉编码）**：RLVR-World 不限定特定的编码器架构，兼容现有的各类世界模型编码方案（VQ-VAE tokenizer、CNN 编码器等）。其核心贡献在训练阶段，与编码器选择正交。对于视频世界模型，使用标准 VQ-VAE 将视觉观测离散化为 token；对于语言世界模型，直接使用 tokenizer 分词。

**Knowledge Learning（知识学习）**：这是 RLVR-World 的核心创新。训练分为两个阶段：(1) **标准 MLE 预训练**——使用传统的 next-token 交叉熵损失训练世界模型，建立基本的序列预测能力；(2) **RLVR 后训练**——将 token 生成过程视为一个序列决策问题，在每个生成步骤使用策略梯度方法（如 PPO/GRPO）优化可验证奖励。可验证奖励的定义取决于世界模型的具体应用场景：对于状态预测任务，奖励为预测状态与真实状态的 L2 距离负值；对于视频生成，奖励为生成帧的 SSIM/PSNR 分数。这种两阶段训练（先 MLE 再 RL）确保了训练稳定性和收敛速度。

**Controllable Simulation（可控模拟）**：RLVR-World 的控制能力继承自其基础世界模型架构，但经过 RLVR 优化后，生成的未来轨迹在定量指标上更接近真实动态。特别是在长序列预测场景中，RLVR 训练的模型相比纯 MLE 训练的模型展现出更低的误差累积——这归因于 RLVR 直接优化了多步预测的累积奖励，而非仅优化单步条件概率。

## 代码实现要点

代码已在 GitHub 开源（thuml/RLVR-World）。核心实现：(1) 基础世界模型使用标准 Transformer 架构；(2) RLVR 后训练使用 GRPO（Group Relative Policy Optimization）算法，每轮采样多个生成轨迹，根据相对奖励进行策略更新；(3) 可验证奖励的计算模块设计为即插即用——支持自定义奖励函数。关键超参：KL 正则化系数（控制策略不偏离 MLE 初始化太远）、采样轨迹数（4-8条）、奖励权重。实验涵盖文本游戏、网页导航和机器人操作三个领域。

## 关键创新点

- **首次将 RLVR 引入世界模型训练**：将 RL 后训练从 LLM 推理拓展到多模态生成模型，开辟了世界模型优化的新方向
- **面向下游指标的直接优化**：桥接了 MLE 训练中的概率优化与真实使用场景中的质量评估之间的差距
- **通用框架**：方法不依赖于特定架构，可应用于语言、视频等多种模态的世界模型
- **NeurIPS 2025**：经顶级 ML 会议认可，代表了后训练优化范式的新趋势

## 代表性结果

在文本游戏（TextWorld）上，RLVR-World 将任务成功率提升了 15-20%；在网页导航（WebArena）上，路径规划准确率提升约 12%；在机器人操作任务中，多步预测的累积误差降低了约 25%。消融实验确认了 RLVR 后训练相比纯 MLE 训练的显著增益，且两阶段训练（MLE + RL）优于纯 RL 从零训练的方案。论文还分析了不同奖励设计对最终性能的影响，发现结合多维奖励（准确性 + 一致性 + 多样性）的方案效果最佳。
