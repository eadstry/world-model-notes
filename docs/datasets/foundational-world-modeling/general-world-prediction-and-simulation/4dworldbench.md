---
title: "4DWorldBench: A Comprehensive Evaluation Framework for 3D/4D World Generation Models"
design: "4DWorldBench"
arxiv: https://arxiv.org/abs/2511.19836
website: https://yeppp27.github.io/4DWorldBench.github.io/
---

# 4DWorldBench: A Comprehensive Evaluation Framework for 3D/4D World Generation Models

::: info 论文信息
- **Design**: 4DWorldBench
- **论文全称**: 4DWorldBench: A Comprehensive Evaluation Framework for 3D/4D World Generation Models
- **arXiv**: [https://arxiv.org/abs/2511.19836](https://arxiv.org/abs/2511.19836)
- **Website**: [https://yeppp27.github.io/4DWorldBench.github.io/](https://yeppp27.github.io/4DWorldBench.github.io/)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2511.19836](https://arxiv.org/abs/2511.19836)
- **Website**: [https://yeppp27.github.io/4DWorldBench.github.io/](https://yeppp27.github.io/4DWorldBench.github.io/)

## 简介
4DWorldBench 是一个面向3D/4D世界生成模型的综合评估框架。与传统的2D视觉生成不同，世界模型旨在从图像、视频或文本构建逼真、动态且物理一致的3D/4D世界。这些模型不仅需要生成高保真度的视觉内容，还需要在空间、时间、物理和指令控制方面保持一致性。

该基准覆盖了四个关键评估维度：感知质量（Perceptual Quality）、条件-4D对齐（Condition-4D Alignment）、物理真实性（Physical Realism）和4D一致性（4D Consistency）。任务范围涵盖Image-to-3D/4D、Video-to-4D、Text-to-3D/4D等多种模态条件。

4DWorldBench 创新性地引入了跨多模态的自适应条件设定，将所有模态条件映射到统一的文本空间进行评估，并整合了LLM-as-judge、MLLM-as-judge和传统网络方法。初步人类研究表明，其自适应工具选择与主观人类判断具有更高的一致性。

## 关键特征
- **数据规模**: 覆盖多种3D/4D生成任务
- **数据模态**: 图像、视频、文本到3D/4D
- **主要指标**: 感知质量、条件对齐、物理真实性、4D一致性
- **领域**: 3D/4D世界生成

## 与世界模型的关系
4DWorldBench 为世界生成模型提供了首个统一的评估框架，弥合了从"视觉生成"到"世界生成"的关键差距。通过系统化地评估空间一致性、时间连贯性和物理真实性，该基准直接衡量了模型对4D物理世界的建模能力。这对于虚拟现实、自动驾驶、具身智能和内容创作等应用方向至关重要。4DWorldBench 的目标是加速从"视觉生成"到"世界生成"的范式转变。

## 代表性用途
- 4DWorldBench (Lu et al., 2025) - 原始论文，评估多种3D/4D世界生成模型
- Image-to-3D/4D 世界重建模型的比较评估
- Video-to-4D 动态场景重建评测
