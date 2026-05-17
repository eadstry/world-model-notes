---
title: "PhyBench: A Physical Commonsense Benchmark for Evaluating Text-to-Image Models"
design: "PhyBench"
arxiv: https://arxiv.org/abs/2406.11802
github: https://github.com/phybench-official/phybench
---

# PhyBench: A Physical Commonsense Benchmark for Evaluating Text-to-Image Models

::: info 论文信息
- **Design**: PhyBench
- **论文全称**: PhyBench: A Physical Commonsense Benchmark for Evaluating Text-to-Image Models
- **arXiv**: [https://arxiv.org/abs/2406.11802](https://arxiv.org/abs/2406.11802)
- **GitHub**: [https://github.com/phybench-official/phybench](https://github.com/phybench-official/phybench)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2406.11802](https://arxiv.org/abs/2406.11802)
- **GitHub**: [https://github.com/phybench-official/phybench](https://github.com/phybench-official/phybench)

## 简介
PhyBench 是一个全面的文本到图像（T2I）物理常识评估数据集。虽然T2I模型在从文本提示生成图像方面取得了实质性进展，但它们经常未能生成与物理常识一致的图像——这一能力对于世界模拟和日常任务的应用至关重要。PhyBench 包含700个提示词，涵盖4个主要类别（力学、光学、热力学和材料属性），涉及31个不同的物理场景。

研究团队评估了6个主流T2I模型，包括闭源模型DALL·E3和Gemini。研究得出三个关键发现：(1) 即使是先进模型也在除光学外的各种物理场景中频繁出错；(2) GPT-4o配合特定项目的评分指令能够有效评估模型对物理常识的理解，与人类评估高度一致；(3) 当前T2I模型主要关注文本到图像的翻译，缺乏对物理常识的深刻推理。

PhyBench 呼吁研究界超越将T2I模型仅视为图像生成工具，更多地关注其内在知识——特别是物理常识。

## 关键特征
- **数据规模**: 700个提示词，4个类别，31个物理场景
- **数据模态**: 文本提示 + 生成图像 + GPT-4o评估
- **主要指标**: 物理常识一致性（与人类评估对齐）
- **领域**: T2I物理常识

## 与世界模型的关系
PhyBench 从图像生成的角度补充了VWM的物理常识评估。虽然VWM通常关注视频中的时间动态，但PhyBench 表明即使是静态图像生成也存在严重的物理常识缺陷。这个发现对VWM有两个重要启示：(1) 物理常识不足可能从图像的静态理解层面就开始存在；(2) T2I模型可以作为研究物理常识获取的简化测试平台。

## 代表性用途
- PhyBench (Meng et al., 2024) - 原始论文，评估T2I模型的物理常识
- DALL·E3、Gemini等闭源模型的物理常识诊断
- GPT-4o在物理常识评估中的应用验证
