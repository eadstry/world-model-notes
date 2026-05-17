---
title: "AID: Adapting Image2Video Diffusion Models for Instruction-guided Video Prediction"
arxiv: https://arxiv.org/abs/2406.06465
github: ""
website: "https://chenhsing.github.io/AID/"
venue: arXiv
year: 2024
---

# AID: Adapting Image2Video Diffusion Models for Instruction-guided Video Prediction

::: info 论文信息
- **Venue**: arXiv 2024
- **arXiv**: [https://arxiv.org/abs/2406.06465](https://arxiv.org/abs/2406.06465)
- **GitHub**: 
- **Website**: [https://chenhsing.github.io/AID/](https://chenhsing.github.io/AID/)
:::

## 学习笔记

### 核心贡献
- 首次将预训练 Image2Video 扩散模型的视频动态先验迁移至文本引导视频预测（TVP）任务，在保持时序稳定性的同时注入指令控制
- 设计 Dual Query Transformer (DQFormer) 架构，将 MLLM 预测的未来视频状态、文本指令和初始帧信息融合为统一条件嵌入
- 提出 Long-Short Term Temporal Adapters 和 Spatial Adapters，以参数高效微调方式快速适配通用视频扩散模型到特定场景

### 方法细节
- 利用多模态大语言模型（MLLM）根据初始帧和文本指令预测未来视频状态特征，作为高层语义条件信号
- DQFormer 采用双查询（dual query）机制：一个查询分支编码指令语义，另一个查询分支编码帧的时空特征，交叉注意力融合后输出条件嵌入
- Long-Short Term Temporal Adapters：短期分支捕捉相邻帧的局部运动变化，长期分支建模全局时序依赖，二者互补提升时序一致性
- Spatial Adapters 在空间维度注入场景特定的外观先验，保持生成帧的结构稳定性
- 整体训练仅更新 Adapters 和 DQFormer，冻结 Image2Video 骨干网络，实现极低训练成本迁移

### 关键发现
- 预训练 Image2Video 扩散模型蕴含丰富的视频动态先验，直接迁移比从头训练视频预测模型显著提升帧间一致性
- AID 在 Bridge 数据集上 FVD 相较 SOTA 降低 91.2%，在 Something-Something V2 上降低 55.5%，大幅超越现有方法
- Adapter 设计使模型可在 Epic Kitchen-100、UCF-101 等多个场景通用且训练高效

### 方法归类
- **范式**: 视频预测
- **关键技术**: Image2Video 扩散模型迁移、DQFormer 双查询融合、Long-Short Term 时序适配器、MLLM 条件引导、参数高效微调
- **适用场景**: 文本引导视频预测、机器人操控规划、虚拟现实内容生成、自动驾驶未来帧预测
