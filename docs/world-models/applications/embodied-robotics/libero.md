---
title: "LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning"
design: "LIBERO"
arxiv: https://arxiv.org/abs/2306.03310
github: https://github.com/Lifelong-Robot-Learning/LIBERO
---

# LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning

::: info 论文信息
- **Design**: LIBERO
- **论文全称**: LIBERO: Benchmarking Knowledge Transfer for Lifelong Robot Learning
- **arXiv**: [https://arxiv.org/abs/2306.03310](https://arxiv.org/abs/2306.03310)
- **GitHub**: [https://github.com/Lifelong-Robot-Learning/LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)
:::

## 学习笔记

## 数据集基准信息
- **arXiv**: [https://arxiv.org/abs/2306.03310](https://arxiv.org/abs/2306.03310)
- **GitHub**: [https://github.com/Lifelong-Robot-Learning/LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

## 简介
LIBERO bUT Austin eNVIDIA 提出，是一个专为终身机器人学习（Lifelong Robot Learning）设计的基准。该基准基于 robosuite 框架的MuJoCo 物理仿真，使用Franka Panda 机械臂在桌面场景中执行操作任务。LIBERO 包含 130 个语言指令任务，覆盖5 个不同任务套件（LIBERO-Spatial、LIBERO-Object、LIBERO-Goal、LIBERO-Long、LIBERO-90），每个套件测试不同类型的泛化能力。

LIBERO 的核心创新在于系统性地评估策略在不同维度上的知识迁移能力：空间泛化（同一物体不同位置）、物体泛化（新物体类型）、目标泛化（同一场景不同目标）和长期任务规划的0步以上复杂指令）。这使得 LIBERO 成为目前机器人操作领域最全面的终身学习评测平台。每个任务都附带自然语言描述和高质量的人工遥操作演示数据。

## 关键特征
- **数据规模**: 130 个任务，5 套件，每个任务约 50 条演示轨迹，总计高质量演示数。
- **数据模式**: RGB 图像、深度图、关节状态、物体位姿、自然语言指令
- **主要指标**: 任务成功率、正向迁移率（Forward Transfer）、遗忘率（Forgetting。
- **领域**: 终身学习、持续学习、机器人操作、知识迁。

## 与世界模型的关系
LIBERO 为世界模型提供了一个独特评测维度——持续场景中的知识积累与遗忘。世界模型不仅需要在单一任务上准确预测，更需要在连续学习多个任务后保持对先前任务状态的准确建模。这催生了世界模型领域的一个重要研究方向：如何设计具备持续学习能力的视觉世界模型。LIBERO 的130 个任务横跨不同场景和物体，完美覆盖了评估世界模型在动态变化的操作空间中泛化能力的挑战场景。

## 代表性用例
- LIBERO bOpenVLA (2024) 用作视觉语言动作模型的核心评。
- RDT-1B (2024) 在 LIBERO 上评测大规模扩散策略
- Octo (2024) 在 LIBERO 纳入通用机器人模型的微调基准套件
- GR-2 (2024) 使用 LIBERO 验证视频生成的跨场景泛化

## 相关笔记

- 📂 [Embodied AI & Robotics 分类综述](../embodied-robotics/)
- 📖 [Domain-specific World Modeling 总览](../)
- 📐 [Latent State-Space Modeling 方法](/world-models/architectures/state-transition/latent-state-space-modeling/)
- 🎨 [Latent Diffusion 方法](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 🔧 [World Models for Downstream Tasks](/world-models/applications/)