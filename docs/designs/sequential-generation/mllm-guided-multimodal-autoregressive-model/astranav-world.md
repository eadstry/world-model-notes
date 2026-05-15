---
title: "AstraNav-World: World Model for Foresight Control and Consistency"
design: "AstraNav-World"
arxiv: https://arxiv.org/abs/2512.21714
github: https://github.com/amap-cvlab/AstraNav-World
website: https://astra-amap.github.io/AstraNav-World.github.io/
---

# AstraNav-World: World Model for Foresight Control and Consistency

::: info 论文信息
- **Design**: AstraNav-World
- **论文全称**: AstraNav-World: World Model for Foresight Control and Consistency
- **arXiv**: [https://arxiv.org/abs/2512.21714](https://arxiv.org/abs/2512.21714)
- **GitHub**: [https://github.com/amap-cvlab/AstraNav-World](https://github.com/amap-cvlab/AstraNav-World)
- **Website**: [https://astra-amap.github.io/AstraNav-World.github.io/](https://astra-amap.github.io/AstraNav-World.github.io/)
:::

## 学习笔记

### 核心思想

AstraNav-World 是一个端到端世界模型，将未来视觉状态预测和动作序列规划统一在单一概率框架中，来自高德地图（Amap）团队。其核心洞察是：具身导航在开放动态环境中需要准确预测世界的演化以及动作将如何随时间展开，但现有"先预想（envision）再规划（plan）"的解耦流水线容易累积误差。AstraNav-World 使用扩散视频生成器与视觉语言策略（vision-language policy）紧密集成，使场景预测和动作规划同步更新。双向约束使视觉预测可执行，同时使决策接地于物理一致、任务相关的未来。真实世界测试中展示了卓越的零样本能力——无需任何真实世界微调即可适应未见过的场景，证明其捕获了可迁移的空间理解和规划相关的导航动态，而非仅过拟合仿真数据分布。

### 技术架构

**Vision Encoding（视觉编码）**：AstraNav-World 使用扩散视频生成器预测未来视觉状态——给定当前观测和规划动作，预测多步后的自我中心视图。视觉特征通过视觉编码器（ViT 等）提取，扩散过程在潜在空间中执行。视觉语言策略（VLP）以当前视觉观测为输入，生成动作序列。

**Knowledge Learning（知识学习）**：AstraNav-World 的双向训练约束是核心：一方面，以动作为条件生成多步视觉预测（动作→视觉）；另一方面，以预测的未来视觉为条件推导轨迹（视觉→动作）。这两个约束相互制衡——视觉生成必须能支撑合理动作，动作预测必须基于视觉可达的未来。这种紧密耦合使得视觉预测保持可执行性，动作决策保持物理一致性，克服了传统解耦流水线中视觉预测与动作规划之间的误差累积。

**Controllable Simulation（可控仿真）**：AstraNav-World 在多种具身导航基准上提升了轨迹精度和成功率。消融实验确认了视觉-动作紧密耦合和统一训练的必要性：移除任何一条分支都会同时降低预测质量和策略可靠性。真实世界零样本测试尤为亮眼——模型直接应用于未见真实场景，无需任何微调，展现了强大的跨域泛化能力。

### 代码实现要点

- **扩散视频生成器**：在多步 rollout 中生成未来观测帧
- **VLP 动作策略**：视觉语言策略网络同时接收真实和预测视觉输入
- **双向约束训练**：视觉预测 + 动作规划的双向一致性损失
- **零样本真实世界部署**

### 关键创新点

- **视觉-动作同步耦合**：打破"先预想再规划"的串行范式，实现同步更新
- **双向约束**：视觉→动作 + 动作→视觉的双向一致性训练
- **零样本真实世界泛化**：无需微调、从仿真直接迁移到真实世界
- **高德地图出品**：工业级具身导航世界模型
