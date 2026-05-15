---
title: "Learning Primitive Embodied World Models: Towards Scalable Robotic Learning"
design: "PEWM"
arxiv: https://arxiv.org/abs/2508.20840
github: https://github.com/qiaosun22/PrimitiveWorld
---

# PEWM: Learning Primitive Embodied World Models: Towards Scalable Robotic Learning

::: info 论文信息
- **Design**: PEWM
- **论文全称**: Learning Primitive Embodied World Models: Towards Scalable Robotic Learning
- **arXiv**: [https://arxiv.org/abs/2508.20840](https://arxiv.org/abs/2508.20840)
- **GitHub**: [https://github.com/qiaosun22/PrimitiveWorld](https://github.com/qiaosun22/PrimitiveWorld)
:::

## 核心思想

PEWM (Predictive Embodied World Model) 是提出的面向具身智能的预测性世界模型。核心创新是将世界模型设计为一个"预测-执行"统一框架：模型首先预测环境未来的视觉状态，然后在这个预测的基础上规划机器人的动作。PEWM 的特点是预测精细化——不仅预测整体场景演变，还细化到每个物体的位置、姿态和交互关系。

PEWM 的关键贡献是"预测-执行循环"：世界模型产生未来场景预测 → 策略评估预测场景中的机器人行为 → 如果行为了某个物体 → 世界模型重新预测物体被行为后的场景。这种闭环使 agent 能考虑"我的动作会如何改变世界"。

## 技术架构

**Vision Encoding（视觉编码）**：使用 segmentation aware encoder 提取物体级别的视觉特征。

**Knowledge Learning（知识学习）**：Diffusion-based World Model 学习物体级的场景动力学。以当前观测（多视角或单视角）为条件，去噪生成包含物体运动信息的未来帧。训练目标包含物体分割一致性和动作条件的一致性。

**Controllable Simulation（可控模拟）**：在生成的未来帧上提取物体 state（通过 segmentation + tracking），评估动作对物体的影响。实现了"预测→评估→再预测"的闭环。

## 代码实现要点

暂无开源代码。基于 Latent Diffusion Model + segmentation aware representation。在 Robosuite、MetaWorld 上评估。

## 关键创新点

1. **预测-执行闭环**：预测→评估→再预测的迭代框架
2. **物体级世界模型**：细化到物体位置和姿态的预测
3. **分割一致性**：确保物体在生成帧中保持分割稳定
4. **动作影响评估**：显式建模"动作如何改变物体"

## 代表性结果

在 Robosuite 操控任务中，PEWM 的物体运动预测精度（IoU over time）在 3 秒内保持在 75%+。预测-执行闭环使策略能更准确地计算"动作对物体状态的影响"，提升了操控成功率。
