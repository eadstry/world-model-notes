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

## 核心思想

Goal-VLA（arXiv 论文标题；文件名为 World4Omni）提出了一个优雅且高效的零样本机器人操作范式：**将图像生成式 VLM 作为以物体为中心的世界模型**。核心洞察是——物体状态表征是连接高级语义理解和低级精确控制的"黄金接口"。传统的 VLA 模型需要大量的 instruction-vision-action 数据来学习策略，但零样本能力远落后于基础 VLM。Goal-VLA 通过将操作任务分解为两个独立层次来回避这个问题：高层使用生成式 VLM 想象目标状态图像，低层从目标图像中提取物体位姿进行无训练的控制。

Goal-VLA 引入了**Reflection-through-Synthesis**过程——在执行之前，迭代验证和精炼生成的目标图像。模型生成一个目标图像（目标物体的期望最终状态），然后通过自我反思校验该图像是否物理可行和语义合理，如果不合理则重新生成。这种反思机制显著提升了在未知场景中的鲁棒性。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：Goal-VLA 使用预训练的图像生成式 VLM（如基于扩散的视觉语言模型）作为"世界模型"。输入当前场景图像和自然语言指令，VLM 不直接输出动作，而是生成目标状态图像——即完成任务后场景应该呈现的样子。这种以物体为中心的图像表征自然地跨越了不同机器人形态和任务场景之间的鸿沟。

- **未来预测（Future Prediction）**：Goal-VLA 的预测能力体现在目标图像的生成上——模型"想象"执行任务成功后的世界状态。与传统世界模型预测连续的时间序列不同，Goal-VLA 只预测最终的目标状态（单帧目标图像），将复杂的时序预测问题简化为单一的目标状态合成问题。Reflection-through-Synthesis 通过迭代精炼保证目标图像的可行性。

- **动作与交互（Action & Interaction）**：从生成的目标图像中，Goal-VLA 提取目标物体的 3D 位姿（通过视觉定位或预训练的位姿估计器），然后将位姿差作为低层控制器（如运动规划器或抓取规划器）的输入。这种"目标图像 → 物体位姿 → 低层动作"的管道完全不需要动作标注数据，实现了真正的零样本泛化。

## 代码实现要点

暂无公开代码。项目页面 [nus-lins-lab.github.io/goalvlaweb](https://nus-lins-lab.github.io/goalvlaweb/) 提供补充材料。

## 关键创新点

1. **物体状态作为黄金接口**：以物体位姿而非原始动作作为高层低层之间的接口，完美分离了语义推理和精确控制。
2. **Reflection-through-Synthesis**：迭代反思-合成机制，在生成的目标图像上施加物理和语义约束。
3. **零样本操作**：不使用任何动作标注数据，完全依赖 VLM 的图像生成能力和无训练的低层控制。
4. **跨形态泛化**：物体状态表征天然适用于不同类型的机器人平台和任务。

## 代表性结果

在仿真和真实世界实验中都展现了强大的性能和令人鼓舞的泛化能力。零样本框架在多种操作任务上达到了与需要大量微调的 VLA 模型相当的性能。
