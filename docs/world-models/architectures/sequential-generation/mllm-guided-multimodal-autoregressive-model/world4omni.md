---
title: "World4Omni: A Zero-Shot Framework from Image Generation World Model to Robotic Manipulation"
design: "World4Omni"
arxiv: https://arxiv.org/abs/2506.23919
website: https://nus-lins-lab.github.io/goalvlaweb/
---

# World4Omni: A Zero-Shot Framework from Image Generation World Model to Robotic Manipulation

::: info 论文信息
- **Design**: World4Omni
- **论文全称**: World4Omni: A Zero-Shot Framework from Image Generation World Model to Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2506.23919](https://arxiv.org/abs/2506.23919)
- **Website**: [https://nus-lins-lab.github.io/goalvlaweb/](https://nus-lins-lab.github.io/goalvlaweb/)
:::

## 学习笔记

### 核心思想

Goal-VLA（arXiv 名为 World4Omni）提出了一个极简且高效的机器人操作零样本框架：**将图像生成式 VLM 作为以对象为中心的世界模型**。其核心洞察是：物体状态表示是分离高层语义理解和低层精确控制的"黄金接口"。传统 VLA 模型需要在 instruction-vision-action 三元组上进行端到端学习，泛化性严重受限于训练数据。Goal-VLA 通过将操作任务分解为两个相对独立的子问题来解决这一挑战：高层使用图像生成式 VLM 生成目标状态图像，低层从目标图像中提取物体位姿并通过运动规划实现精确控制。

Goal-VLA 还引入了**Reflection-through-Synthesis**机制。在执行之前对生成的目标图像进行验证和精炼：模型先生成一个候选目标图像，然后通过自我反思校验该图像是否满足任务语义约束，如不满足则迭代重新生成。这种反思-合成机制大幅提升了模型在未见环境中的鲁棒性。

### 方法架构

遵循 VWM 经典分层架构：
- **表示学习（Representation Learning）**：Goal-VLA 使用预训练的图像生成式 VLM（即扩散式视觉生成模型）作为"世界模型"。给定当前图像观测和自然语言指令，VLM 直接生成对应的目标状态图像——即任务完成后场景应呈现的样子。这种以对象为中心的图像生成自然地跨越了不同环境和任务场景之间的鸿沟。
- **未来预测（Future Prediction）**：Goal-VLA 的预测是任务完成后的最终目标状态（单帧目标图像），而非连续的时间序列。与传统世界模型预测多步时间序列不同，Goal-VLA 只预测最终的目标状态，将复杂的时间预测问题转化为单一目标状态合成问题。Reflection-through-Synthesis 通过多轮迭代验证目标图像的任务可行性。
- **动作与交互（Action & Interaction）**：在生成的目标图像基础上，Goal-VLA 提取目标物体的 3D 位姿，通过视觉-语言定位和预训练的位姿估计器实现。然后位姿被转化为底层运动规划器的输入，如抓取姿势生成和末端执行器轨迹规划。整个"目标图像 → 物体位姿 → 底层动作"的管道完全不需要额外的任务特定标注数据，实现了真正的零样本泛化。

### 关键实现要点

代码尚未公开。项目页面 [nus-lins-lab.github.io/goalvlaweb](https://nus-lins-lab.github.io/goalvlaweb) 提供详细信息。

### 关键创新点

1. **物体状态作为黄金接口**：将物体位姿而非原始动作作为高层和底层之间的接口，解耦语义理解和精确控制。
2. **Reflection-through-Synthesis**：反思-合成机制，对生成的目标图像施加任务语义约束验证。
3. **完全零样本**：不使用任何任务特定标注数据，完全依赖 VLM 和视觉基础模型实现免训练的底层控制。
4. **跨形态泛化**：物体状态表示自然地适应不同类型的环境和平台。

### 关键实验结果

在仿真和真实世界实验中展现出了强大的零样本泛化能力和抗干扰能力，在多种操作类别上达到与需要大量训练的 VLA 模型相当的性能。

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
