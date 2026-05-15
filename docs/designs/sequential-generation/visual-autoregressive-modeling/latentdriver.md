---
title: "Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving"
design: "LatentDriver"
arxiv: https://arxiv.org/abs/2409.15730
github: https://github.com/Sephirex-X/LatentDriver
---

# LatentDriver: Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving

::: info 论文信息
- **Design**: LatentDriver
- **论文全称**: Learning Multiple Probabilistic Decisions from Latent World Model in Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2409.15730](https://arxiv.org/abs/2409.15730)
- **GitHub**: [https://github.com/Sephirex-X/LatentDriver](https://github.com/Sephirex-X/LatentDriver)
:::

## 学习笔记

## 核心思想

LatentDriver 提出了一种从潜在世界模型中推导自动驾驶决策的新方法。自回归世界模型在矢量化场景理解中展现了强大的泛化能力，但在推导具体驾驶动作时面临两个关键挑战：(1) **不确定性建模不足**——驾驶决策本质上是概率性的（同一场景可以有多种合理操作），而传统确定性动作预测无法捕捉这种多模态性；(2) **自欺（self-delusion）问题**——如果世界模型被自己的预测误差误导，后续的动作推导会越来越偏离真实场景。

LatentDriver 的核心创新是将世界模型的状态预测和自车动作建模为**混合分布（mixture distribution）**——即通过学习多个可能性的概率假设（假设左转、右转、直行等）并从中采样，来捕捉决策的随机性和多模态性。此外，为了解决自欺问题，LatentDriver 在训练时向世界模型输入从混合分布中采样的中间动作，而非直接使用确定性动作，使模型学会在"不确定自己动作"的情况下依然保持合理的环境预测。论文在 Waymax 闭环仿真器上取得了专家级驾驶表现。

## 技术架构

**Vision Encoding（视觉编码）**：LatentDriver 使用矢量化编码（vectorized encoding）而非像素级编码——将地图元素（车道线、路口、交通标志）和其他交通参与者表示为向量序列。这种编码方式极大压缩了输入维度（相比 3D 占用或图像），使世界模型可以专注于高层次的交通交互推理，且天然适合自回归 Transformer 处理。

**Knowledge Learning（知识学习）**：LatentDriver 的核心是混合密度网络（Mixture Density Network）世界模型。具体包括：(1) **环境状态转换模型**——以当前矢量化场景表示为条件，预测未来场景的变化；(2) **混合策略输出头**——将自车的可能动作建模为 K 个高斯分量的混合分布，每个分量代表一种驾驶意图（如左转、直行等）。训练时通过最大化混合似然来学习分布的参数。中间动作采样策略通过从混合分布中随机采样一个分量，然后将其对应的动作输入世界模型，打破确定性动作→确定性场景的循环。

**Controllable Simulation（可控模拟）**：推理时，LatentDriver 从混合分布中选择最高概率的动作分量作为最终控制信号（取混合分布中最大权重分量的均值）。在需要探索的场景中，也可以从混合分布的次要分量中采样，尝试"次优"但合理的备选方案。混合分布自然地赋予每个动作一个置信度分数，可用于风险感知决策——当主分量和次分量的概率接近时，表明场景存在高度不确定性。

## 代码实现要点

代码已在 GitHub 开源（Sephirex-X/LatentDriver）。核心实现：(1) 矢量化编码器处理 Waymo 数据的地图和障碍物信息；(2) 自回归 Transformer 建模时序场景演化；(3) 混合密度输出头（默认 K=5 个高斯分量）；(4) 训练时的中间动作采样机制。模型在 Waymax 闭环仿真器上评估，使用 Waymo Open Motion Dataset 的交互数据训练。关键超参：高斯分量数 K（5-10）、训练时的动作噪声幅度（平衡自欺鲁棒性和训练稳定性）。

## 关键创新点

- **混合分布决策框架**：将驾驶动作建模为多模态概率分布，天然处理"同场景多合理动作"的不确定性
- **自欺问题的创新解决方案**：通过从分布中采样中间动作并输入世界模型，打破预测误差的恶性循环
- **Waymax 专家级性能**：在闭环仿真中超越了当时的 SOTA 强化学习和模仿学习方法
- **矢量化世界模型**：使用向量而非像素表示，在保持高效推理的同时捕获了关键的交通交互信息

## 代表性结果

在 Waymax 闭环仿真器上，LatentDriver 在碰撞率、路线完成率和驾驶舒适度等多个指标上超越了当时的 SOTA 方法（包括 RL 和 IL 方法）。混合分布带来的不确定性估计能力在以下场景中展现了明显优势：多车道选择时的决策、路口交互时对他人意图的预判、以及对抗性场景下的鲁棒应对。消融实验显示，移除混合建模（改为单一动作输出）或移除中间动作采样机制均导致碰撞率显著上升。
