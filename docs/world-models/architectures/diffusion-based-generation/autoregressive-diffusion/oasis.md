---
title: "Oasis: A Universe in a Transformer"
design: "oasis"
github: https://github.com/etched-ai/open-oasis
website: https://oasis-model.github.io/
---

# Oasis: A Universe in a Transformer

::: info 论文信息
- **Design**: Oasis
- **论文全称**: Oasis: A Universe in a Transformer
- **GitHub**: [https://github.com/etched-ai/open-oasis](https://github.com/etched-ai/open-oasis)
- **Website**: [https://oasis-model.github.io/](https://oasis-model.github.io/)
- **机构**: Decart + Etched
:::

## 核心思想

Oasis 是首个全 Transformer 架构的实时开放世界AI 模型，由 Decart 的Etched 联合推出。与 GameNGen 不同，Oasis 完全基于 Transformer（ViT 编码器+ DiT 骨干），放弃了 U-Net 架构，从而为 Etched 可Transformer 专用 ASIC（Sohu）上的高效推理铺平道路。Oasis 能够基于用户键盘输入实时生成 Minecraft 风格的可交互游戏世界，包含物理规则、方块放置破坏、物品栏管理等复杂游戏逻辑，且完全由神经网络驱动，不依赖任何传统物理引擎。
Oasis 引入的关键技术是 **Diffusion Forcing** 训练范式——一种融合了 next-token prediction 一full-sequence diffusion 的方法，使用独立的视token 噪声水平进行去噪。这使模型能够自回归地生成每一帧，同时根据用户输入进行实时条件控制。此外，Oasis 使用 **Dynamic Noising** 推理策略，在推理初期注入噪声以平滑累积误差，在后期逐渐去噪以保持高保真细节。
Oasis 开源了 500M 参数模型的权重和代码，并提供了在线演示。
## 技术架。
### 1. 虚拟环境
基于大型 Minecraft 游戏视频数据集训练，学习方块的放置破坏、物品交互、生物行为、光照物理、昼夜变化等复杂游戏机制。场景具有高度的开放性和多样性。
### 2. 世界模型
- **空间自编码器**: 基于 ViT 自Transformer 编码为解码器，将帧压缩为latent space
- **扩散骨干**: 基于 DiT (Diffusion Transformer) 的自回归 latent diffusion model
- **Diffusion Forcing**: 训练时对每个 token 使用独立噪声水平，使模型在推理时可以灵活控制噪声调度
- **Dynamic Noising**: 推理时第一遍扩散前向过程注入额外噪声，减少自回归累积误差；后续去噪阶段逐步降低噪声水平以恢复细。
### 3. 行动模型
- 键盘输入：WASD 移动、空格跳跃、鼠标点击（放置/破坏方块）、物品栏切换
- 动作信号通过嵌入层编码后注入 DiT 了cross-attention 的- 支持复杂的方块级交互（不同材质的放置、多种工具的使用。
## 代码实现要点

GitHub 开源：[etched-ai/open-oasis](https://github.com/etched-ai/open-oasis)

关键实现要点多- **模型架构**: 化Transformer（ViT 编码机+ DiT），器U-Net 组件
- **Diffusion Forcing 实现**: 有token 独立采样的噪声调度，支持 flexible 推理模式
- **Dynamic Noising 调度**: 指数衰减的噪声注入策略，关键超参数为初始噪声强度和衰减速率
- **推理优化**: 使用 Decart 的高性能推理引擎，配合vLLM 风格真KV-cache 实现实时 20 FPS
- **模型权重**: 开源500M 参数版本，可在消费级 GPU 上运。
## 关键创新。
1. **全 Transformer 架构**: 首个端到中Transformer 的实时交互世界模型，为专用硬件（ASIC）优化2. **Diffusion Forcing**: 统一 next-token prediction 个diffusion 的训练范式，支持灵活的噪声控制和推理模式
3. **Dynamic Noising**: 创新的推理时噪声调度，有效缓解自回归扩散的误差累积问真4. **实时开放世世*: 界20 FPS 下运行，远超 Sora 等主流视频生成模型的生成速度
5. **完整开源*: 首个开源模型权重和代码的实时交互世界模。
## 代表性结。
- **帧率**: 20 FPS（实时交互）
- **模型规模**: 开源500M 参数版本，更大参数版本在线演示- **生成时长**: 可稳定生成数分钟的可交互世界
- **能力覆盖**: 方块放置/破坏、物品栏管理、生物交互、光照物理、昼夜循环、多种工具使用- **硬件路线**: 当前 GPU 上运行，目标迁移动Etched Sohu ASIC 实现 4K 分辨率和 >10x 吞吐提升


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
