---
layout: home

hero:
  name: 世界模型 & 视频生成
  text: 系统性学习笔记库
  tagline: 覆盖视觉世界模型与视频生成后训练两大前沿领域
  actions:
    - theme: brand
      text: 世界模型
      link: /world-models/
    - theme: alt
      text: 视频生成
      link: /video-generation/
    - theme: alt
      text: GitHub
      link: https://github.com/AIWorldLab/Awesome-Vision-World-Model

features:
  - title: 世界模型
    details: 四大架构家族的视觉世界模型设计范式与实现细节，涵盖 Sequential Generation、Diffusion-based、Embedding Prediction、State Transition
    link: /world-models/architectures/
  - title: 视频生成后训练
    details: 基于 Awesome-Video-Generation-Post-Training 综述，覆盖 SFT、蒸馏、偏好优化（DPO/GRPO/RLHF）、推理时对齐四大范式，含 430+ 论文笔记
    link: /video-generation/methods/
  - title: 数据集与基准
    details: 两大领域的数据集与评测基准汇总，包含 21 个后训练数据集、58 个评测基准、物理仿真、自动驾驶、具身智能等场景
    link: /video-generation/datasets/
---

# 关于本笔记库

本笔记库整合两大前沿领域：

- **[世界模型 (World Models)](/world-models/)** — 基于综述 "From Seeing to Knowing the World: A Survey of Vision World Models" 整理，系统梳理视觉世界模型的核心知识
- **[视频生成后训练 (Video Generation Post-Training)](/video-generation/)** — 基于综述 "Video Generation Models: A Survey of Post-Training and Alignment" (Li et al., 2026) 整理，覆盖视频生成模型的后训练与对齐技术

本笔记库由 **Trae Solo** 与 **DeepSeek V4 Pro** 联合制作。**独特之处：帮你省 Token** — 笔记内容经过精心提炼与压缩，在保留核心知识的同时大幅减少无关文字。

## 完整目录导航

### 世界模型

| 维度 | 子方向 | 入口 | 核心内容 |
|------|--------|------|----------|
| **理论基础** | Fundamentals | [→](/world-models/fundamentals/) | 世界模型的本质、物理可解释性、评测方法论 |
| **架构设计** | Sequential Generation | [→](/world-models/architectures/sequential-generation/visual-autoregressive-modeling/) | 逐帧自回归预测未来视频 (Genie, iVideoGPT, VideoWorld) |
| | MLLM-guided Multimodal AR | [→](/world-models/architectures/sequential-generation/mllm-guided-multimodal-autoregressive-model/) | 大语言模型引导世界生成 (3D-VLA, WorldGPT, GR00T N1) |
| | Diffusion-based | [→](/world-models/architectures/diffusion-based-generation/) | 隐空间扩散 / 自回归扩散 (Cosmos, GameNGen, Oasis) |
| | Embedding Prediction | [→](/world-models/architectures/embedding-prediction/jepa/) | 嵌空间预测，不生成像素 (V-JEPA, DINO-WM) |
| | State Transition | [→](/world-models/architectures/state-transition/) | 隐状态动力学 + 规划 (DreamerV3, TD-MPC2) |
| | Other Architectures | [→](/world-models/architectures/other-architectures/) | 高斯溅射、LiDAR 等新兴范式 |
| **数据集与评测** | Foundational World Modeling | [→](/world-models/datasets-benchmarks/foundational-world-modeling/) | 通用预测、物理因果推理评测 |
| | Domain-specific | [→](/world-models/datasets-benchmarks/domain-specific-world-modeling/) | 具身智能、自动驾驶、游戏环境评测 |
| **下游应用** | Applications | [→](/world-models/applications/) | 机器人操控、自动驾驶、异常检测等落地 |
| **研究生态** | Surveys | [→](/world-models/ecology/surveys/) | 综述论文全集 |
| | Workshops | [→](/world-models/ecology/workshops/) | 顶会 Workshop 追踪 |
| | Repositories | [→](/world-models/ecology/repositories/) | Awesome 列表、开源代码库 |
| | Perspectives | [→](/world-models/ecology/perspectives/) | 跨学科、非主流视角 |

