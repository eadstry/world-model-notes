---
title: "FrameBridge: Improving Image-to-Video Generation with Bridge Models"
arxiv: https://arxiv.org/abs/2410.15371
website: https://framebridge-icml.github.io/
venue: ICML
year: 2025
---

# FrameBridge: Improving Image-to-Video Generation with Bridge Models

::: info 论文信息
- **Venue**: ICML (2025)
- **arXiv**: [https://arxiv.org/abs/2410.15371](https://arxiv.org/abs/2410.15371)
- **Website**: [https://framebridge-icml.github.io/](https://framebridge-icml.github.io/)
:::

## 学习笔记

### 核心贡献
- 指出标准扩散模型"从噪声到数据"的生成范式与 I2V 任务"从给定帧到后续帧"的本质不匹配，提出 FrameBridge 以数据到数据（data-to-data）的桥模型替代噪声到数据的扩散范式。
- 提出 SNR-Aligned Fine-tuning（SAF），首次实现将预训练扩散模型微调为桥模型，从而复用已训练好的 T2V 先验，降低训练成本。
- 提出 neural prior 技术，在从头训练桥模型时进一步提升合成质量。

### 方法细节
- FrameBridge 将 I2V 生成建模为帧到帧的桥过程：在给定起始帧的条件下，直接学习从起始帧到目标视频帧的映射，而非从纯噪声出发逐步去噪。
- SAF 的核心思想：将扩散模型中不同噪声水平的时间步与桥模型中插值系数的 SNR 对齐，使预训练扩散模型的去噪能力平滑迁移到桥模型框架中。
- neural prior 技术：在从头训练时引入一个辅助的神经网络先验项，对桥模型的生成过程施加结构约束，提升视频帧间的一致性与细节质量。
- 桥模型的生成过程天然以输入图像为起点，充分利用了给定帧中的丰富信息，避免了扩散模型因起始步骤远离条件帧而导致的语义漂移问题。

### 关键发现
- FrameBridge 在零样本设定下 FVD 从扩散基线的 192 降至 95（MSR-VTT），在非零样本设定下 FVD 从 171 降至 122（UCF-101），生成质量提升显著。
- SAF 使得桥模型可以利用预训练 T2V 模型的能力，在无需从头训练的情况下接近甚至超越扩散模型的 I2V 性能，大幅降低了计算开销。
- 数据到数据的桥模型天然契合 I2V 任务结构，相比噪声到数据的扩散模型在帧间一致性与条件帧信息利用上具有本质优势。

### 方法归类
- **范式**: [桥模型（Bridge Model）/ 数据到数据生成 / I2V]
- **关键技术**: [SNR-Aligned Fine-tuning 将扩散模型转为桥模型 → neural prior 强化帧间一致性 → 帧到帧桥式生成]
