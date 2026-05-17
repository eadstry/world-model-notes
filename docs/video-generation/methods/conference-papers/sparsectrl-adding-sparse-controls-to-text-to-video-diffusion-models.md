---
title: "SparseCtrl: Adding Sparse Controls to Text-to-Video Diffusion Models"
arxiv: https://arxiv.org/abs/2311.16933
github: https://github.com/guoyww/AnimateDiff#202312-animatediff-v3-and-sparsectrl
website: https://guoyww.github.io/projects/SparseCtrl/
venue: ECCV
year: 2024
---

# SparseCtrl: Adding Sparse Controls to Text-to-Video Diffusion Models

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2311.16933](https://arxiv.org/abs/2311.16933)
- **GitHub**: [https://github.com/guoyww/AnimateDiff#202312-animatediff-v3-and-sparsectrl](https://github.com/guoyww/AnimateDiff#202312-animatediff-v3-and-sparsectrl)
- **Website**: [https://guoyww.github.io/projects/SparseCtrl/](https://guoyww.github.io/projects/SparseCtrl/)
:::

## 学习笔记

### 核心贡献
- 论证了仅依赖文本提示的 T2V 模型存在严重的空间模糊性，并提出使用时间上稀疏的结构信号（如单张草图、深度图或 RGB 关键帧）即可实现有效控制，无需逐帧稠密条件输入
- 提出 SparseCtrl 框架，在保持预训练 T2V 模型（AnimateDiff）参数不变的前提下，额外插入一个轻量条件编码器用于处理稀疏信号，实现即插即用的可控视频生成
- 支持多种稀疏条件模态（草图、深度图、RGB 图像），覆盖分镜绘制、深度渲染、关键帧动画与插帧等实际应用场景

### 方法细节
- 条件编码器沿用 ControlNet 的零卷积（zero convolution）初始化策略，从预训练的编码器副本出发逐步适配，保证训练初期不破坏原始 T2V 的生成分布
- 稀疏条件沿时间维度的扩展策略：将仅有的 1 帧或几帧条件通过重复/填充（repeat/padding）方式广播到整段视频的每一帧特征图上，然后由 Temporal 层自行学得时序一致性
- 针对 RGB 图像作为条件时需保留外观细节的场景，设计了 Encoder-C 变体，在条件编码器中加入与 T2V 模型共享的 VAE 编码器，使输入条件与潜在空间分布对齐
- 与 AnimateDiff 完全兼容，可直接叠加在个性化 T2V 模型（如基于 DreamBooth/LoRA 微调的模型）之上，无需额外联合训练

### 关键发现
- 实验表明，即使只输入 1 帧稀疏条件（如首帧深度图），SparseCtrl 即可生成时序连贯且结构可控的视频序列，与逐帧稠密控制（如 Depth-CtrlNet）效果相当
- 在视频帧插值任务中，输入首尾两帧 RGB 条件作为稀疏引导，模型能够自动推断中间帧的运动轨迹与形变，达到有竞争力的插值质量
- 在定量指标（FVD、CLIP Score）和用户偏好上均优于纯文本基线以及直接使用单帧条件不经过专门设计的简单方案
- 稀疏控制不仅降低了条件数据的采集成本，还显著减少了推理时的计算开销（无需对每一帧运行深度/边缘提取器）

### 方法归类
- **范式**: 基于扩散模型的条件视频生成，以 Condition Injection + Temporal Adaptation 为核心
- **关键技术**: 零卷积初始化的稀疏条件编码器、时间维度的条件广播策略、AnimateDiff 即插即用集成
- **适用场景**: 视频分镜与故事板制作、关键帧动画生成、深度/草图引导的视频生成、视频帧插值与补全
