---
title: "Mobile Video Diffusion"
arxiv: https://arxiv.org/abs/2412.07583
website: https://qualcomm-ai-research.github.io/mobile-video-diffusion/
venue: ICCV
year: 2025
---

# Mobile Video Diffusion

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2412.07583](https://arxiv.org/abs/2412.07583)
- **Website**: [https://qualcomm-ai-research.github.io/mobile-video-diffusion/](https://qualcomm-ai-research.github.io/mobile-video-diffusion/)
:::

## 学习笔记

### 核心贡献
- 首个面向移动设备的视频扩散模型 MobileVD，在骁龙 14 Pro 上实现 14 帧 512x256 视频的 1.7 秒生成
- 相比 SVD 基线实现 523 倍计算量降低（1817.2 → 4.34 TFLOPs），FVD 仅从 149 小幅退化至 171

### 方法细节
- 以 Stable Video Diffusion（SVD）的时空 UNet 为起点，降低帧分辨率并引入多尺度时序表征
- 提出两种新颖剪枝策略：减少通道数与减少时序模块数，协同压缩模型规模
- 采用对抗微调将去噪过程压缩为单步，大幅加速推理

### 关键发现
- 在移动端视频生成中，计算效率与生成质量之间存在明确的权衡曲线，MobileVD 位于帕累托前沿
- 单步对抗蒸馏在视频扩散模型上同样有效，质量损失可控

### 方法归类
- **范式**: 扩散模型 + 对抗蒸馏
- **关键技术**: 网络剪枝、多尺度时序表征、单步对抗微调
- **适用场景**: 移动端实时视频生成、设备端推理部署

