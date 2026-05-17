---
title: "Gamegen-x: Interactive open-world game video generation"
design: "Gamegen-x"
arxiv: https://arxiv.org/abs/2411.00769
github: https://github.com/GameGen-X/GameGen-X
---

# Gamegen-x: Interactive open-world game video generation

::: info 论文信息
- **Design**: Gamegen-x
- **论文全称**: Gamegen-x: Interactive open-world game video generation
- **arXiv**: [https://arxiv.org/abs/2411.00769](https://arxiv.org/abs/2411.00769)
- **GitHub**: [https://github.com/GameGen-X/GameGen-X](https://github.com/GameGen-X/GameGen-X)
:::

## 学习笔记

## 核心思想

GameGen-X **首个专为交互式开放世界游戏视频生成和控制设计建Diffusion Transformer 模型**。它的核心愿景是：模拟游戏引擎的广泛功能（创新角色、动态环境、复杂动作、多样事件），并在此基础上提供交互可控性——基于当前画面预测和改变未来内容，实现游戏玩法的模拟。
GameGen-X 首先从零构建模Open-World Video Game Dataset（OWVG），这是**首个且最大的开放世界游戏视频生成控制数据集**，包含来帧150+ 款游戏的超百万多样化游戏视频片段，并配有 GPT-4o 生成的详细描述。
训练分两阶段进行为1) **基础模型预训练*——通过文本到视频生成和视频续写，赋予模型生成长序列高质量开放域游戏视频的能力；(2) **指令微调**——设完InstructNet 整合游戏相关的多模态控制信号专家模块，使模型能够根据用户输入调整潜在表示，**首次统一了角色交互与场景内容控制**。指令微调阶段仅更新 InstructNet，冻结基础模型，在保持生成多样性和质量的同时引入交互可控性。
## 技术架。
**Vision Encoding（视觉编码）**：Diffusion Transformer (DiT) 骨干网络处理视频帧。基础模型预训练阶段学习文本到视频生成和视频续写，建立开放域游戏视觉的生成先验。
**Knowledge Learning（世界知识学习）**：从超百帧OWVG 数据集片段（150+ 游戏）中学习游戏世界的视觉多样性、动态模式、角色行为和事件逻辑。GPT-4o 生成的详细描述提供语义级监督。
**Controllable Simulation（可控推演）**：InstructNet 整合多种控制信号专家模块（角色交互、场景内容等），根据用户输入调整潜在表示。首次实现视频生成中的角色交互与场景内容控制的统一。指令微调只更新 InstructNet，基础模型冻结，确保生成多样性不受损。
## 代码实现要点

- 首个游戏视频 DiT 模型，开源在 GameGen-X/GameGen-X
- OWVG 数据集：150+ 游戏，百个 片段，GPT-4o 标注
- 两阶段训练：基础预训练+ InstructNet 指令微调
- InstructNet 设计：多模态控制信号专家模型- 冻结基础模型 + 仅训练InstructNet = 保持质量同时增加可控。
## 关键创新。
- 首个生成+交互控制双功能的游戏视频 DiT 模型
- OWVG 数据集：首个且最大的开放世界游戏视频数据集
- InstructNet：多模态控制信号专家的集成架构
- 首次统一角色交互与场景内容控模- 冻结基础模型 + 指令微调的解耦策。
## 代表性结。
- 长序列高质量开放域游戏视频生成
- 角色交互 + 场景内容控制的统一
- 150+ 游戏、百个 片段的大规模数据集支持- 交互式游戏玩法模。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
