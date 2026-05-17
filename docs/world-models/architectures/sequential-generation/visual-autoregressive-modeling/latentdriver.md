---
title: "Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving"
design: "LatentDriver"
arxiv: https://arxiv.org/abs/2409.15730
---

# LatentDriver: Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving

::: info 论文信息
- **Design**: LatentDriver
- **论文全称**: Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2409.15730](https://arxiv.org/abs/2409.15730)
:::

## 学习笔记

### 核心思想

LatentDriver 是一种从潜在世界模型推导自动驾驶决策的新方法，将自回归世界模型的视频预测能力扩展为强大的规划能力。自动驾驶决策面临三个关键挑战：(1) **不确定性建模**——驾驶决策本质上是概率性的，同一场景有多种合理选择，传统的确定性行为预测无法捕捉这种多模态性；(2) **自欺（self-delusion）问题**——规划模型可能被自己预测的偏差误导，决策质量越来越偏离真实情况。

LatentDriver 的核心创新是将世界模型的状态预测和自车行为建模为**混合分布（mixture distribution）**。通过学习多个合理的概率假设（如加速、减速、转向、直行等），模型在推理时从混合分布的各个分量中采样候选行为，然后通过碰撞检查和决策评估选择最优执行。为解决自欺问题，LatentDriver 在训练时通过在混合分布的分量间加入扰动来增强模型，使其不依赖单一预测路径，从而打破"自欺"循环。在 Waymax 仿真器上的实验验证了该方法的有效性。

### 核心架构

**Vision Encoding（视觉编码）**：LatentDriver 使用矢量化编码（vectorized encoding）而非像素级编码——将关键场景元素（道路线、路口、交通标志、其他车辆、行人等）表示为矢量序列。这种编码方式大幅压缩了信息维度（相比 3D 占用或图像），使世界模型可以专注于高层的交通场景理解和推理，非常适合自回归 Transformer 建模。

**Knowledge Learning（知识学习）**：LatentDriver 的核心是基于混合密度网络（Mixture Density Network）的建模：(1) **状态转移模型**——将当前矢量场景编码后，预测未来场景的状态变化；(2) **混合分布头**——将自车的可能行为建模为 K 个高斯分量的混合分布，每个分量对应一种候选驾驶策略（如加速-转向、减速-直行等）。训练时通过最大化对数似然来学习分布的参数。为缓解自欺问题，在训练时对混合分布的各分量间注入扰动，迫使模型学习更鲁棒的决策分布，在推理时从混合分布中采样并执行碰撞检测后选择安全轨迹。

**Controllable Simulation（可控模拟）**：推理时，LatentDriver 从混合分布中选择最高概率的动作分量作为默认控制信号（取混合分布中权重最大的分量的均值）。在需要探索的场景中，也可以从混合分布的次要分量中采样，产生"备选"的多样化决策。混合分布自然地提供每个决策的置信度分数，有利于风险感知规划——当主要和次要分量的概率接近时，表示高度不确定性。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
