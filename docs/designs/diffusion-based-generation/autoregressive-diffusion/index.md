---
title: "Autoregressive Diffusion World Models — 自回归扩散世界模型"
---

# Autoregressive Diffusion World Models — 自回归扩散世界模型

::: tip 范式定义
Autoregressive Diffusion 是 Diffusion-based Generation 和 Sequential Generation **两种范式的交汇点**。它保留了自回归的序列结构（逐帧/逐块生成），但每一步不是一个 token 的预测，而是一个完整的**扩散去噪过程**——在自回归的框架内嵌入扩散的质量优势。
:::

## 为什么需要 AR + Diffusion 的融合？

纯粹的 Sequential Generation 和纯粹的 Diffusion-based Generation 各有致命弱点：

- **纯 AR**：误差累积严重，长程生成质量崩塌；token 化导致的离散化损失
- **纯 Diffusion**：虽然可并行生成多帧，但在需要严格控制帧间因果关系的场景（如游戏互动）中，一次性生成整个序列无法实现逐帧的条件响应

Autoregressive Diffusion 试图**同时解决这两个问题**：用自回归结构提供逐帧的条件控制能力，用扩散模型在每帧内部提供高质的生成质量。

形式上，自回归扩散世界模型学习以下条件分布：

$$
p(x_{t+1} | x_{0:t}, c_t) = \text{DiffusionDenoise}(x_{0:t}, c_t)
$$

其中每一步的生成都是一个完整的扩散去噪过程，以上一帧（或历史多帧）为条件。这可以看作是「用扩散模型替代 AR 模型中的单步预测器」。

## 核心代表工作

### GameNGen（2024, Google）

GameNGen 是自回归扩散 VWM 的**开山之作**。它的目标令人震撼：**用神经网络完全模拟经典游戏 DOOM 的运行逻辑**——不仅生成画面，还要保持游戏的交互逻辑、物理规则和关卡结构。

GameNGen 的核心架构：
- **Agent Training Phase**：首先训练一个 RL agent（使用 PPO）在 DOOM 中大量游玩，记录所有（观测，动作，下一观测）三元组
- **Diffusion Teacher**：使用记录的数据训练一个**条件扩散模型**——输入当前帧和动作，输出下一帧
- **自回归部署**：推理时，模型在自回归循环中运行——每一帧由扩散模型根据上一帧和当前动作生成

GameNGen 的技术突破点：
- **单步扩散**：每帧生成需要一个完整的扩散去噪过程，但 GameNGen 通过蒸馏和 DDIM 将去噪步数压缩到 4 步以内
- **条件帧的精细设计**：将上一帧以 concatenation 方式注入扩散 UNet，保证帧间连续性
- **长期一致性**：通过循环部署时的 teacher forcing 策略，实现了长达数分钟的游戏画面生成而画面质量没有显著退化

GameNGen 最重要的启示是：**一个足够大的扩散模型真的可以从视频数据中学会一个交互式世界**，包括其中隐含的物理规则、关卡逻辑和因果结构。这为「世界模型即仿真器」的理念提供了最强有力的实证。

### Oasis（2024, Decart / Etched）

Oasis 将 GameNGen 的思路扩展到**Minecraft 级别的 3D 开放世界**，且将实时交互性能作为第一优先级。

Oasis 的核心创新：
- **实时推理**：通过专用硬件（Etched Sohu 芯片）优化 transformer 推理，将扩散去噪的延迟从秒级压缩到 50ms 以内
- **Next-Frame Diffusion**：与 GameNGen 类似，但使用了更先进的 DiT（Diffusion Transformer）架构替代 UNet
- **Minecraft-Scale Data**：在大量 Minecraft 游玩视频上训练，使模型学会了 Minecraft 的所有交互逻辑（挖掘、放置、制作、战斗等）

Oasis 是**目前自回归扩散 VWM 中实时性最好的系统**。它使「用扩散模型实时模拟一个开放世界游戏」从不可能变为可能。但其局限性也很明显：模型对 Minecraft 中的物理细节（如精确的碰撞、掉落速度）的建模精度依然不足，部分场景下物体会「穿越」或「悬浮」。

### Genie 2（2025, Google DeepMind）

Genie 2 是该路线中**最接近通用世界模拟器**的工作。与 Genie 1 的纯 AR 路线不同，Genie 2 采用了**自回归扩散**的混合架构。

Genie 2 的核心特点：
- **Image-to-3D-World**：从单张 2D 图像出发，生成可导航的 3D 环境
- **Action-Conditioned Generation**：支持键盘/手柄输入作为动作条件，实时生成对应的第一人称视角画面
- **Long-Horizon Generation**：可以生成长达一分钟的连贯交互序列
- **Latent Action Space**：继承了 Genie 1 的隐式动作学习机制，但结合了扩散模型的高质量生成

