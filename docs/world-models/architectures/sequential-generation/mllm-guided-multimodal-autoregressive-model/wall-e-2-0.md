---
title: "WALL-E 2.0: World Alignment by NeuroSymbolic Learning Improves World Model-based LLM Agent"
design: "WALL-E 2.0"
arxiv: https://arxiv.org/abs/2504.15785
github: https://github.com/elated-sawyer/WALL-E
---

# WALL-E 2.0: World Alignment by NeuroSymbolic Learning Improves World Model-based LLM Agent

::: info 论文信息
- **Design**: WALL-E 2.0
- **论文全称**: WALL-E 2.0: World Alignment by NeuroSymbolic Learning Improves World Model-based LLM Agent
- **arXiv**: [https://arxiv.org/abs/2504.15785](https://arxiv.org/abs/2504.15785)
- **GitHub**: [https://github.com/elated-sawyer/WALL-E](https://github.com/elated-sawyer/WALL-E)
:::

## 学习笔记

### 核心思想

WALL-E 2.0 应对一个根本性问题：**如何让大语言模型（LLM）更准确地建模世界？** 即使 LLM 拥有丰富的知识，其对特定环境的动态建模仍存在偏差，这种偏差严重损害了 LLM agent 作为世界模型的有效性。为解决这一问题，WALL-E 2.0 提出了一种免训练的"世界对齐"（World Alignment）方法——从实际交互轨迹中提取结构化的符号知识，将其作为世界模型的执行代码来规范 LLM agent 的规划过程。

WALL-E 2.0 将 LLM agent 构建为一种*模型预测控制（MPC）*框架下的前瞻优化器。传统 MPC 需要在每一步时步求解复杂的优化问题，计算成本极高。WALL-E 2.0 的创造性在于让 LLM agent 在 MPC 循环中充当高效的前瞻优化器——LLM agent 通过其丰富的任务经验评估候选动作序列的未来效果，弥补了纯符号世界模型缺乏"前瞻"推理能力的不足，而符号世界模型的精确预测则弥补了 LLM 的自由式推理不够精确的缺陷。LLM 的常识推理与符号的精确预测协同工作，确保了规划的高效性。

### 方法架构

遵循 VWM 经典分层架构：
- **表示学习（Representation Learning）**：WALL-E 2.0 的环境建模由三类互补的符号知识构成：**动作规则**（action rules）编码了在当前状态下执行某动作是否有效的判定；**知识图谱**（knowledge graphs）表示实体间的关系；**场景图谱**（scene graphs）编码当前场景中物体之间的空间/语义关系。这些符号化知识从 LLM 的探索轨迹中自动提取，作为 LLM 内部世界知识的"外部记忆和规范"——实现了"外部符号知识 + 内部共同知识"的互补架构。
- **未来预测（Future Prediction）**：通过神经符号化的环境模型进行未来状态预测。与传统需要学习状态转移动态的方式不同，WALL-E 2.0 的符号化环境知识直接编码状态转移规则——当 agent 执行某动作时，知识图谱和场景图谱按照规则更新。这种基于规则的预测在结构化环境中（如 Minecraft-like 和 ALFWorld）具有极高的准确性和可解释性。
- **动作与交互（Action & Interaction）**：WALL-E 2.0 采用基于 MPC 的 agent 设计。在每个时间步，LLM agent 作为前瞻优化器（look-ahead optimizer）评估多个候选动作序列，符号世界模型预测每个候选序列的未来状态。通过综合评估，选择使累积代价最小化的最优序列。这一设计使 LLM 的常识推理能力与符号世界模型的精确预测协同工作，高效选取动作。

### 关键实现要点

开源代码：[elated-sawyer/WALL-E](https://github.com/elated-sawyer/WALL-E)。

### 关键创新点

1. **免训练的世界对齐**：无需训练直接学习环境的符号化知识，填补 LLM agent 与环境动态之间的偏差。
2. **LLM-MPC 融合**：将 LLM agent 作为 MPC 的前瞻优化器，融合效率（LLM 常识推理）与精度（符号世界模型精确预测）。
3. **神经符号化的环境模型**：以动作规则、知识图谱和场景图谱作为世界模型的执行代码，提供可解释且精确的环境预测。
4. **极低样本效率**：仅需 4 次迭代就在 ALFWorld 达到 98% 成功率，展示了符号世界模型在极少量学习迭代中的巨大潜力。

### 关键实验结果

在 Minecraft-like 的 Mars 环境中，WALL-E 2.0 的成功率超越基线 16.1%-51.6%，得分提升 61.7%。在 ALFWorld 中，仅需 4 次迭代就达到 98% 成功率的创纪录表现。

## 相关笔记

- 📂 [MLLM-guided Multimodal AR 综述](../mllm-guided-multimodal-autoregressive-model/)
- 📂 [Visual Autoregressive Modeling 编码](../visual-autoregressive-modeling/)
- 📂 [Sequential Generation 生成式架构](../)
- 🌍 [Theory 基础理论](/world-models/fundamentals/)
- 🌍 [Embodied AI & Robotics 机器人应用](/world-models/applications/embodied-robotics/)
