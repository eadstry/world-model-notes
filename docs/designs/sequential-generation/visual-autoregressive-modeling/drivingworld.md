---
title: "Drivingworld: Constructing world model for autonomous driving via video GPT"
design: "Drivingworld"
arxiv: https://arxiv.org/abs/2412.19505
github: https://github.com/YvanYin/DrivingWorld
---

# Drivingworld: Constructing world model for autonomous driving via video GPT

::: info 论文信息
- **Design**: Drivingworld
- **论文全称**: Drivingworld: Constructing world model for autonomous driving via video GPT
- **arXiv**: [https://arxiv.org/abs/2412.19505](https://arxiv.org/abs/2412.19505)
- **GitHub**: [https://github.com/YvanYin/DrivingWorld](https://github.com/YvanYin/DrivingWorld)
:::

## 论文信息

- **arXiv**: [2412.19505](https://arxiv.org/abs/2412.19505)
- **GitHub**: [https://github.com/YvanYin/DrivingWorld](https://github.com/YvanYin/DrivingWorld)
- **发表时间**: 2024年12月
- **作者团队**: 香港科技大学 & 地平线机器人（Xiaotao Hu, Wei Yin, Xiaoxiao Long, Ping Tan 等）

## 核心思想

DrivingWorld是一个面向自动驾驶的GPT风格世界模型，能够进行自回归视频和自车状态（ego state）预测。其核心设计理念是：传统的GPT框架是为1D序列（如文本）设计的，缺乏有效建模视频生成所必需的空间和时间动态的能力。DrivingWorld通过提出多种时空融合机制（spatial-temporal fusion mechanisms）来解决这个问题，使GPT风格的架构能够有效建模空间和时间两个维度。

DrivingWorld提出了下一状态预测（next-state prediction）策略来建模连续帧之间的时序一致性，以及下一token预测（next-token prediction）策略来捕获每帧内部的空间信息。这种双层次建模的视角创新地将视频生成分解为时间维度的状态转移和空间维度的图像生成。

为解决长时间生成中的漂移问题，DrivingWorld还提出了新颖的掩码策略（masking strategy）和重加权策略（reweighting strategy）用于token预测，以实现精确控制并缓解长期漂移。在实验中，DrivingWorld能够生成超过40秒的高保真、一致性强的驾驶场景视频，比现有最先进的驾驶世界模型长2倍以上。

## 技术架构

### Vision Encoding（视觉编码）
DrivingWorld使用Video VQ-VAE进行视觉编码，将驾驶场景的每一帧图像压缩为离散token网格。通过空间下采样（如将256×256图像压缩为16×16的token网格）来降低计算负担。分词器将连续的视频帧转化为离散的token序列，使得自回归Transformer可以以next-token prediction的方式进行视频生成。预训练好的VQ-VAE权重在HuggingFace上发布。

### Knowledge Learning（知识学习）
核心是基于GPT架构的自回归世界模型。关键创新在于双重预测策略：(1) Next-State Prediction：在时序维度上，模型学习预测下一帧的整体状态，建模驾驶场景的动态演变（车辆移动、场景变化等）；(2) Next-Token Prediction：在空间维度上，模型学习预测帧内下一个token，建模图像的空间结构。为了处理长期漂移问题，提出了掩码策略（有选择地mask某些token，使模型学会从部分观察中推断完整状态）和重加权策略（对不同位置/类型的token赋予不同预测权重，强调对驾驶安全更关键的token）。模型同时预测视觉token和自车状态。

### Controllable Simulation（可控模拟）
控制通过自车状态（ego pose）条件实现。推理时，提供初始帧序列（如前15帧作为上下文）和目标自车轨迹（yaw角度和位置），模型自回归地生成未来的视频帧和自车状态。支持多种生成模式：路线变更生成（Change Road Demo）、长时生成（Long-term Demo，超过40秒）、个性化生成（通过修改条件yaw和pose参数）。推理使用top-k/top-p采样策略。

## 代码实现要点

- **开源**: 香港科技大学 & 地平线机器人联合开源，MIT许可证，244+ Stars
- **模型发布**: HuggingFace上提供Video VQ-VAE分词器和World Model权重
- **当前状态**: 已发布推理代码和快速入门指南，训练代码待发布
- **关键组件**: Video VQ-VAE（分词器）、World Model（自回归GPT架构）、路线变更/长时生成demo脚本
- **数据来源**: NuPlan自动驾驶数据集
- **架构选择**: 基于LlamaGen和LLaMA 3.1的GPT风格架构

## 关键创新点

1. **双层次预测策略**: Next-state（时序）+ Next-token（空间）双维度建模
2. **时空融合机制**: 使GPT架构有效处理视频的时空特性，克服1D模型的局限
3. **抗漂移技术**: 掩码策略和重加权策略显著缓解长期生成的质量退化
4. **超长视频生成**: 40秒+视频长度，是现有SOTA的2倍以上
5. **自车状态联合预测**: 视觉和控制的统一建模

## 代表性结果

- 自回归生成超过40秒的高保真驾驶场景视频（SOTA的2倍+）
- 可控生成：预测的自车轨迹与给定条件高度一致
- 视觉质量（FVD等指标）显著优于先前的驾驶世界模型
- 支持路线变更、长时预测、个性化驾驶策略等多种生成模式
