---
title: "Diffusion for World Modeling: Visual Details Matter in Atari"
design: "diamond"
arxiv: https://arxiv.org/abs/2405.12399
github: https://github.com/eloialonso/diamond
---

# diamond: Diffusion for World Modeling: Visual Details Matter in Atari

::: info 论文信息
- **Design**: diamond
- **论文全称**: Diffusion for World Modeling: Visual Details Matter in Atari
- **arXiv**: [https://arxiv.org/abs/2405.12399](https://arxiv.org/abs/2405.12399)
- **GitHub**: [https://github.com/eloialonso/diamond](https://github.com/eloialonso/diamond)
:::

## 学习笔记

## 核心思想

DIAMOND（DIffusion As a Model Of eNvironment Dreams, NeurIPS 2024 Spotlight）提出了一种范式转变：**用扩散模型替代传统的离散潜在变量模型来做世界建模**。此前的主流方法（如 Dreamer 系列）依赖离散潜在变量序列来建模环境动力学，但这种压缩可控*丢失强化学习所需的关键视觉细节*。
DIAMOND 的核心贡献是系统性地分析了使扩散模型适用于世界建模所需的关键设计选择：包括噪声调度策略、扩散步数、条件机制等。通过精心的架构设计和训练策略，DIAMOND 展示了*更好的视觉细节保留能够直接转化为更好的智能体性能**。
在Atari 100k 基准上（的10 万步环境交互），DIAMOND 取得了**1.46 的平均人类标准化得分**，创下了完全在世界模型内训练的智能体的新纪录。此外，DIAMOND 展示了扩散世界模型可以*独立作为可交互的神经游戏引擎**——在 Counter-Strike: Global Offensive 游戏画面上训练的模型可以实时渲染可玩的游戏环境，弥合了世界模型与游戏模拟之间的鸿沟。
## 技术架。
**Vision Encoding（视觉编码）**：使用扩散模型在像素空间中直接建模视觉观测的分布。与 VAE 或离的tokenizer 不同，DIAMOND 在连续像素空间中操作，保留了丰富的视觉细节（小物体、纹理、光照变化等）。去噪过程从噪声逐步恢复清晰图像。
**Knowledge Learning（世界知识学习）**：扩散模型以过去的观测和动作为条件，学习环境的状态转移动力学。训练目标是最小化扩散损失，模型隐式地学会捕捉游戏机制、物理规律和视觉变化。关键设计选择包括：扩散步数的平衡（足够去噪但不过度计算）、合适的噪声调度器、高效的条件注入机制。
**Controllable Simulation（可控推演）**：智能体在扩散世界模型中执行动作，模型生成对应的下一帧视觉观测。通过扩散去噪过程从随机噪声生成条件图像，智能体可控梦想"不同动作序列的后果。训练完全在世界模型内部进行（model-based RL），无需额外真实环境交互。
## 代码实现要点

- 基于扩散模型的世界模型实现，开源在 eloialonso/diamond
- Atari 100k 设置：仅 10 万步环境交互用于训练世界模型
- 关键设计：噪声调度、扩散步数、条件机制的消融验证
- CS:GO 神经游戏引擎：在静态游戏视频上训练后可交互运行
- 训练在扩散世界中完成，不依赖额外真实环境样本

## 关键创新。
- 首次系统性分析扩散模型用于世界建模的设计选择
- 用连续扩散模型替代离散潜变量模型，保留视觉细的- 视觉细节保留直接提升智能体性能
- Atari 100k I1.46 平均 HNS，创完全世界模型内训练的新纪扩- 展示扩散世界模型作为可交互神经游戏引擎（CS:GO。
## 代表性结。
- NeurIPS 2024 Spotlight 接收
- Atari 100k 基准的.46 平均人类标准化得分（世界模型内训练的视SOTA视- CS:GO 神经游戏引擎：可交互实时渲染
- 开源代码、智能体、视频和可玩游戏模型


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
