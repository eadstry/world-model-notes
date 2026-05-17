---
title: "VideoCrafter2: Overcoming Data Limitations for High-Quality Video Diffusion Models"
arxiv: https://arxiv.org/abs/2401.09047
github: https://github.com/AILab-CVC/VideoCrafter
website: https://ailab-cvc.github.io/videocrafter2/
venue: CVPR
year: 2024
---

# VideoCrafter2: Overcoming Data Limitations for High-Quality Video Diffusion Models

::: info 论文信息
- **Venue**: CVPR (2024)
- **arXiv**: [https://arxiv.org/abs/2401.09047](https://arxiv.org/abs/2401.09047)
- **GitHub**: [https://github.com/AILab-CVC/VideoCrafter](https://github.com/AILab-CVC/VideoCrafter)
- **Website**: [https://ailab-cvc.github.io/videocrafter2/](https://ailab-cvc.github.io/videocrafter2/)
:::

## 学习笔记

### 核心贡献
- 探索了从 Stable Diffusion 扩展的视频模型的训练策略，证明仅使用低质量视频和合成高质量图像即可获得高质量视频模型
- 揭示了视频模型中时空模块之间的耦合程度与分布偏移的关系：全参数训练比仅训练时序模块产生更强的空间-时序耦合

### 方法细节
- 利用跨模块强耦合特性，通过仅对空间模块使用高质量图像微调来将整体分布迁移到更高画质，同时保持运动质量不退化
- 避免直接在大规模高质量视频数据上训练，转而通过图像域的高质量知识注入实现视频质量的提升

### 关键发现
- 低质量视频数据集（如 WebVid-10M）导致模型优化偏向低质分布，但通过空间模块的静态图像微调可以有效校正这一偏差
- 强时空耦合是双刃剑：它会绑定运动模式到低质外观，但在精心设计的微调下也可以成为迁移高质量外观的有效通道

### 方法归类
- **范式**: Latent Video Diffusion + Distribution Shift
- **关键技术**: 空间模块图像微调, 时空耦合分析, 无需高质量视频数据的训练策略
- **适用场景**: 视频生成模型在低质视频数据上预训练后的质量提升阶段
