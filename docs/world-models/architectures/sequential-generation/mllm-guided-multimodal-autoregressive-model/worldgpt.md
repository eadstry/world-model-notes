---
title: "WorldGPT: Empowering LLM as Multimodal World Model"
design: "WorldGPT"
arxiv: https://arxiv.org/abs/2404.18202
github: https://github.com/DCDmllm/WorldGPT
---

# WorldGPT: Empowering LLM as Multimodal World Model

::: info 论文信息
- **Design**: WorldGPT
- **论文全称**: WorldGPT: Empowering LLM as Multimodal World Model
- **arXiv**: [https://arxiv.org/abs/2404.18202](https://arxiv.org/abs/2404.18202)
- **GitHub**: [https://github.com/DCDmllm/WorldGPT](https://github.com/DCDmllm/WorldGPT)
- **发表日期**: 2024年4月，MM 2024 Oral, Top 4%
- **作者**: Zhiqi Ge, Hongzhe Huang, Mingze Zhou, Juncheng Li, Guoming Wang, Siliang Tang, Yueting Zhuang，浙江大学
:::

### 核心思想

WorldGPT 是一个具有里程碑意义的工作，首次系统性地**让大语言模型（LLM）承担通用世界模型的角色**。该工作构建了一个基于多模态大语言模型（MLLM）的通才世界模型（generalist world model），通过从数百万视频中学习世界动态演变规律。WorldGPT 的核心洞察是：如果 MLLM 拥有足够丰富的常识和视觉理解能力，它是否能被训练成能够预测世界如何变化的模型？

WorldGPT 还引入了一个新颖的**认知架构**（cognitive architecture），包括记忆卸载（memory offloading）、知识检索（knowledge retrieval）和上下文反思（context reflection）三个组件。这一认知架构使 WorldGPT 在专业领域和长序列仿真中表现更强大，解决了 LLM 在长期世界建模中的记忆衰减问题。此外，论文还提出了 WorldNet 基准——一个覆盖多种真实场景的多模态状态转移预测基准。

### 方法架构

遵循 VWM 经典分层架构：
- **表示学习（Representation Learning）**：WorldGPT 以 MLLM 架构为基础，使用 Vicuna v0 7B 作为语言解码器，使用 LanguageBind 作为统一的图像/视频/音频编码器。LanguageBind 通过对比学习将不同模态映射到共享嵌入空间，使 WorldGPT 能够在统一的文本表示空间中处理多模态状态输入（图像、视频、音频、文本）。模型采用渐进式状态转移训练（progressive state transition training），从单模态逐渐扩展到多模态的世界动态学习。
- **未来预测（Future Prediction）**：WorldGPT 的核心训练范式是学习"当前状态 + 动作"预测"下一个状态"的转移模式。模型接收一个视频/图像/音频/文本的多模态输入，自回归地预测目标模态的 LanguageBind 嵌入。对于可视化输出，WorldGPT 可连接扩散模型（Stable Diffusion、ZeroScope、AudioLDM）将预测的嵌入解码为视觉/音频内容。这种"嵌入预测 + 扩散解码"的流水线巧妙弥合了 MLLM 的语义理解与生成式模型的视觉/音频生成能力之间的鸿沟。
- **动作与交互（Action & Interaction）**：WorldGPT 的认知架构使其超越了简单的状态预测。记忆卸载将长期记忆存储到外部数据库，知识检索从外部知识库中获取与当前上下文相关的信息，上下文反思器（ContextReflector）使模型能够从过去的交互中学习和改进。最后，通过"Dream Tuning"方式，WorldGPT 合成多模态指令数据来微调多模态 agent，使 agent 能够在 WorldGPT 的"想象世界"中进行探索和学习。

### 关键实现要点

代码基于 [NExT-GPT](https://github.com/NExT-GPT/NExT-GPT) 和 [LanguageBind](https://github.com/PKU-YuanGroup/LanguageBind) 构建。
- **核心文件**：[`model/worldgpt.py`](https://github.com/DCDmllm/WorldGPT/blob/main/model/worldgpt.py) 定义了 WorldGPT 模型架构，包含 Vicuna 语言解码器和多模态编码/解码投影。
- **训练脚本**：[`train.py`](https://github.com/DCDmllm/WorldGPT/blob/main/train.py) 使用 DeepSpeed 进行分布式训练，支持混合精度。
- **数据预处理**：[`preprocess.py`](https://github.com/DCDmllm/WorldGPT/blob/main/preprocess.py) 将原始数据预处理为 LanguageBind 嵌入以供训练。
- **推理接口**：[`batch_inference.py`](https://github.com/DCDmllm/WorldGPT/blob/main/batch_inference.py) 提供批量推理，[`visualized_inference.ipynb`](https://github.com/DCDmllm/WorldGPT/blob/main/visualized_inference.ipynb) 提供可视化演示。
- **数据格式**：WorldNet 数据集采用 JSON 格式标注状态转移，支持图像（.jpg）、视频（.mp4）、音频（.wav）和文本多模态。

### 关键创新点

1. **MLLM 作为世界模型骨干**：首次将多模态 LLM 系统性地构建为通才世界模型，从百万级视频中学习世界动态。
2. **认知架构**：记忆卸载 + 知识检索 + 上下文反思三层机制，解决 LLM 在长期世界建模中的记忆衰减问题。
3. **WorldNet 基准**：构建了覆盖多场景的多模态状态转移预测基准，为世界模型研究提供了标准化平台。
4. **Dream Tuning 范式**：用世界模型合成训练数据来训练 agent，展示了世界模型作为"数据工厂"的附加用途。
5. **渐进式状态转移训练**：从简单的单模态状态转移逐步过渡到复杂的跨模态状态转移，稳定的训练过程。

### 关键实验结果

在 WorldNet 基准上的实验表明，WorldGPT 能够准确模拟状态转移模式，验证了其在预测复杂场景动态方面的有效性。在 Dream Tuning 实验中，使用 WorldGPT 合成数据训练的 agent 在多个任务上达到与使用真实数据微调相当的性能，证明了合成世界模型数据的可靠性。论文获 MM 2024 Oral 录用（Top 4%）。

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
