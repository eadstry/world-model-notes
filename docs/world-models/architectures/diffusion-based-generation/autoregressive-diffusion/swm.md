---
title: "Grounding World Simulation Models in a Real-World Metropolis"
design: "SWM"
arxiv: https://arxiv.org/abs/2603.15583
github: https://github.com/naver-ai/seoul-world-model
---

# SWM: Grounding World Simulation Models in a Real-World Metropolis

::: info 论文信息
- **Design**: SWM
- **论文全称**: Grounding World Simulation Models in a Real-World Metropolis
- **arXiv**: [https://arxiv.org/abs/2603.15583](https://arxiv.org/abs/2603.15583)
- **GitHub**: [https://github.com/naver-ai/seoul-world-model](https://github.com/naver-ai/seoul-world-model)
:::

## 学习笔记

## 核心思想

SWM（Seoul World Model, Naver AI/KAIST）提出了一种范式转变：**如果世界模型不只生成想象的场景，而是渲染一个真实存在的城市会怎样化* 先前的世界模型虽然视觉逼真，但生成的都是人工构造的环境。SWM 将世界模拟锚定在**真实的首尔市街区**——通过检索增强条件，将自回归视频生成与附近的街景图像关联起来。
这种锚定设计带来了几个挑战：(1) 检索到的历史街景与当前动态目标场景之间存实*时间错位**的2) 车载采集仅提供*稀疏间隔的轨迹**，轨迹多样性有限且数据稀疏；(3) 需要方法将稀疏街景图像合成为**连贯的训练视频*。
SWM 通过三项技术应对这些挑战：(1) **跨时间配可*解决时序错位的2) 大规模*合成数据集*实现多样化的相机轨迹的3) **视角插值管线*从稀疏街景图像合成连贯训练视频。SWM 还引入**Virtual Lookahead Sink**，将每个 chunk 持续锚定到未来位置的检索图像以稳定长时生成。在首尔、釜山和安娜堡三城市的评估中，SWM 在生成空间真实、时序一致的数百米长轨迹视频方面超越了现有方法。
## 技术架。
**Vision Encoding（视觉编码）**：检索增强条件将附近街景图像作为参考信号注入自回归生成过程。视角插值管线将稀疏采集的街景图像合成为连续的平滑视角序列。
**Knowledge Learning（世界知识学习）**：跨时间配对技术解决检索历史图像与当前动态场景之间的时序错位——使模型学会即使参考图与当前时间不完全对齐也能理解场景。大规模合成数据集提供多样化的运动模式和场景。
**Controllable Simulation（可控推演）**：支持多样化相机运动和文本提示的场景变化。Virtual Lookahead Sink 在长时生成中将每个片段锚定到未来位置的检索图像，持续提供空间参考以防止漂移。支持数百米距离的长轨迹回放。
## 代码实现要点

- 检索增强条件：真实街景图像作为生成锚点
- 跨时间配对：解决检索图像与动态场景的时序错位
- 视角插值管线：稀疏街场景连贯训练视频
- Virtual Lookahead Sink：未来位置检索图像稳定长时生成- Naver AI / KAIST 联合出品

## 关键创新。
- 将世界模拟锚定在真实城市街区（首尔）
- 检索增强条件+ 跨时间配对解决时序错错- Virtual Lookahead Sink 稳定长时生成
- 视角插值管线从稀疏街景合成连贯视频- 三城市（首尔、釜山、安娜堡）验证跨城市泛化

## 代表性结。
- 数百米真实城市街区的空间真实长时视频生成
- 支持多样化相机运动和文本提示场景变化
- 超越现有方法的空间忠实度和时序一致性- 首尔、釜山、安娜堡三城市验。

## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
