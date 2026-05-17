---
title: "MEVG : Multi-event Video Generation with Text-to-Video Models"
arxiv: https://arxiv.org/abs/2312.04086
github: https://github.com/kuai-lab/eccv24_MEVG
website: https://kuai-lab.github.io/eccv2024mevg/
venue: ECCV
year: 2024
---

# MEVG : Multi-event Video Generation with Text-to-Video Models

::: info 论文信息
- **Venue**: ECCV (2024)
- **arXiv**: [https://arxiv.org/abs/2312.04086](https://arxiv.org/abs/2312.04086)
- **GitHub**: [https://github.com/kuai-lab/eccv24_MEVG](https://github.com/kuai-lab/eccv24_MEVG)
- **Website**: [https://kuai-lab.github.io/eccv2024mevg/](https://kuai-lab.github.io/eccv2024mevg/)
:::

## 学习笔记

### 核心贡献
- 提出免微调的多事件视频生成方法 MEVG，仅利用预训练 T2V 模型即可从多条独立文本描述合成视觉连贯的多事件视频，无需大规模视频数据集。
- 引入 last frame-aware diffusion 和迭代式 latent 更新机制，分别解决事件间视觉过渡与长视频全局外观一致性问题。

### 方法细节
- Last frame-aware diffusion：将当前片段 latent 初始化为前一片段最后一帧的噪声版本，并调节噪声强度以增强运动动态，同时保持帧间视觉连贯性。
- 迭代式 latent 更新：在每个去噪步参考所有前序帧的 latent，逐步对齐全局外观，抑制长视频中的色彩漂移与风格偏移。
- Prompt generator 将用户的粗粒度多事件文本自动转换为多个精细优化提示，适配预训练 T2V 扩散模型的输入要求。

### 关键发现
- 利用预训练 T2V 模型即可实现多事件生成，无需额外微调或大规模多事件视频数据，显著降低数据与计算成本。
- Last frame-aware 扩散可有效桥接不同事件间的视觉过渡，避免生硬的场景切换。
- 迭代 latent 更新对维持长视频全局外观一致性至关重要，简单串联片段会导致累积漂移。

### 方法归类
- **范式**: 免微调的多事件串联生成，基于预训练 T2V 模型的条件 latent 操控。
- **关键技术**: last frame-aware diffusion、latent 迭代更新、prompt generator、噪声强度动态调节、前序帧参考对齐。
- **适用场景**: 多事件长视频生成（连贯故事情节、分镜脚本合成）、文本驱动的时序叙事视频。
