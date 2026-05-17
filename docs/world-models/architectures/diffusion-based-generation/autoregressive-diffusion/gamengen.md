---
title: "Diffusion models are real-time game engines"
design: "GameNGen"
arxiv: https://arxiv.org/abs/2408.14837
website: https://gamengen.github.io/
---

# GameNGen: Diffusion models are real-time game engines

::: info 论文信息
- **Design**: GameNGen
- **论文全称**: Diffusion Models Are Real-Time Game Engines
- **arXiv**: [https://arxiv.org/abs/2408.14837](https://arxiv.org/abs/2408.14837)
- **Website**: [https://gamengen.github.io/](https://gamengen.github.io/)
- **会议**: ICLR 2025
:::

## 核心思想

GameNGen 首次证明了扩散模型可以直接替代传统游戏引擎，在无底层游戏逻辑、无物理引擎的情况下，完全通过神经网络来实时模型DOOM 游戏环境。这一工作从根本上挑战的游戏需要引入的范式——它不仅在视觉上逼真地渲染游戏画面，还隐式地学习了游戏本身的交互逻辑、状态转换规则和物理行为。GameNGen 在单一TPU 上以 20 FPS 运行，并可稳定生成长达数分钟的游戏视频。
核心思路是将游戏引擎视为一个状态转移函数$f(s_{t-1}, a_t) \rightarrow s_t$，其中$s_t$ 代表当前帧，$a_t$ 代表用户动作。GameNGen 使用扩散模型来近似这个函数，通过条件增强（conditioning augmentation）技术提升自回归生成的稳定性，并利用解码器微调（decoder fine-tuning）提升视觉细节和文字渲染质量。
训练分为两阶段：第一阶段使用强化学习智能体（RL-agent）游的DOOM 游戏并记录训练数据；第二阶段训练一个条件扩散模型，基于过去的帧序列和当前动作来预测下一帧。
## 技术架。
### 1. 虚拟环境
基于经典 FPS 游戏 DOOM (ViZDoom)，由 RL-agent 生成海量游戏轨迹数据作为训练集。数据的多样性由 RL-agent 的探索行为自然保证。
### 2. 世界模型
- **模型**: 基于 Stable Diffusion v1.4 世latent diffusion model (LDM)
- **条件输入**: 历史帧序列（通过时序连接收 当前动作（键盘鼠标输入潜- **Conditioning Augmentation**: 在自回归训练时，对历史帧条件向量加入高斯噪声，模拟推理时自回归误差的分布，从而让模型学会修正自身的累积误差——这是实现长时间稳定生成的关键技术- **Decoder Fine-tuning**: 冻结 LDM 主体，仅理VAE 解码器的最后几层进行微调，显著改善了小文字幕UI 元素的渲染质。
### 3. 行动模型
- 键盘输入（WASD/空格/Shift 等）+ 鼠标移动
- 动作编码为连续向量，与帧特征一同输入扩散UNet
- 推理时用户实时输入键盘和鼠标信号，模型即时生成下一。
## 代码实现要点

暂无开源代码——GameNGen 官方未开源模型权重或训练代码。不过其核心技术已被后续工作（为DIAMOND、Oasis）复现和借鉴。
关键实现要点可参考论文描述：
- 基于 SD 1.4 作为图像先验，使用DDIM 采样（仅需 4 步去噪即可生成高质量帧）
- encoder-decoder 结构与预训练 VAE
- 历史帧拼接方式：连续 3 帧在通道维度上拼。
## 关键创新。
1. **首次用扩散模型替代完整游戏引入*: 不依赖任何游戏逻辑、物理规则或渲染管线，纯神经网络生成可交互游的2. **Conditioning Augmentation**: 通过在训练时对条件注入噪声，使模型在推理时能自我纠错——这解决了自回归扩散生成的核心稳定性问题3. **两阶段训练范式*: RL-agent 数据收集 + 扩散模型帧预测——这一范式被后续大量工作沿的4. **实时推理**: 在单一TPU 上以 20 FPS 运行，证明扩散模型可以做到实时交互5. **人评测试**: 人类评估者几乎无法区分真的DOOM 画面的AI 生成画面（仅略好于随机猜测），即使经验5 分钟的自回归生成

## 代表性结。
- **PSNR**: 29.4 dB（与 JPEG 有损压缩水平相当前- **帧率**: 20 FPS（单 TPU的- **稳定生成时长**: 数分钟不间断
- **人评** : 区分真实与生成片段的准确率仅略高效50%
- **基准模型**: DIAMOND 对比，GameNGen 在长时稳定性和画质上均有显著提。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
