---
title: "UniVid: Unifying Vision Tasks with Pre-trained Video Generation Models"
arxiv: https://arxiv.org/abs/2509.21760v1
github: https://github.com/CUC-MIPG/UniVid
venue: WACV
year: 2026
---

# UniVid: Unifying Vision Tasks with Pre-trained Video Generation Models

::: info 论文信息
- **Venue**: WACV (2026)
- **arXiv**: [https://arxiv.org/abs/2509.21760v1](https://arxiv.org/abs/2509.21760v1)
- **GitHub**: [https://github.com/CUC-MIPG/UniVid](https://github.com/CUC-MIPG/UniVid)
:::

## 学习笔记

### 核心贡献
- 提出 UniVid 框架，验证预训练视频生成模型可作为统一的视觉基础模型适配多样图像与视频任务
- 将各类视觉任务表示为视觉句子（visual sentences），上下文序列自然定义任务类型和输出模态
- 仅需在纯自然视频数据上微调，即可泛化到跨模态（图像+视频）和跨来源（自然+标注数据）任务

### 方法细节
- 基于预训练的视频扩散 Transformer，将任务输入和输出组织为连续的视觉 token 序列
- 上下文序列中同时包含源帧和目标帧，模型通过自回归生成输出帧，无需任务特定的头部或模块
- 理解任务（如分割、检测）与生成任务（如视频补全、预测）之间仅通过反转视觉句子的顺序进行切换
- 训练仅在纯自然视频数据上进行，不依赖多来源标注数据预训练

### 关键发现
- 视频生成模型预训练过程中习得的时序依赖建模能力可直接迁移到其他视觉任务
- 跨模态推理中，将图像视为单帧视频输入，模型可无缝处理图像和视频混合的上下文
- 视觉句子的方向天然区分了理解（从结果到输入）和生成（从输入到结果）两类任务范式
- UniVid 的泛化能力超越了 LVM，不要求多来源预训练即可适应未见过的任务和数据分布

### 方法归类
- **范式**: 视觉句子 + 视频生成模型作为统一基础模型
- **关键技术**: 视频扩散 Transformer、视觉句子序列化、反转序列切换任务模式
- **适用场景**: 统一的视觉理解和生成框架、视频分割、目标检测、视频补全、视频预测
