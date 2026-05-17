---
title: "AnyMoLe: Any Character Motion In-betweening Leveraging Video Diffusion Models"
arxiv: https://arxiv.org/abs/2503.08417
github: ""
website: ""
venue: CVPR
year: 2025
---

# AnyMoLe: Any Character Motion In-betweening Leveraging Video Diffusion Models

::: info 论文信息
- **Venue**: CVPR (2025)
- **arXiv**: [https://arxiv.org/abs/2503.08417](https://arxiv.org/abs/2503.08417)
- **GitHub**: 
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 首次利用视频扩散模型实现任意角色的运动中间帧生成，无需角色特定数据集
- 提出两阶段帧生成流程（先粗粒度上下文感知，再精细化运动合成），增强上下文理解能力
- 引入 ICAdapt 微调技术，弥合真实世界与渲染角色动画之间的域差距
- 提出 motion-video mimicking 优化方法，结合 2D 与 3D-aware 特征，支持任意关节结构角色的无缝运动生成

### 方法细节
- 框架以视频扩散模型为基础，将运动中间帧视为视频帧生成任务
- 两阶段生成流程：第一阶段捕获粗粒度运动上下文，第二阶段合成精细帧间过渡
- ICAdapt 微调策略：针对预训练视频扩散模型，在渲染动画域上做适应性微调，缩小真实视频与渲染动画的视觉分布差异
- motion-video mimicking：利用 2D 关键点与 3D 骨骼感知特征，将目标运动语义注入视频扩散模型的生成过程
- 无需角色特定训练数据，可泛化至任意骨骼拓扑的角色
- 输入关键起始帧与结束帧，输出平滑的运动过渡序列

### 关键发现
- 显著降低数据依赖，摆脱对角色特定数据集的限制，首次在运动中间帧任务中实现角色无关的泛化
- 生成的运动过渡平滑且逼真，在任意骨骼结构角色上均表现鲁棒
- ICAdapt 有效缩小了真实域与渲染域的差距，提升了生成质量

### 方法归类
- **范式**: 视频扩散模型 + 运动生成
- **关键技术**: ICAdapt 域适应、两阶段帧生成、motion-video mimicking、2D/3D 特征融合
- **适用场景**: 角色动画制作、运动中间帧生成、任意角色骨骼适配、游戏与影视动画管线
