---
layout: home

hero:
  name: 世界模型 & 视频生成
  text: 系统性学习笔记库
  tagline: 覆盖视觉世界模型与视频生成后训练两大前沿领域
  actions:
    - theme: brand
      text: 世界模型
      link: /designs/
    - theme: alt
      text: 视频生成
      link: /video-generation/
    - theme: alt
      text: GitHub
      link: https://github.com/AIWorldLab/Awesome-Vision-World-Model

features:
  - title: 🌍 世界模型
    details: 四大架构家族的视觉世界模型设计范式与实现细节，涵盖 Sequential Generation、Diffusion-based、Embedding Prediction、State Transition
    link: /designs/
  - title: 🎬 视频生成后训练
    details: 基于 Awesome-Video-Generation-Post-Training 综述，覆盖 SFT、蒸馏、偏好优化、推理时对齐等后训练方法
    link: /video-generation/
  - title: 📊 数据集与基准
    details: 两大领域的数据集与评测基准汇总，包含物理仿真、自动驾驶、具身智能等场景
    link: /datasets/
---

# 📖 关于本笔记库

本笔记库整合两大前沿领域：

- **[世界模型 (World Models)](/designs/)** — 基于综述 "From Seeing to Knowing the World: A Survey of Vision World Models" 整理，系统梳理视觉世界模型的核心知识
- **[视频生成后训练 (Video Generation Post-Training)](/video-generation/)** — 基于综述 "Video Generation Models: A Survey of Post-Training and Alignment" (Li et al., 2026) 整理，覆盖视频生成模型的后训练与对齐技术

本笔记库由 **Trae Solo** 与 **DeepSeek V4 Pro** 联合制作。**独特之处：帮你省 Token** — 笔记内容经过精心提炼与压缩，在保留核心知识的同时大幅减少无关文字。

## 🧭 完整目录导航

### 🌍 世界模型 — 架构设计 (Designs)

| 范式 | 子方向 | 入口 | 核心思想 | 代表工作 |
|------|--------|------|----------|----------|
| **Sequential Generation** | Visual Autoregressive Modeling | [→](/designs/sequential-generation/visual-autoregressive-modeling/) | 逐帧自回归预测未来视频 | Genie, iVideoGPT, VideoWorld, MineWorld, Genie 3 |
| | MLLM-guided Multimodal AR | [→](/designs/sequential-generation/mllm-guided-multimodal-autoregressive-model/) | 大语言模型引导世界生成 | 3D-VLA, WorldGPT, GR00T N1, AstraNav-World |
| **Diffusion-based Generation** | Latent Diffusion | [→](/designs/diffusion-based-generation/latent-diffusion/) | 隐空间扩散去噪生成未来 | Cosmos, GAIA-2, DriveDreamer, GenAD, UniPi |
| | Autoregressive Diffusion | [→](/designs/diffusion-based-generation/autoregressive-diffusion/) | 自回归 + 扩散的混合生成 | GameNGen, Oasis, Genie 2, Matrix-Game |
| **Embedding Prediction** | JEPA Family | [→](/designs/embedding-prediction/jepa/) | 嵌空间预测，不生成像素 | V-JEPA, V-JEPA 2, DINO-WM, seq-JEPA |
| **State Transition** | Latent State-Space Modeling | [→](/designs/state-transition/latent-state-space-modeling/) | 隐状态动力学 + 规划 | DreamerV3, TD-MPC2, STORM, IRIS, PlaNet |
| | Object-Centric Modeling | [→](/designs/state-transition/object-centric-modeling/) | 对象级状态分解与交互 | SlotFormer, slotSSM, SSWM |
| **Other Architectures** | 混合架构 | [→](/designs/other-architectures/other-architectures/) | 高斯溅射、LiDAR 等新兴范式 | PhysWorld, GaussianWorld, LiDARWM, NeMo |

> 📖 [Designs 总览 →](/designs/) 四种核心范式的全景比较与架构选择指南

### 📊 世界模型 — 数据集与基准 (Datasets & Benchmarks)

| 大类 | 子方向 | 入口 | 代表工作 |
|------|--------|------|----------|
| **Foundational World Modeling** | General World Prediction and Simulation | [→ 入口](/datasets/foundational-world-modeling/general-world-prediction-and-simulation/) | Kinetics, Ego4D, WorldModelBench |
| | Physics and Causality Benchmark | [→ 入口](/datasets/foundational-world-modeling/physics-and-causality-benchmark/) | Physion, IntPhys, CoPhy |
| **Domain-specific World Modeling** | Embodied AI and Robotics | [→ 入口](/datasets/domain-specific-world-modeling/embodied-ai-and-robotics/) | RLBench, CALVIN, OXE, DROID |
| | Autonomous Driving | [→ 入口](/datasets/domain-specific-world-modeling/autonomous-driving/) | nuScenes, Waymo, NAVSIM |
| | Interactive Environments and Gaming | [→ 入口](/datasets/domain-specific-world-modeling/interactive-environments-and-gaming/) | Minecraft, ALE, CARLA, Crafter |

