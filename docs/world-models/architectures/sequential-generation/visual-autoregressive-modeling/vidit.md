---
title: "Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators"
design: "VidIT"
arxiv: https://arxiv.org/abs/2407.07356
---

# VidIT: Video In-context Learning

::: info 论文信息
- **Design**: VidIT
- **论文全称**: Video In-context Learning: Autoregressive Transformers are Zero-Shot Video Imitators
- **arXiv**: [https://arxiv.org/abs/2407.07356](https://arxiv.org/abs/2407.07356)
- **Website**: [https://www.microsoft.com/en-us/research/project/ar-videos/](https://www.microsoft.com/en-us/research/project/ar-videos/)
:::

## 学习笔记

### 核心思想

VidIT（Video In-context Learning）是微软研究院发表在 ICLR 2025 的工作，探索了一种全新的视频生成模型范式——以视觉信号作为模型与环境的接口。核心思想是：给定一个示范视频（如折纸、绘画等操作过程），自回归 Transformer 通过上下文学习（in-context learning）"理解"示范中的运动规律和操作模式，然后为零样本的新初始场景生成对应的操作视频。本质上，这是一个通用视频模仿模型。

VidIT 将视频生成模型从"生成可控视频"推向"理解并模仿任意操作过程"。不同于传统方法需要文本指令或标签，VidIT 从原始视频数据中自我监督学习。模型在训练时从未见过标注视频，却能在推理时仅凭一个示范视频精确模仿未知操作。论文通过专门的评估指标（像素级和语义级视频评分、人工评分）验证了这一范式，并首次实证了视频模仿模型的 scaling law。

### 架构设计

- **Vision Encoding（视觉编码）**：VidIT 将视频帧通过 VQ-VAE 映射为离散视觉 token 序列。关键设计在于上下文窗口的构建：将示范视频的多帧 token 序列与目标视频的初始帧 token 拼接到同一序列中，形成"示范场景 + 目标场景"的上下文。与语言模型的 few-shot prompting 类似，这种多帧拼接使 Transformer 能通过注意力机制自动发现示范与目标之间的视觉转换对应关系。
- **Knowledge Learning（知识学习）**：训练为自回归 Transformer 在大规模视频数据集上的标准 next-token prediction。模型在训练中从未见过任何标注的任务形式，但通过视频帧间的转换规律和场景示范的上下文连接，学习到了丰富的视觉动力学和操作知识。关键是足够大的自回归视觉模型能够从上下文中提取并迁移这些知识。
- **Controllable Simulation（可控模拟）**：VidIT 的控制不是通过传统的控制信号（如文本），而是通过示范视频本身作为控制信号。用户只需提供不同的示范视频来指定不同操作——提供一段"折衣服"的示范 + 一件新衣服的初始帧，模型即生成"折这件新衣服"的视频。这种控制方式极大降低了用户使用门槛。

### 关键创新

- **首次证明视频上下文学习范式**：自回归视觉模型可以像语言模型一样，通过观看示范视频来模仿任意操作。
- **视觉信号作为通用控制接口**：以示范视频作为控制信号，实现了比文本/参数更直观、更丰富的任务指定方式。
- **视频模仿的 scaling law**：实验证明随着模型参数量和数据量的增加，模仿能力呈可预测的改善趋势。
- **全面评估体系**：建立了像素级、语义级、人工评分等多维度的评估指标体系。

### 实验结果要点

VidIT 在多种日常和机器人操作任务上验证了强大的模仿能力：折纸、绘画、物体操作等只需 2-4 帧示范视频即可精确模仿。在微软内部的大规模自监督学习实验中，VidIT 展现出清晰的 scaling 行为：从 300M 到 3B 参数，模仿质量持续提升。在跨场景泛化测试中，约 70% 的任务可通过单一示范视频实现准确模仿，验证了视觉上下文作为通用控制机制的可行性。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
