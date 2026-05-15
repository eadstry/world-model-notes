---
title: "Multi-Task Interactive Robot Fleet Learning with Visual World Models"
design: "FleetWM"
arxiv: https://arxiv.org/abs/2410.22689
github: https://github.com/UT-Austin-RPL/sirius-fleet
---

# FleetWM: Multi-Task Interactive Robot Fleet Learning with Visual World Models

::: info 论文信息
- **Design**: FleetWM
- **论文全称**: Multi-Task Interactive Robot Fleet Learning with Visual World Models
- **arXiv**: [https://arxiv.org/abs/2410.22689](https://arxiv.org/abs/2410.22689)
- **GitHub**: [https://github.com/UT-Austin-RPL/sirius-fleet](https://github.com/UT-Austin-RPL/sirius-fleet)
:::

## 学习笔记

### 核心思想

Sirius-Fleet 是一个面向多任务交互式机器人集群学习的框架，发表于 CoRL 2024。随大规模多任务机器人学习的发展，机器人集群有望部署在家庭和工业场景中执行多样化任务，但它们面临真实世界变异性带来的泛化性和鲁棒性挑战。Sirius-Fleet 的核心思路是：在部署过程中监控机器人性能，并在必要时引入人类来纠正机器人的动作。具体而言，它使用视觉世界模型预测未来动作的结果，并构建异常预测器（anomaly predictors）判断预测结果是否可能产生异常。关键创新在于——随着机器人自主性的提高，异常预测器自动调整其判定标准，导致对人类干预的请求逐渐减少，从而使人类工作负荷随时间逐步降低。

### 技术架构

**Vision Encoding（视觉编码）**：Sirius-Fleet 采用视觉世界模型——以当前观测和拟议动作为输入，预测执行该动作后的未来视觉结果。视觉世界模型通常基于视频预测架构（如视频扩散或自回归模型），将当前帧和动作编码映射为未来帧的视觉预测。

**Knowledge Learning（知识学习）**：异常预测器是核心学习组件——基于视觉世界模型预测的未来视觉结果，异常预测器判断预测结果是否偏离正常操作模式（如机械臂碰撞障碍物、物体掉落等）。人类交互数据（人类的纠正行为）被收集并用于持续微调机器人的策略模型，形成"执行→预测→检测异常→人类干预→学习改进"的闭环。随着策略性能提升，异常预测器的阈值自动收紧，减少不必要的干预请求。

**Controllable Simulation（可控仿真）**：Sirius-Fleet 在 RoboCasa（仿真）和 Mutex（真实世界）两个大规模多任务基准上进行评估，涵盖家庭和工业场景中的多样化操作任务。视觉世界模型使机器人能够"想象"行动的后果，在透明执行之前预判是否可能出错。

### 代码实现要点

- **视觉世界模型**：基于视频预测的 next-frame 预测模型，以当前帧 + 动作 → 未来帧
- **异常预测器**：异常检测模型，基于预测的未来帧预测异常概率
- **自适应阈值**：异常判定阈值随策略性能动态调整
- **人类在环**：异常触发时请求人类远程操作纠正，纠正数据用于策略微调

### 关键创新点

- **人机交互融合**：视觉世界模型用于监控性能并在必要时触发人类干预
- **自适应异常阈值**：随着机器人能力提升自动减少对人交互依赖
- **多任务集群学习**：面向多场景多任务的机器人集群部署
- **CoRL 2024**：发表于顶级机器人会议
