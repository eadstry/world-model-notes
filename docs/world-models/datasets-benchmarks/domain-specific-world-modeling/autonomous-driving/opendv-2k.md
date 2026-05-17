---
title: "GenAD: Generalized Predictive Model for Autonomous Driving"
design: "OpenDV-2K"
arxiv: https://arxiv.org/abs/2403.09630
github: https://github.com/OpenDriveLab/DriveAGI
---

# OpenDV-2K: GenAD: Generalized Predictive Model for Autonomous Driving

::: info 论文信息
- **Design**: OpenDV-2K
- **论文全称**: GenAD: Generalized Predictive Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2403.09630](https://arxiv.org/abs/2403.09630)
- **GitHub**: [https://github.com/OpenDriveLab/DriveAGI](https://github.com/OpenDriveLab/DriveAGI)
:::

## 学习笔记

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2307.10776](https://arxiv.org/abs/2307.10776)
- **GitHub**: [https://github.com/OpenDriveLab/OpenDV](https://github.com/OpenDriveLab/OpenDV)

## 简介
OpenDV-2K (Open Driving Video 2K) 是由 OpenDriveLab 提出的超大规模驾驶视频数据集，旨在为生成式驾驶世界模型提供海量预训练数据。该数据集从公开可用的驾驶视频中收集了 2,000 小时以上的城市驾驶视频（来自 YouTube 等平台，涵盖全球多个城市），将其标准化为统一格式并附加 GPS 时间戳和粗略位置标签。OpenDV-2K 的核心理念是"从互联网规模的视频中学习通用驾驶知识"。

OpenDV-2K 包含约 1,700 小时的"生成式预训练数据"（仅视频，未有精细标注）和 300+ 小时的"有标注数据"（含部分车道、物体等信息）。数据覆盖全球多样化的城市、光照、天气和交通条件，使其成为训练通用驾驶世界模型的理想大规模预训练数据集。OpenDV-2K 也是 GAIA-1——Wayve 的生成式驾驶世界模型——的公开数据倡议的一部分。

## 关键特征
- **数据规模**: 2,000+ 小时驾驶视频、全球多城市覆盖、1,700 小时无监督预训练数据
- **数据模态**: RGB 驾驶视频、GPS 位置、时间戳、部分场景标注
- **主要指标**: FVD（视频生成质量）、驾驶场景生成多样性、物理合理性
- **领域**: 生成式驾驶世界模型预训练、大规模无监督驾驶学习

## 与世界模型的关系
OpenDV-2K 直接服务了"驾驶世界模型"的预训练需求。超大规模的驾驶视频数据是训练生成式世界模型（如 GAIA-1、DriveDreamer、Drive-WM 等）所必需的，OpenDV-2K 提供了这样的规模。该数据集将互联网规模的视频预训练范式引入驾驶世界模型领域，使模型能够从海量未标注数据中学习驾驶环境的底层视觉和动态模式，类似于 LLM 从大规模文本中学习语言知识。

## 代表性用途
- GAIA-1 (2023) 使用 OpenDV-2K 作为大规模预训练数据
- GenAD (2024) 基于 OpenDV 构建生成式驾驶世界模型
- DriveDreamer (2024) 的核心训练数据来源
- 通用驾驶世界模型的预训练基础数据平台
