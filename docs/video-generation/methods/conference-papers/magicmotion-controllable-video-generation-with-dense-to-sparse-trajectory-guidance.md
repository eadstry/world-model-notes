---
title: "MagicMotion: Controllable Video Generation with Dense-to-Sparse Trajectory Guidance"
arxiv: https://arxiv.org/abs/2503.16421
github: https://github.com/JIA-Lab-research/MagicMirror
website: https://julianjuaner.github.io/projects/MagicMirror/
venue: ICCV
year: 2025
---

# MagicMotion: Controllable Video Generation with Dense-to-Sparse Trajectory Guidance

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.16421](https://arxiv.org/abs/2503.16421)
- **GitHub**: [https://github.com/JIA-Lab-research/MagicMirror](https://github.com/JIA-Lab-research/MagicMirror)
- **Website**: [https://julianjuaner.github.io/projects/MagicMirror/](https://julianjuaner.github.io/projects/MagicMirror/)
:::

## 学习笔记

### 核心贡献
- 提出 MagicMotion，首个支持密集到稀疏三层轨迹条件（mask、bounding box、sparse box）的图像到视频生成框架。
- 贡献 MagicData（大规模轨迹控制视频数据集及自动化标注过滤管线）与 MagicBench（首个轨迹控制专有评测基准）。
- 解决现有方法在复杂对象运动、多对象轨迹控制中轨迹贴合不准与视觉质量退化的问题。

### 方法细节
- 三层轨迹条件设计：mask 级提供最密集的空间约束，bounding box 级提供中等粒度，sparse box 级仅采样关键帧位置，实现灵活的控制粒度切换。
- 以输入图像为起点，沿用户定义轨迹路径驱动目标对象运动，同时保持对象外观一致性与背景稳定性。
- MagicData 数据集通过自动化标注管线（检测、跟踪、过滤）构建，覆盖复杂场景与多对象交互。

### 关键发现
- 在复杂单对象运动与多对象轨迹控制场景中，MagicMotion 的轨迹贴合度与视觉质量均显著超越已有方法。
- Dense-to-Sparse 条件设计使得不同粒度的轨迹控制信号可在同一框架内无缝切换，拓宽了实际应用的灵活度。
- MagicBench 从视频质量（FVD、CLIP 相似度等）与轨迹控制精度两个维度提供了系统化评估。

### 方法归类
- **范式**: 密集到稀疏的多粒度轨迹条件图像到视频运动控制
- **关键技术**: 三层轨迹条件表征（mask / bounding box / sparse box）、多对象运动控制、自动化数据标注过滤管线、MagicData 数据集、MagicBench 评测基准
- **适用场景**: 可控视频内容创作、自动驾驶运动轨迹仿真与数据增强
