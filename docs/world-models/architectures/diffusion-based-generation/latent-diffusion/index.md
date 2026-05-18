---
title: "Latent Diffusion World Models - 隐空间扩散世界模型"
---

# Latent Diffusion World Models - 隐空间扩散世界模型
::: tip 范式定义
Latent Diffusion 范式将世界模型构建为一个**在隐空间中运行的扩散去噪过程**。核心思想是：给定历史帧和动作条件，模型在 VAE 编码得到的隐空间中进行多步扩散去噪，最终解码出高清的未来视频帧。数学上可表示为学习逆向扩散过程 $p_\theta(x_{t+1} | x_{0:t}, c_t) = \int p_\theta(z_{t+1}^{0:K} | x_{0:t}, c_t) dz$，其中 $z^{0:K}$ 是 K 步扩散路径上的隐变量。
:::

## 范式本质与优势

Latent Diffusion 范式的核心优势在于**生成质量**。与自回归范式逐帧预测不同，扩散模型通过多步迭代去噪，能够生成细节丰富、视觉逼真的视频帧。这使得 Latent Diffusion 成为当前视频生成和世界模型领域中**视觉效果最优**的范式。

## 专题笔记

- [DiT 控制方法综述：ControlNet 路线与 Cosmos-Transfer2.5](dit-control-methods-and-cosmos-transfer2-5): 从 DiT 条件注入范式、ControlNet 的 Transformer 化实现，到 Cosmos-Transfer2.5 的代码级拆解

## 论文列表

