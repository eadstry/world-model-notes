---
title: "Stable Video Infinity: Infinite-Length Video Generation with Error Recycling"
arxiv: https://arxiv.org/abs/2510.09212v1
venue: ICLR
year: 2026
---

# Stable Video Infinity: Infinite-Length Video Generation with Error Recycling

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2510.09212v1](https://arxiv.org/abs/2510.09212v1)
:::

## 学习笔记

### 核心贡献
- 提出 Stable Video Infinity (SVI)，首次实现基于 Diffusion Transformer (DiT) 的无限长度视频生成，在长时间一致性、场景过渡和可控流式叙事上取得突破
- 揭示长视频生成的本质挑战不仅是误差累积，更在于训练假设（干净数据）与测试时自回归推理（输入含自生成误差）之间的假设差距（hypothesis gap）
- 提出 Error-Recycling Fine-Tuning 范式，将 DiT 自生成的误差回收为监督信号，让模型在闭环中主动识别并修正自身错误

### 方法细节
- 通过注入、收集和存储（banking）历史误差构建闭环循环（closed-loop recycling）：将 DiT 先前生成的误差注入干净输入以模拟流匹配中的误差累积轨迹
- 利用一步双向集成（one-step bidirectional integration）高效近似预测，通过残差计算误差量
- 将误差按离散时间步动态存入回放记忆（replay memory），在新输入时重新采样，使模型自回归地从含误差反馈中学习

### 关键发现
- SVI 可将视频从数秒无缝扩展到任意时长，推理阶段无额外计算开销
- 兼容多种条件输入，包括音频、骨架序列和文本流，具备多模态可控性
- 在一致生成、创意生成和条件生成三类基准上均达到当前最优

### 方法归类
- **范式**: 自回归扩散 + 误差回收微调
- **关键技术**: Error-Recycling Fine-Tuning, Diffusion Transformer (DiT), 流匹配, 回放记忆
- **适用场景**: 超长视频生成、交互式叙事、多模态条件视频续写
