---
title: "InfinityDrive: Breaking Time Limits in Driving World Models"
design: "InfinityDrive"
arxiv: https://arxiv.org/abs/2412.01522
website: https://metadrivescape.github.io/papers_project/InfinityDrive/page.html
---

# InfinityDrive: Breaking Time Limits in Driving World Models

::: info 论文信息
- **Design**: InfinityDrive
- **论文全称**: InfinityDrive: Breaking Time Limits in Driving World Models
- **arXiv**: [https://arxiv.org/abs/2412.01522](https://arxiv.org/abs/2412.01522)
- **Website**: [https://metadrivescape.github.io/papers_project/InfinityDrive/page.html](https://metadrivescape.github.io/papers_project/InfinityDrive/page.html)
:::

## 学习笔记

## 核心思想

InfinityDrive 致力于打破驾驶世界模型的**时间限制**——现有驾驶世界模型受限于短时间窗口和有限的场景多样性，难以支持自动驾驶系统对复杂、长时、分布外驾驶数据的需求。InfinityDrive 是**首个实现分钟级视频生成**的驾驶世界模型，在高保真度、一致性和多样性方面均达到 SOTA。

InfinityDrive 的核心技术方案包含两个层面：(1) 高效的**时空联合建模模块**配合延长时间训练策略，实现高分辨率（576×1024）视频生成，确保空间和时间上的连贯性；(2) **记忆注入与保持机制**配合自适应记忆曲线损失，最小化累积误差，实现持续超过 **1500 帧（>2 分钟）** 的连贯视频生成。

InfinityDrive 在多个数据集上的综合实验验证了其生成复杂多样驾驶场景的能力，为下一代满足不断演进的自动驾驶需求的世界模型铺平了道路。

## 技术架构

**Vision Encoding（视觉编码）**：高分辨率（576×1024）视频编码，时空联合建模模块同时捕获空间结构和时间动态，确保单帧质量与帧间连贯性的平衡。

**Knowledge Learning（世界知识学习）**：延长时间训练策略使模型在更长的时间跨度上学习驾驶环境的演化模式。记忆注入机制将历史信息编码为可查询的记忆表示，记忆保持机制确保关键信息在长序列中不丢失。

**Controllable Simulation（可控推演）**：通过自适应记忆曲线损失控制累积误差增长，使模型在极长序列（1500+ 帧）中保持生成质量。多样化场景生成能力覆盖复杂、分布外的驾驶情况。

## 代码实现要点

- 时空联合建模模块：统一处理空间和时间维度的依赖
- 延长时间训练：在更长时序上训练以克服短窗口限制
- 记忆注入与保持机制：将历史信息贯穿长序列生成
- 自适应记忆曲线损失：动态控制累积误差增长
- 高分辨率输出：576×1024 视频生成

## 关键创新点

- 首个分钟级驾驶世界模型（1500+ 帧，>2 分钟视频）
- 时空联合建模 + 延长时间训练策略
- 记忆注入与保持机制克服长序列累积误差
- 自适应记忆曲线损失动态控制生成质量
- 高分辨率（576×1024）输出

## 代表性结果

- 持续生成超过 1500 帧（>2 分钟）的连贯驾驶视频
- 高分辨率 576×1024 视频输出
- 在多个数据集上验证复杂多样场景的生成能力
- 高保真度、一致性和多样性的 SOTA 表现
