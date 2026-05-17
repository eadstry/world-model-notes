---
title: "VD3D: Taming Large Video Diffusion Transformers for 3D Camera Control"
arxiv: https://arxiv.org/abs/2407.12781
github: https://github.com/snap-research/ac3d
website: https://snap-research.github.io/vd3d/
venue: ICLR
year: 2025
---

# VD3D: Taming Large Video Diffusion Transformers for 3D Camera Control

::: info 论文信息
- **Venue**: ICLR (2025)
- **arXiv**: [https://arxiv.org/abs/2407.12781](https://arxiv.org/abs/2407.12781)
- **GitHub**: [https://github.com/snap-research/ac3d](https://github.com/snap-research/ac3d)
- **Website**: [https://snap-research.github.io/vd3d/](https://snap-research.github.io/vd3d/)
:::

## 学习笔记

### 核心贡献
- 首个实现对 transformer 架构视频扩散模型进行 3D 相机控制的方法，此前相关工作仅支持 U-Net 类模型
- 提出基于 Plücker 坐标的时空相机嵌入机制，以类 ControlNet 方式注入条件控制
- 在 RealEstate10K 微调后取得可控视频生成的最先进性能

### 方法细节
- 使用 Plücker 坐标将每帧相机位姿编码为稠密空间特征图，与时序信息拼接后注入 DiT 的中间层
- 采用可训练轻量 ControlNet 分支，冻结主模型权重，仅微调条件注入模块
- 支持多种相机轨迹控制（平移、旋转、变焦等），兼容文本到视频的联合条件生成

### 关键发现
- Transformer 视频扩散模型（如 DiT）虽然时空联合建模，但仍可通过附加条件分支实现精确相机控制
- Plücker 坐标作为 3D 几何表示相比 naive 参数化（如 quaternion + translation）在生成一致性上明显更优
- 相机控制与文本控制可以正交叠加，互不干扰

### 方法归类
- **范式**: 条件扩散模型 + ControlNet 适配
- **关键技术**: Plücker 坐标嵌入、时空条件注入、transformer 视频扩散模型
- **适用场景**: 电影级运镜控制、3D 视觉数据增强、内容创作管线中的相机轨迹编辑
