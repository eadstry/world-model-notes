---
title: "Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models"
arxiv: https://arxiv.org/abs/2506.09042v3
github: https://github.com/nv-tlabs/Cosmos-Drive-Dreams
website: https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams/
venue: arXiv
year: 2025
---

# Cosmos-Drive-Dreams: Scalable Synthetic Driving Data Generation with World Foundation Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2506.09042v3](https://arxiv.org/abs/2506.09042v3)
- **GitHub**: [https://github.com/nv-tlabs/Cosmos-Drive-Dreams](https://github.com/nv-tlabs/Cosmos-Drive-Dreams)
- **Website**: [https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams/](https://research.nvidia.com/labs/toronto-ai/cosmos_drive_dreams/)
:::

## 学习笔记

### 核心贡献
- 提出 Cosmos-Drive-Dreams，首个基于世界基础模型的规模化自动驾驶合成数据生成管线，系统性覆盖长尾/罕见边缘场景
- 从 NVIDIA Cosmos 世界基础模型微调得到 Cosmos-Drive 系列专用模型，支持可控、高保真、多视角、时空一致的驾驶视频生成
- 验证合成数据在三个关键下游任务上的增益：3D 车道检测、3D 目标检测、驾驶策略学习
- 全流程开源，包括数据生成管线、模型权重与评估工具
- 通过文本、BEV 布局、轨迹等多种条件信号控制生成内容的场景分布（天气、光照、交通参与者行为等）

### 方法细节
- **模型骨干**：以 NVIDIA Cosmos 世界基础模型为起点，该模型在海量视觉数据上预训练，具备强泛化的物理世界先验；在此基础上使用大规模驾驶场景数据（多相机环视、时序序列）进行领域微调
- **多视角时空一致性**：通过专门的时空注意力机制（spatial-temporal attention）确保多相机视角间的一致性——同一时刻不同相机的画面保持几何一致，同一相机不同时刻的画面保持时序平滑
- **可控生成**：支持多模态条件注入，包括自然语言场景描述、BEV 语义/实例布局图、自车轨迹与速度、天气与光照编码等，实现对生成内容的多维度精确控制
- **长尾场景覆盖**：系统性地采样罕见场景类别（如道路上散落货物、行人突然横穿、极端雨雪天气），通过 prompt 工程与布局扰动生成对应的合成驾驶视频，弥补真实数据集中的分布缺口
- **下游评估**：将合成数据与真实数据混合训练感知/规划模型，在 nuScenes 和内部基准上报告 AP、F1、规划误差等指标的提升

### 关键发现
- 合成驾驶数据能有效提升感知模型在罕见/高难度场景上的泛化能力，与真实数据形成互补而非替代关系
- 多视角时空一致性是世界模型应用于自动驾驶数据生成的核心技术挑战，Cosmos-Drive 的时空注意力机制是解决此问题的关键
- 合成数据的分布控制（场景多样性、难度梯度、与目标域的匹配度）对下游收益至关重要，不加控制的随机生成效果有限

### 方法归类
- **范式**: 世界基础模型 + 领域微调 + 可控合成数据生成
- **关键技术**: 多视角时空一致视频生成、可控条件注入（文本/BEV/轨迹）、长尾场景采样、感知与规划下游评估
- **适用场景**: 自动驾驶感知数据增强、边缘场景覆盖、3D 检测/车道检测/端到端驾驶策略训练
