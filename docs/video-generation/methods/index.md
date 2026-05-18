---
title: "方法综述"
---

# 视频生成后训练方法

::: tip 方法全景
四大方法范式覆盖从**数据驱动微调**到**推理时控制**的完整后训练技术栈。以下按范式拆解核心思想、代表工作与技术趋势。
:::

---

## 专题入口

- [DiT 控制方法综述：ControlNet 路线与 Cosmos-Transfer2.5](/world-models/architectures/diffusion-based-generation/latent-diffusion/dit-control-methods-and-cosmos-transfer2-5): 从 CameraCtrl、Ctrl-Adapter、TIC-FT 到 Cosmos-Transfer2.5，系统梳理 DiT 中条件控制尤其是 ControlNet 的落地方式

---

## 1. 监督微调 (Supervised Fine-Tuning)

利用高质量标注数据对预训练视频模型进行领域适配，是后训练中最基础的范式。

### 1.1 主体驱动生成 (Subject-Driven)

保持特定主体（人脸、角色、物体）的 ID 一致性。

| 代表工作 | 会议 | 核心思想 | 代码 |
|----------|------|----------|------|
| ConsisID (CVPR 2025) | 频域分解保持身份 | Identity-Preserving via frequency decomposition | [GitHub](https://github.com/PKU-YuanGroup/ConsisID) |
| Phantom (ICCV 2025) | 跨模态对齐主体一致性 | Cross-modal alignment for subject-consistent video | [GitHub](https://github.com/Phantom-video/Phantom) |
| MagicMirror (ICCV 2025) | DiT 中的 ID 保持 | ID-preserved generation in Video DiT | [GitHub](https://github.com/dvlab-research/MagicMirror) |
| PersonalVideo (ICCV 2025) | 高 ID 保真度定制 | High ID-fidelity without dynamic degradation | [GitHub](https://github.com/EchoPluto/PersonalVideo) |
| MagicID (ICCV 2025) | 混合偏好优化 | Hybrid preference optimization for ID+dynamic | [GitHub](https://github.com/EchoPluto/MagicID) |
| Lynx (arXiv 2025) | 高保真个性化视频 | ByteDance personalized video generation | [GitHub](https://github.com/bytedance/lynx) |
| Identity-GRPO (arXiv 2025) | RL 驱动多人身份保持 | RL for multi-human identity preservation | [GitHub](https://github.com/alibaba/identity-grpo) |

### 1.2 运动控制 (Motion Control)

精确控制生成视频中的物体/相机运动轨迹。

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| MotionPro (CVPR 2025) | 精确运动控制器 | Precise motion control for I2V generation |
| Go-with-the-Flow (CVPR 2025) | 实时扭曲噪声运动控制 | Real-time warped noise for motion control |
| Trajectory Attention (ICLR 2025) | 轨迹注意力精细运动控制 | Fine-grained video motion control via trajectory |
| MagicMotion (ICCV 2025) | 稠密到稀疏轨迹引导 | Dense-to-Sparse trajectory guidance |
| SynFMC (ICCV 2025) | 6D 位姿自由控制 | Free-form 6D pose control of camera+objects |
| MotionBooth (NeurIPS 2024) | 运动感知定制生成 | Motion-aware customized text-to-video |
| Wan-Move (NeurIPS 2025) | 隐轨迹引导 | Latent trajectory guidance for motion control |

### 1.3 相机控制 (Camera Control)

独立或联合控制生成视频的相机运动。

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| CameraCtrl (ICLR 2025) | 首个 DiT 相机控制 | Enabling camera control for video DiT |
| VD3D (ICLR 2025) | 3D 相机控制 | Taming large video DiT for 3D camera control |
| RealCam-I2V (ICCV 2025) | 交互式复杂相机控制 | Interactive complex camera control for I2V |
| ReCapture (CVPR 2025) | 用户视频相机重控制 | Generative camera controls via masked fine-tuning |
| CamCloneMaster (SIGGRAPH Asia 2025) | 参考视频驱动相机控制 | Reference-based camera control |
| ShotVerse (arXiv 2026) | 电影级多镜头相机 | Cinematic camera control for multi-shot |

### 1.4 指令跟随编辑 (Instruction-Based Editing)

通过自然语言指令编辑视频内容。

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| VEGGIE (ICCV 2025) | 指令式编辑与推理 | Instructional editing with grounded generation |
| InstructVideo (CVPR 2024) | 人类反馈指导编辑 | Instructing video diffusion with human feedback |
| UNIC (ICLR 2026) | 统一上下文视频编辑 | Unified in-context video editing |
| DragVideo (ECCV 2024) | 拖拽式交互编辑 | Interactive drag-style video editing |
| VideoStudio (ECCV 2024) | 一致性多场景生成 | Consistent-content multi-scene generation |

### 1.5 领域适配 (Domain Adaptation)

将通用视频模型适配到自动驾驶、医疗、具身智能等特定领域。

| 代表工作 | 会议 | 领域 |
|----------|------|------|
| DriveDreamer-2 (AAAI 2025) | LLM 增强驾驶世界模型 | 自动驾驶 |
| GenieDrive (arXiv 2025) | 4D occupancy 引导驾驶生成 | 自动驾驶 |
| TASTE-Rob (CVPR 2025) | 手物交互视频生成 | 具身智能 |
| Ophora (MICCAI 2025) | 眼科手术视频生成 | 医疗 |
| OpenViGA (arXiv 2025) | 开源驾驶场景微调 | 自动驾驶 |

---

## 2. 自训练与蒸馏 (Self-Training & Distillation)

通过模型自身或教师模型的知识迁移，在不牺牲质量的前提下提升生成效率。

### 2.1 知识蒸馏 (Knowledge Distillation)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| DOLLAR (ICCV 2025) | 蒸馏 + 隐奖励优化 | Few-step generation via distillation and latent reward |
| Diffusion APT (ICML 2025) | 对抗后训练一步生成 | Adversarial post-training for one-step video |
| SF-V (NeurIPS 2024) | 单步前向视频生成 | Single forward video generation model |
| T2V-Turbo (NeurIPS 2024) | 混合奖励反馈一致性模型 | Consistency model with mixed reward feedback |
| DCM (ICCV 2025) | 双专家一致性模型 | Dual-expert consistency model for efficient generation |
| V.I.P. (ICCV 2025) | 迭代在线偏好蒸馏 | Iterative online preference distillation |
| Causal Forcing (arXiv 2026) | 自回归扩散蒸馏 | AR diffusion distillation for real-time generation |

### 2.2 自训练 (Self-Training)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| WorldCompass (arXiv 2026) | RL 长周期世界模型 | RL for long-horizon world models (self-play) |
| GigaVideo-1 (arXiv 2025) | 4 GPU-小时自动反馈微调 | Automatic feedback with minimal fine-tuning |
| PhysRVG (arXiv 2026) | 物理感知统一 RL | Physics-aware unified RL for video models |
| AR-CoPO (arXiv 2026) | 对比策略优化 | Align AR video generation with contrastive PO |

### 2.3 效率优化架构

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| FramePack (NeurIPS 2025) | 帧上下文打包 + 漂移预防 | Frame context packing and drift prevention |
| Radial Attention (NeurIPS 2025) | O(n log n) 稀疏注意力 | Sparse attention with energy decay for long video |
| LiteAttention (arXiv 2025) | 时序稀疏注意力 | Temporal sparse attention for DiT |
| Attention Surgery (arXiv 2025) | 注意力线性化 | Efficient recipe to linearize video DiT |

---

## 3. 偏好优化 (Preference Optimization)

将人类偏好或自动评估信号引入训练过程，优化生成质量。

### 3.1 RLHF / RLAIF

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| VideoAlign (NeurIPS 2025) | 人类反馈改进视频生成 | Improving video generation with human feedback |
| VADER (ICLR 2025) | 奖励梯度对齐 | Video diffusion alignment via reward gradients |
| FlowPortrait (arXiv 2026) | RL 音频驱动人像视频 | RL for audio-driven portrait generation |
| Reward-Forcing (arXiv 2026) | 奖励反馈自回归生成 | AR video generation with reward feedback |

### 3.2 DPO 及其变体

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| VideoDPO (CVPR 2025) | 全偏好对齐 | Omni-preference alignment for video diffusion |
| DenseDPO (NeurIPS 2025) | 细粒度时序偏好优化 | Fine-grained temporal preference optimization |
| PhyGDPO (arXiv 2025) | 物理感知分组 DPO | Physics-aware groupwise DPO |
| PhysCorr (arXiv 2025) | 双奖励 DPO 物理约束 | Dual-reward DPO for physics-constrained T2V |
| RDPO (arXiv 2025) | 真实数据偏好优化 | Real data preference optimization for physics |
| Epipolar DPO (arXiv 2025) | 对极几何改进 | Epipolar geometry improves video generation |
| Diffusion-NPO (ICLR 2025) | 负偏好优化 | Negative preference optimization for diffusion |
| SePPO (ICLR 2025) | 半策略偏好优化 | Semi-policy preference optimization |

### 3.3 GRPO

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| BranchGRPO (ICLR 2026) | 结构化分支 GRPO | Stable GRPO with structured branching |
| TAGRPO (arXiv 2026) | 轨迹直接对齐 | Boosting GRPO on I2V with trajectory alignment |
| Video-as-Answer (arXiv 2025) | 联合 GRPO 预测生成 | Predict and generate next video with Joint-GRPO |
| Growing GRPO (arXiv 2025) | 自适应课程 GRPO | Self-paced GRPO with growing generator |

### 3.4 奖励建模 (Reward Modeling)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| VideoScore (EMNLP 2024) | 自动化视频评估指标 | Automatic metrics simulating human feedback |
| VideoGen-RewardBench (NeurIPS 2025) | 奖励模型评测基准 | Benchmark for video generation reward models |
| GT-SVJ (arXiv 2026) | 自监督视频评判器 | Generative-transformer self-supervised video judge |
| SoliReward (arXiv 2025) | 抗奖励攻击的奖励模型 | Mitigating reward hacking in video reward models |
| UnifiedReward (arXiv 2026) | 统一个性化奖励模型 | Unified personalized reward for vision generation |

---

## 4. 推理时对齐 (Inference-Time Alignment)

无需更新模型参数，在推理阶段通过不同机制实现可控生成与对齐。

### 4.1 引导技术 (Guidance)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| Boosting Camera Motion (ICLR 2025) | 相机运动引导增强 | Boosting camera motion control for video DiT |
| Focal Guidance (arXiv 2026) | 语义弱层可控制性解锁 | Unlocking controllability from semantic-weak layers |
| ALG (arXiv 2025) | 自适应低通引导 | Adaptive low-pass guidance for motion dynamics |
| Euphonium (arXiv 2026) | 过程奖励梯度引导 | Steering flow matching via process reward gradient |

### 4.2 测试时训练/适配 (Test-Time Training)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| TTT Video DiT (CVPR 2025) | 测试时训练长视频 | One-minute video generation with test-time training |
| CustomTTT (AAAI 2025) | 测试时训练定制 | Motion/appearance customized via test-time training |
| Zo3T (arXiv 2025) | 零样本 3D 轨迹引导 | Zero-shot 3D-aware trajectory-guided I2V via TTT |

### 4.3 外部记忆/检索 (Memory/Retrieval)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| Anchor Forcing (arXiv 2026) | 锚点记忆 + RoPE | Anchor memory and tri-region RoPE for streaming |
| MosaicMem (arXiv 2026) | 混合空间记忆 | Hybrid spatial memory for controllable world models |
| AnchorWeave (arXiv 2026) | 局部空间记忆检索 | World-consistent video with retrieved local memories |
| StoryMem (arXiv 2025) | 多镜头长视频记忆 | Multi-shot long video storytelling with memory |

### 4.4 解码策略 (Decoding Strategies)

| 代表工作 | 会议 | 核心思想 |
|----------|------|----------|
| Self Forcing (NeurIPS 2025) | 桥接训练-测试鸿沟 | Bridging train-test gap in AR video diffusion |
| Rolling Forcing (ICLR 2026) | 实时自回归长视频 | AR long video diffusion in real time |
| Causal Forcing (arXiv 2026) | 因果自回归蒸馏 | AR diffusion distillation for real-time interactive |
| Motion Forcing (arXiv 2026) | 解耦运动动态 | Decoupled framework for robust motion dynamics |
| Geometry Forcing (ICLR 2026) | 3D 表征联姻 | Marrying video diffusion and 3D representation |

### 4.5 安全对齐 (Safety Alignment)

| 代表工作 | 会议 | 核心思想 |
|----------|------|------|
| SafeSora (NeurIPS 2024) | 安全数据集与评估 | Towards safety alignment for text-to-video |
| EraseAnything++ (arXiv 2026) | 概念擦除 | Concept erasure in rectified flow transformers |
| Silencer (CVPR 2025) | 对抗样本消除音频控制 | Adversarial examples to nullify audio control |

---

## 方法演化时间线

```
2023 ─ SFT 基础 (Tune-A-Video, VideoComposer, DreamPose)
  │
2024 ─ SFT 扩展 + 蒸馏起步 + RLHF 早期探索
  │     ├─ 主体定制: ConsisID, MotionBooth
  │     ├─ 运动控制: Go-with-the-Flow, TrackDiffusion
  │     ├─ 蒸馏: SF-V, T2V-Turbo
  │     └─ 偏好: InstructVideo, VideoScore
  │
2025 ─ 偏好优化爆发 + 世界模型融合 + 实时生成
  │     ├─ DPO 系列: VideoDPO, DenseDPO, PhyGDPO
  │     ├─ 物理对齐: WISA, VideoREPA, PhysCorr
  │     ├─ 蒸馏加速: Diffusion APT, DOLLAR, DCM
  │     ├─ 长视频: FramePack, Long Context Tuning
  │     └─ RL: VideoAlign, VADER, PhysRVG
  │
2026 ─ GRPO 主导 + 世界模型对齐 + 交互式生成
        ├─ GRPO 扩展: BranchGRPO, TAGRPO, Identity-GRPO
        ├─ 解码策略: Causal/Anchor/Motion/Geometry Forcing
        ├─ 世界模型: WorldCompass, SPIRAL, EVA
        └─ 记忆机制: MosaicMem, AnchorWeave, StoryMem
```

## 子分类

- [Conference Papers](./conference-papers/) — 已被顶级会议/期刊录用的论文 (174 篇)
- [arXiv Papers](./arxiv-papers/) — arXiv 预印本论文 (255 篇)
