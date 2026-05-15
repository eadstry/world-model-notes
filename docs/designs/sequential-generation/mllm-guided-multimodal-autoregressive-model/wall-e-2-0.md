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

## 核心思想

WALL-E 2.0 回应了一个根本性问题：**我们能否用大语言模型（LLM）构建精确的世界模型？**以及世界模型如何反过来造福 LLM agent？论文指出 LLM 的先验知识与特定环境的动态之间通常存在显著差距，这种差距限制了 LLM 作为世界模型的有效性。为解决这一问题，WALL-E 2.0 提出了一种无需训练的**世界对齐**（World Alignment）方法——从探索轨迹中提取环境的符号化知识，并将其编码为可执行代码来规范 LLM agent 的策略。

WALL-E 2.0 的另一个创新是将世界模型与 LLM agent 集成在**模型预测控制（MPC）**框架中。传统 MPC 需要在每一时间步在线求解复杂的优化问题，计算代价高昂。WALL-E 2.0 创新性地用 LLM agent 替代了 MPC 中的在线优化器——LLM agent 通过与神经符号世界模型交互来"前瞻"未来的动作序列，既保持了规划的精确性（由世界模型的准确预测保证），又提升了规划的效率（由 LLM 的强启发式推理保证）。

## 技术架构

采用 VWM 三组件框架分析：

- **表征学习（Representation Learning）**：WALL-E 2.0 的环境表征由三部分构成：**动作规则**（action rules）编码行动的前置条件和执行效果；**知识图谱**（knowledge graphs）表示实体和关系；**场景图**（scene graphs）描述当前世界的物体及其空间/语义关系。这些符号化知识由 LLM 从探索轨迹中提取，与 LLM 内部的隐式世界知识互补，实现了"外部符号知识 + 内部神经网络知识"的混合架构。

- **未来预测（Future Prediction）**：通过神经符号世界模型进行未来状态预测。与传统需要学习环境转移动态的方式不同，WALL-E 2.0 的符号化世界知识直接编码了状态转换规则——当 agent 执行某个动作时，知识图谱和场景图按照符号规则更新。这种基于规则的预测在结构化环境（如 Minecraft-like 和 ALFWorld）中兼具准确性和可解释性。

- **动作与交互（Action & Interaction）**：WALL-E 2.0 采用基于 MPC 的 agent 设计。在每一时间步，LLM agent 作为前瞻优化器（look-ahead optimizer），生成多个候选动作序列，利用世界模型预测每条序列的未来状态，并通过代价函数评估优劣，最终选择最优序列。这种设计使得 LLM 的强启发式规划能力与世界模型的准确预测能力协同增效。

## 代码实现要点

开源代码在 [elated-sawyer/WALL-E](https://github.com/elated-sawyer/WALL-E)。

## 关键创新点

1. **训练无关的世界对齐**：无需训练即可学习环境的符号化知识，弥合 LLM 先验与环境动态之间的差距。
2. **LLM-MPC 融合**：用 LLM agent 替代 MPC 的在线优化器，兼具效率（LLM 启发式）和精度（世界模型准确预测）。
3. **神经符号混合世界模型**：将动作规则、知识图谱和场景图编码为可执行代码，提供了可解释且精确的世界预测。
4. **极高数据效率**：仅需 4 次迭代即可在 ALFWorld 达到 98% 成功率，展示了世界模型在加速学习方面的巨大潜力。

## 代表性结果

在 Minecraft-like 的 Mars 环境中，WALL-E 2.0 的成功率超过基线 16.1%-51.6%，得分提升至少 61.7%。在 ALFWorld 具身室内环境中，仅经过 4 次迭代即达到 98% 成功率的新纪录。
