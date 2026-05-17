---
title: "Autoregressive Adversarial Post-Training for Real-Time Interactive Video Generation"
arxiv: https://arxiv.org/abs/2506.09350
github: ""
website: https://seaweed-apt.com/2
venue: "NeurIPS"
year: 2025
---

# Autoregressive Adversarial Post-Training for Real-Time Interactive Video Generation

::: info 论文信息
- **Venue**: NeurIPS 2025
- **arXiv**: [2506.09350](https://arxiv.org/abs/2506.09350)
- **GitHub**: 
- **Website**: [seaweed-apt.com/2](https://seaweed-apt.com/2)
:::

## 学习笔记

### 核心贡献
- 提出**自回归对抗后训练（AAPT）**，将预训练潜在视频扩散模型转化为实时交互视频生成器，仅需单次神经网络函数评估（1 NFE）即可生成每帧潜在表示
- 首次系统性地将**对抗训练**作为自回归视频生成的有效范式，使单步生成架构可充分利用 KV cache 实现极低推理延迟
- 采用 **Student-Forcing** 训练策略，训练时注入模型自身预测作为下一步输入，有效缓解长序列自回归生成中的误差累积
- 8B 模型在单张 H100 上实现 736×416@24fps 实时流式生成，8×H100 可扩展至 1280×720@24fps、最长一分钟（1440 帧）的连续生成

### 方法细节
- 基于预训练潜在视频扩散模型，将其改造为自回归架构，逐帧生成潜在表示，每帧仅需 1 NFE
- 训练阶段采用对抗训练范式：生成器自回归生成帧序列，判别器对生成帧与真实帧进行判别，替代传统多步扩散采样
- 推理时模型流式输出已生成帧至用户端，用户实时交互反馈将作为控制信号传入模型以影响下一帧生成
- 架构设计深度兼容 KV cache 机制，单步生成使缓存可跨帧复用，显著降低逐帧计算开销
- Student-Forcing 训练：在训练序列中以一定概率使用模型自身上一步输出替代真实帧作为当前步输入，缩小训练-推理分布差距
- 支持多种交互控制形式，可在流式生成过程中实时调整视频内容走向

### 关键发现
- 对抗训练可有效替代扩散采样作为自回归视频生成的训练范式，在生成质量与推理效率之间取得实用平衡
- Student-Forcing 策略显著减少了长视频生成中的误差累积现象，使模型可稳定生成长达数十秒的视频序列
- 单步生成架构（1 NFE）足以支撑高质量实时视频流式生成，打破了视频生成模型对多步去噪的固化依赖

### 方法归类
- **范式**: 自回归视频生成 + 对抗训练
- **关键技术**: 对抗后训练（AAPT）、Student-Forcing、KV Cache 优化、单步生成（1 NFE）
- **适用场景**: 实时交互视频生成、流式视频生成、游戏 / 元宇宙低延迟视频应用
