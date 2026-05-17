---
title: "VidStamp: A Temporally-Aware Watermark for Ownership and Integrity in Video Diffusion Models"
arxiv: https://arxiv.org/abs/2505.01406
github: https://github.com/SPIN-UMass/VidStamp
website: ""
venue: arXiv
year: 2025
---

# VidStamp: A Temporally-Aware Watermark for Ownership and Integrity in Video Diffusion Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2505.01406](https://arxiv.org/abs/2505.01406)
- **GitHub**: [https://github.com/SPIN-UMass/VidStamp](https://github.com/SPIN-UMass/VidStamp)
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 提出 VidStamp，一种面向隐空间视频扩散模型的水印框架，通过在解码器中嵌入帧级消息实现高容量、低感知代价的视频水印
- 设计两阶段微调策略：第一阶段利用静态图像数据集促进空间消息分离，第二阶段利用合成视频序列恢复时序一致性
- 支持动态水印机制，通过控制信号在推理时选择消息模板，增加灵活性并建立额外的通信信道
- 帧级水印设计赋予精确的时序篡改定位能力，定位准确率达 0.96，显著超越基线方法

### 方法细节
- 在视频扩散模型的解码器（decoder）中嵌入水印消息，不改变生成过程的核心架构，避免额外推理开销
- 第一阶段使用大规模静态图像数据训练，使水印信号在空间维度上可分离，保证单帧图像质量
- 第二阶段引入合成视频序列训练，恢复帧间时序一致性，确保水印嵌入不引起闪烁或抖动
- 动态水印通过控制信号在多个预定义的消息模板之间切换，支持视频内不同帧携带不同信息
- 在 Stable Video Diffusion（图生视频）、OpenSora 和 Wan（文生视频）三个主流扩散模型上验证框架通用性
- 每帧嵌入 48 bits 信息，涵盖所有权、来源、完整性等元数据需求

### 关键发现
- 与 VideoSeal、VideoShield 和 RivaGAN 相比，VidStamp 获得更低的 log P 值（更显著的可检测性），同时保持视觉质量
- 帧级水印设计使时序篡改定位准确率达到 0.96，远高于 VideoShield 基线，为视频内容认证提供了新能力
- 两阶段训练策略在空间质量与时序一致性之间取得了良好平衡，水印嵌入对视频感知质量影响极小

### 方法归类
- **范式**: 视频水印 / 扩散模型后处理水印
- **关键技术**: 解码器微调水印嵌入、两阶段训练、动态水印模板切换、帧级时序篡改检测
- **适用场景**: AI 生成视频的版权保护、来源认证、内容完整性验证、篡改检测与定位
