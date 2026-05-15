---
title: "WorldModelBench: Judging Video Generation Models As World Models"
design: "WorldModelBench"
arxiv: https://arxiv.org/abs/2502.20694
github: https://github.com/WorldModelBench-Team/WorldModelBench
---

# WorldModelBench: Judging Video Generation Models As World Models

::: info 论文信息
- **Design**: WorldModelBench
- **论文全称**: WorldModelBench: Judging Video Generation Models As World Models
- **arXiv**: [https://arxiv.org/abs/2502.20694](https://arxiv.org/abs/2502.20694)
- **GitHub**: [https://github.com/WorldModelBench-Team/WorldModelBench](https://github.com/WorldModelBench-Team/WorldModelBench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2502.20694](https://arxiv.org/abs/2502.20694)
- **GitHub**: [https://github.com/WorldModelBench-Team/WorldModelBench](https://github.com/WorldModelBench-Team/WorldModelBench)

## 简介
WorldModelBench 是一个专门设计用于评估视频生成模型作为世界模型能力的基准测试。与以往仅关注通用视频质量的基准不同，WorldModelBench 聚焦于评估视频生成模型在应用驱动领域中的世界建模能力，特别强调指令遵循和物理定律遵循两个关键维度。

该基准能够检测出细微的世界建模违规行为，例如违反质量守恒定律的物体大小不规则变化——这些是先前基准所忽视的问题。为了建立可靠的评估标准，团队收集了67K条人类标注标签，用于精确衡量14个前沿模型的表现。基于这些高质量人类标注，他们进一步微调了一个准确的自动评判器，该评判器仅用2B参数就在预测世界建模违规方面比GPT-4o高出8.6%的平均准确率。

WorldModelBench 的核心理念是将视频生成模型从纯粹的"视觉质量"评估转向"世界理解"评估，这对自动驾驶、机器人等决策应用场景具有重要意义。研究还表明，通过从评判器获得的奖励信号来训练模型对齐人类标注，可以显著提高模型的世界建模能力。

## 关键特征
- **数据规模**: 67K条人类标注，涵盖14个前沿模型
- **数据模态**: 视频生成输出 + 人类偏好标注
- **主要指标**: 指令遵循准确率、物理规律遵循度、世界建模违规检测率
- **领域**: 视频生成、世界模型评估

## 与世界模型的关系
WorldModelBench 直接回应了当前视频生成模型被视为"视频世界模型"的论断。它提供了首个系统化的评估框架来衡量视频生成模型是否真正理解了物理世界的基本规律，而非仅仅生成了视觉上逼真的画面。该基准揭示了当前SOTA模型在物理一致性方面的重大缺陷，为世界模型研究提供了明确的改进方向和诊断工具。通过将人类偏好与自动评估相结合，WorldModelBench 也为世界模型的大规模自动化评估开辟了新路径。

## 代表性用途
- WorldModelBench (Li et al., 2025) - 原始论文，评估了包括Sora在内的14个前沿视频生成模型
- 用于视觉世界模型训练的人类偏好对齐
- 视频生成模型物理一致性诊断
