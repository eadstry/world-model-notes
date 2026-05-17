---
title: "VideoVerse: How Far is Your T2V Generator from a World Model?"
design: "VideoVerse"
arxiv: https://arxiv.org/abs/2510.08398
github: https://github.com/Zeqing-Wang/VideoVerse
---

# VideoVerse: How Far is Your T2V Generator from a World Model?

::: info 论文信息
- **Design**: VideoVerse
- **论文全称**: VideoVerse: How Far is Your T2V Generator from a World Model?
- **arXiv**: [https://arxiv.org/abs/2510.08398](https://arxiv.org/abs/2510.08398)
- **GitHub**: [https://github.com/Zeqing-Wang/VideoVerse](https://github.com/Zeqing-Wang/VideoVerse)
:::

## 数据集/基准信息
- **arXiv**: [https://arxiv.org/abs/2510.08398](https://arxiv.org/abs/2510.08398)

## 简介
VideoVerse 是一个全面的基准测试，专注于评估当前T2V模型是否具备理解复杂时间因果关系和世界知识以合成视频的能力。随着T2V生成技术的快速进步，训练模型正在获得更多的世界模型能力，使得现有基准越来越不足以评估SOTA T2V模型。

VideoVerse 从三个角度解决了现有基准的不足：(1) 当前评估维度（如逐帧美学质量和时间一致性）已无法区分SOTA T2V模型；(2) 事件级别的时间因果关系——视频区别于其他模态的基本属性——仍未被充分探索；(3) 现有基准缺乏对世界知识的系统评估，而这是构建世界模型的核心能力。

VideoVerse 从多个领域收集代表性视频并提取具有内在时间因果关系的事件级描述，然后由独立标注者将其改写为T2V提示词。每个提示词设计了十个评估维度，覆盖动态和静态属性，最终产生300个提示词、815个事件和793个评估问题。通过使用现代视觉语言模型开发了与人类偏好对齐的基于QA的评估流程，系统地对比了领先的开源和闭源T2V系统。

## 关键特征
- **数据规模**: 300个提示词、815个事件、793个评估问题、10个评估维度
- **数据模态**: 视频 + 事件级描述 + QA评估
- **主要指标**: 时间因果关系、世界知识、QA准确率
- **领域**: T2V世界模型能力评估

## 与世界模型的关系
VideoVerse 通过将评估焦点从像素级质量转移到事件级的因果推理，为VWM提供了更具判别力的测试方案。其核心贡献是量化T2V模型"理解复杂时间因果关系和世界知识"的能力——这正是VWM区别于传统视频生成器的关键特征。793个评估问题的大规模QA格式使评估既有系统性又具有良好的可解释性。

## 代表性用途
- VideoVerse (Wang et al., 2025) - 原始论文，评估T2V模型的世界知识
- 开源与闭源T2V系统的世界模型能力比较
- 基于VLM的QA评估流程
