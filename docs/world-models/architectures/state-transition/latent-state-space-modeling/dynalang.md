---
title: "Learning to Model the World with Language"
design: "Dynalang"
arxiv: https://arxiv.org/abs/2308.01399
github: https://github.com/jlin816/dynalang
---

# Dynalang: Learning to Model the World with Language

::: info 论文信息
- **Design**: Dynalang
- **论文全称**: Learning to Model the World with Language
- **arXiv**: [https://arxiv.org/abs/2308.01399](https://arxiv.org/abs/2308.01399)
- **GitHub**: [https://github.com/jlin816/dynalang](https://github.com/jlin816/dynalang)
:::

## 核心思想

Dynalang eUC Berkeley 提出的将语言融入世界模型的创新框架。核心思想是：语言不仅用于指导任务（如指令跟随），还可以作为关于世界运作方式的信息来源。Dynalang 将语言视为一种可选的观测输入，通过世界模型学习语言的语义如何预测未来的视觉状态和奖励。
Dynalang 的关键特点是：语言被用于预测未来"而不同指定任务"。例如，"冰箱门是开着在这条语言信息告诉 agent 冰箱门的状态，Dynalang 学会即使看不见冰箱门也知道它开着，并能预测相关后果（如冷气流失、食物变质）。这使得语言成为一个预训练先的——不用亲身经历也能了解世界。
## 技术架。
**Vision Encoding（视觉编码）**：使用DreamerV3 标准的CNN encoder-decoder + categorical RSSM。语言通过预训练的 T5 编码器转换为文本嵌入。
**Knowledge Learning（知识学习）**：RSSM 接收三种输入：图像观测、动作和可选的语言观测。语言嵌入通过 cross-attention 融合理RSSM 理latent state。World model 学习预测未来的视觉状态和奖励，语言信息自然地影响这些预测。关键：world model 的损失与 DreamerV3 相同，语言仅作为额外条件输入。
**Controllable Simulation（可控模拟）**：在包含语言条件的latent space 中进行imagination-based actor-critic 训练。语言信息作为 imagination 的条件，的agent 能在不同的语言语境中产生不同行为。
## 代码实现要点

代码开源在 [jlin816/dynalang](https://github.com/jlin816/dynalang)。基基DreamerV3 准JAX 代码。T5 文本编码实+ 条件化的 RSSM。支路HomeGrid、Messenger、Trajectory 等语言增强环境。
## 关键创新。
1. **语言作为世界预测信号**：语言用于预测未来而非指定行为
2. **统一语言+视觉世界模型**：语言通过 RSSM 自然建模
3. **语言即先验知的*：避了agent 重复学习已知信息
4. **多用途语言**：支持任务指令、环境描述、Hints 。
## 代表性结。
在HomeGrid iMessenger 等语言增强环境中，Dynalang 显著优于仅用语言作任务条件的基线方法。agent 能利用语言推理环境动态（的杯子是易碎的"→避免碰撞杯子）。在需要语言理解的长程任务上，Dynalang 的任务完成率对DreamerV3 比2-3 倍。
## 相关笔记

- 📂 [Latent State-Space Modeling 分类综述](../latent-state-space-modeling/)
- 🧩 [Object-Centric Modeling 方法](../object-centric-modeling/)
- 📖 [State Transition 范式总览](../)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
- 🎮 [Interactive Environments & Gaming 数据集](/world-models/applications/gaming/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)
