---
title: "VideoWorld: Exploring Knowledge Learning from Unlabeled Videos"
design: "VideoWorld"
arxiv: https://arxiv.org/abs/2501.09781
github: https://github.com/ByteDance-Seed/VideoWorld
---

# VideoWorld: Exploring Knowledge Learning from Unlabeled Videos

::: info 论文信息
- **Design**: VideoWorld
- **论文全称**: VideoWorld: Exploring Knowledge Learning from Unlabeled Videos
- **arXiv**: [https://arxiv.org/abs/2501.09781](https://arxiv.org/abs/2501.09781)
- **GitHub**: [https://github.com/ByteDance-Seed/VideoWorld](https://github.com/ByteDance-Seed/VideoWorld)
:::

## 论文信息

- **arXiv**: [2501.09781](https://arxiv.org/abs/2501.09781)
- **GitHub**: [https://github.com/ByteDance-Seed/VideoWorld](https://github.com/ByteDance-Seed/VideoWorld)
- **发表时间**: 2025年1月（CVPR 2025）
- **作者团队**: 字节跳动Seed团队（Zhongwei Ren, Jiashi Feng, Xiaojie Jin 等）

## 核心思想

VideoWorld探索了一个根本性问题：深度生成模型能否仅从视觉输入中学习复杂的知识？与当前以文本为基础的大语言模型（LLMs）不同，VideoWorld完全从无标签视频数据中学习世界知识，类似于婴儿通过观察环境来学习的范式。这项研究对"知识是否必须通过语言才能获取"这个基本假设提出了挑战。

VideoWorld的核心发现有两个：(1) 仅从视频进行训练就能提供足够的信息来学习知识，包括规则、推理和规划能力；(2) 视觉变化的表示（representation of visual change）是知识获取的关键。基于这一洞见，VideoWorld提出了**潜在动力学模型（Latent Dynamics Model, LDM）**——一个专门压缩和学习视觉变化的核心组件，而不仅仅是像素级重建。

最具说服力的实验是：VideoWorld仅用3亿参数的模型，在Video-GoBench围棋基准上达到了5段（5-dan）专业水平，而且没有使用任何搜索算法或强化学习中典型的奖励机制。在机器人控制任务中（CALVIN和RLBench），VideoWorld有效地学习了多种控制操作并跨环境泛化，接近oracle模型的性能。这项工作开创了从视觉数据中获取知识的新路径。

## 技术架构

### Vision Encoding（视觉编码）
VideoWorld是一个自回归视频生成模型，输入为原始视频帧序列。模型使用VQ-VAE风格的图像分词器将每一帧编码为离散token序列。视觉编码的目标不是完美重建像素，而是保留足够的信息来支持动力学学习——这与传统视频生成模型的"追求像素级重建质量"有本质区别。编码后的token序列作为后续LDM的输入。

### Knowledge Learning（知识学习）
核心创新是**潜在动力学模型（Latent Dynamics Model, LDM）**，它压缩帧间视觉变化为信息丰富的潜在编码。与直接预测下一帧像素不同，LDM学习在潜在空间中建模帧间的动力学变化。这种方法有两个优势：(1) 潜在空间维度远低于像素空间，学习更高效；(2) 显式建模"变化"而非"绝对状态"，使模型更关注因果关系和规律。LDM通过自回归next-token prediction在大量无标签视频数据上进行训练，隐式学习物理规则、逻辑推理和规划能力。在VideoWorld 2中进一步提出了解耦LDM（dLDM），将动作动力学与视觉外观解耦，实现了知识的跨场景迁移。

### Controllable Simulation（可控模拟）
VideoWorld的控制能力来源于学到的潜在动力学表示。在围棋场景中，模型通过自回归预测棋盘状态的变化（落子后的新棋盘）；在机器人场景中，模型根据初始观察和控制信号预测未来帧。不同于Genie的显式潜在动作模型，VideoWorld的"控制"更多体现在对世界状态变化规律的精确建模——理解"如果发生X变化，则会出现Y结果"的因果链条。在CALVIN基准上，模型通过理解控制指令与视觉变化之间的对应关系来执行长序列操作任务。

## 代码实现要点

- **完整开源**: 字节跳动Seed团队开源，Apache-2.0许可证，785+ Stars
- **双版本**: VideoWorld（CVPR 2025，基于LDM）和VideoWorld 2（聚焦可迁移知识，基于dLDM）
- **训练框架**: PyTorch，支持多GPU训练
- **关键组件**: 
  - VQ tokenizer（图像分词）
  - Latent Dynamics Model（核心动力学学习模块）
  - 自回归Transformer（视频生成主干）
- **评估基准**: Video-GoBench（围棋）、CALVIN（长序列机器人操作）、RLBench（机器人操作）
- **VideoWorld 2**: 解耦LDM实现，动作空间与视觉外观分离，迁移学习

## 关键创新点

1. **纯视觉知识学习**: 首次系统证明深度生成模型可以从纯视频数据（无文本、无奖励信号）中学习复杂的世界知识
2. **潜在动力学模型（LDM）**: 将视觉变化显式编码为潜在表示，实现高效的知识获取
3. **视觉变化是关键**: 揭示了"变化的表示"而非"静态重建"才是知识学习的核心
4. **零奖励围棋5段**: 300M参数模型即可达到专业级围棋水平，颠覆了需要搜索+奖励的传统AI范式
5. **通用世界知识**: 同一架构在围棋（逻辑推理）和机器人（物理操作）两个完全不同领域均表现出色

## 代表性结果

- Video-GoBench: 3亿参数模型达到5段专业水平，不依赖搜索算法或奖励机制
- CALVIN: 在长序列机器人操作任务中接近oracle模型性能
- RLBench: 有效学习多种控制操作，跨环境泛化能力强
- VideoWorld 2: 可迁移知识学习，dLDM将动作动力学与外观解耦，提升70%任务成功率