Genie 2 与 GameNGen/Oasis 的关键区别在于它不仅仅模拟一个固定游戏——它**从一张图片创造出一个全新的可交互世界**。这是通过大规模预训练（在数十万小时的 3D 游戏和仿真视频上）实现的强大的泛化能力。

### Matrix-Game（2025）

Matrix-Game 是该路线在**结构化控制**方向上的代表。它专门针对需要精确控制的世界模拟场景：

- **Discrete + Continuous Action**：同时支持离散动作（如选择物品）和连续动作（如移动、旋转）
- **Multi-Frame Context**：以多帧历史（而非单帧）作为扩散条件，显著提升了时序稳定性
- **Game Logic Learning**：在多个简单游戏中展示了模型自主学会游戏规则的能力

### Hunyuan-GameCraft（2025, Tencent）

Hunyuan-GameCraft 代表了**中国在该方向上的投入**。其特点：

- **混元大模型**作为基础：利用 Tencent 的混元多模态大模型作为预训练基础
- **Game Engine Simulation**：目标是模拟更复杂的游戏引擎行为（如物理引擎的刚体碰撞、粒子效果）
- **多游戏泛化**：在多种类型游戏数据上联合训练，展示了跨游戏的世界知识迁移

## 自回归扩散的核心技术挑战

### 1. 计算成本的两难

这是自回归扩散的最大难题。假设每帧扩散需要 4 步去噪（已经是非常激进的蒸馏水平），30fps 的游戏需要每秒 120 步扩散推理。每一步扩散需要一次完整的前向传播——对于 DiT 级别的模型来说，这在高分辨率（如 512×512）下几乎不可能实时。

Oasis 通过专用芯片（Etched Sohu）解决了这一问题，但这种方案不具有普遍可及性。更通用的加速方案仍在探索中：
- **Temporal Redundancy Exploitation**：相邻帧的去噪过程高度相似，是否可以复用中间计算结果？
- **Latent State Caching**：将关键帧的去噪结果缓存在隐空间中，后续帧仅做微调？
- **Progressive Resolution**：低分辨率去噪（全局结构）→ 高分辨率去噪（细节）的分阶段生成

### 2. 自回归漂移的扩散等价

纯 AR 模型有 exposure bias 问题（训练使用 ground truth 输入，推理使用模型自身预测作为输入）。在自回归扩散中，这个问题被**放大**了——因为每一步的输出是扩散模型生成的，本质上就带有随机性。

GameNGen 的解决方案是**噪声增强训练**：在训练时向条件帧添加一定量的噪声，使模型学会从「不完美」的条件帧中恢复。这相当于在扩散模型内部做了一层隐式的数据增强，但代价是训练更难收敛。

### 3. 动作信号的时序分配

在自回归扩散框架中，一个动作信号对应一帧的扩散生成。但现实中的动作可能跨越多个视频帧（例如，按下「前进」键持续 300ms，跨越约 10 帧）。如何处理这种**动作持续时长与帧率的不匹配**？

当前策略包括：
- **Action Chunking**：将连续的动作序列分割为与帧率对齐的块
- **Action Interpolation**：在动作空间内做线性/学习到的插值
- **Adaptive Frame Rate**：根据动作变化动态调整生成帧率

## 与其他扩散生成范式的对比

| 维度 | Latent Diffusion | Autoregressive Diffusion |
|------|-----------------|-------------------------|
| **生成结构** | 一次性并行生成整个序列 | 逐帧自回归生成 |
| **条件控制** | 全局条件（文本、地图等） | 逐帧动态条件（动作） |
| **交互性** | 低（离线生成） | **高**（实时交互） |
| **长程质量** | 高（全局时空注意力） | 中（误差累积） |
| **推理速度** | 中（一次性生成） | 低（逐帧多次去噪） |
| **最适合场景** | 自动驾驶预测、视频仿真 | 游戏环境模拟、交互式世界 |

## 论文列表

