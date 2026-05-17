---
title: "VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model"
design: "VLA-JEPA"
arxiv: https://arxiv.org/abs/2602.10098
github: https://github.com/ginwind/VLA-JEPA
---

# VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model

::: info 论文信息
- **Design**: VLA-JEPA
- **论文全称**: VLA-JEPA: Enhancing Vision-Language-Action Model with Latent World Model
- **arXiv**: [https://arxiv.org/abs/2602.10098](https://arxiv.org/abs/2602.10098)
- **GitHub**: [https://github.com/ginwind/VLA-JEPA](https://github.com/ginwind/VLA-JEPA)
:::

## 学习笔记

## 核心思想

VLA-JEPA 针对当前 Vision-Language-Action (VLA) 策略在互联网视频预训练中的一个根本问题：**现有的潜在动作（latent-action）目标往往学习到错误的东西**——它们锚定于像素变化而非动作相关的状态转移，容易受外观偏差、干扰运动和系统信息泄露的影响。
VLA-JEPA 的核心解决方案是**无泄漏状态预测*（leakage-free state prediction）：目标编码器从未来帧生成潜在表示作为监督信号，而学生通路仅接收当前观测——未来信息仅作为监督目标，绝不作为输入。通过在潜在空间（而非像素空间）中进行预测，VLA-JEPA 学习到对相机运动和无关背景变化鲁棒的动态抽象。
框架极为简洁：**两阶段方向*——JEPA 预训练+ 动作头微调，免去了先前潜在动作流水线的多阶段复杂性。在 LIBERO、LIBERO-Plus、SimplerEnv 和真实世界操作任务上，VLA-JEPA 展现出对现有方法的一致的泛化和鲁棒性增益。
## 技术架。
**Vision Encoding（视觉编码）**：采用V-JEPA 2 编码器（ViT-L）提取视觉特征，Qwen3-VL-2B 作为基础 VLM 进行多模态理解。视觉编码器将当前观测编码为潜在表示，供学生通路使用。
**Knowledge Learning（世界知识学习）**：学生仅接收当前观测（无未来信息泄露），预测目标编码器从未来帧提取的潜在表示。这是一个纯粹的潜在空间预测任务，模型被迫学习什么会因动作而改进的动态抽象，而非表面的像素变化。训练数据包含互联网视频（SSv2）和少量机器人交互视频（Droid、LIBERO、BridgeV2、Fractal）。
**Controllable Simulation（可控推演）**：JEPA 预训练完成后，添加动作头并在机器人数据上微调。VLM 部分处理语言指令和视觉输入，JEPA 部分提供对物理动态的潜在理解。在推理时，模型根据当前观测和语言指令预测动作，JEPA 学习的动态抽象隐式指导决策。
## 代码实现要点

- 基于 starVLA 框架构建，融合Qwen3-VL-2B + V-JEPA 2 编码器- 支持自定义机器人数据集（LeRobot v2.1 格式），需配置 modality.json 指定视频关键字段
- 训练分为预训练（视频+机器人数据）和后训练（纯机器人数据），通过 YAML 配置文件切换
- 支持多数据集混合训练：通过 `DATASET_NAMED_MIXTURES` 配置混合比例
- 评估覆盖 LIBERO了 task suites）、LIBERO-Plus了 perturbation dimensions）、SimplerEnv了 task suites个- 支持 4-8 GPU 并行评估

## 关键创新。
- 无泄漏状态预测：未来信息仅作为监督目标，杜绝信息泄露
- 潜在空间预测替代像素空间预测，对外观噪声天然鲁棒
- 极简两阶段方案：JEPA 预训练练动作头微调，无需多阶段流水线
- 结合互联网视频预训练与少量机器人交互数据
- 一致的泛化与鲁棒性增。
## 代表性结。
- LIBERO 基准上展现一致的泛化增益
- LIBERO-Plus 7 种扰动维度下优于基线
- SimplerEnv 真实世界操作任务上鲁棒性提供- 真实世界操作任务验证有效。
## 相关笔记

- 📂 [JEPA 家族分类综述](../jepa/)
- 📖 [Embedding Prediction 范式总览](../)
- 🌍 [General World Prediction 数据集](/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/)
- ⚛️ [Physics & Causality 基准](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 📝 [Theory 理论讨论](/world-models/fundamentals/)
- 🤖 [Embodied AI & Robotics 数据集](/world-models/applications/embodied-robotics/)
