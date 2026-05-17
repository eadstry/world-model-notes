---
title: "TCAN: Animating Human Images with Temporally Consistent Pose Guidance using Diffusion Models"
arxiv: https://arxiv.org/abs/2407.09012
github: https://github.com/eccv2024tcan/TCAN
website: https://eccv2024tcan.github.io/
venue: ECCV
year: 2024
---

# TCAN: Animating Human Images with Temporally Consistent Pose Guidance using Diffusion Models

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2407.09012](https://arxiv.org/abs/2407.09012)
- **GitHub**: [https://github.com/eccv2024tcan/TCAN](https://github.com/eccv2024tcan/TCAN)
- **Website**: [https://eccv2024tcan.github.io/](https://eccv2024tcan.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 TCAN，一种基于姿态驱动的人体图像动画方法，在保持预训练 ControlNet 冻结的条件下，通过 LoRA 适配 UNet 层来对齐姿态与外观特征的隐空间，实现时域一致性动画。
- 在 ControlNet 中引入额外的时域层，增强对姿态检测器离群值的鲁棒性。
- 设计基于姿态信息的温度图（temperature map），沿时间轴分析注意力图，使背景更静态、减少闪烁。

### 方法细节
- 利用预训练 ControlNet 而不进行微调，保留其从大量姿态-图像-描述对中习得的知识；通过 LoRA 适配 UNet 层以对齐姿态与外观特征的隐空间。
- 在 ControlNet 中插入额外的时域注意力层，使模型能够感知时序上下文，提升对错误姿态的鲁棒性。
- 温度图根据姿态信息调整时间注意力权重，在运动区域允许变化，在背景区域强制静态，减少背景伪影。

### 关键发现
- 冻结 ControlNet + LoRA 微调的策略在保持预训练知识的同时有效适配新任务，避免了大模型全量微调带来的灾难性遗忘。
- 时域层的引入显著提升了模型对姿态检测器噪声和缺失关键点的容忍度。
- 温度图机制有效分离了前景运动与背景静态区域，提升了合成视频的时域一致性。

### 方法归类
- **范式**: [姿态引导扩散模型 / 冻结骨干 + 轻量适配]
- **关键技术**: [ControlNet 冻结 + LoRA 适配 + 时域注意力层 + 姿态温度图]
- **适用场景**: [人体图像动画，姿态驱动视频合成，长视频背景保持]
