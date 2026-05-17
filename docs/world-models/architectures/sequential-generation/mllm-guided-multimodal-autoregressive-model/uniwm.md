---
title: "Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation"
design: "UniWM"
arxiv: https://arxiv.org/abs/2510.08713
github: https://github.com/F1y1113/UniWM
---

# UniWM: Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation

::: info 论文信息
- **Design**: UniWM
- **论文全称**: Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation
- **arXiv**: [https://arxiv.org/abs/2510.08713](https://arxiv.org/abs/2510.08713)
- **GitHub**: [https://github.com/F1y1113/UniWM](https://github.com/F1y1113/UniWM)
:::

## 学习笔记

### 核心思想

UniWM 是一个统一的世界模型，用于处理以自我为中心（egocentric）的视觉导航中的预测、规划和前瞻问题。其核心思路是将视觉导航中的感知、预测和规划整合到一个多模态自回归 Transformer 框架中。传统导航系统通常将这些功能分离处理，导致信息冗余和误差累积。UniWM 的核心创新是：(1) 将规划问题表述为自回归序列建模，使视觉预测和动作选择在同一框架内协同进行；(2) 引入分层记忆机制——短期记忆缓存原始视觉观测，长期记忆压缩轨迹信息以维护全局目标导向路径信息——通过交叉注意力融合实现信息无缝衔接。UniWM 在 4 个具有挑战性的导航基准上展现出优异性能，成功率达新高度，在与未见过的 TartanDrive 数据集上实现了跨领域泛化，证明了其作为通用视觉导航世界模型的潜力。

### 方法架构

**视觉编码（Vision Encoding）**：UniWM 以第一人称 RGB 观测作为多模态自回归 Transformer 的输入 token。分层记忆机制包含两个部分：(1) 短期记忆——缓存帧级原始视觉特征以支持即时感知和预测；(2) 长期记忆——压缩的历史轨迹嵌入以维护全局的目标导向路径信息。两者通过交叉注意力融合到解码过程中。

**知识学习（Knowledge Learning）**：UniWM 采用双分支学习目标，使预测和规划相互促进：(1) 视觉预测——从过去观测中学习预测未来帧的视觉状态，为规划提供前置信息；(2) 动作学习——基于预测的未来视觉状态和当前目标，选择最优的下一个动作。这种"先预测后决策"的范式使训练过程在"比较图像内容"层面上受益于视觉监督，弥补了纯动作监督在长期序列中的信息瓶颈和误差累积问题。

**可控仿真（Controllable Simulation）**：UniWM 在 Go Stanford、ReCon、SCAND 和 HuRoN 四个具有挑战性的导航基准上进行了评估，涵盖 1X Humanoid 等不同形态的移动平台和多样化数据集。其跨领域泛化能力在未见过的 TartanDrive 数据集上得到验证，证明了学到的导航知识可以迁移到新的数据分布。

### 关键实现要点

- **分层记忆**：短期记忆（原始视觉特征 buffer）+ 长期记忆（压缩轨迹 embedding）
- **双分支自回归头**：视觉预测头（预测未来帧 token）+ 动作头（预测下一动作 token）
- **多形态扩展**：从轮式/足式移动到人形机器人的统一架构
- **开源**：GitHub 提供完整代码

### 关键创新点

- **预测与规划统一**：视觉预测直接集成到动作选择中，消除信息断层
- **分层记忆**：短期感知 + 长期轨迹的双层信息融合
- **跨领域泛化**：训练数据与未见过的数据集之间直接泛化
- **多形态扩展**：从轮式移动到底盘人形机器人的自然扩展

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