> 📖 [Datasets 总览 →](/datasets/) 评测维度全面介绍与方法论讨论

### 📚 Others — 周边资源

| 分类 | 入口 | 内容概要 |
|------|------|----------|
| **Survey** | [→ 入口](/others/survey/survey/) | 世界模型综述论文全集（通用 / 具身 / 自动驾驶 / 安全） |
| **GitHub Repo** | [→ 入口](/others/github-repo/github-repo/) | Awesome 列表、开源代码库、工具集 |
| **Workshop** | [→ 入口](/others/workshop/workshop/) | NeurIPS / ICML / ICLR / CVPR / ICCV Workshop 追踪 |
| **Theory** | [→ 入口](/others/theory/theory/) | 世界模型理论基础（本质、物理可解释性、评测反思） |
| **World Models for Downstream Tasks** | [→ 入口](/others/world-models-for-downstream-tasks/world-models-for-downstream-tasks/) | 机器人操控、自动驾驶、异常检测等下游应用 |
| **Other Perspectives of World Modeling** | [→ 入口](/others/other-perspectives-of-world-modeling/other-perspectives-of-world-modeling/) | 跨学科、非主流视角的世界建模研究 |

> 📖 [Others 总览 →](/others/) 完整知识图谱的周边资源导航

### 🎬 视频生成后训练 (Video Generation Post-Training)

| 分类 | 入口 | 内容概要 |
|------|------|----------|
| **Methods — Conference Papers** | [→ 入口](/video-generation/methods/conference-papers/) | 已被顶级会议/期刊录用的后训练方法论文 |
| **Methods — arXiv Papers** | [→ 入口](/video-generation/methods/arxiv-papers/) | arXiv 预印本后训练方法论文 |
| **Datasets** | [→ 入口](/video-generation/datasets/) | 视频生成后训练数据集（物理仿真、安全对齐等） |
| **Benchmarks** | [→ 入口](/video-generation/benchmarks/) | 视频生成评测基准（T2V 对齐、物理一致性等） |

> 📖 [视频生成总览 →](/video-generation/) 后训练方法分类（SFT / 蒸馏 / 偏好优化 / 推理时对齐）

### 🔗 相关工作的交叉跳转

本笔记库中，不同分类之间存在着紧密的内在联系。以下链接帮助你在相关主题之间快速跳转：

**架构 ↔ 数据集**
- [Sequential Generation](/designs/sequential-generation/) 的交互式世界模型 → 需要 [Interactive Environments and Gaming](/datasets/domain-specific-world-modeling/interactive-environments-and-gaming/) 类数据集评测
- [Latent Diffusion](/designs/diffusion-based-generation/latent-diffusion/) 驾驶世界模型（GAIA-2, Cosmos） → 依赖 [Autonomous Driving](/datasets/domain-specific-world-modeling/autonomous-driving/) 数据集
- [State Transition](/designs/state-transition/) 强化学习世界模型 → 依赖 [Embodied AI and Robotics](/datasets/domain-specific-world-modeling/embodied-ai-and-robotics/) 基准
- [JEPA](/designs/embedding-prediction/jepa/) 自监督世界模型 → 其表征可在 [General Prediction](/datasets/foundational-world-modeling/general-world-prediction-and-simulation/) 评测中验证
- [Object-Centric Modeling](/designs/state-transition/object-centric-modeling/) → 需要 [Physics & Causality](/datasets/foundational-world-modeling/physics-and-causality-benchmark/) 评测物理理解

**世界模型 ↔ Others**
- [MLLM-guided AR](/designs/sequential-generation/mllm-guided-multimodal-autoregressive-model/) 的语言世界推理 → 参见 [Theory](/others/theory/theory/) 中的 "Can LLMs Build World Models?" 讨论
- 世界模型的安全性 → 参见 [Survey](/others/survey/survey/) 中的安全综述、《安全挑战》论文
- 世界模型的下游落地 → 参见 [World Models for Downstream Tasks](/others/world-models-for-downstream-tasks/world-models-for-downstream-tasks/)
- 世界模型的哲学基础 → 参见 [Other Perspectives of World Modeling](/others/other-perspectives-of-world-modeling/other-perspectives-of-world-modeling/)

**世界模型 ↔ 视频生成**
- 视频生成作为世界模拟器 → 参见 [Survey](/others/survey/survey/) 中的 "Is Sora a World Simulator?" 综述
- 扩散视频生成与 Latent Diffusion 世界模型共享技术栈：3D VAE、DiT、CFG
- [Autoregressive Diffusion](/designs/diffusion-based-generation/autoregressive-diffusion/) 的实时交互生成 → 参见 [Video Generation Methods](/video-generation/methods/) 中的蒸馏加速方法
- 视频后训练中的偏好对齐 → 可为世界模型的交互式评测提供方法论参考
