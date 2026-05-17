---
title: "RynnVLA-002: A Unified Vision-Language-Action and World Model"
design: "RynnVLA-002"
arxiv: https://arxiv.org/abs/2511.17502
github: https://github.com/alibaba-damo-academy/RynnVLA-002
---

# RynnVLA-002: A Unified Vision-Language-Action and World Model

::: info 论文信息
- **Design**: RynnVLA-002
- **论文全称**: RynnVLA-002: A Unified Vision-Language-Action and World Model
- **arXiv**: [https://arxiv.org/abs/2511.17502](https://arxiv.org/abs/2511.17502)
- **GitHub**: [https://github.com/alibaba-damo-academy/RynnVLA-002](https://github.com/alibaba-damo-academy/RynnVLA-002)
:::

## 学习笔记

### 核心思想

RynnVLA-002 是阿里达摩院提出的将 VLA（Vision-Language-Action）与世界模型统一学习的框架。其核心洞察是：VLA 模型和世界模型可以相互增强——世界模型使用动作和视觉输入预测未来图像状态，为 VLA 提供前瞻性的环境认知；VLA 模型从观察中产生动作，为世界模型提供准确的动态预测基础。RynnVLA-002 通过联合学习环境动态与动作规划，使两个模块形成正向反馈循环：世界模型学到的环境知识帮助 VLA 更好地推理动作效果并支持规划，而 VLA 产生的精确动作又为世界模型的状态预测提供高质量输入。RynnVLA-002 在 LIBERO 基准上无需任何预训练就达到 97.4% 的成功率；在真实世界 LeRobot 任务中，集成世界模型使成功率提升 50%，证明了世界模型在实际任务中的巨大实用价值。

### 方法架构

**视觉编码（Vision Encoding）**：RynnVLA-002 使用统一 Transformer 骨干同时处理视觉编码（将当前图像观测编码为 token）和视觉预测（预测未来图像状态）。共享的视觉表示使 VLA 模块和世界模型分支能够共享环境理解。

**知识学习（Knowledge Learning）**：联合学习涉及两条信息流：(1) VLA → World Model：VLA 生成的候选动作被送入世界模型预测未来状态，世界模型学会将动作与视觉变化关联；(2) World Model → VLA：世界模型对未来状态的预测提供额外的视觉监督和前瞻性信息，VLA 利用这些"想象"的未来来优化当前动作选择。这种双向增强是 RynnVLA-002 超越独立 VLA 或世界模型的关键。

**可控仿真（Controllable Simulation）**：RynnVLA-002 在两个维度验证其有效性：(1) LIBERO 仿真基准上 97.4% 成功率，无需任何预训练，证明联合学习的高效性；(2) 真实世界 LeRobot 实验中，集成世界模型使成功率提升 50%，证明世界模型对真实场景的泛化价值。

### 关键实现要点

- **统一 Transformer**：共享骨干同时处理 VLA 推理和世界模型未来预测
- **双向信息流**：VLA → WM 动作指导 + WM → VLA 未来视觉监督
- **LIBERO 基准**：无预训练端到端训练达到 97.4%
- **GitHub 开源模型**

### 关键创新点

- **VLA + World Model 统一联合学习**：双向增强而非简单拼接
- **世界模型强化真实场景**：真实世界成功率 +50%，证明世界模型的实用价值
- **97.4% 无预训练**：LIBERO 基准上纯端到端训练的极高成功率
- **阿里达摩院产品**：模型和代码完全开源

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
