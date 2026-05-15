---
title: "DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge"
design: "DreamVLA"
arxiv: https://arxiv.org/abs/2507.04447
github: https://github.com/Zhangwenyao1/DreamVLA
---

# DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge

::: info 论文信息
- **Design**: DreamVLA
- **论文全称**: DreamVLA: A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge
- **arXiv**: [https://arxiv.org/abs/2507.04447](https://arxiv.org/abs/2507.04447)
- **GitHub**: [https://github.com/Zhangwenyao1/DreamVLA](https://github.com/Zhangwenyao1/DreamVLA)
:::

## 学习笔记

## 核心思想

DreamVLA 提出了一种全新的 VLA 框架，将**全面的世界知识预测**纳入动作决策流程，建立了感知-预测-动作的完整闭环。现有 VLA 模型主要依赖图像预测来辅助规划，但图像包含大量冗余信息且缺乏关键的世界知识（如动态、空间和语义信息）。DreamVLA 的核心洞察是：人类在采取行动前，首先在脑海中形成抽象的、多模态的推理链条——这正是"Dream"一词的来源。

DreamVLA 引入了**动态区域引导的世界知识预测**（dynamic-region-guided world knowledge prediction），将空间和语义信息融合到紧凑但全面的表征中，用于指导动作规划。此外，为避免动态、空间和语义信息在训练中相互干扰，DreamVLA 采用了**块式结构化注意力机制**（block-wise structured attention），将不同知识源之间的相互注意力掩盖，保持每种表征的纯净和解耦。在动作预测层面，DreamVLA 使用扩散 transformer 将动作表征从共享的潜在特征中解耦。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：DreamVLA 从视觉观测中提取三种互补的世界知识表征：**动态知识**（物体运动和变化）、**空间知识**（物体位置和 3D 关系）和**语义知识**（物体类别和功能）。这三种知识通过专门的编码器提取，并通过块式结构化注意力机制保持彼此之间的信息隔离——每个知识块只与自身和共享的视觉特征交互，不与其他知识块交互，防止信息泄漏和混淆。

- **未来预测（Future Prediction）**：DreamVLA 的"Dream"阶段根据当前观测预测未来的世界知识状态。与直接预测原始图像帧不同，DreamVLA 预测的是语义化、结构化的未来表征——未来物体的位置、运动趋势和场景变化。这种抽象的未来预测比像素级图像预测更高效（无冗余信息），也更具鲁棒性（不受光照、纹理等无关因素影响）。

- **动作与交互（Action & Interaction）**：以预测的未来世界知识为条件，DreamVLA 使用扩散 transformer 生成动作序列。这个扩散模块将动作表征与共享的潜在特征解耦，建模动作的条件分布。最终形成的感知-预测-动作闭环使 DreamVLA 能够在执行动作前进行隐式的"想象"和验证，表现出远超单纯反应式模型的鲁棒性。

## 代码实现要点

公开代码在 [Zhangwenyao1/DreamVLA](https://github.com/Zhangwenyao1/DreamVLA)。

## 关键创新点

1. **全面世界知识预测**：同时预测动态、空间和语义三种互补的未来世界知识，超越了仅预测图像的范式。
2. **块式结构化注意力**：通过掩盖不同知识源间的注意力来防止信息泄漏，保持各类知识的纯净性和解耦性。
3. **扩散动作解耦**：使用扩散 transformer 从共享特征中解耦动作表征，实现更精确的动作建模。
4. **感知-预测-动作闭环**：建立了从感知到世界想象再到动作执行的完整认知回路。

## 代表性结果

在真实机器人任务上达到 76.7% 成功率，在 CALVIN ABC-D 基准上达到平均 4.44 的序列长度——这是目前该数据集的最高水平之一。
