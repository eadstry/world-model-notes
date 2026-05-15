---
title: "Unified Vision-Language-Action Model"
design: "UniVLA"
arxiv: https://arxiv.org/abs/2506.19850
github: https://github.com/baaivision/UniVLA
---

# UniVLA: Unified Vision-Language-Action Model

::: info 论文信息
- **Design**: UniVLA
- **论文全称**: Unified Vision-Language-Action Model
- **arXiv**: [https://arxiv.org/abs/2506.19850](https://arxiv.org/abs/2506.19850)
- **GitHub**: [https://github.com/baaivision/UniVLA](https://github.com/baaivision/UniVLA)
:::

## 学习笔记

## 核心思想

UniVLA（Unified Vision-Language-Action Model）由北京智源研究院（BAAI）提出，是一个统一建模视觉、语言和动作的原生多模态 VLA 模型。与以往依赖 VLM 通用理解能力来生成动作的方法不同，UniVLA 将视觉、语言和动作信号**统一为离散 token 序列进行自回归建模**。这种原生多模态建模方式能够更好地捕捉三种模态之间的细粒度时序因果关系——特别是在大规模视频数据上，模型可以学习到视觉变化背后由动作驱动的因果动态。

UniVLA 的第二大贡献是将世界建模作为后训练阶段的增强手段。在预训练阶段，模型在大量视频数据上学习视觉-语言-动作的联合 token 分布；在后训练阶段，模型通过预测视频帧之间的因果动态（世界建模任务）进一步强化对长序列物理规律的理解。这种"预训练+世界建模后训练"的策略使得 UniVLA 在迁移到策略学习任务（特别是长序列操作）时表现远超纯 VLM-based 方法。在 CALVIN、LIBERO、Simplenv-Bridge 等多个仿真基准上，UniVLA 均刷新了 SOTA——LIBERO 平均成功率 95.5% 大幅超越 pi0-FAST 的 85.5%。

## 技术架构

**Vision Encoding（视觉编码）**：UniVLA 使用统一的视觉 tokenizer（基于 VQ-VAE 或类似方案）将多视角/时序视频帧编码为离散 token。语言通过标准分词器编码为 token，动作（机器人关节位置/速度）通过专门的动作 tokenizer 量化为离散 token。三者共享同一词汇索引空间，构成单一 token 流输入 Transformer 主干。

**Knowledge Learning（知识学习）**：知识学习分两阶段进行。(1) **预训练阶段**——在包含机器人操作视频、人类演示视频和自然视频的大规模数据集上进行标准的自回归 next-token 训练。此阶段模型学会视觉-语言-动作三种模态 token 间的统计关联和基本转移规律。(2) **世界建模后训练阶段**——专门使用视频预测任务进行微调，即给定历史帧和动作 token 预测未来帧 token。这个阶段的核心作用是让模型将"动作"和"视觉变化"之间的因果关系内化——画面中某个物体的位移是因为模型"预测到"了对应方向的动作 token，形成因果锁链。这种因果理解能力在后续的策略学习中被证明非常关键。

**Controllable Simulation（可控模拟）**：UniVLA 在推理时可根据任务需求灵活配置：输入当前观测帧和目标语言指令，自回归输出动作 token 序列（策略模式）；或同时输出未来的视觉 token（可视化模式）。由于其原生多模态设计，模型可以直接从视觉观测跳转到动作输出，无需像纯 VLM 方案那样先生成文本推理再转换为动作，大幅降低了推理延迟。训练中引入的世界建模任务也使得 UniVLA 能够"预演"未来视觉状态，帮助其在长序列任务中做更明智的动作规划。

## 代码实现要点

代码已在 GitHub 开源（baaivision/UniVLA）。核心架构：(1) 统一的视觉 tokenizer 将视频帧编码为 token；(2) 动作 tokenizer（基于 VQ-VAE）将连续动作空间离散化；(3) 基于 LLaMA 架构的 Transformer 主干处理联合 token 序列；(4) 两阶段训练管道（视频预训练 → 世界建模后训练 → 指令微调）。关键训练超参包括世界建模阶段的比例（占总训练步数的约 30%）和动作 token 的码本大小（约 512-1024 个离散码）。

## 关键创新点

- **原生多模态统一建模**：不同于 VLM + action head 的级联方案，将视觉/语言/动作统一为 token 序列进行端到端自回归训练
- **世界建模作为增强手段**：将世界模型任务作为 VLA 的后训练阶段，强化模型的因果动态理解
- **LIBERO 95.5% 刷新 SOTA**：在主流机器人操作基准上大幅超越包括 pi0-FAST 在内的方法
- **跨形态泛化**：不仅在机器人操作上领先，在 ALOHA 真实机器人操作和自动驾驶任务上也验证了有效性

## 代表性结果

在 CALVIN 基准上，UniVLA 在长任务链（5个连续子任务）的完成率相比先前最佳方法提升约 15%。在 LIBERO 基准上取得 95.5% 平均成功率，显著优于 pi0-FAST（85.5%）。在 Simplenv-Bridge 上同样达到新 SOTA。在真实世界的 ALOHA 双臂操作上（如倒液体、叠毛巾），UniVLA 展现了稳健的泛化性能。消融实验证实，世界建模后训练阶段贡献了约 8-12% 的 LIBERO 性能增益，特别是在长序列任务中增益更明显。
