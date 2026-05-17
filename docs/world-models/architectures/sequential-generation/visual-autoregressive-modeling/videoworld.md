---
title: "VideoWorld: Exploring Knowledge Learning from Unlabeled Videos"
design: "VideoWorld"
arxiv: https://arxiv.org/abs/2501.09781
---

# VideoWorld: Exploring Knowledge Learning from Unlabeled Videos

::: info 论文信息
- **Design**: VideoWorld
- **论文全称**: VideoWorld: Exploring Knowledge Learning from Unlabeled Videos
- **arXiv**: [https://arxiv.org/abs/2501.09781](https://arxiv.org/abs/2501.09781)
- **GitHub**: [https://github.com/ByteDance-Seed/VideoWorld](https://github.com/ByteDance-Seed/VideoWorld)
:::

## 学习笔记

### 核心思想

VideoWorld 探索了一个根本性问题：世界模型能否仅从视觉数据中学习复杂知识？与当前以文本为基础的大语言模型（LLM）不同，VideoWorld 完全从无标签视频数据中学习世界知识，类似于婴儿通过观察环境学习的方式。这项研究挑战了"知识是否必须通过语言才能获取"这一基本假设。

VideoWorld 的核心方法包括两个关键环节：(1) 从大规模视频数据中训练世界模型，视频提供了足够丰富的视觉信息以学习知识；(2) 视觉变化表示（representation of visual change）是知识提取的关键。VideoWorld 提出了一个关键的架构组件——潜动力学模型（Latent Dynamics Model, LDM），将帧间视觉变化压缩为紧凑的潜表示，实现高效的知识提取。

最令人震惊的实验结果是：VideoWorld 在 3D 围棋任务中仅靠视觉学习达到 5 段（5-dan）专业水平，且未使用任何搜索算法或强化学习中的典型奖励机制。在机器人操控任务中（CALVIN、RLBench），VideoWorld 也高效学习了多种控制策略，性能接近 oracle 模型。这些结果证明视觉监督中蕴含了丰富的世界知识。

### 架构设计

- **Vision Encoding（视觉编码）**：VideoWorld 是一个自回归视频生成模型，输入为原始视频帧序列。模型使用 VQ-VAE 将图像分词器将每一帧压缩为离散 token 序列。视觉编码的目标不是追求重建质量，而是保留足够信息以支持动力学学习。这与传统视频生成模型追求极致重建质量有本质区别。编码后的 token 序列作为 LDM 的输入。
- **Knowledge Learning（知识学习）**：核心是潜动力学模型（Latent Dynamics Model, LDM），将帧间视觉变化压缩为紧凑的潜表示。与其直接预测下一帧像素（计算量巨大），LDM 学习潜空间中的动力学。这一设计有两个关键优势：(1) 潜空间维度远低于像素空间，学习更加高效；(2) 压缩式建模天然区分"运动"和"静态"，使模型更关注运动相关的因果联系。LDM 通过自回归 next-token prediction 在大量无标签视频数据上训练，以自我监督方式学习物理逻辑和因果规律。VideoWorld 2 在此基础上进一步引入 dLDM，将视觉编码与动力学分离，实现知识跨场景迁移。
- **Controllable Simulation（可控模拟）**：VideoWorld 的模拟基于学习到的潜动力学表示。在不同场景下，模型通过自回归预测未来潜状态来改变/推进模拟。在机器人任务中，模型根据初始观测和动作信号预测未来帧。与 Genie 的关键区别在于潜动力学模型的使用：VideoWorld 注重"运动"动力学建模而非"状态"生成，使其在 CALVIN 等基准上更高效地学习视觉观测与动作之间的对应关系。

### 关键创新

- **纯视觉知识学习**：首次系统证明世界模型可以从大量视频数据（无文本、无奖励信号）中学习复杂的物理知识。
- **潜动力学模型（LDM）**：将视觉变化建模转化为潜表示学习，实现高效知识提取。
- **视觉变化表示是关键**：论证了"变化的表示"（而非"静态重建"）是视觉知识学习的核心。
- **零奖励围棋 5 段**：300M 参数模型即可达到专业围棋水平，颠覆了需要搜索+奖励的传统 AI 范式。
- **通用物理知识**：同一架构在围棋（逻辑推理）和机器人（物理操控）两种完全不同的领域均表现出色。

### 实验结果要点

- Video-GoBench: 3D 围棋模型达到 5 段专业水平，无需搜索和奖励。
- CALVIN: 在长序列机器人操作任务中性能接近 oracle 模型。
- RLBench: 高效学习多种控制策略，泛化能力强。
- VideoWorld 2: 通过知识迁移学习，dLDM 实现视觉与动力学分离，提升约 70% 泛化成功率。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
