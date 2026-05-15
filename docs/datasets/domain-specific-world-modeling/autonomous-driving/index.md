---
title: "Autonomous Driving"
---

# Autonomous Driving

自动驾驶（Autonomous Driving）是世界模型评测体系中数据最丰富、评测链路最完整、工程需求最迫切的领域。其核心使命是：**驾驶世界模型能否在一个高度动态、部分可观测且安全攸关的环境中，对未来场景的演化做出准确、鲁棒且可解释的预测？** 这一使命的特殊性在于，自动驾驶评测需要同时兼顾感知的精度、预测的可靠性和规划的安全性。

自动驾驶评测体系经历了从"单任务感知评测"到"多任务联合评测"再到"闭环世界模型评测"的演进。早期的评测主要围绕3D目标检测、语义分割、跟踪等感知任务展开，代表性数据集包括 KITTI、BDD100K、nuScenes 等。随着自动驾驶系统的功能模块日益丰富，评测逐步扩展到运动预测（Argoverse、WOMD）、占据预测（Occ3D、OpenOccupancy）和轨迹规划（NuPlan）等多个维度。

在感知与预测数据集方面，自动驾驶社区积累了大量高质量的多模态数据。nuScenes 和 Waymo Open Dataset 是两个最具影响力的标杆数据集，前者以 1,000 个波士顿和新加坡的驾驶场景为素材，提供了完整的 360 度相机、激光雷达和毫米波雷达数据；后者以其更大规模的数据量（1,950 个片段）和涵盖 3D 检测、3D 跟踪、运动预测、占据预测的全面评测任务而闻名。Argoverse 及 Argoverse 2 提供了高清地图和运动预测数据，NuPlan 专注于闭环规划评测，INTERACTION 则提供了多国驾驶场景中的交互性运动数据。在最近的趋势中，Occ3D 和 OpenOccupancy 等基准将评测焦点从盒子级的物体表示转向更精细的语义占据网格，为驾驶世界模型提供了更细粒度的评测手段。

面向世界模型的自动驾驶评测是近年来的新兴方向。NAVSIM 是该方向的标志性工作，它提出了一种数据驱动的非反应式仿真评测方法，能够在真实驾驶数据的基础上对世界模型的预测质量进行闭环评估，而不需要复杂的仿真环境。DriveArena 建立了闭环生成式仿真平台，支持可定制的场景生成和交互式评测。CarDreamer 提供了基于世界模型的自动驾驶开源学习平台，将世界模型与强化学习策略相结合进行评测。DrivingDojo 则从交互性和知识增强的角度构建了驾驶世界模型数据集。此外，ACT-Bench 专注于评估驾驶世界模型的动作可控性，WorldLens 则提出了全频谱的实车评测体系。

自动驾驶世界模型评测的指标设计也体现了领域的特殊性。除了通用的视频质量指标（如 FVD）外，驾驶领域的评测特别强调以下几类指标：**几何精度**（如检测的 IoU、占据预测的 mIoU）、**时序一致性**（如预测轨迹与真实轨迹之间的位移误差 ADE/FDE）、**安全性与合规性**（如碰撞率、交通规则违反率）以及**闭环性能**（如闭环规划的成功率、驾驶分数）。这些指标共同构成了一个多维度的评测矩阵。

一个关键的评测挑战是交互建模的评估。与被动环境不同，自动驾驶场景中的智能体（车辆、行人、骑行者）会对他车的决策做出反应，形成复杂的博弈动态。NuPlan 和 INTERACTION 等数据集通过提供丰富的交互场景来支持这方面的评测，但如何量化地评估模型对这种交互动态的理解程度，仍是一个开放的研究问题。

从数据集的国际分布来看，自动驾驶评测资源呈现出明显的地域多样性。NuScenes 覆盖了波士顿和新加坡的城市驾驶场景，Waymo 主要基于美国郊区和城市道路，Argoverse 涵盖了迈阿密和匹兹堡的驾驶场景，KITTI 以德国高速公路和城市道路为主，BDD100K 则包含了美国的多样化驾驶场景。这种地域多样性对于训练和评测能够在全球范围内泛化的驾驶世界模型至关重要。

自动驾驶世界模型的评测正在从"离线评测"向"在线闭环评测"快速演进。未来，随着端到端自动驾驶（End-to-End Driving）架构的普及，世界模型评测将愈发紧密地与规划决策的评测交织在一起，形成一个完整的感知-预测-规划评测闭环。

## 论文列表

- [WorldLens](worldlens): WorldLens: Full-Spectrum Evaluations of Driving World Models in Real World
- [ACT-Bench](act-bench): ACT-Bench: Towards Action Controllable World Models for Autonomous Driving
- [DrivingDojo](drivingdojo): DrivingDojo Dataset: Advancing Interactive and Knowledge-Enriched Driving World Model
- [DriveArena](drivearena): DriveArena: A Closed-loop Generative Simulation Platform for Autonomous Driving
- [NAVSIM](navsim): NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking
- [CarDreamer](cardreamer): CarDreamer: Open-Source Learning Platform for World Model based Autonomous Driving
- [OpenDV-2K](opendv-2k): GenAD: Generalized Predictive Model for Autonomous Driving
- [ZOD](zod): Zenseact Open Dataset: A Large-Scale and Diverse Multimodal Dataset for Autonomous Driving
- [Occ3D](occ3d): Occ3D: A Large-Scale 3D Occupancy Prediction Benchmark for Autonomous Driving
- [OpenOccupancy](openoccupancy): OpenOccupancy: A Large Scale Benchmark for Surrounding Semantic Occupancy Perception
- [Argoverse 2](argoverse-2): Argoverse 2: Next Generation Datasets for Self-Driving Perception and Forecasting
- [KITTI-360](kitti-360): KITTI-360: A Novel Dataset and Benchmarks for Urban Scene Understanding in 2D and 3D
- [NuPlan](nuplan): NuPlan: A closed-loop ML-based planning benchmark for autonomous vehicles
- [ONCE](once): One Million Scenes for Autonomous Driving: ONCE Dataset
- [WOMD](womd): Large Scale Interactive Motion Forecasting for Autonomous Driving: The Waymo Open Motion Dataset
- [Lyft Level 5](lyft-level-5): One Thousand and One Hours: Self-driving Motion Prediction Dataset
- [A2D2](a2d2): A2D2: Audi Autonomous Driving Dataset
- [Waymo](waymo): Scalability in Perception for Autonomous Driving: Waymo Open Dataset
- [Argoverse](argoverse): Argoverse: 3D Tracking and Forecasting With Rich Maps
- [INTERACTION](interaction): INTERACTION Dataset: An INTERnational, Adversarial and Cooperative moTION Dataset in Interactive Driving Scenarios with Semantic Maps
- [SemanticKITTI](semantickitti): SemanticKITTI: A Dataset for Semantic Scene Understanding of LiDAR Sequences
- [nuScenes](nuscenes): nuScenes: A Multimodal Dataset for Autonomous Driving
- [BDD100K](bdd100k): BDD100K: A Diverse Driving Dataset for Heterogeneous Multitask Learning
- [ApolloScape](apolloscape): The ApolloScape Dataset for Autonomous Driving
- [CARLA](carla): CARLA: An Open Urban Driving Simulator
- [KITTI](kitti): Are we ready for autonomous driving? The KITTI vision benchmark suite
