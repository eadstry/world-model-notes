---
title: "Adversarial Distribution Matching for Diffusion Distillation Towards Efficient Image and Video Synthesis"
arxiv: https://arxiv.org/abs/2507.18569
github: ""
website: ""
venue: ICCV
year: 2025
---

# Adversarial Distribution Matching for Diffusion Distillation Towards Efficient Image and Video Synthesis

::: info 论文信息
- **Venue**: ICCV 2025 (Highlight)
- **arXiv**: [https://arxiv.org/abs/2507.18569](https://arxiv.org/abs/2507.18569)
- **GitHub**: 
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 提出 Adversarial Distribution Matching (ADM) 框架，利用扩散鉴别器以对抗方式对齐真假得分估计器的潜在预测，缓解 DMD 中逆 KL 散度最小化导致的 mode collapse / mode-seeking 问题
- 在单步蒸馏场景下引入像素空间与潜在空间的混合鉴别器进行对抗蒸馏，显著提升预训练生成器质量
- 提出基于 ODE pair 的分布损失（distributional loss）替代 DMD2 的 MSE 预训练，为 score distillation 微调提供更优初始化
- 将对抗蒸馏预训练与 ADM 微调统一为 DMDX 管线，在 SDXL 上以更少 GPU 时间实现超越 DMD2 的单步生成性能

### 方法细节
- ADM 在潜在空间中训练扩散鉴别器，区分真实数据与伪造数据在得分估计器下的预测分布，以对抗训练实现分布匹配
- 单步蒸馏阶段采用混合鉴别器设计：像素空间鉴别器关注高频纹理细节，潜在空间鉴别器关注语义一致性
- 预训练阶段从教师扩散模型采样 ODE 轨迹对 $(z_t, z_{t'})$ ，以分布损失对齐学生与教师的中间表示，替代 DMD2 的点对点 MSE 损失
- DMDX 完整管线：对抗蒸馏预训练 → ADM 微调，两步统一优化，端到端可训练
- 在 CogVideoX 视频扩散模型上验证蒸馏能力，建立高效视频合成新基准

### 关键发现
- 逆 KL 散度在分布匹配蒸馏中固有地倾向 mode-seeking，ADM 通过对抗训练有效覆盖更广泛的数据分布模式
- DMDX 在 SDXL 上单步生成质量（FID / CLIP Score）全面超越 DMD2，同时 GPU 训练时间更短
- 方法对多种架构（SD3-Medium、SD3.5-Large、CogVideoX）具有良好泛化性

### 方法归类
- **范式**: 扩散模型蒸馏
- **关键技术**: Adversarial Distribution Matching、Score Distillation、混合鉴别器（像素 + 潜在空间）、ODE Pair 分布损失
- **适用场景**: 高效图像生成、视频扩散模型单步推理加速、边缘设备部署
