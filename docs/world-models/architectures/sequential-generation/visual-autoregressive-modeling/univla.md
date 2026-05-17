---
title: "Unified Vision-Language-Action Model"
design: "UniVLA"
arxiv: https://arxiv.org/abs/2506.19850
---

# UniVLA: Unified Vision-Language-Action Model

::: info 论文信息
- **Design**: UniVLA
- **论文全称**: Unified Vision-Language-Action Model
- **arXiv**: [https://arxiv.org/abs/2506.19850](https://arxiv.org/abs/2506.19850)
- **GitHub**: [https://github.com/baaivision/UniVLA](https://github.com/baaivision/UniVLA)
:::

## 学习笔记

### 核心思想

UniVLA（Unified Vision-Language-Action Model）是北京智源研究院（BAAI）提出的一个统一视觉、语言和动作三模态的 VLA 模型。不同于当前 VLM 通过调用文本生成动作的方法，UniVLA 将视觉、语言和动作信号统一为离散 token 序列进行自回归建模，实现了原生多模态的统一架构，更好地捕捉了多模态之间的细粒度时序关联，避免了文本中介带来的信息瓶颈。

UniVLA 的第二大贡献是将世界建模作为强增强手段。训练分为两个阶段：预训练阶段和世界模型微调阶段。预训练阶段，模型在大规模视频数据集上进行标准自回归 next-token 训练，学习视觉-语言-动作多模态 token 的统计规律和基本转换规律。世界模型微调阶段使用专门的视频预测任务进行微调，即以历史帧和动作 token 预测未来帧 token。这一阶段的训练让模型建立了可预测的视觉动力学，在机器人操纵任务中证明非常关键。

### 架构设计

- **Vision Encoding（视觉编码）**：UniVLA 使用统一的视觉 tokenizer（基于 VQ-VAE）将图像/视频帧编码为离散 token。动作信号（如关节位置/速度）通过专门的动作 tokenizer 映射为离散 token，两者共享同一词汇表空间，构成单一 token 序列供 Transformer 处理。
- **Knowledge Learning（知识学习）**：知识学习分两阶段进行。(1) 预训练阶段：在包含人类操作视频、示范视频和自然视频的大规模数据集上进行标准自回归 next-token 训练。此阶段模型学习视觉-语言-动作多模态 token 的统计规律和基本转换规律。(2) 世界模型微调阶段：使用专门的视频预测任务进行微调，以历史帧和动作 token 预测未来帧 token。该阶段的核心理念是让模型建立视觉动力学，从而在动作推理时能够预测动作执行后的视觉后果。
- **Controllable Simulation（可控模拟）**：UniVLA 在运行时可根据需要灵活配置。在闭环控制场景中，输入当前观测帧和目标语言指令，自回归生成动作 token 序列。在模拟模式下可同时生成未来视觉 token 用于可视化。得益于原生的多模态设计，模型可以视觉观测直达动作输出，避免了 VLM 先将视觉转文本再转动作的延迟。世界建模能力也使 UniVLA 能够预测未来的视觉状态，在长期任务中提供前瞻性规划能力。

### 关键创新

- **原生多模态统一建模**：不同于 VLM + action head 的分立方案，将视觉/语言/动作统一为 token 序列进行端到端自回归训练。
- **世界建模作为强增强手段**：将世界模型训练作为 VLA 的核心训练阶段，显著增强模型的空间理解与动力学建模能力。
- **LIBERO 95.5% 刷新 SOTA**：在多个机器人操纵基准上全面超越当前最佳方法，在 LIBERO 上取得 95.5% 的成功率，超越 pi0-FAST 的 85.5%。
- **多形态泛化**：不仅在单臂机器人操纵任务上表现优异，在 ALOHA 双臂精细操纵、自动驾驶等场景也验证了有效性。

### 实验结果要点

在 CALVIN 基准上，UniVLA 在长序列任务（5个连续子任务）的完成率领先此前最佳方法约 15%。在 LIBERO 基准取得 95.5% 平均成功率，大幅超越 pi0-FAST 的 85.5%。在 Simplenv-Bridge 等基准同样达到 SOTA 水平。在 ALOHA 双臂操作任务上，世界模型微调阶段贡献了约 8-12% 的 LIBERO 性能提升，消融实验充分证明了世界模型训练阶段的价值。

## 相关笔记

- 📂 [Visual Autoregressive Modeling 分类综述](../visual-autoregressive-modeling/)
- 🌍 [Designs 架构总览](/world-models/architectures/)
