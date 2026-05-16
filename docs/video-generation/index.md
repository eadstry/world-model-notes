---
title: "视频生成后训练与对齐"
---

# 视频生成后训练与对齐

::: tip 综述
本分类基于综述论文 **"Video Generation Models: A Survey of Post-Training and Alignment"** (Li et al., 2026)，系统梳理视频生成模型的后训练与对齐技术，涵盖监督微调（SFT）、自训练与蒸馏、基于偏好的优化（Preference Optimization）、推理时对齐（Inference-Time Alignment）四大方法范式。
:::

## 后训练方法分类

视频生成后训练的核心目标是将预训练的视频生成模型与人类意图、物理约束和部署需求对齐。主要分为四大类：

1. **监督微调（Supervised Fine-Tuning）** — 使用高质量标注数据对预训练模型进行领域适配
2. **自训练与蒸馏（Self-Training & Distillation）** — 利用模型自身或教师模型生成数据进行迭代改进
3. **偏好优化（Preference Optimization）** — 基于人类偏好反馈（RLHF / DPO 等）优化生成质量
4. **推理时对齐（Inference-Time Alignment）** — 无需训练，在推理阶段通过引导/约束实现对齐

## 子分类导航

- **[Methods](./methods/)** — 方法论文，按来源分为会议论文和 arXiv 预印本
- **[Datasets](./datasets/)** — 视频生成后训练相关数据集
- **[Benchmarks](./benchmarks/)** — 视频生成评测基准