- [WorldCam](worldcam): WorldCam: Interactive Autoregressive 3D Gaming Worlds with Camera Pose as a Unifying Geometric Representation
- [SWM](swm): Grounding World Simulation Models in a Real-World Metropolis
- [LIVE](live): LIVE: Long-horizon Interactive Video World Modeling
- [LingBot-World](lingbot-world): Advancing Open-source World Models
- [UniDrive-WM](unidrive-wm): UniDrive-WM: Unified Understanding, Planning and Generation World Model For Autonomous Driving
- [Yume1.5](yume1-5): Yume1.5: A Text-Controlled Interactive World Generation Model
- [HY-World 1.5](hy-world-1-5): HY-World 1.5: A Systematic Framework for Interactive World Modeling with Real-Time Latency and Geometric Consistency
- [Astra](astra): Astra: General Interactive World Model with Autoregressive Denoising
- [RELIC](relic): RELIC: Interactive Video World Model with Long-Horizon Memory
- [ANWM](anwm): Aerial World Model for Long-horizon Visual Generation and Navigation in 3D Space
- [WorldPack](worldpack): WorldPack: Compressed Memory Improves Spatial Consistency in Video World Modeling
- [Hunyuan-GameCraft-2](hunyuan-gamecraft-2): Hunyuan-GameCraft-2: Instruction-following Interactive Game World Model
- [PAN](pan): PAN: A World Model for General, Interactable, and Long-Horizon World Simulation
- [Emu3.5](emu3-5): Emu3.5: Native Multimodal Models are World Learners
- [OmniNWM](omninwm): OmniNWM: Omniscient Driving Navigation World Models
- [WoW](wow): WoW: Towards a World omniscient World model Through Embodied Interaction
- [LongScape](longscape): PreFM: Online Audio-Visual Event Parsing via Predictive Future Modeling
- [Dreamer V4](dreamer-v4): Training Agents Inside of Scalable World Models
- [Genie Envisioner](genie-envisioner): Genie Envisioner: A Unified World Foundation Platform for Robotic Manipulation
- [LiDARCrafter](lidarcrafter): LiDARCrafter: Dynamic 4D World Modeling from LiDAR Sequences
- [Yan](yan): Yan: Foundational Interactive Video Generation
- [Matrix-Game 2.0](matrix-game-2-0): Matrix-Game 2.0: An Open-Source, Real-Time, and Streaming Interactive World Model
- [Yume](yume): Yume: An Interactive World Generation Model
- [Geometry Forcing](geometry-forcing): Geometry Forcing: Marrying Video Diffusion and 3D Representation for Consistent World Modeling
- [spmem](spmem): Video World Models with Long-term Spatial Memory
- [STAGE](stage): STAGE: A Stream-Centric Generative World Model for Long-Horizon Driving-Scene Simulation
- [CaM](cam): Context as Memory: Scene-Consistent Interactive Long Video Generation with Memory Retrieval
- [DeepVerse](deepverse): DeepVerse: 4D Autoregressive Video Generation as a World Model
- [Epona](epona): Epona: Autoregressive Diffusion World Model for Autonomous Driving
- [SceneDiffuser++](scenediffuser): SceneDiffuser++: City-Scale Traffic Simulation via a Generative World Model
- [VMem](vmem): VMem: Consistent Interactive Video Scene Generation with Surfel-Indexed View Memory
- [Hunyuan-GameCraft](hunyuan-gamecraft): Hunyuan-GameCraft: High-dynamic Interactive Game Video Generation with Hybrid History Condition
- [Matrix-Game](matrix-game): Matrix-Game: Interactive World Foundation Model
- [PEVA](peva): Whole-Body Conditioned Egocentric Video Prediction
- [NFD](nfd): Playing with Transformer at 30+ FPS via Next-Frame Diffusion
- [VRAG](vrag): Learning World Models for Interactive Video Generation
- [DriVerse](driverse): DriVerse: Navigation World Model for Driving Simulation via Multimodal Trajectory Prompting and Motion Alignment
- [WORLDMEM](worldmem): WORLDMEM: Long-term Consistent World Simulation with Memory
- [Adaworld](adaworld): Adaworld: Learning adaptable world models with latent actions
- [TSWM](tswm): Toward Stable World Models: Measuring and Addressing World Instability in Generative Environments
- [Gamefactory](gamefactory): Gamefactory: Creating new games with generative interactive videos
- [PlayGen](playgen): Playable Game Generation
- [InfinityDrive](infinitydrive): InfinityDrive: Breaking Time Limits in Driving World Models
- [GEM](gem): Gem: A generalizable ego-vision multimodal world model for fine-grained ego-motion, object dynamics, and scene composition control
- [UniMLVG](unimlvg): UniMLVG: Unified Framework for Multi-view Long Video Generation with Comprehensive Control Capabilities for Autonomous Driving
- [The Matrix](the-matrix): The Matrix: Infinite-Horizon World Generation with Real-Time Moving Control
- [NWM](nwm): Navigation World Models
- [Copilot4D](copilot4d): Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion
- [Drivingsphere](drivingsphere): Drivingsphere: Building a high-fidelity 4d world for closed-loop simulation
- [Gamegen-x](gamegen-x): Gamegen-x: Interactive open-world game video generation
- [Genie 2](genie-2): Genie 2: A large-scale foundation world model
- [oasis](oasis): Oasis: A Universe in a Transformer
- [GameNGen](gamengen): Diffusion models are real-time game engines
- [IRAsim](irasim): IRASim: A Fine-Grained World Model for Robot Manipulation
- [diamond](diamond): Diffusion for World Modeling: Visual Details Matter in Atari
- [Vista](vista): Vista: A generalizable driving world model with high fidelity and versatile controllability
- [UniSim](unisim): UniSim: Learning Interactive Real-World Simulators