> [世界模型总览 →](/world-models/) 四维全景导航

### 视频生成后训练

| 分类 | 入口 | 内容概要 |
|------|------|----------|
| **方法总览** | [→ 入口](/video-generation/methods/) | 四大方法范式详解：SFT / 自训练与蒸馏 / 偏好优化 / 推理时对齐，含代表性工作对比 |
| **Conference Papers** | [→ 入口](/video-generation/methods/conference-papers/) | ICLR/NeurIPS/CVPR/ICCV/ICML/AAAI/ACM MM 等顶会论文 (174 篇) |
| **arXiv Papers** | [→ 入口](/video-generation/methods/arxiv-papers/) | arXiv 预印本论文 (255 篇)，按方法范式分类索引 |
| **Datasets** | [→ 入口](/video-generation/datasets/) | 21 个后训练数据集，按领域分类（物理/安全/交互/自动驾驶/3D/音视频） |
| **Benchmarks** | [→ 入口](/video-generation/benchmarks/) | 58 个评测基准，按维度分类（T2V 质量/物理/叙事/编辑/安全/奖励建模） |

> [视频生成总览 →](/video-generation/) 后训练方法分类（SFT / 蒸馏 / 偏好优化 / 推理时对齐）

### 相关工作的交叉跳转

**架构 ↔ 数据集**
- [Sequential Generation](/world-models/architectures/sequential-generation/) 的交互式世界模型 → 需要 [Interactive Environments and Gaming](/world-models/datasets-benchmarks/domain-specific-world-modeling/interactive-environments-and-gaming/) 类数据集评测
- [Latent Diffusion](/world-models/architectures/diffusion-based-generation/latent-diffusion/) 驾驶世界模型（GAIA-2, Cosmos） → 依赖 [Autonomous Driving](/world-models/datasets-benchmarks/domain-specific-world-modeling/autonomous-driving/) 数据集
- [State Transition](/world-models/architectures/state-transition/) 强化学习世界模型 → 依赖 [Embodied AI and Robotics](/world-models/datasets-benchmarks/domain-specific-world-modeling/embodied-ai-and-robotics/) 基准
- [JEPA](/world-models/architectures/embedding-prediction/jepa/) 自监督世界模型 → 其表征可在 [General Prediction](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/) 评测中验证
- [Object-Centric Modeling](/world-models/architectures/state-transition/object-centric-modeling/) → 需要 [Physics & Causality](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/) 评测物理理解

**世界模型 ↔ 研究生态**
- [MLLM-guided AR](/world-models/architectures/sequential-generation/mllm-guided-multimodal-autoregressive-model/) 的语言世界推理 → 参见 [Fundamentals](/world-models/fundamentals/) 中的 "Can LLMs Build World Models?" 讨论
- 世界模型的安全性 → 参见 [Surveys](/world-models/ecology/surveys/) 中的安全综述、《安全挑战》论文
- 世界模型的下游落地 → 参见 [Applications](/world-models/applications/)
- 世界模型的哲学基础 → 参见 [Perspectives](/world-models/ecology/perspectives/)

**世界模型 ↔ 视频生成**
- 视频生成作为世界模拟器的核心论文：WorldCompass (RL 长周期世界模型)、SPIRAL (闭环自改进)、Geometry Forcing (3D 表征 + 扩散)
- 扩散视频生成与 Latent Diffusion 世界模型共享技术栈：3D VAE、DiT、CFG
- [Autoregressive Diffusion](/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/) 的实时交互生成 → 参见 [蒸馏加速方法](/video-generation/methods/)（Causal Forcing、Diffusion APT、DOLLAR）
- 视频后训练中的偏好对齐（VideoAlign、VideoDPO）→ 为世界模型的交互式评测提供方法论参考
- 物理感知后训练（WISA、VideoREPA、PhyGDPO）→ 与世界模型的物理仿真评测（VideoPhy、PhyGenBench）密切相关
- 记忆机制（Anchor Forcing、MosaicMem）→ 与 [Sequential Generation](/world-models/architectures/sequential-generation/) 的长期记忆需求呼应
