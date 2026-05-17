---
title: "CamCloneMaster: Enabling Reference-based Camera Control for Video Generation"
arxiv: "https://arxiv.org/abs/2506.03140"
github: ""
website: "https://camclonemaster.github.io/"
venue: "arXiv 2025"
year: 2025
---

# CamCloneMaster: Enabling Reference-based Camera Control for Video Generation

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [2506.03140](https://arxiv.org/abs/2506.03140)
- **GitHub**: 
- **Website**: [https://camclonemaster.github.io/](https://camclonemaster.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 CamCloneMaster，无需显式相机参数或测试时微调，即可从参考视频中克隆相机运动轨迹
- 统一支持 Image-to-Video 和 Video-to-Video 两种任务下的参考相机控制
- 构建 Camera Clone Dataset，一个覆盖多样场景、主体与相机运动的大规模合成数据集
- 用户无需手动构建复杂的相机参数序列，极大降低了相机控制的交互门槛

### 方法细节
- 将参考视频的相机运动隐式编码为扩散模型的控制条件，避免显式位姿估计
- 在统一框架内同时处理 I2V 和 V2V 任务，共享相机克隆模块
- Camera Clone Dataset 通过合成管线生成，包含丰富的光流与相机位姿标注
- 训练阶段将相机克隆信号注入视频扩散模型的去噪过程，实现端到端学习
- 推理时仅需提供参考视频与内容输入，无需任何参数优化或相机标定步骤
- 通过多尺度特征融合增强相机轨迹的时序一致性与空间精度

### 关键发现
- 在相机可控性与视觉质量上均优于现有基于显式参数的相机控制方法
- 用户研究证实，参考视频克隆的交互方式比手动调参更直观、高效
- Camera Clone Dataset 对模型性能提升至关重要，证明了大规模合成数据的价值

### 方法归类
- **范式**: 可控视频生成 / 相机运动迁移
- **关键技术**: 参考视频相机克隆、隐式相机条件编码、多任务统一框架、大规模合成数据训练
- **适用场景**: 影视级视频生成、虚拟摄影、视频编辑与重拍摄
