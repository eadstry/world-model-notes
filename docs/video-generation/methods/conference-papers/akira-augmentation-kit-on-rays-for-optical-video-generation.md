---
title: "AKiRa: Augmentation Kit on Rays for Optical Video Generation"
arxiv: https://arxiv.org/abs/2412.14158
github: ""
website: ""
venue: arXiv
year: 2024
---

# AKiRa: Augmentation Kit on Rays for Optical Video Generation

::: info 论文信息
- **Venue**: arXiv 2024
- **arXiv**: [https://arxiv.org/abs/2412.14158](https://arxiv.org/abs/2412.14158)
- **GitHub**: 
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 提出 AKiRa（Augmentation Kit on Rays）框架，首次将复杂相机光学模型（焦距、镜头畸变、光圈）显式集成到视频扩散生成中，填补可控视频生成与相机光学之间的空白
- 设计基于光线（Rays）的 Camera Adapter，可即插即用地叠加在现有视频生成骨干网络上，无需重新训练基础模型
- 支持相机运动（平移、旋转）与光学参数（变焦、鱼眼效果、散景）的自由组合与解耦控制，实现电影级视觉效果

### 方法细节
- 构建包含焦距、径向/切向畸变系数、光圈大小等参数的复杂相机光学模型，以物理光线追踪思路对相机成像过程参数化
- Camera Adapter 将相机参数编码为条件信号，注入视频扩散模型的特征层，控制生成过程中的几何投影与光学效应
- Adapter 训练仅需少量标注数据，冻结视频生成骨干网络，实现低成本的参数高效微调
- 支持多种光学效果的组合与合成：如变焦 + 散景（bokeh）、鱼眼 + 相机旋转等，各参数可独立调节
- 相机运动控制与光学参数控制解耦，用户可分别指定运动轨迹和镜头特效

### 关键发现
- 显式建模光学参数（而非隐式学习）可显著提升视频生成中的相机可控性，在电影级视觉效果上全面超越现有方法
- Camera Adapter 的即插即用设计使其可与不同视频生成骨干网络兼容，具有良好的通用性
- 光学效果与运动控制的解耦组合为创意视频生成提供了灵活的控制接口

### 方法归类
- **范式**: 可控视频生成
- **关键技术**: 相机光学建模、光线参数化、Camera Adapter、即插即用模块、光学与运动解耦控制
- **适用场景**: 电影级视频生成、相机运动与光学特效控制、虚拟摄影、创意内容创作
