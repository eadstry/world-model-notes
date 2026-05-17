---
title: "Yume1.5: A Text-Controlled Interactive World Generation Model"
design: "Yume1.5"
arxiv: https://arxiv.org/abs/2512.22096
github: https://github.com/stdstu12/YUME
website: https://stdstu12.github.io/YUME-Project/
---

# Yume1.5: A Text-Controlled Interactive World Generation Model

::: info 论文信息
- **Design**: Yume1.5
- **论文全称**: Yume1.5: A Text-Controlled Interactive World Generation Model
- **arXiv**: [https://arxiv.org/abs/2512.22096](https://arxiv.org/abs/2512.22096)
- **GitHub**: [https://github.com/stdstu12/YUME](https://github.com/stdstu12/YUME)
- **Website**: [https://stdstu12.github.io/YUME-Project/](https://stdstu12.github.io/YUME-Project/)
:::

## 学习笔记

## 核心思想

Yume-1.5 在 Yume 的升级版本，在保留原有交互式世界生成能力的基础上，核心突破在于引入了文本控制的世界事件生成能力（text-controlled world events）。Yume-1.5 解决了扩散世界模型中几个关键挑战：参数量过大、推理步数过长和历史上下文快速增长。
Yume-1.5提出了三个核心组件来应对这些挑战传1) 统一上下文压缩与线性注意力的长视频生成框架，有效管理自回归生成中不断膨胀的历史上下文本2) 双向注意力蒸馏与增强文本嵌入方案的实时流式加速策略，大幅降低推理延迟论3) 文本控制的世界事件生成方法，使模型不仅支持键盘探索，还能根据用户文本输入在生成的世界中触发特定事件。
这些改进使Yume-1.5用纯视觉导的进化的文本驱动的交互式世界体验"，用户不仅可以在世界中移动，还能通过文字描述来改变世界的状态和事件。
## 技术架。
**Vision Encoding（视觉编码）**：继承Yume的视频VAE编码框架，新增统一上下文压缩机制，使用线性注意力处理不断增长的历史潜在token序列。压缩后的上下文表示在保持关键时空信息的同时显著降低序列长度。
**Knowledge Learning（世界知识学习）**：长视频生成框架整合上下文压缩与线性注意力，使模型能高效处理更长的历史序列。双向注意力蒸馏将双向教师模型的知识迁移到因果学生模型，配合增强的文本嵌入方案，实现实时流式加速。
**Controllable Simulation（可控推演）**：文本控制机制使用户可以通过自然语言描述触发世界中的特定事件。这超越了Yume的纯动作控制（键盘导航），允许更丰富的交互模式——如"打开源源改变天气"等语义级操作。压缩上下文保持长程记忆一致性。
## 代码实现要点

- 统一上下文压缩：高效管理自回归生成的历史上下的- 线性注意力替代全注意力，降低序列长度增长的计算成本
- 双向注意力蒸馏：从双向教师到因果学生的知识迁移- 增强文本嵌入方案：提升文本控制信号的注入效率
- 文本控制事件生成：语义级世界交互的新能力
- 代码库与Yume共享（https://github.com/stdstu12/YUME。
## 关键创新。
- 文本控制世界事件：从纯动作导航到语义级交互的进化
- 统一上下文压缩：解决历史上下文不断膨胀的核心挑战- 线性注意力长视频生成：O(L)复杂度替代O(L²)
- 双向注意力蒸馏：高效的双向→因果知识迁移
- 实时流式加速策略：蒸馏+增强嵌入的组合优。
## 代表性结。
- 文本控制的世界事件生成能力- 实时流式交互性能显著提升
- 长视频生成中的上下文一致性和视觉质量
- Yume系列持续迭代的里程碑版本


## 相关笔记

- 📂 [Autoregressive Diffusion 分类综述](../autoregressive-diffusion/)
- 🎨 [Latent Diffusion 方法](../latent-diffusion/)
- 📖 [Diffusion-based Generation 范式总览](../)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🎬 [视频生成后训练方法](/video-generation/methods/)
