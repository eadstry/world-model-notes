---
title: "TASTE-Rob: Advancing Video Generation of Task-Oriented Hand-Object Interaction for Generalizable Robotic Manipulation"
arxiv: https://arxiv.org/abs/2503.11423
github: https://github.com/GAP-LAB-CUHK-SZ/TASTE-Rob
website: https://taste-rob.github.io/
venue: CVPR
year: 2025
---

# TASTE-Rob: Advancing Video Generation of Task-Oriented Hand-Object Interaction for Generalizable Robotic Manipulation

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2503.11423](https://arxiv.org/abs/2503.11423)
- **GitHub**: [https://github.com/GAP-LAB-CUHK-SZ/TASTE-Rob](https://github.com/GAP-LAB-CUHK-SZ/TASTE-Rob)
- **Website**: [https://taste-rob.github.io/](https://taste-rob.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 TASTE-Rob，一个包含 100,856 个第一人称视角手-物交互视频的大规模数据集，每条视频配有对齐的语言指令和一致视角，弥补了 Ego4D 等现有数据集视角不统一、交互不对齐的缺陷。
- 在 TASTE-Rob 上微调视频扩散模型（VDM）生成真实的手-物交互视频，并针对生成中手部抓取姿态不自然的问题，提出三阶段姿态精炼管线。
- 将生成的高质量手-物交互视频用于机器人模仿学习，证明了视频生成数据对提升机器人操作泛化能力的有效性。

### 方法细节
- 数据集采集确保第一人称视角固定，每段视频对应一个具体操作指令（如"拿起杯子"），语言描述与视觉内容严格对齐，覆盖多种物体和操作场景。
- 三阶段姿态精炼管线：第一阶段检测生成视频中的手部关键点，第二阶段通过可微分渲染优化手部网格的姿态和形状，第三阶段将精炼后的手部渲染回视频中替换原始手部区域。
- 在 TASTE-Rob 上微调预训练 VDM 后，使用精炼管线对生成视频进行后处理，最终获得视觉质量高且手-物交互正确的训练视频。

### 关键发现
- 现有数据集（如 Ego4D）中的视角不一致和交互不对齐严重限制了视频生成质量，TASTE-Rob 的规范化采集显著提升了生成结果的可用性。
- 仅靠数据集和数据增强不足以解决手部抓取姿态的合理性问题，必须引入显式的姿态精炼后处理。
- 在机器人操作任务上，使用 TASTE-Rob 生成视频训练的策略比使用真实数据或其他视频生成方法训练的策略具备更好的泛化性能。

### 方法归类
- **范式**: 数据集驱动 + 视频扩散模型微调 + 显式姿态后处理精炼，面向机器人模仿学习的视频生成
- **关键技术**: 视频扩散模型（VDM）微调，手部姿态估计与可微分渲染精炼管线，第一人称视角标准化数据集构建
- **适用场景**: 手-物交互视频生成，机器人技能学习和模仿学习中的训练数据增强
