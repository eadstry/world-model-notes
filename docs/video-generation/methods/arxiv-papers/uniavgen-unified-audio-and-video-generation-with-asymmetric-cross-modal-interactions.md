---
title: "UniAVGen: Unified Audio and Video Generation with Asymmetric Cross-Modal Interactions"
arxiv: https://arxiv.org/abs/2511.03334
github: https://github.com/MCG-NJU/Sora2-mini
website: https://mcg-nju.github.io/UniAVGen/
venue: CVPR 2026
year: 2025
---

# UniAVGen: Unified Audio and Video Generation with Asymmetric Cross-Modal Interactions

::: info 论文信息
- **Venue**: CVPR 2026
- **arXiv**: [https://arxiv.org/abs/2511.03334](https://arxiv.org/abs/2511.03334)
- **GitHub**: [https://github.com/MCG-NJU/Sora2-mini](https://github.com/MCG-NJU/Sora2-mini)
- **Website**: [https://mcg-nju.github.io/UniAVGen/](https://mcg-nju.github.io/UniAVGen/)
:::

## 学习笔记

### 核心贡献
- 提出 UniAVGen，一个统一的音视频联合生成框架，通过双分支 DiT 架构构建跨模态潜空间，在单一模型中支持联合音视频生成与续写、视频配音、音频驱动视频合成等多种任务
- 提出非对称跨模态交互（Asymmetric Cross-Modal Interaction）机制，实现双向、时间对齐的跨注意力，保障精准的时空同步和语义一致性
- 引入人脸感知调制（Face-Aware Modulation）模块，在跨模态交互过程中动态聚焦面部等关键区域，提升唇形同步质量
- 提出模态感知无分类器引导（Modality-Aware CFG）策略，在推理阶段显式放大跨模态关联信号，增强生成保真度
- 仅使用 130 万训练样本（对比现有方法的 3010 万），在音视频同步、音色一致性和情感一致性上取得整体优势

### 方法细节
- 整体架构基于双分支联合合成设计，两个并行的 DiT（扩散 Transformer）分别负责视频和音频的建模，共享一个统一的跨模态潜空间
- 非对称跨模态交互模块实现视频→音频和音频→视频两个方向的时间对齐交叉注意力，由于视觉和听觉模态的信息密度不同，采用非对称设计来适配各自特性
- 人脸感知调制模块在交叉注意力中引入动态权重，根据视频帧的人脸区域激活程度调节音频分支对视觉特征的关注力度，从而强化唇形区域的跨模态对齐
- 训练阶段使用联合扩散目标，同时优化视频和音频的去噪损失；推理时通过模态感知 CFG 策略对音频和视频的引导强度进行独立调节，增强跨模态一致性
- 支持多种推理模式切换：联合生成（同时输出音视频）、视频到音频（配音）、音频到视频（音频驱动生成）以及音视频续写，共享同一组模型权重

### 关键发现
- 非对称跨模态交互设计相比对称交互能显著提升唇形同步精度和语义一致性，验证了视觉-听觉模态信息量不对称的假设
- Face-Aware Modulation 在人脸特写场景中提升尤为明显，有效减少了嘴部区域与语音不匹配的现象
- Modality-Aware CFG 在联合生成场景中比传统统一 CFG 策略更有效地平衡了视觉质量和音频质量，避免了模态间相互干扰
- 在仅 130 万训练样本的条件下，UniAVGen 在多项指标上超越使用 3010 万样本训练的对比方法，表明跨模态架构设计的有效性比数据规模更关键

### 方法归类
- **范式**: 扩散模型（双分支 DiT 联合生成）
- **关键技术**: 非对称跨模态交互、人脸感知调制、模态感知无分类器引导
- **适用场景**: 音视频联合生成与续写、自动配音（视频到音频）、音频驱动视频合成
