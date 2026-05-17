---
title: "DreamPose: Fashion Video Synthesis with Stable Diffusion"
arxiv: https://arxiv.org/abs/2304.06025
github: https://github.com/johannakarras/DreamPose
website: https://grail.cs.washington.edu/projects/dreampose/
venue: ICCV
year: 2023
---

# DreamPose: Fashion Video Synthesis with Stable Diffusion

::: info 论文信息
- **Venue**: ICCV (2023)
- **arXiv**: [https://arxiv.org/abs/2304.06025](https://arxiv.org/abs/2304.06025)
- **GitHub**: [https://github.com/johannakarras/DreamPose](https://github.com/johannakarras/DreamPose)
- **Website**: [https://grail.cs.washington.edu/projects/dreampose/](https://grail.cs.washington.edu/projects/dreampose/)
:::

## 学习笔记

### 核心贡献
- 提出 DreamPose，首次将预训练文本到图像扩散模型（Stable Diffusion）改造为姿态与图像联合引导的时尚视频合成模型，从单张静态图片生成包含人体与服装动态的动画视频。
- 设计了一套新颖的微调策略，结合架构层面的条件注入改造与时序一致性技术，使文本到图像模型能够处理视频生成任务。
- 在 UBC Fashion 数据集上验证了方法在不同服装风格与姿态下的泛化能力，取得时尚视频合成领域的最优效果。

### 方法细节
- 以 Stable Diffusion 为骨干网络，通过修改架构使其额外接收人体姿态序列与参考图像作为条件信号，将文本到图像生成路径转换为姿态与图像引导的视频合成路径。
- 条件注入机制将姿态关键点信息与参考图像的视觉特征融合进扩散去噪过程的每个时间步，引导模型生成与目标姿态一致的人物外观。
- 采用时序一致性技术（如跨帧注意力共享或时序平滑约束），确保生成视频中人物外观与服装纹理在连续帧之间保持稳定，避免闪烁与抖动。
- 微调过程仅使用 UBC Fashion 数据集的时尚视频，无需额外的大规模视频预训练，展示了从图像扩散模型迁移到视频生成的高效性。

### 关键发现
- 在多种服装风格（连衣裙、上衣、裤子等）和人体姿态序列上均能生成视觉质量高且动作自然的时尚视频。
- 相比已有方法，DreamPose 在时尚视频合成的视觉质量与时序一致性上取得了最优结果（state-of-the-art）。
- 验证了将预训练图像扩散模型通过条件注入与时序约束改造为视频生成模型的高效路径，为后续工作提供了重要参考。

### 方法归类
- 属于视频生成中的**姿态驱动人物视频合成**方向，聚焦时尚场景下的服装动态展示。
- 方法上可归类为**扩散模型迁移与条件注入**，通过改造预训练图像扩散模型的架构与训练策略实现可控视频生成。
