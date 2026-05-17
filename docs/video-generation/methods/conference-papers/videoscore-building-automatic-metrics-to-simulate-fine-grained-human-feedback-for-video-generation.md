---
title: "VIDEOSCORE: Building Automatic Metrics to Simulate Fine-grained Human Feedback for Video Generation"
arxiv: https://arxiv.org/abs/2406.15252
github: https://github.com/TIGER-AI-Lab/VideoScore/
website: https://tiger-ai-lab.github.io/VideoScore/
venue: EMNLP
year: 2024
---

# VIDEOSCORE: Building Automatic Metrics to Simulate Fine-grained Human Feedback for Video Generation

::: info 论文信息
- **Venue**: EMNLP (2024)
- **arXiv**: [https://arxiv.org/abs/2406.15252](https://arxiv.org/abs/2406.15252)
- **GitHub**: [https://github.com/TIGER-AI-Lab/VideoScore/](https://github.com/TIGER-AI-Lab/VideoScore/)
- **Website**: [https://tiger-ai-lab.github.io/VideoScore/](https://tiger-ai-lab.github.io/VideoScore/)
:::

## 学习笔记

### 核心贡献
- 提出 VideoScore：自动化视频评估指标，模拟细粒度人类反馈
- 训练 MLLM 作为视频评估器，输出多维度的质量评分
- 为视频奖励建模（reward modeling）提供了可扩展的自动标注方案

### 方法细节
- **评估模型**：基于 Video LLM，输入视频 + prompt，输出多维度评分
- **评估维度**：文本对齐、视觉质量、时序一致性、运动自然度、审美质量
- **训练数据**：利用人类标注的视频偏好数据微调 Video LLM
- **与人类判断的相关性**：在多个基准上评估，包括 VBench、EvalCrafter

### 关键发现
- VideoScore 与人类偏好的 Spearman 相关性达到 0.7+，显著优于传统自动指标
- 可作为 RLHF/RLAIF 中的奖励模型，替代昂贵的人工标注
- 局限性：对长视频（>30 秒）和复杂叙事场景的评估能力有限
- 与 VideoGen-RewardBench 互补：前者是评估指标，后者是评测评估指标的基准

### 方法归类
偏好优化 — 奖励建模
