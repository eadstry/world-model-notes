---
title: "Visuomotor Grasping with World Models for Surgical Robots"
design: "GASv2"
arxiv: https://arxiv.org/abs/2508.11200
---

# GASv2: Visuomotor Grasping with World Models for Surgical Robots

::: info 论文信息
- **Design**: GASv2
- **论文全称**: Visuomotor Grasping with World Models for Surgical Robots
- **arXiv**: [https://arxiv.org/abs/2508.11200](https://arxiv.org/abs/2508.11200)
:::

## 核心思想

GASV2 (Generative Adversarial Simulation V2) 是 Waabi 提出的用于自动驾驶仿真的生成式世界模型。核心创新是使用生成对抗网络（GAN）来生成驾驶场景的未来演变，能够模拟其他交通参与者（车辆、行人、骑行者）的合理行为。GASV2 被设计用于自动驾驶系统的闭环仿真评估——生成有挑战性且逼真的 traffic agent 行为来压力测试自动驾驶系统。

GASV2 的关键贡献是"交互式对抗生成"：生成的 traffic agents 不仅行为逼真，而且会根据被测试的自动驾驶车辆的行为做出条件性反应——即 traffic agents "看到"了自动驾驶车的决策并相应调整行为，形成自然的多方交互。

## 技术架构

**Vision Encoding（视觉编码）**：使用 BEV 表示作为环境状态，包含自车位置、traffic agents、地图、交通信号等。通过 GNN 或 Transformer 处理 agent 间的交互。

**Knowledge Learning（知识学习）**：GAN 架构：Generator 产生 traffic agents 的未来轨迹和行为，Discriminator 区分生成的行为和真实数据中的行为（来自大规模驾驶日志）。Generator 是条件 GAN——以历史场景和自车控制为条件。关键：反事实生成——Generator 对于"如果自车这样走"的情况产生反应。

**Controllable Simulation（可控模拟）**：给定 scene context（自车轨迹、当前场景），Generator 采样多种可能的 traffic agent 未来行为，Discriminator 评估行为逼真度。Generator 可被调适为产生"对抗性"行为（对自车安全造成最大挑战）。

## 代码实现要点

代码未开源（Waabi 公司内部）。基于 GAN 架构。在 nuScenes、Waymo 等大规模驾驶数据集上训练和评估。

## 关键创新点

1. **GAN-based 驾驶世界模型**：对抗训练生成逼真的 traffic agent 行为
2. **条件性反应生成**：traffic agents 对自车行为的条件性响应
3. **反事实仿真**：对"假设自车这样做"的 case 生成反应
4. **对抗性场景生成**：产生 safety-critical 的测试场景

## 代表性结果

在 Waymo Open Dataset 的闭环仿真中，GASV2 生成的 traffic agent 行为在逼真度评分上（如 displacement error 和碰撞率分布）显著优于基于规则和基于简单 ML 的方法。对抗性生成模式能发现自动驾驶系统中规则型仿真检测不到的 safety-edge cases。
