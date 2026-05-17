---
title: "HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation"
design: "HERMES"
arxiv: https://arxiv.org/abs/2501.14729
github: https://github.com/LMD0311/HERMES
---

# HERMES: 统一 3D 场景理解与生成的自动驾驶世界模型

::: info 论文信息
- **Design**: HERMES
- **论文全称**: HERMES: A Unified Self-Driving World Model for Simultaneous 3D Scene Understanding and Generation
- **arXiv**: [https://arxiv.org/abs/2501.14729](https://arxiv.org/abs/2501.14729)
- **GitHub**: [https://github.com/LMD0311/HERMES](https://github.com/LMD0311/HERMES)
:::

## 学习笔记

### 核心思想

HERMES 解决了自动驾驶世界模型领域的一个关键挑战：将 3D 场景理解（Scene Understanding）与未来场景生成（Scene Generation）统一在同一个框架中。以往的工作往往只关注其中一个方面——要么只做场景理解，要么只做视觉预测，两者割裂导致模型无法真正形成闭环的驾驶认知。HERMES 首次在一个模型中同时实现这两种能力，使模型既能「看懂」当前路况，又能「预见」未来演变。

技术上，HERMES 以 BEV（Bird's-Eye View）表示为空间信息的中枢，通过 BEVFormer v2 将多视角图像编码为统一的 BEV 特征图，再引入「世界查询」（world queries）机制——通过 LLM 中的因果注意力将世界知识注入 BEV 表示中，实现跨模态知识融合。模型自回归地预测未来 BEV 特征和随时间演化的多视角图像，同时以自然语言形式生成场景描述回答。在 nuScenes 和 OmniDrive-nuScenes 数据集上，生成误差降低 32.4%，理解指标 CIDEr 提升 8.0%，已被 ICCV 2025 接收。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
