---
title: "DyWA: Dynamics-Adaptive World Action Model for Generalizable Non-Prehensile Manipulation"
design: "DyWA"
arxiv: https://arxiv.org/abs/2503.16806
github: https://github.com/jiangranlv/DyWA
---

# DyWA: Dynamics-Adaptive World Action Model for Generalizable Non-Prehensile Manipulation

::: info 论文信息
- **Design**: DyWA
- **论文全称**: DyWA: Dynamics-Adaptive World Action Model for Generalizable Non-Prehensile Manipulation
- **arXiv**: [https://arxiv.org/abs/2503.16806](https://arxiv.org/abs/2503.16806)
- **GitHub**: [https://github.com/jiangranlv/DyWA](https://github.com/jiangranlv/DyWA)
:::

## 核心思想

DyWA (Dynamics-Adaptive World Action Model) 是清华大学提出的面向非抓取式操作（non-prehensile manipulation，如推、滑动、翻转物体）的世界动作模型。核心挑战是非抓取式操作中动力学的高度不确定性——物体被推后的运动受摩擦力、质量分布等多种因素影响。DyWA 通过动态自适应世界模型来捕捉这种不确定性。
DyWA 的关键设计是 dynamics-adaptive：world model 不仅预测物体运动态最可能结果"，还预测不确定性分布（使用 ensemble 于stochastic prediction）。在规划阶段，agent 利用不确定性估计来确定多少动作采样是足够的——对于高度不确定的推操作（如推细长物体），需要更多想象样本来确保安全。
## 技术架。
**Vision Encoding（视觉编码）**：使用depth-aware CNN encoder，输入为 RGB-D 图像，编码物体形状和位置信息。
**Knowledge Learning（知识学习）**：Dynamics-adaptive RSSM，包含不确定性估计模块。World model 输出两种预测：mean prediction（最可能结果）和 uncertainty（通过 ensemble 方差的learned variance）。非抓取式动力学使用特殊的物理先验（如摩擦锥约束）改进预测精度。
**Controllable Simulation（可控模拟）**：Dynamics-adaptive planning：在高不确定性状态（如物体即将从桌面滑落），增加想象采样数量（更新rollout samples），在低不确定性状态节省计算。使用PID-based frequency adaptation。
## 代码实现要点

代码开源在 [jiangranlv/DyWA](https://github.com/jiangranlv/DyWA)。基准PyTorch。Dynamics-adaptive RSSM + uncertainty estimation + non-prehensile manipulation tasks。在 Isaac Gym 和真实机器人上评估。
## 关键创新。
1. **非抓取式操作的世界模型*：专门针对推/动翻等操作
2. **动态自适应不确定性*：根据动力学复杂程度调整预测策略
3. **物理先验融合**：摩擦锥等物理知识改善预测4. **真实世界部署**：从仿真到真实机器人的非抓取式操。
## 代表性结。
在多种非抓取式操作任务（推物体到目标位置、桌面清理、物体旋转）中，DyWA 的成功率提DreamerV3 提35%。尤其在涉及细长或不规则形状物体的任务中，dynamics-adaptive 的不确定性估计使规划成功率从 50% 提升了85%。真实机器人实验验证了方法的实用性。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
