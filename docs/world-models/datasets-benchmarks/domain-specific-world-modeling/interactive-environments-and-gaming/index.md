---
title: "Interactive Environments and Gaming"
---

# Interactive Environments and Gaming

交互式环境与游戏（Interactive Environments and Gaming）评测代表了世界模型在开放性、创造性、长期规划方面的应用前沿。与自动驾驶和机器人操作等高度结构化的领域不同，游戏环境天然适合评测世界模型在**开放式探索**、**长期时序推理**和**创造性世界构建**方面的能力。游戏环境提供了一个可控但丰富的世界，在这里模型可以被赋予广泛的自由度来进行实验和评估。

当前最受关注的游戏环境评测平台之一是 Minecraft。由于其程序化生成的无限世界、丰富的方块交互语义以及支持长期任务规划的特点，Minecraft 已成为评估世界模型空间理解与规划能力的理想平台。MineRL 竞赛极大地推动了样本效率强化学习的研究，GF-Minecraft（GameFactory）探索了基于生成式交互视频创建新游戏的范式。The Matrix 和 Matrix-Game-MC 进一步提出了无限视界世界生成和实时交互控制的概念，将游戏世界建模推向了新的高度。

Atari 学习环境（ALE）是强化学习和世界模型研究的经典基准，通过 50+ 款经典街机游戏的标准化接口，评估了模型在多样化视觉环境中的通用策略学习能力。Procgen 通过程序化生成的方式创建了 16 个视觉上多样化、机制上统一的环境，专门评测模型的泛化能力。Crafter 则从更全面的角度出发，评估智能体在生存、建造、探索等多个维度上的能力谱系。

DeepMind Control Suite（DMC）虽严格来说属于连续控制基准而非纯粹的游戏环境，但它在评估世界模型在基于物理的连续状态空间中进行预测和控制的能力方面发挥了重要作用。该套件提供了丰富的铰接体物理仿真任务，从简单的倒立摆到复杂的类人行走，已成为衡量世界模型在连续控制任务中预测精度和样本效率的标准基准。

第一人称视角相关环境构成了游戏评测的一个重要子类。CS-Deathmatch 利用 CS:GO 的死亡竞赛模式进行大规模行为克隆研究，NLE（NetHack 学习环境）将经典 Roguelike 游戏 NetHack 引入 AI 评测，其极高的复杂度和程序化生成特性使其成为评估智能体长期策略和探索能力的终极挑战之一。WildWorld 则构建了大规模动态世界建模数据集，引入了显式状态标注和动作控制，为动态 ARPG 世界中的世界模型评测提供了新工具。

游戏评测环境的独特优势在于其能够系统化地操控复杂度。从简单的网格世界到复杂的 3D 开放世界，研究者可以根据评测目标选择适当复杂度的环境。JARVIS-VLA 探索了视觉语言模型在游戏环境中使用键盘和鼠标进行操控的能力，LOOPNAV 通过空间一致性评测来研究记忆辅助的世界模型，这些工作共同推进了人机交互与世界建模的交叉研究。

一个值得注意的趋势是生成式游戏世界建模的兴起。GameGen-X 探索了交互式开放世界游戏视频生成的能力，Mars 在开放世界环境中评估了情境化归纳推理，这类工作将评测从"模型在现有世界中表现如何"拓展到"模型能否创造和维持一个新的世界"。这种评测范式的转变对世界模型的长期一致性、世界逻辑性和创造性提出了前所未有的高要求。

另一方面，评测的游戏环境也越来越多地要求模型具备跨领域的综合能力。传统的游戏 AI 评测主要关注分数最大化，而新的评测维度还包括：空间推理能力（能否理解游戏世界的几何结构）、因果发现能力（能否推断游戏内部的因果关系）、工具使用能力（能否创造性地使用游戏内的物品）和协作能力（能否与其他智能体进行有效协作）。这些维度使得游戏环境评测正逐步成为世界模型通用智能评测的缩影。

总的来说，交互式环境与游戏评测正在经历从"专有游戏AI"向"通用世界模型"的范式转变。游戏评测不再仅仅是关于在特定游戏中的得分，而是关于模型在未知的、动态的、交互式的世界中展现出的综合理解和适应能力。

## 论文列表

- [WildWorld](wildworld): WildWorld: A Large-Scale Dataset for Dynamic World Modeling with Actions and Explicit State toward Generative ARPG
- [Matrix-Game-MC](matrix-game-mc): Matrix-Game: Interactive World Foundation Model
- [LOOPNAV](loopnav): Toward Memory-Aided World Models: Benchmarking via Spatial Consistency
- [JARVIS-VLA](jarvis-vla): JARVIS-VLA: Post-Training Large-Scale Visual Language Models to Play Visual Games with Keyboards and Mouse
- [GF-Minecraft](gf-minecraft): GameFactory: Creating New Games with Generative Interactive Videos
- [The Matrix](the-matrix): The Matrix: Infinite-Horizon World Generation with Real-Time Moving Control
- [GameGen-X](gamegen-x): GameGen-X: Interactive Open-world Game Video Generation
- [Mars](mars): Mars: Situated Inductive Reasoning in an Open-World Environment
- [Crafter](crafter): Benchmarking the Spectrum of Agent Capabilities
- [CS-Deathmatch](cs-deathmatch): Counter-Strike Deathmatch with Large-Scale Behavioural Cloning
- [MineRL](minerl): The MineRL 2020 Competition on Sample Efficient Reinforcement Learning using Human Priors
- [NLE](nle): The NetHack Learning Environment
- [Procgen](procgen): Leveraging Procedural Generation to Benchmark Reinforcement Learning
- [DMC](dmc): DeepMind Control Suite
- [ALE](ale): The Arcade Learning Environment: An Evaluation Platform for General Agents
