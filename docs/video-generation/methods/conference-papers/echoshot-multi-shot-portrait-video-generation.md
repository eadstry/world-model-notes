---
title: "EchoShot: Multi-Shot Portrait Video Generation"
arxiv: https://arxiv.org/abs/2506.15838
github: https://github.com/JoHnneyWang/EchoShot
website: https://johnneywang.github.io/EchoShot-webpage/
venue: NeurIPS
year: 2025
---

# EchoShot: Multi-Shot Portrait Video Generation

::: info 论文信息
- **Venue**: NeurIPS (2025)
- **arXiv**: [https://arxiv.org/abs/2506.15838](https://arxiv.org/abs/2506.15838)
- **GitHub**: [https://github.com/JoHnneyWang/EchoShot](https://github.com/JoHnneyWang/EchoShot)
- **Website**: [https://johnneywang.github.io/EchoShot-webpage/](https://johnneywang.github.io/EchoShot-webpage/)
:::

## 学习笔记

### 核心贡献
- 首次提出原生多镜头（multi-shot）人像视频生成框架 EchoShot，突破现有管线仅支持单镜头生成的局限，在保持身份一致性的同时支持跨镜头的灵活内容控制。
- 设计了 shot-aware 位置编码机制，在视频 DiT 架构中注入镜头感知信息，建模跨镜头间的视觉变化与文本描述的对应关系，无需额外计算开销即可直接在多镜头数据上训练。

### 方法细节
- Shot-aware 位置编码嵌入到 DiT 的注意力层中，为不同镜头赋予可区分的时序位置信号，使模型能够感知镜头边界并学习跨镜头的身份-内容对应。
- 构建了 PortraitGala 数据集：大规模、高保真的人像视频数据集，具备跨镜头身份一致性和细粒度文本标注（面部属性、服饰、动态动作等），为多镜头训练提供数据基础。
- 框架扩展支持基于参考图像的个性化多镜头生成，用户可通过单张参考人像驱动多个镜头的肖像视频合成。
- 支持无限镜头数量的长视频合成，通过级联式镜头生成策略实现任意长度的多镜头人像视频。
- 整个方案以基础视频扩散模型为底座，shot-aware 编码作为即插即用模块，原生支持多镜头训练而无需引入额外网络分支。

### 关键发现
- 简单的 shot-aware 位置编码即可在 DiT 架构中有效捕获跨镜头差异，相比之下引入额外控制网络或注意力分支反而会破坏基础模型的先验分布。
- PortraitGala 数据集的细粒度标注（面部属性、服饰、动作）对提升模型在属性级别的可控性至关重要，仅依赖粗粒度文本描述会显著降低跨镜头人像编辑的精度。

### 方法归类
- 属于人像视频生成中的多镜头一致性生成方向，聚焦于跨镜头的身份保持和属性级内容可控性，区别于仅处理单镜头的主体定制方法。
- 方法论上属于基于位置编码的时序/镜头感知建模范式，通过轻量级的序列位置信号注入实现多镜头扩展，可作为通用多镜头视频建模的基础框架。
