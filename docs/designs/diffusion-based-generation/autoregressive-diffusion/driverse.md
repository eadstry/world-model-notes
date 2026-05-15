---
title: "DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment"
design: "DriVerse"
arxiv: https://arxiv.org/abs/2504.18576
github: https://github.com/shalfun/DriVerse
---

# DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment

::: info 论文信息
- **Design**: DriVerse
- **论文全称**: DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment
- **arXiv**: [https://arxiv.org/abs/2504.18576](https://arxiv.org/abs/2504.18576)
- **GitHub**: [https://github.com/shalfun/DriVerse](https://github.com/shalfun/DriVerse)
:::

## 学习笔记

## 核心思想

DriVerse（百度）是一个用于驾驶仿真的导航世界模型，从单张图像和未来轨迹生成导航驱动的驾驶场景。现有自动驾驶世界模型将轨迹或离散控制信号直接输入生成管线，导致控制输入与 2D 基础生成模型的隐式特征之间**对齐不良**，产生低保真度视频输出；而使用粗糙文本命令或离散车辆控制信号的方法则**缺乏精确度**，无法指导细粒度的轨迹特定视频生成。

DriVerse 引入**显式轨迹引导**的两个互补形式：(1) 使用预定义的**趋势词汇**将轨迹 token 化为文本提示，实现与语言的无线集成；(2) 将 3D 轨迹转换为 **2D 空间运动先验**，增强对驾驶场景中静态内容的控制。

为更好地处理动态物体，DriVerse 进一步引入轻量级**运动对齐模块**，专注于动态像素的帧间一致性，显著增强长序列中运动元素的时间连贯性。在 nuScenes 和 Waymo 数据集上的实验表明，DriVerse 以最少的训练量和无需额外数据的优势超越了专用模型。

## 技术架构

**Vision Encoding（视觉编码）**：以单张图像和未来轨迹为输入，双模态轨迹引导——文本路径（趋势词汇 token 化轨迹）和视觉路径（3D→2D 空间运动先验）——分别注入生成过程的不同层面。

**Knowledge Learning（世界知识学习）**：在 nuScenes 和 Waymo 数据集上训练，学习驾驶场景的视觉动力学。轻量级运动对齐模块专门优化动态物体的帧间一致性，确保车辆、行人等运动元素在长序列中平滑连续。

**Controllable Simulation（可控推演）**：轨迹通过双路径实现精确控制——文本路径提供语义级的导航意图，空间运动先验路径提供几何级的静态场景控制。运动对齐模块确保动态物体在长序列中的时间连贯性。

## 代码实现要点

- 双模态轨迹引导：文本（趋势词汇） + 视觉（空间运动先验）
- 趋势词汇：预定义词汇将轨迹 token 化为语言提示
- 3D→2D 空间运动先验：增强静态内容控制
- 轻量级运动对齐模块：动态像素帧间一致性
- 开源在 shalfun/DriVerse

## 关键创新点

- 双模态轨迹引导：文本趋势词汇 + 2D 空间运动先验
- 趋势词汇设计实现轨迹到语言的无线集成
- 3D 轨迹 → 2D 运动先验的几何转换
- 轻量级运动对齐模块增强动态物体时间连贯性
- 最少训练量、无额外数据即可超越专用模型

## 代表性结果

- nuScenes 和 Waymo 双数据集验证
- 未来视频生成超越专用模型
- 长序列动态物体时间连贯性显著增强
- 精确的轨迹特定视频生成
