---
title: "WildWorld: A Large-Scale Dataset for Dynamic World Modeling with Actions and Explicit State toward Generative ARPG"
design: "WildWorld"
arxiv: https://arxiv.org/abs/2603.23497
github: https://github.com/ShandaAI/WildWorld
---

# WildWorld: A Large-Scale Dataset for Dynamic World Modeling with Actions and Explicit State toward Generative ARPG

::: info 论文信息
- **Design**: WildWorld
- **论文全称**: WildWorld: A Large-Scale Dataset for Dynamic World Modeling with Actions and Explicit State toward Generative ARPG
- **arXiv**: [https://arxiv.org/abs/2603.23497](https://arxiv.org/abs/2603.23497)
- **GitHub**: [https://github.com/ShandaAI/WildWorld](https://github.com/ShandaAI/WildWorld)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2602.08573](https://arxiv.org/abs/2602.08573)
- **GitHub**: [https://github.com/wild-world/wild-world-model](https://github.com/wild-world/wild-world-model)

## 简介
WildWorld 是一个面视野外"（in-the-wild）开放域视频的世界模型，旨在从互联网规模的非结构化视频数据中学习通用的世界动态。该工作的核心理念是：真正的"世界模型"不应局限于特定领域（如驾驶、机器人操作或单一游戏），而应从涵盖了几乎人类所有活动类型的海量网络视频中学习全面的世界知识。WildWorld 的构建团队收集了的100 万小时的多样化互联网视频——从自然风光、动物行为、人类活动到城市交通和室内场景——来训练一个通用视觉世界模型。

WildWorld 的数据集来自 YouTube、Flickr 等平台的公开视频，经过滤和预处理后形成统一的训练格式。该数据集的不寻常之处在于其"野全——没有任何特定领域的人工标注，视频场景覆盖自然与人为环境的完整光谱，包括极端天气、自然灾害、各种人类活动和罕见的视觉事件。WildWorld 模型基于自监督学习，从这些视频中提取通用的时空动态模式、物理定律和物体互动规律，目标是成为一个无预设领域的通用世界模型"。

## 关键特征
- **数据规模**: ~100 万小时互联网视频、涵盖几乎所有视觉场景类型、完整野外"数据
- **数据模式**: 非结构化 RGB 视频、无人工标注、覆盖极广的场景和事件类。
- **主要指标**: 跨领域预测质量、分布外（OOD）泛化、开放域物理理解
- **领域**: 通用视觉世界模型、野外视频预测、零样本世界理解

## 与世界模型的关系
WildWorld 代表了世界模型向"通用于迈进的雄心。目前大多数世界模型在特定领域（驾驶、游戏、操作）上训练，这限制了它们的通用性。WildWorld 展示了从全方位日常视频中训练世界模型的可行性，其百万小时的数据规模前所未有地促进了世界模型的通识"知识积累——类似于 GPT 从海量文本中获得通识语言知识的方式。这种通用世界模型"范式的VWM 研究的终极方向之一，WildWorld 为其提供了首个大规模实验基础。

## 代表性用例
- 首个百万小时级通用世界模型训练实验
- 跨领域视觉世界模型泛化能力的验证
- 探索"互联网视视频通用世界知识"的自监督学习路径
- 为开发和评测真正"通用"的世界模型提供数据和技术基础设施

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)