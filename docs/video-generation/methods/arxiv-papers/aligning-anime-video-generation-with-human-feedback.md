---
title: "Aligning Anime Video Generation with Human Feedback"
arxiv: https://arxiv.org/abs/2504.10044v2
github: https://github.com/bilibili/Index-anisora
venue: arXiv
year: 2025
---

# Aligning Anime Video Generation with Human Feedback

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2504.10044v2](https://arxiv.org/abs/2504.10044v2)
- **GitHub**: [https://github.com/bilibili/Index-anisora](https://github.com/bilibili/Index-anisora)
:::

## 学习笔记

### 核心贡献
- 提出了 AnimeReward：首个面向动漫视频的多维人类偏好奖励模型，基于 3 万条人工标注样本训练，覆盖运动自然度、画面质量、风格一致性等多个评价维度
- 设计了 GAPO（Gap-Aware Preference Optimization）训练方法，在偏好优化中显式建模偏好差距（Preference Gap）的大小，为高置信度样本赋予更大优化权重，提升对齐效率
- 构建了完整的动漫视频生成人类反馈对齐管线，从奖励模型训练 → 生成模型偏好优化 → 推理，形成闭环，显著减少动漫视频中常见的运动失真和闪烁伪影
- 验证了多维奖励模型相比单一标量奖励在动漫视频对齐中的显著优势，揭示了动漫领域需要独立于自然视频的专用反馈模型

### 方法细节
- AnimeReward 奖励模型架构：以视频编码器（Video Encoder）提取时空特征，接多任务预测头，分别预测整体质量分、运动平滑度、色彩一致性、风格保真度和伪影严重度等多个维度
- 标注数据构造：从 bilibili 平台收集多样化动漫视频生成结果，由专业动漫内容审核员在细粒度维度上进行 5 点评分，共 30,000 条人工标注样本
- GAPO 核心公式：在 DPO（Direct Preference Optimization）损失中引入偏好差距权重因子 $w = \exp(g / \tau)$，其中 $g$ 为获胜响应与失败响应在奖励模型上的分数差，$\tau$ 为温度系数，使得差距大的样本对产生更强的梯度信号
- 生成模型基础架构使用预训练文生视频扩散模型，在偏好优化阶段冻结核心生成参数，仅对少量可训练适配层进行对齐微调，防止灾难性遗忘
- 多轮对齐迭代策略：每轮对齐后重新采样生成结果并更新奖励模型，形成持续的改进循环，逐步提升生成质量与人类偏好的吻合度

### 关键发现
- 动漫视频的评估标准与自然视频存在本质差异：人类对动漫的运动失真（Motion Distortion）和画面闪烁（Flickering Artifacts）容忍度更低，通用视频奖励模型在动漫领域表现不佳
- GAPO 中对偏好差距的显式建模使对齐效率提升约 20%（相比标准 DPO），且在大差距样本上尤其有效

### 方法归类
- **范式**: 基于人类反馈的强化学习对齐（RLHF/DPO 路线扩展）
- **关键技术**: 多维视频奖励模型、GAPO 偏好优化、动漫领域专用标注数据
- **适用场景**: 动漫/二次元风格视频生成、视频生成的质量提升与伪影抑制、有特定风格要求的视频生成任务
