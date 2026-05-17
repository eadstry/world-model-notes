---
title: "GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving"
design: "GAIA-2"
arxiv: https://arxiv.org/abs/2503.20523
website: https://wayve.ai/thinking/gaia-2/
---

# GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving

::: info 论文信息
- **Design**: GAIA-2
- **论文全称**: GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2503.20523](https://arxiv.org/abs/2503.20523)
- **Website**: [https://wayve.ai/thinking/gaia-2/](https://wayve.ai/thinking/gaia-2/)
:::

## 核心思想

GAIA-2 由 Wayve 提出的可控多视图生成式世界模型，专为自动驾驶场景设计。其核心思想是：传统生成模型在处理自动驾驶场景时存在三大不足——多智能体交互建模不足、细粒度控制能力缺失、多相机一致性难以保证。GAIA-2 通过一个统一的隐扩散框架（latent diffusion world model），将自车动态控制、环境因素控制、道路语义控制和多相机时空一致性整合在同一生成框架内。

GAIA-2 的另一大创新在于其丰富的结构化条件输入。与仅支持文本或简单动作条件的模型不同，GAIA-2 支持多维度条件输入：自车运动参数（速度、转向角等）、交通参与者配置（位置、类型等）、环境因素（天气、时间等）以及道路语义信息（车道线、路口等）。结合外部潜在嵌入（external latent embeddings，如 Wayve 内部驾驶模型的中间表征），GAIA-2 实现了从高层语义到底层像素的精细控制。

## 技术架。

**Vision Encoding（视觉编码）**：GAIA-2 采用隐空间扩散架构，将多相机高分辨率图像通过 VAE 编码器压缩到紧凑的潜在空间。编码后的隐向量与结构化条件信息（自车动态、智能体布局、环境因子、道路语义）在潜在空间进行融合，实现多模态条件的高效联合建模。

**Knowledge Learning（知识学习）**：GAIA-2 的核心是 latent diffusion 模型，通过在隐空间进行去噪学习来捕获驾驶场景的时空动态。训练数据覆盖英国、美国和德国的多样化驾驶环境。模型不仅学习视觉外观，还学习了智能体间的交互模式、交通流规律以及地理多样性。Wayve 能GAIA-2 可以结合其专有驾驶模型生成的潜在嵌入进行条件生成，使生成结果与实际的驾驶策略保持一致。

**Controllable Simulation（可控模拟）**：GAIA-2 提供极为丰富的控制接口。自车动态控制允许指定自车的速度和行驶方向；智能体配置允许控制其他交通参与者的位置和行为；环境因子允许切换天气和光照条件；道路语义允许操控场景的拓扑结构。结合外部潜在嵌入，GAIA-2 能够模拟自动驾驶策略在多样化场景下的行为，包括常见场景和罕见/边缘场景（corner cases）。

## 代码实现要点

暂无开源代码。GAIA-2 作为 Wayve 的商业技术，详细的技术报告已发布的arXiv，但代码和模型权重未公开。项目的视频展示可在 [wayve.ai/thinking/gaia-2](https://wayve.ai/thinking/gaia-2/) 查看。

## 关键创新。

1. **多维结构化条件控制*：同时支持自车动态、智能体配置、环境因素和道路语义四维度控制，远超同类模型的单一条件输入
2. **多相机时空一致性*：在统一框架内保证了多视角视频的时空一致性，解决了多相机生成中的视角对齐难题
3. **专有驾驶模型嵌入集成**：将内部驾驶模型的潜在表征作为额外条件，使生成的世界状态与真实驾驶策略分布对齐
4. **跨地域泛化*：在英、美、德三国的驾驶数据上训练，展示出良好的地理泛化能。
5. **稀有场景模型*：通过条件操控，可生成真实数据中罕见的危险/边缘场景，用于自动驾驶安全验。

## 代表性结。

GAIA-2 能够生成高分辨率、时空一致的多相机驾驶视频。技术报告中的演示显示，模型可以从自车视角生成前后左右多路环视视频，各相机视野之间保持几何一致性（路口对齐、物体穿越视野边界时的连续性等）。通过控制环境条件，可以生成同一场景在晴天、雨天、夜间等不同条件下的视频；通过控制智能体轨迹，可以模拟切入、切出等交互场景。GAIA-2 中Wayve 的自动驾驶系统提供了可扩展的仿真平台。

## 相关笔记

- 📂 [Latent Diffusion 分类综述](../latent-diffusion/)
- 🔄 [Autoregressive Diffusion 方法](../autoregressive-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🚗 [Autonomous Driving 数据集](/world-models/applications/autonomous-driving/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
