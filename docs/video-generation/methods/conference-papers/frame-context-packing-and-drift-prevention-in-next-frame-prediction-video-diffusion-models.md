---
title: "Frame Context Packing and Drift Prevention in Next-Frame-Prediction Video Diffusion Models"
arxiv: https://arxiv.org/abs/2504.12626
github: https://github.com/lllyasviel/FramePack
website: https://lllyasviel.github.io/frame_pack_gitpage/
venue: NeurIPS
year: 2025
---

# Frame Context Packing and Drift Prevention in Next-Frame-Prediction Video Diffusion Models

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2504.12626](https://arxiv.org/abs/2504.12626)
- **GitHub**: [https://github.com/lllyasviel/FramePack](https://github.com/lllyasviel/FramePack)
- **Website**: [https://lllyasviel.github.io/frame_pack_gitpage/](https://lllyasviel.github.io/frame_pack_gitpage/)
:::

## 学习笔记

### 核心贡献
- 提出 FramePack：通过帧上下文打包（Frame Context Packing）和漂移预防机制实现长视频生成
- 解决了自回归式下一帧预测中常见的「漂移」（drift）问题——误差随帧累积导致质量下降
- 由 Lvmin Zhang（ControlNet/IC-Light 作者）提出，代码开源且社区采用广泛

### 方法细节
- **FramePack 打包**：将多帧打包为单个输入序列，利用视频 DiT 的时序注意力处理
- **漂移预防**：通过条件注入（condition injection）和滑动窗口注意力约束误差传播
- **高效推理**：内存优化设计，支持在消费级 GPU 上生成百帧级别视频

### 关键发现
- Naive 自回归生成在大约 30-50 帧后出现明显的质量漂移
- FramePack 将漂移起始点推迟到 200+ 帧，显著提升长视频一致性
- 与 Radial Attention 互补——前者解决内容漂移，后者解决注意力计算效率

### 方法归类
推理时对齐 — 解码策略
