---
title: "WorldWander: Bridging Egocentric and Exocentric Worlds in Video Generation"
arxiv: "https://arxiv.org/abs/2511.22098"
github: "https://github.com/showlab/WorldWander"
website: "https://lulupig12138.github.io/WorldWander/"
venue: "arXiv"
year: 2025
---

# WorldWander: Bridging Egocentric and Exocentric Worlds in Video Generation

::: info 论文信息
- **Venue**: arXiv 2025
- **arXiv**: [2511.22098](https://arxiv.org/abs/2511.22098)
- **GitHub**: [showlab/WorldWander](https://github.com/showlab/WorldWander)
- **Website**: [项目页面](https://lulupig12138.github.io/WorldWander/)
:::

## 学习笔记

### 核心贡献
- 首次系统研究视频生成中的多视角翻译任务：第一人称（egocentric）与第三人称（exocentric）视频之间的双向转换
- 提出 WorldWander，一个基于上下文学习（in-context learning）的跨视角视频生成框架，无需视角对齐的逐帧标注
- 引入两种核心技术组件：上下文视角对齐（In-Context Perspective Alignment）与协作位置编码（Collaborative Position Encoding）
- 构建 EgoExo-8K 数据集，包含 8K 条同步配对的第一人称-第三人称视频三元组，覆盖合成与真实场景

### 方法细节
- 基于视频 Diffusion Transformer（DiT）架构，将源视角视频帧作为上下文条件输入，引导目标视角视频生成
- 上下文视角对齐（In-Context Perspective Alignment）：将源视角片段与目标视角片段在 token 空间中交错排列，使模型通过自注意力机制隐式学习视角间的几何对应关系
- 协作位置编码（Collaborative Position Encoding）：在标准时空位置编码基础上引入跨视角协作编码，使同一时刻但不同视角的 token 共享部分位置信息，强化时序同步性
- EgoExo-8K 数据集来源包括：Habitat 仿真器合成的室内导航视频、Ego4D 真实场景片段重采样配对、以及定制化 3D 场景渲染
- 训练采用两阶段策略：先在通用视频数据上预训练，再在 EgoExo-8K 上微调，微调时使用视角一致性损失约束跨视角帧的特征对齐
- 推理阶段支持单视频输入的多视角输出生成，无需测试时优化

### 关键发现
- WorldWander 在视角同步性、人物一致性、背景保真度三个维度上均显著优于基于图像翻拍（image-to-image）或显式 3D 重建的基线方法
- 协作位置编码对维持同一时刻不同视角间的时序对齐至关重要，去除该模块会导致视角间出现明显的时间错位
- 上下文学习范式使模型具备一定的未见过视角泛化能力，在训练集未覆盖的中间视角上也能生成合理结果

### 方法归类
- **范式**: 上下文学习视频生成（In-Context Video Generation）
- **关键技术**: Diffusion Transformer、跨视角上下文对齐、协作位置编码、自注意力视角匹配
- **适用场景**: 影视制作中的多机位视频合成、具身 AI 的视角转换数据增强、世界模型中的跨视角推理
