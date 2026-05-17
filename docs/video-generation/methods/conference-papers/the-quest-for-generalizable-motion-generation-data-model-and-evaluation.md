---
title: "The Quest for Generalizable Motion Generation: Data, Model, and Evaluation"
arxiv: https://arxiv.org/abs/2510.26794v1
github: https://github.com/MotrixLab/ViMoGen
venue: ICLR
year: 2026
---

# The Quest for Generalizable Motion Generation: Data, Model, and Evaluation

::: info 论文信息
- **Venue**: ICLR (2026)
- **arXiv**: [https://arxiv.org/abs/2510.26794v1](https://arxiv.org/abs/2510.26794v1)
- **GitHub**: [https://github.com/MotrixLab/ViMoGen](https://github.com/MotrixLab/ViMoGen)
:::

## 学习笔记

### 核心贡献
- 系统性地将视频生成（ViGen）领域的知识迁移至三维人体运动生成（MoGen），覆盖数据、模型和评估三大支柱。
- 构建 ViMoGen-228K 数据集，包含 228K 高质量运动样本，融合高保真光学 MoCap 数据、网络视频语义标注样本及 SOTA 视频生成模型合成的样本，提供文本-运动对和文本-视频-运动三元组。
- 提出 ViMoGen，一个基于流匹配（flow-matching）的扩散 Transformer，通过门控多模态条件化统一 MoCap 数据与 ViGen 模型的先验知识；另提供轻量蒸馏变体 ViMoGen-light。
- 发布 MBench 分层基准，用于细粒度评估运动质量、提示符合度和泛化能力。

### 方法细节
- ViMoGen-228K 的数据来源包括：光学 MoCap 系统采集的高精度动作数据、从互联网视频中提取并语义标注的动作片段、以及由 SOTA ViGen 模型生成的合成运动序列。
- ViMoGen 采用流匹配扩散 Transformer 架构，通过门控机制融合多模态条件（文本、视频、运动先验），直接学习从噪声到运动序列的映射。
- ViMoGen-light 通过知识蒸馏去除对视频生成模型的依赖，保留泛化能力的同时降低推理成本。
- MBench 从运动质量（物理合理性、平滑性）、提示符合度（语义对齐）和泛化能力（零样本迁移）三个维度进行分层评估。

### 关键发现
- 视频生成领域在建模人类行为方面展现了远优于运动生成的泛化能力，表明 ViGen 先验对 MoGen 具有可迁移价值。
- 大规模语义多样化的训练数据（特别是 ViGen 合成的多样化运动）是提升 MoGen 泛化能力的关键。
- 流匹配范式在运动生成任务上优于传统扩散方法，在生成质量和采样效率之间取得更好平衡。

### 方法归类
- **范式**: [视频知识迁移 → 运动生成 / 流匹配扩散 Transformer]
- **关键技术**: [ViMoGen-228K 多源数据集 + 门控多模态条件化 + 流匹配 DiT + 知识蒸馏 + MBench 分层评估]
- **适用场景**: [三维人体运动生成，文本到运动，视频到运动，零样本泛化运动合成]
