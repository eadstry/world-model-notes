---
title: "方法综述"
---

# 视频生成后训练方法

## 方法分类

### 1. 监督微调 (SFT)
利用高质量标注数据对预训练视频生成模型进行细粒度调整。典型应用包括：主体驱动生成、运动控制、相机控制、视频编辑等。

### 2. 自训练与蒸馏
通过模型生成的合成数据进行自我改进（Self-Training），或将大模型/多步模型的知识蒸馏到小模型/少步模型（Distillation），以提升效率和质量。

### 3. 偏好优化
将人类偏好信号引入训练过程，包括：
- **RLHF / RLAIF**：基于强化学习的人类/AI 反馈
- **DPO（Direct Preference Optimization）**：直接偏好优化，无需显式奖励模型
- **GRPO（Group Relative Policy Optimization）**：群体相对策略优化

### 4. 推理时对齐
不更新模型参数，在推理阶段通过引导信号、约束条件、或 external memory 实现可控生成。

## 子分类

- [Conference Papers](./conference-papers/) — 已被顶级会议/期刊录用的论文
- [arXiv Papers](./arxiv-papers/) — arXiv 预印本论文
