---
title: "Doe-1: Closed-Loop Autonomous Driving with Large World Model"
design: "Doe-1"
arxiv: https://arxiv.org/abs/2412.09627
github: https://github.com/wzzheng/Doe
---

# Doe-1: Closed-Loop Autonomous Driving with Large World Model

::: info 论文信息
- **Design**: Doe-1
- **论文全称**: Doe-1: Closed-Loop Autonomous Driving with Large World Model
- **arXiv**: [https://arxiv.org/abs/2412.09627](https://arxiv.org/abs/2412.09627)
- **GitHub**: [https://github.com/wzzheng/Doe](https://github.com/wzzheng/Doe)
:::

## 学习笔记

### 核心思想

Doe-1 (Driving wOrld modEl) 是一个面向自动驾驶闭环框架的大型世界模型，由清华大学 Lu 课题组提出。现有端到端自动驾驶方法大多仍为开环（仅评估行为克隆精度），存在可扩展性弱、缺乏高阶交互和决策低效的问题。Doe-1 将自动驾驶统一为"下一个 token 生成"问题——使用多模态 tokens 完成感知、预测和规划三大任务：(1) 用自由形式文本（场景描述）进行感知；(2) 在 RGB 空间直接用图像 token 生成未来预测；(3) 使用位置感知 tokenizer 将动作编码为离散 token。然后训练一个多模态 Transformer 以端到端、统一的方式自回归生成感知、预测和规划 tokens。实验涵盖 VQA、动作条件视频生成和运动规划。

### 技术架构

**Vision Encoding（视觉编码）**：Doe-1 将多视图驾驶图像编码为视觉 token 序列。感知任务——使用自由形式文本 token 进行场景描述（如"前方红灯，左侧有行人"），由多模态 Transformer 的自回归文本生成能力完成。

**Knowledge Learning（知识学习）**：Doe-1 的训练遵循统一的 next-token 预测范式。三种 token 类型被混合输入 Transformer：(1) 图像 token（当前帧和未来预测帧的 VQVAE token）；(2) 文本 token（场景描述）；(3) 动作 token（通过位置感知 tokenizer 将轨迹坐标离散化）。Transformer 自回归地预测感知（文本 token → 描述场景）、预测（图像 token → 未来帧）和规划（动作 token → 轨迹）。这种统一 token 方式使三大任务共享知识。

**Controllable Simulation（可控仿真）**：Doe-1 实现了闭环形式的驾驶决策——模型输出规划轨迹（动作 token），然后解码为具体轨迹，这些轨迹反过来作为条件生成未来的视觉预测（图像 token），视觉预测又可以用于验证规划的合理性。多任务统一 token 范式使跨任务的协同成为可能。

### 代码实现要点

- **统一 token 化**：视觉（VQVAE 图像 token）+ 语言（文本 token）+ 动作（位置感知动作 token）
- **位置感知动作 tokenizer**：将连续轨迹坐标离散化为离散 token 序列
- **多模态自回归 Transformer**：单一模型同时完成感知-预测-规划
- **开源**：GitHub 提供代码

### 关键创新点

- **多模态统一 next-token 范式**：感知（文本）+ 预测（图像）+ 规划（动作）三合一
- **位置感知动作 tokenizer**：坐标空间的离散化编码
- **闭环框架**：超越行为克隆开环的端到端驾驶设计
- **同时期与 Owl-1 发布**：同一课题组的世界模型系列工作
