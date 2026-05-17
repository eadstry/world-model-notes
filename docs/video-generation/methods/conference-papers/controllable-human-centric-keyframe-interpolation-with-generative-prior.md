---
title: "Controllable Human-centric Keyframe Interpolation with Generative Prior"
arxiv: "https://arxiv.org/abs/2506.03119"
github: ""
website: "https://gseancdat.github.io/projects/PoseFuse3D_KI"
venue: "arXiv 2025"
year: 2025
---

# Controllable Human-centric Keyframe Interpolation with Generative Prior

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [2506.03119](https://arxiv.org/abs/2506.03119)
- **GitHub**: 
- **Website**: [https://gseancdat.github.io/projects/PoseFuse3D_KI](https://gseancdat.github.io/projects/PoseFuse3D_KI)
:::

## 学习笔记

### 核心贡献
- 提出 PoseFuse3D-KI，首个将 3D 人体引导信号集成到扩散过程中实现可控人体关键帧插值
- 设计 PoseFuse3D 控制模块，包含 SMPL-X 编码器将 3D 几何与形状映射到 2D 潜在条件空间
- 构建 CHKI-Video 数据集，同时标注 2D 姿态与 3D SMPL-X 参数，填补评估基准空白
- 在无 3D 几何引导的复杂关节运动场景中显著提升插值质量

### 方法细节
- SMPL-X 编码器提取 3D 人体网格的几何与形状特征，投影为 2D 潜在空间条件信号
- 融合网络将 3D SMPL-X 特征与 2D 姿态嵌入进行多模态融合，作为扩散模型的引导条件
- 将融合后的控制信号注入预训练视频扩散先验的去噪过程，实现结构感知的帧插值
- CHKI-Video 数据集覆盖多样化的人体动作序列，提供逐帧的 2D+3D 双模态标注
- 框架支持稀疏关键帧输入，自动生成中间帧的同时保持人体结构的时序一致性

### 关键发现
- 在 CHKI-Video 上 PSNR 提升 9%，LPIPS 降低 38%，显著优于现有 SOTA 方法
- 3D SMPL-X 引导有效解决了纯 2D 方法在复杂关节运动中的结构失真问题
- 融合 2D 姿态与 3D 几何信息比单独使用任一模态均取得更好效果

### 方法归类
- **范式**: 可控视频生成 / 人体运动插值
- **关键技术**: SMPL-X 3D 编码器、2D-3D 多模态融合、扩散先验引导、人体中心关键帧插值
- **适用场景**: 人体动画生成、电影特效、运动捕捉补全、虚拟人驱动
