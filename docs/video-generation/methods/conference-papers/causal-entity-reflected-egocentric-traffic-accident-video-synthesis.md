---
title: "Causal-Entity Reflected Egocentric Traffic Accident Video Synthesis"
arxiv: "https://arxiv.org/abs/2506.23263"
github: ""
website: ""
venue: "ICCV 2025"
year: 2025
---

# Causal-Entity Reflected Egocentric Traffic Accident Video Synthesis

::: info 论文信息
- **Venue**: ICCV 2025
- **arXiv**: [2506.23263](https://arxiv.org/abs/2506.23263)
- **GitHub**: 
- **Website**: 
:::

## 学习笔记

### 核心贡献
- 提出 Causal-VidSyn，首个面向因果实体感知的以自我为中心交通事故视频合成扩散模型
- 利用事故原因描述与驾驶员注视（driver fixations）识别事故参与实体及其行为
- 构建 Drive-Gaze，规模最大的驾驶事故场景驾驶员注视数据集（154 万帧注视标注）
- 支持事故视频编辑、正常到事故视频扩散和文本到视频生成三类任务

### 方法细节
- 设计事故原因回答模块（accident reason answering），从文本描述中解析因果实体关系
- 设计注视条件选择模块（gaze-conditioned selection），利用驾驶员注视点定位关键事故参与者
- 将因果实体信息作为显式条件注入视频扩散模型的去噪过程，实现因果感知生成
- Drive-Gaze 数据集覆盖多种事故类型与驾驶场景，提供帧级别的注视点标注
- 扩散模型在生成过程中显式建模事故因果关系，而非仅依赖统计相关性

### 关键发现
- 在帧质量和因果敏感度两项指标上均超越现有 SOTA 视频扩散模型
- 因果实体感知机制显著提升事故视频的语义合理性与场景一致性
- Drive-Gaze 数据集的注视信息对精准定位事故参与实体至关重要

### 方法归类
- **范式**: 可控视频生成 / 因果感知视频合成
- **关键技术**: 因果实体接地、驾驶员注视条件、事故原因问答、扩散模型条件注入
- **适用场景**: 自动驾驶安全测试、事故场景仿真、驾驶行为分析
