---
title: "DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos"
design: "DreamDojo"
arxiv: https://arxiv.org/abs/2602.06949
github: https://github.com/NVIDIA/DreamDojo
---

# DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos

::: info 论文信息
- **Design**: DreamDojo
- **论文全称**: DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos
- **arXiv**: [https://arxiv.org/abs/2602.06949](https://arxiv.org/abs/2602.06949)
- **GitHub**: [https://github.com/NVIDIA/DreamDojo](https://github.com/NVIDIA/DreamDojo)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2602.06949](https://arxiv.org/abs/2602.06949)
- **GitHub**: [https://github.com/NVIDIA/DreamDojo](https://github.com/NVIDIA/DreamDojo)

## 简介
DreamDojo 是 NVIDIA 提出的通用机器人世界模型，其独特之处在于从大规模人类视频数据（而非机器人数据）中学习机器人操作的世界知识。DreamDojo 的核心理念是：人类日常活动视频（如 YouTube 上的烹饪、组装、手工视频）蕴含了丰富的物理交互知识，这些知识可以通过精心设计的训练策略迁移到机器人世界模型中。

DreamDojo 构建了一个大规模人类操作视频数据集，包含数百万段来自互联网的手部操作视频，覆盖广泛的日常任务。通过自监督学习，DreamDojo 从这些视频中提取物体运动、手物交互和工具使用的物理规律。然后，模型通过一个适配层将这些人类操作知识映射到特定的机器人形态上，使机器人能够"想象"执行操作任务时的未来视觉状态。DreamDojo 的这种方法极大地降低了对昂贵的机器人操作数据的需求，为世界模型的可扩展训练开辟了新的路径。

## 关键特征
- **数据规模**: 数百万段人类操作视频（互联网规模）
- **数据模态**: RGB 人类操作视频、手部姿态、物体运动、机器人形态适配参数
- **主要指标**: 跨形态预测准确度、操作成功率、Sim2Real 迁移性能
- **领域**: 通用机器人世界模型、人类视频迁移、跨形态学习

## 与世界模型的关系
DreamDojo 对世界模型研究的主要贡献在于展示了"从人类视频中学习机器人世界模型"的可行性。这打破了世界模型训练对机器人特定数据的依赖，使世界模型能够从互联网规模的丰富人类行为数据中汲取知识。这一范式与 Genie、UniSim 等形成互补——DreamDojo 强调了"跨形态知识迁移"的价值，即世界模型可以学习到独立于形态的物理操作知识。

## 代表性用途
- NVIDIA 的通用操作世界模型展示
- 为机器人零样本操作提供物理先验知识
- 启发了从互联网人类视频学习世界模型的范式
- 与 Isaac Sim 集成用于机器人数字孪生仿真
