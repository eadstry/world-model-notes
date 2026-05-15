---
title: "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning"
design: "V-JEPA 2"
arxiv: https://arxiv.org/abs/2506.09985
github: https://github.com/facebookresearch/vjepa2
---

# V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning

::: info 论文信息
- **Design**: V-JEPA 2
- **论文全称**: V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning
- **arXiv**: [https://arxiv.org/abs/2506.09985](https://arxiv.org/abs/2506.09985)
- **GitHub**: [https://github.com/facebookresearch/vjepa2](https://github.com/facebookresearch/vjepa2)
:::

## 学习笔记

## 核心思想

V-JEPA 2（Meta FAIR, LeCun 团队）探索了一种自监督方法：结合**互联网规模的视频数据**（超 100 万小时）与**少量交互数据**（机器人轨迹，<62 小时），开发能理解、预测和规划物理世界的模型。这是一项雄心勃勃的尝试，旨在仅通过观察（而非大量标注或交互）学习对物理世界有意义的表征。

方法分为两大阶段：(1) 先预训练**无动作的 JEPA**（action-free V-JEPA 2）在海量互联网视频上，学习通用的运动和时序理解；(2) 后训练**动作条件世界模型 V-JEPA 2-AC**，使用少量无标注机器人视频学习控制。

最惊艳的成果是**零样本机器人规划**：V-JEPA 2-AC 在 Franka 机械臂上实现零样本抓取与放置，使用图像目标进行规划，**无需从目标环境中收集任何数据、无需任何任务特定训练或奖励**。这展示了自监督学习从网络数据中获取物理世界规划能力的巨大潜力。

## 技术架构

**Vision Encoding（视觉编码）**：ViT 编码器处理视频帧，预训练阶段使用无动作的 JEPA 架构——上下文编码器处理部分可见帧，目标编码器（EMA 更新）处理完整帧，在潜在空间进行预测。

**Knowledge Learning（世界知识学习）**：V-JEPA 2 在 100 万+小时互联网视频上预训练，自监督目标是在潜在空间中从部分观测预测完整表示。预训练后的模型在运动理解（Something-Something v2 77.3 top-1）和动作预测（EPIC-KITCHENS 39.7 R@5）上达到 SOTA。通过与大语言模型对齐，在视频问答（PerceptionTest 84.0, TempCompass 76.9）上 8B 参数规模达 SOTA。

**Controllable Simulation（可控推演）**：后训练 V-JEPA 2-AC 使用 <62 小时 Droid 数据集（无标注）学习潜在动作条件世界模型。该模型在潜在空间中执行动作条件的未来状态推演。规划时，给定图像目标，模型在潜在空间中搜索最优动作序列（MPC），零样本部署到两个不同实验室的 Franka 手臂上。

## 代码实现要点

- 基于 PyTorch 实现，开源在 facebookresearch/vjepa2
- 预训练：海量互联网视频（>1M 小时），分布式训练
- V-JEPA 2-AC 后训练：动作条件头添加到预训练编码器上
- 机器人数据使用 Droid 数据集的 <62 小时无标注视频
- 零样本规划：使用图像目标 + MPC 在潜在空间中搜索
- 两个不同实验室的 Franka 手臂上验证零样本泛化

## 关键创新点

- 互联网视频（>1M 小时）+ 少量机器人视频（<62 小时）的混合自监督学习
- 无动作预训练 → 动作条件后训练的两阶段方案
- 零样本机器人规划：无需目标环境数据、无需任务训练、无需奖励
- 在两个不同实验室的 Franka 手臂上交叉验证泛化能力
- 视频理解 + 规划的统一模型

## 代表性结果

- Something-Something v2 运动理解：77.3 top-1（超越任务特定模型）
- EPIC-KITCHENS 动作预测：39.7 R@5（SOTA）
- PerceptionTest 视频问答：84.0（8B 参数 SOTA）
- TempCompass：76.9（8B 参数 SOTA）
- Franka 手臂零样本抓取与放置（两个不同实验室）
- 无需目标环境数据采集、无需任务特定训练
