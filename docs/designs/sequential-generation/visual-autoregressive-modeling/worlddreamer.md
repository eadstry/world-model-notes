---
title: "WorldDreamer"
design: "Video GPT / Visual Autoregressive Model"
arxiv: "https://arxiv.org/abs/2401.09985"
github: ""
website: "https://world-dreamer.github.io/"
---

# WorldDreamer

## 论文信息

- **arXiv**: [2401.09985](https://arxiv.org/abs/2401.09985)
- **Website**: [https://world-dreamer.github.io/](https://world-dreamer.github.io/)
- **发表时间**: 2024年1月
- **作者团队**: 清华大学 & 北京邮电大学（Xiaofeng Wang, Jiwen Lu 等）

## 核心思想

WorldDreamer是首个面向通用世界物理和运动理解的世界模型，旨在弥合现有世界模型局限于特定场景（如游戏或驾驶）的不足。其核心理念是：受大语言模型成功的启发，将世界建模构建为无监督视觉序列建模挑战——通过将视觉输入映射为离散token并预测被mask的token来学习世界动力学。

WorldDreamer采用了masked token prediction（而非next-token prediction）作为核心学习范式，这使其能同时从过去和未来的视觉token中获得双向上下文信息。此外，模型融入了多模态提示（文本、图像等）以促进与世界模型的交互。实验表明，WorldDreamer能在自然场景和驾驶环境等多种场景中生成高质量视频，并支持文本到视频、图像到视频和视频编辑等多种任务。

## 技术架构

### Vision Encoding
采用VQ-VAE风格的视觉分词器将图像和视频帧编码为离散token。视觉输入被统一映射到codebook中的离散索引，形成标准化token序列。多帧视频形成3D token序列（空间×时间），掩码策略在时空维度上随机mask部分token。

### Knowledge Learning
核心学习范式是Masked Token Prediction：模型接收部分被mask的视觉token序列，通过双向Transformer预测被mask的token。与纯自回归（因果mask）不同，WorldDreamer可使用双向注意力，使模型能利用前后文信息进行预测。

### Controllable Simulation
WorldDreamer支持多种控制方式：文本到视频——通过文本提示控制视频内容；图像到视频——从初始帧出发生成未来帧序列；视频编辑——对已有视频进行条件修改。控制通过将条件信号编码为特殊token注入预测过程实现。

## 代码实现要点

暂无开源代码。

## 关键创新点

1. **通用世界模型**: 首个面向通用世界物理和运动理解的世界模型
2. **Masked Token Prediction**: 用masked prediction替代next-token prediction，获得双向上下文
3. **多模态提示**: 文本、图像等统一条件机制
4. **多任务能力**: 同一模型支持文本-视频、图像-视频、视频编辑

## 代表性结果

- 在自然场景和驾驶环境等多种场景中生成高质量视频
- 文本到视频、图像到视频、视频编辑等多种任务上展现多样性
- 能捕获动态元素（云、水、行人运动等通用世界动态）