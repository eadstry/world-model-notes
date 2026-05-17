---
title: "Free-Form Motion Control: Controlling the 6D Poses of Camera and Objects in Video Generation"
arxiv: https://arxiv.org/abs/2501.01425
github: https://github.com/FudanCVL/SynFMC
website: https://henghuiding.com/SynFMC/
venue: ICCV
year: 2025
---

# Free-Form Motion Control: Controlling the 6D Poses of Camera and Objects in Video Generation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2501.01425](https://arxiv.org/abs/2501.01425)
- **GitHub**: [https://github.com/FudanCVL/SynFMC](https://github.com/FudanCVL/SynFMC)
- **Website**: [https://henghuiding.com/SynFMC/](https://henghuiding.com/SynFMC/)
:::

## 学习笔记

### 核心贡献
- 构建了首个面向自由形式运动控制的合成数据集 SynFMC，包含多样化的物体与环境类别及完整的 6D 位姿标注，填补了该领域数据空白
- 提出 FMC 方法，能够在视频生成中独立或同时控制相机与动态物体的 6D 位姿，实现精确的 3D 感知运动控制
- FMC 兼容多种个性化 T2I 模型，可在不同内容风格下保持高质量视频生成

### 方法细节
- SynFMC 数据集按特定规则覆盖多种运动模式（平移、旋转、缩放等），模拟常见与复杂的真实世界场景
- 完整的 6D 位姿信息使模型能够解耦视频中物体自身运动与相机运动带来的视觉效果
- FMC 基于 SynFMC 训练，以 6D 位姿序列作为控制条件注入生成过程，引导物体与相机的空间变换
- 支持独立控制（仅相机或仅物体）和联合控制（相机与物体同时运动）两种模式
- 可插拔接入各类预训练 T2I 模型，无需重新训练即可适配不同风格基座

### 关键发现
- 通过显式 6D 位姿条件控制，生成视频的运动轨迹与目标位姿高度一致，且在保持画面质量的同时不引入明显的运动伪影
- 同时控制相机与物体运动时，模型能正确区分两种运动来源，生成的视频具有真实的空间透视和遮挡关系

### 方法归类
- **研究方向**: 可控视频生成、3D 感知视频生成
- **控制维度**: 6D 位姿轨迹（相机外参 + 物体姿态），属于细粒度空间-运动联合控制
