---
title: "GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation"
design: "GR-2"
arxiv: https://arxiv.org/abs/2410.06158
---

# GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation

::: info 论文信息
- **Design**: GR-2
- **论文全称**: GR-2: A Generative Video-Language-Action Model with Web-Scale Knowledge for Robot Manipulation
- **arXiv**: [https://arxiv.org/abs/2410.06158](https://arxiv.org/abs/2410.06158)
:::

## 学习笔记

### 核心思想

GR-2 是一个生成式视频-语言-动作（Video-Language-Action）模型，其核心思想是：通过在海量互联网视频上进行大规模预训练，获得通用视觉运动知识，然后高效微调到机器人操作任务中。GR-2 在预训练阶段使用了 **3800 万个互联网视频片段和超过 500 亿个 token** 的大规模预训练，使模型具备了跨场景的物理世界理解和环境泛化能力。

GR-2 代表了从"为特定任务从头训练"到"预训练通用视觉-运动基础模型然后微调"的范式转变。与 LLM 中"预训练 + 微调"的成功范式类似，GR-2 先在海量互联网视频上预训练，学习通用的视觉运动知识，然后即使在从未见过的场景中也能有效泛化，同时微调阶段同时优化视频生成和动作预测。

GR-2 展现出令人印象深刻的多任务学习能力：在 100 多个任务上的平均成功率达到 **97.7%**。更重要的是，GR-2 能泛化到训练期间从未见过的新场景、新物体和新环境。模型还展现出良好的规模扩张特性——随着模型规模增大，性能持续提升，预示着未来更大模型仍有巨大潜力。

### 核心架构

**Vision Encoding（视觉编码）**：GR-2 采用了大规模视频编码方法，在 3800 万个视频片段上进行预训练。视觉编码被量化为离散 token 序列，使用 VQ-VAE 风格的视频分词器。这支持以自回归 Transformer 的 next-token prediction 范式进行训练。预训练数据集规模庞大（50B+ tokens），视觉分词器需要在高压缩率和高保真度之间取得平衡。视觉 token、语言 token 和动作 token 被统一为同一 token 序列。

**Knowledge Learning（知识学习）**：GR-2 的知识学习分为两个阶段：

- **阶段 1：互联网视频预训练**：在 3800 万视频片段（50B+ tokens）上进行大规模预训练。模型通过自回归预测下一帧的视觉 token 来学习通用的视觉运动知识——包括物理规律、物体交互模式和场景结构等。这一阶段不使用任何机器人数据，仅从互联网视频中学习"常识"。

- **阶段 2：机器人轨迹微调**：使用机器人操作数据进行微调，同时优化两个目标：(1) 视频生成——预测给定机器人动作后的未来帧视觉 token；(2) 动作预测——预测机器人的控制动作（末端执行器位置）。这两个目标的联合微调使模型既保留了大量视频中学到的通用知识，又获得了精确的动作预测能力。

**Controllable Simulation（可控模拟）**：GR-2 的控制模拟通过视频生成 + 动作预测的统一框架实现。推理时，模型接收当前视觉观察和语言指令，然后自回归地预测未来视频帧（视频生成分支提供"想象"能力），同时预测对应的机器人动作（动作预测分支提供实际控制输出）。GR-2 的多任务泛化能力来源于大规模预训练——即便在新环境中，模型也能利用从互联网视频中学到的通用知识来理解和应对新场景。

### 关键结果

- 100+ 任务平均成功率 97.7%
- 在全新场景、新物体、新环境中展现出惊人的泛化能力
- 模型规模效应显著：更大模型带来更高成功率
- 38M 视频片段、50B tokens 的预训练数据规模

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
