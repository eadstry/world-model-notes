---
title: "Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation"
design: "UniWM"
arxiv: https://arxiv.org/abs/2510.08713
github: https://github.com/F1y1113/UniWM
---

# UniWM: Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation

::: info 论文信息
- **Design**: UniWM
- **论文全称**: Unified World Models: Memory-Augmented Planning and Foresight for Visual Navigation
- **arXiv**: [https://arxiv.org/abs/2510.08713](https://arxiv.org/abs/2510.08713)
- **GitHub**: [https://github.com/F1y1113/UniWM](https://github.com/F1y1113/UniWM)
:::

## 学习笔记

### 核心思想

UniWM 是一个统一的、记忆增强的世界模型，将自我中心（egocentric）视觉预报和规划整合在单一多模态自回归骨干中。现有具身导航系统通常依赖模块化设计——将导航规划与视觉世界建模解耦，这在新颖或动态场景中容易引发状态-动作错位和弱适应性。UniWM 的核心创新是：将动作选择显式地接地于视觉想象的结果，紧密对齐预测与控制。与此同时，分层记忆机制融合短期感知线索与长程轨迹上下文，支持在扩展时间跨度上的稳定连贯推理。在 4 个导航基准上，UniWM 的导航成功率提升高达 30%；对未见过的 TartanDrive 数据集实现零样本泛化；并自然扩展到高维人形机器人控制。

### 技术架构

**Vision Encoding（视觉编码）**：UniWM 将自我中心视觉观测（第一人称 RGB）编码为多模态自回归 Transformer 的输入 token 序列。分层记忆机制包含两层：(1) 短期记忆——最近几帧的原始视觉特征，捕获即时知觉线索；(2) 长程记忆——压缩的轨迹级别上下文，维持全局导航目标和路径信息。这两层记忆通过跨注意力或门控融合注入生成过程。

**Knowledge Learning（知识学习）**：UniWM 的双重学习目标使预测与控制紧密耦合：(1) 视觉预报——以过去观测和规划动作为条件，预测未来自我中心视觉状态；(2) 策略学习——以预测的未来视觉状态为条件，生成导航动作。这种"想象→评估→决策"的闭环训练消除了传统"先建图→再规划"范式中的信息瓶颈。分层记忆确保在长导航序列中不丢失关键上下文。

**Controllable Simulation（可控仿真）**：UniWM 在 Go Stanford、ReCon、SCAND、HuRoN 四个挑战性导航基准和 1X Humanoid 人形机器人数据集上评估，展示了从移动机器人到人形机器人的跨形态泛化。对未见过的 TartanDrive 数据集的零样本泛化验证了其习得的世界知识超越训练数据分布。

### 代码实现要点

- **层次记忆**：短期记忆（原始视觉特征 buffer）+ 长程记忆（压缩轨迹 embedding）
- **双重自回归头**：视觉预测头（预测未来帧 token）+ 动作头（预测下一动作 token）
- **跨形态扩展**：从轮式/足式机器人到人形机器人的统一架构
- **开源**：GitHub 提供代码和模型

### 关键创新点

- **预测与控制统一**：视觉想象直接驱动动作选择，消除解耦中的信息错位
- **分层记忆**：短期感知 + 长程轨迹的双层记忆融合
- **零样本泛化**：训练数据未见过的数据集上直接泛化
- **跨形态扩展**：从导航机器人到人形机器人的自然扩展
