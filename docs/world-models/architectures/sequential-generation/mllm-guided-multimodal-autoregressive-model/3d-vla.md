---
title: "3D-VLA: A 3D Vision-Language-Action Generative World Model"
design: "3D-VLA"
arxiv: https://arxiv.org/abs/2403.09631
website: https://vis-www.cs.umass.edu/3dvla
---

# 3D-VLA: 3D Vision-Language-Action 生成式世界模型

::: info 论文信息
- **Design**: 3D-VLA
- **论文全称**: 3D-VLA: A 3D Vision-Language-Action Generative World Model
- **arXiv**: [https://arxiv.org/abs/2403.09631](https://arxiv.org/abs/2403.09631)
- **Website**: [https://vis-www.cs.umass.edu/3dvla](https://vis-www.cs.umass.edu/3dvla)
:::

## 学习笔记

### 核心思想

3D-VLA 是具身基础模型的一个新方向，以生成式世界模型为桥梁，将 3D 感知、推理与行动统一在同一框架下。与以往仅依赖 2D 图像输入学习动作映射的传统 VLA 模型不同，3D-VLA 构建于一个 3D-based 的大语言模型之上，引入了「交互令牌」（interaction tokens）机制，在统一的嵌入空间中同时处理 3D 场景表示、语言指令和动作序列，实现跨模态的无缝衔接。

该工作的关键突破在于提出了一种统一的 3D 交互式生成框架。模型不仅能理解当前的 3D 场景和指令，还能以自回归方式预测未来的目标图像（goal image）和点云（point cloud）。通过将一系列具身扩散模型（embodied diffusion models）对齐到 LLM 中，3D-VLA 实现了从语言指令到 3D 未来状态预测，再到动作规划的全链条生成能力。为支撑这种训练范式，作者从多源机器人数据中构建了一个大规模 3D 具身指令数据集。

## 相关笔记

- 📂 [MLLM-Guided 多模态自回归模型](../)
- 🌍 [架构总览](/world-models/architectures/)
