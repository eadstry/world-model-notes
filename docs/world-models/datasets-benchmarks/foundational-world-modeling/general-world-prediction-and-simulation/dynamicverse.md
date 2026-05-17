---
title: "DynamicVerse: A Physically-Aware Multimodal Framework for 4D World Modeling"
design: "DynamicVerse"
arxiv: https://arxiv.org/abs/2512.03000
github: https://github.com/Dynamics-X/DynamicVerse
website: https://dynamic-verse.github.io/
---

# DynamicVerse: A Physically-Aware Multimodal Framework for 4D World Modeling

::: info 论文信息
- **Design**: DynamicVerse
- **论文全称**: DynamicVerse: A Physically-Aware Multimodal Framework for 4D World Modeling
- **arXiv**: [https://arxiv.org/abs/2512.03000](https://arxiv.org/abs/2512.03000)
- **GitHub**: [https://github.com/Dynamics-X/DynamicVerse](https://github.com/Dynamics-X/DynamicVerse)
- **Website**: [https://dynamic-verse.github.io/](https://dynamic-verse.github.io/)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2512.03000](https://arxiv.org/abs/2512.03000)
- **GitHub**: [https://github.com/Dynamics-X/DynamicVerse](https://github.com/Dynamics-X/DynamicVerse)
- **Website**: [https://dynamic-verse.github.io/](https://dynamic-verse.github.io/)

## 简介
DynamicVerse 是一个面向动态真实世界视频的物理尺度多模态4D世界建模框架。理解动态物理世界——其特征包括不断演化的3D结构、真实世界运动和带有文本描述的语义内容——对于人类-代理交互和具身智能至关重要。然而，现有数据集通常来自有限的模拟器或使用传统的Structure-from-Motion（SfM）进行尺度不定的标注，描述能力有限。

DynamicVerse 通过整合大规模视觉模型、几何模型和多模态模型来解决这些不足，实现度量尺度级别的静态几何、真实世界动态运动、实例级掩码和整体描述性字幕的联合推断。通过将窗口化的 Bundle Adjustment 与全局优化相结合，该方法能够将长视频序列转换为全面的4D多模态格式。

DynamicVerse 提供了包含100K+视频、800K+标注掩码和10M+帧的大规模数据集，全部来源于互联网视频。在视频深度估计、相机姿态估计和相机内参估计三个基准任务上的实验评估表明，其4D建模方法在捕获物理尺度测量方面具有比现有方法更高的全局精度。

## 关键特征
- **数据规模**: 100K+视频、800K+标注掩码、10M+帧
- **数据模态**: 视频、深度、相机姿态、实例分割掩码、描述文本
- **主要指标**: 深度估计精度、相机姿态精度、内参估计精度
- **领域**: 4D世界建模、动态场景理解

## 与世界模型的关系
DynamicVerse 为视觉世界模型（VWM）提供了关键的基础训练数据。通过提供物理尺度级别的4D标注（而非尺度不定的SfM），它使世界模型能够学习到真实世界的度量空间关系。这对于需要精确空间理解的具身智能和机器人应用至关重要。DynamicVerse 的4D多模态格式——同时包含静态几何、动态运动和语义描述——使其成为训练和评估能够真正理解物理世界的4D世界模型的理想资源。

## 代表性用途
- DynamicVerse (Wen et al., 2025) - 原始论文，验证4D建模在物理尺度上的优越性
- 视频深度估计和相机姿态估计的SOTA训练数据
- 4D世界模型和动态场景重建的研究基准
