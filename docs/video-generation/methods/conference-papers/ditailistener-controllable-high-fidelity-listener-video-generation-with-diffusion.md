---
title: "DiTaiListener: Controllable High Fidelity Listener Video Generation with Diffusion"
arxiv: https://arxiv.org/abs/2504.04010
website: https://cv.maxi.su/DiTaiListener/
venue: ICCV
year: 2025
---

# DiTaiListener: Controllable High Fidelity Listener Video Generation with Diffusion

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2504.04010](https://arxiv.org/abs/2504.04010)
- **Website**: [https://cv.maxi.su/DiTaiListener/](https://cv.maxi.su/DiTaiListener/)
:::

## 学习笔记

### 核心贡献
- 首次将视频扩散模型引入交互式听者视频生成任务，提出 DiTaiListener 框架，直接生成高保真听者面部视频，避免了传统方法中低维运动编码与渲染两步流程的视觉保真度损失。
- 设计了 Causal Temporal Multimodal Adapter（CTM-Adapter），以因果时序方式将说话者的语音与面部运动多模态信号注入 DiT 视频生成过程，确保听者反应的时序连贯性。
- 提出 DiTaiListener-Edit 过渡优化模型，通过视频到视频的扩散方式将短片段融合为平滑长视频，消除片段拼接处的不自然过渡与表情不一致。

### 方法细节
- DiTaiListener-Gen 基于 Diffusion Transformer（DiT）架构，将听者头部肖像生成建模为以说话者多模态信号为条件的视频扩散过程。
- CTM-Adapter 负责处理说话者的听觉（语音）与视觉（面部运动）线索，采用因果注意力机制将条件信息沿时间维度逐步注入去噪过程，保证当前帧只依赖过去帧的上下文。
- DiTaiListener-Edit 作为第二阶段，接收两段相邻视频片段，通过视频到视频扩散模型对过渡帧进行精细化生成，确保面部表情与图像质量在拼接处的时序一致性。
- 整体框架支持两阶段流水线：先用 Gen 模块生成短时听者反应片段，再用 Edit 模块将片段串联为完整的长时交互视频。

### 关键发现
- 在 RealTalk 数据集上，FID 指标相比现有方法提升 +73.8%，表明生成图像的逼真度有显著优势。
- 在 VICO 数据集上，FD（Fréchet Distance）指标提升 +6.1%，证明模型在运动表征空间的自然度优于已有方法。
- 定性与定量结果均表明，直接使用视频扩散模型端到端生成听者视频，在视觉保真度和表现力上均优于传统"运动编码 + 渲染"的两阶段方案。

### 方法归类
- 属于视频扩散生成中的**人像视频合成**方向，重点解决交互场景下听者的面部视频生成问题。
- 方法上可归类为**多模态条件视频扩散**，以语音和视觉运动信号同时作为条件输入驱动视频生成。
