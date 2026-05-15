---
title: "Gamefactory: Creating new games with generative interactive videos"
design: "Gamefactory"
arxiv: https://arxiv.org/abs/2501.08325
github: https://github.com/KwaiVGI/GameFactory
---

# Gamefactory: Creating new games with generative interactive videos

::: info 论文信息
- **Design**: Gamefactory
- **论文全称**: Gamefactory: Creating new games with generative interactive videos
- **arXiv**: [https://arxiv.org/abs/2501.08325](https://arxiv.org/abs/2501.08325)
- **GitHub**: [https://github.com/KwaiVGI/GameFactory](https://github.com/KwaiVGI/GameFactory)
:::

## 学习笔记

## 核心思想

GameFactory（ICCV 2025 Highlight, 快手 VGI）探索了生成式视频在游戏开发中的革命性潜力：**通过生成式交互视频创造新游戏**。核心挑战是在动作可控的游戏视频生成中实现**场景泛化**——大多数现有方法只能控制固定风格和场景的游戏，无法创造全新的、多样化的游戏内容。

GameFactory 首先解决了动作可控性的基础问题：构建了 GF-Minecraft 数据集（无人类偏见的动作标注游戏视频），并开发了同时支持**键盘和鼠标输入**的精确动作控制模块。进一步扩展到支持**自回归生成**，实现无限长度的交互视频。

更关键的是，GameFactory 解决了**场景泛化的动作控制**这一核心瓶颈。通过利用预训练视频扩散模型的开放域生成先验，并设计多阶段训练策略——使用域适配器将游戏风格学习与动作控制解耦——确保动作控制学习不再绑定于特定游戏风格，从而实现跨场景的动作可控生成。

## 技术架构

**Vision Encoding（视觉编码）**：基于预训练视频扩散模型（如 Stable Video Diffusion 系模型）的视觉先验。域适配器在预训练模型之上添加，将开放域先验适配到游戏视频领域。自回归生成机制支持无限长度的视频输出。

**Knowledge Learning（世界知识学习）**：多阶段训练策略：第一阶段通过域适配器学习游戏风格（视觉外观、纹理、动态），第二阶段学习动作控制，两个阶段解耦确保动作控制不受特定风格限制。GF-Minecraft 数据集提供无偏见的动作-视频对。

**Controllable Simulation（可控推演）**：动作控制模块支持键盘（离散按键）和鼠标（连续移动/点击）的精确控制。自回归生成使视频可以无限延长。得益于场景-动作解耦，模型可以在训练时未见过的游戏场景中实现动作控制。

## 代码实现要点

- 基于预训练视频扩散模型 + 域适配器，开源在 KwaiVGI/GameFactory
- GF-Minecraft 数据集：无偏见的动作标注游戏视频
- 键盘+鼠标动作控制模块
- 自回归生成：无限长度交互视频
- 多阶段训练：风格学习与动作控制解耦

## 关键创新点

- 首个实现场景泛化的动作可控游戏视频生成
- 域适配器 + 多阶段训练解耦风格与动作控制
- GF-Minecraft 数据集：无偏见的动作-视频对齐数据
- 同时支持键盘和鼠标的精确动作控制
- 自回归机制实现无限长度交互视频生成

## 代表性结果

- ICCV 2025 Highlight 接收
- 开放域动作可控游戏视频生成
- 场景泛化：在新游戏风格和场景中实现动作控制
- 无限长度自回归交互视频
- 键盘+鼠标双模态精确动作控制
