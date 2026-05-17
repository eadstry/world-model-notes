---
title: "arXiv 预印本"
---

# arXiv 预印本 — 视频生成后训练方法

本目录收集 arXiv 上发布的视频生成后训练相关预印本论文，涵盖 2023–2026 年的工作（共 255 篇）。

::: info 注意
arXiv 预印本未经同行评审，部分工作可能同时有会议版本。如有会议版本，请优先参考 [Conference Papers](../conference-papers/) 中的对应条目。
:::

## 按方法范式分类

### 监督微调 (SFT)

| 方向 | 代表 arXiv 工作 (2025–2026) |
|------|---------------------------|
| 主体驱动 | Identity-GRPO, Identity-Preserving I2V via Reward-Guided, Lynx, 3DreamBooth, Slot-ID, DreamVideo-Omni |
| 运动控制 | TAGRPO, FlashMotion, MoGAN, Real-Time Motion-Controllable AR, CoMo, HuMo, RealisMotion |
| 相机控制 | ShotVerse, ConfCtrl, CETCAM, CamC2V, Beyond Inpainting (DepthDirector), Plenoptic Video |
| 指令编辑 | LoRA-Edit, UNIC, DFVEdit, FramePrompt, In-Context Sync-LoRA, PickStyle |
| 领域适配 | GenieDrive, OpenViGA, Exo2EgoSyn, BridgeV2W, Driving with DINO, SAW (手术世界模型) |

### 自训练与蒸馏

| 方向 | 代表 arXiv 工作 (2025–2026) |
|------|---------------------------|
| 知识蒸馏 | Causal Forcing, SwiftVideo, FlashI2V, DC-VideoGen, Optimizing Few-Step |
| 自训练 | WorldCompass, SPIRAL, AR-CoPO, IC-World, Reinforcement Learning with Inverse Rewards |
| 效率优化 | LiteAttention, Attention Surgery, Adaptive Begin-of-Video Tokens, Macro-from-Micro Planning |

### 偏好优化

| 方向 | 代表 arXiv 工作 (2025–2026) |
|------|---------------------------|
| RLHF/RLAIF | FlowPortrait, Reward-Forcing, PhysRVG, PhysMaster, ID-Crafter |
| DPO 变体 | PhyGDPO, PhysCorr, RDPO, Epipolar DPO, McSc (Motion-Corrective), Mind the Generative Details, Beyond Reward Margin |
| GRPO | TAGRPO, Video-as-Answer, Growing GRPO, Identity-GRPO |
| 奖励建模 | GT-SVJ, SoliReward, UnifiedReward, VideoGen-RewardBench, PRFL, Thinking with Frames |

### 推理时对齐

| 方向 | 代表 arXiv 工作 (2025–2026) |
|------|---------------------------|
| 引导 | Focal Guidance, Euphonium, ALG (Adaptive Low-Pass), Plenoptic |
| 测试时训练 | Zo3T (Zero-shot 3D Trajectory via TTT) |
| 记忆/检索 | Anchor Forcing, MosaicMem, AnchorWeave, StoryMem, BlockVid |
| 解码策略 | Causal Forcing, Motion Forcing, BAgger, Objects Slower Than They Appear |
| 安全对齐 | EraseAnything++, SafeMVDrive |

## 热点研究方向 (2026 趋势)

1. **Forcing 系列解码策略** — Causal/Anchor/Motion/Geometry/Rolling/Reward Forcing 形成技术族
2. **GRPO 扩展** — 从基础 GRPO 扩展到 BranchGRPO、TAGRPO、Identity-GRPO 等变体
3. **世界模型对齐** — WorldCompass、SPIRAL、IC-World、EVA 等将视频生成作为世界模拟器进行 RL 后训练
4. **物理可验证奖励** — NewtonRewards、VIGOR、PhyGDPO 使用可验证物理奖励信号
5. **实时交互生成** — Helios、Causal Forcing、Rolling Forcing 实现实时/流式视频生成
6. **长视频一致性** — Anchor Forcing、MosaicMem、BlockVid 解决长视频漂移与一致性

## 外部资源

- [Awesome-Video-Generation-Post-Training arxiv.md](https://github.com/CyL97/Awesome-Video-Generation-Post-Training/blob/main/arxiv.md) — GitHub 仓库原始 arXiv 论文列表
