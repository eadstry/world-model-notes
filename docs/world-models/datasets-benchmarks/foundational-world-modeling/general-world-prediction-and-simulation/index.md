---
title: "General World Prediction and Simulation"
---

# General World Prediction and Simulation

通用世界预测与仿真（General World Prediction and Simulation）评测构成了世界模型评测体系的广度维度。其核心目标是在开放域、多样化的视觉场景中评估世界模型对未来状态的预测与生成能力。与专注于特定物理概念的评测不同，通用预测评测要求模型在涵盖多种场景类别、动作类型的海量数据上展现出稳定的世界理解力。

这一方向包含两大类资源：**大规模视频数据集**和**综合性评测基准**。视频数据集为世界模型的训练和离线评估提供了基础素材，其规模和质量直接影响模型的泛化能力。从早期的 UCF101（101类人类动作，约13K视频）和 Kinetics（400-700类人类动作，约650K剪辑）开始，视频数据集在规模和多样性上经历了指数级增长。近年来的代表性工作包括 Ego4D（3,000小时第一人称视频）、InternVid（大规模视频-文本配对数据）、WebVid-2M（两百万视频-文本对）以及 EgoVid-5M（第一人称视频-动作数据）等。这些数据集不仅规模更大，而且往往附带文本描述、动作标签等多模态标注，为世界模型的语义理解评估提供了更丰富的信息。

综合性评测基准则为世界模型提供了标准化的评估框架。WorldModelBench 是当前最具代表性的综合性基准之一，它通过多维度、多场景的设计系统评估视频生成模型作为世界模型的能力。4DWorldBench 延伸了评测维度至三维空间与时间维度，评估模型对4D世界的建模能力。WorldScore 提供了一套统一的评分体系，试图将视觉质量、时序稳定性、物理一致性等多个维度的评测整合为一个可比较的综合得分。此外，WR-Arena（World Reasoning Arena）和 CoW-Bench 等基准引入了更复杂的推理评测范式，评估模型在理解"一致性三要素"（视觉一致性、物理一致性、语义一致性）方面的表现。

在评测指标方面，该领域已经形成了一套相对成熟的指标体系。FVD（Fréchet Video Distance）通过计算生成视频与真实视频在特征空间中的分布距离来衡量整体视觉质量，是应用最广泛的指标之一。IS（Inception Score）通过评估生成样本的类别清晰度和多样性来衡量生成质量，CLIP Score 则利用 CLIP 模型的跨模态对齐能力评估视频与文本描述之间的语义一致性。除这些通用指标外，一些工作还引入了帧间一致性指标、运动平滑性指标等专门针对时序建模能力的评估。

当前该领域最突出的挑战在于如何评估长时序世界建模能力。大多数现有基准的预测时长有限（通常为数秒或数十帧），而真实世界的世界模型需要能够进行分钟级乃至小时级的长期预测。随着预测时长的增加，模型面临的复合错误（compounding error）问题会急剧恶化，这对模型的时序稳定性和物理一致性提出了更高的要求。DynamicVerse 和 World-in-World 等新工作正在尝试通过构建闭环仿真环境来应对这一挑战。

另一个值得关注的发展方向是多模态评测的融合。传统的通用预测评测主要关注视觉质量，但世界模型的真正价值在于其跨模态的理解和推理能力。新近的工作如 OmniWorld 和 Sekai 正在探索将视觉、文本、3D 几何、物理状态等多种模态的评测融为一体，以更全面地刻画模型的世界理解能力。这种多模态融合评测有望揭示模型在不同模态之间的知识迁移和共享能力。

总的来说，通用世界预测与仿真评测正经历着从"单一维度的视觉质量评估"向"多维度、多模态、长时序的综合世界理解评估"的深刻转变。这一转变为世界模型的发展提供了至关重要的标尺，也提出了更高的评测方法论要求。

## 论文列表

- [WR-Arena](wr-arena): World Reasoning Arena
- [CoW-Bench](cow-bench): The Trinity of Consistency as a Defining Principle for General World Models
- [DynamicVerse](dynamicverse): DynamicVerse: A Physically-Aware Multimodal Framework for 4D World Modeling
- [4DWorldBench](4dworldbench): 4DWorldBench: A Comprehensive Evaluation Framework for 3D/4D World Generation Models
- [Gen-ViRe](gen-vire): Can World Simulators Reason? Gen-ViRe: A Generative Visual Reasoning Benchmark
- [World-in-World](world-in-world): World-in-World: World Models in a Closed-Loop World
- [OmniWorld](omniworld): OmniWorld: A Multi-Domain and Multi-Modal Dataset for 4D World Modeling
- [Sekai](sekai): Sekai: A Video Dataset towards World Exploration
- [WorldPrediction](worldprediction): WorldPrediction: A Benchmark for High-level World Modeling and Long-horizon Procedural Planning
- [WorldScore](worldscore): WorldScore: A Unified Evaluation Benchmark for World Generation
- [MM-OR](mm-or): MM-OR: A Large Multimodal Operating Room Dataset for Semantic Understanding of High-Intensity Surgical Environments
- [WorldModelBench](worldmodelbench): WorldModelBench: Judging Video Generation Models As World Models
- [OpenHumanVid](openhumanvid): OpenHumanVid: A Large-Scale High-Quality Dataset for Enhancing Human-Centric Video Generation
- [EgoVid-5M](egovid-5m): EgoVid-5M: A Large-Scale Video-Action Dataset for Egocentric Video Generation
- [Ego-Exo4D](ego-exo4d): Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives
- [InternVid](internvid): InternVid: A Large-scale Video-Text Dataset for Multimodal Understanding and Generation
- [Ego4D](ego4d): Ego4D: Around the World in 3,000 Hours of Egocentric Video
- [WebVid-2M](webvid-2m): Frozen in Time: A Joint Video and Image Encoder for End-to-End Retrieval
- [EPIC-KITCHENS-100](epic-kitchens-100): Rescaling Egocentric Vision
- [HowTo100M](howto100m): HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips
- [COIN](coin): COIN: A Large-scale Dataset for Comprehensive Instructional Video Analysis
- [SSV2](ssv2): The "something something" video database for learning and evaluating visual common sense
- [Kinetics](kinetics): The Kinetics Human Action Video Dataset
- [YouTube-8M](youtube-8m): YouTube-8M: A Large-Scale Video Classification Benchmark
- [UCF101](ucf101): UCF101: A Dataset of 101 Human Actions Classes From Videos in The Wild
