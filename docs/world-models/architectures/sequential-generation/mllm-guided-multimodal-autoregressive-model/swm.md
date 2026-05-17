---
title: "Semantic World Models"
design: "SWM"
arxiv: https://arxiv.org/abs/2510.19818
website: https://weirdlabuw.github.io/swm/
---

# Semantic World Models

::: info 论文信息
- **Design**: SWM
- **论文全称**: Semantic World Models
- **arXiv**: [https://arxiv.org/abs/2510.19818](https://arxiv.org/abs/2510.19818)
- **Website**: [https://weirdlabuw.github.io/swm](https://weirdlabuw.github.io/swm)
- **发布日期**: 2025年10月
- **作者**: Jacob Berg, Chuning Zhu, Yanda Bao, Ishan Durugkar, Abhishek Gupta
:::

### 核心思想

Semantic World Models（SWM）提出一个极具颠覆性的观点：**世界模型不需要预测未来帧的像素值，只需要预测与当前任务相关的语义信息**。传统世界模型训练的默认目标是重建或预测未来的 RGB 图像帧，但像素级重建引入了巨大的计算开销，且大量不相关的视觉细节（如背景纹理、光照变化）会分散模型对任务关键信息的注意力。SWM 将世界建模重新定义为对未来帧的视觉问答——给定当前图像和执行的动作，VLM 被训练来回答关于未来帧的语义查询，如"物体 A 移动了吗？""任务是否完成了？"等。

通过将重建问题转化为问答问题，SWM 利用预训练 VLM 的强视觉理解和推理能力，通过监督微调在 image-action-text 数据上进行训练，将 VLM 转变为"语义世界模型"。SWM 的设计哲学是"模型应专注于预测对当前决策有意义的信息，而非重建所有像素"。

### 方法架构

遵循 VWM 经典分层架构：
- **表示学习（Representation Learning）**：SWM 以预训练 VLM 为基础，通过监督微调学习预测与任务相关的语义信息。VLM 的视觉-语言理解能力为世界建模提供了强大的预训练基础。训练数据由 image-action-text 三元组构成：当前图像、执行的动作、未来帧的语义描述。这些描述通过视觉问答形式表达，如"物体 A 移动到了哪里？""目标是否已达成？"。
- **未来预测（Future Prediction）**：与传统世界模型的像素预测不同，SWM 预测的是未来状态的语义属性。以当前帧和动作为输入，以问答形式预测未来帧的语义内容。这种语义级预测极大地降低了预测维度，从高维像素空间降至低维语义空间，使模型聚焦于对规划和决策最重要的信息。
- **动作与交互（Action & Interaction）**：SWM 的语义预测结果直接服务于规划优化。在规划过程中，agent 通过 SWM 查询不同候选动作的未来语义状态，选择最有利于任务完成的动作。这种"查询-选择"范式将 SWM 从传统的 VLM 转变为一个可直接用于决策的语义世界模型——agent 通过反复查询 SWM 来评估不同动作的未来效果，然后选择最优方案。

### 关键实现要点

代码尚未公开。项目页面：[weirdlabuw.github.io/swm](https://weirdlabuw.github.io/swm)。

### 关键创新点

1. **语义而非像素**：将重建转化为问答，大幅降低世界模型的预测负担。
2. **VLM 作为世界模型骨干**：将 VLM 通过监督微调直接转化为世界模型，继承了 VLM 的泛化能力。
3. **仅预测必要信息**：只预测对当前决策有用的语义信息，不进行完整视觉重建。
4. **高效规划范式**：通过语义查询评估候选动作，实现将世界模型作为规划工具而非仿真器的范式转变。

### 关键实验结果

在跨任务泛化实验中，SWM 相比基于像素重建的世界模型展现出显著的泛化改进。

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
