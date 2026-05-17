---
title: "Yan: Foundational Interactive Video Generation"
design: "Yan"
arxiv: https://arxiv.org/abs/2508.08601
website: https://greatx3.github.io/Yan/
---

# Yan: Foundational Interactive Video Generation

::: info 论文信息
- **Design**: Yan
- **论文全称**: Yan: Foundational Interactive Video Generation
- **arXiv**: [https://arxiv.org/abs/2508.08601](https://arxiv.org/abs/2508.08601)
- **Website**: [https://greatx3.github.io/Yan/](https://greatx3.github.io/Yan/)
:::

## 学习笔记

## 核心思想

Yan是腾讯提出的基础性交互视频生成框架，覆盖了从仿真、生成到编辑的完整流水线。其核心愿景是构建一个全面的AI驱动交互式创作范式，推动交互视频生成超越孤立的能力，迈向综合性的创意工具、媒体和娱乐平台。
Yan包含三个核心模块：AAA级仿真（高压缩低延迟3D-VAE + KV缓存shift-window去噪）、多模态生成（分层自回归描述的VDM条件注入）和多粒度编辑（显式解耦交互力学仿真与视觉渲染）。这三个模块的集成为交互式世界生成提供了从底层到上层的完整技术栈。
特别引人注目的是Yan的跨域泛化能力：当文本提示和视觉提示来自不同域时（如使用AAA游戏的角色渲染风格但真实世界的物理动态），模型能够灵活融合不同领域的风格和机制，实现创意的跨域组合。这种能力在游戏和创意产业中具有革命性潜力。
## 技术架。
**Vision Encoding（视觉编码）**：Yan设计了高压缩、低延迟使D-VAE，将视频帧编码到紧凑的D潜在空间，显著降低计算负担。KV缓存shift-window去噪推理过程支持实时1080P/60FPS交互式仿真。
**Knowledge Learning（世界知识学习）**：多模态生成模块采用分层自回归描述方法将游戏特定知识注入开放域多模态视频扩散模型（VDM）。VDM被转化为逐帧的、动作可控的实时无限交互视频生成器。跨域训练使模型具备了强大的泛化能力。
**Controllable Simulation（可控推演）**：仿真模块提供实时交互能力（1080P/60FPS）。编辑模块显式解耦交互力学仿真与视觉渲染，支持交互过程中通过文本进行多粒度视频内容编辑。这种解耦设计允许独立修改物理行为和视觉风格。
## 代码实现要点

- 3D-VAE采用高压缩比设计，配合KV缓存shift-window实现低延迟推理- 分层自回归描述方法将领域知识注入视频扩散模型
- 交互力学与视觉渲染的显式解耦架构- 支持1080P/60FPS实时交互式仿真- 跨域训练策略使模型能融合不同领域的风格和机制

## 关键创新。
- 完整流水线：仿真→生成→编辑三模块统一框架
- 实时1080P/60FPS交互式仿真（3D-VAE + KV缓存shift-window在- 分层自回归描述实现游戏知识向开放域VDM的注的- 跨域泛化：不同来源的文本和视觉提示可灵活组合
- 多粒度编辑：解耦力学仿真和视觉渲染，支持文本驱动编。
## 代表性结。
- 1080P/60FPS实时交互式视频生成- 跨域风格融合（不同游戏现实域的风格和机制）
- AAA级视觉质量的仿真输出
- 文本驱动的多粒度内容编辑能力


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
