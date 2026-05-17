---
title: "Cosmos-Transfer1: 自适应多模态控制的条件世界生成"
design: "Cosmos-Transfer1"
arxiv: https://arxiv.org/abs/2503.14492
github: https://github.com/nvidia-cosmos/cosmos-transfer1
---

# Cosmos-Transfer1: 自适应多模态控制的条件世界生成

::: info 资料入口
- **论文**: [Cosmos-Transfer1: Conditional world generation with adaptive multimodal control](https://arxiv.org/abs/2503.14492)
- **GitHub**: [nvidia-cosmos/cosmos-transfer1](https://github.com/nvidia-cosmos/cosmos-transfer1)
:::

## 核心定位

Cosmos-Transfer1 是 Cosmos 平台早期的条件世界生成模型，目标是把世界基础模型从开放式视频生成推进到 **可控世界转换**。它使用多种空间条件输入，例如 segmentation、depth、edge、LiDAR、HD map 等，引导模型生成符合结构约束的世界模拟视频。

它解决的是 Physical AI 中的一个关键问题：仿真数据有几何和标签优势，但视觉真实感不足；真实数据视觉真实，但采集和标注昂贵。Transfer1 试图在两者之间建立桥梁，用可控生成把结构化世界观测转换为更真实、更丰富的视觉样本。

## 方法机制

### 多模态控制

Transfer1 的核心是多模态控制分支。不同控制输入承担不同约束：

- segmentation 约束语义布局；
- depth 约束 3D 几何；
- edge 约束轮廓边界；
- LiDAR / HD map 约束自动驾驶场景中的空间结构；
- mask 或区域权重控制不同位置的条件强度。

这种设计让模型可以在不同空间位置使用不同控制信号。例如道路区域更依赖 segmentation，车辆边界更依赖 edge，整体透视关系更依赖 depth。

### 自适应控制权重

Transfer1 的重要创新是自适应多模态控制：不是把所有控制信号简单拼接，而是允许模型或配置在空间和时间上调整不同控制模态的强弱。这样可以避免某一种控制信号过强导致画面僵硬，也可以避免控制过弱导致结构漂移。

### World-to-World Transfer

Transfer1 的任务可以理解为 World-to-World Transfer：从一种世界表达转到另一种世界表达。

典型例子：

- 仿真 segmentation/depth -> 真实感 RGB；
- 自动驾驶结构条件 -> 多样化驾驶视频；
- 机器人仿真视角 -> 更接近真实相机的训练视频；
- 低真实感渲染 -> 高真实感场景。

## 应用价值

### 机器人 Sim2Real

机器人仿真可以提供精确动作、状态、碰撞和物体标签，但渲染域与真实相机差异大。Transfer1 可把仿真输出转换成真实感视觉数据，用于训练视觉策略或感知模块。

### 自动驾驶数据增强

自动驾驶场景需要保持车道、道路、车辆和交通参与者几何一致。Transfer1 通过 depth、segmentation、LiDAR 和 HD map 条件约束生成，使场景转换更适合下游感知和规划训练。

### 可控长视频生成

在自回归或滑动窗口设置中，Transfer1 可以用前一段输出作为下一段条件，生成更长的视频序列。但长时一致性仍然依赖控制信号质量和误差抑制策略。

## 与 Cosmos-Transfer2.5 的关系

Transfer2.5 是 Transfer1 的工程化升级，而不是完全不同的路线。

| 维度 | Transfer1 | Transfer2.5 |
|---|---|---|
| 平台位置 | Cosmos 早期条件世界生成 | Cosmos 2.5 生态中的条件转换组件 |
| 基座 | 早期 Cosmos WFM | Predict2.5 |
| 控制方式 | 多模态控制与自适应权重 | JSON 参数化 multi-control，更适合工程调用 |
| 参数规模 | 以较大模型为主 | 2B general/auto 路线降低门槛 |
| 应用变体 | 通用、自动驾驶、上采样等 | general、auto、distilled edge 等 |
| 部署方向 | 展示实时世界生成潜力 | 更明确支持 distilled edge 和性能对比 |

理解 Transfer1 的价值在于看到 Cosmos 路线的演化：先证明多模态条件世界生成可行，再在 Transfer2.5 中把它做成更统一、更轻量、更易调用的工具链。

## 局限

- 多控制信号的质量直接决定生成上限；
- 不同模态之间可能冲突，例如 depth 与 segmentation 不对齐；
- 长视频生成容易积累误差；
- 合成数据是否真正提升下游模型，需要任务级实验验证；
- 控制强度需要调参，过强会降低真实感，过弱会破坏结构。

## 相关笔记

- [Cosmos 平台总览](cosmos)
- [Cosmos-Predict2.5](cosmos-predict2-5)
- [Cosmos-Transfer2.5](cosmos-transfer2-5)
- [Cosmos-Drive-Dreams](/world-models/applications/cosmos-drive-dreams)
