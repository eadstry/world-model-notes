---
title: "Embodied AI and Robotics"
---

# Embodied AI and Robotics

具身智能与机器人（Embodied AI and Robotics）评测是领域特定世界建模中最直接面对物理现实挑战的方向。其核心命题是：**世界模型能否为机器人提供可靠的环境预测，以支持其在实际物理世界中的感知、规划和操控？** 这一命题的特殊性在于，机器人世界模型不仅需要理解世界的视觉外观和物理规律，更要能够将自身的动作（action）编码为世界状态变更的因果驱动因素。

该方向的评测资源可以大致分为三类：**机器人操作基准（Benchmarks）**、**大规模操作数据集（Datasets）**以及**物理仿真环境（Simulators）**。三者之间是相互配合的关系：数据集为模型训练提供素材，仿真环境为可扩展评测提供平台，基准则定义了标准化的任务和评价标准。

在机器人操作基准方面，RLBench 是最早建立的大规模机器人学习基准之一，提供了 100 个设计精巧的操作任务，涵盖从简单的触及（reaching）到复杂的组装（assembly）。Meta-World 及其升级版 Meta-World+ 提供了 50 个不同难度的元学习操作任务，是目前最广泛使用的多任务机器人评测基准之一。CALVIN 独树一帜地提出了一种语言条件化的长序列操作评测范式，要求模型在理解语言指令的基础上执行跨多个子任务的长链条操作。LIBERO 则聚焦于机器人终身学习能力的评测，通过 130 个任务系统评估模型的知识迁移和连续学习能力。

在大规模数据集方面，OXE（Open X-Embodiment）无疑是里程碑式的工作——它汇集了来自 34 个机器人实验室、60 个数据集的 160 万条机器人操作轨迹，并建立了统一的跨具身数据格式，为通用机器人策略的训练和评测提供了前所未有的数据基础。DROID 提供了大量的真实世界机器人操作数据，BEHAVIOR-1K 定义了包含 1,000 项日常家庭活动的评测环境。AgiBot-World 通过大规模操作平台实现了可扩展的数据采集。MimicGen 则提出了基于人类示范的自动数据生成方法，以数据增强的方式扩展有限的真实演示数据。

在物理仿真环境方面，Isaac Gym 是 NVIDIA 推出的高性能 GPU 加速物理仿真平台，支持大规模并行环境下的机器人学习和评测。RoboCasa 构建了大规模日常任务仿真环境，涵盖丰富的家具、物体和任务变体。这些仿真环境与真实世界的差距（sim-to-real gap）始终是该领域面临的核心挑战。为了弥合这一差距，WorldArena 等工作提出了统一的具身世界模型评测标准，尝试在评测层面建立仿真与真实之间的关联。WoW（World omniscient World）和 WoW-World-Eval 进一步拓展了评测维度，通过具身交互和图灵测试式的方法来评估世界模型的全面性。

具身智能评测的一个独特挑战是**闭环交互中的复合不确定性**。机器人的每次动作都依赖于世界模型对当前状态的估计和对动作后果的预测，预测误差会随着交互链路的延伸而不断累积。Target-Bench 等工作通过评估世界模型在无地图路径规划中的语义目标导航能力，直接测量了这种闭环复合误差的影响。DreamDojo 则从大规模人类视频中学习通用机器人世界模型，试图通过丰富的先验知识来降低复合不确定性。

另一个发展趋势是将世界模型的评测与具身推理能力相结合。传统的操作评测主要关注运动学层面的成功与否（如物体是否被成功抓取），而新的评测标准更加重视模型对任务语义和物理约束的深层理解。BC-Z 探索了零样本任务泛化，RT-1 研究了大规模真实世界的机器人Transformer控制，VP² 则以控制为中心评估视频预测的质量。这些工作共同推动着一个从"模拟操作"到"理解操作"的能力范式转移。

具身智能与机器人评测正处于快速发展的黄金时期。随着基础模型（如大语言模型和视觉基础模型）与机器人的深度融合，评测体系也在相应进化，越来越多地纳入语言理解、视觉推理和人机交互等高级认知维度的评估。

## 论文列表

- [WorldArena](worldarena): WorldArena: A Unified Benchmark for Evaluating Perception and Functional Utility of Embodied World Models
- [DreamDojo](dreamdojo): DreamDojo: A Generalist Robot World Model from Large-Scale Human Videos
- [WoW-World-Eval](wow-world-eval): Wow, wo, val! A Comprehensive Embodied World Model Evaluation Turing Test
- [GigaWorld-0](gigaworld-0): GigaWorld-0: World Models as Data Engine to Empower Embodied AI
- [Target-Bench](target-bench): Target-Bench: Can World Models Achieve Mapless Path Planning with Semantic Targets
- [WoW](wow): WoW: Towards a world omniscient world model through embodied interaction
- [Meta-World+](meta-world): Meta-World+: An improved, standardized, rl benchmark
- [AgiBot-World](agibot-world): AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems
- [RoboCasa](robocasa): RoboCasa: Large-Scale Simulation of Everyday Tasks for Generalist Robots
- [DROID](droid): DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset
- [BEHAVIOR-1K](behavior-1k): BEHAVIOR-1K: A Human-Centered, Embodied AI Benchmark with 1,000 Everyday Activities and Realistic Simulation
- [MimicGen](mimicgen): MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations
- [OXE](oxe): Open X-Embodiment: Robotic Learning Datasets and RT-X Models
- [RH20T](rh20t): RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot
- [VP²](vp): A Control-Centric Benchmark for Video Prediction
- [RT-1](rt-1): RT-1: Robotics Transformer for Real-World Control at Scale
- [BC-Z](bc-z): BC-Z: Zero-Shot Task Generalization with Robotic Imitation Learning
- [CALVIN](calvin): CALVIN: A Benchmark for Language-Conditioned Policy Learning for Long-Horizon Robot Manipulation Tasks
- [BridgeData V2](bridgedata-v2): BridgeData V2: A Dataset for Robot Learning at Scale
- [LIBERO](libero): LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning
- [Isaac Gym](isaac-gym): Isaac Gym: High Performance GPU-Based Physics Simulation For Robot Learning
- [RoboNet](robonet): RoboNet: Large-Scale Multi-Robot Learning
- [Meta-World](meta-world): Meta-World: A Benchmark and Evaluation for Multi-Task and Meta Reinforcement Learning
- [RLBench](rlbench): RLBench: The Robot Learning Benchmark & Learning Environment
