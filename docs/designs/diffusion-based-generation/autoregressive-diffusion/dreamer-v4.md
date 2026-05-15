---
title: "Training Agents Inside of Scalable World Models"
design: "Dreamer V4"
arxiv: https://arxiv.org/abs/2509.24527
website: https://danijar.com/project/dreamer4/
---

# Dreamer V4: Training Agents Inside of Scalable World Models

::: info 论文信息
- **Design**: Dreamer V4
- **论文全称**: Training Agents Inside of Scalable World Models
- **arXiv**: [https://arxiv.org/abs/2509.24527](https://arxiv.org/abs/2509.24527)
- **Website**: [https://danijar.com/project/dreamer4/](https://danijar.com/project/dreamer4/)
:::

## 学习笔记

## 核心思想

Dreamer V4 是 Danijar Hafner 提出的新一代可扩展世界模型智能体，核心突破在于实现了**在快速且准确的世界模型内部通过强化学习解决控制任务**。此前的世界模型难以在复杂环境中准确预测物体交互，Dreamer V4 通过在 Minecraft 中准确预测物体交互和游戏机制，以大幅优势超越了以往的世界模型。

关键技术贡献包括：(1) 通过 **shortcut forcing 目标函数**和高效的 Transformer 架构，在单 GPU 上实现世界模型的**实时交互推理**；(2) 世界模型从**少量标注数据**中学习通用动作条件，使其能够从海量无标注视频中提取大部分知识——大幅降低对标注数据的依赖。

Dreamer V4 提出了 Minecraft 中**纯离线数据获取钻石**的挑战——这一任务需要从原始像素中选择超过 20,000 个鼠标和键盘动作，且仅能使用离线数据（与机器人等实际应用中在线交互不安全且缓慢的场景一致）。Dreamer V4 成为**首个仅凭离线数据、无需环境交互就在 Minecraft 中获取钻石的智能体**，为想象力训练提供了可扩展的配方。

## 技术架构

**Vision Encoding（视觉编码）**：高效的 Transformer 架构处理原始像素输入，通过 shortcut forcing 目标函数加速训练和推理，实现单 GPU 上的实时交互。

**Knowledge Learning（世界知识学习）**：从少量标注数据中学习通用动作条件机制，海量无标注视频提供场景多样性知识。世界模型泛化到准确预测物体交互和游戏机制——包括方块交互、合成逻辑等复杂物理规则。

**Controllable Simulation（可控推演）**：在想象力中进行强化学习训练——世界模型模拟动作后果，智能体在模拟的经验中学习策略。20000+ 步的长期推演需要世界模型在整个序列中维持高保真度。

## 代码实现要点

- Shortcut forcing 目标函数：加速世界模型训练和推理
- 高效 Transformer 架构：单 GPU 实时交互
- 无标注视频学习：少量标注数据 + 海量无标注视频
- Minecraft 钻石获取：20000+ 步纯离线规划
- 开源页面：danijar.com/dreamer4

## 关键创新点

- 首个纯离线数据在 Minecraft 中获取钻石的智能体
- Shortcut forcing 实现单 GPU 实时交互世界模型
- 少量动作标注 + 海量无标注视频的高效知识提取
- 复杂物体交互和游戏机制的准确预测
- 离线 RL 在复杂开放世界中的可扩展配方

## 代表性结果

- Minecraft 纯离线获取钻石（首个达成）
- 20000+ 步的长期动作序列选择
- 单 GPU 实时交互推理
- 大幅超越以往世界模型的物体交互预测精度
