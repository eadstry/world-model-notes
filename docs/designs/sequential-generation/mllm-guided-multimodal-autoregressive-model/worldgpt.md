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
- **发表于**: 2024年4月（MM 2024 Oral, Top 4%）
- **作者**: Zhiqi Ge, Hongzhe Huang, Mingze Zhou, Juncheng Li, Guoming Wang, Siliang Tang, Yueting Zhuang（浙江大学）
:::

## 核心思想

WorldGPT 提出了一个宏大的愿景：**让大语言模型（LLM）扮演世界模拟器的角色**。该工作构建了一个基于多模态大语言模型（MLLM）的通才世界模型（generalist world model），通过分析来自多个领域的数百万视频来学习世界动态的演变规律。WorldGPT 的核心主张是——如果语言的抽象足够丰富，我们能否在文本空间中运行世界模拟？

WorldGPT 的另一重贡献是提出了一套新颖的**认知架构**（cognitive architecture），包含记忆卸载（memory offloading）、知识检索（knowledge retrieval）和上下文反思（context reflection）三个组件。这套认知架构使得 WorldGPT 能够在专业化场景和长期任务中表现更强，避免了 LLM 在处理长序列世界模拟时的记忆衰退问题。此外，论文还构建了 WorldNet 基准——一个覆盖多种真实生活场景的多模态状态转换预测基准。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：WorldGPT 以 MLLM 架构为基础，使用 Vicuna V0 7B 作为语言解码器，使用 LanguageBind 作为统一的图像/视频/音频编码器。LanguageBind 通过语言语义对齐将不同模态映射到共享嵌入空间，使得 WorldGPT 能够在统一的表征空间中处理多模态状态输入（图像、视频、音频、文本）。模型采用渐进式状态转换训练（progressive state transition training）从百万级视频中学习跨模态世界动态。

- **未来预测（Future Prediction）**：WorldGPT 的核心训练机制是学习从"当前状态 + 动作"预测"下一个状态"的转换模式。模型接收一段视频/图像/音频/文本的多模态输入，自回归地预测目标模态的 LanguageBind 嵌入。对于可视化需求，WorldGPT 还可结合扩散模型（Stable Diffusion、ZeroScope、AudioLDM）将预测的嵌入解码为可视觉化的输出。这种"嵌入预测 + 扩散解码"的两阶段设计将 MLLM 的推理能力与生成模型的视觉/听觉质量解耦。

- **动作与交互（Action & Interaction）**：WorldGPT 的认知架构赋予其超越简单状态预测的交互能力。记忆卸载将长期上下文存储到外部存储中避免遗忘；知识检索允许模型从外部知识库中提取与当前场景相关的信息；上下文反思（ContextReflector）则使模型能够审视和修正自身的推理过程。论文还探索了"Dream Tuning"范式——使用 WorldGPT 合成多模态指令数据来微调下游多模态 agent，使 agent 能够在陌生领域中泛化。

## 代码实现要点

开源代码基于 [NExT-GPT](https://github.com/NExT-GPT/NExT-GPT) 和 [LanguageBind](https://github.com/PKU-YuanGroup/LanguageBind) 构建：

- **核心文件**：[`model/worldgpt.py`](https://github.com/DCDmllm/WorldGPT/blob/main/model/worldgpt.py) 定义了 WorldGPT 模型架构，基于 Vicuna 语言解码器和多模态输入/输出投影层
- **训练脚本**：[`train.py`](https://github.com/DCDmllm/WorldGPT/blob/main/train.py) 使用 DeepSpeed 进行分布式训练，支持混合精度
- **数据预处理**：[`preprocess.py`](https://github.com/DCDmllm/WorldGPT/blob/main/preprocess.py) 将原始数据预计算为 LanguageBind 嵌入以加速训练
- **推理接口**：[`batch_inference.py`](https://github.com/DCDmllm/WorldGPT/blob/main/batch_inference.py) 提供批量推理，[`visualized_inference.ipynb`](https://github.com/DCDmllm/WorldGPT/blob/main/visualized_inference.ipynb) 提供可视化推理示例
- **数据格式**：WorldNet 数据集采用 JSON 格式标注状态转换，支持图像（.jpg）、视频（.mp4）、音频（.wav）和文本多模态

## 关键创新点

1. **MLLM 作为世界模拟器**：首次将多模态 LLM 系统性地构建为通才世界模型，从百万级视频中学习跨域世界动态。
2. **认知架构**：记忆卸载 + 知识检索 + 上下文反思的三组件设计，解决了 LLM 在长期世界模拟中的上下文衰减问题。
3. **WorldNet 基准**：构建了覆盖多场景的多模态状态转换预测基准，为世界模型评估提供了标准化平台。
4. **Dream Tuning 范式**：利用世界模型合成数据训练下游 agent，展示了世界模型作为"数据工厂"的新用途。
5. **渐进式状态转换训练**：从简单的单模态状态转换逐步过渡到复杂的跨模态状态转换，稳定了训练过程。

## 代表性结果

在 WorldNet 基准上的实验表明，WorldGPT 能够准确建模状态转换模式，验证了其在理解和预测复杂场景动态方面的有效性。在 Dream Tuning 实验中，使用 WorldGPT 合成数据训练的 agent 在陌生域上达到了与使用真实数据微调相当的性能，证明了合成世界模型数据的可靠性。论文获 MM 2024 Oral 录用（Top 4%）。
