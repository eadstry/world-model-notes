---
title: "Playable Game Generation"
design: "PlayGen"
arxiv: https://arxiv.org/abs/2412.00887
github: https://github.com/GreatX3/Playable-Game-Generation
---

# PlayGen: Playable Game Generation

::: info 论文信息
- **Design**: PlayGen
- **论文全称**: Playable Game Generation
- **arXiv**: [https://arxiv.org/abs/2412.00887](https://arxiv.org/abs/2412.00887)
- **GitHub**: [https://github.com/GreatX3/Playable-Game-Generation](https://github.com/GreatX3/Playable-Game-Generation)
:::

## 学习笔记

## 核心思想

PlayGen 直面 AIGC 从文本到图像、视频生成之后的终极挑战的*可玩游戏的生成*。游戏生成有着严格的要求——实时交互、高视觉质量、准确模拟游戏机制——现有方法往往在实时性上不足或无法精确模拟交互机制。
PlayGen 提出了一个完整方案，包含三个核心组成部分类1) **游戏数据生成**——系统性地创建训练数据集2) 基于**自回中DiT 的扩散模型*——能够以前一帧和用户动作为条件生成下一帧，实现闭环交互式3) 全面的*可玩性评估框的*——系统性地量化游戏生成的质量。
在知名的 2D 视3D 游戏上验证后，PlayGen 在*NVIDIA RTX 2060** 上实现了超过 1000 帧的实时交互，同时保持了足够的视觉质量和精确的交互机制模拟。这一成果证明，即使在中端消费在GPU 上，AI 生成的交互式游戏也可以在质量和性能之间取得实用平衡。
## 技术架。
**Vision Encoding（视觉编码）**：自回归 DiT 扩散模型逐帧生成游戏画面。模型接收前一帧（或前几帧）和当前用户动作作为输入，通过扩散过程生成下一帧的视觉内容。
**Knowledge Learning（世界知识学习）**：在游戏数据上训练，学习游戏机制——包括角色运动规则、碰撞检测结果、场景切换逻辑等。自回归训练方式使模型隐式地学会游戏的状态转移函数。
**Controllable Simulation（可控推演）**：用户动作（键盘/手柄输入）作为扩散模型的条件信号控制游戏进程。闭环自回归生成确保每一帧都是对用户输入的实时响应。在 RTX 2060 上验证了 1000+ 帧的实时可玩性。
## 代码实现要点

- 自回归DiT 扩散模型，开源在 GreatX3/Playable-Game-Generation
- 游戏数据生成流程：系统化采集训练数据
- 可玩性评估框架：多维度量化游戏生成质量- 实时推理：RTX 2060 上支持1000+ 帧交互- 覆盖 2D 的3D 游戏的验。
## 关键创新。
- 首个系统性解决可玩游戏生成的工作
- 自回归DiT 架构实现闭环交互游戏生成
- 全面的可玩性评估框架- 在消费级 GPU（RTX 2060）上实现实时交互式000+ 帧）
- 覆盖 2D 的3D 游戏的多游戏验证

## 代表性结。
- 消费的GPU（RTX 2060）实时交互1000+ 互- 足够的视觉质量和精确的交互机制模型- 在知识2D 的3D 游戏上验证- 可玩性评估框架的量化指标


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
