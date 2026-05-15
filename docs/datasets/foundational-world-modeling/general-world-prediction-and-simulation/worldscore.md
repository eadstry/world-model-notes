---
title: "WorldScore: A Unified Evaluation Benchmark for World Generation"
design: "WorldScore"
arxiv: https://arxiv.org/abs/2504.00983
github: https://github.com/haoyi-duan/WorldScore
---

# WorldScore: A Unified Evaluation Benchmark for World Generation

::: info 论文信息
- **Design**: WorldScore
- **论文全称**: WorldScore: A Unified Evaluation Benchmark for World Generation
- **arXiv**: [https://arxiv.org/abs/2504.00983](https://arxiv.org/abs/2504.00983)
- **GitHub**: [https://github.com/haoyi-duan/WorldScore](https://github.com/haoyi-duan/WorldScore)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2504.00983](https://arxiv.org/abs/2504.00983)
- **GitHub**: [https://github.com/haoyi-duan/WorldScore](https://github.com/haoyi-duan/WorldScore)

## 简介
WorldScore 是首个统一的"世界生成"（World Generation）评估基准（发表于 ICCV 2025）。该基准将世界生成分解为一系列基于显式相机轨迹布局的"下一场景生成"（next-scene generation）任务，从而实现从3D和4D场景生成到视频生成模型等多种方法的统一评估。

WorldScore 基准涵盖了一个精心策划的3,000个测试样本的数据集，横跨多样化的世界类型：静态和动态、室内和室外、照片级真实和风格化场景。评估指标通过三个关键维度来衡量生成的世界：可控性（controllability）、质量（quality）和动态性（dynamics）。

通过对19个代表性模型（包括开源和闭源模型）的广泛评估，WorldScore 揭示了每个模型类别面临的关键洞察和挑战。该基准被认为是首个能够统一公平比较不同类型世界生成方法的评估框架，标志着世界模型评估从分散走向标准化的重要一步。

## 关键特征
- **数据规模**: 3,000个精心策划的测试样本
- **数据模态**: 3D/4D场景和视频生成
- **主要指标**: 可控性、质量、动态性三维度
- **领域**: 世界生成、3D/4D场景生成、视频生成

## 与世界模型的关系
WorldScore 为视觉世界模型（VWM）提供了最具系统性的评估方案之一。通过将评估分解为可控性、质量和动态性三个维度，它直接对应了世界模型的三大核心能力：对外部输入的响应能力（可控性）、对世界状态的保真建模（质量）和对物理动态的准确模拟（动态性）。WorldScore 的统一视角有助于弥合3D/4D生成和视频生成两个研究方向之间的分裂，推动统一的世界模型评估标准。

## 代表性用途
- WorldScore (Duan et al., ICCV 2025) - 原始论文，评估19个代表性世界生成模型
- 3D/4D场景生成与视频生成模型的统一比较
- 世界生成模型排行榜和性能追踪
