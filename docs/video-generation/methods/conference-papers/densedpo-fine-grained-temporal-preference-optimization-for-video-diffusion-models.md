---
title: "DenseDPO: Fine-Grained Temporal Preference Optimization for Video Diffusion Models"
arxiv: https://arxiv.org/abs/2506.03517v2
website: https://snap-research.github.io/DenseDPO/
venue: NeurIPS
year: 2025
---

# DenseDPO: Fine-Grained Temporal Preference Optimization for Video Diffusion Models

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.03517v2](https://arxiv.org/abs/2506.03517v2)
- **Website**: [https://snap-research.github.io/DenseDPO/](https://snap-research.github.io/DenseDPO/)
:::

## 学习笔记

### 核心贡献
- 揭示标准 DPO 在视频生成中的"运动偏差"（motion bias）：人类标注者天然偏好低运动视频，导致 DPO 优化后模型倾向于生成静止画面，牺牲运动质量
- 提出 DenseDPO：通过构造"对齐偏好对"（corrupted GT vs. GT）消除运动偏差，并在时序片段（segment）级别注入密集偏好信号，充分利用每个视频的监督信息
- 仅需原数据集 1/3 的数据量即可超越全量数据的标准 DPO/VideoDPO，大幅降低人工标注成本
- 提供 VLM 自动标注管线：利用视觉语言模型自动生成片段级偏好，使偏好优化可规模化

### 方法细节
- **对齐偏好对构造**：对 ground truth 视频施加不同强度的噪声退化（denoising corruption），将退化版本作为 lose（$y_l$），原始 GT 作为 win（$y_w$）；两者运动幅度完全一致，从而消除运动偏差
- **片段级 DenseDPO 损失**：将视频按时间维度切分为 $K$ 个短片段，对每个片段独立计算 DPO 损失，再汇总：$\mathcal{L} = \sum_{k=1}^{K} \mathcal{L}_{\text{DPO}}(y_w^{(k)}, y_l^{(k)}, c)$，提供 K 倍于标准 DPO 的偏好信号密度
- **VLM 自动标注**：利用多模态大模型（VLM）对生成的视频片段进行质量评分，自动生成 win/lose 标签，使整个训练流程无需人工标注者参与
- **与标准 DPO 兼容**：DenseDPO 损失可直接替换标准 DPO 损失项，与 VideoDPO 等现有方法互补叠加

### 关键发现
- DenseDPO 仅用 1/3 数据量即可在运动质量指标上超越全量数据的标准 VideoDPO，证明偏好信号密度比数据量更重要
- 方法对长视频生成（>5 秒）的时序一致性和运动自然度提升尤为显著
- VLM 自动标注的效果接近人工标注，验证了偏好优化全自动化流程的可行性

### 方法归类
- **范式**: Preference Optimization（偏好优化）
- **关键技术**: DenseDPO, Motion Bias Correction, 片段级偏好标注, VLM Auto-Labeling
- **适用场景**: 视频扩散模型的对齐训练、运动质量改善、降低人工标注成本
