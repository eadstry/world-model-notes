---
title: "TiViBench: Benchmarking Think-in-Video Reasoning for Video Generative Models"
arxiv: https://arxiv.org/abs/2511.13704
github: https://github.com/EnVision-Research/TiViBench
website: https://haroldchen19.github.io/TiViBench-Page/
venue: arXiv
year: 2025
---

# TiViBench: Benchmarking Think-in-Video Reasoning for Video Generative Models

::: info 论文信息
- **Venue**: arXiv (2025)
- **arXiv**: [https://arxiv.org/abs/2511.13704](https://arxiv.org/abs/2511.13704)
- **GitHub**: [https://github.com/EnVision-Research/TiViBench](https://github.com/EnVision-Research/TiViBench)
- **Website**: [https://haroldchen19.github.io/TiViBench-Page/](https://haroldchen19.github.io/TiViBench-Page/)
:::

## 学习笔记

### 核心贡献
- 提出了 TiViBench，首个系统性评估图像到视频（I2V）生成模型推理能力的层级化评测基准，填补了现有基准仅关注视觉保真度和时序连贯性的不足
- 将视频生成推理能力分解为四个维度：结构推理与搜索、空间与视觉模式推理、符号与逻辑推理、动作规划与任务执行，覆盖 24 种任务场景和 3 个难度等级
- 实验表明商用模型（Sora 2、Veo 3.1）展现出较强的推理潜力，而开源模型受训练规模和数据多样性的限制仍有较大提升空间
- 提出了 VideoTPO，一种受偏好优化启发的测试时推理增强策略，通过 LLM 对生成候选进行自分析来提升推理性能，无需额外训练或奖励模型

### 方法细节
- TiViBench 采用层级化结构，将推理能力从低层（结构推理）到高层（任务规划）逐级分解
- 四个评测维度下各设若干个具体任务，每个任务包含 Easy、Medium、Hard 三个难度等级，共 24 个评测场景
- VideoTPO 首先生成多个候选视频，然后由 LLM 对每个候选进行分析，识别优势与不足，最终通过偏好优化机制选出最佳推理结果
- VideoTPO 是一种纯测试时策略，不需要额外训练数据、模型微调或奖励模型的参与
- 评测自动化程度高，减少人工评估的主观偏差

### 关键发现
- 当前最强商用 I2V 模型（Sora 2、Veo 3.1）在处理复杂逻辑推理任务时仍存在明显瓶颈
- 开源 I2V 模型在推理能力上具有未被开发的潜力，制约其表现的主要因素是训练规模和数据多样性而非架构差异
- VideoTPO 在多个推理维度上一致提升模型表现，验证了测试时策略对推理增强的有效性

### 方法归类
- **范式**: 视频生成模型评测 / 推理能力评估
- **关键技术**: 层级化基准设计、偏好优化（VideoTPO）、LLM 自分析、测试时推理增强
- **适用场景**: I2V 模型推理能力诊断、视频生成模型选型、生成模型训练方向指导
