---
title: "OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving"
design: "OccLLaMA"
arxiv: https://arxiv.org/abs/2409.03272
website: https://vilonge.github.io/OccLLaMA_Page/
---

# OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving

::: info 论文信息
- **Design**: OccLLaMA
- **论文全称**: OccLLaMA: An Occupancy-Language-Action Generative World Model for Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2409.03272](https://arxiv.org/abs/2409.03272)
- **Website**: [https://vilonge.github.io/OccLLaMA_Page/](https://vilonge.github.io/OccLLaMA_Page/)
:::

## 学习笔记

### 核心思想

OccLLaMA 是一个 Occupancy-Language-Action 生成式世界模型，将语义占用（semantic occupancy）作为自动驾驶的统一视觉表示。现有基于 MLLM 的方法通常学习从感知到动作的直接映射，忽略了世界动态性以及动作与世界动态之间的关系。人类的认知则不同——我们拥有世界模型，能基于 3D 内部视觉表示来模拟未来状态并据此规划动作。OccLLaMA 的创新在于：引入类似 VQVAE 的场景 tokenizer 高效离散化和重建语义占用场景（考虑其稀疏性和类别不均衡），构建视觉-语言-动作的统一多模态词汇表，并增强 LLaMA 使其在统一词汇表上进行下一个 token/scene 预测。模型在 4D 占用预测、运动规划和 VQA 三大自动驾驶任务上均展示竞争力性能。

### 技术架构

**Vision Encoding（视觉编码）**：OccLLaMA 使用 VQVAE 风格的场景 tokenizer 将语义占用（3D 体素，每个体素标记类别标签）离散化为占用 token 序列。考虑到占用场景的极度稀疏性（大量体素为空）和类别不均衡（道路多、行人少），场景 tokenizer 采用了针对性的编码和量化策略以保持信息完整性。

**Knowledge Learning（知识学习）**：OccLLaMA 基于 LLaMA 的因果自回归架构进行增强。统一词汇表包含视觉 token（占用）、语言 token（文本描述）和动作 token（轨迹规划）。模型以自回归 next-token 预测方式学习 "给定当前占用场景和任务文本 → 预测未来占用状态/回答视觉问题/生成规划动作"。这种统一范式使多任务共享底层世界知识。

**Controllable Simulation（可控仿真）**：OccLLaMA 的 4D 占用预测能力使其能预测未来 3D 占用场景的演化。配合运动规划输出，构成完整的"感知未来 → 规划动作"闭环。同时也支持视觉问答（如"前方是否有行人？"），展现了作为自动驾驶基础模型的潜力。

### 代码实现要点

- **场景 tokenizer**：VQVAE 编码器-量化器-解码器，针对稀疏占用和类别不均衡优化
- **统一词表**：视觉 token + 语言 token + 动作 token 共享 embedding 空间
- **LLaMA 增强**：在 LLaMA 基础上增加对视觉/动作 token 的生成能力
- **多任务训练**：4D 占用预测 + 运动规划 + VQA 联合训练

### 关键创新点

- **Occupancy-Language-Action 统一世界模型**：以语义占用为视觉中枢统一 VLA 三模态
- **稀疏占用 tokenizer**：针对 3D 占用数据特点设计的高效 VQVAE
- **LLaMA 增强**：将 LLM 改造为自动驾驶的多模态世界模型骨干
- **多任务统一**：占用预测 + 规划 + VQA 在单模型中完成
