---
title: "PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling"
design: "RealPlay"
arxiv: https://arxiv.org/abs/2506.18901
github: https://github.com/wenqsun/Real-Play
---

# RealPlay: PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling

::: info 论文信息
- **Design**: RealPlay
- **论文全称**: PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling
- **arXiv**: [https://arxiv.org/abs/2506.18901](https://arxiv.org/abs/2506.18901)
- **GitHub**: [https://github.com/wenqsun/Real-Play](https://github.com/wenqsun/Real-Play)
:::

## 核心思想

RealPlay 是卡内基梅隆大学提出的将世界模型用于"真实游戏中的交互式生成框架。核心创新是将世界模型定位为"可玩的游戏引的——用户通过操控输入（键盘、手柄）与生成的视频世界实时交互，世界模型根据用户动作实时生成游戏场景的下一个画面。这不仅是一个预测模型，更是一个完整的交互式环境。

RealPlay 的关键贡献是一可玩动作为一个独立的评估维度引入世界模型：世界模型不仅要准确预测，还要能快速、稳定地响应用户输入。RealPlay 提出的交互延迟、动作响应准确率等指标补充了传统一FID/FVD 等视觉质量指标。

## 技术架。

**Vision Encoding（视觉编码）**：使用VQ-GAN 将游戏帧编码为离的token，支持实时编解码。

**Knowledge Learning（知识学习）**：Action-conditioned autoregressive Transformer——在 token 空间中自回归预测下一帧。动作（离散按键）作为token vocabulary 中的特殊 token，与 visual token 交织。使用causal attention 实现快速的条件化。

**Controllable Simulation（可控模拟）**：游戏引擎式交互——用户按按键model 自回归生成响应帧 的显示给用于使用户再次按键。要求端到端延迟 < 100ms。

## 代码实现要点

代码开源在 [mcfrank16/RealPlay](https://github.com/mcfrank16/RealPlay)。基准VQ-GAN + Autoregressive Transformer + Web-based frontend。在 VizDoom、Smoke Squadron 等游戏上评估。

## 关键创新。

1. **可玩性作为指标*：交互延迟、动作响应的定量评估
2. **实时交互生成**：端到端 < 100ms 的生成延。
3. **Token-vocabulary 动作**：动作为特殊 token 融入自回。
4. **游戏引擎替代**：世界模型作为完整交互式环境

## 代表性结。

在VizDoom aSmoke Squadron 上，RealPlay 在保持可玩画面质量的同时实现了交互式帧率自0-30 FPS）。动作响应准确率 > 85%（用户按键后生成合理的对应画面）。延时满足交互体验要求，用户研究表明参与者难以区分真实游戏和 AI 生成的游戏。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
