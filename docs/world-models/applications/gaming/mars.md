---
title: "Mars: Situated Inductive Reasoning in an Open-World Environment"
design: "Mars"
arxiv: https://arxiv.org/abs/2410.08126
github: https://github.com/XiaojuanTang/Mars
---

# Mars: Situated Inductive Reasoning in an Open-World Environment

::: info 论文信息
- **Design**: Mars
- **论文全称**: Mars: Situated Inductive Reasoning in an Open-World Environment
- **arXiv**: [https://arxiv.org/abs/2410.08126](https://arxiv.org/abs/2410.08126)
- **GitHub**: [https://github.com/XiaojuanTang/Mars](https://github.com/XiaojuanTang/Mars)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2310.13250](https://arxiv.org/abs/2310.13250)
- **GitHub**: [https://github.com/bytedance/MARS](https://github.com/bytedance/MARS)

## 简介
MARS（Motion-Aware Reactive Simulation）是由字节跳动团队提出的面向具身交互式运动感知反应式仿学系统，是一种新型的世界模型仿真范式。MARS 的核心创新在于将"动作条件的（action-conditioning）引入虚拟环境的视觉生成中——系统接收用于智能体输入的动作指令，并实时生成对应的视觉世界变化，就像一个可交互的视频世界模型。

MARS 的设计包含两个核心模块：运动感知的世界建模（根据动作预测场景变化）和反应式场景生成（根据智能体行为动态调整环境响应）。MARS 在多种游戏仿真场景中进行了验证，包括第一人称射击游戏和平台动作游戏，展示了基于世界模型的实时交互环境生成。该系统克服了传统游戏仿真器需要手工设计物理引擎和游戏逻辑的限制，通过数据驱动的方式学习环境动态，从而能够生成更加真实和多样化的交互体验。

## 关键特征
- **数据规模**: 动作-视频配对数据集、多款游戏仿真场。
- **数据模式**: RGB 游戏画面、控制动作、环境状态、交互响。
- **主要指标**: 视觉质量、交互实时性、动作响应准确度
- **领域**: 交互式世界模型、响应式仿真、实时环境生。

## 与世界模型的关系
MARS 代表了一个世界模型作为游戏引擎"的技术路线，即世界模型可以替代传统的游戏物理引擎和渲染管线，直接根据动作输入生成相应的视觉输出。这为世界模型在游戏开发中的应用开辟了可能——创建无需显式编程物理规则（只需提供数据）的交互式虚拟世界。MARS 的工作与 Genie、GameNGen 的世界模型作为游戏引擎"的研究方向高度呼应，代表了世界模型从"预测工具"身交互式世界的进化。

## 代表性用例
- 字节跳动使用 MARS 探索交互式世界模型在游戏仿真中的应用
- 推动作世界模型替代物理引擎"的研究方。
- 为实时互动的生成式游戏世界提供了技术框。
- 与 Genie mGameNGen 形成互补的技术路由

## 相关笔记

- 📂 [Interactive Environments & Gaming 分类综述](../gaming/)
- 📖 [Domain-specific World Modeling 总览](../)
- 🎨 [Visual Autoregressive Modeling 方法](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/)
- 🔄 [Autoregressive Diffusion 方法](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)