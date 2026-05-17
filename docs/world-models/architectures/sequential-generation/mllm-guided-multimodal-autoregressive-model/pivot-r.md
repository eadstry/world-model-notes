---
title: "PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation"
design: "PIVOT-R"
arxiv: https://arxiv.org/abs/2410.10394
github: https://github.com/abliao/PIVOT-R
---

# PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation

::: info 论文信息
- **Design**: PIVOT-R
- **论文全称**: PIVOT-R: Primitive-Driven Waypoint-Aware World Model for Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2410.10394](https://arxiv.org/abs/2410.10394)
- **GitHub**: [https://github.com/abliao/PIVOT-R](https://github.com/abliao/PIVOT-R)
:::

## 学习笔记

### 核心思想

PIVOT-R 针对机器人操作任务中的世界模型提出了一项关键洞察：**世界模型不应简单学习所有像素的映射，而应学习映射到与任务直接相关的关键点**。传统的世界模型试图重建环境的全部视觉细节，带来了巨大的计算开销和冗余信息。PIVOT-R 的核心设计是构建一个专注于任务相关路径点（waypoint）预测的世界模型——Waypoint-aware World Model（WAWM），用于从原始感知和自然语言指令直接预测与任务完成密切相关的空间关键点，同时一个轻量级的动作预测模块负责将这些关键点转化为底层动作序列。配套的异步层次执行器（Asynchronous Hierarchical Executor，AHE）允许不同模块以不同频率运行，实现 28 倍的执行效率提升。PIVOT-R 在 SeaWave 基准上取得 19.45% 的性能提升，被 NeurIPS 2024 录用。

### 方法架构

遵循 VWM 经典分层架构：
- **表示学习（Representation Learning）**：WAWM 的核心创新是**原语驱动的层次化表示**。将复杂的操作指令分解为一系列连续的操纵原语（如"抓取""移动""放置"），每个原语对应一个 waypoint 预测——即空间中与该原语完成密切相关的位置点（抓取位置、放置位置等）。这一设计在高层语义和底层运动之间建立了简洁的桥梁——waypoint 作为"信息瓶颈"。
- **未来预测（Future Prediction）**：WAWM 执行原语级别的 waypoint 预测——根据当前状态和当前原语，预测下一个关键 waypoint 的位置。这是一个极简化的世界模型：不预测整个未来图像序列，只预测与任务直接相关的最小必要信息（waypoint 坐标），大幅降低了预测维度。
- **动作与交互（Action & Interaction）**：动作预测模块将 waypoint 转化为底层动作序列（末端执行器的笛卡尔轨迹和夹爪指令）。AHE 让 WAWM 以较低频率运行（原语和 waypoint 预测），而动作预测和控制以较高频率执行，实现计算与控制的分离。

### 关键实现要点

开源代码：[abliao/PIVOT-R](https://github.com/abliao/PIVOT-R)，NeurIPS 2024 录用。

### 关键创新点

1. **Waypoint 作为通用接口**：将任务关键点而非原始图像作为高层和底层之间的接口，避免数据分布的变化敏感性。
2. **原语驱动的层次化建模**：将复杂操作指令分解为易于预测的操纵原语，每个原语对应一个 waypoint 预测。
3. **异步层次执行器（AHE）**：不同模块以不同频率运行，在计算损失可忽略的情况下将执行效率提升 28 倍。
4. **最小预测与最少信息**：世界模型只预测与任务相关的 waypoint，避免了对无关环境细节的建模。

### 关键实验结果

在 SeaWave 基准上超越所有开源 SOTA 模型，四个关键指标平均实现 19.45% 的提升。AHE 在执行效率提升 28 倍的情况下性能仅下降 2.9%。

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
