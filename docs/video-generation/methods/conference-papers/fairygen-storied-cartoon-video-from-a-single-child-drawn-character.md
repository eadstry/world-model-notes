---
title: "FairyGen: Storied Cartoon Video from a Single Child-Drawn Character"
arxiv: https://arxiv.org/abs/2506.21272v2
github: https://github.com/GVCLab/FairyGen
website: https://jayleejia.github.io/FairyGen/
venue: SIGGRAPH Asia
year: 2025
---

# FairyGen: Storied Cartoon Video from a Single Child-Drawn Character

::: info 论文信息
- **Venue**: SIGGRAPH Asia (2025)
- **arXiv**: [https://arxiv.org/abs/2506.21272v2](https://arxiv.org/abs/2506.21272v2)
- **GitHub**: [https://github.com/GVCLab/FairyGen](https://github.com/GVCLab/FairyGen)
- **Website**: [https://jayleejia.github.io/FairyGen/](https://jayleejia.github.io/FairyGen/)
:::

## 学习笔记

### 核心贡献
- 提出了 FairyGen 自动化系统，能够从单张儿童手绘角色生成故事情节驱动的卡通视频，同时忠实保留原始手绘的艺术风格。
- 首次显式解耦角色建模与风格化背景生成，并引入电影镜头设计模块以支持具有电影感的连贯叙事。
- 设计了两阶段运动定制适配器：第一阶段从时序无关帧中学习外观特征以解耦身份与运动，第二阶段在冻结身份权重下建模时序动态。

### 方法细节
- 使用 MLLM 从单张角色草图生成结构化分镜脚本，包含场景环境、角色动作和镜头视角等镜头级描述。
- 提出风格传播适配器，捕获角色视觉风格并将其应用于背景生成，确保背景与角色在风格上保持一致性。
- 镜头设计模块通过画幅裁剪和多视角合成增强视觉多样性与电影质感。
- 对角色构建 3D 代理模型以推导物理合理的运动序列，用于微调基于 MMDiT 的图像到视频扩散模型。
- 两阶段运动定制适配器：第一阶段采用时序无序帧训练外观特征以实现身份-运动解耦，第二阶段使用时步偏移策略建模时序动态。

### 关键发现
- 角色身份与运动信息的显式解耦显著提升了动画中角色的外观一致性。
- 风格传播适配器有效实现了角色风格向背景的迁移，避免了传统方法中风格不一致的问题。
- 引入电影镜头设计后，生成视频在视觉多样性和叙事表现力上均有明显增强。

### 方法归类
- 属于视频生成中的可控角色动画与叙事生成方向，核心思路是将角色身份、场景风格与运动时序三者解耦建模。
- 该工作融合了多模态大模型（分镜生成）、3D 代理（运动推导）和扩散模型（视频生成），代表了一种端到端的自动化叙事视频生成范式。
