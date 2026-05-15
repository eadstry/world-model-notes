---
title: "Physics and Causality Benchmark"
---

# Physics and Causality Benchmark

物理与因果推理评测（Physics and Causality Benchmark）是世界模型评测体系的深度维度。它直接拷问一个本质性问题：当前的视频生成模型、世界模拟器是否真的理解了物理世界的运行法则，还是仅仅学会了模仿训练数据中的表面统计模式？这个问题的答案直接决定了我们能否信任世界模型在安全攸关场景（如自动驾驶、医疗、工业控制）中的预测与决策。

该领域的评测基准可大致分为三个层次。第一层是**物理直观与常识评测**（Physical Intuition & Commonsense），评估模型是否具备类似人类婴儿时期就能展现的基本物理理解能力，如物体永久性（object permanence）、固体不可穿透性（solidity）、连续性（continuity）、重力与支撑关系等。代表性工作包括 IntPhys（2019年，基于合成场景的物理直观推理评测）和其升级版 IntPhys 2（引入更复杂的合成场景）。Physion 则进一步引入了对多种物理属性的在线推理要求（如质量、摩擦系数），而 InfLevel 基准则专注于追踪 AI 模型在婴儿级物理推理能力方面的进展。

第二层是**物理一致性与常识评测**（Physical Consistency & Commonsense），主要评估视频生成模型在生成内容中是否遵守基本的物理规律。VideoPhy 是该方向的先驱工作之一，通过设计包含复杂物理交互场景的文本提示来评测 T2V 模型的物理常识理解。VideoPhy-2 进一步拓展了评测维度，加入了以动作为中心（action-centric）的评测设计。T2VPhysBench 提出了一套"第一性原理"的物理一致性评测框架。PhyGenBench 和 PhyCoBench 分别从物理常识生成和光流引导的物理一致性角度切入。VBench-2.0 则从内在保真度（intrinsic faithfulness）的角度对视频生成基准进行了全面升级。此外，PhyBench 将物理常识评测扩展到文本到图像（T2I）领域，PISA Bench 通过"看物体掉落"的实验设计探索了视频扩散模型的物理后训练方法。

第三层是**因果推理与反事实评测**（Causal Reasoning & Counterfactual），这是物理理解评测的最高层次。CoPhy（Counterfactual Learning of Physical Dynamics）是该方向的标志性工作，它要求模型在反事实条件下预测物理系统的演化——即"如果初始条件发生了改变，物理系统的未来状态将如何不同？"这种反事实推理能力被认为是世界模型的终极检验标准。VoE（Violation of Expectation）基准则借鉴了发展心理学的范式，评估模型能否像人类婴儿一样检测物理上"不可能"的事件。Omni-WorldBench 提出了以交互为中心的综合性评测，WorldBench 则致力于消除物理评测中的歧义因素，实现更加诊断性的评测。

该领域评测方法的一个关键创新是受控实验设计。与自然的视频数据不同，物理和因果评测通常需要精心构建合成场景，精确控制每个物理变量的取值，以便在给定其他条件不变的情况下单独测量模型对某个物理概念的理解。这种方法虽然牺牲了一定的生态效度（与现实世界的相似度），但在科学严谨性上获得了巨大的补偿，使得"模型到底理解了什么"这个问题的答案更加清晰和可解释。

近年来的另一个重要趋势是将评测规模系统化地扩大。早期的 IntPhys 和 Physion 等基准虽然设计精巧，但场景数量相对有限。新的工作如 PAI-Bench（Physical AI Bench）、WorldBench 和 Omni-WorldBench 致力于构建更大规模、更多样化的评测场景，涵盖更广泛的物理现象（从刚体动力学到流体动力学，从碰撞交互到形变物体）。WISA-32K 则通过引入世界模拟器助手的概念，为物理感知的文本到视频生成建立了大规模评测数据集。

评测指标的精细化也是该领域的持续努力方向。简单的"是否正确"二元判断往往不足以刻画模型物理理解的细微差异。新近的工作开始引入分级评分体系（如物理合理性等级）、错误模式分类（如区分"完全不理解"和"部分理解但细节错误"）以及基于人类的基准参照（如将模型表现与人类被试的反应时间和准确率进行对比），使得评测结果更加细粒度且具有跨物种的可解释性。

物理与因果推理评测的发展对于整个 AI 领域的意义超越世界模型本身。它触及了人工智能一个更深层的核心问题：**符号落地（symbol grounding）**——模型所使用的概念是否真的根植于物理世界的经验，还是仅仅作为浮动的符号在统计模式中进行运算。因此，这一评测方向不仅推动着世界模型的技术进步，也在推动着我们对人工智能理解本质的思考。

## 论文列表

- [Omni-WorldBench](omni-worldbench): Omni-WorldBench: Towards a Comprehensive Interaction-Centric Evaluation for World Models
- [WorldBench](worldbench): WorldBench: Disambiguating Physics for Diagnostic Evaluation of World Models
- [VideoVerse](videoverse): VideoVerse: How Far is Your T2V Generator from a World Model?
- [PAI-Bench](pai-bench): Physical ai bench: A comprehensive benchmark for physical ai generation and understanding
- [PhysVidBench](physvidbench): Can Your Model Separate Yolks with a Water Bottle? Benchmarking Physical Commonsense Understanding in Video Generation Models
- [PBench](pbench): PBench: A benchmark for evaluating generative models
- [IntPhys 2](intphys-2): IntPhys 2: Benchmarking Intuitive Physics Understanding In Complex Synthetic Environments
- [T2VPhysBench](t2vphysbench): T2VPhysBench: A First-Principles Benchmark for Physical Consistency in Text-to-Video Generation
- [PisaBench](pisabench): PISA Experiments: Exploring Physics Post-Training for Video Diffusion Models by Watching Stuff Drop
- [WISA-32K](wisa-32k): WISA: World Simulator Assistant for Physics-Aware Text-to-Video Generation
- [VideoPhy-2](videophy-2): VideoPhy-2: A Challenging Action-Centric Physical Commonsense Evaluation in Video Generation
- [VBench-2.0](vbench-2-0): VBench-2.0: Advancing Video Generation Benchmark Suite for Intrinsic Faithfulness
- [PhyCoBench](phycobench): A Physical Coherence Benchmark for Evaluating Video Generation Models via Optical Flow-guided Frame Prediction
- [Physics-IQ](physics-iq): Do generative video models understand physical principles?
- [PhyGenBench](phygenbench): Towards World Simulator: Crafting Physical Commonsense-Based Benchmark for Video Generation
- [PhyBench](phybench): PhyBench: A Physical Commonsense Benchmark for Evaluating Text-to-Image Models
- [VideoPhy](videophy): VideoPhy: Evaluating Physical Commonsense for Video Generation
- [Physion++](physion): Physion++: Evaluating Physical Scene Understanding that Requires Online Inference of Different Physical Properties
- [InfLevel](inflevel): Benchmarking Progress to Infant-Level Physical Reasoning in AI
- [VoE](voe): A Benchmark for Modeling Violation-of-Expectation in Physical Reasoning Across Event Categories
- [Physion](physion): Physion: Evaluating Physical Prediction from Vision in Humans and Machines
- [CoPhy](cophy): CoPhy: Counterfactual Learning of Physical Dynamics
- [IntPhys](intphys): IntPhys: A Framework and Benchmark for Visual Intuitive Physics Reasoning
