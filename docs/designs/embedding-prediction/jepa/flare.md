---
title: "FLARE: Robot Learning with Implicit World Modeling"
design: "FLARE"
arxiv: https://arxiv.org/abs/2505.15659
github: https://github.com/JiahengHu/FLaRe
---

# FLARE: Robot Learning with Implicit World Modeling

::: info 论文信息
- **Design**: FLARE
- **论文全称**: FLARE: Robot Learning with Implicit World Modeling
- **arXiv**: [https://arxiv.org/abs/2505.15659](https://arxiv.org/abs/2505.15659)
- **GitHub**: [https://github.com/JiahengHu/FLaRe](https://github.com/JiahengHu/FLaRe)
:::

## 学习笔记

## 核心思想

FLARE（Future LAtent REpresentation Alignment）由NVIDIA GEAR团队提出，将预测性潜在世界建模隐式地集成到机器人策略学习中，而非作为显式的独立模块。该方法通过在扩散Transformer策略中增加少量token来预测未来观测的潜在表示，使策略在生成动作时能够同时"想象"未来的后果。

FLARE的突出之处在于其极简设计：仅需对标准VLA（Vision-Language-Action）模型进行最小架构修改——添加少量用于未来预测的token——即可带来显著的性能提升。这种预测与策略的一体化设计使模型在生成动作的同时推断长期后果，实现了隐式的"思考再行动"。

更令人印象深刻的是，FLARE解锁了与无动作标注的人类自我中心视频数据进行共训练的能力。通过在训练中引入未标注的人类操作视频，策略能够仅凭单个机器人演示就泛化到具有未见几何形状的新物体上，性能提升高达26%。

## 技术架构

**Vision Encoding（视觉编码）**：FLARE基于扩散Transformer策略架构，使用视觉编码器将观测图像编码为潜在特征。这些特征同时服务于动作生成和未来预测两个目标。

**Knowledge Learning（世界知识学习）**：核心机制是未来潜在表示对齐——扩散Transformer策略中额外的预测token被训练来预测未来观测的潜在嵌入。这些预测嵌入与来自预训练编码器（或教师模型）的真实未来观测嵌入对齐。扩散去噪过程隐式地整合了这种未来预测信号来指导动作生成。

**Controllable Simulation（可控推演）**：FLARE的"仿真"是隐式的——策略在生成每一步动作时，内部预测token已经在"想象"未来。人类视频共训练使模型从大规模无标注数据中学习环境的物理规律和操作语义，从而在未见任务上表现更好。

## 代码实现要点

- 极简修改：在VLA扩散Transformer中添加少量预测token
- 未来潜在表示对齐损失作为辅助训练目标
- 与无动作标注人类自我中心视频进行共训练
- 支持单臂和人形机器人桌面操作两个基准
- NVIDIA GEAR团队

## 关键创新点

- 隐式世界建模：预测token集成在策略网络中，非独立模块
- 极简架构修改：仅添加少量token到VLA模型
- 人类视频共训练：利用无标注数据显著提升泛化能力
- 单次演示+共训练即可泛化到未见几何物体
- 26%性能提升超越先前策略学习基线

## 代表性结果

- 多任务仿真模仿学习中超越基线最高26%
- 人类视频共训练：单次机器人演示实现新物体泛化
- 单臂和人形机器人双基准验证
