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
- **发表于**: 2025年10月
- **作者**: Jacob Berg, Chuning Zhu, Yanda Bao, Ishan Durugkar, Abhishek Gupta
:::

## 核心思想

Semantic World Models（SWM）提出了一个颠覆性的观点：**世界模型不需要预测未来的像素，只需要预测任务相关的语义信息**。传统的世界模型训练目标是像素重建——预测未来帧的 RGB 值——但论文指出，强大的像素重建能力并不总是与良好的规划决策正相关。SWM 将世界建模重新定义为未来帧的语义信息的视觉问答问题。

通过这种视角转换，SWM 可以利用 VLM 的相同工具和方法来构建世界模型——通过在 image-action-text 数据上进行监督微调，预训练的 VLM 可以被转化为"语义世界模型"。这种世界模型既能够用于规划决策，又继承了预训练 VLM 的泛化性和鲁棒性。SWM 不关心"画面的每个像素是什么样的"，而是关心"物体移动到了哪里""发生了什么关键事件"等语义问题。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：SWM 基于预训练的 VLM 构建，通过监督微调学习预测任务相关的语义信息。VLM 的视觉编码器和语言模型提供了强大的预训练基础。微调数据由 image-action-text 三元组组成：当前图像、执行的动作、未来帧的语义描述（通过视觉问答形式表达，如"物体 A 在哪里？""门是否打开了？"）。

- **未来预测（Future Prediction）**：与传统世界模型的像素预测不同，SWM 预测的是未来状态的语义属性——以当前帧和动作为条件，以问答形式输出关于未来帧的语义描述。这种语义预测极大地降低了预测的维度（从高维像素到低维结构化语义），使模型聚焦于对规划真正重要的信息。

- **动作与交互（Action & Interaction）**：SWM 的语义预测用于指导策略优化。在规划过程中，agent 通过 SWM 查询不同候选动作可能导致的各种语义结果，根据任务目标的语义条件选择最优动作。由于 SWM 继承了 VLM 的泛化能力，这种语义查询在未见过的场景中依然可靠。

## 代码实现要点

暂无公开代码。项目页面：[weirdlabuw.github.io/swm](https://weirdlabuw.github.io/swm)。

## 关键创新点

1. **语义而非像素**：从像素重建转向语义问答，大幅降低世界模型的预测负担。
2. **VLM 即世界模型**：将 VLM 通过监督微调直接转化为世界模型，继承了 VLM 的泛化性。
3. **任务相关预测**：只预测对当前任务有意义的语义信息，避免了冗余的视觉重建。
4. **规划导向的世界模型**：明确以改善规划决策为世界模型的目标，而非像素重建质量。

## 代表性结果

在开放域机器人任务上的策略改进实验表明，语义世界模型相比基于重建的动作条件世界模型有显著的泛化提升。
