---
title: "Hierarchical World Models as Visual Whole-Body Humanoid Controllers"
design: "Puppeteer"
arxiv: https://arxiv.org/abs/2405.18418
github: https://github.com/nicklashansen/puppeteer
---

# Puppeteer: Hierarchical World Models as Visual Whole-Body Humanoid Controllers

::: info 论文信息
- **Design**: Puppeteer
- **论文全称**: Hierarchical World Models as Visual Whole-Body Humanoid Controllers
- **arXiv**: [https://arxiv.org/abs/2405.18418](https://arxiv.org/abs/2405.18418)
- **GitHub**: [https://github.com/nicklashansen/puppeteer](https://github.com/nicklashansen/puppeteer)
:::

## 核心思想

Puppeteer 是 Nicklas Hansen 等人提出的层级世界模型仿人机器人控制器。核心挑战是：仿人机器人具有极高自由度的全身运动空间，让 agent 直接从像素学习控制全身关节几乎不可能。Puppeteer 使用层级世界模型——高层世界模型规划低级运动目标（如"右手移动到位置 X"），低层控制器执行精细运动，实现从视觉到全身运动控制的端到端学习。

Puppeteer 的关键设计是"骨骼感知"：在 latent space 中同时表示机器人本体状态和环境状态，使得高层世界模型能理解"我的身体在环境中处于什么姿态"并做出相应规划。

## 技术架构

**Vision Encoding（视觉编码）**：使用 RGB 相机输入 + 本体感知（关节角度、IMU），两者通过多模态融合进入统一的 latent state。

**Knowledge Learning（知识学习）**：层级世界模型：高层 RSSM 学习在粗粒度 latent space 中规划身体部位的运动目标（如 hand position targets），低层控制器是预训练的全身运动控制策略（从运动捕捉数据训练）。高层的世界模型预测视觉和本体感知的未来状态。

**Controllable Simulation（可控模拟）**：高层世界模型在 imagination 中产生"骨骼 puppetry 指令"（各身体部位的目标位置），低层控制器执行这些指令实现实际运动。

## 代码实现要点

代码开源在 [nicklashansen/puppeteer](https://github.com/nicklashansen/puppeteer)。基于 TD-MPC2 架构 + 全身运动控制层。在 Isaac Gym 仿人机器人环境中评估。

## 关键创新点

1. **骨骼感知世界模型**：在 latent space 中建模身体和环境的交互
2. **层级全身控制**：高层规划 + 低层执行的分层架构
3. **从像素到全身**：仅从视觉输入学习控制高自由度仿人机器人
4. **运动捕捉先验**：低层控制器利用人类运动数据

## 代表性结果

在仿人机器人全身操控任务（站立、行走、搬运物体）中，Puppeteer 从仅 100k 环境步的视觉数据中学会协调全身运动。相比平坦的分层方法（如直接使用 DreamerV3），Puppeteer 的运动成功率提升 3 倍。
