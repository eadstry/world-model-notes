---
title: "Cross-Frame Representation Alignment for Fine-Tuning Video Diffusion Models"
arxiv: https://arxiv.org/abs/2506.09229v2
github: https://github.com/deepshwang/crepa
website: https://crepavideo.github.io/
venue: arXiv
year: 2025
---

# Cross-Frame Representation Alignment for Fine-Tuning Video Diffusion Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2506.09229v2](https://arxiv.org/abs/2506.09229v2)
- **GitHub**: [https://github.com/deepshwang/crepa](https://github.com/deepshwang/crepa)
- **Website**: [https://crepavideo.github.io/](https://crepavideo.github.io/)
:::

## 学习笔记

### 核心贡献
- 将 REPA（Representation Alignment）从图像扩散模型扩展到视频扩散模型微调，发现直接逐帧对齐虽加速收敛但损害跨帧语义一致性
- 提出 CREPA（Cross-Frame Representation Alignment），将当前帧的隐藏状态与相邻帧的外部特征进行对齐，强化时序语义连贯性
- 在 CogVideoX-5B 和 Hunyuan Video 两个主流视频扩散模型上验证，仅需 LoRA 微调即可在视觉保真度和跨帧一致性上双赢
- 开源完整训练代码与 LoRA 权重

### 方法细节
- **REPA 基础**：在图像扩散模型训练中，REPA 将去噪 U-Net/DiT 的中间层隐藏状态与 DINOv2 等预训练视觉编码器提取的特征进行对齐（通常用余弦相似度或 InfoNCE 损失），加速收敛并提升生成质量
- **Naive REPA for Video**：简单适配到视频即对每一帧 $i$ 独立计算隐藏状态 $h_i$ 与其对应帧外部特征 $f_i$ 的对齐损失 $\mathcal{L}_{\text{align}}(h_i, f_i)$——虽能加速训练收敛，但因忽略了帧间语义关联导致相邻帧出现语义漂移
- **CREPA 核心改进**：对帧 $i$ 的隐藏状态 $h_i$，将其同时对齐到帧 $i$ 自身的外部特征 $f_i$ 以及邻近帧的外部特征集合 $\{f_{i-1}, f_{i+1}, \dots\}$，损失函数为加权跨帧对齐 $\mathcal{L}_{\text{CREPA}} = \sum_{k \in \mathcal{N}(i)} w_{|k-i|} \cdot \mathcal{L}_{\text{align}}(h_i, f_k)$，其中 $\mathcal{N}(i)$ 为帧 $i$ 的邻域窗口，$w$ 为距离相关的衰减权重
- **LoRA 高效微调**：仅在注意力层注入低秩适配器，冻结基座模型其余参数，使 CREPA 的对齐损失可作为辅助损失加入训练，对计算开销几乎无影响
- **施加策略**：对齐损失在扩散去噪过程的多个时间步上施加（通常在前半段噪声较大的步中权重更高），避免在高清细节阶段过度约束

### 关键发现
- 单帧 REPA 对齐忽视了视频时序结构，是导致相邻帧语义漂移的根本原因；CREPA 的跨帧邻域对齐策略有效解决了此问题
- CREPA 在提升跨帧一致性的同时，意外地也改善了单帧视觉质量，说明时序约束对空间生成质量有正向的反馈效应
- LoRA + CREPA 在保真度—一致性权衡上全面优于 LoRA 微调 baseline 和 LoRA + REPA，且训练开销几乎持平

### 方法归类
- **范式**: 表示对齐 + 视频扩散模型高效微调
- **关键技术**: 跨帧表示对齐（CREPA）、LoRA 高效微调、DINOv2 等外部视觉编码器特征蒸馏、加权邻域对齐损失
- **适用场景**: 视频扩散模型微调/适配、跨帧一致性增强、少样本视频生成、视频风格迁移