- [3DPEWM](3dpewm): 3DPEWM: A 3D Driving World Model for Autonomous Driving
- [ABOT-PhysWorld](abot-physworld): ABOT-PhysWorld: A World Model for Embodied Intelligence
- [Aether](aether): Aether: A World Model with Diffusion Transformer
- [AirScape](airscape): AirScape: A World Model for Autonomous Driving
- [BEVWorld](bevworld): BEVWorld: A World Model for Autonomous Driving
- [C-3](c-3): C-3: A World Model for Autonomous Driving
- [CoME](come): CoME: A World Model for Embodied Intelligence
- [Cosmos-Predict2.5](cosmos-predict2-5): 统一 Text/Image/Video 条件的世界预测模型
- [Cosmos Auto Multiview Training](cosmos-auto-multiview-training): 以 Waymo 后训练为例的 Auto Multiview 全流程实操
- [Cosmos-Transfer2.5](cosmos-transfer2-5): 基于多控制信号的条件世界生成
- [Cosmos-Transfer1](cosmos-transfer1): Cosmos-Transfer1: A World Model for Autonomous Driving
- [Cosmos](cosmos): Cosmos: A World Model for Embodied Intelligence
- [Cosmos Curator](cosmos-curator): 视频数据策划与后训练数据工厂
- [Cosmos Dataset Search](cosmos-dataset-search): 面向视频世界数据的语义检索与场景挖掘
- [Cosmos Evaluator / Guardrail](cosmos-evaluator-guardrail): 质量评估、物理检查与安全过滤
- [Delphi](delphi): Delphi: A World Model for Autonomous Driving
- [DiST-4D](dist-4d): DiST-4D: A World Model for Autonomous Driving
- [DoME](dome): DoME: A World Model for Embodied Intelligence
- [DreamDrive](dreamdrive): DreamDrive: A World Model for Autonomous Driving
- [DreamGen](dreamgen): DreamGen: A World Model for Embodied Intelligence
- [DreamWorld](dreamworld): DreamWorld: A World Model for Embodied Intelligence
- [Drive-WM](drive-wm): Drive-WM: A World Model for Autonomous Driving
- [DriveDreamer-2](drivedreamer-2): DriveDreamer-2: A World Model for Autonomous Driving
- [DriveDreamer](drivedreamer): DriveDreamer: A World Model for Autonomous Driving
- [DrivingDiffusion](drivingdiffusion): DrivingDiffusion: A World Model for Autonomous Driving
- [EDELINE](edeline): EDELINE: A World Model for Autonomous Driving
- [Ego-PM](ego-pm): Ego-PM: A World Model for Embodied Intelligence
- [EgoWM](egowm): EgoWM: A World Model for Embodied Intelligence
- [EVA](eva): EVA: A World Model for Embodied Intelligence
- [FlowDreamer](flowdreamer): FlowDreamer: A World Model for Embodied Intelligence
- [GAIA-2](gaia-2): GAIA-2: A Generative World Model for Autonomous Driving
- [GAIA-3](gaia-3): GAIA-3: A Generative World Model for Autonomous Driving
- [GenAD](genad): GenAD: A World Model for Autonomous Driving
- [Genesis](genesis): Genesis: A World Model for Embodied Intelligence
- [GenEx](genex): GenEx: A World Model for Embodied Intelligence
- [GeoDrive](geodrive): GeoDrive: A World Model for Autonomous Driving
- [GrndCtrl](grndctrl): GrndCtrl: A World Model for Autonomous Driving
- [GWM](gwm): GWM: A World Model for Autonomous Driving
- [Hydra](hydra): Hydra: A World Model for Embodied Intelligence
- [Imagine-2-Drive](imagine-2-drive): Imagine-2-Drive: A World Model for Autonomous Driving
- [Inspatio-WorldFM](inspatio-worldfm): Inspatio-WorldFM: A World Model for Embodied Intelligence
- [LADI-WM](ladi-wm): LADI-WM: A World Model for Embodied Intelligence
- [LangToMo](langtomo): LangToMo: A World Model for Embodied Intelligence
- [Learning-to-Drive](learning-to-drive): Learning-to-Drive: A World Model for Autonomous Driving
- [M3ARSSynth](m3arssynth): M3ARSSynth: A World Model for Autonomous Driving
- [MaskGWM](maskgwm): MaskGWM: A World Model for Autonomous Driving
- [MEWM](mewm): MEWM: A World Model for Embodied Intelligence
- [MiND](mind): MiND: A World Model for Embodied Intelligence
- [NeoVerse](neoverse): NeoVerse: A World Model for Autonomous Driving
- [OccSora](occsora): OccSora: A World Model for Autonomous Driving
- [OLAF-World](olaf-world): OLAF-World: A World Model for Embodied Intelligence
- [Panacea](panacea): Panacea: A World Model for Autonomous Driving
- [PEWM](pewm): PEWM: A World Model for Embodied Intelligence
- [PhyGenesis](phygenesis): PhyGenesis: A World Model for Embodied Intelligence
- [PlayWorld](playworld): PlayWorld: A World Model for Embodied Intelligence
- [RealPlay](realplay): RealPlay: A World Model for Embodied Intelligence
- [ReWorld](reworld): ReWorld: A World Model for Embodied Intelligence
- [Robot4DGen](robot4dgen): Robot4DGen: A World Model for Embodied Intelligence
- [RoboTransfer](robotransfer): RoboTransfer: A World Model for Embodied Intelligence
- [StateSpaceDiffuser](statespacediffuser): StateSpaceDiffuser: A World Model for Embodied Intelligence
- [Tesseract](tesseract): Tesseract: A World Model for Embodied Intelligence
- [UniPi](unipi): UniPi: A World Model for Embodied Intelligence
- [UWM](uwm): UWM: A World Model for Embodied Intelligence
- [Video-Policy](video-policy): Video-Policy: A World Model for Embodied Intelligence
- [ViMo](vimo): ViMo: A World Model for Embodied Intelligence
- [VPP](vpp): VPP: A World Model for Embodied Intelligence
- [WorldCache](worldcache): WorldCache: A World Model for Embodied Intelligence
- [WorldForge](worldforge): WorldForge: A World Model for Embodied Intelligence
- [WorldGPT](worldgpt): WorldGPT: A World Model for Embodied Intelligence
- [WorldSplat](worldsplat): WorldSplat: A World Model for Embodied Intelligence
- [WoVoGen](wovogen): WoVoGen: A World Model for Embodied Intelligence
- [WristWorld](wristworld): WristWorld: A World Model for Embodied Intelligence

## 相关分类

- 🌍 [世界模型架构总览](/world-models/architectures/)
- 📚 [公共参考资源](/world-models/ecology/)
- 🎬 [视频生成后训练](/video-generation/)
