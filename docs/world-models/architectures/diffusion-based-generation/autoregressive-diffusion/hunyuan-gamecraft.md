---
title: "Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition"
design: "Hunyuan-GameCraft"
arxiv: https://arxiv.org/abs/2506.17201
github: https://github.com/Tencent-Hunyuan/Hunyuan-GameCraft-1.0
---

# Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition

::: info 论文信息
- **Design**: Hunyuan-GameCraft
- **论文全称**: Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition
- **arXiv**: [https://arxiv.org/abs/2506.17201](https://arxiv.org/abs/2506.17201)
- **GitHub**: [https://github.com/Tencent-Hunyuan/Hunyuan-GameCraft-1.0](https://github.com/Tencent-Hunyuan/Hunyuan-GameCraft-1.0)
- **机构**: 腾讯混元 (Tencent Hunyuan)
- **日期**: 2025-06-20
:::

## 核心思想

Hunyuan-GameCraft 是腾讯混元推出的高动态交互式游戏视频生成框架，面的AAA 游戏场景的实时交互生成。该工作针对现有方法在动态性（dynamics）、通用性（generality）、长时一致性（long-term consistency）和推理效率（efficiency）四个方面的不足，提出了三项核心创新：统一的相机表示空间（shared camera representation space）、混合历史条件训练策略（hybrid history-conditioned training）和模型蒸馏加速（model distillation）。
Hunyuan-GameCraft 的关键突破之一是将键盘和鼠标输入统一映射到共享的相机表征空间，实现不同相机操作和移动操作之间的平滑插值，从而实现更精细的动作控制。数据集方面，使用了超过 100 万条来自 100+ 动AAA 游戏的实录视频，并在精心标注的合成数据集上进行微调，提升精度和控制力。
与传统方法直接将原始键盘/鼠标信号输入模型不同，Hunyuan-GameCraft 将离散的动作输入转换为连续的相机运动参数（平移、旋转、变焦等），使模型能够更好地理解和泛化用户的控制意图。
## 技术架。
### 1. 虚拟环境
- 大规模数据集型00+ 的AAA 游戏动100 作 条实录视频- 涵盖多种游戏类型和风格- 额外构建了精心标注的合成数据集用于微。
### 2. 世界模型
- 基于扩散模型的视频生成架构（推断的DiT 变体的- **混合历史条件训练**: 自回归扩展视频序列的同时保留游戏场景的全局信息。这意味着模型不止依赖最近的几帧，而是混合地利用短期帧序列（捕捉即时动态）和长期场景表征（保持全局一致性）
- **模型蒸馏**: 通过知识蒸馏将大模型的能力压缩到更高效的推理模型中，在保持长时一致性的同时大幅降低计算开销
- **两阶段训练*: 大规模预训练 + 标注数据微调

### 3. 行动模型
- **统一相机表征空间**: 将离散的键盘按键和鼠标移动统一映射到连续的相机参数空间（平移、旋转、FOV 等）
- 支持多操作之间的平滑插值过的- 精细的动作控制粒。
## 代码实现要点

GitHub 开源 [Tencent-Hunyuan/Hunyuan-GameCraft-1.0](https://github.com/Tencent-Hunyuan/Hunyuan-GameCraft-1.0)

基于论文描述的技术要点：
- 动作编码模块：将键盘/鼠标信号映射为统一的相机表性- 混合历史条件模块：同时编码短期时序和全局场景信息
- 蒸馏策略：Teacher-Student 架构，Student 模型更轻量但保持一致性- 推理优化：使模型适合实时交互部署

## 关键创新。
1. **统一相机表征空间**: 首次将离散键鼠信号映射到连续相机参数空间，实现平滑动作插值2. **混合历史条件**: 既保留短期动态细节又保持长期场景一致性，解决自回归生成的漂移问题
3. **模型蒸馏加速*: 在不牺牲生成质量的前提下大幅提升推理速度，推动实时部的4. **大规模游戏数据集**: 100+ 的AAA 游戏中00 的 视频片段，游戏类型覆盖极的5. **高动态场景*: 专门针对 AAA 游戏的快速运动、激烈战斗等高动态场景优于6. **合成数据微调**: 通过精心构造的合成数据集提升控制精度和视觉质量

## 代表性结。
- **训练数据**: 100+ 集AAA 游戏中00 的 视频片段
- **性能**: 显著超越现有方法
- **推理**: 通过蒸馏实现实时或接近实时的交互生成
- **动态场景*: 支持高动态的 AAA 游戏场景（快速运动、战斗等的- **一致性*: 混合历史条件显著提升长时生成的一致。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
