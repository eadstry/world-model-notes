---
title: "BlockVid: Block Diffusion for High-Quality and Consistent Minute-Long Video Generation"
arxiv: https://arxiv.org/abs/2511.22973v1
github: https://github.com/ziplab/BlockVid
website: https://ziplab.co/BlockVid
venue: arXiv
year: 2025
---

# BlockVid: Block Diffusion for High-Quality and Consistent Minute-Long Video Generation

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2511.22973v1](https://arxiv.org/abs/2511.22973v1)
- **GitHub**: [https://github.com/ziplab/BlockVid](https://github.com/ziplab/BlockVid)
- **Website**: [https://ziplab.co/BlockVid](https://ziplab.co/BlockVid)
:::

## 学习笔记

### 核心贡献
- 提出 Block Diffusion（块扩散）范式，将长视频生成分解为多个语义块（block）的半自回归去噪，首次实现分钟级（1 分钟以上）高质量一致视频生成
- 设计 Semantic-aware Sparse KV Cache 机制，在跨块推理时仅保留语义相关的 KV 对，有效抑制自回归范式下逐块误差累积
- 提出 Block Forcing 训练策略：在训练阶段以随机块长将长视频切分为块，对每块独立加噪并联合去噪，使模型学习跨块一致性
- 引入 Chunk-wise Noise Scheduling 与 Chunk Shuffling：不同块采用独立噪声调度并在训练时随机打乱块序，增强模型对块间时序关系的泛化能力
- 构建 LV-Bench 评测基准，针对分钟级长视频的细粒度评估，涵盖主体一致性（22.2% VDE Subject 提升）与画面清晰度（19.4% VDE Clarity 提升）

### 方法细节
- 整体架构基于 Video Diffusion Transformer（VDiT），在 latent space 进行去噪，支持 text-to-video 与 image-to-video 两种输入模式
- Block Diffusion 将视频按固定或自适应块长分割，每个块内部执行完整扩散去噪，块之间通过 KV Cache 传递条件信息
- Semantic-aware Sparse KV Cache：在前一 block 生成完成后，基于 attention score 或语义相似度筛选 Top-K 关键帧的 KV 对，仅将其注入下一 block 的 cross-attention 层，显著降低内存与误差传播
- Block Forcing 训练：对完整视频随机采样块边界，各块独立添加不同强度噪声，以共享 VDiT 权重对全部块同时去噪预测，通过联合损失（含块内 MSE + 块间一致性正则）端到端优化
- Chunk-wise Noise Scheduling：各块根据块内时序位置独立设定噪声调度参数（如不同的 noise level 范围），确保块边界处生成质量平滑过渡

### 关键发现
- Block Diffusion 的半自回归范式在长视频生成中显著优于全自回归（逐帧生成）和全并行（一次生成全序列），在超过 30 秒视频后质量优势更突出
- Semantic-aware Sparse KV Cache 在高压缩率（仅保留 10-20% KV 对）下仍能保持块间一致性，证明时序语义信息高度可压缩
- Block Forcing 与 Chunk Shuffling 联合训练是模型能够泛化至任意视频长度的关键，移除其中任一组分均会导致长序列生成崩溃

### 方法归类
- **范式**: Block Diffusion / 半自回归扩散视频生成
- **关键技术**: Semantic-aware Sparse KV Cache、Block Forcing 训练、Chunk-wise Noise Scheduling、VDiT 架构、latent 空间扩散
- **适用场景**: 分钟级长视频生成（text-to-video / image-to-video）、电影级一致叙事视频、需要长时间时序连贯的视频内容创作
