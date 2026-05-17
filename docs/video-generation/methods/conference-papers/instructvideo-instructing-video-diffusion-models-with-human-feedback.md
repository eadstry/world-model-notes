---
title: "InstructVideo: Instructing Video Diffusion Models with Human Feedback"
arxiv: https://arxiv.org/abs/2312.12490
github: https://github.com/ali-vilab/VGen/blob/main/doc/InstructVideo.md
website: https://instructvideo.github.io/
venue: CVPR
year: 2024
---

# InstructVideo: Instructing Video Diffusion Models with Human Feedback

::: info 论文信息
- **Venue**: CVPR (2024)
- **arXiv**: [https://arxiv.org/abs/2312.12490](https://arxiv.org/abs/2312.12490)
- **GitHub**: [https://github.com/ali-vilab/VGen/blob/main/doc/InstructVideo.md](https://github.com/ali-vilab/VGen/blob/main/doc/InstructVideo.md)
- **Website**: [https://instructvideo.github.io/](https://instructvideo.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出了 InstructVideo，首次将人类反馈驱动的奖励微调引入文本到视频扩散模型，通过奖励信号引导模型生成视觉质量更高、与文本描述更一致的视频。
- 将奖励微调重构为视频编辑任务，显著降低了经由完整 DDIM 采样链生成视频的推理成本，提升了微调效率。
- 提出了利用现有图像奖励模型替代视频奖励模型的方案，通过片段化奖励采样和时间衰减机制，解决了视频生成领域缺乏专用人类偏好模型的问题。

### 方法细节
- 将传统奖励微调中的完整采样过程重新定义为基于扩散过程退化的视频编辑范式：先对采样视频施加扩散噪声进行退化，再通过部分 DDIM 推理链进行去噪重建，从而仅需部分推理步骤即可计算奖励信号。
- 提出片段视频奖励机制，在视频的时间维度上执行稀疏分段采样，为每一段独立提供基于图像奖励模型的奖励信号，实现帧级质量评估的聚合。
- 引入时间衰减奖励方法，在微调过程中对沿时间轴的奖励信号施加衰减权重，以抑制过度优化带来的时序建模退化，保持生成视频的时序一致性。
- 整个微调流程以 HPSv2 等预训练图像奖励模型为基础，无需额外训练视频奖励模型，即可为视频生成质量提供有效监督。

### 关键发现
- 将奖励微调重构为编辑任务后，推理开销大幅下降，同时在多项视觉质量指标上取得了显著提升，验证了编辑式微调的高效性。
- 尽管仅使用图像奖励模型，片段视频奖励与时间衰减奖励的组合能够有效迁移图像质量偏好到视频域，在视频质量评估和人类偏好测试中均优于未微调的基线模型。
- 时间衰减奖励对于维持长视频生成中的时序连贯性至关重要，不加衰减的微调会导致时序一致性的显著退化。

### 方法归类
- 属于视频生成对齐与人类反馈微调方向，核心关注如何利用人类偏好信号提升扩散模型生成视频的视觉质量和文本对齐度。
- 方法学定位为高效奖励微调与跨模态奖励信号迁移，适用于各类预训练文本到视频扩散模型的后训练优化。
