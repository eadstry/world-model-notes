---
title: "视频生成后训练与对齐"
---

# 视频生成后训练与对齐

::: tip 综述
本分类基于综述论文 **"Video Generation Models: A Survey of Post-Training and Alignment"** (Li et al., 2026, TechRxiv)，系统梳理视频生成模型的后训练与对齐技术。以下内容整合了综述的 taxonomy 框架与 Awesome-Video-Generation-Post-Training 仓库中的最新论文。
:::

## 背景与动机

尽管大规模预训练极大提升了视频生成模型的质量，但将这些模型与**人类意图**、**物理约束**和**部署需求**对齐仍面临巨大挑战。后训练（Post-Training）技术因此成为现代视频生成研究的核心焦点。

核心对齐目标：

| 维度 | 目标 | 典型挑战 |
|------|------|----------|
| **意图对齐** | 生成符合文本/多模态指令的视频 | 复杂组合生成、多主体一致、时序叙事 |
| **物理对齐** | 遵循真实世界的物理规律 | 重力、碰撞、流体、光照一致性 |
| **效率对齐** | 满足实时/低延迟部署需求 | 推理步数、显存占用、长视频生成 |
| **安全对齐** | 避免有害/偏见内容生成 | 概念擦除、内容过滤、隐私保护 |

## 后训练方法 Taxonomy

视频生成后训练方法可分为四大范式，呈递进关系：

```
预训练模型
    │
    ├── 1. 监督微调 (SFT) ──────── 高质量标注数据的领域适配
    │       ├─ 主体驱动生成 (Subject-Driven)
    │       ├─ 运动控制 (Motion Control)
    │       ├─ 相机控制 (Camera Control)
    │       ├─ 指令跟随编辑 (Instruction-Based Editing)
    │       └─ 领域适配 (Domain Adaptation)
    │
    ├── 2. 自训练与蒸馏 ───────── 效率与质量的双向提升
    │       ├─ 自训练 (Self-Training / Self-Play)
    │       ├─ 知识蒸馏 (Knowledge Distillation)
    │       ├─ 对抗后训练 (Adversarial Post-Training)
    │       └─ 一致性模型 (Consistency Models)
    │
    ├── 3. 偏好优化 ────────────── 人类偏好信号的注入
    │       ├─ RLHF / RLAIF (基于强化学习的反馈)
    │       ├─ DPO 及其变体 (直接偏好优化)
    │       ├─ GRPO (群体相对策略优化)
    │       └─ 奖励建模 (Reward Modeling)
    │
    └── 4. 推理时对齐 ──────────── 不更新参数的可控生成
            ├─ 引导技术 (Guidance: CFG, Motion, Camera)
            ├─ 测试时训练 (Test-Time Training/Adaptation)
            ├─ 外部记忆 (External Memory/Retrieval)
            ├─ 解码策略 (Decoding: Forcing, Rolling, Causal)
            └─ 安全对齐 (Safety: 概念擦除、内容过滤)
```

## 关键趋势 (2024–2026)

1. **从 SFT 到 RL**：早期工作依赖 SFT + LoRA 微调，近期大量工作转向 RL/DPO/GRPO 进行偏好对齐（如 VideoAlign、VideoDPO、PhysRVG）
2. **物理对齐**：物理一致性成为核心关注点，可验证奖励（verifiable rewards）用于后训练物理规律（PhyGDPO、WISA、VideoREPA）
3. **蒸馏加速**：扩散对抗后训练（APT）将多步扩散蒸馏为 1-4 步推理，实现实时交互（Causal Forcing、Rolling Forcing、DOLLAR）
4. **世界模型融合**：视频生成作为世界模拟器的思路成熟，几何/3D 先验蒸馏到视频模型（VIGOR、Geometry Forcing、WorldCompass）
5. **长视频一致性**：自回归 + 记忆机制解决长视频漂移问题（FramePack、BlockVid、Anchor Forcing）

## 子分类导航

| 入口 | 内容 | 规模 |
|------|------|------|
| [**Methods → Conference**](./methods/conference-papers/) | ICLR/NeurIPS/CVPR/ICCV/ICML/AAAI/ACM MM/WACV 等顶会论文 | 174 篇 |
| [**Methods → arXiv**](./methods/arxiv-papers/) | arXiv 预印本论文 | 255 篇 |
| [**Datasets**](./datasets/) | 物理仿真、安全对齐、主体定制等训练/评测数据集 | 21 个 |
| [**Benchmarks**](./benchmarks/) | T2V 对齐、物理一致性、时序叙事、安全评测基准 | 58 个 |
| [**Methods 概览**](./methods/) | 四大方法范式的详细拆解与代表性工作 | — |

## 外部资源

- [Awesome-Video-Generation-Post-Training (GitHub)](https://github.com/CyL97/Awesome-Video-Generation-Post-Training) — 持续更新的论文、数据集和基准列表
- [Survey PDF](https://github.com/CyL97/Awesome-Video-Generation-Post-Training/blob/main/paper/Video_Generation_Post_Training_Survey.pdf) — 综述论文原文 (Li et al., 2026)
- [VideoGen-RewardBench](https://huggingface.co/datasets/KwaiVGI/VideoGen-RewardBench) — 视频生成奖励模型评测基准

## 相关领域交叉

- **世界模型** — 视频扩散作为世界模拟器，共享 DiT/3D VAE 技术栈 → [世界模型架构](../world-models/architectures/)
- **具身智能** — 视频生成用于机器人操控规划 → [世界模型应用](../world-models/applications/)
- **自动驾驶** — 驾驶场景视频生成与预测 → [自动驾驶世界模型](../world-models/datasets-benchmarks/domain-specific-world-modeling/autonomous-driving/)
