---
title: "WHALE"
design: "Video GPT / Visual Autoregressive Model"
arxiv: "https://arxiv.org/abs/2411.05619"
github: ""
website: ""
---

# WHALE

## 论文信息

- **arXiv**: [2411.05619](https://arxiv.org/abs/2411.05619)
- **发表时间**: 2024年11月
- **作者团队**: 南京大学（Zhilong Zhang, Yang Yu, Zhi-Hua Zhou 等）

## 核心思想

WHALE（World model for embOdied decision-making）旨在构建具有强泛化能力和可扩展性的具身决策世界模型。世界模型在具身环境中能实现无成本探索（通过模拟），但面临两个核心挑战：在分布外（OOD）区域需要保持可靠模拟，以及需要可靠的不确定性估计来评估模拟经验的可靠性。

WHALE提出了两个关键技术：行为条件化（behavior-conditioning）解决策略分布偏移问题——这是世界模型泛化误差的主要来源之一；回溯展开（retracing-rollout）则能在不需要模型集成（ensembles）的情况下进行高效不确定性估计。这两种技术是通用的，可与任何神经网络架构结合。WHALE还提出了Whale-ST（基于空间-时间Transformer）和Whale-X（414M参数，在Open X-Embodiment的970K轨迹上训练）两个具体模型。

## 技术架构

### Vision Encoding
Whale-ST使用空间-时间Transformer对视觉输入进行编码。时空Transformer同时处理空间维度（图像patch）和时序维度（帧序列），通过自注意力机制建模跨帧的视觉对应关系。

### Knowledge Learning
WHALE的泛化能力建立在两个关键技术之上：(1) 行为条件化——训练时模型以行为策略为条件输入，使模型能适应不同的策略分布，减少策略偏移导致的泛化误差；(2) 回溯展开——在rollout时对生成的轨迹进行重采样和修正，通过比较原始预测和回溯修正的差异来估计不确定性。Whale-X在OXE的970K轨迹上进行了大规模预训练。

### Controllable Simulation
模型通过动作条件进行控制模拟：接收历史观察和当前动作，自回归预测下一观察和奖励。不确定性估计使智能体可以在模拟中做出更谨慎的决策。Whale-X展示了仅需少量演示就能进行有效操作的能力。

## 代码实现要点

暂无开源代码。

## 关键创新点

1. **行为条件化**: 解决世界模型中策略分布偏移的关键技术
2. **回溯展开不确定性估计**: 无需ensemble的高效不确定性估计
3. **通用性**: 两种技术可与任意架构结合
4. **Whale-X大规模预训练**: 414M参数在970K OX轨迹上预训练

## 代表性结果

- 在模拟任务中提升了价值估计准确率和视频生成保真度
- 不确定性估计在完全离线场景中增强了基于模型的策略优化
- Whale-X在真实世界操作中展现了可扩展性和少样本泛化能力