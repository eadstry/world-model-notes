---
title: "Trajectory attention for fine-grained video motion control"
arxiv: https://arxiv.org/abs/2411.19324
github: https://github.com/xizaoqu/TrajectoryAttention?tab=readme-ov-file
website: https://xizaoqu.github.io/trajattn/
venue: ICLR
year: 2025
---

# Trajectory attention for fine-grained video motion control

::: info 论文信息
- **Venue**: ICLR (2025)
- **arXiv**: [https://arxiv.org/abs/2411.19324](https://arxiv.org/abs/2411.19324)
- **GitHub**: [https://github.com/xizaoqu/TrajectoryAttention?tab=readme-ov-file](https://github.com/xizaoqu/TrajectoryAttention?tab=readme-ov-file)
- **Website**: [https://xizaoqu.github.io/trajattn/](https://xizaoqu.github.io/trajattn/)
:::

## 学习笔记

### 核心贡献
- 提出 trajectory attention，沿可用像素轨迹执行注意力操作，实现精细摄像机运动控制
- 将 trajectory attention 设计为辅助分支与原始时序注意力协同工作，在精确运动控制和新内容生成能力之间取得平衡
- 方法可扩展至首帧引导的视频编辑，在大空间/时间跨度的内容一致性维护上表现优异

### 方法细节
- 在预训练视频扩散模型中插入 trajectory attention 分支，输入轨迹信息以软性归纳偏置方式注入生成过程
- 轨迹仅部分可用时，原始时序注意力负责补偿缺失区域的新内容生成，二者形成互补机制
- 不依赖光流等稠密运动线索，仅需稀疏轨迹点即可驱动整体生成过程

### 关键发现
- 在图像和视频的摄像机运动控制上显著提升了精度和长程一致性，优于现有基于隐式条件的方法
- Trajectory attention 提供比隐式运动控制更强的结构先验，避免输出不精确或忽略时序关联
- 在首帧引导视频编辑任务中，该方法在大空间/时间跨度下依然能保持较好的内容一致性

### 方法归类
- **范式**: Attention-Based Camera Motion Control
- **关键技术**: Trajectory Attention, Video Diffusion Model, Temporal Attention Synergy
- **适用场景**: 精确摄像机运动控制、首帧引导视频编辑、长程一致性视频生成
