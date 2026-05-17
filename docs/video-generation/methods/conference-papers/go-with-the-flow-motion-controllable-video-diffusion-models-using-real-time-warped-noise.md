---
title: "Go-with-the-Flow: Motion-Controllable Video Diffusion Models Using Real-Time Warped Noise"
arxiv: https://arxiv.org/abs/2501.08331
github: https://github.com/Eyeline-Research/Go-with-the-Flow
website: https://eyeline-labs.github.io/Go-with-the-Flow/
venue: CVPR
year: 2025
---

# Go-with-the-Flow: Motion-Controllable Video Diffusion Models Using Real-Time Warped Noise

::: info 论文信息
- **Venue**: CVPR (2025 Oral)
- **arXiv**: [https://arxiv.org/abs/2501.08331](https://arxiv.org/abs/2501.08331)
- **GitHub**: [https://github.com/Eyeline-Research/Go-with-the-Flow](https://github.com/Eyeline-Research/Go-with-the-Flow)
- **Website**: [https://eyeline-labs.github.io/Go-with-the-Flow/](https://eyeline-labs.github.io/Go-with-the-Flow/)
:::

## 学习笔记

### 核心贡献
- 提出实时噪声扭曲（Noise Warping）算法，使用光流场将扩散模型初始的独立高斯噪声替换为时间相关噪声，以数据层面的最小改动实现运动控制
- 方法完全与扩散模型设计解耦：无需修改架构、无需改动训练流程，适用于任意视频扩散基础模型
- 为三类运动控制场景提供统一方案——局部物体运动、全局相机运动和运动迁移

### 方法细节
- 核心操作：利用光流场 $F_{t \to t+1}$ 对初始噪声进行前向 warp，使 $z_T^{(t+1)} = \text{Warp}(z_T^{(t)}, F_{t \to t+1})$，噪声序列携带帧间运动相关性
- 扭曲噪声在保持单帧空间高斯性的前提下引入时间相干性，使去噪过程从 $t=T$ 即受到运动先验引导
- 算法效率足够支持实时运行，微调现代视频扩散基础模型时计算开销极低
- 光流来源灵活：从驱动视频提取用于运动迁移，从相机轨迹模拟用于全局运镜，从用户指定用于局部控制

### 关键发现
- 在噪声层面注入运动先验比在隐空间层面使用控制信号更早介入生成过程（自 $t=T$ 起全程生效），因此控制效果更强、更鲁棒
- 通过保持空间高斯性和引入时间相干性的平衡，扭曲噪声在实现有效运动控制的同时维持了每帧像素质量
- 大量实验和用户研究表明该方法对不同基座模型和运动控制场景均具有良好可扩展性

### 方法归类
- **范式**: 数据层面运动控制（通过噪声空间注入运动先验，training-free 或可选轻量微调）
- **关键技术**: 光流引导噪声扭曲、时序高斯性保持、运动解耦（前景/背景/全局）
