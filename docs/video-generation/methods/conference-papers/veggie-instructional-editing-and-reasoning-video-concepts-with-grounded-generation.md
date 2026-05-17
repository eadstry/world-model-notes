---
title: "VEGGIE: Instructional Editing and Reasoning Video Concepts with Grounded Generation"
arxiv: https://arxiv.org/abs/2503.14350
github: https://github.com/Yui010206/VEGGIE-VidEdit/
website: https://veggie-gen.github.io/
venue: ICCV
year: 2025
---

# VEGGIE: Instructional Editing and Reasoning Video Concepts with Grounded Generation

::: info 论文信息
- **Venue**: ICCV (2025)
- **arXiv**: [https://arxiv.org/abs/2503.14350](https://arxiv.org/abs/2503.14350)
- **GitHub**: [https://github.com/Yui010206/VEGGIE-VidEdit/](https://github.com/Yui010206/VEGGIE-VidEdit/)
- **Website**: [https://veggie-gen.github.io/](https://veggie-gen.github.io/)
:::

## 学习笔记

### 核心贡献
- 提出统一框架 VEGGIE，在单一模型中融合视频概念编辑、目标 grounding 和推理分割等多种任务，基于任意自然语言指令驱动
- 引入课程学习策略：先在大规模图像编辑数据上对齐 MLLM 与扩散模型，再在高质量多任务视频数据上端到端微调
- 提出数据合成 pipeline，利用 I2V 模型将静态图像数据转化为多样化视频编辑训练样本

### 方法细节
- 两阶段架构：MLLM 解析用户指令并输出帧级结构化 query，扩散模型根据 query 渲染编辑后的视频
- MLLM 将指令中的编辑意图（增/删/改）与视频上下文进行 grounded 定位，生成每个帧对应的空间掩码和编辑参数
- 数据合成利用 I2V 模型为静态编辑对注入运动动态，扩展训练数据的覆盖范围

### 关键发现
- VEGGIE 在多种编辑技能上均超越已有方法，且是唯一能在多任务设定下保持稳定性能的模型
- 多个任务之间存在正迁移：视频编辑、grounding 和分割相互增强
- 零样本多模态指令编辑和上下文学习编辑展示了强泛化潜力

### 方法归类
- **范式**: MLLM + 扩散模型联合推理
- **关键技术**: 指令 grounding、课程学习、I2V 数据合成、结构化帧级 query
- **适用场景**: 用户指令驱动的视频编辑、视频目标感知与推理、多任务视频理解-生成融合
