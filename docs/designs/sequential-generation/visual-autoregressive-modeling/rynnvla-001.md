---
title: "RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation"
design: "RynnVLA-001"
arxiv: https://arxiv.org/abs/2509.15212
github: https://github.com/alibaba-damo-academy/RynnVLA-001
---

# RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation

::: info 论文信息
- **Design**: RynnVLA-001
- **论文全称**: RynnVLA-001: Using Human Demonstrations to Improve Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2509.15212](https://arxiv.org/abs/2509.15212)
- **GitHub**: [https://github.com/alibaba-damo-academy/RynnVLA-001](https://github.com/alibaba-damo-academy/RynnVLA-001)
:::

## 学习笔记

## 核心思想

RynnVLA-001 由阿里巴巴 DAMO 学院提出，系统性地探索了**基于大规模人类演示视频的生成式预训练如何赋能 VLA（Vision-Language-Action）模型**。核心思想是通过两阶段预训练策略，将人类操作视频中的丰富视觉动力学知识转化为机器人动作理解的先验：第一阶段在 1200 万段第一视角操作视频上进行图像到视频的生成预训练（让模型学会"看一段操作开头，预测接下来会发生什么"）；第二阶段扩展到同时预测未来的关键点轨迹（让模型学会"如果我要做这件事，手应该怎么动"），从而将视觉帧预测与动作预测有机桥接。

RynnVLA-001 还引入了 ActionVAE——一个变分自编码器，将连续动作序列（通常包含几十维的关节角度/位置序列）压缩为紧凑的潜在嵌入向量。这有两个关键作用：(1) 降低 VLA 输出空间的复杂度，使自回归生成动作所需的 token 数大幅减少；(2) 通过在潜在空间中施加平滑先验，使生成的动作序列更加平滑自然。当在相同的下游机器人数据集上微调时，RynnVLA-001 显著超越 SOTA 基线，证明了所提出的预训练策略为 VLA 提供了更有效的初始化。

## 技术架构

**Vision Encoding（视觉编码）**：RynnVLA-001 使用基于 ViT 的编码器-解码器架构处理第一视角图像。(1) **图像编码器**将初始帧编码为稠密视觉特征；(2) **自回归视频生成模块**基于该特征预测未来帧序列。编码过程中保留了空间结构信息，使得模型可以定位"动作发生在哪里"（如手/工具与物体的接触点）。

**Knowledge Learning（知识学习）**：两阶段预训练的设计非常精巧：(1) **第一阶段——Ego-Centric Video Generative Pretraining**：在 12M 第一视角操作视频上训练 Image-to-Video 模型，任务为"给定初始帧和语言指令，预测未来帧"。这个阶段让模型学会了对人类操作动作的视觉预测能力——理解手、工具和物体的交互动态。(2) **第二阶段——Human-Centric Trajectory-Aware Modeling**：在视频生成的基础上，额外预测操作者手部的关键点轨迹（keypoint trajectory）。关键点轨迹作为视觉帧与机器人动作之间的"中介表示"——人类手的运动类似机器人的末端执行器运动，使得从人类视频学到的运动先验可以平滑迁移到机器人动作预测。(3) **ActionVAE**将动作序列编码为紧凑潜在向量，降低自回归生成中的序列长度和误差累积。

**Controllable Simulation（可控模拟）**：RynnVLA-001 的推理流程是：给定当前观测图像和自然语言指令 → 视觉编码器提取特征 → 自回归生成动作潜在向量序列 → ActionVAE 解码器将潜在向量还原为连续动作序列。由于 ActionVAE 将动作压缩为 4-8 个潜在 token（而非原始动作的 50-200 个 token），推理速度大幅提升，且潜在空间的平滑先验自然确保了生成动作的时序平滑性。

## 代码实现要点

代码已在 GitHub 开源（alibaba-damo-academy/RynnVLA-001）。核心组件：(1) Image-to-Video 生成模型（基于 VideoGPT 架构）；(2) 关键点轨迹预测头（并行于视频帧预测）；(3) ActionVAE 编码器/解码器（4-8 维潜在空间 + KL 正则化）；(4) 两阶段预训练管道。预训练数据为 12M 第一视角操作视频，涵盖多种日常操作和工具使用场景。下游微调在标准机器人数据集（LIBERO、CALVIN 等）上完成。关键实现细节：ActionVAE 的潜在维度（4-8）、关键点轨迹的帧数（8-16 帧）、预训练与微调的数据配比。

## 关键创新点

- **人类演示视频预训练赋能 VLA**：首次系统性证明大规模人类第一视角操作视频的生成式预训练能有效提升机器人 VLA 性能
- **ActionVAE 动作压缩**：将连续动作序列压缩为低维潜在向量，降低生成复杂度并确保平滑性
- **关键点轨迹作为视觉-动作桥接**：人类手部关键点轨迹作为中间表示，自然连接视觉预测（看人怎么做）和动作预测（机器人怎么做）
- **两阶段渐进式预训练**：从纯视觉预测渐进到视觉+轨迹联合预测，训练稳定且高效
- **SOTA 微调性能**：在同量级下游数据上实现最优的微调效果

## 代表性结果

在 LIBERO、CALVIN 等标准机器人操作基准上，RynnVLA-001 在下游微调后的成功率均超越当时同等规模的 SOTA VLA 模型。ActionVAE 的消融实验表明，使用潜在空间压缩使动作生成 token 数减少了 80% 以上，同时动作平滑性改善约 30%（通过 jerk 指标衡量）。两阶段预训练的消融实验确认了关键点轨迹预测阶段对最终性能的关键贡献——移除该阶段后性能下降约 10-15%。对预训练数据量的 scaling 分析显示，随着预训练数据从 1M 增加到 12M，下游微调性能持续提升，揭示了人类操作视频预训练的规模化潜力。
