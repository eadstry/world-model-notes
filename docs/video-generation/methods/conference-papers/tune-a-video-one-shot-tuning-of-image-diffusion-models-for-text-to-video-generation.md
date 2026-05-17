---
title: "Tune-A-Video: One-Shot Tuning of Image Diffusion Models for Text-to-Video Generation"
arxiv: https://arxiv.org/abs/2212.11565
github: https://github.com/showlab/Tune-A-Video
website: https://tuneavideo.github.io/
venue: ICCV
year: 2023
---

# Tune-A-Video: One-Shot Tuning of Image Diffusion Models for Text-to-Video Generation

::: info 论文信息
- **Venue**: ICCV (2023)
- **arXiv**: [https://arxiv.org/abs/2212.11565](https://arxiv.org/abs/2212.11565)
- **GitHub**: [https://github.com/showlab/Tune-A-Video](https://github.com/showlab/Tune-A-Video)
- **Website**: [https://tuneavideo.github.io/](https://tuneavideo.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出 One-Shot Video Tuning 设定，仅需单条文本-视频对即可实现文本到视频生成，显著降低数据需求
- 设计定制化的时空注意力机制（Spatio-Temporal Attention），将预训练 T2I 模型扩展为 T2V 模型
- 在推理阶段引入 DDIM Inversion 提供结构引导，增强生成视频与输入视频的对齐

### 方法细节
- 基于预训练的 T2I 扩散模型（如 Stable Diffusion），将自注意力层扩展为同时关注空间和时间维度的时空注意力
- 通过高效的 one-shot 微调策略，仅对新增的时空注意力层进行训练，保持原 T2I 权重冻结
- 在推理中，使用 DDIM Inversion 从输入视频提取隐空间噪声轨迹作为结构先验，结合目标文本生成输出视频

### 关键发现
- T2I 模型本身已具备生成动词性动作的能力（如"划船"），但缺乏对连续运动建模的能力
- 将 T2I 模型扩展为同时生成多帧时，意外地展现出良好的跨帧内容一致性，为时序建模提供了基础
- One-shot 微调后模型能够将输入视频的运动模式迁移到新的文本语义场景中，实现文本驱动的视频编辑

### 方法归类
- **范式**: 扩散模型 + One-Shot 微调
- **关键技术**: 时空注意力、DDIM Inversion、参数高效微调
- **适用场景**: 文本到视频生成、基于文本的视频编辑、资源受限场景下的视频生成
