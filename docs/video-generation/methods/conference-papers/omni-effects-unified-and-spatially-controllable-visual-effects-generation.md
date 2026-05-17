---
title: "Omni-Effects: Unified and Spatially-Controllable Visual Effects Generation"
arxiv: https://arxiv.org/abs/2508.07981v3
github: https://github.com/AMAP-ML/Omni-Effects
website: https://amap-ml.github.io/Omni-Effects.github.io/
venue: AAAI
year: 2026
---

# Omni-Effects: Unified and Spatially-Controllable Visual Effects Generation

::: info 论文信息
- **Venue**: AAAI (2026)
- **arXiv**: [https://arxiv.org/abs/2508.07981v3](https://arxiv.org/abs/2508.07981v3)
- **GitHub**: [https://github.com/AMAP-ML/Omni-Effects](https://github.com/AMAP-ML/Omni-Effects)
- **Website**: [https://amap-ml.github.io/Omni-Effects.github.io/](https://amap-ml.github.io/Omni-Effects.github.io/)
:::

## 学习笔记

### 核心贡献
- 首个统一框架，支持多种视觉特效的文本引导生成与空间可控组合特效生成
- 提出 LoRA-MoE 架构，通过专家组 LoRA 融合多样特效至单一模型，有效缓解跨任务干扰
- 构建 Omni-VFX 数据集，基于图像编辑与首末帧到视频（FLF2V）合成流程实现大规模数据收集

### 方法细节
- LoRA-MoE：以多个专家 LoRA 模块组成混合专家系统，每个 LoRA 专精某一类视觉特效，共享基础模型权重
- Spatial-Aware Prompt (SAP)：将空间掩码信息编码到文本 token 中，使文本提示具备空间位置感知能力
- Independent-Information Flow (IIF)：内置于 SAP 中的隔离模块，防止不同特效的控制信号发生混叠

### 关键发现
- 多特效联合训练面临两大挑战：特效差异性引发的任务干扰与空间不可控性
- LoRA-MoE 结合 IIF 有效解耦了不同特效的生成过程，实现了精确的空间定位与特效分类

### 方法归类
- **范式**: 基于扩散模型的统一 VFX 生成框架
- **关键技术**: LoRA-MoE、空间感知提示（SAP）、独立信息流（IIF）、首末帧到视频合成（FLF2V）
- **适用场景**: 影视后期特效制作、空间可控的复合视觉特效生成、多特效联合生成
